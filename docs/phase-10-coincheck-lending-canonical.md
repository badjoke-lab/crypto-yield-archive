# Phase 10 — Coincheck Lending canonical promotion

Date: 2026-08-14
Parent: #203
Candidate issue: #217
Candidate-only PR: #218

## Decision

Promote duplicate-clear `cya_candidate_000125` as `cya_plat_000108` in batch 67.

## Allocation

- platform: `cya_plat_000108`
- evidence: `cya_src_b67_0001`–`0005`
- outcome/product/terms-risk: one record each
- no event ID: reviewed first-party evidence does not establish an exact original launch day or another event that needs canonical event allocation

## Contract treatment

Current Coincheck first-party materials define a fixed-term crypto consumption-loan contract. Coincheck states that borrowed lending assets are outside the exchange-business segregated-management framework, the contract is unsecured, and the product is not a deposit or deposit-insurance product.

Canonical treatment: `type=cefi_lending`, `status=active`, `terms_status=platform_owned`.

Coincheck exchange registration is not principal protection for the separate lending contract.

## Evidence boundary

Current annualized rates, borrowing capacity, operational/security statements and regulatory descriptions remain issuer statements. They are not independently verified realized return, reserve proof, guarantee, insurance or solvency evidence.

A first-party 2023-03-22 lending-terms amendment proves product history by that date but not the original launch day.

## Candidate consumption

`cya_candidate_000125` is removed from the active ledger and preserved in `cya-consumed-batch-67.json`, mapped to `cya_plat_000108`.

Remaining research queue: Cabital, Outlet Finance, 9D Assets, Zenta System, iOrca.

## Gate

Require all exact-head PR checks green, then merge and require Production Surface Check exact merge-SHA success before closing #217.
