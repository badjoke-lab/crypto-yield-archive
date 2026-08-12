# Phase 10 candidate review 3 — 2026-08-12

Status: candidate-only review / three exact duplicates resolved / no draft-eligible candidate / no canonical IDs allocated

## Baseline

This review follows merged Phase 10 candidate review 2, which resolved attempted Abra Earn candidate `cya_candidate_000103` as an exact duplicate of canonical `cya_plat_000013`.

No `cya_plat_000102` or `cya_ev_000341` record is created here.

## Automated scanner result

Five active candidates were scanned against all 101 canonical platforms.

```text
Cabital:                  manual_review_required / duplicate-clear
Outlet Finance:           manual_review_required / duplicate-clear
Nebeus Renting:           exact_duplicate -> cya_plat_000046
Wirex X-Accounts:         exact_duplicate -> cya_plat_000043
YouHodler Yield Account:  exact_duplicate -> cya_plat_000042
Draft-eligible:            0
```

The attempted Wirex `add_now` decision was therefore blocked by the safety guard exactly as intended. No canonical ID was consumed.

## Nebeus — duplicate of `cya_plat_000046`

The full-corpus scanner matched the current Nebeus Renting candidate to existing canonical Nebeus by exact domain and exact product aliases.

The newly reviewed 2026 terms remain useful because current public Nebeus documentation appears internally inconsistent on the Renting commercial counterparty:

- `help.nebeus.com` material updated 2026-05-24 names `Rintral Trading, S.L.U.` (B66096686);
- `support.nebeus.com` currently exposes Renting terms naming `Rintral Capital S.L.U.` (B21849609).

This is now an evidence/entity-boundary maintenance question for `cya_plat_000046`, not a new platform candidate.

## Wirex X-Accounts — duplicate of `cya_plat_000043`

The scanner matched the candidate by exact canonical name, exact aliases and exact domain.

The newly reviewed current sources remain valuable maintenance evidence:

- current X-Account Terms state that deposited crypto ownership transfers to the applicable Wirex company;
- Wirex may use, hold or manage the assets at its discretion;
- X-Accounts are not bank/deposit accounts and are not government-insured;
- Wirex's 2026 Wirex One FAQ documents regional X-Account closure and return of balances for EEA/UK/Australia after 2026-06-30, while other regional timelines may differ.

These facts should be reviewed against existing `cya_plat_000043` in a separate evidence/status/terms maintenance PR, not represented as platform 102.

## YouHodler — duplicate of `cya_plat_000042`

The scanner matched the candidate by exact domain and exact Yield Account aliases.

Current YouHodler Yield and jurisdiction-specific Terms may support a refresh of the existing platform's current service, entity and product-boundary evidence. They do not justify a second canonical identity.

## Remaining active candidates

After resolving the three duplicates, the active queue returns to:

```text
Cabital:         needs_research / duplicate-clear
Outlet Finance:  needs_research / duplicate-clear
```

Both remain below public-quality threshold. Their evidence bar is not lowered merely to allocate platform 102.

## Result

Nebeus, Wirex and YouHodler are moved to `cya-consumed-duplicate-review-phase-10-3.json`. Their newly reviewed sources should be handled as existing-record maintenance work where useful.

The next growth search must query the canonical corpus through the hardened scanner before any `add_now` promotion. Platform `cya_plat_000102` and event `cya_ev_000341` remain unused.
