const DEFAULT_BASE_URL = 'https://cya.badjoke-lab.com';
const DEFAULT_ATTEMPTS = 12;
const DEFAULT_DELAY_MS = 15000;

const baseUrl = (process.env.CYA_BASE_URL || DEFAULT_BASE_URL).replace(/\/$/, '');
const expectedCommit = process.env.CYA_EXPECTED_COMMIT || process.env.GITHUB_SHA || null;
const attempts = Number(process.env.CYA_SMOKE_ATTEMPTS || DEFAULT_ATTEMPTS);
const delayMs = Number(process.env.CYA_SMOKE_DELAY_MS || DEFAULT_DELAY_MS);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function read(pathname, expectedContentType) {
  const url = `${baseUrl}${pathname}`;
  const response = await fetch(url, {
    headers: {
      accept: expectedContentType,
      'user-agent': 'cya-machine-readable-production-smoke/1.0',
    },
  });

  if (!response.ok) throw new Error(`${pathname} returned HTTP ${response.status}`);

  const contentType = response.headers.get('content-type') || '';
  assert(contentType.includes(expectedContentType), `${pathname} returned unexpected content-type: ${contentType || 'missing'}`);

  return response.text();
}

async function checkOnce() {
  const version = JSON.parse(await read('/version.json', 'application/json'));
  const manifest = JSON.parse(await read('/data/manifest.json', 'application/json'));
  const llmsText = await read('/llms.txt', 'text/plain');
  const aiText = await read('/ai.txt', 'text/plain');

  assert(version.schema_version === '1.0.0', 'version schema mismatch');
  assert(version.project_id === 'crypto-yield-archive', 'version project id mismatch');
  assert(version.registry_family === 'badjoke-lab-ledger-series', 'version registry family mismatch');
  assert(version.registry_type === 'historical_crypto_yield_registry', 'version registry type mismatch');
  assert(version.canonical_origin === 'https://cya.badjoke-lab.com', 'version canonical origin mismatch');
  assert(version.build?.verification_marker === 'cya_machine_readable_layer_v1', 'version verification marker mismatch');
  assert(version.build?.commit && typeof version.build.commit === 'string', 'version build commit missing');
  assert(version.build?.branch && typeof version.build.branch === 'string', 'version build branch missing');
  assert(version.data?.data_schema_version === 'cya_platform_event_evidence_outcome_product_terms_v1', 'data schema mismatch');

  if (expectedCommit) {
    assert(version.build.commit === expectedCommit, `production commit ${version.build.commit} does not match expected ${expectedCommit}`);
  }

  const counts = version.data?.record_counts;
  assert(Number.isInteger(counts?.primary_records) && counts.primary_records > 0, 'primary record count invalid');
  assert(Number.isInteger(counts?.events) && counts.events > 0, 'event count invalid');
  assert(Number.isInteger(counts?.evidence) && counts.evidence > 0, 'evidence count invalid');
  assert(Number.isInteger(version.data?.record_count_breakdown?.outcomes), 'outcome breakdown missing');
  assert(Number.isInteger(version.data?.record_count_breakdown?.products), 'product breakdown missing');
  assert(Number.isInteger(version.data?.record_count_breakdown?.terms_risk), 'terms-risk breakdown missing');
  assert(version.routes?.platform_detail === '/platform/{slug}/', 'version platform route missing');

  assert(manifest.schema_version === version.schema_version, 'manifest schema mismatch');
  assert(manifest.project_id === version.project_id, 'manifest project mismatch');
  assert(manifest.registry_family === version.registry_family, 'manifest registry family mismatch');
  assert(manifest.registry_type === version.registry_type, 'manifest registry type mismatch');
  assert(manifest.canonical_origin === version.canonical_origin, 'manifest canonical origin mismatch');
  assert(manifest.public_files?.version === '/version.json', 'manifest version route missing');
  assert(manifest.public_files?.manifest === '/data/manifest.json', 'manifest self route missing');
  assert(manifest.public_files?.llms === '/llms.txt', 'manifest llms route missing');
  assert(manifest.public_files?.ai === '/ai.txt', 'manifest ai route missing');
  assert(manifest.data_model?.primary_record === 'yield_platform', 'manifest primary record mismatch');
  assert(JSON.stringify(manifest.record_counts) === JSON.stringify(counts), 'version and manifest record counts differ');
  assert(
    JSON.stringify(manifest.record_count_breakdown) === JSON.stringify(version.data.record_count_breakdown),
    'version and manifest record breakdown differ',
  );
  assert(manifest.data_safety?.canonical_only === true, 'canonical-only safety flag missing');
  assert(manifest.data_safety?.includes_unreviewed_candidates === false, 'unreviewed candidate safety flag invalid');
  assert(manifest.data_safety?.includes_internal_monitoring === false, 'internal monitoring safety flag invalid');
  assert(manifest.data_safety?.includes_private_notes === false, 'private notes safety flag invalid');
  assert(Array.isArray(manifest.main_routes) && manifest.main_routes.includes('/source-quality/'), 'manifest routes incomplete');

  assert(llmsText.includes('/version.json'), 'llms.txt missing version route');
  assert(llmsText.includes('/data/manifest.json'), 'llms.txt missing manifest route');
  assert(llmsText.includes('/ai.txt'), 'llms.txt missing AI route');
  assert(llmsText.includes('not an APY ranking'), 'llms.txt missing interpretation warning');
  assert(aiText.includes('LLM guide: /llms.txt'), 'ai.txt missing LLM guide');
  assert(aiText.includes('reviewed public registry information only'), 'ai.txt missing safety boundary');

  return {
    ok: true,
    base_url: baseUrl,
    schema_version: version.schema_version,
    build: version.build,
    record_counts: counts,
    records_last_reviewed_at: version.data.records_last_reviewed_at,
  };
}

let lastError;
for (let attempt = 1; attempt <= attempts; attempt += 1) {
  try {
    const result = await checkOnce();
    console.log(JSON.stringify({ ...result, attempt }, null, 2));
    process.exit(0);
  } catch (error) {
    lastError = error;
    console.error(`Production check attempt ${attempt}/${attempts} failed: ${error.message}`);
    if (attempt < attempts) await sleep(delayMs);
  }
}

throw lastError;
