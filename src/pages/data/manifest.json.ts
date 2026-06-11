import { allEvents, allEvidence, allOutcomes, allPlatforms, allProducts, allTermsRisk } from '../../lib/data';

function countBy(items: Record<string, any>[], key: string) {
  return items.reduce<Record<string, number>>((acc, item) => {
    const value = item[key] || 'unknown';
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

export function GET() {
  const platformsByStatus = countBy(allPlatforms, 'status');
  const platformsByPrimaryFailureReason = countBy(allPlatforms, 'primary_failure_reason');
  const outcomesByStatus = countBy(allOutcomes, 'outcome_status');
  const termsByAssetTreatment = countBy(allTermsRisk, 'asset_treatment');
  const evidenceByReliability = countBy(allEvidence, 'reliability');
  const evidenceBySourceType = countBy(allEvidence, 'source_type');

  const manifest = {
    project: 'crypto-yield-archive',
    title: 'Crypto Yield Archive',
    description: 'Evidence-first historical registry of crypto lending, Earn, and yield platforms.',
    canonical_origin: 'https://cya.badjoke-lab.com',
    generated_at: new Date().toISOString(),
    data_model: {
      platforms: 'Yield platform or Earn/lending service entity.',
      events: 'Historical lifecycle events such as launch, withdrawal suspension, bankruptcy filing, restructuring, repayment, shutdown, or acquisition.',
      evidence: 'Cited source records attached to entities, events, outcomes, terms, or URL history.',
      outcomes: 'Customer outcome classification.',
      products: 'Product-level Earn, lending, or yield records.',
      terms_risk: 'Asset ownership and contractual-risk classification.',
    },
    files: {
      version: '/version.json',
      home: '/',
      platform_route_pattern: '/platform/{slug}/',
      outcomes: '/outcomes/',
      failures: '/failures/',
      terms_risk: '/terms-risk/',
      bankruptcy_cases: '/bankruptcy-cases/',
      timeline: '/timeline/',
      stats: '/stats/',
      source_quality: '/source-quality/',
      methodology: '/methodology/',
      corrections: '/corrections/',
    },
    record_counts: {
      platforms: allPlatforms.length,
      events: allEvents.length,
      evidence: allEvidence.length,
      outcomes: allOutcomes.length,
      products: allProducts.length,
      terms_risk: allTermsRisk.length,
    },
    distributions: {
      platforms_by_status: platformsByStatus,
      platforms_by_primary_failure_reason: platformsByPrimaryFailureReason,
      outcomes_by_status: outcomesByStatus,
      terms_by_asset_treatment: termsByAssetTreatment,
      evidence_by_reliability: evidenceByReliability,
      evidence_by_source_type: evidenceBySourceType,
    },
    sample_platforms: allPlatforms.slice(0, 12).map((platform) => ({
      id: platform.id,
      slug: platform.slug,
      name: platform.name,
      status: platform.status,
      primary_failure_reason: platform.primary_failure_reason,
      url: `/platform/${platform.slug}/`,
    })),
    usage_notes: [
      'This is a historical registry, not a live APY ranking and not investment advice.',
      'Use /version.json to confirm which production generation is deployed.',
      'Use platform pages for evidence-linked claims and uncertainty notes.',
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
