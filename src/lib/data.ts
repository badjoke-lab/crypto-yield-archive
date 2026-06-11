import platforms from '../../data/platforms.json';
import platformsBatch04 from '../../data/platforms-batch-04.json';
import platformsBatch05 from '../../data/platforms-batch-05.json';
import platformsBatch06 from '../../data/platforms-batch-06.json';
import platformsBatch07 from '../../data/platforms-batch-07.json';
import platformsBatch08 from '../../data/platforms-batch-08.json';
import platformsBatch09 from '../../data/platforms-batch-09.json';
import platformsBatch10 from '../../data/platforms-batch-10.json';
import eventsBase from '../../data/events.json';
import eventsBatch03 from '../../data/events-batch-03.json';
import eventsBatch04 from '../../data/events-batch-04.json';
import eventsBatch05 from '../../data/events-batch-05.json';
import eventsBatch06 from '../../data/events-batch-06.json';
import eventsBatch07 from '../../data/events-batch-07.json';
import eventsBatch08 from '../../data/events-batch-08.json';
import eventsBatch09 from '../../data/events-batch-09.json';
import eventsBatch10 from '../../data/events-batch-10.json';
import evidenceBase from '../../data/evidence.json';
import evidenceBatch03 from '../../data/evidence-batch-03.json';
import evidenceBatch04 from '../../data/evidence-batch-04.json';
import evidenceBatch05 from '../../data/evidence-batch-05.json';
import evidenceBatch06 from '../../data/evidence-batch-06.json';
import evidenceBatch07 from '../../data/evidence-batch-07.json';
import evidenceBatch08 from '../../data/evidence-batch-08.json';
import evidenceBatch09 from '../../data/evidence-batch-09.json';
import evidenceBatch10 from '../../data/evidence-batch-10.json';
import outcomes from '../../data/outcomes.json';
import outcomesBatch04 from '../../data/outcomes-batch-04.json';
import outcomesBatch05 from '../../data/outcomes-batch-05.json';
import outcomesBatch06 from '../../data/outcomes-batch-06.json';
import outcomesBatch07 from '../../data/outcomes-batch-07.json';
import outcomesBatch08 from '../../data/outcomes-batch-08.json';
import outcomesBatch09 from '../../data/outcomes-batch-09.json';
import outcomesBatch10 from '../../data/outcomes-batch-10.json';
import products from '../../data/products.json';
import productsBatch04 from '../../data/products-batch-04.json';
import productsBatch05 from '../../data/products-batch-05.json';
import productsBatch06 from '../../data/products-batch-06.json';
import productsBatch07 from '../../data/products-batch-07.json';
import productsBatch08 from '../../data/products-batch-08.json';
import productsBatch09 from '../../data/products-batch-09.json';
import productsBatch10 from '../../data/products-batch-10.json';
import termsRisk from '../../data/terms-risk.json';
import termsRiskBatch04 from '../../data/terms-risk-batch-04.json';
import termsRiskBatch05 from '../../data/terms-risk-batch-05.json';
import termsRiskBatch06 from '../../data/terms-risk-batch-06.json';
import termsRiskBatch07 from '../../data/terms-risk-batch-07.json';
import termsRiskBatch08 from '../../data/terms-risk-batch-08.json';
import termsRiskBatch09 from '../../data/terms-risk-batch-09.json';
import termsRiskBatch10 from '../../data/terms-risk-batch-10.json';

export type Platform = Record<string, any>;
export type EventRecord = Record<string, any>;
export type EvidenceRecord = Record<string, any>;
export type Outcome = Record<string, any>;
export type Product = Record<string, any>;
export type TermsRisk = Record<string, any>;

export const allPlatforms = [...platforms, ...platformsBatch04, ...platformsBatch05, ...platformsBatch06, ...platformsBatch07, ...platformsBatch08, ...platformsBatch09, ...platformsBatch10] as Platform[];
export const allEvents = [...eventsBase, ...eventsBatch03, ...eventsBatch04, ...eventsBatch05, ...eventsBatch06, ...eventsBatch07, ...eventsBatch08, ...eventsBatch09, ...eventsBatch10] as EventRecord[];
export const allEvidence = [...evidenceBase, ...evidenceBatch03, ...evidenceBatch04, ...evidenceBatch05, ...evidenceBatch06, ...evidenceBatch07, ...evidenceBatch08, ...evidenceBatch09, ...evidenceBatch10] as EvidenceRecord[];
export const allOutcomes = [...outcomes, ...outcomesBatch04, ...outcomesBatch05, ...outcomesBatch06, ...outcomesBatch07, ...outcomesBatch08, ...outcomesBatch09, ...outcomesBatch10] as Outcome[];
export const allProducts = [...products, ...productsBatch04, ...productsBatch05, ...productsBatch06, ...productsBatch07, ...productsBatch08, ...productsBatch09, ...productsBatch10] as Product[];
export const allTermsRisk = [...termsRisk, ...termsRiskBatch04, ...termsRiskBatch05, ...termsRiskBatch06, ...termsRiskBatch07, ...termsRiskBatch08, ...termsRiskBatch09, ...termsRiskBatch10] as TermsRisk[];

const PUBLIC_LABELS: Record<string, string> = {
  active: 'Active',
  limited: 'Limited',
  withdrawals_suspended: 'Withdrawals suspended',
  restructuring: 'Restructuring',
  bankrupt: 'Bankrupt',
  acquired: 'Acquired',
  rebranded: 'Rebranded',
  operations_ended: 'Operations ended',
  inactive: 'Inactive',
  unknown: 'Unknown',
  cefi_lending: 'CeFi lending',
  crypto_interest_account: 'Crypto interest account',
  centralized_yield: 'Centralized yield platform',
  borrow_lend_platform: 'Borrow/lend platform',
  institutional_lending: 'Institutional lending',
  earn_product: 'Earn product',
  full_repayment: 'Full repayment',
  partial_repayment: 'Partial repayment',
  claims_ongoing: 'Claims ongoing',
  no_recovery: 'No recovery',
  not_applicable: 'Not applicable',
  unknown_restructuring_dependent: 'Unknown; restructuring dependent',
  insolvency: 'Insolvency',
  liquidity_crisis: 'Liquidity crisis',
  counterparty_exposure: 'Counterparty exposure',
  misconduct: 'Misconduct',
  regulatory_action: 'Regulatory action',
  voluntary_shutdown: 'Voluntary shutdown',
  customer_owned: 'Customer-owned',
  platform_owned: 'Platform-owned',
  varies_by_product: 'Varies by product',
  unclear: 'Unclear',
  launched: 'Launch',
  product_launch: 'Product launch',
  withdrawals_suspended_event: 'Withdrawals suspended',
  bankruptcy_filed: 'Bankruptcy filing',
  restructuring_started: 'Restructuring started',
  restructuring_completed: 'Restructuring completed',
  operations_ended_event: 'Operations ended',
  repayment_started: 'Repayment started',
  repayment_completed: 'Repayment completed',
  other: 'Other',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
  critical: 'Critical',
  news_article: 'News article',
  official_statement: 'Official statement',
  court_document: 'Court document',
  regulatory_notice: 'Regulatory notice',
  archived_page: 'Archived page',
  entity: 'Entity',
  event: 'Event',
  outcome: 'Outcome',
  terms: 'Terms',
  url_history: 'URL history',
};

export function label(value: unknown) {
  if (value === null || value === undefined || value === '') return '—';
  const key = String(value);
  return PUBLIC_LABELS[key] || key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getPlatformBySlug(slug: string) {
  return allPlatforms.find((platform) => platform.slug === slug);
}

export function getOutcome(platformId: string) {
  return allOutcomes.find((item) => item.platform_id === platformId);
}

export function getTermsRisk(platformId: string) {
  return allTermsRisk.find((item) => item.platform_id === platformId);
}

export function getEvents(platformId: string) {
  return allEvents
    .filter((item) => item.platform_id === platformId)
    .sort((a, b) => String(a.event_date).localeCompare(String(b.event_date)));
}

export function getEvidence(platformId: string) {
  return allEvidence.filter((item) => item.platform_id === platformId);
}

export function getProducts(platformId: string) {
  return allProducts.filter((item) => item.platform_id === platformId);
}

export function groupsByOutcome() {
  const groups = ['full_repayment', 'partial_repayment', 'claims_ongoing', 'no_recovery', 'unknown', 'not_applicable'];
  return groups.map((group) => ({
    group,
    platforms: allPlatforms.filter((platform) => getOutcome(platform.id)?.outcome_status === group || (!getOutcome(platform.id) && group === 'unknown')),
  }));
}

export function bankruptcyPlatforms() {
  return allPlatforms.filter((platform) => ['bankrupt', 'restructuring'].includes(platform.status));
}
