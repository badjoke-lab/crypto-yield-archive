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
- At 100 platforms, record growth stops until the mandatory full-corpus audit is completed and production-verified.

## Current confirmed baseline

```text
Repository:                  badjoke-lab/crypto-yield-archive
Default branch:              main
Canonical 94 SHA:            89db1785eefc5e486a8349a889edc5f52f0eaeaf
Latest canonical PR:         #162
Production Surface Check:    #188 success
Representative screenshots: success
Growth state:                94 -> 100
Next audit milestone:        100
```

### Canonical scale

```text
Platforms:       94
Events:          332
Evidence:        567
Outcomes:         94
Products:        135
Terms risk:       94
```

Batch 56 promoted Bitso Earnings and Luno Staking. Neither consumed an event ID because an exact original launch date was not asserted. The exact 94-platform SHA passed Cloudflare deployment, current production-surface verification and production desktop/mobile capture before Batch 57 work began.

## Recent growth

```text
Batch 53: eToro Staking + Robinhood Crypto Staking   88 -> 90
Batch 54: Bitstamp Earn Staking                      90 -> 91
          Crypto.com candidate duplicate             no new ID
Batch 55: Revolut Crypto Staking                     91 -> 92
          Gemini candidate duplicate                 no new ID
Batch 56: Bitso Earnings + Luno Staking              92 -> 94
Batch 57 candidate gate                              current
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs.

## Candidate queue and reserved identifiers

```text
Queue status:            growth_to_100
Canonical platforms:     94
Verified baseline SHA:   89db1785eefc5e486a8349a889edc5f52f0eaeaf
Staged candidates:       cya_candidate_000093 / cya_candidate_000094
Next candidate IDs:      cya_candidate_000095 / cya_candidate_000096
Next platform ID:        cya_plat_000095
Next event ID:           cya_ev_000338
Next audit milestone:    100 platforms
Latest completed batch:  56
```

Long-lived `needs_research` candidates remain:

```text
- cya_candidate_000010 Goldfinch
- cya_candidate_000045 Cabital
- cya_candidate_000049 Outlet Finance
```

They remain blocked from silent promotion.

## Batch 57 candidate-only gate

### `cya_candidate_000093` — Ndax Staking

- first-party Ndax material supports `2022-02-15` as the launch date of its first flexible crypto staking program, initially ETH/DOT/ADA;
- current Ndax material documents continued multi-asset staking, variable/non-guaranteed rewards, bonding/unbonding, standard/instant redemption, slashing/on-chain risks, administration fees and experienced third-party validators;
- product custody/security language must not be converted into universal legal-title, segregation, principal-protection or insolvency treatment.

Decision remains `add_now` only for candidate review. Hardened full-corpus scanning is authoritative for duplicate clearance.

### `cya_candidate_000094` — VALR Staking

- first-party VALR material supports `2023-06-27` as the official staking launch, initially SOL and AVAX;
- current VALR product and governing terms continue to document on-chain proof-of-stake staking and opt-in participation;
- contribution/staking mechanics alone do not resolve universal legal-title, segregation, principal-protection or insolvency treatment, so terms interpretation must remain conservative unless governing text explicitly resolves it.

Decision remains `add_now` only for candidate review. Hardened full-corpus scanning is authoritative for duplicate clearance.

## Production sequencing rule

For every canonical, audit, or state-transition release:

1. merge the reviewed PR;
2. freeze `main`;
3. wait for the Cloudflare Pages check for that exact SHA;
4. require `/version.json` build commit to match the same SHA;
5. require Production Surface Check and representative screenshots to succeed;
6. only then allow the next candidate/canonical merge based on that release.

## Immediate next action

```text
1. Run the Batch 57 candidate-only gate for Ndax Staking and VALR Staking against exact production-verified 94-platform SHA 89db1785eefc5e486a8349a889edc5f52f0eaeaf.
2. Require hardened duplicate scan, corpus audit, review-only draft generation and normal repository checks to pass.
3. Resolve any duplicate without consuming a canonical platform ID.
4. If candidate-only gates pass, merge without touching data/.
5. Open a separate canonical promotion PR beginning at cya_plat_000095 and dated events beginning at cya_ev_000338 where first-party launch dates remain supported.
6. After canonical merge, freeze main and exact-SHA production verify before Batch 58.
7. Continue to 100, then stop for the mandatory full-corpus audit.
```
