import fs from 'node:fs';
import path from 'node:path';

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

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const filePath of REQUIRED_FILES) {
  assert(fs.existsSync(filePath), `Missing build output: ${filePath}`);
}

const version = JSON.parse(fs.readFileSync('dist/version.json', 'utf8'));
const manifest = JSON.parse(fs.readFileSync('dist/data/manifest.json', 'utf8'));
const llmsText = fs.readFileSync('dist/llms.txt', 'utf8');
const aiText = fs.readFileSync('dist/ai.txt', 'utf8');

assert(version.design_generation === 'editorial_registry_2026_06_10', 'version design generation mismatch');
assert(version.verification_marker === 'cya_editorial_registry_redesign_complete', 'version verification marker mismatch');
assert(manifest.files?.version === '/version.json', 'manifest version route missing');
assert(manifest.files?.platform_route_pattern === '/platform/{slug}/', 'manifest platform route pattern missing');
assert(llmsText.includes('Crypto Yield Archive'), 'llms.txt missing project title');
assert(llmsText.includes('/data/manifest.json'), 'llms.txt missing manifest route');
assert(aiText.includes('Version endpoint'), 'ai.txt missing version endpoint note');
assert(aiText.includes('/source-quality/'), 'ai.txt missing source-quality route');

for (const key of ['platforms', 'events', 'evidence', 'outcomes', 'products', 'terms_risk']) {
  assert(Number.isInteger(version.record_counts[key]) && version.record_counts[key] > 0, `Invalid version count: ${key}`);
  assert(version.record_counts[key] === manifest.record_counts[key], `Count mismatch: ${key}`);
}

console.log(JSON.stringify({
  ok: true,
  checked_files: REQUIRED_FILES.map((filePath) => path.normalize(filePath)),
  design_generation: version.design_generation,
  record_counts: version.record_counts,
}, null, 2));
