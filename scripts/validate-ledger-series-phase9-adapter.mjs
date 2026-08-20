import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const dist = path.resolve(root, 'dist');
const registryId = 'crypto-yield-archive';
const origin = 'https://cya.badjoke-lab.com';
const nativeType = 'yield_platform';
const errors = [];
const fail = (message) => errors.push(message);

function readJson(relativePath) {
  const target = path.join(dist, relativePath);
  if (!fs.existsSync(target)) {
    fail(`${relativePath}: missing`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(target, 'utf8'));
  } catch (error) {
    fail(`${relativePath}: invalid JSON: ${error.message}`);
    return null;
  }
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  }
  return value;
}

const same = (left, right) => JSON.stringify(stable(left)) === JSON.stringify(stable(right));

function listJson(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => entry.name)
    .sort();
}

const manifest = readJson('data/manifest.json');
const descriptor = readJson('data/series/registry.json');
const index = readJson('data/series/index.json');
if (!manifest || !descriptor || !index) process.exit(1);

const count = manifest.record_counts?.primary_records;
if (!Number.isInteger(count) || count < 1) fail(`native primary record count invalid: ${count}`);
if (manifest.project_id !== registryId) fail('native manifest project_id mismatch');
if (manifest.canonical_origin !== origin) fail('native manifest origin mismatch');
if (manifest.data_safety?.canonical_only !== true) fail('native manifest canonical_only mismatch');

if (descriptor.series_schema_version !== '1.0.0') fail('descriptor Series schema mismatch');
if (descriptor.object_type !== 'registry_descriptor') fail('descriptor object_type mismatch');
if (descriptor.registry?.id !== registryId) fail('descriptor registry ID mismatch');
if (descriptor.registry?.origin !== origin) fail('descriptor origin mismatch');
if (descriptor.canonical_only !== true) fail('descriptor canonical_only mismatch');
if (descriptor.record_counts?.primary_records !== count || descriptor.record_counts?.series_records !== count) fail('descriptor count mismatch');
if (descriptor.routes?.descriptor !== '/data/series/registry.json') fail('descriptor route mismatch');
if (descriptor.routes?.index !== '/data/series/index.json') fail('index route mismatch');
if (descriptor.routes?.record_template !== '/data/series/records/{slug}.json') fail('record template mismatch');
if (descriptor.routes?.native_record_template !== '/data/platform/{slug}.json') fail('native record template mismatch');
if (descriptor.routes?.search !== '/platforms/') fail('search route mismatch');
if (descriptor.routes?.compare !== '/compare/') fail('compare route mismatch');
if (descriptor.routes?.stats !== '/stats/') fail('stats route mismatch');
if (descriptor.capabilities?.typed_relationships !== false) fail('typed relationships must be disabled in Stage 3');
if (descriptor.data_safety?.canonical_only !== true || descriptor.data_safety?.includes_unreviewed_candidates !== false || descriptor.data_safety?.includes_internal_monitoring !== false || descriptor.data_safety?.includes_private_notes !== false || descriptor.data_safety?.ai_generated_canonical_facts !== false) fail('descriptor data safety mismatch');
if (!same(descriptor.verification?.build, manifest.build)) fail('descriptor build metadata must equal native manifest build metadata');

if (index.series_schema_version !== '1.0.0') fail('index Series schema mismatch');
if (index.object_type !== 'record_index') fail('index object_type mismatch');
if (index.registry_id !== registryId) fail('index registry ID mismatch');
if (index.canonical_only !== true) fail('index canonical_only mismatch');
if (index.record_count !== count || index.record_counts?.yield_platforms !== count) fail('index count mismatch');
if (!same(index.verification?.build, manifest.build)) fail('index build metadata mismatch');
if (!Array.isArray(index.records) || index.records.length !== count) fail('index records length mismatch');

const nativeFiles = listJson(path.join(dist, 'data', 'platform'));
const seriesFiles = listJson(path.join(dist, 'data', 'series', 'records'));
if (nativeFiles.length !== count) fail(`native dossier count mismatch: expected ${count}, found ${nativeFiles.length}`);
if (seriesFiles.length !== count) fail(`Series dossier count mismatch: expected ${count}, found ${seriesFiles.length}`);
if (!same(nativeFiles, seriesFiles)) fail('Series record slugs must exactly match native platform dossier slugs');

const globalKeys = new Set();
const nativeIds = new Set();
for (const row of index.records ?? []) {
  const label = row?.slug || row?.native_record_id || 'unknown';
  if (row.native_record_type !== nativeType) fail(`${label}: native record type mismatch`);
  const expectedKey = `${registryId}:${nativeType}:${row.native_record_id}`;
  if (row.global_record_key !== expectedKey) fail(`${label}: global key mismatch`);
  if (globalKeys.has(row.global_record_key)) fail(`${label}: duplicate global key`);
  if (nativeIds.has(row.native_record_id)) fail(`${label}: duplicate native ID`);
  globalKeys.add(row.global_record_key);
  nativeIds.add(row.native_record_id);

  if (row.human_url !== `${origin}/platform/${row.slug}/`) fail(`${label}: human URL mismatch`);
  if (row.machine_url !== `${origin}/data/series/records/${row.slug}.json`) fail(`${label}: Series machine URL mismatch`);
  if (row.native_machine_url !== `${origin}/data/platform/${row.slug}.json`) fail(`${label}: native machine URL mismatch`);

  const native = readJson(`data/platform/${row.slug}.json`);
  const envelope = readJson(`data/series/records/${row.slug}.json`);
  if (!native || !envelope) continue;

  if (native.project_id !== registryId || native.dataset !== 'platform_record') fail(`${label}: native dossier identity mismatch`);
  if (native.canonical_origin !== origin || native.canonical_only !== true) fail(`${label}: native dossier canonical boundary mismatch`);
  if (native.record_key?.platform_id !== row.native_record_id || native.record_key?.slug !== row.slug) fail(`${label}: native record key mismatch`);

  if (envelope.object_type !== 'record_envelope' || envelope.registry_id !== registryId) fail(`${label}: envelope identity mismatch`);
  if (envelope.global_record_key !== expectedKey) fail(`${label}: envelope global key mismatch`);
  if (envelope.record_key?.native_record_type !== nativeType || envelope.record_key?.native_record_id !== native.record_key.platform_id || envelope.record_key?.slug !== native.record_key.slug) fail(`${label}: envelope record key mismatch`);
  if (envelope.identity?.name !== native.record?.name) fail(`${label}: native name mismatch`);
  if (!same(envelope.identity?.aliases ?? [], native.record?.aliases ?? [])) fail(`${label}: aliases mismatch`);
  if (envelope.urls?.human !== `${origin}${native.canonical_page}`) fail(`${label}: human URL differs from native dossier`);
  if (envelope.urls?.native_machine !== `${origin}${native.self}`) fail(`${label}: native machine URL differs from dossier`);
  if (!same(envelope.current_state?.native?.record, native.record)) fail(`${label}: native record not preserved losslessly`);
  if (!same(envelope.current_state?.native?.supporting_records, native.supporting_records)) fail(`${label}: supporting records not preserved losslessly`);
  if (!same(envelope.current_state?.native?.related_record_counts, native.related_record_counts)) fail(`${label}: related record counts mismatch`);
  if (!same(envelope.events?.records ?? [], native.supporting_records?.events ?? [])) fail(`${label}: events mismatch`);
  if (!same(envelope.evidence?.records ?? [], native.supporting_records?.evidence ?? [])) fail(`${label}: evidence mismatch`);
  if (!Array.isArray(envelope.relationships) || envelope.relationships.length !== 0) fail(`${label}: typed Series relationships must remain empty`);
  if (!same(envelope.verification?.build, native.build)) fail(`${label}: build metadata mismatch`);
  if (envelope.verification?.last_verified_at !== (native.record?.last_verified_at ?? null)) fail(`${label}: last_verified_at mismatch`);
  if (envelope.provenance?.canonical_only !== true) fail(`${label}: provenance canonical_only mismatch`);
}

if (globalKeys.size !== count) fail(`global key count mismatch: ${globalKeys.size}/${count}`);
if (nativeIds.size !== count) fail(`native ID count mismatch: ${nativeIds.size}/${count}`);

if (errors.length) {
  console.error(`CYA Ledger Series Phase 9 adapter validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`CYA Ledger Series Phase 9 adapter validation passed: ${count} canonical platform envelopes.`);
console.log(`Build commit: ${manifest.build?.commit ?? 'unknown'}`);
