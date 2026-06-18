import buildMetadata from '../generated/build-metadata.json';
import { allEvents, allEvidence, allOutcomes, allPlatforms, allProducts, allTermsRisk } from './data';

export const MACHINE_READABLE_SCHEMA_VERSION = '1.1.0';
export const DATA_SCHEMA_VERSION = 'cya_registry_public_data_v2';

export const PROJECT = {
  projectId: 'crypto-yield-archive',
  siteName: 'Crypto Yield Archive',
  description: 'Evidence-first historical registry of crypto lending, Earn, and yield platforms.',
  registryFamily: 'badjoke-lab-ledger-series',
  registryType: 'historical_crypto_yield_registry',
  canonicalOrigin: 'https://cya.badjoke-lab.com',
  releaseChannel: 'production',
  verificationMarker: 'cya_machine_readable_layer_v2',
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

export const PUBLIC_DATA_ROUTES = {
  version: '/version.json',
  manifest: '/data/manifest.json',
  platforms: '/data/platforms.json',
  events: '/data/events.json',
  evidence: '/data/evidence.json',
  outcomes: '/data/outcomes.json',
  products: '/data/products.json',
  terms_risk: '/data/terms-risk.json',
  llms: '/llms.txt',
  ai: '/ai.txt',
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

export function getBuildMetadata() {
  return {
    commit: buildMetadata.commit,
    branch: buildMetadata.branch,
    generated_at: buildMetadata.generated_at,
    verification_marker: PROJECT.verificationMarker,
  };
}

export function getRecordCounts() {
  return {
    primary_records: allPlatforms.length,
    platforms: allPlatforms.length,
    events: allEvents.length,
    evidence: allEvidence.length,
    customer_outcomes: allOutcomes.length,
    product_profiles: allProducts.length,
    terms_risk_records: allTermsRisk.length,
  };
}

export function getDerivedCounts() {
  return {
    claims_ongoing: allOutcomes.filter((outcome) => outcome.outcome_status === 'claims_ongoing').length,
  };
}

export function getRecordCountBreakdown() {
  return {
    status: countValues(allPlatforms.map((platform) => platform.status)),
    type: countValues(allPlatforms.map((platform) => platform.type)),
    failure_reason: countValues(allPlatforms.map((platform) => platform.failure_reason)),
    outcome_status: countValues(allOutcomes.map((outcome) => outcome.outcome_status)),
    terms_status: countValues(allTermsRisk.map((terms) => terms.terms_status)),
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

const platformById = new Map(allPlatforms.map((platform) => [platform.id, platform]));

export function getPublicOutcomes() {
  return allOutcomes.map((outcome) => {
    const platform = platformById.get(outcome.platform_id);
    const platformProducts = allProducts
      .filter((product) => product.platform_id === outcome.platform_id)
      .map((product) => product.product_name)
      .filter(Boolean);
    const claimClasses = Array.isArray(outcome.claim_classes) ? outcome.claim_classes : [];
    const jurisdictions = Array.isArray(outcome.jurisdictions) ? outcome.jurisdictions : [];
    const productNames = Array.isArray(outcome.affected_products) && outcome.affected_products.length
      ? outcome.affected_products
      : platformProducts;

    return {
      ...outcome,
      as_of: outcome.as_of || outcome.last_verified_at || platform?.last_verified_at || null,
      scope: {
        platform_id: outcome.platform_id,
        product_names: productNames,
        claim_classes: claimClasses,
        jurisdictions,
        platform_origin: platform?.country_or_origin || null,
        scope_status: claimClasses.length || jurisdictions.length ? 'partially_specified' : 'not_specified',
      },
    };
  });
}

export function getDatasetEnvelope(dataset: string, records: unknown[]) {
  return {
    schema_version: MACHINE_READABLE_SCHEMA_VERSION,
    data_schema_version: DATA_SCHEMA_VERSION,
    project_id: PROJECT.projectId,
    dataset,
    canonical_origin: PROJECT.canonicalOrigin,
    canonical_only: true,
    generated_at: buildMetadata.generated_at,
    build: getBuildMetadata(),
    record_count: records.length,
    records,
  };
}

export function jsonResponse(payload: unknown) {
  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300, must-revalidate',
      'x-content-type-options': 'nosniff',
    },
  });
}
