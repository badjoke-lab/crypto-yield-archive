# Phase 10 — BITPOINT canonical promotion

Date: 2026-08-17
Parent: #203
Candidate issue: #272
Candidate-only PR: #273

## Decision

Promote duplicate-clear `cya_candidate_000133` as canonical platform `cya_plat_000115`, subject to exact-head canonical validation.

## Launch authority

BITPOINT's first-party announcement establishes the service launch on **2020-11-26**. The launch is recorded as `cya_ev_000355`.

## Product and custody boundary

Current first-party materials describe a consumption-loan contract in which customers lend crypto assets to BITPOINT and receive equivalent crypto plus a contractual lending fee under offering-specific terms. Current service details state no mid-term cancellation.

BITPOINT explicitly states that the lending service is not a crypto-asset exchange service under the Payment Services Act and that assets lent through the service are not subject to statutory segregated management. The product is also stated not to be deposit-like or covered by deposit insurance. CYA therefore does not generalize exchange-service custody protection, deposit protection, insurance, or guaranteed principal to lent balances.

## Yield and outcome boundary

Launch-campaign and current published rates are issuer product terms, not independently verified realized returns. Current contractual return mechanics do not establish universal historical repayment performance.

The service remains active in the reviewed first-party material, so failure-recovery fields are `not_applicable`.

## Canonical allocation

- platform: `data/platforms-batch-75.json`
- event: `data/events-batch-75.json`
- product: `data/products-batch-75.json`
- evidence: `data/evidence-batch-80.json`
- terms/risk: `data/terms-risk-batch-75.json`
- outcome: `data/outcomes-batch-75.json`
- consumed candidate: `data-staging/candidates/cya-consumed-batch-75.json`

Successful merge moves the canonical platform corpus from 114 to 115, leaving 10 platforms before the mandatory 125-platform full-corpus audit gate.
