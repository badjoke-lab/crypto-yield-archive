# Phase 10 candidate review 15 — CryptoPawn

Issue: #186  
Review date: 2026-08-13  
Candidate: `cya_candidate_000117`  
Decision: **out_of_scope**  
Canonical promotion: **none**

## Identity resolution

The Issue #186 `CryptoPawn` target resolves to the current Japanese service at:

```text
https://cryptopawn.io/
```

The service identifies **BitHills Inc.** as the provider and contractual counterparty.

First-party sources:

- https://cryptopawn.io/
- https://cryptopawn.io/faq/
- https://cryptopawn.io/company/
- https://cryptopawn.io/privacy/
- https://lp.cryptopawn.io/

A separate US service exists at `cryptopawn.com` under a different CryptoPawn identity. It must not be merged into the Japanese BitHills record merely because the brand name matches.

## Product mechanics

The reviewed BitHills first-party material consistently describes a **borrower-side crypto-collateralized loan**:

1. the customer provides crypto assets as collateral;
2. BitHills lends cash / Japanese yen against the collateral;
3. the customer pays borrowing interest;
4. after repayment, the collateral is returned under the contract terms.

The current FAQ lists BTC, ETH, USDT, XRP, USDC and other assets as collateral and describes a 50% collateral ratio, a monthly borrowing rate and a 12-month automatically renewable borrowing period.

The same FAQ states that staking rewards, airdrops, hard-fork rights and other economic value arising from the collateral during the custody period belong to BitHills, with any pass-through to the borrower left to the company's discretion.

That collateral-value clause is **not** evidence of a public depositor yield account and must not be converted into a customer yield claim.

## CYA scope decision

CYA's current canonical boundary focuses on CeFi lending/yield products in which customers place assets into an interest/yield product, together with historically significant suspension, failure, restructuring and customer-outcome records.

CryptoPawn's reviewed public product is the reverse economic direction: the user is a **borrower pledging collateral** and pays interest to obtain liquidity.

No separate public lender/investor product tied to `cryptopawn.io` was found in this pass.

Accordingly:

```text
cya_candidate_000117
CryptoPawn / BitHills Inc.
out_of_scope
proposed type: crypto_collateralized_borrowing
proposed status: active
```

This is a **scope decision only**. It is not a safety, solvency, licensing, tax, custody-quality or return-quality assessment.

## Duplicate / identity controls

Exact CYA repository searches for `CryptoPawn` and `cya_candidate_000117` returned no existing match before staging.

The Japanese `cryptopawn.io` identity is kept distinct from the separate `cryptopawn.com` identity.

## Re-review trigger

Re-open if either of the following occurs:

- BitHills launches a public customer deposit / lending / interest product in which customers supply crypto to earn yield; or
- CYA formally expands its scope to borrower-side crypto-backed lending products.

## Issue #186 completion point

CryptoPawn is the last item in the fixed execution order written in Issue #186.

After exact-final-head candidate/data/CI/build/SEO/preview validation succeeds and this staging-only scope decision is merged, the fixed execution sequence is complete. The Issue body also mentions CryptoPanda as P3 only for a lending-related relationship if evidence supports it; that optional P3 item should be handled as a separate conditional check rather than silently treated as part of the completed fixed order.
