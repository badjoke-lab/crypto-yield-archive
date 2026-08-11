# CYA record growth execution roadmap

Status: Phase 8 — growth from 90 toward 100  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-11

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
Canonical 90 SHA:        907689cd598f1fff9a04dbfc02e7ad7314b55244
Latest canonical PR:     #156
Production verification: Production Surface Check #184 success
Screenshots:             Representative page screenshots #71 success
Growth state:            90 -> 100
Next audit milestone:    100
```

### Canonical scale

```text
Platforms:       90
Events:          331
Evidence:        548
Outcomes:         90
Products:        130
Terms risk:       90
Corpus blockers:  0
Generated pages: 104
```

The 90-platform release added eToro Staking and Robinhood Crypto Staking after candidate-only review, hardened duplicate scanning, corpus validation and separate canonical promotion. The exact 90-platform production SHA passed the production surface gate and representative screenshot workflow.

## Completed phase gates

```text
Phase 3A: reach 30 platforms                         complete
Phase 3B / batches 22-26: 30 -> 40                  complete
Phase 4: 40-platform full audit                     complete
Phase 5 / R7: candidate scanner                     complete
Phase 5 / R8: review-only draft generator           complete
Phase 6 / batches 27-36: 40 -> 60                   complete
Phase 7: weekly existing-record monitoring          complete / operational
Phase 8 / batches 37-44: 60 -> 75                   complete
Phase 8: 75-platform full audit                     complete / production verified
Phase 8 / batch 45: 75 -> 77                        complete
Phase 8 / batch 46: 77 -> 79                        complete
Phase 8 / batch 47: 79 -> 81                        complete
Phase 8 / batch 48: 81 -> 82                        complete
Phase 8 / batch 49: 82 -> 84                        complete
Phase 8 / batch 50: duplicate resolution            complete / no platform IDs consumed
Phase 8 / batch 51: 84 -> 86                        complete
Phase 8 / batch 52: 86 -> 88                        complete
Phase 8 / batch 53: 88 -> 90                        complete / production verified
Phase 8 / batch 54 candidate gate                   current
Phase 8: 90 -> 100                                  current
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
Batch 37: Swyftx Earn                                60 -> 61
Batch 38: KuCoin Earn + OKX Simple Earn              61 -> 63
Batch 39: Gate Simple Earn + Bybit Easy Earn         63 -> 65
Batch 40: Binance Simple Earn + Bitget Simple Earn   65 -> 67
Batch 41: Phemex Savings + WhiteBIT Crypto Lending   67 -> 69
Batch 42: HTX Simple Earn + CoinEx Flexible Savings  69 -> 71
Batch 43: BingX Earn + MEXC Savings                  71 -> 73
Batch 44: Bitfinex Margin Funding + Poloniex Earn    73 -> 75
Audit:    full 75-platform corpus                    complete
Batch 45: Flipster Earn + Bitrue Power Piggy         75 -> 77
Batch 46: BloFin Earn + LBank Earn                   77 -> 79
Batch 47: Toobit Earn + Bitunix Easy Earn            79 -> 81
Batch 48: AscendEX Earn                              81 -> 82
          BitMart Earn candidate resolved duplicate  no new ID
Batch 49: Bitpanda Earn + CEX.IO Earn                82 -> 84
Batch 50: SwissBorg + Wirex candidates duplicates    no new IDs
Batch 51: Bitvavo Earn + Coinmetro BTC Earn          84 -> 86
Batch 52: Uphold Staking + HashKey ETH Staking       86 -> 88
Batch 53: eToro Staking + Robinhood Crypto Staking   88 -> 90
Batch 54: Bitstamp candidate retained; Crypto.com duplicate of cya_plat_000019
```

Every Phase 8 addition continues to use a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs. `needs_research` candidates are not silently promoted.

## Candidate queue and reserved identifiers

Current canonical baseline and Batch 54 staging state:

```text
Queue status:            growth_to_100
Canonical platforms:     90
Staged add_now:           cya_candidate_000087 Bitstamp Earn Staking
Resolved duplicate:      cya_candidate_000088 Crypto.com On-Chain Staking -> cya_plat_000019
Next candidate IDs:      cya_candidate_000089 / cya_candidate_000090
Next platform ID:        cya_plat_000091
Next event ID:           cya_ev_000337
Next audit milestone:    100 platforms
Latest completed batch:  53
```

Long-lived `needs_research` candidates remain:

```text
- cya_candidate_000010 Goldfinch
- cya_candidate_000045 Cabital
- cya_candidate_000049 Outlet Finance
```

They remain blocked from silent promotion:

- Goldfinch requires a DeFi/institutional-yield scope and entity-boundary decision.
- Cabital requires operating-entity, product-boundary, closure, custody and customer-outcome evidence.
- Outlet Finance requires counterparty, closure, custody and repayment evidence.

## Batch 54 candidate-only gate

Candidate review results:

```text
cya_candidate_000087 — Bitstamp Earn Staking
  scanner: new_candidate / draft-eligible
  decision: add_now

cya_candidate_000088 — Crypto.com On-Chain Staking
  scanner: exact_duplicate -> cya_plat_000019
  decision: duplicate
  canonical ID consumed: no
```

Bitstamp research basis:

- first-party material supports public ETH staking under Bitstamp Earn from 2021-07-13, with an earlier April 2021 early-access rollout;
- product and jurisdiction boundaries must remain explicit;
- historical ALGO staking and other Earn products are not automatically one identical product;
- no universal custody, legal-title, segregation, principal-protection or insolvency conclusion may be inferred.

Crypto.com duplicate resolution:

- current first-party material supports active multi-asset on-chain staking, protocol-derived variable rewards, service fees and network-specific bonding/unbonding mechanics;
- hardened scanning matched the staged identity exactly to canonical `cya_plat_000019`;
- no second platform identity may be created and no new canonical platform ID is consumed;
- the newly reviewed 2026 material may be considered later for evidence-backed enrichment of the existing canonical record.

The duplicate is preserved in `data-staging/candidates/cya-consumed-duplicate-review-batch-54.json` and removed from the active candidate ledger.

## Production sequencing rule

For every canonical, audit, or state-transition release:

1. merge the reviewed PR;
2. freeze `main`;
3. wait for the Cloudflare Pages check for that exact SHA;
4. require `/version.json` build commit to match the same SHA;
5. require Production Surface Check and production screenshots to succeed;
6. only then allow the next `main` merge.

Candidate-only PRs may be prepared from the exact verified canonical baseline, but canonical promotion must not overtake the production verification gate.

## Recovery procedure

```text
1. Read this file and docs/development-policy.md.
2. Fetch current main and recent/open PRs.
3. Check the latest exact-SHA Cloudflare deployment, Production Surface Check and representative screenshots.
4. Confirm the active candidate ledger and consumed ledgers.
5. Recalculate canonical counts and maximum IDs.
6. Respect candidate-only -> canonical PR separation.
7. Do not silently promote monitoring findings or needs_research candidates.
8. Stop at 100 for the mandatory full-corpus audit before any platform 101 work.
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
1. Complete the Batch 54 candidate-only PR with Bitstamp as the sole add_now candidate and Crypto.com recorded as a resolved duplicate.
2. Require hardened duplicate scan, corpus audit, review-only draft generation and normal repository checks to pass.
3. If candidate-only gates pass, merge the candidate-only PR without changing canonical data.
4. Open a separate canonical promotion PR for Bitstamp beginning at cya_plat_000091 and cya_ev_000337 as applicable.
5. After canonical merge, freeze main and require exact-SHA production verification before the next batch.
6. Continue reviewed growth to 100, then stop for the mandatory 100-platform full audit.
```
