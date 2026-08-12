# Phase 10 candidate review 3 — 2026-08-12

Status: candidate-only review / Wirex X-Accounts proposed add_now / no canonical IDs allocated

## Baseline

This review follows merged Phase 10 candidate review 2, which resolved the attempted Abra Earn candidate as an exact duplicate of canonical `cya_plat_000013`. The active queue before this review contained Cabital, Outlet Finance and Nebeus Renting, all `needs_research`.

No `cya_plat_000102` or `cya_ev_000341` record is created here.

## Wirex X-Accounts — add_now pending scanner

Wirex X-Accounts have unusually explicit current first-party terms for CYA's custody/ownership taxonomy.

Current X-Account Terms state that:

- the product allows users to earn interest on crypto assets transferred into X-Accounts;
- Flexible, Plus and Fixed variants have distinct liquidity/lock-up rules;
- an X-Account is not a checking, savings, bank or deposit account and is not protected by government-backed depositor compensation, insurance or guarantee schemes;
- when crypto assets are deposited into an X-Account, ownership is transferred to the applicable Wirex company;
- Wirex may use, hold or manage those assets at its discretion for operational, investment or other purposes;
- Flexible X-Accounts may be withdrawn at any time, while Plus and Fixed variants impose product-specific lock/redemption periods.

Current regional transition evidence is also material. Wirex's Wirex One migration FAQ states that the old Wirex App stopped supporting transactions for EEA, UK and Australia after 2026-06-30, with X-Accounts closed and balances returned to the main account for users who had not upgraded. Other regional timelines may differ. Current Wirex status material still references X-Accounts, so the correct candidate status is `limited`, not globally `operations_ended`.

Legal-entity boundary:

- the X-Account Terms expressly make the counterparty the Wirex company identified by the user's applicable Crypto-Assets Terms;
- UK regulatory information currently identifies cryptoasset services as provided by Wirex Digital Services s.r.l., not Wirex Limited;
- CYA must preserve the jurisdiction-dependent counterparty boundary rather than inventing one global legal entity.

Candidate decision: `add_now`, subject to the full-corpus duplicate scanner and generated-draft review.

## YouHodler Yield Account — needs_research

YouHodler has strong current scope fit:

- its Yield Account currently advertises weekly returns across supported crypto assets and flexible withdrawals;
- Swiss-facing Terms identify YouHodler SA, registration `CHE-336.197.657`, as the contracting company;
- current legal materials describe AML investigation powers and broader platform services.

Promotion is not yet justified because the reviewed general terms do not establish Yield Account-specific ownership/counterparty mechanics with the same precision as Wirex, and YouHodler applies jurisdiction-specific entities and terms, including an Italian entity for some users.

Candidate decision: `needs_research` until Yield-specific custody/ownership and the applicable contractual entity are resolved.

## Existing research candidates

Cabital, Outlet Finance and Nebeus Renting remain `needs_research`; their evidence thresholds are unchanged.

## Result before automated gate

```text
Cabital:                  needs_research
Outlet Finance:           needs_research
Nebeus Renting:           needs_research
Wirex X-Accounts:         add_now -> scanner/draft required
YouHodler Yield Account:  needs_research
Canonical IDs:            none allocated
```

If Wirex is duplicate-clear and draft-eligible, canonical promotion must occur in a separate PR beginning with `cya_plat_000102`. A scanner collision consumes no canonical ID.
