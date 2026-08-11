# CYA record growth execution roadmap

Status: Phase 8 — growth from 92 toward 100  
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
Canonical 92 SHA:            d5610cf53d04b4d4a89419bca4dfab8bc51dc0ae
Latest canonical PR:         #160
Production Surface Check:    #187 success
Growth state:                92 -> 100
Next audit milestone:        100
```

### Canonical scale

```text
Platforms:       92
Events:          332
Evidence:        558
Outcomes:         92
Products:        132
Terms risk:       92
```

Batch 55 promoted Revolut Crypto Staking as `cya_plat_000092` without inventing a launch date or consuming event ID `cya_ev_000338`. Candidate scanning resolved Gemini Staking as an exact duplicate of canonical `cya_plat_000014`. The exact 92-platform SHA passed Cloudflare deployment, current production-surface verification and production desktop/mobile capture before Batch 56 work began.

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
Phase 8 / batch 55: 91 -> 92                        complete / production verified
Phase 8 / batch 56 candidate gate                   current
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
Batch 55: Revolut Crypto Staking                     91 -> 92
          Gemini candidate duplicate                 no new ID
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs. `needs_research` candidates are not silently promoted.

## Candidate queue and reserved identifiers

```text
Queue status:            growth_to_100
Canonical platforms:     92
Verified baseline SHA:   d5610cf53d04b4d4a89419bca4dfab8bc51dc0ae
Staged candidates:       cya_candidate_000091 / cya_candidate_000092
Next candidate IDs:      cya_candidate_000093 / cya_candidate_000094
Next platform ID:        cya_plat_000093
Next event ID:           cya_ev_000338
Next audit milestone:    100 platforms
Latest completed batch:  55
```

Long-lived `needs_research` candidates remain:

```text
- cya_candidate_000010 Goldfinch
- cya_candidate_000045 Cabital
- cya_candidate_000049 Outlet Finance
```

They remain blocked from silent promotion.

## Batch 56 candidate-only gate

### `cya_candidate_000091` — Bitso Earnings

Research basis:

- current Bitso first-party material documents an active umbrella Earnings product with weekly yield on eligible cryptoassets and balances remaining available for withdrawal or transactions;
- current product/help material covers stablecoin yields and dynamic proof-of-stake asset yields;
- Bitso's current staking explainer states Bitso handles staking and pays weekly yield without a fixed lock-up for supported assets;
- current product education also documents other yield methods, including Aave-related yield and specialized third-party yield providers;
- product-specific yield source, counterparty, legal-title and custody boundaries therefore must remain explicit rather than being collapsed into one universal model;
- reviewed first-party sources do not establish one exact original umbrella launch date, so no launch date may be invented.

Decision remains `add_now` only for candidate review. Hardened full-corpus scanning is authoritative for duplicate clearance.

### `cya_candidate_000092` — Luno Staking

Research basis:

- current Luno first-party material documents active staking in Malaysia, Nigeria and South Africa with region-specific supported assets;
- current product material states staked crypto stays in Luno custody;
- help material documents a selected staking service provider and validator-node blockchain addresses used for staking;
- current guidance documents variable staking rewards and token/network-specific activation or unstaking mechanics;
- Luno Staking Terms are current and have existed since at least June 2023, but that terms date is not treated as proof of the service's original launch date;
- custody language must not be converted into a principal, legal-title, segregation or insolvency guarantee.

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
1. Run the Batch 56 candidate-only gate for Bitso Earnings and Luno Staking against exact production-verified 92-platform SHA d5610cf53d04b4d4a89419bca4dfab8bc51dc0ae.
2. Require hardened duplicate scan, corpus audit, review-only draft generation and normal repository checks to pass.
3. Resolve any duplicate without consuming a canonical platform ID.
4. Merge the candidate-only PR without touching data/ if corrected gates pass.
5. Open a separate canonical promotion PR beginning at cya_plat_000093; consume cya_ev_000338 only if a dated event is explicitly evidence-backed.
6. After canonical merge, freeze main and exact-SHA production verify before Batch 57.
7. Continue reviewed growth to 100, then stop for the mandatory full-corpus audit.
```
