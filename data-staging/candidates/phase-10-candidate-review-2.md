# Phase 10 candidate review 2 — 2026-08-12

Status: candidate-only review / one draft-eligible candidate proposed / no canonical IDs allocated

## Baseline

This review starts from production-verified main SHA `453ce7d42a6e950cf309a26bd151d34637db48b2` after Phase 10 candidate review 1 passed Production Surface Check #203.

No `cya_plat_000102` or `cya_ev_000341` record is created here.

## Abra Earn — add_now pending scanner

Abra Earn is a strong CeFi interest-account candidate with unusually strong regulator-sourced history.

Reviewed public-authority evidence supports:

- Plutus Lending LLC did business as Abra and operated the retail `Abra Earn` product;
- the SEC states Abra Earn began around July 2020 and let users tender crypto assets to Abra for variable interest;
- the SEC records that Abra used customer crypto assets in various ways to generate income and fund interest payments;
- at peak the program held approximately $600 million, nearly $500 million from U.S. investors;
- the SEC filed settled charges in 2024 and a federal court entered final judgment on 2025-01-13 with a $1.65 million civil penalty;
- CSBS and Washington DFI document a multistate settlement for Abra's U.S. wind-down and return of remaining virtual assets, with up to $82.1 million to be returned to customers;
- Washington securities records separately identify Abra Earn as an interest-bearing crypto account offered from July 2020 through October 2022 in the state.

Boundary:

- do not infer that every customer was fully repaid merely from the $82.1 million settlement ceiling;
- keep Abra Earn distinct from the later accredited-investor Abra Boost product;
- do not generalize the ended U.S. Earn product into a claim that every Abra business globally ceased.

Candidate decision: `add_now`, subject to the hardened full-corpus duplicate scanner and candidate-draft review.

## Nebeus Renting — needs_research

Nebeus is clearly within CYA's CeFi lending/yield scope and remains active.

Current first-party material supports:

- the platform currently markets Renting/earn services;
- users delegate eligible crypto assets for fixed-period rewards and lock-up periods;
- product terms describe market, operational and regulatory risk and no deposit-guarantee/investor-compensation coverage;
- Nebeus separately provides custody and crypto-backed lending services.

A material legal-entity / product-counterparty inconsistency remains unresolved:

- `help.nebeus.com` Renting Terms updated 2026-05-24 name `Rintral Trading, S.L.U.` (B66096686) and describe it as the product operator;
- `support.nebeus.com` currently exposes Renting Terms naming `Rintral Capital S.L.U.` (B21849609) as the commercial counterparty while a group Platform Operator handles custody/technical operations.

The public documentation may reflect a migration, product restructuring, or stale knowledge-base page. CYA must not choose one entity silently.

Candidate decision: `needs_research` until the currently governing activation terms, counterparty relationship, and Renting-specific ownership/custody treatment are resolved.

## Existing candidates

Cabital and Outlet Finance remain `needs_research`; their evidence thresholds are not lowered to accelerate growth.

## Result before automated gate

```text
Cabital:         needs_research
Outlet Finance:  needs_research
Abra Earn:       add_now -> scanner/draft required
Nebeus Renting:  needs_research
Canonical IDs:   none allocated
```

If Abra is duplicate-clear and draft-eligible, canonical promotion must occur in a separate PR beginning with `cya_plat_000102`. If the scanner finds a collision or material scope issue, no canonical ID is consumed.
