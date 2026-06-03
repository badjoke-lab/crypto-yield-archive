# Data Quality Pass

Status: active phase 2 checklist

This document tracks the first data-quality pass for Crypto Yield Archive.

## Current dataset

- platforms: 8
- events: 52 target displayed count / 42 canonical event records currently loaded from data files depending on build state
- evidence: 31
- outcomes: 8
- products: 16
- terms-risk: 8

## Quality principle

CYA should prefer conservative records over confident but weak claims.

Do not upgrade confidence unless at least one of the following exists:

- official statement
- bankruptcy case portal or docket document
- court document
- regulatory notice
- archived original page
- highly reliable reporting that directly supports the claim

## Priority 1: replace low reliability evidence

Initial low-reliability candidates should be verified or replaced first.

Known targets:

- Haru Invest original service-interruption notice candidate
- CoinLoan withdrawal-limit coverage
- CoinLoan insolvency context coverage
- Hodlnaut Terra exposure context if URL/source quality is weak

Action:

- verify URL
- add archive URL where possible
- replace with direct court / administrator / official source if available
- keep reliability low if not verified

## Priority 2: strengthen major-case evidence

Major cases should eventually have direct court / bankruptcy evidence.

Target platforms:

- Celsius
- BlockFi
- Voyager
- Genesis
- Hodlnaut

Action:

- add direct case portals
- add plan confirmation or liquidation-plan references
- add customer distribution references
- keep secondary reporting as supporting evidence, not the only source

## Priority 3: outcome clarity

Every platform has an outcome record, but several are still unresolved or unknown.

Needs stronger outcome source:

- Hodlnaut
- Vauld
- Haru Invest
- CoinLoan

Action:

- add liquidation / creditor process / official update references
- keep outcome_status as claims_ongoing or unknown until recovery is verified
- do not invent estimated recovery percentages

## Priority 4: terms-risk clarity

Unknown terms-risk is acceptable when product-level legal treatment is not established.

Needs stronger terms-risk source:

- Hodlnaut
- Vauld
- Haru Invest
- CoinLoan

Action:

- keep unknown unless source clearly supports customer_owned / platform_owned / varies_by_product
- add notes explaining why unknown is used

## Commands

Run:

```bash
npm run validate
npm run quality
npm run build
```

Use `npm run quality` to list:

- low reliability evidence
- medium reliability evidence
- low confidence platforms
- low confidence events
- unknown or ongoing outcomes
- unknown terms-risk records
- platforms with fewer than 3 evidence records

## Completion criteria for first quality pass

The first quality pass is complete when:

- all low-reliability evidence has either been verified, replaced, or explicitly marked as pending
- all 8 seed platforms have at least 3 evidence records, or a documented reason for fewer
- all outcome records explain uncertainty clearly
- all terms-risk unknown values explain why they are unknown
- the methodology page matches actual data behavior
