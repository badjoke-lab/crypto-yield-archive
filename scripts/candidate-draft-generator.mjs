import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { scanCandidates } from './candidate-scanner.mjs';
import { dataDir, loadGroup, normalizeDomain, normalizeText, readArray } from './lib/registry-files.mjs';

function canonicalFiles() {
  return fs.readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => path.join(dataDir, file));
}

function digestFiles(files) {
  const hash = crypto.createHash('sha256');
  for (const file of [...files].sort()) {
    hash.update(path.relative(process.cwd(), file));
    hash.update('\0');
    hash.update(fs.readFileSync(file));
    hash.update('\0');
  }
  return hash.digest('hex');
}

function slugify(value) {
  return normalizeText(value).replaceAll(' ', '-').replace(/-+/g, '-');
}

function reviewMeta(candidate, scanResult) {
  const ready = scanResult.eligible_for_draft === true;
  return {
    candidate_id: candidate.candidate_id,
    review_state: ready ? 'ready_for_review' : 'blocked',
    classification: scanResult.classification,
    eligible_for_canonical_promotion: false,
    blockers: ready ? [] : [scanResult.rationale],
    source_decision: candidate.decision,
  };
}

function platformDraft(candidate, scanResult) {
  return {
    draft_meta: reviewMeta(candidate, scanResult),
    id: null,
    slug: slugify(candidate.canonical_name),
    canonical_name: candidate.canonical_name,
    aliases: candidate.aliases ?? [],
    type: candidate.platform_type_guess ?? null,
    status: candidate.status_guess ?? null,
    failure_reason: null,
    launch_date: null,
    end_date: null,
    country_or_origin: candidate.country_or_origin ?? null,
    summary: null,
    what_happened: candidate.major_event ?? null,
    official_url_original: null,
    official_domain_original: normalizeDomain(candidate.domain) || null,
    official_url_status: 'unknown',
    archived_url: null,
    confidence: 'low',
    last_verified_at: candidate.last_reviewed_at ?? null,
    uncertainty_notes: candidate.notes ?? null,
    notes: 'Review-only draft. Assign canonical ID and verified fields only after source review.',
  };
}

function eventDraft(candidate, scanResult) {
  const sourceCount = (candidate.primary_sources ?? []).length + (candidate.secondary_sources ?? []).length;
  return {
    draft_meta: reviewMeta(candidate, scanResult),
    id: null,
    platform_id: null,
    candidate_platform_ref: candidate.candidate_id,
    event_type: null,
    event_date: null,
    title: null,
    description: candidate.major_event ?? null,
    impact_level: null,
    event_status_effect: candidate.status_guess ?? null,
    confidence: 'low',
    source_count: sourceCount,
    notes: 'Event type, date, title and direct evidence links require manual review.',
  };
}

function evidenceDrafts(candidate, scanResult) {
  const rows = [];
  const add = (url, sourceRole) => {
    rows.push({
      draft_meta: reviewMeta(candidate, scanResult),
      id: null,
      platform_id: null,
      event_id: null,
      candidate_platform_ref: candidate.candidate_id,
      source_role: sourceRole,
      source_type: null,
      title: null,
      url,
      publisher: null,
      published_at: null,
      archived_url: null,
      accessed_at: candidate.last_reviewed_at ?? null,
      reliability: null,
      claim_scope: null,
      notes: `Candidate ledger lists this URL as a ${sourceRole} source. Canonical evidence fields require manual verification.`,
    });
  };
  for (const url of candidate.primary_sources ?? []) add(url, 'primary');
  for (const url of candidate.secondary_sources ?? []) add(url, 'secondary');
  return rows;
}

function outcomeDraft(candidate, scanResult) {
  return {
    draft_meta: reviewMeta(candidate, scanResult),
    platform_id: null,
    candidate_platform_ref: candidate.candidate_id,
    outcome_status: 'unknown',
    estimated_recovery_rate: null,
    repayment_started_at: null,
    repayment_completed_at: null,
    repayment_method: null,
    claim_process_url: null,
    affected_products: [],
    claim_classes: [],
    jurisdictions: [],
    as_of: candidate.last_reviewed_at ?? null,
    last_verified_at: candidate.last_reviewed_at ?? null,
    notes: 'No customer outcome is inferred from candidate metadata alone.',
    confidence: 'low',
  };
}

function productDraft(candidate, scanResult) {
  return {
    draft_meta: reviewMeta(candidate, scanResult),
    platform_id: null,
    candidate_platform_ref: candidate.candidate_id,
    product_type: candidate.platform_type_guess ?? null,
    product_name: candidate.canonical_name,
    custody_model: null,
    yield_source: null,
    risk_notes: 'Product boundary, custody and yield source require source review.',
  };
}

function termsRiskDraft(candidate, scanResult) {
  return {
    draft_meta: reviewMeta(candidate, scanResult),
    platform_id: null,
    candidate_platform_ref: candidate.candidate_id,
    terms_status: 'unknown',
    asset_ownership_interpretation: null,
    affected_product: candidate.canonical_name,
    source_evidence_id: null,
    notes: 'Terms and asset ownership are not inferred by the generator.',
    confidence: 'low',
  };
}

export function generateDraftPackage({ candidates, platforms, canonicalDigest = null }) {
  const scan = scanCandidates({ candidates, platforms, canonicalDigest });
  const scanById = new Map(scan.results.map((item) => [item.candidate_id, item]));
  const platformsOut = [];
  const eventsOut = [];
  const evidenceOut = [];
  const outcomesOut = [];
  const productsOut = [];
  const termsRiskOut = [];

  for (const candidate of candidates) {
    const scanResult = scanById.get(candidate.candidate_id);
    if (!scanResult) throw new Error(`Missing scan result for ${candidate.candidate_id}`);
    platformsOut.push(platformDraft(candidate, scanResult));
    eventsOut.push(eventDraft(candidate, scanResult));
    evidenceOut.push(...evidenceDrafts(candidate, scanResult));
    outcomesOut.push(outcomeDraft(candidate, scanResult));
    productsOut.push(productDraft(candidate, scanResult));
    termsRiskOut.push(termsRiskDraft(candidate, scanResult));
  }

  const ready = scan.results.filter((item) => item.eligible_for_draft).length;
  return {
    manifest: {
      schema_version: 1,
      generated_at: new Date().toISOString(),
      canonical_sha256: canonicalDigest,
      candidate_count: candidates.length,
      ready_for_review: ready,
      blocked: candidates.length - ready,
      canonical_ids_assigned: 0,
      canonical_writes_performed: 0,
      scan_counts: scan.counts,
      candidates: scan.results,
    },
    platforms: platformsOut,
    events: eventsOut,
    evidence: evidenceOut,
    outcomes: outcomesOut,
    products: productsOut,
    termsRisk: termsRiskOut,
  };
}

function parseArgs(argv) {
  const args = {
    input: 'data-staging/candidates/cya-candidates.json',
    outputDir: 'data-staging/generated/candidate-drafts',
  };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === '--input') args.input = argv[++index];
    else if (value === '--output-dir') args.outputDir = argv[++index];
    else throw new Error(`Unknown argument: ${value}`);
  }
  return args;
}

function writeJson(outputDir, name, value) {
  fs.writeFileSync(path.join(outputDir, name), `${JSON.stringify(value, null, 2)}\n`);
}

export function runCli(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const canonical = canonicalFiles();
  const beforeDigest = digestFiles(canonical);
  const candidates = readArray(path.resolve(args.input));
  const platforms = loadGroup('platforms');
  const result = generateDraftPackage({
    candidates,
    platforms,
    canonicalDigest: beforeDigest,
  });
  const outputDir = path.resolve(args.outputDir);
  fs.mkdirSync(outputDir, { recursive: true });
  writeJson(outputDir, 'candidate-draft-manifest.json', result.manifest);
  writeJson(outputDir, 'candidate-platforms.json', result.platforms);
  writeJson(outputDir, 'candidate-events.json', result.events);
  writeJson(outputDir, 'candidate-evidence.json', result.evidence);
  writeJson(outputDir, 'candidate-outcomes.json', result.outcomes);
  writeJson(outputDir, 'candidate-products.json', result.products);
  writeJson(outputDir, 'candidate-terms-risk.json', result.termsRisk);

  const afterDigest = digestFiles(canonical);
  if (afterDigest !== beforeDigest) {
    throw new Error('Canonical data changed while generating candidate drafts.');
  }

  console.log(
    `CYA candidate drafts generated: ${result.manifest.candidate_count} candidates, `
    + `${result.manifest.ready_for_review} ready, ${result.manifest.blocked} blocked, `
    + `canonical=${beforeDigest.slice(0, 12)}.`,
  );
  return result;
}

const entryPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (entryPath && fileURLToPath(import.meta.url) === entryPath) {
  runCli();
}
