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

## Current promotion state

```text
Repository:                 badjoke-lab/crypto-yield-archive
Default branch:             main
Verified canonical 90 SHA:  907689cd598f1fff9a04dbfc02e7ad7314b55244
Candidate-only PR:          #157 merged
Candidate-only SHA:         c57d15f91464f1113e3421fd3abeb0f2a2a47765
Batch 54 canonical target:  cya_plat_000091 Bitstamp Earn Staking
Growth state after merge:   91 -> 100
Next audit milestone:       100
```

### Expected canonical scale after Batch 54 promotion

```text
Platforms:       91
Events:          332
Evidence:        553
Outcomes:         91
Products:        131
Terms risk:       91
Generated pages: 105 expected from one new platform dossier
```

Exact built-page count and corpus blockers remain subject to PR validation and the final exact-SHA production gate.

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
Phase 8 / batches 45-53: 75 -> 90                   complete / latest 90 production verified
Phase 8 / batch 54 candidate gate                   complete
Phase 8 / batch 54 canonical promotion              current
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
Batch 54: Bitstamp Earn Staking                      90 -> 91 target
          Crypto.com candidate duplicate             no new ID
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs.

## Batch 54 reviewed boundary

### Bitstamp Earn Staking

- candidate `cya_candidate_000087` passed the hardened scanner as a new, draft-eligible identity against the 90-platform canonical corpus;
- canonical ID is `cya_plat_000091`;
- reviewed full public ETH-staking launch date is `2021-07-13`, following a documented April 2021 gradual early-access rollout;
- current first-party material documents continuing Bitstamp Earn staking, underlying protocol rewards, a 15% service commission, network-specific staking risks and jurisdiction-specific availability;
- current first-party educational material states that customers maintain full ownership of crypto assets when staking with Bitstamp Earn;
- CYA records that product statement without inferring universal legal segregation, principal protection or insolvency treatment across every Bitstamp legal entity or jurisdiction;
- the 2025 ALGO-staking wind-down is product-specific and does not establish an Earn-wide shutdown.

### Crypto.com duplicate resolution

`cya_candidate_000088` was classified by the hardened scanner as an exact duplicate of canonical `cya_plat_000019`. It consumes no canonical ID and remains archived in `data-staging/candidates/cya-consumed-duplicate-review-batch-54.json`. Its newly reviewed current staking sources may support later enrichment of the existing canonical record only.

## Queue after Batch 54 canonical promotion

```text
Queue status:            growth_to_100
Canonical platforms:     91
Active staged candidates: none
Resolved duplicate:      cya_candidate_000088 -> cya_plat_000019
Next candidate IDs:      cya_candidate_000089 / cya_candidate_000090
Next platform ID:        cya_plat_000092
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
6. only then allow the next canonical/candidate merge based on that release.

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
1. Complete and merge the reviewed Batch 54 Bitstamp canonical PR only after all repository, candidate, SEO and preview checks pass.
2. Freeze main on the resulting exact canonical SHA.
3. Require Cloudflare exact-SHA deployment, Production Surface Check and representative screenshots to pass.
4. Only after that verification, research and stage replacement candidates cya_candidate_000089 and cya_candidate_000090 from the verified 91-platform baseline.
5. Continue reviewed growth to 100, then stop for the mandatory full-corpus audit.
```
