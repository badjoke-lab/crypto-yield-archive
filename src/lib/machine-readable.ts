import { allEvents, allEvidence, allOutcomes, allPlatforms, allProducts, allTermsRisk } from './data';

export const MACHINE_READABLE_SCHEMA_VERSION = '1.0.0';
export const DATA_SCHEMA_VERSION = 'cya_platform_event_evidence_outcome_product_terms_v1';

export const PROJECT = {
  projectId: 'crypto-yield-archive',
  siteName: 'Crypto Yield Archive',
  description: 'Evidence-first historical registry of crypto lending, Earn, and yield platforms.',
  registryFamily: 'badjoke-lab-ledger-series',
  registryType: 'historical_crypto_yield_registry',
  canonicalOrigin: 'https://cya.badjoke-lab.com',
  releaseChannel: 'production',
  verificationMarker: 'cya_machine_readable_layer_v1',
  designGeneration: 'editorial_registry_2026_06_10',
} as const;

export const MAIN_ROUTES = [
  '/',
  '/platform/{slug}/',
  '/outcomes/',
  '/failures/',
  '/terms-risk/',
  '/bankruptcy-cases/',
  '/timeline/',
  '/stats/',
  '/source-quality/',
  '/methodology/',
  '/about/',
  '/corrections/',
] as const;

export const ROUTES = {
  home: '/',
  platform_detail: '/platform/{slug}/',
  outcomes: '/outcomes/',
  failures: '/failures/',
  terms_risk: '/terms-risk/',
  bankruptcy_cases: '/bankruptcy-cases/',
  timeline: '/timeline/',
  stats: '/stats/',
  source_quality: '/source-quality/',
  methodology: '/methodology/',
  about: '/about/',
  corrections: '/corrections/',
} as const;

export const DATA_SAFETY = {
  canonical_only: true,
  includes_unreviewed_candidates: false,
  includes_internal_monitoring: false,
  includes_private_notes: false,
} as const;

function countValues(values: unknown[]) {
  return values.reduce<Record<string, number>>((counts, rawValue) => {
    const value = rawValue ? String(rawValue) : 'unknown';
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function runtimeEnvironment() {
  const runtime = globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  };
  return runtime.process?.env || {};
}

export function getBuildMetadata(generatedAt: string) {
  const env = runtimeEnvironment();
  return {
    commit:
      env.CF_PAGES_COMMIT_SHA ||
      env.VERCEL_GIT_COMMIT_SHA ||
      env.GITHUB_SHA ||
      'unknown',
    branch:
      env.CF_PAGES_BRANCH ||
      env.VERCEL_GIT_COMMIT_REF ||
      env.GITHUB_REF_NAME ||
      'main',
    generated_at: generatedAt,
    verification_marker: PROJECT.verificationMarker,
  };
}

export function getRecordCounts() {
  return {
    primary_records: allPlatforms.length,
    events: allEvents.length,
    evidence: allEvidence.length,
  };
}

export function getRecordCountBreakdown() {
  return {
    platforms: allPlatforms.length,
    outcomes: allOutcomes.length,
    products: allProducts.length,
    terms_risk: allTermsRisk.length,
    status: countValues(allPlatforms.map((platform) => platform.status)),
    type: countValues(allPlatforms.map((platform) => platform.type)),
    primary_failure_reason: countValues(allPlatforms.map((platform) => platform.primary_failure_reason)),
    outcome_status: countValues(allOutcomes.map((outcome) => outcome.outcome_status)),
    asset_treatment: countValues(allTermsRisk.map((terms) => terms.asset_treatment)),
    evidence_reliability: countValues(allEvidence.map((item) => item.reliability)),
    evidence_source_type: countValues(allEvidence.map((item) => item.source_type)),
  };
}

export function getRecordsLastReviewedAt() {
  return (
    allPlatforms
      .map((platform) => platform.last_verified_at)
      .filter(Boolean)
      .sort()
      .at(-1) || null
  );
}
