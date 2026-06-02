import fs from 'node:fs';
import path from 'node:path';

const DATA_FILES = [
  'data/platforms.json',
  'data/events.json',
  'data/evidence.json',
  'data/outcomes.json',
  'data/products.json',
  'data/terms-risk.json',
];

const ID_FILES = [
  ['platforms', 'data/platforms.json'],
  ['events', 'data/events.json'],
  ['evidence', 'data/evidence.json'],
];

let failed = false;

function fail(message) {
  failed = true;
  console.error(`ERROR: ${message}`);
}

function readJsonArray(filePath) {
  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(absolutePath)) {
    fail(`Missing required file: ${filePath}`);
    return [];
  }

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  } catch (error) {
    fail(`Invalid JSON in ${filePath}: ${error.message}`);
    return [];
  }

  if (!Array.isArray(parsed)) {
    fail(`Root value must be an array: ${filePath}`);
    return [];
  }

  return parsed;
}

function checkDuplicateValues(records, field, label) {
  const seen = new Map();
  for (const [index, record] of records.entries()) {
    if (!record || typeof record !== 'object') continue;
    const value = record[field];
    if (!value) continue;
    if (seen.has(value)) {
      fail(`Duplicate ${field} in ${label}: ${value} at indexes ${seen.get(value)} and ${index}`);
    } else {
      seen.set(value, index);
    }
  }
}

const loaded = new Map();

for (const filePath of DATA_FILES) {
  loaded.set(filePath, readJsonArray(filePath));
}

for (const [label, filePath] of ID_FILES) {
  const records = loaded.get(filePath) ?? [];
  checkDuplicateValues(records, 'id', label);
}

checkDuplicateValues(loaded.get('data/platforms.json') ?? [], 'slug', 'platforms');

if (failed) {
  process.exit(1);
}

console.log('CYA data validation passed.');
