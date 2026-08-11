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
Final candidate PR:          #167 open / draft
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

## Batch 59 hardened-scan corrections

Three attempted final-growth candidates were rejected by the full-corpus scanner and consume no canonical IDs:

```text
cya_candidate_000097 Bitvavo Staking   exact_duplicate -> cya_plat_000085
cya_candidate_000098 Bitpanda Staking  exact_duplicate -> cya_plat_000083
cya_candidate_000100 KriptoEarn        exact_duplicate -> cya_plat_000054
```

All three are preserved in the Batch 59 duplicate-review ledger. Their reviewed first-party material may support later enrichment of the existing canonical records.

Bit2Me Earn (`cya_candidate_000099`) passed the corrected 98-platform scanner as draft-eligible and remains active.

## Corrected final candidate queue

```text
Queue status:             growth_to_100
Canonical platforms:      98
Verified baseline SHA:    ef6426842399071c82ce6bfc388347fec3296f66
Staged candidates:        cya_candidate_000099 / cya_candidate_000101
Resolved duplicates:      cya_candidate_000097 / cya_candidate_000098 / cya_candidate_000100
Next candidate IDs:       cya_candidate_000102 / cya_candidate_000103
Next platform ID:         cya_plat_000099
Next event ID:            cya_ev_000340
Next audit milestone:     100 platforms
```

Long-lived `needs_research` candidates remain Goldfinch, Cabital and Outlet Finance and are blocked from silent promotion.

## Active final candidate boundary

### `cya_candidate_000099` — Bit2Me Earn

- current dedicated Bit2Me Earn terms describe users transferring and locking eligible cryptoassets in favor of Bit2Me to receive variable rewards;
- the Earn terms permit Bit2Me to transfer, dispose of or use transferred/locked assets during the Earn period and document withdrawal, suspension and service-specific risks;
- separate ETH 2.0 terms document proof-of-stake staking within Bit2Me Earn, but the 2023 ETH rollout date must not be substituted for the broad Earn product launch date;
- ownership/custody treatment must follow the Earn-specific transfer/use terms rather than ordinary wallet custody language;
- the corrected hardened scan classified Bit2Me Earn as draft-eligible;
- reviewed sources do not establish one exact original launch date for the broad Earn product.

### `cya_candidate_000101` — Coinmerce Earn

- Coinmerce currently offers the Earn Program through a Yield Account in cooperation with Coinmerce Earn B.V.;
- current first-party terms define the client as lender and Coinmerce Earn as borrower of eligible cryptoassets dedicated to Earn;
- Earn assets are transferred out of Foundation custody to Coinmerce Earn, which may use them for on-lending and staking with third parties to generate yield;
- current terms distinguish Yield Account assets dedicated to Earn from ordinary Foundation-held custody assets and document weekly rewards and Yield Account risks;
- ordinary Coinmerce custody segregation must not be generalized to assets lent into Earn;
- reviewed sources establish current operation but do not establish one exact original Earn launch date.

Coinmerce remains candidate-only until the rerun hardened full-corpus scanner and review-only draft generation pass.

## Production sequencing rule

1. merge the reviewed candidate-only PR only after the corrected scanner and all candidate checks succeed;
2. open a separate canonical PR only for scanner-cleared candidates;
3. promote only enough records to reach exactly 100 platforms;
4. merge only after repository, candidate, SEO, preview and representative-surface checks succeed;
5. freeze `main` on the resulting 100-platform SHA;
6. require Cloudflare exact-SHA deployment, `/version.json` consistency, Production Surface Check and production/representative screenshots to succeed;
7. immediately stop record growth and begin the mandatory full-corpus audit;
8. do not create or stage platform 101 before the audit is completed and production-verified.

## Immediate next action

```text
1. Rerun Batch 59 candidate-only gates for scanner-cleared Bit2Me Earn and replacement Coinmerce Earn against exact production-verified 98-platform SHA ef6426842399071c82ce6bfc388347fec3296f66.
2. Resolve any further duplicate without consuming a canonical ID and replace it inside the same candidate-only gate.
3. Merge candidate-only only when the corrected scanner and all workflows pass.
4. Open the final canonical promotion PR beginning at cya_plat_000099 and promote only enough reviewed records to reach exactly 100.
5. Use cya_ev_000340 only for an explicitly evidence-backed dated event; otherwise leave event IDs unconsumed.
6. Production-verify the exact 100-platform SHA.
7. Stop growth and execute the mandatory full-corpus audit before any platform 101 work.
```
