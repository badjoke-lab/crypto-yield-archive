# Phase 10 canonical review — Smart Crypto Lending

Date: 2026-08-14  
Parent: #203  
Candidate: `cya_candidate_000122`  
Canonical platform: `cya_plat_000105`  
Decision: **promote**

## Candidate gate

Candidate-only PR #209 staged Smart Crypto Lending after exact pre-checks found no indexed CYA identity match. The hardened full-corpus candidate scanner completed successfully with six active candidates and exactly one draft-eligible candidate; Smart Crypto Lending was that `add_now` candidate. The candidate-only PR then merged without canonical data changes.

## Identity and operator

The first-party company page identifies the operator as ミライジング株式会社 and lists Smart Crypto Lending as a company service. It states the service began in June 2025.

The source does not provide an exact launch day. Canonical `launch_date` is therefore `null`; the June 2025 start month is preserved in narrative and evidence rather than converted into a synthetic date.

## Product and contract structure

The current first-party terms define Smart Crypto Lending as a crypto consumption-loan service. The customer applies to lend crypto, sends it to a company-designated wallet, and the company becomes the borrower under an individual agreement. The published contract offers 1-, 3-, 6- and 12-month terms and describes same-asset interest.

After maturity, principal plus interest is placed in the customer's service wallet. A withdrawal request is then required; the terms state a seven-business-day return process, subject to enumerated exceptions.

Canonical type is:

```text
cefi_lending
```

The product profile uses:

```text
centralized_yield
```

## Terms and risk boundary

The first-party terms explicitly state that:

- the transaction is not a deposit or deposit-like transaction;
- deposit insurance does not apply;
- the borrowed crypto is not subject to statutory segregated management under the cited crypto-exchange-business framework;
- the lending is unsecured;
- principal and interest may not be returned if the company fails;
- rates can be changed under the agreement;
- withdrawal can be delayed or refused under listed market, liquidity, legal and operational circumstances.

Because the contractual structure is an unsecured consumption loan to the company rather than segregated customer custody, CYA records:

```text
terms_status: platform_owned
```

This is a contract-structure classification, not a solvency or safety judgment.

## Current product surface

The current first-party website lists BTC, ETH, ADA, TRON, USDC and USDT lending and advertises fixed-term annualized rates. It also describes diversified deployment across crypto investment destinations and makes cold-wallet, monitoring and risk-management statements.

Those statements are issuer claims only. Canonical records must not convert them into:

```text
verified realized return
reserve proof
principal guarantee
solvency proof
insurance coverage
independent security assurance
```

## Outcome treatment

The service is currently presented as active and this review found no first-party evidence of a platform-wide failure, claims process, restructuring or customer-loss event.

Canonical outcome is therefore:

```text
not_applicable
```

The contractual promise to repay principal plus interest is not treated as proof of universal realized repayment.

## Canonical allocation

```text
platform:   cya_plat_000105
batch:      64
evidence:   cya_src_b64_0001–0003
outcome:    one batch-64 record
product:    one batch-64 record
terms-risk: one batch-64 record
```

No event ID is allocated because the only established start timing is a month (`2025-06`), while canonical events require an exact `YYYY-MM-DD`. CYA does not manufacture a day-level launch event.

## Candidate consumption

`cya_candidate_000122` is removed from the active candidate ledger and preserved in `cya-consumed-batch-64.json`, mapped to `cya_plat_000105`.

Cabital, Outlet Finance, 9D Assets, Zenta System and iOrca remain `needs_research`.

## Required exact-head validation

Before merge, the exact final PR head must pass:

- Candidate scan / safety guard
- Candidate draft
- Validate data
- CYA CI
- Validate and build
- SEO
- Preview Surface Check
- any other triggered repository gates

After merge, verify the exact merge SHA on the production custom domain before treating platform 105 as production-confirmed.
