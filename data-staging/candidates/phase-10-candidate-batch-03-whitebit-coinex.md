# Phase 10 candidate batch 03 — WhiteBIT and CoinEx

Parent: #203  
Review date: 2026-08-13  
Canonical mutation: **none in this PR**

## WhiteBIT — `cya_candidate_000120`

WhiteBIT first-party material establishes a current Crypto Lending product under the WhiteBIT Earn / U EARN family. The User Agreement describes Crypto Lending as lending digital assets to WhiteBIT for income. Current product/API documentation distinguishes flexible plans from fixed plans, including accrual, maturity and early-close behavior.

First-party sources:

- https://whitebit.com/terms
- https://whitebit.com/earn/crypto-lending/list/flex
- https://whitebit.com/earn/crypto-lending/list/fixed
- https://docs.whitebit.com/products/lending/overview
- https://blog.whitebit.com/en/what-is-whitebit-earn/
- https://blog.whitebit.com/en/new-long-term-crypto-lending-plans/

Provisional decision: `add_now`, subject to the hardened scanner.

Rates, safety language and exchange statements about use of funds remain issuer claims rather than verified realized returns, guarantees, reserve proof or solvency evidence.

## CoinEx — `cya_candidate_000121`

CoinEx first-party material establishes a Financial Account product in which supported assets are transferred from Spot to a financial balance to earn interest. CoinEx states that a share of margin-borrowing interest is allocated to Financial Account holders, and its current/historical announcements document supported-asset changes, compound-interest behavior and transfer/redemption liquidity mechanics.

First-party sources:

- https://support.coinex.com/hc/en-us/articles/360034808894-How-to-Enter-Financial-Account
- https://www.coinex.com/en/announcements/detail/39787657305108
- https://www.coinex.com/en/announcements/detail/33948523678868
- https://www.coinex.com/en/blog/1605-coinex-providing-versatile-financial-options
- https://docs.coinex.com/api/v2/assets/balance/http/get-financial-balance

Provisional decision: `add_now`, subject to the hardened scanner.

A Financial Account transfer queue when idle funds are insufficient is recorded as a product/liquidity mechanic, not as evidence of insolvency or customer loss.

## Duplicate gate

Pre-staging exact repository searches returned no indexed identity match for `WhiteBIT` or `CoinEx`, and candidate IDs `cya_candidate_000120` / `cya_candidate_000121` were unused.

Those searches are not authoritative. The exact-head hardened candidate scanner must classify each candidate as `new_candidate` / draft-eligible before any canonical promotion.

If either candidate is an exact/probable/ambiguous canonical match, close the candidate path without assigning a new platform ID.

## Promotion boundary

No canonical IDs are allocated here.

Any successful candidate is promoted in a separate canonical PR, with full platform/event/evidence/customer-outcome/product/terms-risk coverage and exact-merge-SHA production verification before the next platform is attempted.
