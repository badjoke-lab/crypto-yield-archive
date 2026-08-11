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

## Current promotion state

```text
Repository:                  badjoke-lab/crypto-yield-archive
Default branch:              main
Verified canonical 94 SHA:   89db1785eefc5e486a8349a889edc5f52f0eaeaf
Candidate-only PR:           #163 merged
Candidate-only SHA:          c5a2ad22262712ef4f747bb166b4e91b1e55e750
Batch 57 canonical targets:  cya_plat_000095 Ndax Staking
                             cya_plat_000096 VALR Staking
Growth state after merge:    96 -> 100
Next audit milestone:        100
```

### Expected canonical scale after Batch 57 promotion

```text
Platforms:       96
Events:          334
Evidence:        575
Outcomes:         96
Products:        137
Terms risk:       96
```

Both Batch 57 candidates passed the hardened 94-platform scanner as draft-eligible with no unsafe canonical match. Ndax has a first-party launch date of 2022-02-15 and VALR a first-party launch date of 2023-06-27, so `cya_ev_000338` and `cya_ev_000339` are consumed as reviewed launch events.

## Recent growth

```text
Batch 53: eToro Staking + Robinhood Crypto Staking   88 -> 90
Batch 54: Bitstamp Earn Staking                      90 -> 91
          Crypto.com candidate duplicate             no new ID
Batch 55: Revolut Crypto Staking                     91 -> 92
          Gemini candidate duplicate                 no new ID
Batch 56: Bitso Earnings + Luno Staking              92 -> 94
Batch 57: Ndax Staking + VALR Staking                94 -> 96 target
```

Every addition uses a candidate-only gate followed by a separate canonical PR. Duplicate findings do not consume canonical IDs.

## Batch 57 reviewed boundary

### Ndax Staking

- `cya_candidate_000093` passed hardened full-corpus scanning as draft-eligible;
- canonical target is `cya_plat_000095` with launch event `cya_ev_000338` dated `2022-02-15`;
- current Ndax material documents opt-in staking, third-party validators, non-guaranteed rewards, bonding/unbonding, redemption choices, slashing/on-chain risk and administration fees;
- current User Agreement states users receive full rights, interests and title to Virtual Assets purchased on the platform and describes custody arrangements for on-platform assets;
- `customer_owned` is grounded in those express current title/custody terms and does not eliminate staking-specific protocol, validator, platform or insolvency risk.

### VALR Staking

- `cya_candidate_000094` passed hardened full-corpus scanning as draft-eligible;
- canonical target is `cya_plat_000096` with launch event `cya_ev_000339` dated `2023-06-27`;
- current VALR Terms explicitly state that rights, title and ownership of Staked Assets remain with the eligible account holder, that the assets are held for the account holder and are not VALR property or subject to VALR creditor claims;
- current terms also document protocol-derived rewards, commissions, unstaking periods, non-guaranteed rewards and slashing risk;
- `customer_owned` is therefore directly grounded in staking-specific governing terms, but does not eliminate protocol, validator, market or operational risk.

## Queue after Batch 57 canonical promotion

```text
Queue status:            growth_to_100
Canonical platforms:     96
Active staged candidates: none
Next candidate IDs:      cya_candidate_000095 / cya_candidate_000096
Next platform ID:        cya_plat_000097
Next event ID:           cya_ev_000340
Next audit milestone:    100 platforms
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
1. Complete the Batch 57 Ndax/VALR canonical PR and require all repository, candidate, SEO, preview and representative-surface checks to pass.
2. Merge only after those gates succeed.
3. Freeze main on the resulting exact 96-platform SHA and require Cloudflare exact-SHA deployment, Production Surface Check and production/representative screenshots to pass.
4. Only after that verification, stage candidates cya_candidate_000095 and cya_candidate_000096 from the verified 96-platform baseline.
5. Continue to 100, then stop for the mandatory full-corpus audit before any platform 101 work.
```
