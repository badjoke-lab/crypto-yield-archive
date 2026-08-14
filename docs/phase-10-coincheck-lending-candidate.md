# Phase 10 — Coincheck Lending candidate review

Date: 2026-08-14
Parent: #203
Candidate issue: #217

## Decision

Stage `cya_candidate_000125` as `add_now`, subject to the hardened exact-head candidate scanner.

## Identity

- Service: Coincheck 貸暗号資産サービス / Coincheck Lending
- Operator: コインチェック株式会社
- Domain: `coincheck.com`
- Scope: centralized crypto-asset lending

## Current first-party basis

The current Coincheck lending page defines a fixed-term crypto-asset consumption-loan contract: a customer lends crypto to Coincheck, and at maturity Coincheck states that it returns the same quantity/equivalent asset plus a usage fee paid in that crypto.

Current Coincheck FAQ pages updated in 2026 document active service registration, lending applications, asset/term borrowing caps and current 14/30/90/180/365-day rate terms.

## Counterparty / protection boundary

The current product page expressly states that this lending service is not provided as a crypto-asset exchange service under the exchange-business framework, Coincheck-borrowed assets are not subject to that framework's segregated-management requirements, the consumption-loan contract is unsecured, the service is not a deposit or deposit-insurance product, and assets may not be returned if Coincheck fails.

Coincheck's exchange-business registration must therefore not be transformed into a principal-protection claim for the separate lending contract.

Published annualized rates, operational statements and security/regulatory descriptions remain issuer statements, not independently verified realized returns, reserve proof, guarantees, insurance or solvency evidence.

## History boundary

A first-party corporate notice records a 2023-03-22 amendment to the Coincheck lending terms, establishing product history by that date. The reviewed evidence does not establish the exact original launch day, so no launch date is invented at candidate stage.

## Duplicate pre-check

Exact repository searches for `Coincheck 貸暗号資産`, `coincheck.com/ja/lending`, and `cya_candidate_000125` returned no indexed CYA identity match before allocation.

The hardened full-corpus scanner on the exact PR head is authoritative. Promotion must stop on exact, probable or ambiguous duplicate.
