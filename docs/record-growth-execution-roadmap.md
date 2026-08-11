# CYA record growth execution roadmap

Status: Phase 8 — final growth gate from 98 to 100  
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
Canonical 98 SHA:            ef6426842399071c82ce6bfc388347fec3296f66
Latest canonical PR:         #166
Production Surface Check:    #190 success
Growth state:                98 -> 100 final gate
Next audit milestone:        100
```

### Canonical scale

```text
Platforms:       98
Events:          334
Evidence:        581
Outcomes:         98
Products:        139
Terms risk:       98
```

Batch 58 promoted Newton Earn (Staking) and Wealthsimple Crypto Staking. The exact 98-platform SHA passed Cloudflare deployment wait, current production surface verification, and production desktop/mobile capture before Batch 59 staging.

## Recent growth

```text
Batch 53: eToro Staking + Robinhood Crypto Staking   88 -> 90
Batch 54: Bitstamp Earn Staking                      90 -> 91
          Crypto.com candidate duplicate             no new ID
Batch 55: Revolut Crypto Staking                     91 -> 92
          Gemini candidate duplicate                 no new ID
Batch 56: Bitso Earnings + Luno Staking              92 -> 94
Batch 57: Ndax Staking + VALR Staking                94 -> 96
Batch 58: Newton Earn + Wealthsimple Crypto Staking  96 -> 98
Batch 59 candidate gate                              current / final growth gate
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs.

## Final candidate queue

```text
Queue status:            growth_to_100
Canonical platforms:     98
Verified baseline SHA:   ef6426842399071c82ce6bfc388347fec3296f66
Staged candidates:       cya_candidate_000097 / cya_candidate_000098
Next candidate IDs:      cya_candidate_000099 / cya_candidate_000100
Next platform ID:        cya_plat_000099
Next event ID:           cya_ev_000340
Next audit milestone:    100 platforms
```

Long-lived `needs_research` candidates remain Goldfinch, Cabital and Outlet Finance and are blocked from silent promotion.

## Batch 59 candidate-only gate

### `cya_candidate_000097` — Bitvavo Staking

- current first-party terms document opt-in proof-of-stake activity through Bitvavo as validator or delegator on the user's behalf;
- current terms state staking assets continue to be held by the Foundation and separately document the Foundation/custody structure for user assets;
- rewards are variable and protocol/service dependent; Fixed Staking can impose lock-up/unstaking constraints; slashing or protocol malfunction can cause partial or total loss;
- if both staking and lending are enabled for an eligible asset, Bitvavo may choose which service applies, so staking and lending treatment must not be conflated;
- reviewed sources do not establish one exact original staking launch date, so no launch date may be invented.

### `cya_candidate_000098` — Bitpanda Staking

- first-party launch material supports 2022-05-10 as the date Bitpanda announced Staking was available;
- current first-party product material documents proof-of-stake participation, weekly rewards, automatic restaking and protocol-dependent unstaking mechanics;
- current material explicitly distinguishes Staking from Earn on Stablecoins; the latter is a separate lending product with separate ownership/counterparty treatment;
- current staking material documents slashing, hack and market-value risks and does not support guaranteed rewards;
- ownership, segregation and insolvency treatment must remain conservative unless governing terms explicitly support a stronger classification.

Both remain candidate-only until hardened full-corpus scanning and review-only draft generation pass.

## Production sequencing rule

1. merge the reviewed candidate-only PR;
2. open a separate canonical PR only for scanner-cleared candidates;
3. merge only after repository, candidate, SEO, preview and representative-surface checks succeed;
4. freeze `main` on the resulting 100-platform SHA;
5. require Cloudflare exact-SHA deployment, `/version.json` consistency, Production Surface Check and production/representative screenshots to succeed;
6. immediately stop record growth and begin the mandatory full-corpus audit;
7. do not create or stage platform 101 before the audit is completed and production-verified.

## Immediate next action

```text
1. Run Batch 59 candidate-only gates for Bitvavo Staking and Bitpanda Staking against exact production-verified 98-platform SHA ef6426842399071c82ce6bfc388347fec3296f66.
2. Resolve any duplicate without consuming a canonical ID.
3. If both corrected gates pass, merge candidate-only without touching data/.
4. Open the final Phase 8 canonical promotion PR beginning at cya_plat_000099 and promote only enough reviewed records to reach exactly 100.
5. Use cya_ev_000340 only for an explicitly evidence-backed dated event; otherwise leave event IDs unconsumed.
6. Production-verify the exact 100-platform SHA.
7. Stop growth and execute the mandatory full-corpus audit before any platform 101 work.
```
