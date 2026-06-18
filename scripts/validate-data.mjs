import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('data');
const filesFor = (name) => fs.readdirSync(dataDir)
  .filter((file) => file === `${name}.json` || (file.startsWith(`${name}-batch-`) && file.endsWith('.json')))
  .sort()
  .map((file) => `data/${file}`);

const FILE_GROUPS = {
  platforms: filesFor('platforms'),
  events: filesFor('events'),
  evidence: filesFor('evidence'),
  outcomes: filesFor('outcomes'),
  products: filesFor('products'),
  termsRisk: filesFor('terms-risk'),
};

const ENUMS = {
  platformStatus: new Set(['active','limited','withdrawals_suspended','restructuring','bankrupt','acquired','rebranded','operations_ended','inactive','unknown']),
  platformType: new Set(['cefi_lending','crypto_interest_account','centralized_yield','borrow_lend_platform','institutional_lending','exchange_earn','defi_lending','yield_aggregator','structured_yield','unknown']),
  failureReason: new Set(['insolvency','liquidity_crisis','counterparty_exposure','misconduct','regulatory_action','market_collapse','risk_mismanagement','voluntary_shutdown','acquisition','restructuring','unknown']),
  confidence: new Set(['high','medium','low']),
  officialUrlStatus: new Set(['live_verified','live_unverified','dead_domain','redirected','repurposed','unsafe','unknown']),
  eventType: new Set(['launched','yield_program_started','yield_rate_changed','deposits_suspended','withdrawals_suspended','bankruptcy_filed','restructuring_started','restructuring_completed','asset_sale_announced','asset_sale_completed','customer_repayment_started','customer_repayment_completed','regulatory_action','lawsuit','operations_ended','rebranded','acquired','other']),
  impactLevel: new Set(['low','medium','high','critical']),
  eventStatusEffect: new Set(['none','active','limited','withdrawals_suspended','restructuring','bankrupt','operations_ended']),
  sourceType: new Set(['official_statement','court_document','bankruptcy_document','regulatory_notice','news_article','archive_capture','database_reference','community_reference','other']),
  reliability: new Set(['high','medium','low']),
  claimScope: new Set(['entity','event','status','failure_reason','customer_outcome','terms_risk','launch_date','end_date','url_history','ownership']),
  outcomeStatus: new Set(['full_repayment','partial_repayment','claims_ongoing','no_recovery','unknown','not_applicable']),
  productType: new Set(['interest_account','borrow_lend_platform','exchange_earn','staking_like_yield','defi_yield_aggregator','structured_yield','institutional_lending','centralized_yield']),
  termsStatus: new Set(['customer_owned','platform_owned','unclear','varies_by_product','unknown']),
};

let failed = false;
const fail = (message) => { failed = true; console.error(`ERROR: ${message}`); };
const label = (r, group) => `${group} ${r.__file}#${r.__index}`;

function load(files) {
  return files.flatMap((file) => {
    try {
      const value = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
      if (!Array.isArray(value)) { fail(`Root value must be an array: ${file}`); return []; }
      return value.map((record, index) => ({ ...record, __file: file, __index: index }));
    } catch (error) {
      fail(`Invalid JSON in ${file}: ${error.message}`);
      return [];
    }
  });
}

function required(record, fields, group) {
  for (const field of fields) if (record[field] === undefined || record[field] === null || record[field] === '') fail(`Missing ${field} in ${label(record, group)}`);
}
function enumField(record, field, allowed, group, optional = false) {
  const value = record[field];
  if (optional && (value === undefined || value === null || value === '')) return;
  if (!allowed.has(value)) fail(`Invalid ${field}=${value} in ${label(record, group)}`);
}
function dateField(record, field, group) {
  const value = record[field];
  if (value && !/^\d{4}-\d{2}-\d{2}$/.test(value)) fail(`Invalid date ${field}=${value} in ${label(record, group)}`);
}
function urlField(record, field, group) {
  const value = record[field];
  if (value && !/^https?:\/\//.test(value)) fail(`Invalid URL ${field}=${value} in ${label(record, group)}`);
}
function duplicates(records, field, group) {
  const seen = new Map();
  for (const record of records) {
    const value = record[field];
    if (!value) continue;
    if (seen.has(value)) fail(`Duplicate ${field}=${value} in ${group}: ${seen.get(value)} and ${label(record, group)}`);
    else seen.set(value, label(record, group));
  }
}

const platforms = load(FILE_GROUPS.platforms);
const events = load(FILE_GROUPS.events);
const evidence = load(FILE_GROUPS.evidence);
const outcomes = load(FILE_GROUPS.outcomes);
const products = load(FILE_GROUPS.products);
const termsRisk = load(FILE_GROUPS.termsRisk);
const platformIds = new Set(platforms.map((r) => r.id));
const eventIds = new Set(events.map((r) => r.id));
const evidenceIds = new Set(evidence.map((r) => r.id));
const platformById = new Map(platforms.map((r) => [r.id, r]));

for (const [records, field, group] of [
  [platforms, 'id', 'platforms'], [platforms, 'slug', 'platforms'], [events, 'id', 'events'],
  [evidence, 'id', 'evidence'], [outcomes, 'platform_id', 'outcomes'], [termsRisk, 'platform_id', 'terms-risk'],
]) duplicates(records, field, group);

for (const r of platforms) {
  required(r, ['id','slug','canonical_name','type','status','summary','confidence','last_verified_at'], 'platforms');
  enumField(r, 'type', ENUMS.platformType, 'platforms');
  enumField(r, 'status', ENUMS.platformStatus, 'platforms');
  enumField(r, 'failure_reason', ENUMS.failureReason, 'platforms', true);
  enumField(r, 'confidence', ENUMS.confidence, 'platforms');
  enumField(r, 'official_url_status', ENUMS.officialUrlStatus, 'platforms', true);
  ['launch_date','end_date','last_verified_at'].forEach((f) => dateField(r, f, 'platforms'));
  urlField(r, 'official_url_original', 'platforms');
}
for (const r of events) {
  required(r, ['id','platform_id','event_type','event_date','title','description','confidence'], 'events');
  if (!platformIds.has(r.platform_id)) fail(`Invalid platform_id=${r.platform_id} in ${label(r, 'events')}`);
  enumField(r, 'event_type', ENUMS.eventType, 'events');
  enumField(r, 'impact_level', ENUMS.impactLevel, 'events', true);
  enumField(r, 'event_status_effect', ENUMS.eventStatusEffect, 'events', true);
  enumField(r, 'confidence', ENUMS.confidence, 'events');
  dateField(r, 'event_date', 'events');
  if (r.source_count !== undefined) {
    const linked = evidence.filter((source) => source.event_id === r.id).length;
    if (r.source_count !== linked) fail(`source_count mismatch for ${r.id}: declared ${r.source_count}, linked ${linked}`);
  }
}
for (const r of evidence) {
  required(r, ['id','platform_id','source_type','title','url','publisher','reliability'], 'evidence');
  if (!platformIds.has(r.platform_id)) fail(`Invalid platform_id=${r.platform_id} in ${label(r, 'evidence')}`);
  if (r.event_id && !eventIds.has(r.event_id)) fail(`Invalid event_id=${r.event_id} in ${label(r, 'evidence')}`);
  enumField(r, 'source_type', ENUMS.sourceType, 'evidence');
  enumField(r, 'reliability', ENUMS.reliability, 'evidence');
  enumField(r, 'claim_scope', ENUMS.claimScope, 'evidence', true);
  ['published_at','accessed_at'].forEach((f) => dateField(r, f, 'evidence'));
  urlField(r, 'url', 'evidence');
  const strong = new Set(['official_statement','court_document','bankruptcy_document','regulatory_notice','archive_capture']);
  if (r.reliability === 'high' && !strong.has(r.source_type) && !String(r.publisher || '').toLowerCase().includes('reuters')) fail(`High reliability source lacks strong source type: ${label(r, 'evidence')}`);
}
for (const r of outcomes) {
  required(r, ['platform_id','outcome_status','notes','confidence'], 'outcomes');
  if (!platformIds.has(r.platform_id)) fail(`Invalid platform_id=${r.platform_id} in ${label(r, 'outcomes')}`);
  enumField(r, 'outcome_status', ENUMS.outcomeStatus, 'outcomes');
  enumField(r, 'confidence', ENUMS.confidence, 'outcomes');
  ['repayment_started_at','repayment_completed_at','as_of','last_verified_at'].forEach((f) => dateField(r, f, 'outcomes'));
  urlField(r, 'claim_process_url', 'outcomes');
  const asOf = r.as_of || r.last_verified_at || platformById.get(r.platform_id)?.last_verified_at;
  if (!asOf) fail(`Outcome lacks derivable as_of date: ${label(r, 'outcomes')}`);
  if (r.outcome_status === 'claims_ongoing' && r.repayment_completed_at) fail(`claims_ongoing cannot have repayment_completed_at: ${label(r, 'outcomes')}`);
  if (r.claim_classes !== undefined && !Array.isArray(r.claim_classes)) fail(`claim_classes must be an array: ${label(r, 'outcomes')}`);
  if (r.jurisdictions !== undefined && !Array.isArray(r.jurisdictions)) fail(`jurisdictions must be an array: ${label(r, 'outcomes')}`);
  if (r.affected_products !== undefined && !Array.isArray(r.affected_products)) fail(`affected_products must be an array: ${label(r, 'outcomes')}`);
}
for (const r of products) {
  required(r, ['platform_id','product_type','product_name'], 'products');
  if (!platformIds.has(r.platform_id)) fail(`Invalid platform_id=${r.platform_id} in ${label(r, 'products')}`);
  enumField(r, 'product_type', ENUMS.productType, 'products');
}
for (const r of termsRisk) {
  required(r, ['platform_id','terms_status','notes','confidence'], 'terms-risk');
  if (!platformIds.has(r.platform_id)) fail(`Invalid platform_id=${r.platform_id} in ${label(r, 'terms-risk')}`);
  if (r.source_evidence_id && !evidenceIds.has(r.source_evidence_id)) fail(`Invalid source_evidence_id=${r.source_evidence_id} in ${label(r, 'terms-risk')}`);
  enumField(r, 'terms_status', ENUMS.termsStatus, 'terms-risk');
  enumField(r, 'confidence', ENUMS.confidence, 'terms-risk');
}

if (outcomes.length !== platforms.length) fail(`Outcome coverage mismatch: ${outcomes.length} outcomes for ${platforms.length} platforms`);
if (termsRisk.length !== platforms.length) fail(`Terms-risk coverage mismatch: ${termsRisk.length} records for ${platforms.length} platforms`);
const claimsOngoing = outcomes.filter((r) => r.outcome_status === 'claims_ongoing').length;

if (failed) process.exit(1);
console.log(`CYA data validation passed: ${platforms.length} platforms, ${events.length} events, ${evidence.length} evidence records, ${outcomes.length} outcomes, ${products.length} products, ${termsRisk.length} terms-risk records, ${claimsOngoing} claims ongoing.`);
