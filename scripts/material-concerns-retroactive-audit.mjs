import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('data');
const filesFor = (name) => fs.readdirSync(dataDir)
  .filter((file) => file === `${name}.json` || (file.startsWith(`${name}-batch-`) && file.endsWith('.json')))
  .sort()
  .map((file) => path.join(dataDir, file));

const load = (name) => filesFor(name).flatMap((file) => JSON.parse(fs.readFileSync(file, 'utf8')));

const platforms = load('platforms');
const events = load('events');
const evidence = load('evidence');
const outcomes = load('outcomes');
const termsRisk = load('terms-risk');

const byPlatform = (records) => records.reduce((map, record) => {
  const list = map.get(record.platform_id) || [];
  list.push(record);
  map.set(record.platform_id, list);
  return map;
}, new Map());

const eventsByPlatform = byPlatform(events);
const evidenceByPlatform = byPlatform(evidence);
const outcomeByPlatform = new Map(outcomes.map((record) => [record.platform_id, record]));
const termsByPlatform = new Map(termsRisk.map((record) => [record.platform_id, record]));

const STATES = new Set(['derivable', 'research_required', 'not_applicable']);
const DIMENSIONS = [
  'principal_guarantee',
  'yield_history',
  'source_of_yield',
  'terms_asset_treatment',
  'withdrawal_restrictions',
  'regulatory_actions',
  'failure_insolvency_chain',
  'customer_outcome',
];

const textFor = (platform, platformEvents, platformEvidence, outcome, terms) => [
  platform.summary,
  platform.what_happened,
  platform.uncertainty_notes,
  ...platformEvents.flatMap((event) => [event.event_type, event.title, event.description, event.notes]),
  ...platformEvidence.flatMap((source) => [source.title, source.notes, source.claim_scope]),
  outcome?.notes,
  terms?.notes,
  terms?.asset_ownership_interpretation,
].filter(Boolean).join(' ').toLowerCase();

const has = (text, expression) => expression.test(text);

const hasUsablePrincipalLanguage = (statements) => statements
  .filter(Boolean)
  .map((statement) => String(statement).toLowerCase())
  .some((statement) => {
    const unresolved = /does not (?:establish|confirm|show|prove|verify).{0,100}(?:\bprincipal\b|元本|capital (?:guarantee|protection))|(?:\bprincipal\b|元本|capital (?:guarantee|protection)).{0,100}(?:unknown|unclear|not established|not confirmed|not verified)/;
    if (unresolved.test(statement)) return false;
    return /\bprincipal\b|元本|元本保証|capital (?:guarantee|guaranteed|protection|protected)|(?:guarantee|guaranteed|protection|protected).{0,40}\bprincipal\b|unsecured|non-segregated|segregated management/.test(statement);
  });

function classify(platform) {
  const platformEvents = eventsByPlatform.get(platform.id) || [];
  const platformEvidence = evidenceByPlatform.get(platform.id) || [];
  const outcome = outcomeByPlatform.get(platform.id);
  const terms = termsByPlatform.get(platform.id);
  const text = textFor(platform, platformEvents, platformEvidence, outcome, terms);

  const hasYieldEvidence = platformEvents.some((event) => ['yield_program_started', 'yield_rate_changed'].includes(event.event_type))
    || has(text, /\bapy\b|\bapr\b|yield|interest|reward|promot|lending fee|staking/);
  const hasSourceOfYield = has(text, /source of yield|yield source|generated through|otc|\bdex\b|staking|validator|lending|borrow|trading|market maker|liquidity provision/);
  const hasWithdrawalEvent = platformEvents.some((event) => ['withdrawals_suspended', 'deposits_suspended'].includes(event.event_type))
    || has(text, /withdrawal(s)? (suspend|halt|freeze|restrict|limit)|redemption (suspend|halt|freeze|restrict|limit)/);
  const hasRegulatoryEvent = platformEvents.some((event) => event.event_type === 'regulatory_action')
    || has(text, /regulatory action|enforcement|regulator|\bsec\b|\bfca\b|\bfsa\b|\bfi?u\b|fine|cease and desist|consent order/);
  const hasFailureEvent = platformEvents.some((event) => ['bankruptcy_filed', 'restructuring_started', 'restructuring_completed', 'operations_ended', 'asset_sale_announced', 'asset_sale_completed'].includes(event.event_type))
    || ['bankrupt', 'restructuring', 'operations_ended'].includes(platform.status)
    || Boolean(platform.failure_reason && platform.failure_reason !== 'unknown');
  const principalStatements = [
    platform.summary,
    platform.what_happened,
    platform.uncertainty_notes,
    ...platformEvents.flatMap((event) => [event.title, event.description, event.notes]),
    ...platformEvidence.flatMap((source) => [source.title, source.notes]),
    terms?.notes,
    terms?.asset_ownership_interpretation,
  ];
  const hasPrincipalLanguage = hasUsablePrincipalLanguage(principalStatements);

  return {
    platform_id: platform.id,
    slug: platform.slug,
    canonical_name: platform.canonical_name,
    dimensions: {
      principal_guarantee: hasPrincipalLanguage ? 'derivable' : 'research_required',
      yield_history: hasYieldEvidence ? 'derivable' : 'research_required',
      source_of_yield: hasSourceOfYield ? 'derivable' : 'research_required',
      terms_asset_treatment: terms && terms.terms_status && terms.terms_status !== 'unknown' ? 'derivable' : 'research_required',
      withdrawal_restrictions: hasWithdrawalEvent ? 'derivable' : 'research_required',
      regulatory_actions: hasRegulatoryEvent ? 'derivable' : 'research_required',
      failure_insolvency_chain: hasFailureEvent ? 'derivable' : 'research_required',
      customer_outcome: outcome && outcome.outcome_status && outcome.outcome_status !== 'unknown' ? 'derivable' : 'research_required',
    },
  };
}

const auditRows = platforms.map(classify).sort((a, b) => a.platform_id.localeCompare(b.platform_id));
let failed = false;

if (auditRows.length !== platforms.length) {
  console.error(`ERROR: audited ${auditRows.length} of ${platforms.length} canonical platforms`);
  failed = true;
}

for (const row of auditRows) {
  for (const dimension of DIMENSIONS) {
    const state = row.dimensions[dimension];
    if (!STATES.has(state)) {
      console.error(`ERROR: ${row.platform_id} missing valid ${dimension} classification`);
      failed = true;
    }
  }
}

const summary = Object.fromEntries(DIMENSIONS.map((dimension) => [dimension, {
  derivable: auditRows.filter((row) => row.dimensions[dimension] === 'derivable').length,
  research_required: auditRows.filter((row) => row.dimensions[dimension] === 'research_required').length,
  not_applicable: auditRows.filter((row) => row.dimensions[dimension] === 'not_applicable').length,
}]));

console.log(`# CYA Material Concerns Full-Corpus Audit`);
console.log(`platforms=${auditRows.length}`);
for (const dimension of DIMENSIONS) {
  const counts = summary[dimension];
  console.log(`${dimension}: derivable=${counts.derivable} research_required=${counts.research_required} not_applicable=${counts.not_applicable}`);
}
console.log(`research_queue=${auditRows.filter((row) => Object.values(row.dimensions).includes('research_required')).length}`);

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ generated_from: 'canonical_corpus', platforms: auditRows.length, dimensions: DIMENSIONS, summary, rows: auditRows }, null, 2));
}

if (failed) process.exit(1);
