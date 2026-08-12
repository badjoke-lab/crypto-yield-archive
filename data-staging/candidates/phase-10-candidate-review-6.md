# Phase 10 candidate review 6 — BTCC Earn — 2026-08-13

Status: candidate-only review / BTCC Earn staged `add_now` / canonical IDs not allocated

## Baseline

This review starts from current main SHA:

```text
83642d541ad3bb9c338a92b138a312b96e6f482d
```

The canonical public corpus remains at the production-verified platform-102 baseline because the intervening MEXC review was duplicate-only and changed no public registry data:

```text
Platforms:          102
Events:             337
Evidence:           610
Customer outcomes:  102
Product profiles:   143
Terms risk:         102
Claims ongoing:      18
```

This PR is staging-only. It does not create a public BTCC Earn record and does not allocate canonical platform/event IDs.

## BTCC Earn — add_now candidate

BTCC Earn is a direct CYA scope match.

First-party launch material establishes:

```text
Launch date: 2026-02-11
Product: BTCC Earn
Flexible Earn advertised APY: up to 20%
New-user Fixed Earn promotion: 300% APY / 2-day term
```

Current first-party support continues to define BTCC Earn as an interest-earning product with both Flexible Earn and Fixed Earn.

## Product mechanics

Current official FAQ documentation states:

### Flexible Earn

- available to all users;
- interest starts from the hour after subscription;
- interest is settled to the wallet hourly;
- users can redeem at any time;
- principal is returned to the wallet after successful redemption.

### Fixed Earn

- currently limited to new users registered during the prior seven days;
- interest starts from the hour after subscription;
- the reviewed current fixed product uses a defined term;
- principal plus interest are described as returning to the wallet at maturity;
- early redemption forfeits interest and returns only principal.

The FAQ also states that more than ten subscribe/redeem actions within 24 hours can trigger high-frequency risk-control restrictions.

These statements establish product mechanics. They do not prove universal realized repayment or yield.

## Yield-claim boundary

BTCC's launch announcement advertised:

```text
Flexible Earn: up to 20% APY
New-user Fixed Earn: 300% APY / 2 days
```

A later first-party milestone announcement repeated the same promotional structure while claiming more than 50 million USDT in subscriptions.

CYA must preserve all of those figures as issuer claims. They are not independent evidence of:

```text
realized customer return
principal protection
solvency
universal payout
independent subscription totals
```

The current Simple Earn surface includes an explicit warning that annualized return does not represent actual or guaranteed returns. That warning controls the interpretation of headline rates in this review.

## Operator / jurisdiction boundary

Current first-party support and privacy surfaces identify:

```text
BTCC POLAND LIMITED ("BTCC")
Lodz, Poland
company registration: 0001129321
```

The same current disclosures state that legacy payment and information services for historic EU accounts opened before 2026 could have been processed through BTCC Lithuania Limited UAB, which is not actively soliciting new clients after 2025-12-31.

The candidate therefore uses:

```text
Poland / jurisdiction-dependent
```

This is not a claim that every historical or current account worldwide contracts with the same entity. Regional service availability and account history remain jurisdiction-dependent.

The current support footer also describes BTCC Poland as registered in Poland's virtual-currency register. CYA should preserve that as an attributed current operator disclosure if needed, but registration language is not converted into a broad safety, deposit-insurance, or investment-protection guarantee.

## Outcome boundary

No reviewed source establishes:

```text
insolvency
platform-wide withdrawal freeze
restructuring
haircut
customer claims process
```

Accordingly the candidate is active. Product instructions saying principal or principal plus interest return to the wallet are not promoted into a historical customer-recovery conclusion.

## Duplicate and ID controls

Exact repository searches before staging found no CYA identity match for:

```text
BTCC Earn
BTCC Savings
btcc.com
```

Exact repository search also found no prior use of:

```text
cya_candidate_000109
```

The candidate is therefore provisionally assigned:

```text
cya_candidate_000109
```

The candidate corpus audit and hardened full-corpus scanner remain authoritative. If they detect a hidden consumed/rejected ID or canonical identity match, the staging ID or decision must be corrected before merge.

## Existing queue

Cabital and Outlet Finance remain `needs_research` with unchanged evidence thresholds.

Expected active queue on this candidate head:

```text
Cabital:        needs_research
Outlet Finance: needs_research
BTCC Earn:      add_now (subject to scanner)
```

## Next action

Run the exact-head candidate corpus audit, full-corpus scanner, scanner guard, candidate draft generator, data validation, CYA CI, build/SEO and preview checks.

If BTCC Earn remains duplicate-clear, ID-collision-clear and draft-eligible, merge this candidate-only review first. Canonical promotion must then occur in a separate reviewed PR. Only that later PR may allocate the next canonical platform, event and evidence IDs.
