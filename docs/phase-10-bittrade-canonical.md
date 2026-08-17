# Phase 10 — BitTrade canonical promotion

Date: 2026-08-17
Parent: #203
Candidate issue: #275
Candidate-only PR: #276

## Decision

Promote duplicate-clear `cya_candidate_000134` as canonical platform `cya_plat_000116`, subject to exact-head canonical validation.

## Timeline boundary

Current and historical first-party BitTrade material establishes active and prior lending operation, but the reviewed sources do not establish an exact original launch day. `launch_date` therefore remains null and no launch event is fabricated.

## Product and insolvency boundary

BitTrade's current first-party page describes an unsecured consumption-loan contract. Lent assets are not subject to statutory segregated management, customers have no priority repayment right over other creditors, and BitTrade warns that lent crypto may not be returned if it fails. The service is not deposit-like and is not deposit-insurance covered.

CYA therefore preserves lending counterparty/insolvency exposure and does not generalize ordinary exchange custody protection, deposit protection, insurance, or guaranteed principal to lent balances.

## Yield and outcome boundary

Published rates are issuer product terms, not independently verified realized returns. Current contractual return mechanics do not establish universal historical repayment performance. Because the service remains active, failure-recovery fields are `not_applicable`.

## Canonical allocation

- platform: `data/platforms-batch-76.json`
- product: `data/products-batch-76.json`
- evidence: `data/evidence-batch-81.json`
- terms/risk: `data/terms-risk-batch-76.json`
- outcome: `data/outcomes-batch-76.json`
- consumed candidate: `data-staging/candidates/cya-consumed-batch-76.json`

Successful merge moves the canonical platform corpus from 115 to 116, leaving 9 platforms before the mandatory 125-platform full-corpus audit gate.
