# Phase 10 — post-mature growth to 125 platforms

Status: operating decision pending merge  
Project: Crypto Yield Archive (CYA)  
Recorded: 2026-08-12

## Purpose

Phase 10 resumes controlled canonical growth after the first mature-corpus milestone and the completed Phase 9A XORA incident-led exception.

The prior operating plan defined 100 platforms as the first mature corpus but did not authorize a post-100 target. Phase 9A separately authorized only XORA Finance as platform 101. This document creates the next normal growth segment without weakening the mature-corpus evidence, audit, monitoring, and production-verification rules.

## Starting state

```text
Canonical platforms:  101
Events:               335
Evidence:             597
Customer outcomes:    101
Product profiles:     142
Terms risk:           101
Claims ongoing:        18
Corpus blockers:        0
Quality debt:          23
```

Phase 9A canonical XORA release:

```text
PR:                    #176
Merge SHA:             87f21a256949b4d07ad4d073b91e860aa0bb02fe
Production check:      #197 success
```

Phase 9A closeout:

```text
PR:                    #177
Merge SHA:             731c3fd0fa74239e36d06aca0ddc8dd2733cb5f2
Production check:      #198 success
```

## Target

```text
Phase 10 start:        101 platforms
Phase 10 target:       125 platforms
Maximum additions:      24 platforms
Next platform ID:      cya_plat_000102
Next event ID:         cya_ev_000341
Mandatory audit:       125 platforms
```

No target beyond 125 is authorized by this phase.

## Why 125

The first mature corpus at 100 is already audit-clean at blocker level. A 24-platform segment is large enough to expand coverage materially while remaining small enough to stop and re-audit before the mature corpus changes too far from the 100-platform baseline.

The 125 checkpoint is therefore an operating control, not a claim that 125 platforms is intrinsically complete coverage.

## Growth workflow

Every growth batch follows the existing two-gate model:

1. research candidates outside canonical `data/`;
2. run duplicate, scope, evidence, legal-entity, product, terms, custody, and customer-outcome review;
3. merge a candidate-only PR;
4. promote only `add_now` candidates in a separate canonical PR;
5. run all repository validation, build, candidate, SEO, preview, and representative-surface gates;
6. merge only if required checks pass;
7. require Cloudflare deployment and exact-SHA Production Surface Check on the canonical merge SHA;
8. continue only after the production release is verified.

## Batch policy

Default canonical batch size remains two to three simple platforms.

Use one platform per canonical PR for cases involving:

- bankruptcy, claims, or recovery;
- disputed withdrawals or customer funds;
- multiple legal entities or jurisdictions;
- ambiguous custody or ownership;
- successor or overlapping brands;
- unusually large or conflicting evidence sets.

Duplicates never consume canonical platform IDs.

## Quality guardrails

Phase 10 may continue only while:

- corpus blockers remain `0`;
- low-reliability evidence is not introduced to make a case appear complete;
- status, failure reason, terms risk, and customer outcome remain separate reviewed claims;
- unknown dates/outcomes remain unknown rather than inferred;
- quality-debt findings are not hidden by unsupported edits;
- monitoring findings remain review-only;
- candidate staging never leaks into public machine-readable output.

The current 23 quality-debt findings are not a prerequisite to begin Phase 10, but the count should not increase as a side effect of growth.

## Parallel maintenance rule

Each growth batch should attempt one mature-corpus evidence upgrade where reliable evidence exists, without making that maintenance item a blocker for unrelated canonical additions.

Priority evidence-maintenance targets:

- Ledn
- Crypto.com Earn
- Haru Invest
- Babel Finance
- BlockFills
- Stablegains
- Hodlnaut
- Vauld
- CoinLoan
- Flint
- BitLendingClub

Repurposed historical URLs may remain explicitly repurposed when no safer historical source replacement exists.

## Monitoring rule

Weekly existing-record monitoring remains active throughout Phase 10.

A monitoring finding may create a research task or reviewed correction, but may not directly change canonical status, events, evidence interpretation, customer outcome, recovery percentage, legal entity, custody, or ownership.

## Candidate priorities

The first Phase 10 discovery batch should favor:

1. duplicate-clear platforms with direct first-party product/terms evidence;
2. cases that broaden jurisdiction, platform type, or historical outcome coverage;
3. active and ended products with identifiable product boundaries;
4. records whose legal entity and product scope can be stated without inference.

The three long-lived `needs_research` candidates remain eligible for further work but receive no automatic priority or promotion:

- `cya_candidate_000010` Goldfinch
- `cya_candidate_000045` Cabital
- `cya_candidate_000049` Outlet Finance

## Completion gate

At 125 canonical platforms, growth stops automatically.

Phase 10 cannot close until:

1. the exact 125-platform canonical SHA is production-verified;
2. a full-corpus audit completes with blocker count `0`;
3. quality-debt changes are documented and reviewed;
4. candidate/canonical reference integrity passes;
5. machine-readable record counts match canonical data;
6. representative production surfaces pass;
7. the audit release itself is merged and exact-SHA production-verified.

Only after that checkpoint may a later growth phase be proposed.
