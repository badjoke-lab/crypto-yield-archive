# Phase 10 — BITPOINT 貸して増やす candidate review

Date: 2026-08-17
Parent: #203
Candidate issue: #272

## Decision

Reserve `cya_candidate_000133` for **BITPOINT 貸して増やす** and prepare it for the hardened candidate gate.

## Launch and current operation

BITPOINT's first-party announcement states that the crypto-asset lending service launched on **2020-11-26**. The current official service page remains live and exposes the application flow, supporting an active status as of this review.

## Contract mechanics

The official service page describes a consumption-loan contract under which the customer lends crypto assets to BITPOINT and, at contract end, receives the same type, equivalent quantity and a contractual lending fee. Current service details state that lending periods and fee rates are fixed per offering, return and lending-fee payment occur on the day after the lending period ends, and mid-term cancellation is unavailable.

## Custody and product boundary

BITPOINT explicitly states that this lending service is not a crypto-asset exchange service under the Payment Services Act and that crypto assets lent to BITPOINT are not subject to statutory segregated management. The service detail also states that it is not a deposit-like product and is not covered by deposit insurance.

CYA must therefore preserve lending counterparty exposure and must not generalize exchange-service custody protections, deposit protection, insurance, or guaranteed principal to lent balances.

## Yield and outcome boundary

Launch-campaign and current published rates are issuer product terms, not independently verified realized returns. Current contractual return mechanics do not establish universal historical repayment performance.

## Duplicate boundary

Pre-staging exact repository search for `BITPOINT` returned no indexed canonical identity match. The hardened full-corpus scanner on the exact candidate PR head remains authoritative. Canonical IDs must not be allocated before a duplicate-clear/draft-eligible result.
