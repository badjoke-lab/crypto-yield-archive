# CYA record growth execution roadmap

Status: Phase 8 — growth from 94 toward 100  
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

## Current promotion state

```text
Repository:                  badjoke-lab/crypto-yield-archive
Default branch:              main
Verified canonical 92 SHA:   d5610cf53d04b4d4a89419bca4dfab8bc51dc0ae
Candidate-only PR:           #161 merged
Candidate-only SHA:          a3248cf463bcd08de0efa68baae9742d8997763d
Batch 56 canonical targets:  cya_plat_000093 Bitso Earnings
                             cya_plat_000094 Luno Staking
Growth state after merge:    94 -> 100
Next audit milestone:        100
```

### Expected canonical scale after Batch 56 promotion

```text
Platforms:       94
Events:          332
Evidence:        567
Outcomes:         94
Products:        135
Terms risk:       94
```

No event ID is consumed in Batch 56 because the reviewed first-party sources do not establish one exact original Bitso Earnings or Luno Staking launch date. `cya_ev_000338` remains available for the next evidence-backed event.

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
Phase 8 / batches 45-55: 75 -> 92                   complete / latest 92 production verified
Phase 8 / batch 56 candidate gate                   complete
Phase 8 / batch 56 canonical promotion              current
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
Batch 56: Bitso Earnings + Luno Staking              92 -> 94 target
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs. `needs_research` candidates are not silently promoted.

## Batch 56 reviewed boundary

### Bitso Earnings

- candidate `cya_candidate_000091` passed hardened full-corpus scanning as draft-eligible with no unsafe canonical match;
- canonical ID is `cya_plat_000093`;
- current first-party material documents weekly Earnings, flexible balance availability, stablecoin yields and dynamic proof-of-stake asset yields;
- Bitso's current product education also documents specialized third-party yield providers and other product-specific yield methods, so CYA does not collapse every Earnings asset into one universal source, counterparty, custody or legal-title model;
- `launch_date` remains null and no launch event is created because an exact original umbrella launch date was not established;
- terms status remains `unclear` at medium confidence rather than extrapolating marketing ownership/flexibility language into universal legal-title, segregation or insolvency treatment.

### Luno Staking

- candidate `cya_candidate_000092` passed hardened full-corpus scanning as draft-eligible with no unsafe canonical match;
- canonical ID is `cya_plat_000094`;
- current first-party material documents active staking in Malaysia, Nigeria and South Africa, dedicated staking wallets, selected staking service providers and validator-node mechanics;
- current Luno Staking Terms state staked cryptoassets are not transferred to the third-party validator, Luno continues holding them on the user's behalf, and the user remains beneficial owner;
- terms also document warm-up periods, protocol rules, variable network/validator rewards and slashing risk that may affect rewards or principal;
- the June 2023 terms date is not treated as the service's original launch date, so `launch_date` remains null and no launch event is created;
- `customer_owned` is limited to express beneficial-ownership language at medium confidence and is not a universal conclusion about legal-title form, segregation, principal protection or insolvency treatment.

## Queue after Batch 56 canonical promotion

```text
Queue status:            growth_to_100
Canonical platforms:     94
Active staged candidates: none
Next candidate IDs:      cya_candidate_000093 / cya_candidate_000094
Next platform ID:        cya_plat_000095
Next event ID:           cya_ev_000338
Next audit milestone:    100 platforms
```

Long-lived `needs_research` candidates remain:

```text
- cya_candidate_000010 Goldfinch
- cya_candidate_000045 Cabital
- cya_candidate_000049 Outlet Finance
```

They remain blocked from silent promotion.

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
1. Complete and merge the reviewed Batch 56 Bitso/Luno canonical PR only after all repository, candidate, SEO, preview and representative-surface checks pass.
2. Freeze main on the resulting exact canonical SHA.
3. Require Cloudflare exact-SHA deployment, Production Surface Check and representative screenshots to pass.
4. Only after that verification, research and stage replacement candidates cya_candidate_000093 and cya_candidate_000094 from the verified 94-platform baseline.
5. Keep cya_ev_000338 unconsumed until a dated event is explicitly evidence-backed.
6. Continue reviewed growth to 100, then stop for the mandatory full-corpus audit.
```
