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
Confirmed main commit: d15a7010915a4a52cf8adb953f4411fcfa5f2e49
Latest merged PR: #64 Add batch 27 AQRU and YouHodler records
```

### Canonical scale

```text
Platforms:       42
Events:          210
Evidence:        314
Outcomes:         42
Products:         62
Terms risk:       42
Claims ongoing:   15
Generated pages:  54
```

The batch-27 validation confirmed that source arrays, generated HTML, public JSON, manifest counts, version metadata, and sitemap inputs resolve to the same counts.

## Latest completed work

### Phase 4 — full 40-platform corpus audit

Completed in PR #59.

```text
Initial blockers: 37
Final blockers:    0
Validate data:     success
Validate/build:    success
CYA CI:            success
```

The audit gate is permanently included in normal `npm test`.

### Phase 5 / R7 — deterministic candidate scanner

Completed in PR #60.

- normalized canonical-name, alias, and domain matching
- transparent match scores and reasons
- exact, probable, ambiguous, new, out-of-scope, historical, and manual-review classes
- draft eligibility only for duplicate-clear `decision=add_now`
- mandatory blocking of `needs_research`
- canonical SHA-256 write guard
- deterministic fixtures
- Node.js 24 artifact-only workflow

### Phase 5 / R8 — review-only six-group draft generator

Completed in PR #61.

Generates review artifacts for:

- platform
- event
- evidence
- outcome
- product
- terms risk
- manifest with scan classifications and blockers

Safety properties:

```text
automatic canonical ID assignment: forbidden
canonical writes:                  forbidden
automatic promotion:               forbidden
automatic merge:                   forbidden
```

### Phase 6 / batch 27 — AQRU and YouHodler

Candidate-only gate completed in PR #63. Canonical promotion completed in PR #64.

#### AQRU

- promoted as `cya_plat_000041`
- `centralized_yield / limited`
- records the approximate December 2021 launch
- records the May 2022 operating-scale milestone
- records the November 2022 yield reductions and end of BTC/ETH interest
- records the August 2023 operating-business transfer without treating it as failure, acquisition, repayment, or customer loss
- records current narrowed, high-minimum product availability
- outcome: `not_applicable`
- terms: `varies_by_product`

#### YouHodler

- promoted as `cya_plat_000042`
- `borrow_lend_platform / active`
- records the 2019 USDT and BTC savings-account launches
- records the 2020 weekly-payout change
- records current Yield Account operation, limits, jurisdiction restrictions, company structure, and custody terms
- keeps Yield Account and crypto-backed loan mechanics separate
- outcome: `not_applicable`
- terms: `varies_by_product`

#### Batch-27 validation

```text
Validate data:        success
Validate and build:   success
CYA CI:               success
Candidate scan:       success
Candidate draft:      success
Corpus blockers:      0
Candidate matches:    0 possible matches
Build-output check:   success
AQRU route:           /platform/aqru/
YouHodler route:      /platform/youhodler/
```

## Candidate queue and reserved identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate ID:       cya_candidate_000022
Next platform ID:        cya_plat_000043
Next event ID:           cya_ev_000216
Next canonical batch:    28
Next evidence prefix:    cya_src_b28_
```

Goldfinch and BitMart remain staging-only:

- Goldfinch requires a DeFi/institutional-yield scope and product/entity-boundary decision.
- BitMart requires an exchange-Earn exception decision plus product-specific redemption, custody, terms, and customer-outcome evidence.

They must not be silently inserted into batch 28 merely because the automation exists.

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
Phase 6 / batch 28: 42 -> 44                        current
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
Phase 6 / batch 28 candidate-only gate

1. select two high-value, in-scope CeFi yield/lending candidates
2. investigate identity, product boundary, event history, terms, and customer outcome
3. assign candidate IDs 000022 and 000023 only after duplicate review
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
Batches 23-27 repository/public-output validation: complete
40-platform audit: complete
Direct external production observation from this execution environment: not independently confirmed
```

Expected public values after the batch-27 deployment:

```text
platforms: 42
events: 210
evidence: 314
outcomes: 42
products: 62
terms-risk: 42
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
Phase 6 / batch 28 candidate-only gate

Select, research, duplicate-check, and stage two high-value CeFi yield/lending candidates as cya_candidate_000022 and cya_candidate_000023. Do not alter canonical data in the candidate PR.
```
