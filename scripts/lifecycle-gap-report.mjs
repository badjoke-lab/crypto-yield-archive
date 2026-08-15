import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dataDir = path.join(root, 'data');

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
const outcomes = loadGroup('outcomes');
const evidence = loadGroup('evidence');

const eventsByPlatform = new Map();
const evidenceByPlatform = new Map();
const outcomeByPlatform = new Map(outcomes.map((row) => [row.platform_id, row]));

for (const row of events) {
  const list = eventsByPlatform.get(row.platform_id) ?? [];
  list.push(row);
  eventsByPlatform.set(row.platform_id, list);
}
for (const row of evidence) {
  const list = evidenceByPlatform.get(row.platform_id) ?? [];
  list.push(row);
  evidenceByPlatform.set(row.platform_id, list);
}

const norm = (value) => String(value ?? '')
  .normalize('NFKC')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

const textForEvent = (event) => norm([
  event.event_type,
  event.title,
  event.description,
  event.notes,
].filter(Boolean).join(' '));

const stagePatterns = {
  impairment: [
    /withdrawal/, /suspend/, /freeze/, /halt/, /pause/, /impair/, /default/, /liquidity/, /redemption/, /restriction/, /distress/,
  ],
  insolvency: [
    /bankrupt/, /insolv/, /chapter 11/, /liquidat/, /restructur/, /receivership/, /administration/, /winding up/,
  ],
  claims: [
    /claim/, /creditor/, /proof of claim/, /bar date/, /customer claim/, /distribution plan/, /reorganization plan/,
  ],
  recovery: [
    /repay/, /repayment/, /recover/, /distribution/, /payout/, /return of assets/, /settlement/, /redemption completed/,
  ],
};

function eventHasStage(rows, stage) {
  return rows.some((row) => stagePatterns[stage].some((pattern) => pattern.test(textForEvent(row))));
}

function evidenceHasStage(rows, stage) {
  return rows.some((row) => {
    const text = norm([row.claim_scope, row.title, row.notes, row.source_type].filter(Boolean).join(' '));
    return stagePatterns[stage].some((pattern) => pattern.test(text));
  });
}

const distressStatuses = new Set(['withdrawals_suspended', 'restructuring', 'bankrupt']);
const historicalStatuses = new Set(['operations_ended', 'withdrawals_suspended', 'restructuring', 'bankrupt']);
const finalOutcomeStatuses = new Set(['full_repayment', 'partial_repayment', 'no_recovery', 'not_applicable']);

function stagePresence(outcome, platformEvents, platformEvidence) {
  const impairment = eventHasStage(platformEvents, 'impairment') || evidenceHasStage(platformEvidence, 'impairment');
  const insolvency = eventHasStage(platformEvents, 'insolvency') || evidenceHasStage(platformEvidence, 'insolvency');
  const claims = eventHasStage(platformEvents, 'claims') || evidenceHasStage(platformEvidence, 'claims')
    || Boolean(outcome?.claim_process_url)
    || Boolean(outcome?.claim_classes?.length);
  const recovery = eventHasStage(platformEvents, 'recovery') || evidenceHasStage(platformEvidence, 'recovery')
    || Boolean(outcome?.repayment_started_at)
    || Boolean(outcome?.repayment_completed_at);
  const currentOutcome = Boolean(outcome);
  const finalOutcome = Boolean(outcome && finalOutcomeStatuses.has(outcome.outcome_status));
  return { impairment, insolvency, claims, recovery, currentOutcome, finalOutcome };
}

function expectedStages(platform, outcome) {
  const repaymentRecorded = ['full_repayment', 'partial_repayment'].includes(outcome?.outcome_status)
    || Boolean(outcome?.repayment_started_at)
    || Boolean(outcome?.repayment_completed_at);
  return {
    impairment: distressStatuses.has(platform.status),
    insolvency: ['restructuring', 'bankrupt'].includes(platform.status),
    claims: ['restructuring', 'bankrupt'].includes(platform.status),
    recovery: repaymentRecorded,
    currentOutcome: true,
    finalOutcome: outcome?.outcome_status !== 'claims_ongoing',
  };
}

function priorityFor(platform, outcome, missing) {
  let score = 0;
  if (platform.status === 'bankrupt') score += 50;
  else if (platform.status === 'restructuring') score += 45;
  else if (platform.status === 'withdrawals_suspended') score += 40;
  else if (platform.status === 'operations_ended') score += 10;

  if (!outcome || outcome.outcome_status === 'unknown') score += 35;
  if (outcome?.outcome_status === 'claims_ongoing') score += 25;
  score += missing.length * 5;
  if (missing.includes('claims')) score += 5;
  if (missing.includes('recovery')) score += 5;
  return score;
}

function reviewDateFor(platform, outcome) {
  return outcome?.last_verified_at
    || outcome?.as_of
    || platform.last_verified_at
    || '9999-12-31';
}

const rows = [];
for (const platform of platforms) {
  if (!historicalStatuses.has(platform.status)) continue;

  const outcome = outcomeByPlatform.get(platform.id);
  const platformEvents = eventsByPlatform.get(platform.id) ?? [];
  const platformEvidence = evidenceByPlatform.get(platform.id) ?? [];

  const present = stagePresence(outcome, platformEvents, platformEvidence);
  const expected = expectedStages(platform, outcome);
  const missing = Object.entries(expected)
    .filter(([, needed]) => needed)
    .map(([stage]) => stage)
    .filter((stage) => !present[stage]);

  const unresolvedCurrent = !outcome || ['unknown', 'claims_ongoing'].includes(outcome.outcome_status);
  if (!missing.length && !unresolvedCurrent) continue;

  rows.push({
    platform_id: platform.id,
    name: platform.canonical_name,
    status: platform.status,
    outcome_status: outcome?.outcome_status ?? 'missing',
    missing,
    unresolved_current: unresolvedCurrent,
    review_date: reviewDateFor(platform, outcome),
    events: platformEvents.length,
    evidence: platformEvidence.length,
    priority: priorityFor(platform, outcome, missing),
  });
}

const severityRows = [...rows].sort((a, b) => b.priority - a.priority
  || a.platform_id.localeCompare(b.platform_id));

const actionableRows = rows
  .filter((row) => row.missing.length > 0 || ['missing', 'unknown'].includes(row.outcome_status))
  .sort((a, b) => a.review_date.localeCompare(b.review_date)
    || b.priority - a.priority
    || a.platform_id.localeCompare(b.platform_id));

const ongoingWatchRows = rows
  .filter((row) => row.outcome_status === 'claims_ongoing' && row.missing.length === 0)
  .sort((a, b) => a.review_date.localeCompare(b.review_date)
    || b.priority - a.priority
    || a.platform_id.localeCompare(b.platform_id));

const counts = {
  platforms: platforms.length,
  historical_or_distress_platforms: platforms.filter((row) => historicalStatuses.has(row.status)).length,
  unresolved_inventory_rows: rows.length,
  next_review_queue_rows: actionableRows.length,
  ongoing_watch_rows: ongoingWatchRows.length,
  missing_outcome: rows.filter((row) => row.outcome_status === 'missing').length,
  unknown_outcome: rows.filter((row) => row.outcome_status === 'unknown').length,
  claims_ongoing: rows.filter((row) => row.outcome_status === 'claims_ongoing').length,
};

function printRows(list) {
  if (!list.length) {
    console.log('- None.');
    return;
  }
  for (const row of list) {
    const missing = row.missing.length ? row.missing.join(',') : 'none';
    console.log(`- P${row.priority} ${row.platform_id} ${row.name} | reviewed=${row.review_date} | status=${row.status} | outcome=${row.outcome_status} | missing=${missing} | events=${row.events} | evidence=${row.evidence}`);
  }
}

console.log('# CYA Lifecycle Gap Report');
console.log('');
console.log('## Counts');
for (const [key, value] of Object.entries(counts)) console.log(`- ${key}=${value}`);
console.log('');
console.log('## Unresolved lifecycle inventory');
printRows(severityRows);
console.log('');
console.log('## Next enrichment review queue');
console.log('- Ordering: oldest canonical review date first, then severity, then platform ID.');
printRows(actionableRows);
console.log('');
console.log('## Ongoing watch');
console.log('- claims_ongoing records with no detected missing lifecycle stage.');
printRows(ongoingWatchRows);
