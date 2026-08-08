import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { dataDir, loadGroup, normalizeDomain } from './lib/registry-files.mjs';

const DAY_MS = 86_400_000;
const DEFAULT_TIMEOUT_MS = 8_000;
const DEFAULT_CONCURRENCY = 8;

function canonicalDigest() {
  const hash = crypto.createHash('sha256');
  for (const file of fs.readdirSync(dataDir).filter((name) => name.endsWith('.json')).sort()) {
    hash.update(file);
    hash.update('\0');
    hash.update(fs.readFileSync(path.join(dataDir, file)));
    hash.update('\0');
  }
  return hash.digest('hex');
}

function daysSince(dateValue, now) {
  if (!dateValue) return null;
  const parsed = Date.parse(dateValue);
  if (!Number.isFinite(parsed)) return null;
  return Math.max(0, Math.floor((now.getTime() - parsed) / DAY_MS));
}

function finding(platform, severity, category, summary, details = {}) {
  return {
    platform_id: platform?.id ?? null,
    platform: platform?.canonical_name ?? null,
    severity,
    category,
    summary,
    ...details,
  };
}

function uniqueUrls(platforms, evidence, outcomes) {
  const rows = [];
  for (const platform of platforms) {
    if (platform.official_url_original) {
      rows.push({ platform, kind: 'official_url', url: platform.official_url_original });
    }
  }
  for (const item of evidence) {
    if (item.url) {
      const platform = platforms.find((p) => p.id === item.platform_id);
      rows.push({ platform, kind: 'evidence_url', url: item.url, evidence_id: item.id });
    }
  }
  for (const outcome of outcomes) {
    if (outcome.claim_process_url) {
      const platform = platforms.find((p) => p.id === outcome.platform_id);
      rows.push({ platform, kind: 'claim_process_url', url: outcome.claim_process_url });
    }
  }
  const seen = new Set();
  return rows.filter((row) => {
    const key = `${row.platform?.id ?? 'unknown'}\0${row.kind}\0${row.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function probeUrl(row, fetchImpl, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    let response;
    try {
      response = await fetchImpl(row.url, {
        method: 'HEAD',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'user-agent': 'CYA-existing-record-monitor/1.0' },
      });
    } catch {
      response = await fetchImpl(row.url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'user-agent': 'CYA-existing-record-monitor/1.0' },
      });
    }
    return {
      ...row,
      status: response.status,
      ok: response.status >= 200 && response.status < 400,
      final_url: response.url || row.url,
      error: null,
    };
  } catch (error) {
    return {
      ...row,
      status: null,
      ok: false,
      final_url: null,
      error: error?.name === 'AbortError' ? 'timeout' : String(error?.message ?? error),
    };
  } finally {
    clearTimeout(timer);
  }
}

async function mapConcurrent(items, limit, task) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (true) {
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      results[index] = await task(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

export async function monitorRecords({
  platforms,
  events,
  evidence,
  outcomes,
  now = new Date(),
  network = false,
  fetchImpl = globalThis.fetch,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  concurrency = DEFAULT_CONCURRENCY,
}) {
  const findings = [];
  const evidenceByPlatform = new Map();
  for (const item of evidence) {
    evidenceByPlatform.set(item.platform_id, (evidenceByPlatform.get(item.platform_id) ?? 0) + 1);
  }
  const eventsByPlatform = new Map();
  for (const item of events) {
    eventsByPlatform.set(item.platform_id, (eventsByPlatform.get(item.platform_id) ?? 0) + 1);
  }
  const outcomeByPlatform = new Map(outcomes.map((item) => [item.platform_id, item]));

  for (const platform of platforms) {
    const age = daysSince(platform.last_verified_at, now);
    if (age === null) {
      findings.push(finding(platform, 'high', 'missing_verification_date', 'Platform has no parseable last_verified_at.'));
    } else if (age > 365) {
      findings.push(finding(platform, 'high', 'stale_verification', `Platform verification is ${age} days old.`, { age_days: age }));
    } else if (age > 180) {
      findings.push(finding(platform, 'medium', 'stale_verification', `Platform verification is ${age} days old.`, { age_days: age }));
    }

    const evidenceCount = evidenceByPlatform.get(platform.id) ?? 0;
    if (evidenceCount < 2) {
      findings.push(finding(platform, 'high', 'thin_evidence', `Platform has only ${evidenceCount} evidence record(s).`, { evidence_count: evidenceCount }));
    } else if (evidenceCount < 3) {
      findings.push(finding(platform, 'medium', 'thin_evidence', `Platform has only ${evidenceCount} evidence records.`, { evidence_count: evidenceCount }));
    }

    if ((eventsByPlatform.get(platform.id) ?? 0) === 0) {
      findings.push(finding(platform, 'high', 'missing_event_history', 'Platform has no event records.'));
    }

    const outcome = outcomeByPlatform.get(platform.id);
    if (outcome?.outcome_status === 'claims_ongoing' && !outcome.claim_process_url) {
      findings.push(finding(platform, 'medium', 'missing_claim_process_url', 'Claims are ongoing but no claim_process_url is recorded.'));
    }
  }

  let probes = [];
  if (network) {
    if (typeof fetchImpl !== 'function') throw new Error('Network mode requires fetch.');
    const rows = uniqueUrls(platforms, evidence, outcomes);
    probes = await mapConcurrent(rows, concurrency, (row) => probeUrl(row, fetchImpl, timeoutMs));
    for (const probe of probes) {
      if (probe.ok) {
        if (probe.kind === 'official_url') {
          const original = normalizeDomain(probe.url);
          const finalDomain = normalizeDomain(probe.final_url);
          if (original && finalDomain && original !== finalDomain) {
            findings.push(finding(
              probe.platform,
              'medium',
              'official_domain_redirect_changed',
              `Official URL redirects from ${original} to ${finalDomain}.`,
              { url: probe.url, final_url: probe.final_url, http_status: probe.status },
            ));
          }
        }
        continue;
      }

      if (probe.status === 403 || probe.status === 429) {
        findings.push(finding(probe.platform, 'low', 'url_probe_blocked', `${probe.kind} returned HTTP ${probe.status}.`, {
          url: probe.url, evidence_id: probe.evidence_id ?? null, http_status: probe.status,
        }));
      } else if (probe.status === 404 || probe.status === 410) {
        findings.push(finding(probe.platform, 'high', 'url_dead', `${probe.kind} returned HTTP ${probe.status}.`, {
          url: probe.url, evidence_id: probe.evidence_id ?? null, http_status: probe.status,
        }));
      } else {
        findings.push(finding(probe.platform, 'medium', 'url_unreachable', `${probe.kind} could not be verified.`, {
          url: probe.url, evidence_id: probe.evidence_id ?? null, http_status: probe.status, error: probe.error,
        }));
      }
    }
  }

  const severityOrder = { high: 0, medium: 1, low: 2 };
  findings.sort((a, b) => (severityOrder[a.severity] - severityOrder[b.severity]) || String(a.platform_id).localeCompare(String(b.platform_id)) || a.category.localeCompare(b.category));
  const severity = { high: 0, medium: 0, low: 0 };
  for (const item of findings) severity[item.severity] += 1;

  return {
    generated_at: now.toISOString(),
    mode: network ? 'network' : 'offline',
    canonical_counts: {
      platforms: platforms.length,
      events: events.length,
      evidence: evidence.length,
      outcomes: outcomes.length,
    },
    probes: {
      attempted: probes.length,
      succeeded: probes.filter((item) => item.ok).length,
      failed: probes.filter((item) => !item.ok).length,
    },
    findings,
    summary: {
      findings: findings.length,
      ...severity,
    },
  };
}

function markdown(report) {
  const lines = [
    '# CYA Existing-record Monitoring Report',
    '',
    `Generated: ${report.generated_at}`,
    `Mode: ${report.mode}`,
    '',
    '## Summary',
    '',
    `- Platforms: ${report.canonical_counts.platforms}`,
    `- Events: ${report.canonical_counts.events}`,
    `- Evidence: ${report.canonical_counts.evidence}`,
    `- Outcomes: ${report.canonical_counts.outcomes}`,
    `- Findings: ${report.summary.findings} (high ${report.summary.high}, medium ${report.summary.medium}, low ${report.summary.low})`,
    `- URL probes: ${report.probes.attempted} attempted / ${report.probes.succeeded} succeeded / ${report.probes.failed} failed`,
    '',
    '## Findings',
    '',
  ];
  if (!report.findings.length) lines.push('No monitoring findings.');
  for (const item of report.findings) {
    lines.push(`- **${item.severity.toUpperCase()}** \`${item.category}\` — ${item.platform ?? 'unknown'} (${item.platform_id ?? 'n/a'}): ${item.summary}`);
  }
  lines.push('', '## Safety', '', '- This report is review-only.', '- No canonical status, failure reason, customer outcome, recovery rate, event, evidence or URL field was changed automatically.', '');
  return lines.join('\n');
}

async function main() {
  const network = process.argv.includes('--network') || process.env.CYA_MONITOR_NETWORK === '1';
  const outputDir = path.resolve(process.env.CYA_MONITOR_OUTPUT_DIR || 'artifacts/existing-record-monitor');
  const before = canonicalDigest();
  const report = await monitorRecords({
    platforms: loadGroup('platforms'),
    events: loadGroup('events'),
    evidence: loadGroup('evidence'),
    outcomes: loadGroup('outcomes'),
    network,
  });
  const after = canonicalDigest();
  if (before !== after) throw new Error('Canonical data changed during monitoring; refusing to continue.');
  report.canonical_sha256_before = before;
  report.canonical_sha256_after = after;
  report.canonical_unchanged = true;
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'monitoring-report.json'), `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(path.join(outputDir, 'monitoring-summary.md'), `${markdown(report)}\n`);
  console.log(`CYA existing-record monitor complete: ${report.canonical_counts.platforms} platforms, ${report.summary.findings} findings, canonical unchanged.`);
  if (report.summary.high) console.log(`High-severity review findings: ${report.summary.high}`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
