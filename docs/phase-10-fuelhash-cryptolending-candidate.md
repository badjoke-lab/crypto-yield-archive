# Phase 10 — FUELHASH CRYPTOLENDING candidate review

Date: 2026-08-15
Parent: #203
Candidate issue: #228

## Decision

Stage `cya_candidate_000129` as `add_now`, subject to the hardened exact-head candidate scanner.

## Identity and launch

Operator: 株式会社FUELHASH.

A first-party announcement dated 2022-11-02 states that CRYPTOLENDING would begin service on **2022-11-07**.

The current FUELHASH product surface still presents CRYPTOLENDING as a crypto lending platform.

## Contract model

Current FUELHASH Terms define CRYPTOLENDING as a service in which users lend eligible crypto assets/tokens to FUELHASH and FUELHASH owes return of the same type and quantity plus contractual interest.

The Terms define flexible lending and fixed lending. Fixed lending contains:

- the fixed-rate product presented on the service screen as `クリプトレンディング`;
- the variable-rate `クリプトレンド` / CRYPTOTREND product.

Fixed lending generally cannot be cancelled during the lending period. At maturity, principal plus interest are returned to the user's flexible-lending balance under the published mechanics.

## Legal / custody boundary

Current Terms state that the service is not crypto-asset exchange business and therefore the operator does not have the exchange-business segregated-management obligations described in the Terms.

The Terms expressly warn that if FUELHASH fails, it may be unable to return borrowed customer assets. They also state that the service is not a bank deposit or deposit-like product.

CYA should therefore describe borrower/counterparty exposure rather than imply protected exchange custody or deposit insurance.

## Marketing-claim boundary

The current marketing page separately advertises high rates, partnership with a Singapore CMS-license holder, stable operation and principal guarantee.

Those statements are operator marketing claims. They must be presented alongside the contractual insolvency/non-return risk and must not be transformed into independent CYA claims of:

- guaranteed principal recovery;
- licensing validation of the whole service;
- insurance;
- reserve proof;
- verified realized return;
- solvency.

## Duplicate pre-check

Exact repository searches for `FUELHASH`, `fuel-mining.com`, and `cya_candidate_000129` returned no indexed CYA identity match before allocation.

The hardened full-corpus scanner on the exact PR head remains authoritative. Promotion stops on exact, probable, or ambiguous duplicate.
