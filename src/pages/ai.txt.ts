import { MAIN_ROUTES, PROJECT, getRecordCounts } from '../lib/machine-readable';

export function GET() {
  const counts = getRecordCounts();
  const body = [
    'Crypto Yield Archive',
    '',
    `Purpose: ${PROJECT.description}`,
    `Canonical origin: ${PROJECT.canonicalOrigin}`,
    'Version endpoint: /version.json',
    'Manifest endpoint: /data/manifest.json',
    'LLM guide: /llms.txt',
    `Platforms: ${counts.primary_records}`,
    `Events: ${counts.events}`,
    `Evidence records: ${counts.evidence}`,
    '',
    'Important routes:',
    ...MAIN_ROUTES,
    '',
    'Safety note: Public files expose reviewed public registry information only. They do not include unreviewed candidates, private notes, or internal monitoring output.',
    'Interpretation note: This archive is not an APY ranking, live yield dashboard, investment recommendation, or guarantee of uniform customer outcomes.',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600, must-revalidate',
    },
  });
}
