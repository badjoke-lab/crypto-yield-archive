# Phase 10 candidate review 5 — MEXC Earn — 2026-08-13

Status: candidate-only review / `duplicate` / canonical `cya_plat_000073` / no canonical IDs allocated

## Baseline

This review starts from production-verified main SHA:

```text
8919e4d2f2bfcc1d723561db0e7e97f647c44b13
```

Current production-verified canonical corpus:

```text
Platforms:          102
Events:             337
Evidence:           610
Customer outcomes:  102
Product profiles:   143
Terms risk:         102
Claims ongoing:      18
```

IZAKA-YA platform 102 passed exact-merge-SHA Production Surface Check before this MEXC Earn lane began.

This PR is staging-only. It does not create a public platform record and does not allocate canonical platform/event IDs.

## Initial review

Current first-party evidence confirms an active MEXC yield service covering Flexible Savings, Fixed Savings, On-Chain Earn and Auto-Earn.

The current MEXC Earn Service Agreement states that users deposit, stake, or allocate digital assets for a fixed or flexible period to generate Return. Current MEXC materials also separate centralized savings products from On-Chain Earn, where third-party DApps and protocols operate underlying opportunities.

The initial candidate was staged as:

```text
cya_candidate_000108
MEXC Earn
add_now
```

That provisional decision was intentionally subject to the hardened full-corpus scanner.

## Scanner result

The exact-head Phase 10 Candidate scan blocked the provisional `add_now` decision:

```text
exact_duplicate -> cya_plat_000073
```

Direct canonical inspection then confirmed:

```text
cya_plat_000073
slug: mexc-savings
canonical_name: MEXC Savings
aliases:
  MEXC Earn Savings
  MEXC Flexible Savings
  MEXC Fixed Savings
status: active
```

The existing record is a product-scoped MEXC Savings identity at `mexc.com` and already documents current 2026 Flexible/Fixed Savings behavior, variable non-guaranteed APR, asset-use/principal-loss risks, and the Feb 4, 2026 change from daily to hourly Flexible Savings interest calculation.

Therefore the correct decision is:

```text
duplicate
matched platform: cya_plat_000073
```

No new canonical platform ID is justified.

## Product-scope boundary

The broader current MEXC umbrella also includes:

```text
On-Chain Earn
Hold and Earn
Futures Earn
other Earn families
```

Canonical platform 73 explicitly scopes itself to Flexible Savings and Fixed Savings and states that other MEXC Earn families are outside that identity unless separately reviewed.

This review does not silently broaden platform 73 merely because current navigation uses the umbrella `MEXC Earn` label. A future separate product candidate would need its own identity and evidence analysis rather than reusing the umbrella name to create a duplicate of Savings.

## Return-claim boundary

MEXC's current legal terms state that published APR/APY or representations of possible return are estimates and are not guaranteed.

CYA therefore continues to treat any MEXC Earn/Savings rate as:

```text
issuer-advertised / estimated return
```

not as:

```text
verified realized customer yield
proof of principal protection
proof of solvency
proof of universal payout
```

The dynamic live Earn page can display high headline estimated APR values for individual products. Those changing values are not durable canonical facts without dated product/event evidence and conditions.

## Current maintenance review

The newly reviewed 2026 sources materially confirm, rather than contradict, the existing platform 73 record:

- Flexible Savings changed from daily to hourly interest effective 2026-02-04.
- Current Earn terms state APR is variable and not guaranteed.
- Fixed Savings remains term-locked under current terms.
- MEXC can add/remove individual Savings products.
- Current broader Earn terms describe On-Chain Earn as third-party DApp/protocol exposure.

Because platform 73 was already last verified on 2026-08-09 with the March 2026 Earn agreement and the same hourly-interest update, this candidate review does not create a redundant four-day-later canonical maintenance PR merely to restate unchanged facts.

## Legal / jurisdiction boundary

Current Earn terms identify `MEXC Global`; the broader User Agreement identifies `MEXC Trading Platform` and affiliates without establishing one unambiguous incorporation jurisdiction for the Earn contracting entity in the reviewed public text.

The existing canonical record uses:

```text
Global / jurisdiction-dependent
```

This review finds no basis to replace that with an inferred Seychelles or other country label.

Changing prohibited-jurisdiction lists remain service-availability context, not operator-origin evidence.

## Candidate ledger handling

The staged ID remains historically traceable as:

```text
cya_candidate_000108
```

It is removed from the active candidate ledger and preserved in:

```text
data-staging/candidates/cya-consumed-duplicate-review-phase-10-5.json
```

mapped to:

```text
cya_plat_000073
```

The original external watchlist remains discovery-only and is not used as canonical evidence.

## Existing queue

Cabital and Outlet Finance remain `needs_research` with unchanged evidence thresholds.

Active queue after this duplicate review:

```text
Cabital:        needs_research
Outlet Finance: needs_research
```

## Next action

Re-run the exact-head candidate corpus audit, scanner/guard, data validation, CYA CI, build/SEO and preview checks after removing MEXC Earn from the active ledger.

If all checks pass, merge this duplicate-review PR. No canonical promotion PR is needed for MEXC Earn/Savings. Issue #186 then advances directly to the next discovery candidate, BTCC Earn.
