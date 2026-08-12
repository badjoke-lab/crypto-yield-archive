# Phase 10 candidate review 1 — 2026-08-12

Status: candidate-only review / no canonical IDs allocated

## Baseline

This review begins only after the XORA evidence-sufficiency audit merged as PR #181 and exact merge SHA `3b49f0cdad7d195dfe4bc5904a686a5ba4f6a85f` passed Production Surface Check #202.

Canonical baseline after that audit:

```text
Platforms:          101
Events:             335
Evidence:           598
Customer outcomes:  101
Product profiles:   142
Terms risk:         101
Corpus blockers:      0
Quality debt:         23
```

No platform 102 or event 341 record is created by this review.

## Goldfinch — out_of_scope

Goldfinch governance GIP-87 proposed moving the legacy protocol into recovery-only maintenance mode and winding down Goldfinch Prime. A July 7, 2026 governance follow-up states that all Prime investors were fully redeemed, no new deposits would be accepted, and the Prime contract was paused, while legacy V1 borrower pools remained in repayment or recovery.

Those facts are unusually well documented, but they do not solve the scope problem. CYA's fixed README focuses on CeFi lending/yield and explicitly does not prioritize DeFi lending protocols or pool-level records. Goldfinch is fundamentally a DeFi protocol, and Goldfinch Prime was an on-chain product. It is therefore removed from the active Phase 10 queue as `out_of_scope`, with the rejection history preserved rather than silently deleted.

This is a registry-scope decision, not a negative finding about Goldfinch.

## Cabital — needs_research

Cabital remains CYA-relevant and duplicate-clear.

Newly confirmed boundary:

- WOO X states that its Cabital fiat service integration terminated effective 2022-11-17.
- That proves a partner-integration termination, not a platform-wide Cabital shutdown, insolvency, migration, or customer repayment outcome.
- UK `CABITAL GLOBAL LIMITED` company 14888741 was incorporated in 2023 and dissolved in 2024. Because that incorporation post-dates the earlier Cabital Earn operation, it must not be silently treated as the historical operating entity.

Promotion remains blocked on the original operating legal entity, first-party Earn terms/custody, platform-wide closure chronology, and customer outcome.

## Outlet Finance — needs_research

Outlet Finance remains CYA-relevant and duplicate-clear.

Current evidence supports the product boundary:

- Apple's listing identifies `Outlet Finance Inc` as the developer and describes a digital-asset rewards product where user funds were converted to cryptocurrency and put to work for monthly rewards.
- Patrick Manfra's Outlet publication documents the product's crypto-lending / DAI-lending origin.
- Product Hunt preserves direct maker statements and the consumer crypto-wallet positioning.

Closure evidence is not yet strong enough for canonical promotion:

- one secondary review says Outlet closed in early 2023;
- Dealroom says operations had ceased by October 2023;
- Apple's app history shows version 5.0.3 dated 2023-02-21.

Those facts are compatible with a 2023 shutdown but do not establish an exact closure date, first-party closure process, or customer repayment outcome. Promotion remains blocked on first-party closure/customer communications, legal entity registration, historical terms/custody, and final customer-fund outcome.

## Result

```text
Goldfinch:      out_of_scope -> rejected history
Cabital:        needs_research
Outlet Finance: needs_research
Canonical IDs:  none allocated
```

The next Phase 10 action is to seek evidence-rich CeFi candidates rather than lowering the bar on Cabital or Outlet merely to consume `cya_plat_000102`.
