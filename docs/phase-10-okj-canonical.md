# Phase 10 — OKJ canonical promotion

Date: 2026-08-17
Parent: #203
Candidate issue: #278
Candidate-only PR: #279

## Decision

Promote duplicate-clear `cya_candidate_000135` as canonical platform `cya_plat_000117`, subject to exact-head canonical validation.

## Launch authority

OKJ's first-party announcement establishes the Web service launch on **2025-02-28 at 17:00 JST**. The launch is recorded as `cya_ev_000356`.

## Product and custody boundary

Current first-party materials describe a crypto-asset consumption-loan arrangement in which customers lend crypto assets to OKJ and receive principal plus a contractual lending fee under offering-specific terms. Early cancellation is available, but no lending fee is paid on early cancellation and return follows the offering-specific return schedule.

OKJ explicitly states that the lending product is not a deposit or deposit-like product, is not covered by deposit insurance, and that lent assets are not subject to statutory segregated management. OKJ warns that lent crypto may not be returned if the company fails. CYA therefore does not generalize exchange-service custody protection, deposit protection, insurance, or guaranteed principal to lent balances.

## Yield and outcome boundary

Published lending and campaign rates are issuer product terms, not independently verified realized returns. Current contractual return mechanics do not establish universal historical repayment performance.

The service remains active in the reviewed first-party material, so failure-recovery fields are `not_applicable`.

## Canonical allocation

- platform: `data/platforms-batch-77.json`
- event: `data/events-batch-79.json`
- product: `data/products-batch-77.json`
- evidence: `data/evidence-batch-82.json`
- terms/risk: `data/terms-risk-batch-77.json`
- outcome: `data/outcomes-batch-77.json`
- consumed candidate: `data-staging/candidates/cya-consumed-batch-77.json`

Successful merge moves the canonical platform corpus from 116 to 117, leaving 8 platforms before the mandatory 125-platform full-corpus audit gate.
