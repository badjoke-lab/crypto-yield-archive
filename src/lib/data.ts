export type Platform = Record<string, any>;
export type EventRecord = Record<string, any>;
export type EvidenceRecord = Record<string, any>;
export type Outcome = Record<string, any>;
export type Product = Record<string, any>;
export type TermsRisk = Record<string, any>;

function loadJsonGroup<T>(modules: Record<string, unknown>): T[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .flatMap(([, value]) => Array.isArray(value) ? value as T[] : []);
}

const platformModules = import.meta.glob('../../data/platforms*.json', { eager: true, import: 'default' });
const eventModules = import.meta.glob('../../data/events*.json', { eager: true, import: 'default' });
const evidenceModules = import.meta.glob('../../data/evidence*.json', { eager: true, import: 'default' });
const outcomeModules = import.meta.glob('../../data/outcomes*.json', { eager: true, import: 'default' });
const productModules = import.meta.glob('../../data/products*.json', { eager: true, import: 'default' });
const termsRiskModules = import.meta.glob('../../data/terms-risk*.json', { eager: true, import: 'default' });

export const allPlatforms = loadJsonGroup<Platform>(platformModules);
export const allEvents = loadJsonGroup<EventRecord>(eventModules);
export const allEvidence = loadJsonGroup<EvidenceRecord>(evidenceModules);
export const allOutcomes = loadJsonGroup<Outcome>(outcomeModules);
export const allProducts = loadJsonGroup<Product>(productModules);
export const allTermsRisk = loadJsonGroup<TermsRisk>(termsRiskModules);

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
};

export function labelFor(value?: string | null): string {
  if (!value) return 'Unknown';
  return PUBLIC_LABELS[value] || value.replace(/_/g, ' ');
}

export function eventsForPlatform(platformId: string): EventRecord[] {
  return allEvents.filter((event) => event.platform_id === platformId).sort((a, b) => String(a.event_date || '').localeCompare(String(b.event_date || '')));
}

export function evidenceForPlatform(platformId: string): EvidenceRecord[] {
  return allEvidence.filter((source) => source.platform_id === platformId);
}

export function evidenceForEvent(eventId: string): EvidenceRecord[] {
  return allEvidence.filter((source) => source.event_id === eventId);
}

export function outcomeForPlatform(platformId: string): Outcome | undefined {
  return allOutcomes.find((outcome) => outcome.platform_id === platformId);
}

export function productsForPlatform(platformId: string): Product[] {
  return allProducts.filter((product) => product.platform_id === platformId);
}

export function termsRiskForPlatform(platformId: string): TermsRisk | undefined {
  return allTermsRisk.find((term) => term.platform_id === platformId);
}

export function platformUrl(platform: Platform): string {
  return `/platform/${platform.slug}/`;
}

export function year(value?: string | null): string {
  return value ? String(value).slice(0, 4) : '—';
}

export const label = labelFor;
export const getEvents = eventsForPlatform;
export const getOutcome = outcomeForPlatform;
export const getTermsRisk = termsRiskForPlatform;
export const getProducts = productsForPlatform;
export const getEvidence = evidenceForPlatform;
export const getEventEvidence = evidenceForEvent;

export function getPlatform(platformId: string): Platform | undefined {
  return allPlatforms.find((platform) => platform.id === platformId);
}

export function getPlatformBySlug(slug: string): Platform | undefined {
  return allPlatforms.find((platform) => platform.slug === slug);
}

export function bankruptcyPlatforms(): Platform[] {
  const caseEventTypes = new Set(['bankruptcy_filed', 'restructuring_started', 'restructuring_completed']);
  return allPlatforms.filter((platform) =>
    ['bankrupt', 'restructuring'].includes(platform.status) ||
    eventsForPlatform(platform.id).some((event) => caseEventTypes.has(event.event_type)),
  );
}
