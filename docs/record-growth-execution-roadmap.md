# CYA record growth execution roadmap

Status: Phase 8 — 100-platform milestone / mandatory audit gate  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-11

## Purpose

This file is the authoritative recovery point for CYA record growth, candidate review, canonical promotion, production deployment, monitoring, and milestone audits.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates and generated drafts remain under `data-staging/` or workflow artifacts until reviewed.
- Candidate-only review and canonical promotion remain separate operations.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, fraud, or customer outcome from marketing or candidate metadata.
- Product, legal-entity, jurisdiction, terms-version, custody, identity, and customer-outcome boundaries require explicit review.
- Repository validation, Cloudflare deployment, and direct production observation are separate claims.
- At 100 platforms, record growth is locked until the mandatory full-corpus audit is completed and production-verified.

## Confirmed pre-promotion baseline

```text
Repository:                  badjoke-lab/crypto-yield-archive
Default branch:              main
Verified canonical 98 SHA:   ef6426842399071c82ce6bfc388347fec3296f66
Production Surface Check:    #190 success
Final candidate PR:          #167 merged
Final candidate-only SHA:    337a073e197e5b4d1b2ffd9f6364944059b5d71a
Batch 59 canonical targets:  cya_plat_000099 Bit2Me Earn
                             cya_plat_000100 Coinmerce Earn
Milestone after promotion:   100 platforms
```

### Expected canonical scale after Batch 59 promotion

```text
Platforms:       100
Events:          334
Evidence:        587
Outcomes:        100
Products:        141
Terms risk:      100
```

No Batch 59 event is created. The reviewed first-party sources do not establish one exact original launch date for the broad Bit2Me Earn or Coinmerce Earn products, so `cya_ev_000340` remains unconsumed.

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
Batch 59: Bit2Me Earn + Coinmerce Earn               98 -> 100 target
```

Every addition used a candidate-only gate followed by a separate canonical PR. Duplicate findings did not consume canonical IDs.

## Final candidate-gate corrections

The hardened full-corpus scanner rejected three attempted final-growth candidates as exact duplicates:

```text
cya_candidate_000097 Bitvavo Staking   exact_duplicate -> cya_plat_000085
cya_candidate_000098 Bitpanda Staking  exact_duplicate -> cya_plat_000083
cya_candidate_000100 KriptoEarn        exact_duplicate -> cya_plat_000054
```

All three remain in the duplicate-review ledger for possible evidence-backed enrichment of their existing canonical records. No new platform or event ID was consumed for them.

The corrected final scanner reported five active/retained candidates with two draft-eligible records and no unsafe add-now match. Those two records are Bit2Me Earn and Coinmerce Earn.

## Batch 59 reviewed boundary

### Bit2Me Earn — `cya_plat_000099`

- product-scoped centralized yield record;
- current dedicated Earn terms state users transfer and lock eligible cryptoassets in favor of Bit2Me for variable rewards;
- the reviewed terms permit Bit2Me to transfer, dispose of or use those assets during the Earn period;
- separate ETH 2.0 terms document staking within Bit2Me Earn, but that later rollout date is not substituted for the broad Earn launch date;
- terms classification is `platform_owned`, limited to assets subject to the reviewed Earn arrangement;
- ordinary Bit2Me wallet custody treatment is not generalized to Earn assets;
- no principal, reward, liquidity or insolvency guarantee is inferred.

### Coinmerce Earn — `cya_plat_000100`

- product-scoped centralized yield/lending record;
- current first-party terms define the client as lender and Coinmerce Earn B.V. as borrower of eligible assets dedicated to Earn;
- dedicated Earn assets leave the ordinary Foundation custody structure and may be used for on-lending or staking with third parties;
- terms classification is `platform_owned`, grounded in the explicit lender/borrower structure and movement of assets outside ordinary Foundation custody;
- ordinary Coinmerce custody segregation is not generalized to Earn assets;
- no principal, reward, counterparty or insolvency guarantee is inferred.

## Milestone lock after Batch 59

```text
Queue status:             audit_required
Canonical platforms:      100
Active staged candidates: none
Next candidate IDs:       none while audit lock is active
Next platform ID:         not allocated
Next event ID:            cya_ev_000340
Audit milestone:          100 platforms
```

Long-lived `needs_research` candidates remain Goldfinch, Cabital and Outlet Finance. They remain blocked from silent promotion while the milestone audit lock is active.

## 100-platform production sequencing rule

1. complete the final Batch 59 canonical PR and require repository, candidate, SEO, preview and representative-surface checks to pass;
2. merge only after all gates succeed;
3. freeze `main` on the exact resulting 100-platform SHA;
4. require Cloudflare exact-SHA deployment, `/version.json` consistency, Production Surface Check and production/representative screenshots to succeed;
5. keep record growth locked;
6. run the mandatory full-corpus audit across platforms, events, evidence, outcomes, products, terms-risk, cross-file references, machine-readable outputs, build surfaces and representative production pages;
7. fix any blocker through reviewed audit PRs and production-verify the audit release;
8. only an explicit successful audit state transition may release future growth; do not allocate or stage platform 101 before that.

## Immediate next action

```text
1. Run all canonical gates for Batch 59 Bit2Me Earn and Coinmerce Earn.
2. Merge only if every required workflow succeeds.
3. Freeze main on the exact 100-platform SHA and production-verify it.
4. Keep phase-8 entry queue at audit_required with no next platform ID allocated.
5. Run the mandatory full-corpus audit immediately after production verification.
6. Do not stage, assign or promote platform 101 before the audit is completed and production-verified.
```
