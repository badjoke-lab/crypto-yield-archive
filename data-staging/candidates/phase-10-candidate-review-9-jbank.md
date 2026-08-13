# Phase 10 candidate review 9 — JBank — 2026-08-13

Status: `add_now` candidate / canonical promotion requires separate PR

## Baseline

This review starts from main after the 9D Assets research decision:

```text
54a534ddd89ba852c3040af61d14f188d92bb9d1
```

9D Assets remains `needs_research`; no canonical count changed in that lane.

## Identity

The relevant identity is:

```text
JBank
https://jbank.vip/
```

JBank's own site describes it as a Web3 decentralized self-custody banking protocol launched by JuCoin. A JuCoin first-party support notice from 2025-06-07 likewise describes JUC (JBank) as a decentralized self-custody banking and financial protocol launched by JuCoin and points to `jbank.vip` as the official site.

This establishes the protocol identity and its JuCoin relationship without relying on affiliate/referral material.

## Why this is a CYA exception

CYA normally deprioritizes DeFi lending protocols. The README nevertheless includes historically significant Earn/staking products when there is material suspension, outcome or failure relevance.

JBank meets that exception threshold because first-party material documents both a staking product and a later material change to return/access mechanics for long-term staked assets.

## Staking product

A JBank project-authored post hosted on Ju.com's community surface on 2025-11-04 describes:

```text
Flexible staking
180-day staking
365-day staking
auto-compounding rewards every 8 hours
```

The same post describes JUB as an algorithmic, non-stablecoin token and presents JBank as self-custodial/on-chain.

JBank's current official site also exposes `Stake Now`, Protocol Owned Liquidity, a range-stabilization mechanism, lending, decentralized governance and JUB-based mechanics.

CYA must preserve that architecture. This is not a centralized bank deposit or ordinary CeFi interest account.

## Material December 2025 change

JBank's official site currently publishes a dated notice from 2025-12-04 announcing an `International Version` for users whose assets were still under long-term staking and had not been sold.

The notice states that, after choosing the International Version, long-term staked assets move into that system and users have two described routes:

1. take no action and begin release after six months;
2. use a performance-based accelerated-release mechanism, where completed performance unlocks a proportion of assets.

The notice explicitly states that no static returns are generated during either the six-month waiting period or the performance-based unlocking period.

This is a direct change in both access and return mechanics and is the reason this DeFi/staking product is sufficiently relevant for CYA's historical registry exception.

## Status boundary

Candidate status is `limited`, not `active` or `operations_ended`.

Reason:

- the current site still exposes staking and protocol functionality;
- the December notice affects long-term staked assets and changes their release/return path;
- the reviewed evidence does not establish a platform-wide shutdown;
- the reviewed evidence also does not establish that all affected long-term assets were released after the six-month period.

Customer outcome therefore remains unresolved.

## Return-claim boundary

JBank public material uses language such as `guaranteed returns`, `predictable staking rewards`, and very high APY examples in project/community material.

CYA must not convert any such marketing into:

```text
verified realized return
principal guarantee
proof of solvency
proof of universal release
```

Only dated product mechanics and issuer claims should be recorded, with attribution and risk context.

## Token identity uncertainty

JuCoin's June 2025 listing notice calls the JBank token:

```text
JUC
JuChain
21,000,000 total supply
```

Later JBank first-party/current material uses:

```text
JUB
```

The reviewed sources do not yet establish the exact JUC-to-JUB rename, migration or replacement chronology.

Canonical promotion must preserve this as explicit uncertainty and must not silently treat the two token symbols as a proven one-to-one migration.

## Candidate decision

Stage as:

```text
candidate: cya_candidate_000112
name:      JBank
type:      defi_lending
status:    limited
decision:  add_now
```

The canonical record should focus on JBank's staking/yield history and the December 2025 long-term-asset change, while also explaining that the underlying architecture is decentralized/self-custodial.

## Duplicate controls

Exact repository searches on main before staging returned no match for:

```text
JBank
jbank.vip
JuCoin
```

and no prior use of:

```text
cya_candidate_000112
```

The hardened full-corpus scanner remains authoritative before promotion.

## Canonical promotion requirements

If the candidate gate remains duplicate-clear and green, promote in a separate canonical PR with:

- platform record;
- staking start/public product milestone;
- 2025-12-04 International Version / return-access change event;
- first-party evidence;
- product profile preserving self-custody/on-chain mechanics;
- terms-risk record;
- customer outcome `unknown` unless stronger release evidence is found.

Do not invent a protocol launch date from the June 2025 JUC listing announcement. The June notice proves that JuCoin already described JBank as launched by that date, not the exact original protocol launch day.

## Next action

Run exact-head Candidate scan, Candidate draft/guard, Validate data, CYA CI, Validate/build, SEO and Preview Surface Check. If green, merge the candidate-only PR, then create the separate canonical promotion PR before advancing Issue #186 to `Zenta`.
