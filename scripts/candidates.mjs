import fs from 'node:fs';
import path from 'node:path';
import {
  candidateDir,
  loadGroup,
  normalizeDomain,
  normalizeText,
  readArray,
} from './lib/registry-files.mjs';

const decisions = new Set([
  'add_now',
  'needs_research',
  'duplicate',
  'out_of_scope',
  'insufficient_evidence',
  'already_recorded',
]);
const names = ['cya-candidates.json', 'cya-consumed.json', 'cya-rejected.json'];
let failed = false;
const fail = (message) => {
  failed = true;
  console.error(`ERROR: ${message}`);
};

const records = names.flatMap((name) => {
  const file = path.join(candidateDir, name);
  if (!fs.existsSync(file)) {
    fail(`Missing candidate ledger: ${file}`);
    return [];
  }
  return readArray(file).map((record, index) => ({ ...record, __file: name, __index: index }));
});

const ids = new Map();
const candidateNames = new Map();
for (const record of records) {
  const label = `${record.__file}#${record.__index}`;
  if (!record.candidate_id) fail(`Missing candidate_id in ${label}`);
  if (!record.canonical_name) fail(`Missing canonical_name in ${label}`);
  if (!decisions.has(record.decision)) fail(`Invalid decision=${record.decision} in ${label}`);
  if (!Array.isArray(record.aliases)) fail(`aliases must be an array in ${label}`);
  if (!Array.isArray(record.primary_sources)) fail(`primary_sources must be an array in ${label}`);
  if (!Array.isArray(record.secondary_sources)) fail(`secondary_sources must be an array in ${label}`);

  if (ids.has(record.candidate_id)) fail(`Duplicate candidate_id=${record.candidate_id}`);
  else ids.set(record.candidate_id, label);

  const normalized = normalizeText(record.canonical_name);
  if (normalized && candidateNames.has(normalized)) fail(`Duplicate candidate name=${record.canonical_name}`);
  else if (normalized) candidateNames.set(normalized, label);
}

const canonicalNames = new Map();
const canonicalDomains = new Map();
for (const platform of loadGroup('platforms')) {
  for (const name of [platform.canonical_name, ...(platform.aliases ?? [])]) {
    const normalized = normalizeText(name);
    if (normalized) canonicalNames.set(normalized, platform.id);
  }
  const domain = normalizeDomain(platform.official_domain_original || platform.official_url_original);
  if (domain) canonicalDomains.set(domain, platform.id);
}

let warnings = 0;
for (const record of records.filter((item) => ['add_now', 'needs_research'].includes(item.decision))) {
  const matches = new Set();
  for (const name of [record.canonical_name, ...(record.aliases ?? [])]) {
    const id = canonicalNames.get(normalizeText(name));
    if (id) matches.add(id);
  }
  const domainId = canonicalDomains.get(normalizeDomain(record.domain));
  if (domainId) matches.add(domainId);
  if (matches.size) {
    warnings += 1;
    console.warn(`WARNING: ${record.candidate_id} may match ${[...matches].join(', ')}`);
  }
}

if (failed) process.exit(1);
console.log(`CYA candidate audit passed: ${records.length} entries, ${warnings} possible matches.`);
