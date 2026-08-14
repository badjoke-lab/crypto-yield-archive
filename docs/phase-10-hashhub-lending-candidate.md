# Phase 10 — HashHub Lending candidate review

Date: 2026-08-14
Parent: #203
Candidate issue: #214

## Decision

Stage `cya_candidate_000124` as `add_now`, subject to the hardened exact-head candidate scanner.

## Identity

- Service: HashHub Lending / HashHubレンディング
- Current operator: SBIデジタルファイナンス株式会社 (SBI Digital Finance Inc.)
- Domain: `hashhub-lending.com`
- Scope: centralized crypto-asset lending

## First-party basis

Current first-party materials establish that customers lend crypto assets to the operator and receive lending fees according to published lending conditions. The operator states that borrowed assets may be deployed through arbitrage, third-party lending, staking and DeFi.

Current July 2026 materials show active BTC, ETH, USDC, XRP and SOL lending. DAI new lending intake ended on 2026-05-20 and DAI lending-fee accrual stopped from 2026-07-01.

Return materials state that return requests are processed for return at the beginning of the second month after application, with asset-specific return fees.

## Historical event

A first-party company-split notice establishes an exact event on 2024-04-01: HashHub Lending-related contractual rights and obligations transferred from 株式会社HashHub to newly established SBIデジタルファイナンス株式会社. This should be preserved as canonical history if the candidate passes the gate.

## Risk / evidence boundary

First-party FAQ characterizes the arrangement as a crypto-asset (quasi-)consumption loan and states that the operator is neither a crypto exchange nor a custodian. Treat this as the operator's legal characterization, not independent legal advice.

Published lending rates, safety/risk-management language, investment-strategy descriptions and regulatory interpretations are issuer claims. They are not independently verified realized returns, reserve proof, guarantees, insurance, solvency evidence or independent legal conclusions.

## Duplicate pre-check

Exact repository searches for `HashHub Lending`, `hashhub-lending.com`, and `SBI Digital Finance` returned no indexed canonical/staging identity match before allocation.

The hardened full-corpus scanner on the exact PR head is authoritative. Promotion must stop if it returns an exact, probable or ambiguous duplicate.
