import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const configPath = path.join(root, 'scripts/research-candidate-monitoring.json');
const validateOnly = process.argv.includes('--validate');
const outputDir = path.resolve(process.env.CYA_CANDIDATE_MONITOR_OUTPUT_DIR || 'artifacts/research-candidate-monitor');
const timeoutMs = 12_000;

function fail(message) {
  console.error(message);
  process.exit(1);
}

function loadTargets() {
  const rows = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  if (!Array.isArray(rows) || rows.length === 0) fail('research candidate monitoring config must be a non-empty array');
  const seen = new Set();
  for (const row of rows) {
    if (!/^cya_candidate_[0-9]{6}$/.test(row.candidate_id || '')) fail(`${row.candidate_id || 'unknown'}: invalid candidate_id`);
    if (seen.has(row.candidate_id)) fail(`${row.candidate_id}: duplicate candidate_id`);
    seen.add(row.candidate_id);
    if (row.status !== 'needs_research') fail(`${row.candidate_id}: only needs_research candidates may be monitored here`);
    if (row.canonical_record !== false) fail(`${row.candidate_id}: canonical_record must remain false`);
    let parsed;
    try {
      parsed = new URL(row.url);
    } catch {
      fail(`${row.candidate_id}: invalid URL`);
    }
    if (parsed.protocol !== 'https:') fail(`${row.candidate_id}: URL must use HTTPS`);
    if (!Array.isArray(row.allowed_hosts) || !row.allowed_hosts.includes(parsed.hostname)) fail(`${row.candidate_id}: configured URL host must be allowlisted`);
  }
  return rows;
}

async function probe(row) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(row.url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'CYA-research-candidate-monitor/1.0' },
    });
    const finalUrl = response.url || row.url;
    const finalHost = new URL(finalUrl).hostname;
    return {
      candidate_id: row.candidate_id,
      name: row.name,
      configured_url: row.url,
      checked_at: new Date().toISOString(),
      ok: response.status >= 200 && response.status < 400,
      http_status: response.status,
      final_url: finalUrl,
      final_host: finalHost,
      redirect_outside_allowlist: !row.allowed_hosts.includes(finalHost),
      error: null,
    };
  } catch (error) {
    return {
      candidate_id: row.candidate_id,
      name: row.name,
      configured_url: row.url,
      checked_at: new Date().toISOString(),
      ok: false,
      http_status: null,
      final_url: null,
      final_host: null,
      redirect_outside_allowlist: false,
      error: error?.name === 'AbortError' ? 'timeout' : String(error?.message || error),
    };
  } finally {
    clearTimeout(timer);
  }
}

function markdown(report) {
  const lines = [
    '# CYA Research Candidate Monitoring',
    '',
    `Generated: ${report.generated_at}`,
    '',
    '## Boundary',
    '',
    '- Review-only: true',
    '- Canonical action: none',
    '- Public classification change: none',
    '',
    '## Results',
    '',
  ];
  for (const item of report.results) {
    lines.push(`- **${item.name}** (${item.candidate_id}): ${item.ok ? 'reachable' : 'review needed'}${item.http_status ? ` — HTTP ${item.http_status}` : ''}`);
    if (item.final_url) lines.push(`  - final URL: ${item.final_url}`);
    if (item.redirect_outside_allowlist) lines.push('  - alert: redirect target left configured host allowlist');
    if (item.error) lines.push(`  - error: ${item.error}`);
  }
  lines.push('', 'A monitoring signal does not promote a research candidate into canonical CYA data.', '');
  return lines.join('\n');
}

const targets = loadTargets();
if (validateOnly) {
  console.log(`CYA research candidate monitoring config valid: ${targets.length} noncanonical candidate(s).`);
  process.exit(0);
}

const results = [];
for (const row of targets) results.push(await probe(row));
const report = {
  schema_version: '1.0',
  generated_at: new Date().toISOString(),
  canonical_write_allowed: false,
  public_output: false,
  candidate_count: targets.length,
  findings_requiring_review: results.filter((item) => !item.ok || item.redirect_outside_allowlist).length,
  results,
};
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'monitoring-report.json'), `${JSON.stringify(report, null, 2)}\n`);
fs.writeFileSync(path.join(outputDir, 'monitoring-summary.md'), `${markdown(report)}\n`);
console.log(`CYA research candidate monitor complete: ${targets.length} candidates, ${report.findings_requiring_review} review finding(s).`);
