import { MAIN_ROUTES, PROJECT, getRecordCounts } from '../lib/machine-readable';

export function GET() {
  const counts = getRecordCounts();
  const body = [
    '# Crypto Yield Archive',
    '',
    PROJECT.description,
    '',
    `Canonical site: ${PROJECT.canonicalOrigin}/`,
    '',
    'Machine-readable files:',
    '- /version.json',
    '- /data/manifest.json',
    '- /ai.txt',
    '',
    'Main routes:',
    ...MAIN_ROUTES.map((route) => `- ${route}`),
    '',
    'Build-time record counts:',
    `- Platforms: ${counts.primary_records}`,
    `- Events: ${counts.events}`,
    `- Evidence records: ${counts.evidence}`,
    '',
    'Use notes:',
    '- This is a historical registry, not an APY ranking or live yield dashboard.',
    '- This is not an investment recommendation.',
    '- Customer outcomes may differ by jurisdiction, claim class, product, and date.',
    '- Use methodology, source-quality, event, and evidence information when interpreting records.',
    '- Public machine-readable files contain reviewed public registry information only.',
    '- Record data may be incomplete or revised.',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600, must-revalidate',
    },
  });
}
