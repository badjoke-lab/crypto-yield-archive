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

## Current promotion state

```text
Repository:                  badjoke-lab/crypto-yield-archive
Default branch:              main
Verified canonical 91 SHA:   ad9dca89048b89f5d57825130ff74184a67f4f65
Candidate-only PR:           #159 merged
Candidate-only SHA:          22004c36883f2072a63eb1650c9f25f5d02fe832
Batch 55 canonical target:   cya_plat_000092 Revolut Crypto Staking
Growth state after merge:    92 -> 100
Next audit milestone:        100
```

### Expected canonical scale after Batch 55 promotion

```text
Platforms:       92
Events:          332
Evidence:        558
Outcomes:         92
Products:        132
Terms risk:       92
```

No event ID is consumed in Batch 55 because the reviewed first-party sources do not establish one exact original Revolut staking launch date or other dated canonical event. `cya_ev_000338` remains available for the next evidence-backed event.

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
Phase 8 / batch 55 candidate gate                   complete
Phase 8 / batch 55 canonical promotion              current
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
Batch 55: Revolut Crypto Staking                     91 -> 92 target
          Gemini candidate duplicate                 no new ID
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs. `needs_research` candidates are not silently promoted.

## Batch 55 reviewed boundary

### Revolut Crypto Staking

- candidate `cya_candidate_000090` remained the sole draft-eligible new identity after full 91-platform hardened scanning;
- canonical ID is `cya_plat_000092`;
- current first-party product, legal and help material documents active in-app proof-of-stake staking, protocol/validator reward mechanics, token-specific warm-up and lock-up/unbonding periods, slashing risk and non-guaranteed rewards;
- current reviewed Revolut terms state that Revolut continues holding staked cryptoassets on the user's behalf and that the user remains beneficial owner;
- fee schedules and some product/legal-entity treatment vary by jurisdiction, so no universal fee or legal-title model is asserted;
- `launch_date` remains null and no launch event is created because an exact first-party original-launch date was not established;
- `customer_owned` terms status is limited to express beneficial-ownership language and retained at medium confidence; it does not establish universal legal title, segregation, principal protection or insolvency treatment.

### Gemini duplicate resolution

`cya_candidate_000089` was classified by the hardened scanner as an exact duplicate of canonical `cya_plat_000014`. It consumes no canonical ID and remains archived in `data-staging/candidates/cya-consumed-duplicate-review-batch-55.json`. Newly reviewed launch/current terms may support later enrichment of the existing Gemini record only.

## Queue after Batch 55 canonical promotion

```text
Queue status:            growth_to_100
Canonical platforms:     92
Active staged candidates: none
Resolved duplicate:      cya_candidate_000089 -> cya_plat_000014
Next candidate IDs:      cya_candidate_000091 / cya_candidate_000092
Next platform ID:        cya_plat_000093
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
1. Complete and merge the reviewed Batch 55 Revolut canonical PR only after all repository, candidate, SEO, preview and representative-surface checks pass.
2. Freeze main on the resulting exact canonical SHA.
3. Require Cloudflare exact-SHA deployment, Production Surface Check and representative screenshots to pass.
4. Only after that verification, research and stage replacement candidates cya_candidate_000091 and cya_candidate_000092 from the verified 92-platform baseline.
5. Keep cya_ev_000338 unconsumed until a dated event is explicitly evidence-backed.
6. Continue reviewed growth to 100, then stop for the mandatory full-corpus audit.
```
