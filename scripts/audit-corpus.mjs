import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dataDir = path.join(root, 'data');
const candidateDir = path.join(root, 'data-staging', 'candidates');

const filesFor = (name) => fs.readdirSync(dataDir)
  .filter((file) => file === `${name}.json` || (file.startsWith(`${name}-batch-`) && file.endsWith('.json')))
  .sort()
  .map((file) => path.join('data', file));

function readArray(file) {
  const value = JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
  if (!Array.isArray(value)) throw new Error(`${file} must contain an array`);
  return value.map((record, index) => ({ ...record, __file: file, __index: index }));
}

const loadGroup = (name) => filesFor(name).flatMap(readArray);
const platforms = loadGroup('platforms');
const events = loadGroup('events');
const evidence = loadGroup('evidence');
const outcomes = loadGroup('outcomes');
const products = loadGroup('products');
const termsRisk = loadGroup('terms-risk');

const blockers = [];
const debt = [];
const notes = [];
const block = (message) => blockers.push(message);
const flag = (message) => debt.push(message);
const recordLabel = (record) => `${record.__file}#${record.__index}`;

const normalizeText = (value) => String(value ?? '')
  .normalize('NFKC')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

function normalizeDomain(value) {
  if (!value) return '';
  try {
    const url = value.includes('://') ? new URL(value) : new URL(`https://${value}`);
    return url.hostname.toLowerCase().replace(/^www\./, '');
  } catch {
    return String(value).toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];
  }
}

function collisionMap(rows, valuesForRow) {
  const map = new Map();
  for (const row of rows) {
    for (const raw of valuesForRow(row)) {
      const value = normalizeText(raw);
      if (!value) continue;
      const list = map.get(value) ?? [];
      list.push(row);
      map.set(value, list);
    }
  }
  return [...map.entries()].filter(([, rowsForValue]) => new Set(rowsForValue.map((row) => row.id)).size > 1);
}

const platformById = new Map(platforms.map((row) => [row.id, row]));
const eventById = new Map(events.map((row) => [row.id, row]));
const evidenceById = new Map(evidence.map((row) => [row.id, row]));
const evidenceByPlatform = new Map();
const evidenceByEvent = new Map();
const productsByPlatform = new Map();

for (const row of evidence) {
  const platformRows = evidenceByPlatform.get(row.platform_id) ?? [];
  platformRows.push(row);
  evidenceByPlatform.set(row.platform_id, platformRows);
  if (row.event_id) {
    const eventRows = evidenceByEvent.get(row.event_id) ?? [];
    eventRows.push(row);
    evidenceByEvent.set(row.event_id, eventRows);
  }
}
for (const row of products) {
  const rows = productsByPlatform.get(row.platform_id) ?? [];
  rows.push(row);
  productsByPlatform.set(row.platform_id, rows);
}

// Exact canonical-name, alias, and domain collisions.
for (const [value, rows] of collisionMap(platforms, (row) => [row.canonical_name])) {
  block(`canonical name collision "${value}": ${rows.map((row) => `${row.id} (${row.canonical_name})`).join(', ')}`);
}
for (const [value, rows] of collisionMap(platforms, (row) => row.aliases ?? [])) {
  flag(`alias collision "${value}": ${rows.map((row) => `${row.id} (${row.canonical_name})`).join(', ')}`);
}
const domains = new Map();
for (const row of platforms) {
  const domain = normalizeDomain(row.official_domain_original || row.official_url_original);
  if (!domain) continue;
  const list = domains.get(domain) ?? [];
  list.push(row);
  domains.set(domain, list);
}
for (const [domain, rows] of domains) {
  if (rows.length > 1) block(`official domain collision ${domain}: ${rows.map((row) => `${row.id} (${row.canonical_name})`).join(', ')}`);
}

// Coverage and reference integrity beyond the base validator.
for (const platform of platforms) {
  const platformEvidence = evidenceByPlatform.get(platform.id) ?? [];
  const platformProducts = productsByPlatform.get(platform.id) ?? [];
  if (platformEvidence.length < 3) flag(`${platform.id} ${platform.canonical_name}: fewer than 3 evidence records (${platformEvidence.length})`);
  if (!platformProducts.length) block(`${platform.id} ${platform.canonical_name}: no product record`);
  if (['operations_ended','bankrupt','acquired','rebranded'].includes(platform.status) && !platform.archived_url) {
    flag(`${platform.id} ${platform.canonical_name}: historical-side record lacks archived_url`);
  }
  if (platform.status === 'active' && platform.end_date) block(`${platform.id} ${platform.canonical_name}: active status with end_date=${platform.end_date}`);
  if (platform.status === 'operations_ended' && !platform.end_date) flag(`${platform.id} ${platform.canonical_name}: operations_ended without exact end_date`);
  if (platform.status === 'acquired' && platform.failure_reason !== 'acquisition') block(`${platform.id} ${platform.canonical_name}: acquired status requires failure_reason=acquisition`);
  if (platform.failure_reason === 'acquisition' && platform.status !== 'acquired') block(`${platform.id} ${platform.canonical_name}: acquisition reason requires acquired status`);
  if (platform.official_url_status === 'unsafe') flag(`${platform.id} ${platform.canonical_name}: original URL is unsafe`);
  if (platform.official_url_status === 'repurposed') flag(`${platform.id} ${platform.canonical_name}: original URL is repurposed`);
}

for (const event of events) {
  const linked = (evidenceByEvent.get(event.id) ?? []).length;
  if (event.source_count === undefined) flag(`${event.id}: source_count missing`);
  else if (linked !== event.source_count) block(`${event.id}: source_count=${event.source_count}, directly linked evidence=${linked}`);
}

const outcomeByPlatform = new Map(outcomes.map((row) => [row.platform_id, row]));
for (const platform of platforms) {
  const outcome = outcomeByPlatform.get(platform.id);
  if (!outcome) block(`${platform.id} ${platform.canonical_name}: missing outcome`);
  if (!termsRisk.some((row) => row.platform_id === platform.id)) block(`${platform.id} ${platform.canonical_name}: missing terms-risk`);
}

const strongPrimaryTypes = new Set(['official_statement','court_document','bankruptcy_document','regulatory_notice']);
for (const outcome of outcomes) {
  const platform = platformById.get(outcome.platform_id);
  const name = platform?.canonical_name ?? outcome.platform_id;
  const platformEvidence = evidenceByPlatform.get(outcome.platform_id) ?? [];
  if (outcome.outcome_status === 'claims_ongoing' && outcome.repayment_completed_at) block(`${name}: claims_ongoing has repayment_completed_at`);
  if (outcome.outcome_status === 'full_repayment') {
    const strongOutcomeEvidence = platformEvidence.filter((row) =>
      row.reliability === 'high' && strongPrimaryTypes.has(row.source_type) && row.claim_scope === 'customer_outcome');
    if (!strongOutcomeEvidence.length) block(`${name}: full_repayment lacks high-reliability primary customer_outcome evidence`);
  }
  if (outcome.outcome_status === 'not_applicable' && ['bankrupt','restructuring','withdrawals_suspended'].includes(platform?.status)) {
    block(`${name}: not_applicable outcome conflicts with status=${platform.status}`);
  }
}

for (const row of termsRisk) {
  if (row.source_evidence_id && !evidenceById.has(row.source_evidence_id)) block(`${recordLabel(row)}: missing terms source ${row.source_evidence_id}`);
  if (row.terms_status === 'unknown') flag(`${platformById.get(row.platform_id)?.canonical_name ?? row.platform_id}: terms status unknown`);
}

// Candidate ledger integrity and fragmented decision history.
const candidateFiles = fs.existsSync(candidateDir)
  ? fs.readdirSync(candidateDir).filter((file) => file.endsWith('.json')).sort()
  : [];
const candidateRows = candidateFiles.flatMap((file) => readArray(path.join('data-staging', 'candidates', file))
  .map((row) => ({ ...row, __ledger: file })));
const candidateIds = new Map();
for (const row of candidateRows) {
  if (!row.candidate_id) continue;
  const list = candidateIds.get(row.candidate_id) ?? [];
  list.push(row);
  candidateIds.set(row.candidate_id, list);
}
for (const [candidateId, rows] of candidateIds) {
  if (rows.length > 1) block(`${candidateId} occurs in multiple candidate ledgers: ${rows.map((row) => row.__ledger).join(', ')}`);
}
const activeCandidates = candidateRows.filter((row) => row.__ledger === 'cya-candidates.json');
for (const row of activeCandidates) {
  if (!['add_now','needs_research'].includes(row.decision)) flag(`${row.candidate_id}: active ledger decision=${row.decision}`);
  const matched = row.duplicate_check?.matched_platform_ids ?? [];
  if (matched.length) block(`${row.candidate_id}: active candidate already matches canonical ${matched.join(', ')}`);
}
const splitConsumed = candidateFiles.filter((file) => file.startsWith('cya-consumed-') && file !== 'cya-consumed.json');
if (splitConsumed.length) flag(`split consumed ledgers remain: ${splitConsumed.join(', ')}`);

// Quality statistics.
const mediumEvidence = evidence.filter((row) => row.reliability === 'medium').length;
const lowEvidence = evidence.filter((row) => row.reliability === 'low').length;
const lowConfidencePlatforms = platforms.filter((row) => row.confidence === 'low').length;
const lowConfidenceEvents = events.filter((row) => row.confidence === 'low').length;
const unknownOutcomes = outcomes.filter((row) => row.outcome_status === 'unknown').length;
const ongoingOutcomes = outcomes.filter((row) => row.outcome_status === 'claims_ongoing').length;
const unclearTerms = termsRisk.filter((row) => row.terms_status === 'unclear').length;

notes.push(`platforms=${platforms.length}`);
notes.push(`events=${events.length}`);
notes.push(`evidence=${evidence.length}`);
notes.push(`outcomes=${outcomes.length}`);
notes.push(`products=${products.length}`);
notes.push(`terms-risk=${termsRisk.length}`);
notes.push(`active candidates=${activeCandidates.length}`);
notes.push(`medium-reliability evidence=${mediumEvidence}`);
notes.push(`low-reliability evidence=${lowEvidence}`);
notes.push(`low-confidence platforms=${lowConfidencePlatforms}`);
notes.push(`low-confidence events=${lowConfidenceEvents}`);
notes.push(`unknown outcomes=${unknownOutcomes}`);
notes.push(`claims ongoing=${ongoingOutcomes}`);
notes.push(`unclear terms=${unclearTerms}`);

console.log('# CYA Corpus Audit');
console.log('');
console.log('## Counts');
for (const note of notes) console.log(`- ${note}`);
console.log('');
console.log(`## Blockers (${blockers.length})`);
if (!blockers.length) console.log('- None.');
else for (const message of blockers) console.log(`- ${message}`);
console.log('');
console.log(`## Quality debt (${debt.length})`);
if (!debt.length) console.log('- None.');
else for (const message of debt) console.log(`- ${message}`);

if (blockers.length) process.exit(1);
