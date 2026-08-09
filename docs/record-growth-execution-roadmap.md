# CYA record growth execution roadmap

Status: Phase 8 — growth from 75 toward 100  
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
- At audit milestones, record growth stops until the audit checkpoint is completed and its release is production-verified.

## Current confirmed baseline

```text
Repository:              badjoke-lab/crypto-yield-archive
Default branch:          main
Canonical 75 SHA:        106ec5b7b2f69a513d2795f4e352405e964456ca
Canonical production:   Production Surface Check #174 success
75-platform audit PR:    #138 merged
Audit release SHA:       3357933c7d7e4d2449a507979edf3437412280f9
Audit production:        Production Surface Check #175 success
Growth state:            75 -> 100 resumed
Next audit milestone:    100
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

The 75-platform audit preserved the canonical scale, reduced deterministic quality debt from 27 to 23 by removing cross-brand generic alias collisions, retained 0 corpus blockers, 0 low-reliability evidence and 0 low-confidence platforms, and passed exact-SHA production verification.

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
Phase 8 / batch 44: 73 -> 75                        complete / production verified
Phase 8: 75-platform full audit                     complete / production verified
Phase 8: 75 -> 100                                  current
Phase 8: 100-platform full audit                    future mandatory gate
```

## Phase 7 monitoring gate

Weekly existing-record monitoring remains operational and review-only.

Key constraints remain:

- monitoring reuses canonical platform IDs;
- signals cannot directly write or reclassify canonical records;
- stale verification dates, broken/repurposed URLs, status changes, claims changes and material event signals remain review inputs;
- no-change runs and synthetic detection fixtures are tested;
- scheduled monitoring and manual dispatch remain available.

Phase 7 was formally closed and Phase 8 started in PR #121.

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

## 75-platform audit result

Pre-audit:

```text
Corpus blockers:             0
Quality-debt items:         27
Low-reliability evidence:    0
Low-confidence platforms:    0
```

Audit release:

```text
Platforms:                  75
Events:                     309
Evidence:                   485
Outcomes:                    75
Products:                   112
Terms risk:                  75
Claims ongoing:              18
Corpus blockers:              0
Quality-debt items:          23
Low-reliability evidence:     0
Low-confidence platforms:     0
Generated pages:             89
```

The four removed findings were cross-brand collisions from generic aliases such as `simple earn`, `simple earn flexible`, `simple earn fixed` and `flexible savings`. Canonical facts were not changed to reduce debt.

Full details are in `docs/phase-8-75-platform-audit.md`.

## Candidate queue and reserved identifiers

```text
Queue status:            growth_to_100
Active candidates:       3 needs_research
- cya_candidate_000010 Goldfinch
- cya_candidate_000045 Cabital
- cya_candidate_000049 Outlet Finance

Next candidate IDs:      cya_candidate_000069 / cya_candidate_000070
Next platform ID:        cya_plat_000076
Next event ID:           cya_ev_000315
Next audit milestone:    100 platforms
Latest completed batch:  44
```

No active candidate is approved for silent promotion:

- Goldfinch requires a DeFi/institutional-yield scope and entity-boundary decision.
- Cabital requires operating-entity, product-boundary, closure, custody and customer-outcome evidence.
- Outlet Finance requires counterparty, closure, custody and repayment evidence.

## Next-batch research direction

External research completed during the 75-platform production gate identified two strong duplicate-clear candidates for the next candidate-only review:

- Flipster Earn — first-party history establishes the Earn Campaign from 3 April 2024, while 2026 first-party material documents current Basic/Premium/Dynamic Earn products and risk/reward mechanics.
- Bitrue Power Piggy — first-party Bitrue material describes Power Piggy as a flexible staking/yield platform launched in 2019 and confirms continued operation in 2026.

These are research directions only until they are explicitly staged as `cya_candidate_000069` and `cya_candidate_000070` in a candidate-only PR and pass the hardened duplicate scanner and review-only draft generator.

## Production sequencing rule

For every canonical, audit, or state-transition release:

1. merge the reviewed PR;
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
6. Respect candidate-only -> canonical PR separation.
7. Do not silently promote monitoring findings or needs_research candidates.
8. Stop again at 100 for a full-corpus audit before any platform 101 work.
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
Complete the audit-close state-transition PR and verify its exact production SHA.
Then stage the next two reviewed candidates as cya_candidate_000069 and cya_candidate_000070 in a candidate-only PR.
Do not add canonical platform 76 until candidate scan and review-only draft gates pass.
Continue reviewed two-record batches toward 100, then stop for the mandatory 100-platform audit.
```
