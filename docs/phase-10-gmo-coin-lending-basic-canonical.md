# Phase 10 — GMO Coin Lending Basic canonical promotion

Date: 2026-08-14
Parent: #203
Candidate issue: #220
Candidate-only PR: #221

## Decision

Promote duplicate-clear candidate `cya_candidate_000126` as canonical platform `cya_plat_000109` in batch 68.

## Allocation

- platform: `cya_plat_000109`
- evidence: `cya_src_b68_0001` through `cya_src_b68_0004`
- outcome: one batch-68 record
- product: one batch-68 record
- terms-risk: one batch-68 record
- event: none

No exact launch day is established by the reviewed first-party evidence. The service is documented as already operating by June 2020, but CYA does not manufacture an original launch date.

## Scope boundary

This canonical identity is **貸暗号資産ベーシック** only. The separate `貸暗号資産プレミアム` product adds a derivative / yen-conversion feature and is not silently combined into Basic.

## Contract / counterparty treatment

Current GMO Coin materials characterize Basic as a crypto-asset consumption-loan arrangement. GMO Coin states that the lending transaction is not a crypto-asset exchange transaction and that borrowed lending assets are not subject to the segregated-management requirements applicable to the exchange business. It also states that the product is not a deposit or deposit-insurance product and warns that lent assets may not be returned if the company fails.

Canonical treatment:

```text
type: cefi_lending
status: active
terms_status: platform_owned
```

This records borrower-counterparty exposure during the lending term; it is not an independent solvency judgment or legal determination of insolvency priority.

## Current operation and history

A 2026 first-party recruitment notice confirms ongoing Basic lending intake for selected assets and courses, subject to capacity. A 2020-06-10 first-party service-change notice proves the predecessor 貸暗号資産 service was already operating then and documents course/rate changes for July 2020 lending.

Current first-party materials also state that asset/course recruitment is intermittent, loaned assets are unavailable for ordinary sale/withdrawal during the term, and early termination can forfeit lending fees and may incur a fee.

Published rates, capacity, availability and marketing/risk statements remain issuer terms/claims and are not independently verified realized returns, reserve proof, guarantees, insurance or solvency evidence.

## Outcome

No reviewed first-party evidence establishes a platform-wide failure, restructuring, claims process or customer-loss event. Outcome is `not_applicable`.

## Candidate consumption

`cya_candidate_000126` is removed from the active candidate ledger and preserved in `cya-consumed-batch-68.json`, mapped to `cya_plat_000109`.

Remaining research queue: Cabital, Outlet Finance, 9D Assets, Zenta System, iOrca.

## Gate

Require all exact-head PR checks green, then merge and require Production Surface Check exact merge-SHA success before closing #220.
