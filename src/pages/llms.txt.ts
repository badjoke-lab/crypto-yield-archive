import { allEvents, allEvidence, allPlatforms } from '../lib/data';

export function GET() {
  const body = [
    '# Crypto Yield Archive',
    '',
    'Evidence-first historical registry of crypto lending, Earn, and yield platforms.',
    '',
    'Canonical site: https://cya.badjoke-lab.com/',
    '',
    'Machine-readable files:',
    '- https://cya.badjoke-lab.com/version.json',
    '- https://cya.badjoke-lab.com/data/manifest.json',
    '',
    'Main routes:',
    '- https://cya.badjoke-lab.com/',
    '- https://cya.badjoke-lab.com/platform/{slug}/',
    '- https://cya.badjoke-lab.com/outcomes/',
    '- https://cya.badjoke-lab.com/failures/',
    '- https://cya.badjoke-lab.com/terms-risk/',
    '- https://cya.badjoke-lab.com/bankruptcy-cases/',
    '- https://cya.badjoke-lab.com/timeline/',
    '- https://cya.badjoke-lab.com/stats/',
    '- https://cya.badjoke-lab.com/source-quality/',
    '- https://cya.badjoke-lab.com/methodology/',
    '- https://cya.badjoke-lab.com/corrections/',
    '',
    'Build-time record counts:',
    `- Platforms: ${allPlatforms.length}`,
    `- Events: ${allEvents.length}`,
    `- Evidence records: ${allEvidence.length}`,
    '',
    'Use platform dossier pages for record-level claims and methodology/source-quality pages for interpretation.',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
