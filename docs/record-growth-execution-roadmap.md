# CYA record growth execution roadmap

Status: Phase 8 — growth from 96 toward 100  
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
Canonical 96 SHA:            b7a8c41b1d4637ea27a528adf1f5c152f2af5bfd
Latest canonical PR:         #164
Production Surface Check:    #189 success
Growth state:                96 -> 100
Next audit milestone:        100
```

### Canonical scale

```text
Platforms:       96
Events:          334
Evidence:        575
Outcomes:         96
Products:        137
Terms risk:       96
```

Batch 57 promoted Ndax Staking and VALR Staking. The exact 96-platform SHA passed the production gate: Cloudflare wait, current production surface, and production desktop/mobile capture all succeeded before Batch 58 staging.

## Recent growth

```text
Batch 53: eToro Staking + Robinhood Crypto Staking   88 -> 90
Batch 54: Bitstamp Earn Staking                      90 -> 91
          Crypto.com candidate duplicate             no new ID
Batch 55: Revolut Crypto Staking                     91 -> 92
          Gemini candidate duplicate                 no new ID
Batch 56: Bitso Earnings + Luno Staking              92 -> 94
Batch 57: Ndax Staking + VALR Staking                94 -> 96
Batch 58 candidate gate                              current
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs.

## Candidate queue

```text
Queue status:            growth_to_100
Canonical platforms:     96
Verified baseline SHA:   b7a8c41b1d4637ea27a528adf1f5c152f2af5bfd
Staged candidates:       cya_candidate_000095 / cya_candidate_000096
Next candidate IDs:      cya_candidate_000097 / cya_candidate_000098
Next platform ID:        cya_plat_000097
Next event ID:           cya_ev_000340
Next audit milestone:    100 platforms
Latest completed batch:  57
```

Long-lived `needs_research` candidates remain Goldfinch, Cabital and Outlet Finance and are blocked from silent promotion.

## Batch 58 candidate-only gate

### `cya_candidate_000095` — Newton Earn (Staking)

- current Newton first-party material documents active Earn/Staking, approved validators, custodian-controlled dedicated wallets, protocol-derived rewards, fees, bonding/unbonding and slashing risk;
- current Terms state account Digital Assets are fully-paid assets beneficially owned by customers, not Newton, and held in trust;
- staked assets remain in Newton omnibus accounts with the custodian, remain attributed to the user's account, and custody/possession/control is not transferred to validators;
- reviewed sources do not establish one exact original launch date, so no launch date may be invented.

### `cya_candidate_000096` — Wealthsimple Crypto Staking

- current Wealthsimple first-party material documents SOL/ETH/ADA/DOT staking through approved third-party validators from custodial wallets;
- current Crypto Product Risk Disclosure states customer cryptoassets are fully-paid assets beneficially owned by customers, held in trust and segregated from Wealthsimple's own assets;
- rewards are variable/non-guaranteed, fees apply, warm-up/cool-down periods exist and slashing risk remains;
- reviewed sources do not establish one exact original launch date, so no launch date may be invented.

Both remain candidate-only until hardened full-corpus scanning and review-only draft generation pass.

## Production sequencing rule

1. merge the reviewed PR;
2. freeze `main`;
3. wait for the Cloudflare Pages check for that exact SHA;
4. require `/version.json` build commit to match the same SHA;
5. require Production Surface Check and representative screenshots to succeed;
6. only then allow the next candidate/canonical merge based on that release.

## Immediate next action

```text
1. Run Batch 58 candidate-only gates for Newton and Wealthsimple against exact production-verified 96-platform SHA b7a8c41b1d4637ea27a528adf1f5c152f2af5bfd.
2. Resolve any duplicate without consuming a canonical ID.
3. If corrected gates pass, merge candidate-only without touching data/.
4. Open a separate canonical promotion PR beginning at cya_plat_000097; keep cya_ev_000340 unconsumed unless a dated event is explicitly evidence-backed.
5. Exact-SHA production verify the resulting release before the final growth batch.
6. Reach 100, then stop for the mandatory full-corpus audit before any platform 101 work.
```
