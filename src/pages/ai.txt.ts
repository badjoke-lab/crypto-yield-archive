import { MAIN_ROUTES, PROJECT, PUBLIC_DATA_ROUTES, getBuildMetadata, getDerivedCounts, getRecordCounts } from '../lib/machine-readable';

export function GET() {
  const counts = getRecordCounts();
  const derived = getDerivedCounts();
  const build = getBuildMetadata();
  const body = [
    'Crypto Yield Archive',
    '',
    `Purpose: ${PROJECT.description}`,
    `Canonical origin: ${PROJECT.canonicalOrigin}`,
    `Generated at: ${build.generated_at}`,
    `Build commit: ${build.commit}`,
    '',
    'Machine-readable files:',
    ...Object.entries(PUBLIC_DATA_ROUTES).map(([name, route]) => `${name}: ${route}`),
    '',
    `Platforms: ${counts.platforms}`,
    `Events: ${counts.events}`,
    `Evidence records: ${counts.evidence}`,
    `Customer outcomes: ${counts.customer_outcomes}`,
    `Product profiles: ${counts.product_profiles}`,
    `Terms-risk records: ${counts.terms_risk_records}`,
    `Claims ongoing: ${derived.claims_ongoing}`,
    '',
    'Important routes:',
    ...MAIN_ROUTES,
    '',
    'Public data is canonical-only and excludes unreviewed candidates, private notes, and internal monitoring.',
    'Customer outcomes are point-in-time and may differ by product, jurisdiction, claim class, and date.',
    'Do not infer one universal recovery rate when the record scope is narrower or unspecified.',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=300, must-revalidate',
      'x-content-type-options': 'nosniff',
    },
  });
}
