# Phase 10 candidate review — Smart Crypto Lending (SCL)

Issue: #208  
Review date: 2026-08-13  
Candidate: `cya_candidate_000122`  
Canonical mutation in this PR: **none**

## Identity

The reviewed identity is the Japanese service:

```text
Smart Crypto Lending
scllending.com
operator: ミライジング株式会社
```

First-party company information states that the company was established on 2024-07-26 and that Smart Crypto Lending began service in June 2025.

Sources:

- https://scllending.com/company/
- https://scllending.com/
- https://scllending.com/terms/

## CYA scope fit

The current first-party terms explicitly define Smart Crypto Lending as a service in which a customer lends crypto assets to ミライジング株式会社 for a defined period and the company returns the same type of crypto plus contract interest.

The terms describe an individual crypto consumption-loan contract created when the user sends crypto to the company's designated wallet and the company records receipt.

Current contract mechanics include:

- fixed lending periods of 1, 3, 6 or 12 months;
- interest attached to the lending contract;
- principal plus interest becoming available after maturity;
- withdrawal application after maturity, with the terms stating return within seven business days after a valid withdrawal request;
- rate-change authority under the contract;
- automatic renewal as an optional contract setting.

This is directly within CYA's centralized lending/yield boundary.

## Risk / custody boundary

The terms explicitly state that the transaction is not a deposit or deposit-like transaction and is not deposit-insured. They also state that the borrowed crypto is not treated as segregated customer property under the cited crypto-exchange-business framework, that the loan is unsecured, and that company failure can result in non-return of principal or interest.

These are contract disclosures, not a finding that such a failure has occurred.

The public site also publishes current lending-rate, security, cold-wallet and investment-strategy claims. Those remain issuer claims and must not be transformed into independent proof of realized returns, reserve backing, security quality or solvency.

## Duplicate controls

Before staging, exact repository searches returned no indexed match for:

- `Smart Crypto Lending`
- `scllending.com`
- `ミライジング`
- `cya_candidate_000122`

This preliminary search does not replace the hardened scanner. Promotion is allowed only if the exact PR head classifies `cya_candidate_000122` as `new_candidate` and draft-eligible against the full canonical platform corpus.

## Decision

```text
cya_candidate_000122
Smart Crypto Lending
add_now
```

The decision is provisional until exact-head candidate scanning and all normal CI gates pass.

If the scanner confirms a duplicate-clear identity, canonical promotion must occur in a separate PR and preserve the distinction between verified contract terms and issuer promotional claims.
