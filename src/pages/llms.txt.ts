import { MAIN_ROUTES, PROJECT, PUBLIC_DATA_ROUTES, getBuildMetadata, getDerivedCounts, getRecordCounts } from '../lib/machine-readable';

export function GET() {
  const counts = getRecordCounts();
  const derived = getDerivedCounts();
  const build = getBuildMetadata();
  const body = [
    '# Crypto Yield Archive',
    '',
    PROJECT.description,
    `Canonical site: ${PROJECT.canonicalOrigin}/`,
    `Generated at: ${build.generated_at}`,
    `Build commit: ${build.commit}`,
    '',
    'Machine-readable files:',
    ...Object.values(PUBLIC_DATA_ROUTES).map((route) => `- ${route}`),
    '',
    'Main routes:',
    ...MAIN_ROUTES.map((route) => `- ${route}`),
    '',
    'Build-time record counts:',
    `- Platforms: ${counts.platforms}`,
    `- Events: ${counts.events}`,
    `- Evidence records: ${counts.evidence}`,
    `- Customer outcomes: ${counts.customer_outcomes}`,
    `- Product profiles: ${counts.product_profiles}`,
    `- Terms-risk records: ${counts.terms_risk_records}`,
    `- Claims ongoing: ${derived.claims_ongoing}`,
    '',
    'Interpretation:',
    '- This is a historical registry, not an APY ranking or live yield dashboard.',
    '- Outcomes are point-in-time records and may differ by product, jurisdiction, claim class, and date.',
    '- Do not reduce partial repayment, full repayment, and claims ongoing to one universal recovery number.',
    '- Empty scope dimensions mean not specified, not universal coverage.',
    '- Public files contain reviewed canonical data only; candidates and internal monitoring are excluded.',
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
