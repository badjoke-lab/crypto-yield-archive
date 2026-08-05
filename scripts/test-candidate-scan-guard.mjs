import assert from 'node:assert/strict';
import { assertSafeCandidateScan, findUnsafeAddNowMatches } from './check-candidate-scan.mjs';

const unsafeScan = {
  candidate_count: 3,
  results: [
    {
      candidate_id: 'fixture_exact',
      canonical_name: 'Alpha Yield',
      decision: 'add_now',
      classification: 'exact_duplicate',
      matches: [{ platform_id: 'cya_plat_fixture_001' }],
    },
    {
      candidate_id: 'fixture_ambiguous',
      canonical_name: 'Beta Earn',
      decision: 'add_now',
      classification: 'ambiguous_match',
      matches: [{ platform_id: 'cya_plat_fixture_002' }],
    },
    {
      candidate_id: 'fixture_research',
      canonical_name: 'Gamma Prime',
      decision: 'needs_research',
      classification: 'probable_duplicate',
      matches: [{ platform_id: 'cya_plat_fixture_003' }],
    },
  ],
};

const unsafe = findUnsafeAddNowMatches(unsafeScan);
assert.equal(unsafe.length, 2);
assert.throws(
  () => assertSafeCandidateScan(unsafeScan),
  /fixture_exact Alpha Yield.*fixture_ambiguous Beta Earn/,
);

const safeScan = {
  candidate_count: 2,
  results: [
    {
      candidate_id: 'fixture_new',
      canonical_name: 'Delta Credit',
      decision: 'add_now',
      classification: 'new_candidate',
      matches: [],
    },
    {
      candidate_id: 'fixture_research',
      canonical_name: 'Gamma Prime',
      decision: 'needs_research',
      classification: 'probable_duplicate',
      matches: [{ platform_id: 'cya_plat_fixture_003' }],
    },
  ],
};

assert.doesNotThrow(() => assertSafeCandidateScan(safeScan));
console.log('CYA candidate scan safety guard tests passed.');
