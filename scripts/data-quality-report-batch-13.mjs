import fs from 'node:fs';

const files = {
  platforms: 'data/platforms-batch-13.json',
  events: 'data/events-batch-13.json',
  evidence: 'data/evidence-batch-13.json',
  outcomes: 'data/outcomes-batch-13.json',
  products: 'data/products-batch-13.json',
  termsRisk: 'data/terms-risk-batch-13.json',
};

const data = Object.fromEntries(
  Object.entries(files).map(([key, file]) => [key, JSON.parse(fs.readFileSync(file, 'utf8'))]),
);

const lowConfidenceEvents = data.events.filter((row) => row.confidence === 'low');
const mediumConfidenceEvents = data.events.filter((row) => row.confidence === 'medium');
const lowReliabilityEvidence = data.evidence.filter((row) => row.reliability === 'low');
const mediumReliabilityEvidence = data.evidence.filter((row) => row.reliability === 'medium');

console.log('# CYA Batch 13 Data Quality Report');
console.log('');
console.log(`- platforms: ${data.platforms.length}`);
console.log(`- events: ${data.events.length}`);
console.log(`- evidence: ${data.evidence.length}`);
console.log(`- outcomes: ${data.outcomes.length}`);
console.log(`- products: ${data.products.length}`);
console.log(`- terms-risk: ${data.termsRisk.length}`);
console.log(`- low-confidence events: ${lowConfidenceEvents.length}`);
console.log(`- medium-confidence events: ${mediumConfidenceEvents.length}`);
console.log(`- low-reliability evidence: ${lowReliabilityEvidence.length}`);
console.log(`- medium-reliability evidence: ${mediumReliabilityEvidence.length}`);
