import platforms from '../../data/platforms.json';
import eventsBase from '../../data/events.json';
import eventsBatch03 from '../../data/events-batch-03.json';
import evidenceBase from '../../data/evidence.json';
import evidenceBatch03 from '../../data/evidence-batch-03.json';
import outcomes from '../../data/outcomes.json';
import products from '../../data/products.json';
import termsRisk from '../../data/terms-risk.json';

export type Platform = Record<string, any>;
export type EventRecord = Record<string, any>;
export type EvidenceRecord = Record<string, any>;
export type Outcome = Record<string, any>;
export type Product = Record<string, any>;
export type TermsRisk = Record<string, any>;

export const allPlatforms = platforms as Platform[];
export const allEvents = [...eventsBase, ...eventsBatch03] as EventRecord[];
export const allEvidence = [...evidenceBase, ...evidenceBatch03] as EvidenceRecord[];
export const allOutcomes = outcomes as Outcome[];
export const allProducts = products as Product[];
export const allTermsRisk = termsRisk as TermsRisk[];

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
