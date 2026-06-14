import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('data');
const filesFor = (name) => fs.readdirSync(dataDir)
  .filter((file) => file === `${name}.json` || (file.startsWith(`${name}-batch-`) && file.endsWith('.json')))
  .sort()
  .map((file) => `data/${file}`);

const read = (file) => {
  const value = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
  if (!Array.isArray(value)) throw new Error(`${file} must be an array`);
  return value.map((record, index) => ({ ...record, __file: file, __index: index }));
};
const load = (name) => filesFor(name).flatMap(read);
const recordLabel = (record) => `${record.__file}#${record.__index}`;

const platforms = load('platforms');
const events = load('events');
const evidence = load('evidence');
const outcomes = load('outcomes');
const products = load('products');
const termsRisk = load('terms-risk');
const platformById = new Map(platforms.map((platform) => [platform.id, platform]));
const platformName = (id) => platformById.get(id)?.canonical_name ?? id;
const evidenceByPlatform = new Map();
for (const source of evidence) {
  const rows = evidenceByPlatform.get(source.platform_id) ?? [];
  rows.push(source);
  evidenceByPlatform.set(source.platform_id, rows);
}

const groups = {
  'Low reliability evidence': evidence.filter((r) => r.reliability === 'low'),
  'Medium reliability evidence': evidence.filter((r) => r.reliability === 'medium'),
  'Low confidence platforms': platforms.filter((r) => r.confidence === 'low'),
  'Low confidence events': events.filter((r) => r.confidence === 'low'),
  'Unknown or ongoing outcomes': outcomes.filter((r) => ['unknown','claims_ongoing'].includes(r.outcome_status)),
  'Unknown terms-risk records': termsRisk.filter((r) => r.terms_status === 'unknown'),
  'Platforms with fewer than 3 evidence records': platforms.filter((r) => (evidenceByPlatform.get(r.id) ?? []).length < 3),
};

const report = [
  '# CYA Data Quality Report', '',
  'Generated from all discovered JSON batch files.', '',
  '## Counts', '',
  `- platforms: ${platforms.length}`,
  `- events: ${events.length}`,
  `- evidence: ${evidence.length}`,
  `- outcomes: ${outcomes.length}`,
  `- products: ${products.length}`,
  `- terms-risk: ${termsRisk.length}`, '',
  '## Priority issues', '',
  ...Object.entries(groups).map(([title, rows]) => `- ${title.toLowerCase()}: ${rows.length}`), ''
];

function render(title, row) {
  if (title.includes('evidence')) return `- ${row.id} / ${platformName(row.platform_id)} / ${row.title} / ${recordLabel(row)}`;
  if (title === 'Low confidence platforms') return `- ${row.id} / ${row.canonical_name} / ${recordLabel(row)}`;
  if (title === 'Low confidence events') return `- ${row.id} / ${platformName(row.platform_id)} / ${row.event_date} / ${row.title} / ${recordLabel(row)}`;
  if (title === 'Unknown or ongoing outcomes') return `- ${platformName(row.platform_id)} / ${row.outcome_status} / confidence=${row.confidence} / ${recordLabel(row)}`;
  if (title === 'Unknown terms-risk records') return `- ${platformName(row.platform_id)} / confidence=${row.confidence} / ${recordLabel(row)}`;
  return `- ${row.canonical_name} / evidence=${(evidenceByPlatform.get(row.id) ?? []).length}`;
}

for (const [title, rows] of Object.entries(groups)) {
  report.push(`## ${title}`, '');
  if (!rows.length) report.push('None.');
  else for (const row of rows) report.push(render(title, row));
  report.push('');
}

console.log(report.join('\n'));
