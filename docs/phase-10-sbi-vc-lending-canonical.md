# Phase 10 — SBI VC Trade 貸コイン canonical promotion

Date: 2026-08-15
Parent: #203
Candidate issue: #231
Candidate PR: #232

## Promotion decision

Promote duplicate-clear `cya_candidate_000130` to `cya_plat_000112` in canonical batch 71.

## Identity and launch

Canonical identity: **SBI VC Trade 貸コイン**
Operator: **SBI VCトレード株式会社**
Type: `cefi_lending`
Status: `active`

A first-party announcement dated 2022-01-26 establishes the lending service launch on **2022-01-26**. The launch is recorded as `cya_ev_000348` with `event_type: launched`.

## Contract / risk boundary

Current first-party materials describe 貸コイン as a consumption-loan transaction. Customers lend eligible crypto assets or electronic payment instruments to SBI VC Trade and receive principal plus a contractual lending fee under course-specific terms.

A product-specific Flare lending disclosure states that lent assets are outside exchange-custody segregated-management treatment, do not receive the exchange-custody priority right described there, may be rel lent by SBI VC Trade, are unsecured, and can suffer partial or total non-return in company insolvency.

CYA therefore uses `terms_status: platform_owned` to represent borrower-counterparty economic exposure during the lending contract. The Flare disclosure is product-specific and is not generalized verbatim to every current or historical course.

## Registration / rate boundary

SBI VC Trade's crypto-asset exchange registration is not treated as making lending principal segregated, deposit-insured or guaranteed. Current and campaign annual rates remain issuer product terms rather than independently verified realized returns, guarantees, reserve proof, insurance or solvency evidence.

## Canonical allocation

```text
platform:   cya_plat_000112
event:      cya_ev_000348
batch:      71
evidence:   cya_src_b71_0001–0004
outcome:    one batch-71 record
product:    one batch-71 record
terms-risk: one batch-71 record
```

## Production gate

Merge only after every required exact-final-head canonical CI gate is green. After merge, require push-side Production Surface Check success on the exact merge SHA before closing #231 or treating canonical count 112 as production-verified.
