# Phase 10 candidate review 8 — 9D Assets — 2026-08-13

Status: identity/scope confirmed / `needs_research` / no canonical allocation

## Baseline

This review starts from main after the WeFi scope decision:

```text
794e05ddb5edd7ebc2fee0a30841a111f75106e5
```

BTCC Earn remains the latest canonical addition at platform 103; WeFi was resolved as out of current CYA scope without a canonical change.

## Discovery boundary

Issue #186 listed `9D Assets` from an external service watchlist. That watchlist and Japanese referral/support pages are discovery-only and must not be treated as canonical evidence for yield, safety, return, or redemption claims.

The relevant identity resolves to the 9D Assets ecosystem documented at:

```text
https://9d-assets.gitbook.io/9d-assets-docs/
```

and operationally associated with the CoinChief exchange surface:

```text
https://www.coinchief.live/
```

## First-party 9D scope

The 9D documentation describes an AI-native RWA infrastructure supporting tokenization, trading and `yield generation through mining and lending`.

Its nine-pillar model explicitly includes:

- BTC Mine with yield-generating opportunities backed by physical mining assets;
- a DeFi-native Lending Protocol;
- a Mining Ecosystem described as producing stable/predictable yield;
- RWA launchpad and trading;
- stablecoin/payment infrastructure.

The 9D FAQ attributes yield generation to a mixture of:

```text
BTC mining
DeFi lending
AI-managed funds
trading activities
```

The roadmap also describes future/ongoing stages for StaX, smart investment products, RWA tokenization, trading and enterprise onboarding.

These sources establish yield relevance but not a complete CYA-grade product contract.

## CoinChief relationship

The current official CoinChief site identifies itself as `Coin Chief Tech INC.` and exposes:

- Spot;
- Futures;
- Copy Trading;
- an `Earn` navigation item;
- multiple current `9D Assets / CCP` official announcements.

This is sufficient to treat the CoinChief relationship as more than an affiliate invention, but the currently indexed public surface does not expose the underlying 9D staking contract or product terms in a form that resolves the canonical product boundary.

A May 2026 corporate release from GMTech independently identifies `Coin Chief Tech INC.` and points to `m.coinchief.live` as Coin Chief's official website, which resolves to the current `coinchief.live` surface. This source can support corporate/site identity if later needed, but first-party CoinChief/9D documents remain preferred for canonical mechanics.

## Why `add_now` is not yet safe

Japanese user-facing/referral material states that 9D participation/staking occurs inside CoinChief and describes daily rewards, asset-pack consumption, StaX funding and referral acceleration. Some material markets the product as daily 1% or monthly 20%.

Those claims are not sufficient for canonical promotion because the reviewed first-party 9D documentation does not yet establish:

- the exact product name and contractual boundary used inside CoinChief;
- deposit/subscription asset and whether principal is converted into StaX, locked, transferred, staked, lent or otherwise deployed;
- lockup and redemption mechanics;
- whether an `asset pack` is principal, a spending quota, a reward cap or another accounting construct;
- exact source and contractual status of daily rewards;
- custody and asset-ownership treatment;
- legal entity/counterparty responsible for the product;
- the formal launch date;
- the relationship among CoinChief, 9D Assets, StaX and the 9D token.

CYA must not infer those terms from screenshots, referral guides or promotional ROI examples.

## Current decision

Stage as:

```text
candidate: cya_candidate_000111
name:      9D Assets
status:    active guess
scope:     exchange staking / RWA yield candidate
decision:  needs_research
```

This decision means the product is CYA-relevant enough to remain in the active research queue, but the evidence is not yet sufficient for a public canonical record.

It is not a fraud, safety, solvency or return-quality classification.

## Research gate before promotion

Before `add_now`, obtain first-party evidence for at least:

1. 9D staking/Earn product rules within CoinChief;
2. subscription/deposit and redemption mechanics;
3. reward/yield calculation and source wording;
4. asset ownership/custody/reuse rights;
5. contracting legal entity and jurisdiction;
6. product launch chronology;
7. whether StaX is required and what happens to deposited USDT/StaX;
8. whether CoinChief or 9D is the economic counterparty.

Any daily-1%, monthly-20%, referral-speed or 3x-cycle claim must remain a discovery claim unless a dated first-party source establishes it. Even then it must be recorded as issuer-advertised mechanics, not verified realized return.

## Duplicate controls

Exact repository searches on main before staging returned no canonical match for:

```text
9D Assets
Coin Chief
coinchief
```

and no prior use of:

```text
cya_candidate_000111
```

The hardened candidate scanner remains authoritative for full-corpus collisions.

## Next action

Run exact-head candidate audit/scanner/guard, draft, data validation, CYA CI, build/SEO and Preview Surface Check. If green, merge this staging-only `needs_research` decision without allocating canonical IDs, then advance Issue #186 to `JBank` while leaving 9D Assets in the research queue.
