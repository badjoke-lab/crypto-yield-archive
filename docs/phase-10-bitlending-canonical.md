# Phase 10 canonical review — BitLending

Date: 2026-08-14  
Parent: #203  
Candidate issue: #211  
Candidate PR: #212  
Candidate: `cya_candidate_000123`  
Canonical platform: `cya_plat_000106`  
Decision: **promote**

## Candidate gate

Candidate-only PR #212 staged BitLending with no canonical data changes. The hardened full-corpus scanner completed with six active candidates and exactly one draft-eligible candidate. BitLending was the sole `add_now` candidate and the safety guard passed.

## Identity and operator

First-party company information identifies 株式会社J-CAM as the operator and lists the crypto lending platform BitLending as its business.

The reviewed first-party sources do not establish an exact original service launch day. Canonical `launch_date` is therefore `null`; CYA does not manufacture a date merely to create a launch event.

## Product and contract structure

Current first-party terms state that an individual contract forms when a user sends an eligible crypto asset to the company-designated wallet and the required conditions are met. BitLending's first-party introduction expressly describes the service as a crypto consumption-loan transaction in which the company borrows customer crypto and later returns the same amount/equivalent asset plus interest.

The current lending guide and product surface document BTC, ETH, XRP, SOL, USDT and USDC lending and monthly lending-fee crediting.

Canonical type is:

```text
cefi_lending
```

The product profile uses:

```text
centralized_yield
```

## Return / liquidity terms

Current terms state that users generally cannot request return during the first 30 days after an individual contract is formed. After a valid return request, the company normally owes return of same-type/same-quantity crypto within seven business days.

The same terms permit postponement when concentrated return requests or similar conditions make timely return difficult, and permit rejection in specified compliance-related circumstances. Lending-fee rates are set by the company and lending conditions may be changed for reasonable reasons.

These clauses are recorded as contractual terms and counterparty/liquidity risk, not evidence that a delay or loss has actually occurred.

## Asset / counterparty treatment

Because first-party materials expressly characterize the transaction as crypto lending / consumption loan to 株式会社J-CAM and the company owes equivalent crypto on return, CYA records:

```text
terms_status: platform_owned
```

This is a contract-structure classification indicating borrower-counterparty exposure. It is not a judgment that the platform is insolvent or unsafe, and it does not claim more about legal title or bankruptcy treatment than the reviewed sources establish.

## Marketing / performance boundary

Current BitLending surfaces publish APY figures and describe security controls, asset deployment, portfolio construction, external investment relationships, risk management and regulatory-readiness positions.

Those statements remain issuer claims. Canonical records do not convert them into:

```text
verified realized return
reserve proof
principal guarantee
solvency proof
independent security assurance
regulatory approval
```

## Outcome treatment

The service is currently presented as active and this review found no first-party evidence of a platform-wide failure, restructuring, claims process or customer-loss event.

Canonical outcome is therefore:

```text
not_applicable
```

Contractual return mechanics and an active website are not proof of universal realized repayment or solvency.

## Canonical allocation

```text
platform:   cya_plat_000106
batch:      65
evidence:   cya_src_b65_0001–0004
outcome:    one batch-65 record
product:    one batch-65 record
terms-risk: one batch-65 record
```

No event ID is allocated because an exact launch date has not been established and no adverse event is being asserted in this promotion.

## Candidate consumption

`cya_candidate_000123` is removed from the active candidate ledger and preserved in `cya-consumed-batch-65.json`, mapped to `cya_plat_000106`.

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
- Representative page screenshots when triggered
- any other triggered repository gates

After merge, verify the exact merge SHA on the production custom domain via Production Surface Check before treating platform 106 as production-confirmed.