# Phase 10 candidate review — BitLending

Date: 2026-08-14  
Parent: #203  
Issue: #211  
Candidate: `cya_candidate_000123`  
Decision before hardened scan: **add_now**

## Identity

BitLending is an active Japanese crypto lending service at `bitlending.jp`. First-party company information identifies 株式会社J-CAM as the operator and lists the crypto lending platform BitLending as its business.

Pre-staging exact repository searches for `BitLending`, `bitlending.jp` and `cya_candidate_000123` returned no indexed CYA identity match. The exact-head hardened candidate scanner remains authoritative.

## Product structure

First-party introductory material describes BitLending as a crypto consumption-loan service: customers lend crypto assets to BitLending for a period, after which BitLending returns the same quantity/equivalent asset plus lending fees / interest.

The current service surface and lending guide document ongoing lending for BTC, ETH, XRP, SOL, USDT and USDC, monthly lending-fee crediting and return mechanics. Current public APYs are issuer-advertised product terms and are not independently verified realized returns.

## Terms / evidence boundary

Current first-party terms govern individual crypto lending contracts and state that lending rates are determined under the agreement. The exact original service launch date has not yet been established from reviewed first-party material and must not be invented during canonical promotion.

Claims about security controls, asset deployment, portfolio construction, risk management, APY and regulatory readiness remain issuer statements unless independently verified. They must not be transformed into reserve proof, principal guarantees, solvency evidence, independent security assurance or regulatory approval.

## Candidate gate

This PR is candidate-only. It changes no canonical `data/` files and allocates no canonical platform/event/evidence/outcome/product/terms-risk ID.

Promotion stops if the hardened scanner classifies the candidate as exact/probable/ambiguous duplicate. Only `new_candidate` / draft-eligible may proceed.

## Required exact-head checks

- Candidate scan / safety guard
- Candidate draft
- Validate data
- CYA CI
- Validate and build
- SEO
- Preview Surface Check
- Representative page screenshots when triggered
- any other repository-required gate

If all required gates pass and BitLending is the draft-eligible `add_now` candidate, merge this candidate-only PR and promote it separately in a one-platform canonical PR.