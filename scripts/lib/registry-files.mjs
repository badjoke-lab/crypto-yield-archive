import fs from 'node:fs';
import path from 'node:path';

export const dataDir = path.resolve('data');
export const candidateDir = path.resolve('data-staging/candidates');

export function readArray(filePath) {
  const value = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!Array.isArray(value)) throw new Error(`Expected an array in ${filePath}`);
  return value;
}

export function filesFor(prefix) {
  return fs.readdirSync(dataDir)
    .filter((file) => file === `${prefix}.json` || (file.startsWith(`${prefix}-batch-`) && file.endsWith('.json')))
    .sort()
    .map((file) => path.join(dataDir, file));
}

export function loadGroup(prefix) {
  return filesFor(prefix).flatMap(readArray);
}

export function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

export function normalizeDomain(value) {
  if (!value) return '';
  try {
    const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    return new URL(url).hostname.toLowerCase().replace(/^www\./, '');
  } catch {
    return String(value).toLowerCase().replace(/^www\./, '').replace(/\/$/, '');
  }
}

export function highestId(records, pattern) {
  return records.reduce((highest, record) => {
    const match = String(record.id ?? '').match(pattern);
    return match ? Math.max(highest, Number(match[1])) : highest;
  }, 0);
}

export function latestBatch() {
  const values = fs.readdirSync(dataDir)
    .map((file) => file.match(/-batch-(\d+)\.json$/)?.[1])
    .filter(Boolean)
    .map(Number);
  return values.length ? Math.max(...values) : 0;
}
