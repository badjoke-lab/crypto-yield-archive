# Phase 10 candidate review 4 — 2026-08-13

Status: candidate-only review / IZAKA-YA staged `add_now` / canonical IDs not allocated

## Baseline

This review starts from main SHA `6bfba0301d177288e8701da4699ab4c999c384af` after Phase 10 candidate review 3. The canonical corpus remains:

```text
Platforms: 101
Next platform ID: cya_plat_000102
Next event ID: cya_ev_000341
```

This PR is staging-only. It does not create a public platform record and does not allocate canonical IDs.

## IZAKA-YA — add_now candidate

IZAKA-YA is a direct CYA scope match rather than a generic exchange Earn surface.

Current first-party evidence supports:

- an active account-based crypto lending wallet;
- user deposit of crypto into the IZAKA-YA wallet before lending;
- user-selected lending amount and period;
- periodic interest paid by IZAKA-YA;
- estimated interest and contract-content review before application;
- automatic wallet credit of principal plus interest after the lending lock expires;
- a public operator identity, Izakaya Limited, with a Hong Kong address;
- a stated service-start month of December 2023, without an exact day;
- temporary 2026 promotional lending campaigns including issuer-advertised 33% APY and 100% annualized-rate offers.

The current public service page also states a normal lending surface of up to 12% APY with daily interest and lock periods from one day to one year.

## Terms / custody boundary

Promotion readiness does **not** mean all legal and custody questions are resolved.

The public website terms are generic site terms rather than complete lending-product terms. They state Cayman Islands governing law, while the company page identifies Izakaya Limited and a Hong Kong operating address. The logged-in lending flow appears to present separate contract content before a user applies.

Therefore canonical drafting must not infer, without further evidence:

```text
exact lending counterparty beyond the named service/operator
legal ownership transfer of deposited assets
deposit insurance or investor compensation coverage
regulatory licensing or authorization
asset rehypothecation / deployment mechanics
verified realized customer yield
```

These uncertainties are suitable for explicit `unknown` / `unclear` terms-risk fields; they do not erase the directly evidenced existence of the current lending product.

## Yield-claim boundary

Rates presented by IZAKA-YA are issuer claims, not independently verified realized returns.

Examples reviewed during this candidate pass include:

```text
normal public surface: up to 12% APY
June 2026 promotion: 33% APY / 3-day term
July 2026 promotion: 100% annualized rate / 30-day term
```

CYA must preserve those as advertised product/campaign terms only. They are not evidence that every user earned the headline rate or that principal/interest were universally paid as promised.

## Outcome boundary

No failure, withdrawal freeze, insolvency, haircut, or other adverse customer-outcome event was established in this review.

Likewise, the support instruction that principal and interest are automatically credited at lock expiry is a product-mechanics statement, not proof of universal realized repayment. A future active canonical record should not manufacture a historical customer outcome from that documentation.

## Duplicate check

Exact repository searches before staging found no existing match for:

```text
IZAKA-YA
IZAKAYA
izakaya.tech
```

The first attempted staging ID, `cya_candidate_000050`, was rejected by corpus audit because that ID already exists in historical consumed ledger `cya-consumed-batch-35.json`. Phase 10 consumed ledgers were then read directly and confirmed the recent assignments:

```text
cya_candidate_000103  Abra Earn
cya_candidate_000104  Nebeus Renting
cya_candidate_000105  Wirex X-Accounts
cya_candidate_000106  YouHodler Yield Account
```

An exact repository search found no use of the next ID. IZAKA-YA is therefore assigned:

```text
cya_candidate_000107
```

No canonical platform or event ID is allocated here. The hardened full-corpus candidate scanner and corpus audit remain authoritative for duplicate and ID-collision blocking.

## Existing queue

Cabital and Outlet Finance remain `needs_research`. Their evidence thresholds are unchanged.

With this review the active queue is expected to contain:

```text
Cabital:         needs_research
Outlet Finance:  needs_research
IZAKA-YA:        add_now (subject to scanner)
```

## Next action

Run the candidate audit, full-corpus scanner, scanner guard and draft generator on the exact PR head. If IZAKA-YA remains duplicate-clear and draft-eligible, merge this candidate-only review first. Canonical promotion must then occur in a separate reviewed PR; only that later PR may allocate `cya_plat_000102` and associated canonical records.
