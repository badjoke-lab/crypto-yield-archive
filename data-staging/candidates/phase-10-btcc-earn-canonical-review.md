# Phase 10 canonical promotion — BTCC Earn — 2026-08-13

Status: canonical promotion review / platform 103 / batch 62

## Candidate authority

BTCC Earn entered staging as `cya_candidate_000109` in candidate-only PR #190. The exact candidate head passed Candidate scan, Candidate draft, Validate data, CYA CI, Validate and build, SEO, and Preview Surface Check before merge.

## Canonical allocation

- platform: `cya_plat_000103`
- launch event: `cya_ev_000343`
- evidence: `cya_src_b62_0001` through `cya_src_b62_0005`
- batch: `62`

Exact repository search on main before promotion found no prior use of `cya_plat_000103` or `cya_ev_000343`.

## Scope

This is a product-scoped active `exchange_earn` record for BTCC Earn, not for the broader BTCC exchange, futures, copy trading, or unrelated products.

First-party material establishes an exact launch date of 2026-02-11. Current BTCC support continues to document Flexible Earn and Fixed Earn.

## Return-claim boundary

The launch announcement advertised Flexible Earn at up to 20% APY and a limited new-user two-day Fixed Earn promotion at 300% APY. CYA records those figures only as issuer-advertised product terms.

The current Simple Earn surface explicitly warns that annualized returns do not represent actual or guaranteed returns. Product FAQ statements about principal or principal plus interest returning to the BTCC wallet describe product mechanics rather than independently verified universal customer outcomes.

## Product mechanics

Flexible Earn currently accrues and settles interest hourly and permits redemption under current product rules. Fixed Earn is term-based; early redemption forfeits interest.

The reviewed public sources do not establish a universal underlying yield source, segregated bank-deposit structure, trust, insurance, bankruptcy-remote treatment, or principal guarantee for Earn assets.

## Operator / jurisdiction boundary

Current first-party privacy/support disclosures identify `BTCC POLAND LIMITED` in Lodz, Poland. They also preserve legacy handling involving BTCC Lithuania Limited UAB for certain historic EU accounts opened before 2026.

Canonical origin is therefore `Poland / jurisdiction-dependent`, without asserting one universal contracting entity for all historical and regional accounts.

## Outcome boundary

No reviewed source establishes insolvency, a platform-wide withdrawal freeze, restructuring, haircut, or customer claims process. Outcome is `not_applicable`, explicitly not a safety or repayment guarantee.

## Candidate consumption

`cya_candidate_000109` is removed from the active candidate queue and preserved in `cya-consumed-batch-62.json`, mapped to `cya_plat_000103`.

Cabital and Outlet Finance remain active `needs_research` candidates.

## Required exact-head checks

- candidate corpus audit / scanner guard
- Validate data
- CYA CI
- Validate and build
- SEO
- Preview Surface Check

Merge only if the exact final PR head is green. After merge, verify Cloudflare production serves the exact merge SHA and run the Production Surface Check before advancing Issue #186 to the next candidate.
