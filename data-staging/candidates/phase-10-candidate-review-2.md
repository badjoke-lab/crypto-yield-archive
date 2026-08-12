# Phase 10 candidate review 2 — 2026-08-12

Status: candidate-only review / Abra exact duplicate resolved / no draft-eligible candidate / no canonical IDs allocated

## Baseline

This review starts from production-verified main SHA `453ce7d42a6e950cf309a26bd151d34637db48b2` after Phase 10 candidate review 1 passed Production Surface Check #203.

No `cya_plat_000102` or `cya_ev_000341` record is created here.

## Abra Earn — exact duplicate of canonical `cya_plat_000013`

Abra Earn was initially staged as `add_now` because SEC, CSBS and Washington regulator sources provide unusually strong product and regulatory history. The hardened full-corpus candidate scanner correctly stopped promotion and classified the candidate as an `exact_duplicate` of canonical `cya_plat_000013` by exact normalized name and alias match.

Reviewed public-authority evidence still provides useful enrichment material for the existing canonical Abra record:

- Plutus Lending LLC did business as Abra and operated the retail `Abra Earn` product;
- the SEC states Abra Earn began around July 2020 and let users tender crypto assets to Abra for variable interest;
- the SEC records that Abra used customer crypto assets in various ways to generate income and fund interest payments;
- at peak the program held approximately $600 million, nearly $500 million from U.S. investors;
- the SEC filed settled charges in 2024 and a federal court entered final judgment on 2025-01-13 with a $1.65 million civil penalty;
- CSBS and Washington DFI document a multistate U.S. wind-down and return of remaining virtual assets, with up to $82.1 million to be returned to customers.

Boundary:

- no second Abra platform identity may be created;
- no canonical platform ID is consumed;
- do not infer that every customer was fully repaid merely from the settlement ceiling;
- keep Abra Earn distinct from later Abra Boost when enriching `cya_plat_000013`;
- do not generalize the ended U.S. Earn product into a claim that every Abra business globally ceased.

The attempted candidate is removed from the active queue and preserved in `cya-consumed-duplicate-review-phase-10-2.json`.

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

## Automated gate result

The hardened scanner examined the attempted `add_now` candidate against all 101 canonical platforms and returned:

```text
Abra Earn candidate:  exact_duplicate
Canonical match:      cya_plat_000013
Eligible for draft:   false
Canonical ID used:    none
```

After resolving the duplicate, the active queue contains only manual-review candidates:

```text
Cabital:         needs_research
Outlet Finance:  needs_research
Nebeus Renting:  needs_research
Draft-eligible:  0
Canonical IDs:   none allocated
```

## Next action

Do not manufacture platform 102 from the remaining research cases. Continue evidence recovery for Nebeus/Cabital/Outlet and discover fresh CeFi lending/yield candidates against the full 101-platform corpus. Any future `add_now` candidate must pass the scanner before a separate canonical promotion PR can allocate `cya_plat_000102`.
