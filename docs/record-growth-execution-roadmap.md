# CYA record growth execution roadmap

Status: active execution checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-03

## Purpose

This file is the authoritative recovery point for CYA record growth, corpus audits, staging automation, and monitoring work.

It records:

- latest confirmed `main`
- current canonical counts
- candidate queue and reserved IDs
- completed logical phases
- first incomplete gate
- ordered work through 100 platforms

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Unreviewed candidates, generated drafts, monitoring findings, and private notes stay under `data-staging/` or workflow artifacts.
- Never write directly to `main`.
- Never promote before name, alias, domain, product-boundary, entity-boundary, and evidence review.
- Never infer final recovery rates, repayment completion, custody, terms, or asset ownership.
- Candidate scanning and draft generation are review aids, not publication decisions.
- GitHub search is supplementary; canonical JSON inspection and repository validation are authoritative.

## Current confirmed baseline

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: 53349df4938dd16fbda445353b4e7d80033ed9b4
Latest merged PR: #67 Add batch 28 Wirex X-Accounts and SwissBorg Earn records
```

### Canonical scale

```text
Platforms:       44
Events:          217
Evidence:        326
Outcomes:         44
Products:         67
Terms risk:       44
Claims ongoing:   15
Generated pages:  56
```

Batch-28 validation confirmed that source arrays, generated HTML, public JSON, manifest counts, version metadata, and sitemap inputs resolve to the same values.

## Completed safety and automation gates

### Phase 4 — full corpus audit

Completed in PR #59.

```text
Initial blockers: 37
Final blockers:    0
Validate data:     success
Validate/build:    success
CYA CI:            success
```

The audit remains part of normal `npm test`.

### Phase 5 / R7 — deterministic candidate scanner

Completed in PR #60.

- canonical-name, alias, and domain matching
- transparent match scores and reasons
- exact, probable, ambiguous, new, out-of-scope, historical, and manual-review classes
- draft eligibility only for duplicate-clear `decision=add_now`
- mandatory blocking of `needs_research`
- canonical SHA-256 write guard
- deterministic fixtures
- Node.js 24 artifact workflow

### Phase 5 / R8 — review-only six-group draft generator

Completed in PR #61.

Generated review artifacts:

- platform
- event
- evidence
- outcome
- product
- terms risk
- manifest with classifications and blockers

Forbidden operations:

```text
automatic canonical ID assignment
automatic canonical writes
automatic promotion
automatic merge
```

## Phase 6 completed batches

### Batch 27 — AQRU and YouHodler

Candidate-only gate: PR #63  
Canonical promotion: PR #64

#### AQRU

- `cya_plat_000041`
- `centralized_yield / limited`
- launch, growth, yield reduction, ownership restructure, and current narrowed-product history
- outcome: `not_applicable`
- terms: `varies_by_product`

#### YouHodler

- `cya_plat_000042`
- `borrow_lend_platform / active`
- savings launch history, weekly payouts, current Yield Account, limits, jurisdiction, company, and custody sources
- outcome: `not_applicable`
- terms: `varies_by_product`

### Batch 28 — Wirex X-Accounts and SwissBorg Earn

Candidate-only gate: PR #66  
Canonical promotion: PR #67

#### Wirex X-Accounts

- `cya_plat_000043`
- `crypto_interest_account / active`
- product-scoped separately from the wider Wirex card, payments, trading, Multiply, and Credit business
- records the June 2021 launch and early asset expansion
- records current Flexible, Plus, and Fixed variants
- terms: `platform_owned`
- current terms state that X-Account assets transfer to Wirex and are outside government-backed deposit-guarantee schemes
- outcome: `not_applicable`

#### SwissBorg Earn

- `cya_plat_000044`
- `yield_aggregator / active`
- product-scoped separately from the wider SwissBorg wealth app
- preserves continuity from the December 2020 Smart Yield launch
- records broad Smart Yield expansion and the September 2022 transition to SwissBorg Earn
- records current strategy subscriptions, redemptions, APY, risk scores, payouts, and fees
- terms: `varies_by_product`
- outcome: `not_applicable`

#### Batch-28 validation

```text
Validate data:        success
Validate and build:   success
CYA CI:               success
Candidate scan:       success
Candidate draft:      success
Corpus blockers:      0
Candidate matches:    0 possible matches
Build-output check:   success
Wirex route:          /platform/wirex-x-accounts/
SwissBorg route:      /platform/swissborg-earn/
```

## Candidate queue and reserved identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate ID:       cya_candidate_000024
Next platform ID:        cya_plat_000045
Next event ID:           cya_ev_000223
Next canonical batch:    29
Next evidence prefix:    cya_src_b29_
```

Goldfinch and BitMart remain staging-only:

- Goldfinch requires a DeFi/institutional-yield scope and product/entity-boundary decision.
- BitMart requires an exchange-Earn exception decision plus product-specific redemption, custody, terms, and customer-outcome evidence.

They must not be silently inserted into batch 29.

## Current phase

```text
Phase 3A: reach 30 platforms                         complete
Phase 3B / R1: batch 22, 30 -> 32                   complete
Public-surface corrective gate                      complete
Phase 3B / R2: batch 23, 32 -> 34                   complete
Phase 3B / R3: batch 24, 34 -> 36                   complete
Phase 3B / R4: batch 25, 36 -> 38                   complete
Phase 3B / R5: batch 26, 38 -> 40                   complete
Phase 4: 40-platform full audit                     complete
Phase 5 / R7: candidate scanner                     complete
Phase 5 / R8: review-only draft generator           complete
Phase 6 / batch 27: 40 -> 42                        complete
Phase 6 / batch 28: 42 -> 44                        complete
Phase 6 / batch 29: 44 -> 46                        current
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
Phase 6 / batch 29 candidate-only gate

1. select two high-value, in-scope CeFi yield/lending candidates
2. investigate identity, product boundary, event history, terms, and customer outcome
3. assign candidate IDs 000024 and 000025 only after duplicate review
4. stage candidates without canonical changes
5. run candidate audit, scanner, draft generator, and all repository checks
6. merge the candidate-only PR
7. promote reviewed candidates in a separate canonical PR
```

## Phase 6 — 40 to 60 platforms

Use scanner and draft-generator output while retaining manual source review and candidate-only duplicate gates.

### Batch policy

- normally add two canonical platforms per batch
- use one candidate-only PR followed by one canonical PR
- do not combine unresolved `needs_research` records with ready candidates
- prefer historically significant CeFi lending, interest-account, and centralized-yield records
- include active comparators when lending or yield is a core platform function
- product-scoped records are allowed when the continuing parent business must remain separate
- acquisition, shutdown, recovery, and customer-outcome boundaries must remain conservative

### Required six-group model

Every promoted platform must include reviewed records for:

- platform
- event
- evidence
- outcome
- product
- terms risk

### Completion requirements

```text
60 canonical platforms
no unresolved canonical duplicate
no critical reference break
traceable candidate history
all final CI checks green
```

## Known non-blocking quality debt

- several legacy platforms have thin evidence coverage
- several original URLs are repurposed
- Flint has no exact verified end date
- seven historical terms records remain unknown
- legacy split consumed-ledger files remain
- older GitHub workflows still emit Node.js 20 deprecation warnings

Do not hide these findings or convert them into guessed values.

## Phase 7 — weekly monitoring

After reaching 60 platforms, monitor:

- official blogs and notices
- court and administrator pages
- creditor portals
- regulators
- archive availability
- official domains and status changes

Findings remain staging-only. Create no PR when nothing material changed.

## Phase 8 — 60 to 100 platforms

```text
60 -> 75
75-platform audit
75 -> 100
100-platform maturity audit
```

## Production verification state

```text
PR #43 public-surface implementation: merged
Batches 23-28 repository/public-output validation: complete
40-platform audit: complete
Direct external production observation from this execution environment: not independently confirmed
```

Expected public values after the batch-28 deployment:

```text
platforms: 44
events: 217
evidence: 326
outcomes: 44
products: 67
terms-risk: 44
claims ongoing: 15
```

Repository validation and direct deployment observation must remain separate. Never report production success without direct evidence.

## Recovery procedure

After interruption:

```text
1. Read this file and docs/development-policy.md.
2. Fetch current main and list open/recent PRs.
3. Confirm current phase and first incomplete gate.
4. Confirm candidate queue and consumed history.
5. Run candidate audit, scanner, draft generator, and next-ID reporter.
6. Recalculate canonical counts and maximum IDs.
7. Correct this checkpoint if reality differs.
8. Resume only from the first incomplete gate.
```

Recommended checks:

```bash
npm install
npm run candidates:check
npm run candidates:scan
npm run candidates:draft
npm run batch:next-ids
npm test
```

## Completed restart sequence

```text
#42 closed as superseded
#43 public-surface and machine-readable correction
#46 resume checkpoint
#47-#48 batch 23 candidate and canonical work
#49 batch 23 checkpoint
#50-#51 batch 24 candidate and canonical work
#52 batch 24 checkpoint
#53-#54 batch 25 candidate and canonical work
#55 batch 25 checkpoint
#56-#57 batch 26 candidate and canonical work
#58 40-platform checkpoint
#59 full corpus audit
#60 deterministic candidate scanner
#61 review-only six-group draft generator
#62 Phase 6 checkpoint
#63-#64 batch 27 candidate and canonical work
#65 batch 28 checkpoint
#66-#67 batch 28 candidate and canonical work
```

## Update rule

After every covered merge, update:

```text
confirmed main commit
latest merged PR
all six canonical counts
next reserved IDs
candidate queue state
completed logical work
current phase and first incomplete gate
production-verification state
```

Do not leave a stale current-location marker.

## Immediate next action

```text
Phase 6 / batch 29 candidate-only gate

Select, research, duplicate-check, and stage two high-value CeFi yield/lending candidates as cya_candidate_000024 and cya_candidate_000025. Do not alter canonical data in the candidate PR.
```
