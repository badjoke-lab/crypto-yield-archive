# Phase 10 — BitTrade 貸暗号資産 candidate review

Date: 2026-08-17
Parent: #203
Candidate issue: #275

## Decision

Reserve `cya_candidate_000134` for **BitTrade 貸暗号資産** and prepare it for the hardened candidate gate.

## Current operation

BitTrade's current first-party lending page documents an active customer-facing service. Customers lend crypto assets for offering-specific periods and receive contractual lending fees. After application the lent quantity is locked; the published flow states that the lent crypto and lending fee are returned during the return window following the lending period.

## Custody and insolvency boundary

BitTrade explicitly states that the lending service is not crypto-asset exchange business under the Payment Services Act and that lent assets are not subject to statutory segregated management. The page also states that customers have no priority repayment right over other creditors, that the agreement is an unsecured consumption-loan contract, and that lent crypto may not be returned if BitTrade fails.

The product is not a deposit or deposit-like product and is not covered by deposit insurance.

## Timeline boundary

Current and historical first-party campaign material establishes operation by earlier periods, but this review does not establish an exact original launch day. Do not infer one.

## Yield and outcome boundary

Published annual rates are issuer product terms, not independently verified realized returns. Current contractual return mechanics do not establish universal historical repayment performance.

## Duplicate boundary

Pre-staging exact repository search for `BitTrade` returned no indexed canonical CYA identity match. The hardened full-corpus scanner on the exact candidate PR head remains authoritative. Canonical IDs must not be allocated before duplicate-clear/draft-eligible classification.
