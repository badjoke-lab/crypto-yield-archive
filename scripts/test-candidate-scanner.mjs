import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { scanCandidates } from './candidate-scanner.mjs';

const fixturePath = path.resolve('scripts/fixtures/candidate-scanner.json');
const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));
const result = scanCandidates({
  candidates: fixture.candidates,
  platforms: fixture.platforms,
  canonicalDigest: 'fixture-digest',
});
const byId = new Map(result.results.map((item) => [item.candidate_id, item]));

assert.equal(byId.get('fixture_exact').classification, 'exact_duplicate');
assert.equal(byId.get('fixture_exact').eligible_for_draft, false);
assert.equal(byId.get('fixture_alias').classification, 'probable_duplicate');
assert.equal(byId.get('fixture_alias').matches[0].platform_id, 'cya_plat_fixture_001');
assert.equal(byId.get('fixture_new').classification, 'new_candidate');
assert.equal(byId.get('fixture_new').eligible_for_draft, true);
assert.equal(byId.get('fixture_cross_domain_shared_alias').classification, 'new_candidate');
assert.equal(byId.get('fixture_cross_domain_shared_alias').eligible_for_draft, true);
assert.equal(byId.get('fixture_cross_domain_shared_alias').matches[0].platform_id, 'cya_plat_fixture_003');
assert.ok(byId.get('fixture_cross_domain_shared_alias').matches[0].score < 70);
assert.equal(
  byId.get('fixture_cross_domain_shared_alias').matches[0].reasons[0].type,
  'alias_exact_domain_conflict',
);
assert.equal(byId.get('fixture_research').classification, 'manual_review_required');
assert.equal(byId.get('fixture_research').eligible_for_draft, false);
assert.equal(byId.get('fixture_terminal').classification, 'out_of_scope');
assert.equal(byId.get('fixture_terminal').eligible_for_draft, false);
assert.deepEqual(result.counts, {
  exact_duplicate: 1,
  probable_duplicate: 1,
  new_candidate: 2,
  manual_review_required: 1,
  out_of_scope: 1,
});

console.log('CYA candidate scanner fixture tests passed.');
