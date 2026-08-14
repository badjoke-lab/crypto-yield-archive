# Phase 10 — FUELHASH CRYPTOLENDING canonical promotion

Date: 2026-08-15
Parent: #203
Candidate issue: #228
Candidate PR: #229

## Promotion decision

Promote duplicate-clear `cya_candidate_000129` to `cya_plat_000111` in canonical batch 70.

## Identity and launch

Canonical identity: **FUELHASH CRYPTOLENDING**
Operator: **株式会社FUELHASH**
Type: `cefi_lending`
Status: `active`

A first-party announcement dated 2022-11-02 establishes an exact CRYPTOLENDING service start date of **2022-11-07**. The launch is therefore recorded as `cya_ev_000347` with `event_type: launched`.

## Contract model

Current first-party Terms define CRYPTOLENDING as a direct lending arrangement in which users lend eligible crypto assets/tokens to 株式会社FUELHASH and FUELHASH owes return of the same type and quantity plus contractual interest.

The Terms distinguish flexible lending and fixed lending. Fixed lending includes the fixed-rate product presented as `クリプトレンディング` and the variable-rate `クリプトレンド` / CRYPTOTREND product. Fixed lending is generally non-cancellable during the lending period, and principal plus interest are returned to the flexible-lending balance at maturity under the published mechanics.

## Legal / custody boundary

The current Terms state that the service is not crypto-asset exchange business and that the exchange-business segregated-management obligations described there do not apply. They also state that the service is not a bank deposit or deposit-like product and expressly warn that FUELHASH failure may make return of borrowed customer assets impossible.

CYA therefore uses `terms_status: platform_owned` to represent borrower-counterparty economic exposure during the lending contract. This is not an independent safety, solvency or broader legal-title conclusion.

## Marketing-claim boundary

The current product surface separately uses high-rate, stable-operation and principal-guarantee language and describes a partnership with a Singapore CMS-license holder.

Those statements remain operator marketing claims. They do not override the contractual insolvency/non-return disclosure and must not be converted into independent CYA claims of:

- guaranteed principal recovery;
- licensing validation of the entire service;
- insurance;
- reserve proof;
- verified realized return;
- solvency.

## Yield-source boundary

The reviewed public Terms and product pages do not establish the exact economic source of every contractual interest payment with sufficient specificity for an independent CYA conclusion. No yield source is inferred from marketing language, headline rates or partnerships.

## Candidate / duplicate gate

Candidate-only PR #229 passed the hardened full-corpus scanner against the 110-platform canonical corpus. Six active candidates were scanned and exactly one candidate was draft-eligible; the safety guard passed.

## Canonical allocation

```text
platform:   cya_plat_000111
event:      cya_ev_000347
batch:      70
evidence:   cya_src_b70_0001–0004
outcome:    one batch-70 record
product:    one batch-70 record
terms-risk: one batch-70 record
```

## Production gate

Merge only after every required exact-final-head canonical CI gate is green. After merge, require push-side Production Surface Check success on the exact merge SHA before closing #228 or treating canonical count 111 as production-verified.
