import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';

const REQUIRED_FILES = [
  'dist/index.html',
  'dist/version.json',
  'dist/data/manifest.json',
  'dist/llms.txt',
  'dist/ai.txt',
  'dist/source-quality/index.html',
  'dist/stats/index.html',
  'dist/timeline/index.html',
];

const DATA_PATTERNS = {
  platforms: /^platforms(?:-batch-.+)?\.json$/,
  events: /^events(?:-batch-.+)?\.json$/,
  evidence: /^evidence(?:-batch-.+)?\.json$/,
  outcomes: /^outcomes(?:-batch-.+)?\.json$/,
  products: /^products(?:-batch-.+)?\.json$/,
  termsRisk: /^terms-risk(?:-batch-.+)?\.json$/,
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function readGroup(pattern) {
  return fs
    .readdirSync('data')
    .filter((fileName) => pattern.test(fileName))
    .sort((a, b) => a.localeCompare(b))
    .flatMap((fileName) => {
      const rows = JSON.parse(fs.readFileSync(path.join('data', fileName), 'utf8'));
      assert(Array.isArray(rows), `${fileName} must contain an array`);
      return rows;
    });
}

function countValues(values) {
  return values.reduce((counts, rawValue) => {
    const value = rawValue ? String(rawValue) : 'unknown';
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function expectedBuildCommit() {
  return process.env.CF_PAGES_COMMIT_SHA || process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || null;
}

function expectedBuildBranch() {
  return process.env.CF_PAGES_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.GITHUB_REF_NAME || null;
}

for (const filePath of REQUIRED_FILES) {
  assert(fs.existsSync(filePath), `Missing build output: ${filePath}`);
}

const platforms = readGroup(DATA_PATTERNS.platforms);
const events = readGroup(DATA_PATTERNS.events);
const evidence = readGroup(DATA_PATTERNS.evidence);
const outcomes = readGroup(DATA_PATTERNS.outcomes);
const products = readGroup(DATA_PATTERNS.products);
const termsRisk = readGroup(DATA_PATTERNS.termsRisk);

const expectedCounts = {
  primary_records: platforms.length,
  events: events.length,
  evidence: evidence.length,
};

const expectedBreakdown = {
  platforms: platforms.length,
  outcomes: outcomes.length,
  products: products.length,
  terms_risk: termsRisk.length,
  status: countValues(platforms.map((platform) => platform.status)),
  type: countValues(platforms.map((platform) => platform.type)),
  primary_failure_reason: countValues(platforms.map((platform) => platform.primary_failure_reason)),
  outcome_status: countValues(outcomes.map((outcome) => outcome.outcome_status)),
  asset_treatment: countValues(termsRisk.map((terms) => terms.asset_treatment)),
  evidence_reliability: countValues(evidence.map((item) => item.reliability)),
  evidence_source_type: countValues(evidence.map((item) => item.source_type)),
};

const expectedLastReviewedAt = platforms
  .map((platform) => platform.last_verified_at)
  .filter(Boolean)
  .sort()
  .at(-1) || null;

const version = JSON.parse(fs.readFileSync('dist/version.json', 'utf8'));
const manifest = JSON.parse(fs.readFileSync('dist/data/manifest.json', 'utf8'));
const llmsText = fs.readFileSync('dist/llms.txt', 'utf8');
const aiText = fs.readFileSync('dist/ai.txt', 'utf8');

assert(version.schema_version === '1.0.0', 'version schema mismatch');
assert(version.project_id === 'crypto-yield-archive', 'version project id mismatch');
assert(version.registry_family === 'badjoke-lab-ledger-series', 'version registry family mismatch');
assert(version.registry_type === 'historical_crypto_yield_registry', 'version registry type mismatch');
assert(version.canonical_origin === 'https://cya.badjoke-lab.com', 'version canonical origin mismatch');
assert(version.build?.verification_marker === 'cya_machine_readable_layer_v1', 'version verification marker mismatch');
assert(version.data?.data_schema_version === 'cya_platform_event_evidence_outcome_product_terms_v1', 'data schema mismatch');
assert(isDeepStrictEqual(version.data?.record_counts, expectedCounts), 'version record counts do not match canonical data');
assert(isDeepStrictEqual(version.data?.record_count_breakdown, expectedBreakdown), 'version record breakdown does not match canonical data');
assert(version.data?.records_last_reviewed_at === expectedLastReviewedAt, 'records_last_reviewed_at mismatch');
assert(version.routes?.platform_detail === '/platform/{slug}/', 'version platform route missing');

const commit = expectedBuildCommit();
const branch = expectedBuildBranch();
if (commit) assert(version.build.commit === commit, `build commit mismatch: ${version.build.commit} != ${commit}`);
if (branch) assert(version.build.branch === branch, `build branch mismatch: ${version.build.branch} != ${branch}`);

assert(manifest.schema_version === '1.0.0', 'manifest schema mismatch');
assert(manifest.project_id === version.project_id, 'manifest project id mismatch');
assert(manifest.registry_family === version.registry_family, 'manifest registry family mismatch');
assert(manifest.registry_type === version.registry_type, 'manifest registry type mismatch');
assert(manifest.canonical_origin === version.canonical_origin, 'manifest canonical origin mismatch');
assert(manifest.data_model?.primary_record === 'yield_platform', 'manifest primary record mismatch');
assert(manifest.public_files?.version === '/version.json', 'manifest version route missing');
assert(manifest.public_files?.manifest === '/data/manifest.json', 'manifest self route missing');
assert(manifest.public_files?.llms === '/llms.txt', 'manifest llms route missing');
assert(manifest.public_files?.ai === '/ai.txt', 'manifest ai route missing');
assert(Array.isArray(manifest.main_routes) && manifest.main_routes.includes('/platform/{slug}/'), 'manifest platform route missing');
assert(isDeepStrictEqual(manifest.record_counts, expectedCounts), 'manifest record counts do not match canonical data');
assert(isDeepStrictEqual(manifest.record_count_breakdown, expectedBreakdown), 'manifest record breakdown does not match canonical data');
assert(isDeepStrictEqual(manifest.record_counts, version.data.record_counts), 'version and manifest record counts differ');
assert(isDeepStrictEqual(manifest.record_count_breakdown, version.data.record_count_breakdown), 'version and manifest breakdown differ');
assert(manifest.data_safety?.canonical_only === true, 'canonical-only safety flag missing');
assert(manifest.data_safety?.includes_unreviewed_candidates === false, 'unreviewed candidate safety flag invalid');
assert(manifest.data_safety?.includes_internal_monitoring === false, 'internal monitoring safety flag invalid');
assert(manifest.data_safety?.includes_private_notes === false, 'private notes safety flag invalid');

assert(llmsText.includes('# Crypto Yield Archive'), 'llms.txt missing project title');
assert(llmsText.includes('/data/manifest.json'), 'llms.txt missing manifest route');
assert(llmsText.includes('/ai.txt'), 'llms.txt missing AI route');
assert(llmsText.includes('not an APY ranking'), 'llms.txt missing interpretation warning');
assert(aiText.includes('Version endpoint: /version.json'), 'ai.txt missing version endpoint');
assert(aiText.includes('LLM guide: /llms.txt'), 'ai.txt missing LLM guide');
assert(aiText.includes('/source-quality/'), 'ai.txt missing source-quality route');
assert(aiText.includes('reviewed public registry information only'), 'ai.txt missing safety boundary');

console.log(JSON.stringify({
  ok: true,
  checked_files: REQUIRED_FILES.map((filePath) => path.normalize(filePath)),
  schema_version: version.schema_version,
  build: version.build,
  record_counts: version.data.record_counts,
  records_last_reviewed_at: version.data.records_last_reviewed_at,
}, null, 2));
