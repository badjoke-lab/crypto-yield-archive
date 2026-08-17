# Phase 10 — bitbank canonical promotion

Date: 2026-08-17
Parent: #203
Candidate issue: #269
Candidate-only PR: #270
Canonical PR: #271

## Decision

Promote duplicate-clear `cya_candidate_000132` as canonical platform `cya_plat_000114`, subject to exact-head canonical validation.

## Gate authority

PR #270 passed Candidate scan, Candidate draft, CYA CI, SEO, Preview Surface Check, Validate data, and Validate and build on exact head `88c42e5e190a0527befdfc958eb57ae9220e503c`. The review-only draft generator reported six candidates, one ready and five blocked.

## Evidence boundary

First-party bitbank materials establish an active crypto-asset lending product, one-year standard maturity, return of lent crypto plus the prescribed contractual usage/lending fee, and an early-termination route subject to fee mechanics. First-party ETHW fork support also establishes a material custody boundary: crypto lent through the service was outside the segregated-management balance used for the ordinary exchange-custody allocation in that documented context.

The exact original launch date is not established by the reviewed first-party sources and remains unknown. Annual transaction-report guidance establishes historical operation by referenced reporting years but is not converted into a fabricated launch date.

Published rates are issuer terms, not independently verified realized returns. Current mechanics do not prove universal historical repayment performance. Exchange registration and ordinary custody protections are not generalized to lent balances.

## Canonical allocation

- platform: `data/platforms-batch-74.json`
- product: `data/products-batch-74.json`
- evidence: `data/evidence-batch-79.json`
- terms/risk: `data/terms-risk-batch-74.json`
- outcome: `data/outcomes-batch-74.json`
- consumed candidate: `data-staging/candidates/cya-consumed-batch-74.json`

Batch numbers are independently allocated by record family. Evidence batches 74 through 78 were already occupied before this promotion, so bitbank evidence uses batch 79.

The active staging ledger removes `cya_candidate_000132` after recording the consumed-candidate authority.

## Canonical scope

Add only reviewed platform/product/evidence/terms-risk/outcome records needed for `cya_plat_000114`. No failure event, recovery percentage, guarantee, insurance, solvency conclusion, or inferred launch date is added.

Successful merge moves the canonical platform corpus from 113 to 114, leaving 11 platforms before the mandatory 125-platform full-corpus audit gate.
