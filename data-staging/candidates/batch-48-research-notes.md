# Phase 8 batch 48 candidate research notes

Baseline canonical SHA: `61c7396794d713dacf237f447f2e02d8fc1ba588`  
Canonical platforms: 81  
Candidate IDs reviewed: `cya_candidate_000075` / `cya_candidate_000076`

## AscendEX Earn

Reviewed first-party basis:

- current AscendEX Earn surface describes staking, DeFi yield farming, liquidity mining, and lending/borrowing yield generators;
- AscendEX documented USDT and USDC staking with daily reward mechanics and use of staked assets as margin collateral on 2021-08-02;
- first-party 2026 material confirms continuing Fixed Earn operation, including REUR fixed-term products;
- reviewed material does not establish one original umbrella AscendEX Earn launch date;
- reviewed public material does not establish one universal legal-title, segregation, custody, principal-protection, or yield-source model for all Earn products.

Primary sources:

- https://ascendex.com/en/earn
- https://ascendex.com/en/products
- https://ascendex.com/en/support/articles/16662-ascendex-launches-tether-usdt-staking-and-usd-coin-usdc-staking-w
- https://ascendex.com/en/support/articles/141791-ascendex-launches-reur-fixed-earn-with-up-to-9-apr

Decision: `add_now`, subject to all staging gates. If promoted, this candidate receives the next canonical platform ID, `cya_plat_000082`.

## BitMart Earn

Reviewed first-party basis:

- BitMart's Earn hub currently presents Savings and other Earn products;
- historical first-party material documents Fixed/Flexible Savings operation by 2021-2022;
- current Savings documentation defines Flexible and Fixed Savings, subscription, accrual, redemption, and Spot/Earn wallet transfer mechanics;
- current Savings risk language states profits are not guaranteed and full loss is possible;
- reviewed material does not establish one exact original umbrella BitMart Earn launch date;
- principal/interest settlement mechanics are product rules and must not be converted into a universal custody, principal, solvency, or legal-title guarantee.

Primary sources:

- https://www.bitmart.com/en-US/earn-overview
- https://www.bitmart.com/en-US/support/articles/7923156042395/7923853757083/4406894261403
- https://www.bitmart.com/en-US/support/articles/7923156042395/7923853757083/4406956282651
- https://www.bitmart.com/en-US/savings

Duplicate resolution:

- hardened scanning identifies this candidate as the existing canonical BitMart Earn and Lending identity `cya_plat_000053`;
- canonical aliases already include `BitMart Earn` and `BitMart Savings`, with canonical domain `bitmart.com`;
- decision is `duplicate` and the candidate is archived in `cya-consumed-duplicate-review-batch-48.json`;
- no new canonical platform ID is assigned or consumed;
- reviewed sources may support a later evidence-backed enrichment of `cya_plat_000053`.

## Required gate

AscendEX remains staging-only until the hardened duplicate scanner, corpus audit, validation and review-only draft generator pass. BitMart is resolved as a canonical duplicate and must not return to the active candidate ledger. No unsupported canonical status changes, custody interpretation, customer outcome, or principal guarantee may be inferred from this document.
