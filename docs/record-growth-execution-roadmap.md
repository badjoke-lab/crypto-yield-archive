# CYA record growth execution roadmap

Status: Phase 8 — growth from 98 toward 100  
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

## Current promotion state

```text
Repository:                  badjoke-lab/crypto-yield-archive
Default branch:              main
Verified canonical 96 SHA:   b7a8c41b1d4637ea27a528adf1f5c152f2af5bfd
Batch 58 candidate PR:       #165 merged
Candidate-only SHA:          3f12097cd1c316c813b85b111cac2d4c5767a7c9
Batch 58 canonical targets:  cya_plat_000097 Newton Earn (Staking)
                             cya_plat_000098 Wealthsimple Crypto Staking
Growth state after merge:    98 -> 100
Next audit milestone:        100
```

### Expected canonical scale after Batch 58 promotion

```text
Platforms:       98
Events:          334
Evidence:        581
Outcomes:         98
Products:        139
Terms risk:       98
```

Both Batch 58 candidates passed the hardened 96-platform scanner as draft-eligible with no unsafe canonical match. The reviewed first-party sources do not establish one exact original staking launch date for either product, so Batch 58 intentionally consumes no event ID and leaves `cya_ev_000340` available for a future evidence-backed dated event.

## Recent growth

```text
Batch 53: eToro Staking + Robinhood Crypto Staking   88 -> 90
Batch 54: Bitstamp Earn Staking                      90 -> 91
          Crypto.com candidate duplicate             no new ID
Batch 55: Revolut Crypto Staking                     91 -> 92
          Gemini candidate duplicate                 no new ID
Batch 56: Bitso Earnings + Luno Staking              92 -> 94
Batch 57: Ndax Staking + VALR Staking                94 -> 96
Batch 58: Newton Earn + Wealthsimple Crypto Staking  96 -> 98 target
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs.

## Batch 58 reviewed boundary

### Newton Earn (Staking)

- `cya_candidate_000095` passed hardened full-corpus scanning as draft-eligible;
- canonical target is `cya_plat_000097`; no launch event is created because the reviewed first-party sources do not establish one exact original staking launch date;
- current Newton first-party material documents approved validators, custodian-controlled staking arrangements, protocol-derived rewards, fees, bonding/unbonding and slashing risk;
- current Terms state account Digital Assets are fully-paid assets beneficially owned by customers, not Newton, and held in trust;
- current staking terms state staked assets remain attributed to the user's account and custody, possession and control are not transferred to validators;
- `customer_owned` is grounded only in those express current ownership/trust/custody terms and does not establish guaranteed rewards, principal protection or elimination of staking-specific or insolvency-related risk.

### Wealthsimple Crypto Staking

- `cya_candidate_000096` passed hardened full-corpus scanning as draft-eligible;
- canonical target is `cya_plat_000098`; no launch event is created because the reviewed first-party sources do not establish one exact original staking launch date;
- current Wealthsimple first-party material documents supported proof-of-stake assets, approved third-party validators, custodial wallets, variable/non-guaranteed rewards, fees, warm-up/cool-down periods and slashing risk;
- current Crypto Product Risk Disclosure states customer cryptoassets are fully-paid assets beneficially owned by customers, held in trust and separated from Wealthsimple's own assets;
- `customer_owned` is grounded in that express current beneficial-ownership/trust/separation language and does not imply guaranteed rewards, principal protection, immediate liquidity or elimination of protocol, validator, market, operational, regulatory or insolvency-related risk.

## Queue after Batch 58 canonical promotion

```text
Queue status:             growth_to_100
Canonical platforms:      98
Active staged candidates: none
Next candidate IDs:       cya_candidate_000097 / cya_candidate_000098
Next platform ID:         cya_plat_000099
Next event ID:            cya_ev_000340
Next audit milestone:     100 platforms
```

Long-lived `needs_research` candidates remain Goldfinch, Cabital and Outlet Finance and are blocked from silent promotion.

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
1. Complete the Batch 58 Newton/Wealthsimple canonical PR and require all repository, candidate, SEO, preview and representative-surface checks to pass.
2. Merge only after those gates succeed.
3. Freeze main on the resulting exact 98-platform SHA and require Cloudflare exact-SHA deployment, Production Surface Check and production/representative screenshots to pass.
4. Only after that verification, stage final-growth candidates cya_candidate_000097 and cya_candidate_000098 from the verified 98-platform baseline.
5. Promote only enough reviewed records to reach exactly 100 platforms.
6. At 100, stop record growth and run the mandatory full-corpus audit before any platform 101 work.
```
