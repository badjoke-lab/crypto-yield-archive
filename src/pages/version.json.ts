import { allEvents, allEvidence, allOutcomes, allPlatforms, allProducts, allTermsRisk } from '../lib/data';

export function GET() {
  const latestVerifiedAt = allPlatforms
    .map((platform) => platform.last_verified_at)
    .filter(Boolean)
    .sort()
    .at(-1) || null;

  return new Response(JSON.stringify({
    project: 'crypto-yield-archive',
    site_name: 'Crypto Yield Archive',
    canonical_origin: 'https://cya.badjoke-lab.com',
    registry_type: 'historical_crypto_yield_registry',
    design_generation: 'editorial_registry_2026_06_10',
    release_channel: 'production',
    verification_marker: 'cya_editorial_registry_redesign_complete',
    latest_known_main_commit: '85a8b93df7b8027e1b0fb13250624e52d2bd9bfd',
    generated_at: new Date().toISOString(),
    latest_platform_verified_at: latestVerifiedAt,
    record_counts: {
      platforms: allPlatforms.length,
      events: allEvents.length,
      evidence: allEvidence.length,
      outcomes: allOutcomes.length,
      products: allProducts.length,
      terms_risk: allTermsRisk.length,
    },
    expected_routes: [
      '/',
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
      '/version.json',
      '/data/manifest.json',
    ],
    verification_notes: [
      'If this file is visible in production, the post-redesign build is deployed.',
      'If this file is missing or the design_generation differs, production is still serving an older build.',
    ],
  }, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
