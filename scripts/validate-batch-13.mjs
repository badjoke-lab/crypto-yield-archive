import fs from 'node:fs';
import path from 'node:path';

const FILES = {
  platforms: 'data/platforms-batch-13.json',
  events: 'data/events-batch-13.json',
  evidence: 'data/evidence-batch-13.json',
  outcomes: 'data/outcomes-batch-13.json',
  products: 'data/products-batch-13.json',
  termsRisk: 'data/terms-risk-batch-13.json',
};

const GROUP_PATTERNS = {
  platforms: /^platforms(?:-batch-.+)?\.json$/,
  events: /^events(?:-batch-.+)?\.json$/,
  evidence: /^evidence(?:-batch-.+)?\.json$/,
};

function readArray(file) {
  const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(parsed)) throw new Error(`${file} must be an array`);
  return parsed;
}

function readCanonicalGroup(pattern) {
  return fs
    .readdirSync('data')
    .filter((fileName) => pattern.test(fileName))
    .sort((a, b) => a.localeCompare(b))
    .flatMap((fileName) => readArray(path.join('data', fileName)));
}

function readExistingGroup(pattern, batch13File) {
  return fs
    .readdirSync('data')
    .filter((fileName) => pattern.test(fileName) && path.join('data', fileName) !== batch13File)
    .sort((a, b) => a.localeCompare(b))
    .flatMap((fileName) => readArray(path.join('data', fileName)));
}

function requireFields(rows, fields, label) {
  for (const [index, row] of rows.entries()) {
    for (const field of fields) {
      if (row[field] === undefined || row[field] === null || row[field] === '') {
        throw new Error(`${label}[${index}] missing ${field}`);
      }
    }
  }
}

function ensureUnique(rows, field, label) {
  const seen = new Set();
  for (const row of rows) {
    if (!row[field]) continue;
    if (seen.has(row[field])) throw new Error(`${label} duplicate ${field}=${row[field]}`);
    seen.add(row[field]);
  }
}

function ensureNoExistingCollision(rows, existingRows, field, label) {
  const existing = new Set(existingRows.map((row) => row[field]).filter(Boolean));
  for (const row of rows) {
    if (row[field] && existing.has(row[field])) {
      throw new Error(`${label} collides with existing ${field}=${row[field]}`);
    }
  }
}

const data = Object.fromEntries(Object.entries(FILES).map(([key, file]) => [key, readArray(file)]));

requireFields(data.platforms, ['id', 'slug', 'canonical_name', 'type', 'status', 'summary', 'confidence', 'last_verified_at'], 'platforms');
requireFields(data.events, ['id', 'platform_id', 'event_type', 'event_date', 'title', 'description', 'confidence'], 'events');
requireFields(data.evidence, ['id', 'platform_id', 'source_type', 'title', 'url', 'publisher', 'reliability'], 'evidence');
requireFields(data.outcomes, ['platform_id', 'outcome_status', 'notes', 'confidence'], 'outcomes');
requireFields(data.products, ['platform_id', 'product_type', 'product_name'], 'products');
requireFields(data.termsRisk, ['platform_id', 'terms_status', 'notes', 'confidence'], 'terms-risk');

ensureUnique(data.platforms, 'id', 'platforms');
ensureUnique(data.platforms, 'slug', 'platforms');
ensureUnique(data.events, 'id', 'events');
ensureUnique(data.evidence, 'id', 'evidence');

const existingPlatforms = readExistingGroup(GROUP_PATTERNS.platforms, FILES.platforms);
const existingEvents = readExistingGroup(GROUP_PATTERNS.events, FILES.events);
const existingEvidence = readExistingGroup(GROUP_PATTERNS.evidence, FILES.evidence);

ensureNoExistingCollision(data.platforms, existingPlatforms, 'id', 'platforms');
ensureNoExistingCollision(data.platforms, existingPlatforms, 'slug', 'platforms');
ensureNoExistingCollision(data.events, existingEvents, 'id', 'events');
ensureNoExistingCollision(data.evidence, existingEvidence, 'id', 'evidence');

const allPlatforms = readCanonicalGroup(GROUP_PATTERNS.platforms);
const allEvents = readCanonicalGroup(GROUP_PATTERNS.events);
const allEvidence = readCanonicalGroup(GROUP_PATTERNS.evidence);
const platformIds = new Set(allPlatforms.map((row) => row.id));
const eventIds = new Set(allEvents.map((row) => row.id));
const evidenceIds = new Set(allEvidence.map((row) => row.id));

for (const row of data.events) {
  if (!platformIds.has(row.platform_id)) throw new Error(`Unknown platform_id in event ${row.id}`);
}
for (const row of data.evidence) {
  if (!platformIds.has(row.platform_id)) throw new Error(`Unknown platform_id in evidence ${row.id}`);
  if (row.event_id && !eventIds.has(row.event_id)) throw new Error(`Unknown event_id in evidence ${row.id}`);
}
for (const row of [...data.outcomes, ...data.products, ...data.termsRisk]) {
  if (!platformIds.has(row.platform_id)) throw new Error(`Unknown platform_id ${row.platform_id}`);
}
for (const row of data.termsRisk) {
  if (row.source_evidence_id && !evidenceIds.has(row.source_evidence_id)) {
    throw new Error(`Unknown source_evidence_id ${row.source_evidence_id}`);
  }
}

console.log(`CYA batch 13 validation passed: ${data.platforms.length} new platforms, ${data.events.length} events, ${data.evidence.length} evidence records.`);
