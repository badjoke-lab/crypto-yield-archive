# CYA record growth execution roadmap

Status: Phase 8 — growth from 91 toward 100  
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
Repository:                  badjoke-lab/crypto-yield-archive
Default branch:              main
Canonical 91 SHA:            ad9dca89048b89f5d57825130ff74184a67f4f65
Latest canonical PR:         #158
Production Surface Check:    #186 success
Representative screenshots: #73 success
Growth state:                91 -> 100
Next audit milestone:        100
```

### Canonical scale

```text
Platforms:       91
Events:          332
Evidence:        553
Outcomes:         91
Products:        131
Terms risk:       91
```

Batch 54 promoted Bitstamp Earn Staking as `cya_plat_000091`. Candidate-only scanning also resolved Crypto.com On-Chain Staking as an exact duplicate of canonical `cya_plat_000019`, so no second Crypto.com platform identity or platform ID was created. The exact 91-platform main SHA passed Cloudflare deployment, current production-surface verification and desktop/mobile production capture before Batch 55 work began.

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
Phase 8 / batches 45-53: 75 -> 90                   complete
Phase 8 / batch 54: 90 -> 91                        complete / production verified
Phase 8 / batch 55 candidate gate                   current
Phase 8: 100-platform full audit                    future mandatory gate
```

## Phase 8 recent growth summary

```text
Batch 45: Flipster Earn + Bitrue Power Piggy         75 -> 77
Batch 46: BloFin Earn + LBank Earn                   77 -> 79
Batch 47: Toobit Earn + Bitunix Easy Earn            79 -> 81
Batch 48: AscendEX Earn                              81 -> 82
          BitMart candidate duplicate                no new ID
Batch 49: Bitpanda Earn + CEX.IO Earn                82 -> 84
Batch 50: SwissBorg + Wirex candidate duplicates     no new IDs
Batch 51: Bitvavo Earn + Coinmetro BTC Earn          84 -> 86
Batch 52: Uphold Staking + HashKey ETH Staking       86 -> 88
Batch 53: eToro Staking + Robinhood Crypto Staking   88 -> 90
Batch 54: Bitstamp Earn Staking                      90 -> 91
          Crypto.com candidate duplicate             no new ID
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs. `needs_research` candidates are not silently promoted.

## Candidate queue and reserved identifiers

```text
Queue status:            growth_to_100
Canonical platforms:     91
Verified baseline SHA:   ad9dca89048b89f5d57825130ff74184a67f4f65
Staged candidates:       cya_candidate_000089 / cya_candidate_000090
Next candidate IDs:      cya_candidate_000091 / cya_candidate_000092
Next platform ID:        cya_plat_000092
Next event ID:           cya_ev_000338
Next audit milestone:    100 platforms
Latest completed batch:  54
```

Long-lived `needs_research` candidates remain:

```text
- cya_candidate_000010 Goldfinch
- cya_candidate_000045 Cabital
- cya_candidate_000049 Outlet Finance
```

They remain blocked from silent promotion.

## Batch 55 candidate-only gate

### `cya_candidate_000089` — Gemini Staking

Research basis:

- Gemini first-party launch material supports `2022-08-18` as the launch of Gemini Staking, initially with Polygon (MATIC);
- current 2026 Gemini Staking terms define conventional staking through Gemini or third-party staking service providers and state that protocol rules determine reward timing and amount;
- current terms document service fees, slashing, activation queues, unbonding periods, jurisdiction restrictions, non-guaranteed rewards and absence of FDIC/SIPC or similar protections for staked assets;
- the current agreement explicitly distinguishes conventional Gemini Staking from the separate Asset Rewards program, so those products must not be collapsed into one mechanism or identity.

Decision remains `add_now` only for candidate review. Hardened full-corpus scanning is authoritative for duplicate clearance.

### `cya_candidate_000090` — Revolut Crypto Staking

Research basis:

- current Revolut first-party material documents a live in-app staking service for proof-of-stake assets;
- current product material states Revolut continues holding staked cryptoassets on the user's behalf and that the user remains beneficial owner;
- current material documents token-specific lock-up or unbonding periods, validator performance, slashing, market risk and non-guaranteed rewards;
- fee and product treatment vary by jurisdiction, so no universal Revolut fee model may be asserted;
- the reviewed first-party sources do not establish one exact original launch date, so no launch date may be invented during candidate or canonical review.

Decision remains `add_now` only for candidate review. Hardened full-corpus scanning is authoritative for duplicate clearance.

## Production sequencing rule

For every canonical, audit, or state-transition release:

1. merge the reviewed PR;
2. freeze `main`;
3. wait for the Cloudflare Pages check for that exact SHA;
4. require `/version.json` build commit to match the same SHA;
5. require Production Surface Check and representative screenshots to succeed;
6. only then allow the next candidate/canonical merge based on that release.

## Recovery procedure

```text
1. Read this file and docs/development-policy.md.
2. Fetch current main and recent/open PRs.
3. Check the latest exact-SHA Cloudflare deployment, Production Surface Check and representative screenshots.
4. Confirm active and consumed candidate ledgers.
5. Recalculate canonical counts and maximum IDs.
6. Respect candidate-only -> canonical PR separation.
7. Do not silently promote monitoring findings or needs_research candidates.
8. Stop at 100 for the mandatory full-corpus audit before platform 101.
```

## Immediate next action

```text
1. Run the Batch 55 candidate-only gate for Gemini Staking and Revolut Crypto Staking against exact production-verified 91-platform SHA ad9dca89048b89f5d57825130ff74184a67f4f65.
2. Require hardened duplicate scan, corpus audit, review-only draft generation and normal repository checks to pass.
3. Resolve any duplicate without consuming a canonical platform ID.
4. If candidates are promotion-ready, merge the candidate-only PR without touching data/.
5. Open a separate canonical promotion PR beginning at cya_plat_000092 and cya_ev_000338 as applicable.
6. After canonical merge, freeze main and exact-SHA production verify before Batch 56.
7. Continue reviewed growth to 100, then stop for the mandatory 100-platform full audit.
```
