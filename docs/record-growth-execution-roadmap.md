# CYA record growth execution roadmap

Status: Phase 8 — 75-platform audit checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-09

## Purpose

This file is the authoritative recovery point for CYA record growth, candidate review, canonical promotion, production deployment, monitoring, and milestone audits.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates and generated drafts remain under `data-staging/` or workflow artifacts until reviewed.
- Use one candidate-only PR followed by one separate canonical PR for new records.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, fraud, or customer outcome from marketing or candidate metadata.
- Product, legal-entity, jurisdiction, terms-version, custody, identity, and customer-outcome boundaries require explicit review.
- Repository validation, Cloudflare deployment, and direct production observation are separate claims.
- At audit milestones, record growth stops until the audit checkpoint is completed.

## Current confirmed repository baseline

```text
Repository:              badjoke-lab/crypto-yield-archive
Default branch:          main
Canonical release SHA:   106ec5b7b2f69a513d2795f4e352405e964456ca
Latest canonical PR:     #137 Add Phase 8 batch 44 Bitfinex Margin Funding and Poloniex Earn records
Candidate-only PR:       #136 Stage Phase 8 batch 44 Bitfinex Margin Funding and Poloniex Earn candidates
Production verification: run #174 in progress for exact canonical SHA
Growth state:            paused at 75 for full audit
```

### Canonical scale

```text
Platforms:       75
Events:          309
Evidence:        485
Outcomes:         75
Products:        112
Terms risk:       75
Claims ongoing:   18
Generated pages:  89
```

PR #137 validation confirmed these counts, 0 corpus blockers, 0 low-reliability evidence, and 0 low-confidence platforms before merge.

## Completed phase gates

```text
Phase 3A: reach 30 platforms                         complete
Phase 3B / batches 22-26: 30 -> 40                  complete
Phase 4: 40-platform full audit                     complete
Phase 5 / R7: candidate scanner                     complete
Phase 5 / R8: review-only draft generator           complete
Phase 6 / batches 27-36: 40 -> 60                   complete
Phase 7: weekly existing-record monitoring          complete / operational
Phase 8 / batch 37: 60 -> 61                        complete
Phase 8 / batch 38: 61 -> 63                        complete
Phase 8 / batch 39: 63 -> 65                        complete
Phase 8 / batch 40: 65 -> 67                        complete
Phase 8 / batch 41: 67 -> 69                        complete
Phase 8 / batch 42: 69 -> 71                        complete
Phase 8 / batch 43: 71 -> 73                        complete
Phase 8 / batch 44: 73 -> 75                        canonical merge complete; production verification in progress
Phase 8: 75-platform full audit                     current
Phase 8: 75 -> 100                                  blocked until audit completion
Phase 8: 100-platform full audit                    future
```

## Phase 7 monitoring gate

Weekly existing-record monitoring was implemented before Phase 8 growth and remains review-only.

Key constraints remain:

- monitoring reuses canonical platform IDs;
- signals cannot directly write or reclassify canonical records;
- stale verification dates, broken/repurposed URLs, status changes, claims changes and material event signals remain review inputs;
- no-change runs and synthetic detection fixtures are tested;
- scheduled monitoring and manual dispatch remain available.

Phase 7 implementation and tuning were completed before Phase 8 entry; Phase 7 was formally closed and Phase 8 started in PR #121.

## Phase 8 growth summary

```text
Batch 37: Swyftx Earn                               60 -> 61
Batch 38: KuCoin Earn + OKX Simple Earn             61 -> 63
Batch 39: Gate Simple Earn + Bybit Easy Earn        63 -> 65
Batch 40: Binance Simple Earn + Bitget Simple Earn  65 -> 67
Batch 41: Phemex Savings + WhiteBIT Crypto Lending  67 -> 69
Batch 42: HTX Simple Earn + CoinEx Flexible Savings 69 -> 71
Batch 43: BingX Earn + MEXC Savings                 71 -> 73
Batch 44: Bitfinex Margin Funding + Poloniex Earn   73 -> 75
```

Every Phase 8 addition used a candidate-only gate followed by a separate canonical PR. Goldfinch, Cabital and Outlet Finance were not silently promoted.

## Candidate queue and reserved identifiers

```text
Active candidate queue: 3 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000045 Cabital
- cya_candidate_000049 Outlet Finance

Next candidate IDs:      cya_candidate_000069 / cya_candidate_000070
Next platform ID:        cya_plat_000076
Next event ID:           cya_ev_000315
Latest completed batch:  44
```

No active candidate is approved for silent promotion:

- Goldfinch requires a DeFi/institutional-yield scope and entity-boundary decision.
- Cabital requires operating-entity, product-boundary, closure, custody and customer-outcome evidence.
- Outlet Finance requires counterparty, closure, custody and repayment evidence.

## 75-platform audit baseline

The canonical PR #137 audit output before merge reported:

```text
Corpus blockers:             0
Quality-debt items:         27
Medium-reliability evidence:108
Low-reliability evidence:    0
Low-confidence platforms:    0
Low-confidence events:      30
Unknown outcomes:           13
Claims ongoing:             18
Unclear terms:              16
```

Four quality-debt findings are generic cross-brand alias collisions introduced by the exchange-yield expansion:

- `simple earn flexible`
- `simple earn fixed`
- `simple earn`
- `flexible savings`

The 75-platform audit namespaces or removes only those generic aliases while preserving canonical names, reviewed historical brand aliases, product facts, statuses and outcomes.

Other known debt is not to be hidden or guessed away. It includes:

- Ledn, Crypto.com Earn and Haru Invest with fewer than three evidence records;
- repurposed historical URLs for several legacy records;
- Flint and BitLendingClub without an exact verified end date;
- unknown historical terms for Babel Finance, BlockFills, Stablegains, Hodlnaut, Vauld, Haru Invest and CoinLoan;
- split consumed-candidate ledgers.

## 75-platform audit completion gate

The audit is complete only when all of the following are true:

```text
75 canonical platforms preserved                    required
no canonical record added or removed                required
canonical/reference integrity blockers = 0          required
low-reliability evidence = 0                        required
low-confidence platforms = 0                        required
generic cross-brand alias collisions removed        required
remaining quality debt explicitly documented        required
all normal validation/build/SEO checks green        required
representative public-surface checks green          required
75-platform canonical production SHA verified       required
75-platform audit release production verified       required
```

Only after this gate is complete may the queue move from `audit_at_75` to growth toward 100 and platform `cya_plat_000076` be considered.

## Production sequencing rule

For every canonical release:

1. merge the canonical PR;
2. freeze `main`;
3. wait for the Cloudflare Pages check for that exact SHA;
4. require `/version.json` build commit to match the same SHA;
5. require Production Surface Check and production screenshots to succeed;
6. only then allow the next `main` merge.

This prevents a later staging or canonical commit from overtaking the exact-SHA production verifier.

## Recovery procedure

```text
1. Read this file and docs/development-policy.md.
2. Fetch current main and recent/open PRs.
3. Check the latest Cloudflare exact-SHA deployment and Production Surface Check.
4. Confirm the active candidate ledger and consumed ledgers.
5. Recalculate canonical counts and maximum IDs.
6. If queue status is audit_at_75, do not stage platform 76.
7. Complete docs/phase-8-75-platform-audit.md and its CI/production gates first.
8. Never silently promote monitoring findings or needs_research candidates.
```

Recommended checks:

```bash
npm install
npm run candidates:check
npm run candidates:scan
npm run candidates:draft
npm run batch:next-ids
npm test
```

## Immediate next action

```text
Complete exact-SHA production verification for canonical SHA 106ec5b7b2f69a513d2795f4e352405e964456ca.
Complete the dedicated 75-platform audit branch without adding platform 76.
Reduce only evidence-backed / deterministic quality debt, preserve unresolved historical uncertainty, and verify the audit release in production before resuming 75 -> 100 growth.
```
