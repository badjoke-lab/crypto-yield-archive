import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BLOCKING_CLASSIFICATIONS = new Set([
  'exact_duplicate',
  'probable_duplicate',
  'ambiguous_match',
]);

export function findUnsafeAddNowMatches(scan) {
  return (scan?.results ?? []).filter((item) => (
    item?.decision === 'add_now'
    && BLOCKING_CLASSIFICATIONS.has(item?.classification)
  ));
}

export function assertSafeCandidateScan(scan) {
  const unsafe = findUnsafeAddNowMatches(scan);
  if (!unsafe.length) return;

  const details = unsafe.map((item) => {
    const match = item.matches?.[0];
    const target = match?.platform_id ? ` -> ${match.platform_id}` : '';
    return `${item.candidate_id} ${item.canonical_name} (${item.classification}${target})`;
  });
  throw new Error(`Unsafe add_now candidate matches: ${details.join('; ')}`);
}

export function runCli(argv = process.argv.slice(2)) {
  const input = path.resolve(argv[0] || 'data-staging/generated/candidate-scan.json');
  const scan = JSON.parse(fs.readFileSync(input, 'utf8'));
  assertSafeCandidateScan(scan);
  console.log(`CYA candidate scan safety passed: ${scan.candidate_count ?? scan.results?.length ?? 0} candidates.`);
}

const entryPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (entryPath && fileURLToPath(import.meta.url) === entryPath) {
  runCli();
}
