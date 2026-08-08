import assert from 'node:assert/strict';
import { monitorRecords } from './existing-record-monitor.mjs';

const platforms = [
  {
    id: 'cya_plat_test_001',
    canonical_name: 'Fixture Yield',
    official_url_original: 'https://fixture.example/',
    last_verified_at: '2024-01-01',
  },
  {
    id: 'cya_plat_test_002',
    canonical_name: 'Claims Fixture',
    official_url_original: 'https://claims.example/',
    last_verified_at: '2026-08-01',
  },
];
const events = [
  { id: 'cya_ev_test_001', platform_id: 'cya_plat_test_001' },
  { id: 'cya_ev_test_002', platform_id: 'cya_plat_test_002' },
];
const evidence = [
  { id: 'src1', platform_id: 'cya_plat_test_001', url: 'https://fixture.example/missing' },
  { id: 'src2', platform_id: 'cya_plat_test_002', url: 'https://claims.example/source-a' },
  { id: 'src3', platform_id: 'cya_plat_test_002', url: 'https://claims.example/source-b' },
  { id: 'src4', platform_id: 'cya_plat_test_002', url: 'https://claims.example/source-c' },
  { id: 'src5', platform_id: 'cya_plat_test_002', url: 'https://claims.example/auth-required' },
  { id: 'src6', platform_id: 'cya_plat_test_002', url: 'https://claims.example/head-not-allowed' },
  { id: 'src7', platform_id: 'cya_plat_test_002', url: 'https://claims.example/head-fails' },
];
const outcomes = [
  { platform_id: 'cya_plat_test_001', outcome_status: 'unknown', claim_process_url: null },
  { platform_id: 'cya_plat_test_002', outcome_status: 'claims_ongoing', claim_process_url: null },
];

const offline = await monitorRecords({
  platforms,
  events,
  evidence,
  outcomes,
  now: new Date('2026-08-09T00:00:00Z'),
});
assert.equal(offline.mode, 'offline');
assert(offline.findings.some((item) => item.platform_id === 'cya_plat_test_001' && item.category === 'stale_verification' && item.severity === 'high'));
assert(offline.findings.some((item) => item.platform_id === 'cya_plat_test_001' && item.category === 'thin_evidence'));
assert(offline.findings.some((item) => item.platform_id === 'cya_plat_test_002' && item.category === 'missing_claim_process_url'));

const calls = [];
const mockFetch = async (url, options = {}) => {
  const value = String(url);
  const method = options.method ?? 'GET';
  calls.push({ url: value, method });
  if (value.includes('/missing')) return new Response('', { status: 404 });
  if (value.includes('/auth-required')) return new Response('', { status: 401 });
  if (value.includes('/head-not-allowed')) {
    return new Response('', { status: method === 'HEAD' ? 405 : 200 });
  }
  if (value.includes('/head-fails')) {
    if (method === 'HEAD') throw new Error('synthetic HEAD failure');
    return new Response('', { status: 200 });
  }
  return new Response('', { status: 200 });
};
const network = await monitorRecords({
  platforms,
  events,
  evidence,
  outcomes,
  now: new Date('2026-08-09T00:00:00Z'),
  network: true,
  fetchImpl: mockFetch,
  timeoutMs: 1000,
  concurrency: 2,
});
assert(network.probes.attempted > 0);
assert(network.probes.get_fallbacks >= 2);
assert(network.findings.some((item) => item.category === 'url_dead' && item.evidence_id === 'src1'));
assert(network.findings.some((item) => item.category === 'url_probe_blocked' && item.evidence_id === 'src5' && item.severity === 'low' && item.http_status === 401));
assert(!network.findings.some((item) => item.evidence_id === 'src6' && item.category === 'url_unreachable'));
assert(!network.findings.some((item) => item.evidence_id === 'src7' && item.category === 'url_unreachable'));
assert(calls.some((item) => item.url.includes('/head-not-allowed') && item.method === 'GET'));
assert(calls.some((item) => item.url.includes('/head-fails') && item.method === 'GET'));
console.log('CYA existing-record monitor fixture tests passed.');
