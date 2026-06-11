import { allEvents, allEvidence, allPlatforms } from '../lib/data';

export function GET() {
  const body = [
    'Crypto Yield Archive',
    '',
    'Purpose: historical registry of crypto lending, Earn, and yield platform outcomes.',
    'Canonical origin: https://cya.badjoke-lab.com',
    'Version endpoint: /version.json',
    'Manifest endpoint: /data/manifest.json',
    `Platforms: ${allPlatforms.length}`,
    `Events: ${allEvents.length}`,
    `Evidence records: ${allEvidence.length}`,
    '',
    'Important routes:',
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
    '/corrections/',
    '',
    'Use this archive as a starting point for source-linked historical records, not as financial advice.',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
