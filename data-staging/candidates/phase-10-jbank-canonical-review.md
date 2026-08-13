# Phase 10 canonical promotion — JBank — 2026-08-13

Status: canonical promotion review / proposed platform 104 / batch 63

## Candidate authority

JBank entered staging as `cya_candidate_000112` in candidate-only PR #194. The exact candidate head passed Candidate scan, Candidate draft, Validate data, CYA CI, Validate and build, SEO and Preview Surface Check before merge.

## Canonical allocation

```text
platform: cya_plat_000104
event:    cya_ev_000344
evidence: cya_src_b63_0001 through cya_src_b63_0004
batch:    63
```

Exact pre-promotion repository searches found no existing use of platform 104, event 344 or batch-63 evidence IDs.

## Scope exception

JBank is a decentralized self-custody protocol and would normally fall under CYA's DeFi deprioritization. It is included because the fixed CYA scope also permits historically significant Earn/staking products with material suspension/outcome relevance.

JBank has such relevance: first-party/project evidence establishes staking, and JBank's own dated 4 December 2025 notice materially changed return and access mechanics for unsold long-term staked assets.

## Identity and product

JuCoin's June 2025 first-party notice describes JBank as a Web3 decentralized self-custody banking and financial protocol launched by JuCoin and points to `jbank.vip` as the official site.

Later JBank material documents Flexible, 180-day and 365-day staking with auto-compounding rewards every eight hours. The current JBank site also exposes staking, Protocol Owned Liquidity, range stabilization, lending and decentralized governance.

Canonical type is therefore `defi_lending`, with a `staking_like_yield` product profile. The record must not be presented as a centralized bank deposit or CeFi interest account.

## December 2025 event

The current official JBank site publishes a dated 4 December 2025 International Version notice for users whose long-term staked assets remained unsold.

The notice describes:

- transfer of affected long-term staked assets into the International Version system for management;
- a no-action path where release begins after six months;
- a performance-based path that can accelerate release;
- no static returns during the waiting/unlocking periods.

This event is recorded as a high-impact `other` event with `limited` status effect. It is not described as a platform-wide shutdown or bankruptcy.

## Status and outcome

Current canonical status is `limited` because:

- JBank remains online and exposes protocol/staking functions;
- the December notice materially restricted/changed return and access mechanics for a class of long-term stakers;
- no reviewed source proves platform-wide termination;
- no reviewed source proves that every affected long-term position completed release after the six-month period.

Customer outcome is therefore `unknown`, not `full_repayment` and not `no_recovery`.

## Return-claim boundary

JBank/project material contains strong marketing such as guaranteed returns, predictable rewards and very high APY examples.

CYA records none of those as:

```text
verified realized yield
principal protection
proof of solvency
proof of universal release
```

Only issuer/project claims and dated mechanics may be preserved, with attribution and risk context.

## Token uncertainty

JuCoin's June 2025 notice identifies `JUC` as the JBank token on JuChain with a stated total supply of 21,000,000. Later/current JBank materials use `JUB`.

The reviewed sources do not establish the exact rename/migration/replacement chronology. The canonical record preserves this uncertainty and does not invent a one-to-one migration event.

## Custody / ownership boundary

JBank markets itself as self-custodial, but staked assets are subject to smart-contract/protocol rules, and the December notice states that affected long-term assets are moved into the International Version system for management.

Terms status is therefore `unclear`, not automatically `customer_owned`.

## Required exact-head checks

- candidate corpus audit / scanner guard
- Validate data
- CYA CI
- Validate and build
- SEO
- Preview Surface Check
- representative screenshot verification when triggered

Merge only if the exact final PR head is green. After merge, verify Cloudflare production serves the exact merge SHA with Production Surface Check before advancing Issue #186 to `Zenta`.
