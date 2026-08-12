# Phase 10 candidate review 5 — MEXC Earn — 2026-08-13

Status: candidate-only review / MEXC Earn staged `add_now` / canonical IDs not allocated

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

## MEXC Earn — add_now candidate

MEXC Earn is a direct CYA scope match.

Current first-party evidence supports an active MEXC yield service covering:

```text
Flexible Savings
Fixed Savings
On-Chain Earn
Auto-Earn
```

MEXC's current Earn page describes the service as a one-stop platform for earning from crypto holdings. The current Earn guide says Flexible Savings allows interest with flexible redemption, Fixed Savings locks assets for a selected term, and On-Chain Earn provides access to on-chain earning opportunities from an MEXC Spot account.

The current MEXC Earn Service Agreement states that users deposit, stake, or allocate digital assets for a fixed or flexible period to generate Return. It also separates the centralized savings products from On-Chain Earn, where third-party DApps and protocols operate the underlying opportunities.

## Status and product-maintenance evidence

The service remains active in 2026.

Two current first-party maintenance events were reviewed:

- Flexible Savings interest calculation changed from daily to hourly effective 2026-02-04.
- MEXC announced delisting of selected Fixed/Flexible Savings products effective 2026-02-27 while stating that existing stakings could continue under their original terms.

These are product-level maintenance changes. They do not establish platform failure, insolvency, or an adverse customer-outcome event.

## Return-claim boundary

MEXC's current legal terms explicitly state that published APR/APY or representations of possible return are estimates and are not guaranteed.

CYA must therefore preserve any current or historical MEXC Earn rate as:

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

The live Earn page is dynamic and can display very high headline estimated APR values for individual products. Those dynamic values should not be promoted into a durable canonical fact without a dated product/event source and explicit conditions.

## Fixed / flexible / on-chain boundary

The product family contains materially different risk and redemption models.

### Flexible Savings

Current terms describe flexible redemption and periodic return accrual/distribution, subject to product availability and MEXC's ability to change or delist products.

### Fixed Savings

Current terms state assets are locked until the selected term expires, after which principal and Return are credited. Product instructions are contract mechanics, not evidence of universal realized repayment.

### On-Chain Earn

Current terms state that MEXC aggregates third-party DApp/protocol opportunities. MEXC states that it does not assess, manage, operate, control, or supervise those DApps. Returns and redemption timing can depend on protocol rules, validators, network conditions, smart-contract behavior, quotas, lockups, epochs, or third-party constraints.

Canonical promotion should therefore use a centralized-yield platform classification while preserving third-party/on-chain exposure as product and terms-risk detail rather than misclassifying the whole MEXC Earn service as a decentralized platform.

## Legal-entity / jurisdiction boundary

The current Earn agreement identifies the contracting party as `MEXC Global`. The broader User Agreement identifies `MEXC Trading Platform` and affiliated companies but does not, in the reviewed public text, establish one unambiguous incorporation jurisdiction for the Earn contracting entity.

Accordingly candidate origin is:

```text
Global
```

Do not infer Seychelles or another country from historical exchange-profile material without direct current legal authority.

The Earn agreement and broader MEXC terms also contain changing prohibited-jurisdiction lists. Those are service-availability restrictions, not evidence of operator origin.

## Duplicate check

Exact repository searches before staging found no existing CYA identity match for:

```text
MEXC
MEXC Earn
mexc.com
MEXC Savings
Simple Earn
```

Exact repository search also found no prior use of:

```text
cya_candidate_000108
```

The candidate is therefore staged as:

```text
cya_candidate_000108
```

The hardened candidate corpus audit and full-corpus scanner remain authoritative. If they identify a historical consumed/rejected ID or identity collision, the staging ID or decision must be corrected before merge.

## Existing queue

Cabital and Outlet Finance remain `needs_research` with unchanged evidence thresholds.

Expected active candidate queue after this review:

```text
Cabital:        needs_research
Outlet Finance: needs_research
MEXC Earn:      add_now (subject to scanner)
```

## Next action

Run the exact-head candidate audit, full-corpus scanner, scanner guard, draft generator, data validation, CYA CI, build/SEO and preview checks.

If MEXC Earn remains duplicate-clear, ID-collision-clear and draft-eligible, merge this candidate-only review first. Canonical promotion must then occur in a separate reviewed PR and only that later PR may allocate the next canonical platform/event/evidence records.
