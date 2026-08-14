# Phase 10 — GMO Coin Lending Basic candidate review

Date: 2026-08-14
Parent: #203
Candidate issue: #220

## Decision

Stage `cya_candidate_000126` as `add_now`, subject to the hardened exact-head candidate scanner.

## Scope

This candidate is **GMOコイン 貸暗号資産ベーシック** only.

Do not silently combine `貸暗号資産プレミアム`. Premium adds derivative / yen-conversion mechanics and requires a separate product/history decision.

## Current first-party basis

The current GMO Coin lending page describes Basic as a fixed-term arrangement in which customers lend crypto assets to GMO Coin and receive lending fees under the applicable course.

Current 2026 first-party recruitment notices confirm continued Basic lending intake for selected assets and terms, subject to borrowing capacity.

The current product/risk disclosure states that:

- the service is not a deposit or deposit-insurance product;
- the transaction is a crypto-asset consumption-loan arrangement;
- lent assets may not be returned if GMO Coin fails;
- the lending transaction is not a crypto-asset exchange transaction;
- borrowed assets are not subject to the segregated-management requirements applicable to the exchange business;
- loaned assets cannot be freely sold/withdrawn during the contractual term.

Published lending rates, capacity, courses and operational/risk statements remain issuer terms/claims and are not independently verified realized returns, guarantees, reserves or solvency evidence.

## Duplicate pre-check

Exact repository searches for `GMOコイン 貸暗号資産`, `coin.z.com/jp/corp/product/info/lending`, and `cya_candidate_000126` returned no indexed CYA identity match before allocation.

The hardened full-corpus scanner on the exact PR head is authoritative. Promotion stops on exact, probable or ambiguous duplicate.
