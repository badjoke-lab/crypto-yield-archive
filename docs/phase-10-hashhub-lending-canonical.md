# Phase 10 — HashHub Lending canonical promotion

Date: 2026-08-14
Parent: #203
Candidate issue: #214
Candidate-only PR: #215

## Decision

Promote duplicate-clear candidate `cya_candidate_000124` as canonical platform `cya_plat_000107` in batch 66.

## Canonical allocation

- platform: `cya_plat_000107`
- event: `cya_ev_000346`
- evidence: `cya_src_b66_0001` through `cya_src_b66_0006`
- outcome: one batch-66 record
- product: one batch-66 record
- terms-risk: one batch-66 record

## Identity and current state

HashHub Lending / HashHubレンディング is an active Japanese centralized crypto-asset lending service currently operated by SBIデジタルファイナンス株式会社 (SBI Digital Finance Inc.).

Current first-party materials describe customers lending crypto assets to the operating company and receiving lending fees under published conditions. Current July 2026 materials list BTC, ETH, USDC, XRP and SOL. New DAI lending intake ended on 2026-05-20 and DAI lending-fee accrual stopped from 2026-07-01.

## Contract / counterparty treatment

First-party FAQ characterizes the service as a crypto-asset (quasi-)consumption-loan arrangement and states that the borrower owes return of principal-equivalent crypto quantity plus lending fees under the contract.

Canonical treatment:

```text
type: cefi_lending
status: active
terms_status: platform_owned
```

`platform_owned` records borrower-counterparty exposure during the loan. It is not a solvency judgment and does not independently determine legal title or insolvency priority.

## Historical event

A first-party company-split notice establishes an exact effective date of 2024-04-01. On that date the HashHub Lending service provider and related contractual rights and obligations transferred from 株式会社HashHub to newly established SBIデジタルファイナンス株式会社.

The repository event enum has no dedicated operator-transfer value. The event is therefore recorded as:

```text
id: cya_ev_000346
event_type: other
event_date: 2024-04-01
event_status_effect: none
```

`cya_ev_000345` is already used by the CryptoPanda / IZAKA-YA maintenance event, so this promotion deliberately uses the next collision-free ID and relies on the full-corpus validator as authority.

This is an operator / contractual-counterparty transition, not a shutdown, acquisition, insolvency, claims event or evidence of customer impairment.

## Return and product terms

Current first-party return guidance states that after a return application the lending period continues through the end of the following month, after which return is stated to occur within five business days; return fees apply. Monthly lending-fee rates may change.

Current first-party materials say borrowed assets may be deployed through arbitrage, third-party lending, staking and DeFi. Those strategy descriptions, current rates, safety/risk-management language and regulatory/legal characterizations remain issuer statements and are not treated as independently verified realized returns, reserve proof, principal guarantees, insurance, solvency evidence or independent legal conclusions.

## Outcome

No first-party evidence reviewed in this promotion establishes a platform-wide failure, restructuring, claims process or customer-loss event. Outcome is `not_applicable`.

Contractual repayment obligations and continued operation are not proof of universal realized repayment or solvency.

## Candidate consumption

`cya_candidate_000124` is removed from the active candidate ledger and preserved in `cya-consumed-batch-66.json`, mapped to `cya_plat_000107`.

The active research queue remains Cabital, Outlet Finance, 9D Assets, Zenta System and iOrca.

## Required exact-head gates

Before merge, run all repository-triggered checks on the exact final PR head, including:

- Candidate scan / safety guard
- Candidate draft
- Validate data
- CYA CI
- Validate and build
- SEO
- Preview Surface Check
- Representative page screenshots when triggered

After merge, Production Surface Check must verify the exact merge SHA on the custom domain and complete production desktop/mobile capture before #214 is closed.
