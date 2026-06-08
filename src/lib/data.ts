type JsonRecord = Record<string, any>;

type JsonModule = {
  default: JsonRecord[];
};

function loadModules(modules: Record<string, JsonModule>) {
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

export const allPlatforms = loadModules(import.meta.glob<JsonModule>('../../data/platforms*.json', { eager: true })) as Platform[];
export const allEvents = loadModules(import.meta.glob<JsonModule>('../../data/events*.json', { eager: true })) as EventRecord[];
export const allEvidence = loadModules(import.meta.glob<JsonModule>('../../data/evidence*.json', { eager: true })) as EvidenceRecord[];
export const allOutcomes = loadModules(import.meta.glob<JsonModule>('../../data/outcomes*.json', { eager: true })) as Outcome[];
export const allProducts = loadModules(import.meta.glob<JsonModule>('../../data/products*.json', { eager: true })) as Product[];
export const allTermsRisk = loadModules(import.meta.glob<JsonModule>('../../data/terms-risk*.json', { eager: true })) as TermsRisk[];

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
