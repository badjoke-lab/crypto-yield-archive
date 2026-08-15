import { execFileSync } from 'node:child_process';

const output = execFileSync(process.execPath, ['scripts/lifecycle-gap-report.mjs'], {
  encoding: 'utf8',
});

const queueMarker = '## Next enrichment review queue';
const watchMarker = '## Ongoing watch';
const queueStart = output.indexOf(queueMarker);
const watchStart = output.indexOf(watchMarker);

if (queueStart < 0 || watchStart < 0 || watchStart <= queueStart) {
  throw new Error('Lifecycle report queue sections were not emitted as expected');
}

const queue = output.slice(queueStart, watchStart);

for (const platformId of ['cya_plat_000037', 'cya_plat_000061']) {
  if (queue.includes(platformId)) {
    throw new Error(`${platformId} remains in the next-review queue despite returned-to-users recovery evidence`);
  }
}

if (!queue.includes('cya_plat_000051')) {
  throw new Error('Known unresolved lifecycle target cya_plat_000051 disappeared unexpectedly');
}

console.log('Lifecycle gap returned-assets regression guard passed.');
