type JsonRecord = Record<string, any>;

type JsonModule = {
  default: JsonRecord[];
};

function loadJsonGroup(pattern: string) {
  const modules = import.meta.glob<JsonModule>(pattern, { eager: true });
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .flatMap(([, module]) => module.default);
}

export type Platform = JsonRecord;
export type EventRecord = JsonRecord;
export type EvidenceRecord = JsonRecord;
export type Outcome = JsonRecord;
export type Product = JsonRecord;
export type TermsRisk = JsonRecord;

export const allPlatforms = loadJsonGroup('../../data/platforms*.json') as Platform[];
export const allEvents = loadJsonGroup('../../data/events*.json') as EventRecord[];
export const allEvidence = loadJsonGroup('../../data/evidence*.json') as EvidenceRecord[];
export const allOutcomes = loadJsonGroup('../../data/outcomes*.json') as Outcome[];
export const allProducts = loadJsonGroup('../../data/products*.json') as Product[];
export const allTermsRisk = loadJsonGroup('../../data/terms-risk*.json') as TermsRisk[];

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
