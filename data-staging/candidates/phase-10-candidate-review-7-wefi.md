# Phase 10 candidate review 7 — WeFi — 2026-08-13

Status: identity resolved / scope rejection / no canonical allocation

## Baseline

This review starts only after BTCC Earn platform 103 passed exact-merge-SHA production verification on:

```text
d0f7814dcfc41e3ba22a400e6d228886078978c6
```

Production Surface Check #206 confirmed Cloudflare serving that exact SHA and reported:

```text
Platforms:          103
Events:             338
Evidence:           615
Customer outcomes:  103
Product profiles:   144
Terms risk:         103
Claims ongoing:      18
```

The production visual verification captured 24/24 desktop/mobile states with zero failures.

## Discovery identity

Issue #186 listed `WeFi` from an external service watchlist. That watchlist is discovery-only.

The relevant discovery identity resolves to:

```text
WeFi
https://wefi.co/
```

Japanese promotional/discovery material groups this WeFi with high-yield/mining products and describes returns from WFI mining. That material is not used as canonical evidence.

A separate historical/current project also exists at:

```text
https://wefi.xyz/
```

That identity is WeFi Finance, an on-chain DeFi lending/leverage protocol. It must not be merged into the current `wefi.co` Deobank/financial-infrastructure identity merely because both use the WeFi name.

## Current wefi.co product boundary

Current first-party WeFi material describes an onchain/deobank-style platform spanning exchange, payment, card, custody, token/reward and financial-infrastructure functions.

The current site and technology material describe `Cloud-Based Mining (CBM)` as hardware-free WFI token distribution / mining infrastructure. Energy and WFI are also described as incentive and loyalty mechanisms.

The homepage uses yield/APR language and displays `up to 18% APR` around stablecoins. However the same current surface explicitly labels:

```text
High-yield stablecoin savings up to 18% coming soon
Loans — both collateralized and uncollateralized — coming soon
```

That distinction is material. It is not safe to convert a headline APR or future-product statement into a live CYA interest-account record.

## Current legal / custody boundary

WeFi's Terms and Conditions, last updated 2026-06-01, identify the website operator as `3-102-939581 S.R.L.` in Costa Rica and identify `Wefi Payments Limited` in Canada for fiat/payment and fiat/crypto conversion services.

The terms explicitly state that WeFi:

- is not a bank;
- does not accept deposits on a banking balance sheet;
- does not use user funds for lending or credit creation;
- acts as a technology intermediary for partner-provided services;
- uses a designated third-party custodian for certain digital assets.

These provisions are important to product/counterparty interpretation and are inconsistent with silently treating marketing language as proof of a conventional CeFi interest-account structure.

## CYA scope decision

CYA's fixed README scope focuses on:

- CeFi lending platforms;
- crypto interest accounts;
- centralized yield platforms;
- borrowing/lending services;
- historically significant Earn/staking products when there is major regulatory, suspension, outcome or failure relevance.

It explicitly does not prioritize generic exchange Earn, DeFi lending protocols, yield aggregators or pool-level records in the initial registry.

The reviewed `wefi.co` product evidenced by this watchlist item is primarily token mining/distribution and financial-platform infrastructure. A live stablecoin savings/interest product with durable deposit, return, redemption and counterparty mechanics was not established; the current site says that product is coming soon.

Therefore the watchlist candidate is resolved as:

```text
cya_candidate_000110
WeFi / wefi.co
out_of_scope
```

This is a scope decision, not a fraud, solvency, safety or quality classification.

## Separate wefi.xyz identity

First-party `wefi.xyz` documentation describes a permissionless DeFi money-market protocol where lenders supply assets and earn variable interest and borrowers use on-chain lending pools/leverage.

That project is independently CYA-adjacent, but the current README explicitly does not prioritize DeFi lending protocols. It is not promoted under this watchlist lane and is not treated as a predecessor/successor of `wefi.co` without evidence establishing such a relationship.

## Re-review trigger

Re-open `wefi.co` for CYA if first-party materials establish a live CeFi savings/interest/Earn product with reviewable:

- product terms;
- deposit/asset treatment;
- return mechanics;
- redemption/lockup mechanics;
- contracting/counterparty scope;
- customer-outcome relevance.

Do not re-open merely because an affiliate page publishes a projected ROI or because WFI mining rewards are active.

## Duplicate / candidate-ID controls

Exact repository searches before this review returned no canonical match for:

```text
WeFi
wefi.co
wefi.xyz
```

The candidate directory listing also showed no prior `cya_candidate_000110` filename-level occurrence. The candidate corpus audit remains authoritative for candidate-ID collision detection.

## Next action

Run the exact-head candidate corpus audit, scanner, draft/guard, data validation, CYA CI, build/SEO and Preview Surface Check. If green, merge this staging-only scope decision and advance Issue #186 to `9D Assets`.

No canonical promotion PR is required for WeFi under the current evidence and scope.
