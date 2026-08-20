# CYA Ledger Series Phase 9 adapter

Status: bounded implementation task  
Date: 2026-08-20

## Purpose

Implement the cross-registry Ledger Series Phase 9 Stage 3 adapter frozen in `badjoke-lab/historical-exchange-index#780` without changing CYA canonical data or weakening the native machine-readable contract.

## Native contract reused

- official origin: `https://cya.badjoke-lab.com`
- manifest: `/data/manifest.json`
- native platform dossier: `/data/platform/{slug}.json`
- primary record: `yield_platform`
- native dossier already preserves platform, events, evidence, customer outcome, products, terms/risk, build commit, generated time, verification marker, and canonical-only safety
- public discovery/listing: `/platforms/`
- Compare: `/compare/`
- Stats: `/stats/`

## Authorized implementation scope

- `/data/series/registry.json`
- `/data/series/index.json`
- `/data/series/records/{slug}.json`
- deterministic adapter validation
- permanent read-only CI for the adapter
- exact-main production verification after merge

## Boundaries

- canonical data delta: 0
- schema/taxonomy delta: 0
- no candidate or monitoring publication
- no Search/Compare/Stats/UI behavior changes
- no relationship inference in Stage 3
- native `customer_outcome` scope remains native and must not be flattened into a universal recovery claim
- native build verification remains authoritative
- adapter record count must be derived from current reviewed canonical platform count; do not hardcode the current count because vertical canonical growth may merge independently

## Concurrent vertical work

Open PR #285 changes only canonical/staging data batches and its task document. This adapter must not retarget, rewrite, merge, or otherwise disturb #285. Adapter code must remain count-dynamic so either merge order stays valid.

## Acceptance

- one Series envelope for every native `/data/platform/{slug}.json` dossier
- stable global key `crypto-yield-archive:yield_platform:<native-id>`
- exact native record/supporting-record parity inside the envelope
- event/evidence parity with the native dossier
- canonical-only/data-safety boundaries preserved
- all global keys unique
- real human/machine URLs only
- no typed Series relationship claims during Stage 3
- existing CYA test/build/output checks remain green
- exact-main production Series verification succeeds after merge
