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

const ENUMS = {
  platformStatus: new Set([
    'active',
    'limited',
    'withdrawals_suspended',
    'restructuring',
    'bankrupt',
    'acquired',
    'rebranded',
    'operations_ended',
    'inactive',
    'unknown',
  ]),
  platformType: new Set([
    'cefi_lending',
    'crypto_interest_account',
    'centralized_yield',
    'borrow_lend_platform',
    'exchange_earn',
    'defi_lending',
    'yield_aggregator',
    'structured_yield',
    'unknown',
  ]),
  failureReason: new Set([
    'insolvency',
    'liquidity_crisis',
    'counterparty_exposure',
    'misconduct',
    'regulatory_action',
    'market_collapse',
    'risk_mismanagement',
    'voluntary_shutdown',
    'acquisition',
    'restructuring',
    'unknown',
  ]),
  confidence: new Set(['high', 'medium', 'low']),
  officialUrlStatus: new Set([
    'live_verified',
    'live_unverified',
    'dead_domain',
    'redirected',
    'repurposed',
    'unsafe',
    'unknown',
  ]),
  eventType: new Set([
    'launched',
    'yield_program_started',
    'yield_rate_changed',
    'deposits_suspended',
    'withdrawals_suspended',
    'bankruptcy_filed',
    'restructuring_started',
    'restructuring_completed',
    'asset_sale_announced',
    'asset_sale_completed',
    'customer_repayment_started',
    'customer_repayment_completed',
    'regulatory_action',
    'lawsuit',
    'operations_ended',
    'rebranded',
    'acquired',
    'other',
  ]),
  impactLevel: new Set(['low', 'medium', 'high', 'critical']),
  eventStatusEffect: new Set([
    'none',
    'active',
    'limited',
    'withdrawals_suspended',
    'restructuring',
    'bankrupt',
    'operations_ended',
  ]),
  sourceType: new Set([
    'official_statement',
    'court_document',
    'bankruptcy_document',
    'regulatory_notice',
    'news_article',
    'archive_capture',
    'database_reference',
    'community_reference',
    'other',
  ]),
  reliability: new Set(['high', 'medium', 'low']),
  claimScope: new Set([
    'entity',
    'event',
    'status',
    'failure_reason',
    'customer_outcome',
    'terms_risk',
    'launch_date',
    'end_date',
    'url_history',
    'ownership',
  ]),
  outcomeStatus: new Set([
    'full_repayment',
    'partial_repayment',
    'claims_ongoing',
    'no_recovery',
    'unknown',
    'not_applicable',
  ]),
  productType: new Set([
    'interest_account',
    'borrow_lend_platform',
    'exchange_earn',
    'staking_like_yield',
    'defi_yield_aggregator',
    'structured_yield',
    'institutional_lending',
    'centralized_yield',
  ]),
  termsStatus: new Set([
    'customer_owned',
    'platform_owned',
    'unclear',
    'varies_by_product',
    'unknown',
  ]),
};

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

function checkRequired(record, fields, label, index) {
  for (const field of fields) {
    if (record[field] === undefined || record[field] === null || record[field] === '') {
      fail(`Missing required field ${field} in ${label} at index ${index}`);
    }
  }
}

function checkEnum(value, allowed, label, field, index, { allowNull = false } = {}) {
  if ((value === null || value === undefined || value === '') && allowNull) return;
  if (!allowed.has(value)) {
    fail(`Invalid enum ${field}=${value} in ${label} at index ${index}`);
  }
}

function checkDate(value, label, field, index) {
  if (value === null || value === undefined || value === '') return;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    fail(`Invalid date format ${field}=${value} in ${label} at index ${index}; expected YYYY-MM-DD`);
  }
}

function checkUrl(value, label, field, index) {
  if (value === null || value === undefined || value === '') return;
  if (!/^https?:\/\//.test(value)) {
    fail(`Invalid URL ${field}=${value} in ${label} at index ${index}; expected http(s) URL`);
  }
}

function makeIdSet(records) {
  return new Set(records.map((record) => record?.id).filter(Boolean));
}

function checkPlatformRef(record, field, platformIds, label, index) {
  const platformId = record[field];
  if (!platformId || !platformIds.has(platformId)) {
    fail(`Invalid platform reference ${field}=${platformId} in ${label} at index ${index}`);
  }
}

function checkOptionalEventRef(record, field, eventIds, label, index) {
  const eventId = record[field];
  if (!eventId) return;
  if (!eventIds.has(eventId)) {
    fail(`Invalid event reference ${field}=${eventId} in ${label} at index ${index}`);
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

const platforms = loaded.get('data/platforms.json') ?? [];
const events = loaded.get('data/events.json') ?? [];
const evidence = loaded.get('data/evidence.json') ?? [];
const outcomes = loaded.get('data/outcomes.json') ?? [];
const products = loaded.get('data/products.json') ?? [];
const termsRisk = loaded.get('data/terms-risk.json') ?? [];

checkDuplicateValues(platforms, 'slug', 'platforms');
checkDuplicateValues(outcomes, 'platform_id', 'outcomes');
checkDuplicateValues(termsRisk, 'platform_id', 'terms-risk');

const platformIds = makeIdSet(platforms);
const eventIds = makeIdSet(events);
const evidenceIds = makeIdSet(evidence);

platforms.forEach((record, index) => {
  checkRequired(record, ['id', 'slug', 'canonical_name', 'type', 'status', 'summary', 'confidence', 'last_verified_at'], 'platforms', index);
  checkEnum(record.type, ENUMS.platformType, 'platforms', 'type', index);
  checkEnum(record.status, ENUMS.platformStatus, 'platforms', 'status', index);
  checkEnum(record.failure_reason, ENUMS.failureReason, 'platforms', 'failure_reason', index, { allowNull: true });
  checkEnum(record.confidence, ENUMS.confidence, 'platforms', 'confidence', index);
  checkEnum(record.official_url_status, ENUMS.officialUrlStatus, 'platforms', 'official_url_status', index, { allowNull: true });
  checkDate(record.launch_date, 'platforms', 'launch_date', index);
  checkDate(record.end_date, 'platforms', 'end_date', index);
  checkDate(record.last_verified_at, 'platforms', 'last_verified_at', index);
  checkUrl(record.official_url_original, 'platforms', 'official_url_original', index);
  checkUrl(record.archived_url?.replace('/web/*/', '/web/20200101000000/'), 'platforms', 'archived_url', index);
});

events.forEach((record, index) => {
  checkRequired(record, ['id', 'platform_id', 'event_type', 'event_date', 'title', 'description', 'confidence'], 'events', index);
  checkPlatformRef(record, 'platform_id', platformIds, 'events', index);
  checkEnum(record.event_type, ENUMS.eventType, 'events', 'event_type', index);
  checkEnum(record.impact_level, ENUMS.impactLevel, 'events', 'impact_level', index, { allowNull: true });
  checkEnum(record.event_status_effect, ENUMS.eventStatusEffect, 'events', 'event_status_effect', index, { allowNull: true });
  checkEnum(record.confidence, ENUMS.confidence, 'events', 'confidence', index);
  checkDate(record.event_date, 'events', 'event_date', index);
});

evidence.forEach((record, index) => {
  checkRequired(record, ['id', 'platform_id', 'source_type', 'title', 'url', 'publisher', 'reliability'], 'evidence', index);
  checkPlatformRef(record, 'platform_id', platformIds, 'evidence', index);
  checkOptionalEventRef(record, 'event_id', eventIds, 'evidence', index);
  checkEnum(record.source_type, ENUMS.sourceType, 'evidence', 'source_type', index);
  checkEnum(record.reliability, ENUMS.reliability, 'evidence', 'reliability', index);
  checkEnum(record.claim_scope, ENUMS.claimScope, 'evidence', 'claim_scope', index, { allowNull: true });
  checkDate(record.published_at, 'evidence', 'published_at', index);
  checkDate(record.accessed_at, 'evidence', 'accessed_at', index);
  checkUrl(record.url, 'evidence', 'url', index);
  checkUrl(record.archived_url?.replace('/web/*/', '/web/20200101000000/'), 'evidence', 'archived_url', index);
});

outcomes.forEach((record, index) => {
  checkRequired(record, ['platform_id', 'outcome_status', 'notes', 'confidence'], 'outcomes', index);
  checkPlatformRef(record, 'platform_id', platformIds, 'outcomes', index);
  checkEnum(record.outcome_status, ENUMS.outcomeStatus, 'outcomes', 'outcome_status', index);
  checkEnum(record.confidence, ENUMS.confidence, 'outcomes', 'confidence', index);
  checkDate(record.repayment_started_at, 'outcomes', 'repayment_started_at', index);
  checkDate(record.repayment_completed_at, 'outcomes', 'repayment_completed_at', index);
  checkUrl(record.claim_process_url, 'outcomes', 'claim_process_url', index);
});

products.forEach((record, index) => {
  checkRequired(record, ['platform_id', 'product_type', 'product_name'], 'products', index);
  checkPlatformRef(record, 'platform_id', platformIds, 'products', index);
  checkEnum(record.product_type, ENUMS.productType, 'products', 'product_type', index);
});

termsRisk.forEach((record, index) => {
  checkRequired(record, ['platform_id', 'terms_status', 'notes', 'confidence'], 'terms-risk', index);
  checkPlatformRef(record, 'platform_id', platformIds, 'terms-risk', index);
  checkEnum(record.terms_status, ENUMS.termsStatus, 'terms-risk', 'terms_status', index);
  checkEnum(record.confidence, ENUMS.confidence, 'terms-risk', 'confidence', index);
  const evidenceId = record.source_evidence_id;
  if (evidenceId && !evidenceIds.has(evidenceId)) {
    fail(`Invalid evidence reference source_evidence_id=${evidenceId} in terms-risk at index ${index}`);
  }
});

if (failed) {
  process.exit(1);
}

console.log('CYA data validation passed.');
