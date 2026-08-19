# Phase 10 canonical promotion — CoinTrade Lending

## Scope

Promote duplicate-clear candidate `cya_candidate_000137` to canonical platform `cya_plat_000118`.

## Identity

- Platform: CoinTrade Lending
- Operator: Mercury Inc.
- Domain: `coin-trade.cc`
- Jurisdiction/origin: Japan
- Status: active
- Canonical type: `cefi_lending`

## Authority reviewed

First-party CoinTrade support establishes that the lending service launched in June 2024 and remains available as a fixed-term crypto-asset lending product. Current support describes season-based applications, contractual lending rewards, return procedures, and mid-term cancellation rules.

The reviewed authority does **not** establish a sufficiently reliable exact original launch day. `launch_date` therefore remains `null`; CYA does not manufacture an exact date from a month-only source.

## Risk and interpretation boundaries

- Published reward rates are issuer product terms, not independently verified realized returns.
- Current return procedures do not prove universal historical repayment performance.
- Mid-term cancellation is in principle unavailable; where an exception is approved, no lending reward is paid and a cancellation fee equal to 10% of the application quantity applies.
- Dedicated lending-term custody / segregation treatment is not generalized from ordinary exchange-service disclosures without product-specific authority.
- No failure, recovery process, recovery percentage, guaranteed principal, deposit insurance, or insurance is inferred.

## Allocation

- platform: `cya_plat_000118` in `data/platforms-batch-78.json`
- product: `data/products-batch-78.json`
- terms/risk: `data/terms-risk-batch-78.json`
- outcome: `data/outcomes-batch-78.json`
- evidence: `data/evidence-batch-83.json`
- consumed candidate: `data-staging/candidates/cya-consumed-batch-78.json`

No launch event is created because the exact original launch day is not established.

## Candidate gate

Candidate-only PR #284 passed the hardened exact-head scanner against the 117-platform canonical corpus before promotion. The active candidate is removed only as part of this canonical promotion package and is preserved in the consumed-candidate ledger.

## Validation retry note

The first PR-head screenshot workflow became stuck during Playwright dependency installation while all seven other exact-head workflows completed successfully. This documentation-only commit does not change canonical data; it exists to create a fresh exact head so the complete validation set, including representative screenshots, can run again.

## Result

If this PR passes exact-head validation and is merged, the canonical platform corpus becomes **118 / 125**, leaving **7** platforms before the Phase 10 full-corpus gate.
