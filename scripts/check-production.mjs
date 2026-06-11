const DEFAULT_BASE_URL = 'https://cya.badjoke-lab.com';
const EXPECTED_DESIGN_GENERATION = 'editorial_registry_2026_06_10';
const EXPECTED_MARKER = 'cya_editorial_registry_redesign_complete';

const baseUrl = (process.env.CYA_BASE_URL || DEFAULT_BASE_URL).replace(/\/$/, '');

async function readJson(pathname) {
  const url = `${baseUrl}${pathname}`;
  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
      'user-agent': 'cya-production-smoke-check/1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`${pathname} returned HTTP ${response.status}`);
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(`${pathname} returned non-JSON content-type: ${contentType || 'missing'}`);
  }

  return response.json();
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function assertPositiveInteger(value, label) {
  assert(Number.isInteger(value) && value > 0, `${label} must be a positive integer`);
}

const version = await readJson('/version.json');
const manifest = await readJson('/data/manifest.json');

assert(version.project === 'crypto-yield-archive', 'version.project mismatch');
assert(version.design_generation === EXPECTED_DESIGN_GENERATION, `version.design_generation mismatch: ${version.design_generation}`);
assert(version.verification_marker === EXPECTED_MARKER, `version.verification_marker mismatch: ${version.verification_marker}`);
assert(version.registry_type === 'historical_crypto_yield_registry', 'version.registry_type mismatch');
assert(version.record_counts && typeof version.record_counts === 'object', 'version.record_counts missing');

assert(manifest.project === 'crypto-yield-archive', 'manifest.project mismatch');
assert(manifest.files?.version === '/version.json', 'manifest.files.version mismatch');
assert(manifest.files?.platform_route_pattern === '/platform/{slug}/', 'manifest platform route pattern missing');
assert(manifest.record_counts && typeof manifest.record_counts === 'object', 'manifest.record_counts missing');

for (const key of ['platforms', 'events', 'evidence', 'outcomes', 'products', 'terms_risk']) {
  assertPositiveInteger(version.record_counts[key], `version.record_counts.${key}`);
  assertPositiveInteger(manifest.record_counts[key], `manifest.record_counts.${key}`);
  assert(
    version.record_counts[key] === manifest.record_counts[key],
    `record count mismatch for ${key}: version=${version.record_counts[key]} manifest=${manifest.record_counts[key]}`,
  );
}

assert(Array.isArray(version.expected_routes) && version.expected_routes.includes('/source-quality/'), 'version.expected_routes incomplete');
assert(manifest.distributions?.evidence_by_reliability, 'manifest evidence reliability distribution missing');
assert(Array.isArray(manifest.sample_platforms) && manifest.sample_platforms.length > 0, 'manifest.sample_platforms missing');

console.log(JSON.stringify({
  ok: true,
  base_url: baseUrl,
  design_generation: version.design_generation,
  generated_at: version.generated_at,
  record_counts: version.record_counts,
}, null, 2));
