# Phase 10 — SBI VC Trade 貸コイン candidate review

Date: 2026-08-15
Parent: #203
Candidate issue: #231

## Decision

Stage `cya_candidate_000130` as `add_now`, subject to the hardened exact-head candidate scanner.

## Identity and launch

Operator: **SBI VCトレード株式会社**.

A first-party announcement dated 2022-01-26 states that the `貸コイン` lending service began that day on the new VCTRADE service. The current lending page remains live.

## Current product model

The current service page describes `貸コイン` as a `消費貸借取引` in which customers lend eligible crypto assets / electronic payment instruments to SBI VC Trade and receive the same asset principal plus a contractual usage/lending fee under the applicable course terms.

Current public materials state that lending cannot be cancelled mid-term after the applicable cutoff / contract formation.

The current FAQ expressly identifies disadvantages including market-price risk, return risk arising because lent assets are managed as SBI VC Trade assets, and inability to cancel during the lending period.

## Legal / custody boundary

A first-party Flare lending risk disclosure documents the lending legal/economic model in detail. For that lending contract, it states that:

- lent assets fall outside the Payment Services Act segregated-management treatment applicable to exchange custody;
- the customer does not obtain the exchange-custody priority right described in the disclosure;
- SBI VC Trade may relend borrowed assets;
- the lending is unsecured;
- company insolvency can cause partial or total non-return.

This is strong first-party evidence of the lending model but is product-specific. Do **not** assume every current asset/course uses the Flare-specific contract verbatim. Canonical promotion must preserve course/product-specific differences.

## Registration / safety boundary

SBI VC Trade's crypto-asset exchange registration does not mean lent principal is segregated, deposit-insured, protected by exchange-custody priority, or guaranteed. Its own lending risk disclosure expressly distinguishes lent assets from exchange-custody segregated assets.

## Rate / evidence boundary

Current and campaign annual rates are issuer product terms. They are not independently verified realized returns, guarantees, reserve proof, insurance or solvency evidence.

The current product now covers multiple crypto assets and electronic payment instruments, including newer product-specific courses such as JPYSC. Do not silently collapse all present and historical courses into one identical contract form.

## Duplicate pre-check

Exact repository searches for `SBI VC`, `sbivc.co.jp`, `貸コイン`, and `cya_candidate_000130` returned no indexed CYA identity match before allocation.

The hardened full-corpus scanner on the exact PR head remains authoritative. Promotion stops on exact, probable, or ambiguous duplicate.
