import { highestId, latestBatch, loadGroup } from './lib/registry-files.mjs';

const platforms = loadGroup('platforms');
const events = loadGroup('events');
const evidence = loadGroup('evidence');
const batch = latestBatch();
const nextPlatform = highestId(platforms, /^cya_plat_(\d+)$/) + 1;
const nextEvent = highestId(events, /^cya_ev_(\d+)$/) + 1;
const nextBatch = batch + 1;

console.log(JSON.stringify({
  latest_batch: batch,
  next_batch: nextBatch,
  next_platform_id: `cya_plat_${String(nextPlatform).padStart(6, '0')}`,
  next_event_id: `cya_ev_${String(nextEvent).padStart(6, '0')}`,
  next_evidence_prefix: `cya_src_b${nextBatch}_`,
  evidence_records: evidence.length,
}, null, 2));
