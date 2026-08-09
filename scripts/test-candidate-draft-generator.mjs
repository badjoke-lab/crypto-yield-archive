import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { generateDraftPackage } from './candidate-draft-generator.mjs';

const fixture = JSON.parse(
  fs.readFileSync(path.resolve('scripts/fixtures/candidate-scanner.json'), 'utf8'),
);
const result = generateDraftPackage({
  candidates: fixture.candidates,
  platforms: fixture.platforms,
  canonicalDigest: 'fixture-digest',
});

assert.equal(result.manifest.candidate_count, 6);
assert.equal(result.manifest.ready_for_review, 2);
assert.equal(result.manifest.blocked, 4);
assert.equal(result.manifest.canonical_ids_assigned, 0);
assert.equal(result.manifest.canonical_writes_performed, 0);
assert.equal(result.platforms.length, 6);
assert.equal(result.events.length, 6);
assert.equal(result.outcomes.length, 6);
assert.equal(result.products.length, 6);
assert.equal(result.termsRisk.length, 6);
assert.equal(result.evidence.length, 4);

for (const record of result.platforms) assert.equal(record.id, null);
for (const record of result.events) {
  assert.equal(record.id, null);
  assert.equal(record.platform_id, null);
}
for (const record of result.evidence) {
  assert.equal(record.id, null);
  assert.equal(record.platform_id, null);
  assert.equal(record.event_id, null);
  assert.equal(record.source_type, null);
  assert.equal(record.publisher, null);
}
for (const record of result.outcomes) {
  assert.equal(record.platform_id, null);
  assert.equal(record.outcome_status, 'unknown');
}
for (const record of result.termsRisk) {
  assert.equal(record.platform_id, null);
  assert.equal(record.terms_status, 'unknown');
  assert.equal(record.source_evidence_id, null);
}

const platformByCandidate = new Map(
  result.platforms.map((record) => [record.draft_meta.candidate_id, record]),
);
assert.equal(platformByCandidate.get('fixture_new').draft_meta.review_state, 'ready_for_review');
assert.equal(platformByCandidate.get('fixture_new').draft_meta.eligible_for_canonical_promotion, false);
assert.equal(
  platformByCandidate.get('fixture_cross_domain_shared_alias').draft_meta.review_state,
  'ready_for_review',
);
assert.equal(
  platformByCandidate.get('fixture_cross_domain_shared_alias').draft_meta.classification,
  'new_candidate',
);
assert.equal(platformByCandidate.get('fixture_research').draft_meta.review_state, 'blocked');
assert.equal(platformByCandidate.get('fixture_research').draft_meta.classification, 'manual_review_required');
assert.equal(platformByCandidate.get('fixture_exact').draft_meta.classification, 'exact_duplicate');
assert.equal(platformByCandidate.get('fixture_alias').draft_meta.classification, 'probable_duplicate');

console.log('CYA review-only candidate draft generator tests passed.');
