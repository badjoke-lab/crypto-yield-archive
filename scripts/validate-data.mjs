import fs from 'node:fs';
import path from 'node:path';

const FILE_GROUPS = {
  platforms: ['data/platforms.json', 'data/platforms-batch-04.json', 'data/platforms-batch-05.json', 'data/platforms-batch-06.json', 'data/platforms-batch-07.json', 'data/platforms-batch-08.json', 'data/platforms-batch-09.json', 'data/platforms-batch-10.json', 'data/platforms-batch-11.json', 'data/platforms-batch-12.json', 'data/platforms-batch-13.json'],
  events: ['data/events.json', 'data/events-batch-03.json', 'data/events-batch-04.json', 'data/events-batch-05.json', 'data/events-batch-06.json', 'data/events-batch-07.json', 'data/events-batch-08.json', 'data/events-batch-09.json', 'data/events-batch-10.json', 'data/events-batch-11.json', 'data/events-batch-12.json', 'data/events-batch-13.json'],
  evidence: ['data/evidence.json', 'data/evidence-batch-03.json', 'data/evidence-batch-04.json', 'data/evidence-batch-05.json', 'data/evidence-batch-06.json', 'data/evidence-batch-07.json', 'data/evidence-batch-08.json', 'data/evidence-batch-09.json', 'data/evidence-batch-10.json', 'data/evidence-batch-11.json', 'data/evidence-batch-12.json', 'data/evidence-batch-13.json'],
  outcomes: ['data/outcomes.json', 'data/outcomes-batch-04.json', 'data/outcomes-batch-05.json', 'data/outcomes-batch-06.json', 'data/outcomes-batch-07.json', 'data/outcomes-batch-08.json', 'data/outcomes-batch-09.json', 'data/outcomes-batch-10.json', 'data/outcomes-batch-11.json', 'data/outcomes-batch-12.json', 'data/outcomes-batch-13.json'],
  products: ['data/products.json', 'data/products-batch-04.json', 'data/products-batch-05.json', 'data/products-batch-06.json', 'data/products-batch-07.json', 'data/products-batch-08.json', 'data/products-batch-09.json', 'data/products-batch-10.json', 'data/products-batch-11.json', 'data/products-batch-12.json', 'data/products-batch-13.json'],
  termsRisk: ['data/terms-risk.json', 'data/terms-risk-batch-04.json', 'data/terms-risk-batch-05.json', 'data/terms-risk-batch-06.json', 'data/terms-risk-batch-07.json', 'data/terms-risk-batch-08.json', 'data/terms-risk-batch-09.json', 'data/terms-risk-batch-10.json', 'data/terms-risk-batch-11.json', 'data/terms-risk-batch-12.json', 'data/terms-risk-batch-13.json'],
};

const ENUMS = {
  platformStatus: new Set(['active', 'limited', 'withdrawals_suspended', 'restructuring', 'bankrupt', 'acquired', 'rebranded', 'operations_ended', 'inactive', 'unknown']),
  platformType: new Set(['cefi_lending', 'crypto_interest_account', 'centralized_yield', 'borrow_lend_platform', 'institutional_lending', 'exchange_earn', 'defi_lending', 'yield_aggregator', 'structured_yield', 'unknown']),
  failureReason: new Set(['insolvency', 'liquidity_crisis', 'counterparty_exposure', 'misconduct', 'regulatory_action', 'market_collapse', 'risk_mismanagement', 'voluntary_shutdown', 'acquisition', 'restructuring', 'unknown']),
  confidence: new Set(['high', 'medium', 'low']),
  officialUrlStatus: new Set(['live_verified', 'live_unverified', 'dead_domain', 'redirected', 'repurposed', 'unsafe', 'unknown']),
  eventType: new Set(['launched', 'yield_program_started', 'yield_rate_changed', 'deposits_suspended', 'withdrawals_suspended', 'bankruptcy_filed', 'restructuring_started', 'restructuring_completed', 'asset_sale_announced', 'asset_sale_completed', 'customer_repayment_started', 'customer_repayment_completed', 'regulatory_action', 'lawsuit', 'operations_ended', 'rebranded', 'acquired', 'other']),
  impactLevel: new Set(['low', 'medium', 'high', 'critical']),
  eventStatusEffect: new Set(['none', 'active', 'limited', 'withdrawals_suspended', 'restructuring', 'bankrupt', 'operations_ended']),
  sourceType: new Set(['official_statement', 'court_document', 'bankruptcy_document', 'regulatory_notice', 'news_article', 'archive_capture', 'database_reference', 'community_reference', 'other']),
  reliability: new Set(['high', 'medium', 'low']),
  claimScope: new Set(['entity', 'event', 'status', 'failure_reason', 'customer_outcome', 'terms_risk', 'launch_date', 'end_date', 'url_history', 'ownership']),
  outcomeStatus: new Set(['full_repayment', 'partial_repayment', 'claims_ongoing', 'no_recovery', 'unknown', 'not_applicable']),
  productType: new Set(['interest_account', 'borrow_lend_platform', 'exchange_earn', 'staking_like_yield', 'defi_yield_aggregator', 'structured_yield', 'institutional_lending', 'centralized_yield']),
  termsStatus: new Set(['customer_owned', 'platform_owned', 'unclear', 'varies_by_product', 'unknown']),
};

let failed = false;
function fail(message) { failed = true; console.error(`ERROR: ${message}`); }

function readJsonArray(filePath) {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) { fail(`Missing required file: ${filePath}`); return []; }
  try {
    const parsed = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
    if (!Array.isArray(parsed)) { fail(`Root value must be an array: ${filePath}`); return []; }
    return parsed.map((record, index) => ({ ...record, __file: filePath, __index: index }));
  } catch (error) {
    fail(`Invalid JSON in ${filePath}: ${error.message}`);
    return [];
  }
}

function loadGroup(files) { return files.flatMap((file) => readJsonArray(file)); }
function label(record, group) { return `${group} ${record.__file}#${record.__index}`; }
function clean(record) { delete record.__file; delete record.__index; return record; }
function ids(records) { return new Set(records.map((r) => r.id).filter(Boolean)); }

function checkDuplicate(records, field, group) {
  const seen = new Map();
  for (const record of records) {
    const value = record[field];
    if (!value) continue;
    if (seen.has(value)) fail(`Duplicate ${field}=${value} in ${group}: ${seen.get(value)} and ${label(record, group)}`);
    else seen.set(value, label(record, group));
  }
}

function required(record, fields, group) {
  for (const field of fields) {
    if (record[field] === undefined || record[field] === null || record[field] === '') fail(`Missing ${field} in ${label(record, group)}`);
  }
}

function enumField(record, field, allowed, group, allowEmpty = false) {
  const value = record[field];
  if ((value === undefined || value === null || value === '') && allowEmpty) return;
  if (!allowed.has(value)) fail(`Invalid ${field}=${value} in ${label(record, group)}`);
}

function dateField(record, field, group) {
  const value = record[field];
  if (!value) return;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) fail(`Invalid date ${field}=${value} in ${label(record, group)}; expected YYYY-MM-DD`);
}

function urlField(record, field, group) {
  const value = record[field];
  if (!value) return;
  if (!/^https?:\/\//.test(value)) fail(`Invalid URL ${field}=${value} in ${label(record, group)}`);
}

function checkHighReliabilitySourceType(record) {
  if (record.reliability !== 'high') return;
  const highAllowed = new Set(['official_statement', 'court_document', 'bankruptcy_document', 'regulatory_notice', 'archive_capture']);
  if (!highAllowed.has(record.source_type) && !String(record.publisher || '').toLowerCase().includes('reuters')) {
    fail(`High reliability evidence needs a strong source_type or publisher justification: ${label(record, 'evidence')}`);
  }
}

const platforms = loadGroup(FILE_GROUPS.platforms);
const events = loadGroup(FILE_GROUPS.events);
const evidence = loadGroup(FILE_GROUPS.evidence);
const outcomes = loadGroup(FILE_GROUPS.outcomes);
const products = loadGroup(FILE_GROUPS.products);
const termsRisk = loadGroup(FILE_GROUPS.termsRisk);

checkDuplicate(platforms, 'id', 'platforms');
checkDuplicate(platforms, 'slug', 'platforms');
checkDuplicate(events, 'id', 'events');
checkDuplicate(evidence, 'id', 'evidence');
checkDuplicate(outcomes, 'platform_id', 'outcomes');
checkDuplicate(termsRisk, 'platform_id', 'terms-risk');

const platformIds = ids(platforms);
const eventIds = ids(events);
const evidenceIds = ids(evidence);

for (const record of platforms) {
  required(record, ['id', 'slug', 'canonical_name', 'type', 'status', 'summary', 'confidence', 'last_verified_at'], 'platforms');
  enumField(record, 'type', ENUMS.platformType, 'platforms');
  enumField(record, 'status', ENUMS.platformStatus, 'platforms');
  enumField(record, 'failure_reason', ENUMS.failureReason, 'platforms', true);
  enumField(record, 'confidence', ENUMS.confidence, 'platforms');
  enumField(record, 'official_url_status', ENUMS.officialUrlStatus, 'platforms', true);
  dateField(record, 'launch_date', 'platforms');
  dateField(record, 'end_date', 'platforms');
  dateField(record, 'last_verified_at', 'platforms');
  urlField(record, 'official_url_original', 'platforms');
}

for (const record of events) {
  required(record, ['id', 'platform_id', 'event_type', 'event_date', 'title', 'description', 'confidence'], 'events');
  if (!platformIds.has(record.platform_id)) fail(`Invalid platform_id=${record.platform_id} in ${label(record, 'events')}`);
  enumField(record, 'event_type', ENUMS.eventType, 'events');
  enumField(record, 'impact_level', ENUMS.impactLevel, 'events', true);
  enumField(record, 'event_status_effect', ENUMS.eventStatusEffect, 'events', true);
  enumField(record, 'confidence', ENUMS.confidence, 'events');
  dateField(record, 'event_date', 'events');
}

for (const record of evidence) {
  required(record, ['id', 'platform_id', 'source_type', 'title', 'url', 'publisher', 'reliability'], 'evidence');
  if (!platformIds.has(record.platform_id)) fail(`Invalid platform_id=${record.platform_id} in ${label(record, 'evidence')}`);
  if (record.event_id && !eventIds.has(record.event_id)) fail(`Invalid event_id=${record.event_id} in ${label(record, 'evidence')}`);
  enumField(record, 'source_type', ENUMS.sourceType, 'evidence');
  enumField(record, 'reliability', ENUMS.reliability, 'evidence');
  enumField(record, 'claim_scope', ENUMS.claimScope, 'evidence', true);
  dateField(record, 'published_at', 'evidence');
  dateField(record, 'accessed_at', 'evidence');
  urlField(record, 'url', 'evidence');
  checkHighReliabilitySourceType(record);
}

for (const record of outcomes) {
  required(record, ['platform_id', 'outcome_status', 'notes', 'confidence'], 'outcomes');
  if (!platformIds.has(record.platform_id)) fail(`Invalid platform_id=${record.platform_id} in ${label(record, 'outcomes')}`);
  enumField(record, 'outcome_status', ENUMS.outcomeStatus, 'outcomes');
  enumField(record, 'confidence', ENUMS.confidence, 'outcomes');
  dateField(record, 'repayment_started_at', 'outcomes');
  dateField(record, 'repayment_completed_at', 'outcomes');
  urlField(record, 'claim_process_url', 'outcomes');
}

for (const record of products) {
  required(record, ['platform_id', 'product_type', 'product_name'], 'products');
  if (!platformIds.has(record.platform_id)) fail(`Invalid platform_id=${record.platform_id} in ${label(record, 'products')}`);
  enumField(record, 'product_type', ENUMS.productType, 'products');
}

for (const record of termsRisk) {
  required(record, ['platform_id', 'terms_status', 'notes', 'confidence'], 'terms-risk');
  if (!platformIds.has(record.platform_id)) fail(`Invalid platform_id=${record.platform_id} in ${label(record, 'terms-risk')}`);
  if (record.source_evidence_id && !evidenceIds.has(record.source_evidence_id)) fail(`Invalid source_evidence_id=${record.source_evidence_id} in ${label(record, 'terms-risk')}`);
  enumField(record, 'terms_status', ENUMS.termsStatus, 'terms-risk');
  enumField(record, 'confidence', ENUMS.confidence, 'terms-risk');
}

for (const records of [platforms, events, evidence, outcomes, products, termsRisk]) records.forEach(clean);

if (failed) process.exit(1);
console.log(`CYA data validation passed: ${platforms.length} platforms, ${events.length} events, ${evidence.length} evidence records.`);
