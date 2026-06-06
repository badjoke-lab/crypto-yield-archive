import fs from 'node:fs';
import path from 'node:path';

const FILE_GROUPS = {
  platforms: ['data/platforms.json', 'data/platforms-batch-04.json'],
  events: ['data/events.json', 'data/events-batch-03.json', 'data/events-batch-04.json'],
  evidence: ['data/evidence.json', 'data/evidence-batch-03.json', 'data/evidence-batch-04.json'],
  outcomes: ['data/outcomes.json', 'data/outcomes-batch-04.json'],
  products: ['data/products.json', 'data/products-batch-04.json'],
  termsRisk: ['data/terms-risk.json', 'data/terms-risk-batch-04.json'],
};

function readArray(filePath) {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) return [];
  const parsed = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  if (!Array.isArray(parsed)) throw new Error(`${filePath} must be an array`);
  return parsed.map((record, index) => ({ ...record, __file: filePath, __index: index }));
}

function load(files) {
  return files.flatMap(readArray);
}

function recordLabel(record) {
  return `${record.__file}#${record.__index}`;
}

function clean(record) {
  const copy = { ...record };
  delete copy.__file;
  delete copy.__index;
  return copy;
}

const platforms = load(FILE_GROUPS.platforms);
const events = load(FILE_GROUPS.events);
const evidence = load(FILE_GROUPS.evidence);
const outcomes = load(FILE_GROUPS.outcomes);
const products = load(FILE_GROUPS.products);
const termsRisk = load(FILE_GROUPS.termsRisk);

const platformById = new Map(platforms.map((platform) => [platform.id, platform]));
const evidenceByPlatform = new Map();
for (const source of evidence) {
  const list = evidenceByPlatform.get(source.platform_id) ?? [];
  list.push(source);
  evidenceByPlatform.set(source.platform_id, list);
}

function platformName(platformId) {
  return platformById.get(platformId)?.canonical_name ?? platformId;
}

const lowReliabilityEvidence = evidence.filter((source) => source.reliability === 'low');
const mediumReliabilityEvidence = evidence.filter((source) => source.reliability === 'medium');
const lowConfidencePlatforms = platforms.filter((platform) => platform.confidence === 'low');
const lowConfidenceEvents = events.filter((event) => event.confidence === 'low');
const unknownOutcomes = outcomes.filter((outcome) => outcome.outcome_status === 'unknown' || outcome.outcome_status === 'claims_ongoing');
const unknownTerms = termsRisk.filter((term) => term.terms_status === 'unknown');
const platformsWithFewEvidence = platforms.filter((platform) => (evidenceByPlatform.get(platform.id) ?? []).length < 3);

const report = [];
report.push('# CYA Data Quality Report');
report.push('');
report.push(`Generated from local JSON files.`);
report.push('');
report.push('## Counts');
report.push('');
report.push(`- platforms: ${platforms.length}`);
report.push(`- events: ${events.length}`);
report.push(`- evidence: ${evidence.length}`);
report.push(`- outcomes: ${outcomes.length}`);
report.push(`- products: ${products.length}`);
report.push(`- terms-risk: ${termsRisk.length}`);
report.push('');

report.push('## Priority issues');
report.push('');
report.push(`- low reliability evidence: ${lowReliabilityEvidence.length}`);
report.push(`- medium reliability evidence: ${mediumReliabilityEvidence.length}`);
report.push(`- low confidence platforms: ${lowConfidencePlatforms.length}`);
report.push(`- low confidence events: ${lowConfidenceEvents.length}`);
report.push(`- unknown or ongoing outcomes: ${unknownOutcomes.length}`);
report.push(`- unknown terms-risk records: ${unknownTerms.length}`);
report.push(`- platforms with fewer than 3 evidence records: ${platformsWithFewEvidence.length}`);
report.push('');

function addSection(title, rows, render) {
  report.push(`## ${title}`);
  report.push('');
  if (!rows.length) {
    report.push('None.');
    report.push('');
    return;
  }
  for (const row of rows) report.push(render(row));
  report.push('');
}

addSection('Low reliability evidence', lowReliabilityEvidence, (source) => `- ${source.id} / ${platformName(source.platform_id)} / ${source.title} / ${recordLabel(source)}`);
addSection('Medium reliability evidence', mediumReliabilityEvidence, (source) => `- ${source.id} / ${platformName(source.platform_id)} / ${source.title} / ${recordLabel(source)}`);
addSection('Low confidence platforms', lowConfidencePlatforms, (platform) => `- ${platform.id} / ${platform.canonical_name} / ${recordLabel(platform)}`);
addSection('Low confidence events', lowConfidenceEvents, (event) => `- ${event.id} / ${platformName(event.platform_id)} / ${event.event_date} / ${event.title} / ${recordLabel(event)}`);
addSection('Unknown or ongoing outcomes', unknownOutcomes, (outcome) => `- ${platformName(outcome.platform_id)} / ${outcome.outcome_status} / confidence=${outcome.confidence} / ${recordLabel(outcome)}`);
addSection('Unknown terms-risk records', unknownTerms, (term) => `- ${platformName(term.platform_id)} / confidence=${term.confidence} / ${recordLabel(term)}`);
addSection('Platforms with fewer than 3 evidence records', platformsWithFewEvidence, (platform) => `- ${platform.canonical_name} / evidence=${(evidenceByPlatform.get(platform.id) ?? []).length}`);

console.log(report.join('\n'));
