# CYA record growth execution roadmap

Status: active execution checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-03

## Purpose

This file is the authoritative recovery point for CYA record growth, corpus audits, staging automation, and monitoring work.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates, generated drafts, monitoring findings, and private notes remain under `data-staging/` or workflow artifacts until reviewed.
- Never write directly to `main`.
- Never promote before identity, alias, domain, entity-boundary, product-boundary, terms, and evidence review.
- Never infer repayment completion, recovery rate, custody, ownership, or customer outcome from candidate metadata.
- Candidate scanning and draft generation are review aids, not publication decisions.
- Repository validation and direct production observation are separate claims.

## Current confirmed baseline

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: e9851f10dcb122339b50f65168eebb2c3820ea5b
Latest merged PR: #70 Add batch 29 CoinRabbit and Nebeus records
```

### Canonical scale

```text
Platforms:       46
Events:          226
Evidence:        340
Outcomes:         46
Products:         71
Terms risk:       46
Claims ongoing:   15
Generated pages:  58
```

Batch-29 validation confirmed that canonical arrays, generated HTML, public JSON, manifest counts, metadata, and sitemap inputs resolve to the same values.

## Completed safety and automation gates

### Phase 4 — full 40-platform corpus audit

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
- deterministic fixtures and Node.js 24 artifact workflow

### Phase 5 / R8 — review-only six-group draft generator

Completed in PR #61.

Generated review artifacts:

- platform
- event
- evidence
- outcome
- product
- terms risk
- manifest with scanner classifications and blockers

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

- AQRU: `cya_plat_000041 / centralized_yield / limited`
- YouHodler: `cya_plat_000042 / borrow_lend_platform / active`
- final counts: 42 platforms / 210 events / 314 evidence

### Batch 28 — Wirex X-Accounts and SwissBorg Earn

Candidate-only gate: PR #66  
Canonical promotion: PR #67

- Wirex X-Accounts: `cya_plat_000043 / crypto_interest_account / active / platform_owned`
- SwissBorg Earn: `cya_plat_000044 / yield_aggregator / active / varies_by_product`
- final counts: 44 platforms / 217 events / 326 evidence

### Batch 29 — CoinRabbit and Nebeus

Candidate-only gate: PR #69  
Canonical promotion: PR #70

#### CoinRabbit

- `cya_plat_000045`
- `borrow_lend_platform / active`
- records the approximate 2020 platform launch
- records the June 2021 savings-account launch
- records the August 2025 mobile-app launch
- records current fixed/open-ended loans and Earn operation
- terms: `platform_owned`
- preserves the difference between contractual title transfer and current no-rehypothecation marketing
- outcome: `not_applicable`

#### Nebeus

- `cya_plat_000046`
- `borrow_lend_platform / active`
- records the approximate 2014 platform launch
- records active Renting programs by August 2022
- records the May 2026 Renting Terms update
- records current loans and fixed/flexible Renting programs
- terms: `varies_by_product`
- preserves the difference between current retained-ownership terms and older lease/use agreements
- outcome: `not_applicable`

#### Batch-29 validation

```text
Validate data:        success
Validate and build:   success
CYA CI:               success
Candidate scan:       success
Candidate draft:      success
Corpus blockers:      0
Candidate matches:    0 possible matches before promotion
Build-output check:   success
CoinRabbit route:     /platform/coinrabbit/
Nebeus route:         /platform/nebeus/
```

## Candidate queue and reserved identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate ID:       cya_candidate_000026
Next platform ID:        cya_plat_000047
Next event ID:           cya_ev_000232
Next canonical batch:    30
Next evidence prefix:    cya_src_b30_
```

Goldfinch and BitMart remain staging-only:

- Goldfinch requires a DeFi/institutional-yield scope and product/entity-boundary decision.
- BitMart requires an exchange-Earn exception decision plus product-specific redemption, custody, terms, and customer-outcome evidence.

They must not be silently inserted into batch 30.

## Current phase

```text
Phase 3A: reach 30 platforms                         complete
Phase 3B / batches 22-26: 30 -> 40                  complete
Phase 4: 40-platform full audit                     complete
Phase 5 / R7: candidate scanner                     complete
Phase 5 / R8: review-only draft generator           complete
Phase 6 / batch 27: 40 -> 42                        complete
Phase 6 / batch 28: 42 -> 44                        complete
Phase 6 / batch 29: 44 -> 46                        complete
Phase 6 / batch 30: 46 -> 48                        current
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
Phase 6 / batch 30 candidate-only gate

1. select two high-value, in-scope CeFi yield/lending candidates
2. investigate identity, product boundary, event history, terms, and customer outcome
3. assign candidate IDs 000026 and 000027 only after duplicate review
4. stage candidates without canonical changes
5. run candidate audit, scanner, draft generator, and all repository checks
6. merge the candidate-only PR
7. promote reviewed candidates in a separate canonical PR
```

## Phase 6 — 40 to 60 platforms

### Batch policy

- normally add two canonical platforms per batch
- use one candidate-only PR followed by one canonical PR
- do not combine unresolved `needs_research` records with ready candidates
- prefer historically significant CeFi lending, interest-account, and centralized-yield records
- include active comparators when lending or yield is a core platform function
- product-scoped records are allowed when the continuing parent business must remain separate
- preserve terms evolution, marketing-versus-contract differences, and customer-outcome uncertainty

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

After reaching 60 platforms, monitor official notices, court and administrator pages, creditor portals, regulators, archive availability, official domains, and status changes. Findings remain staging-only, and no PR should be created when nothing material changed.

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
Batches 23-29 repository/public-output validation: complete
40-platform audit: complete
Direct external production observation from this execution environment: not independently confirmed
```

Expected public values after the batch-29 deployment:

```text
platforms: 46
events: 226
evidence: 340
outcomes: 46
products: 71
terms-risk: 46
claims ongoing: 15
```

## Recovery procedure

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
#68 batch 29 checkpoint
#69-#70 batch 29 candidate and canonical work
```

## Update rule

After every covered merge, update the confirmed main commit, latest merged PR, canonical counts, reserved IDs, candidate queue, completed work, current phase, first incomplete gate, and production-verification state.

Do not leave a stale current-location marker.

## Immediate next action

```text
Phase 6 / batch 30 candidate-only gate

Select, research, duplicate-check, and stage two high-value CeFi yield/lending candidates as cya_candidate_000026 and cya_candidate_000027. Do not alter canonical data in the candidate PR.
```
