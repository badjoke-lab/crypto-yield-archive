import platforms from '../../data/platforms.json';
import platformsBatch04 from '../../data/platforms-batch-04.json';
import platformsBatch05 from '../../data/platforms-batch-05.json';
import platformsBatch06 from '../../data/platforms-batch-06.json';
import eventsBase from '../../data/events.json';
import eventsBatch03 from '../../data/events-batch-03.json';
import eventsBatch04 from '../../data/events-batch-04.json';
import eventsBatch05 from '../../data/events-batch-05.json';
import eventsBatch06 from '../../data/events-batch-06.json';
import evidenceBase from '../../data/evidence.json';
import evidenceBatch03 from '../../data/evidence-batch-03.json';
import evidenceBatch04 from '../../data/evidence-batch-04.json';
import evidenceBatch05 from '../../data/evidence-batch-05.json';
import evidenceBatch06 from '../../data/evidence-batch-06.json';
import outcomes from '../../data/outcomes.json';
import outcomesBatch04 from '../../data/outcomes-batch-04.json';
import outcomesBatch05 from '../../data/outcomes-batch-05.json';
import outcomesBatch06 from '../../data/outcomes-batch-06.json';
import products from '../../data/products.json';
import productsBatch04 from '../../data/products-batch-04.json';
import productsBatch05 from '../../data/products-batch-05.json';
import productsBatch06 from '../../data/products-batch-06.json';
import termsRisk from '../../data/terms-risk.json';
import termsRiskBatch04 from '../../data/terms-risk-batch-04.json';
import termsRiskBatch05 from '../../data/terms-risk-batch-05.json';
import termsRiskBatch06 from '../../data/terms-risk-batch-06.json';

export type Platform = Record<string, any>;
export type EventRecord = Record<string, any>;
export type EvidenceRecord = Record<string, any>;
export type Outcome = Record<string, any>;
export type Product = Record<string, any>;
export type TermsRisk = Record<string, any>;

export const allPlatforms = [...platforms, ...platformsBatch04, ...platformsBatch05, ...platformsBatch06] as Platform[];
export const allEvents = [...eventsBase, ...eventsBatch03, ...eventsBatch04, ...eventsBatch05, ...eventsBatch06] as EventRecord[];
export const allEvidence = [...evidenceBase, ...evidenceBatch03, ...evidenceBatch04, ...evidenceBatch05, ...evidenceBatch06] as EvidenceRecord[];
export const allOutcomes = [...outcomes, ...outcomesBatch04, ...outcomesBatch05, ...outcomesBatch06] as Outcome[];
export const allProducts = [...products, ...productsBatch04, ...productsBatch05, ...productsBatch06] as Product[];
export const allTermsRisk = [...termsRisk, ...termsRiskBatch04, ...termsRiskBatch05, ...termsRiskBatch06] as TermsRisk[];

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
