import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';

const assert = (condition, message) => { if (!condition) throw new Error(message); };
const patterns = {
  platforms: /^platforms(?:-batch-.+)?\.json$/,
  events: /^events(?:-batch-.+)?\.json$/,
  evidence: /^evidence(?:-batch-.+)?\.json$/,
  outcomes: /^outcomes(?:-batch-.+)?\.json$/,
  products: /^products(?:-batch-.+)?\.json$/,
  termsRisk: /^terms-risk(?:-batch-.+)?\.json$/,
};
const readGroup = (pattern) => fs.readdirSync('data').filter((name) => pattern.test(name)).sort().flatMap((name) => JSON.parse(fs.readFileSync(path.join('data', name), 'utf8')));
const readJson = (name) => JSON.parse(fs.readFileSync(name, 'utf8'));
const countValues = (values) => values.reduce((map, raw) => { const value = raw ? String(raw) : 'unknown'; map[value] = (map[value] || 0) + 1; return map; }, {});

const platforms = readGroup(patterns.platforms);
const events = readGroup(patterns.events);
const evidence = readGroup(patterns.evidence);
const outcomes = readGroup(patterns.outcomes);
const products = readGroup(patterns.products);
const termsRisk = readGroup(patterns.termsRisk);
const claimsOngoing = outcomes.filter((row) => row.outcome_status === 'claims_ongoing').length;
const counts = {
  primary_records: platforms.length,
  platforms: platforms.length,
  events: events.length,
  evidence: evidence.length,
  customer_outcomes: outcomes.length,
  product_profiles: products.length,
  terms_risk_records: termsRisk.length,
};
const derived = { claims_ongoing: claimsOngoing };
const breakdown = {
  status: countValues(platforms.map((row) => row.status)),
  type: countValues(platforms.map((row) => row.type)),
  failure_reason: countValues(platforms.map((row) => row.failure_reason)),
  outcome_status: countValues(outcomes.map((row) => row.outcome_status)),
  terms_status: countValues(termsRisk.map((row) => row.terms_status)),
  evidence_reliability: countValues(evidence.map((row) => row.reliability)),
  evidence_source_type: countValues(evidence.map((row) => row.source_type)),
};

const required = [
  'dist/version.json', 'dist/data/manifest.json', 'dist/data/platforms.json',
  'dist/data/events.json', 'dist/data/evidence.json', 'dist/data/customer-outcomes.json',
  'dist/data/outcomes.json', 'dist/data/products.json', 'dist/data/terms-risk.json',
];
for (const name of required) assert(fs.existsSync(name), `Missing ${name}`);

const version = readJson('dist/version.json');
const manifest = readJson('dist/data/manifest.json');
assert(version.schema_version === '1.1.0', 'version schema mismatch');
assert(version.data?.data_schema_version === 'cya_registry_public_data_v2', 'data schema mismatch');
assert(version.canonical_origin === 'https://cya.badjoke-lab.com', 'canonical origin mismatch');
assert(version.canonical_only === true, 'version canonical_only missing');
assert(isDeepStrictEqual(version.data.record_counts, counts), 'version counts mismatch');
assert(isDeepStrictEqual(version.data.derived_counts, derived), 'version derived counts mismatch');
assert(isDeepStrictEqual(version.data.record_count_breakdown, breakdown), 'version breakdown mismatch');
assert(version.build.generated_at === version.data.generated_at, 'version generated_at mismatch');

assert(manifest.schema_version === version.schema_version, 'manifest schema mismatch');
assert(manifest.data_schema_version === version.data.data_schema_version, 'manifest data schema mismatch');
assert(manifest.generated_at === version.data.generated_at, 'manifest generated_at mismatch');
assert(manifest.build.commit === version.build.commit, 'manifest commit mismatch');
assert(isDeepStrictEqual(manifest.record_counts, counts), 'manifest counts mismatch');
assert(isDeepStrictEqual(manifest.derived_counts, derived), 'manifest derived counts mismatch');
assert(isDeepStrictEqual(manifest.record_count_breakdown, breakdown), 'manifest breakdown mismatch');
assert(manifest.data_safety?.canonical_only === true, 'manifest canonical_only missing');
assert(manifest.data_safety?.includes_unreviewed_candidates === false, 'candidate safety flag invalid');
assert(manifest.data_model?.outcome_scope?.point_in_time_field === 'as_of', 'outcome as_of policy missing');

const datasetFiles = {
  platforms: ['dist/data/platforms.json', platforms.length],
  events: ['dist/data/events.json', events.length],
  evidence: ['dist/data/evidence.json', evidence.length],
  customer_outcomes: ['dist/data/customer-outcomes.json', outcomes.length],
  outcomes_alias: ['dist/data/outcomes.json', outcomes.length],
  products: ['dist/data/products.json', products.length],
  terms_risk: ['dist/data/terms-risk.json', termsRisk.length],
};
const datasets = {};
for (const [name, [file, expected]] of Object.entries(datasetFiles)) {
  const payload = readJson(file);
  datasets[name] = payload;
  assert(payload.schema_version === version.schema_version, `${name} schema mismatch`);
  assert(payload.data_schema_version === version.data.data_schema_version, `${name} data schema mismatch`);
  assert(payload.canonical_origin === version.canonical_origin, `${name} origin mismatch`);
  assert(payload.canonical_only === true, `${name} canonical_only missing`);
  assert(payload.generated_at === version.data.generated_at, `${name} generated_at mismatch`);
  assert(payload.build.commit === version.build.commit, `${name} commit mismatch`);
  assert(payload.record_count === expected && payload.records.length === expected, `${name} count mismatch`);
  const serialized = JSON.stringify(payload.records);
  assert(!serialized.includes('candidate_id'), `${name} includes candidate data`);
  assert(!serialized.includes('data-staging'), `${name} includes staging data`);
}
assert(isDeepStrictEqual(datasets.customer_outcomes.records, datasets.outcomes_alias.records), 'outcome alias differs');
for (const outcome of datasets.customer_outcomes.records) {
  assert(/^\d{4}-\d{2}-\d{2}$/.test(outcome.as_of || ''), `${outcome.platform_id} lacks as_of`);
  assert(Array.isArray(outcome.scope?.product_names), `${outcome.platform_id} lacks product scope`);
  assert(Array.isArray(outcome.scope?.claim_classes), `${outcome.platform_id} lacks claim-class scope`);
  assert(Array.isArray(outcome.scope?.jurisdictions), `${outcome.platform_id} lacks jurisdiction scope`);
}

console.log(JSON.stringify({ ok: true, record_counts: counts, derived_counts: derived, build: version.build }, null, 2));
