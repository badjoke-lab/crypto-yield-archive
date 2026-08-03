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
Confirmed main commit: 594d44d5652959fde3c27a7c5a14168b1b26c3e7
Latest merged PR: #61 Add review-only six-group candidate draft generator
```

### Canonical scale

```text
Platforms:       40
Events:          200
Evidence:        298
Outcomes:         40
Products:         58
Terms risk:       40
Claims ongoing:   15
Generated pages:  52
```

The canonical counts did not change during the Phase 4 audit or Phase 5 staging-automation work.

## Latest completed work

### Phase 4 — full 40-platform corpus audit

Completed in PR #59.

Final audit state:

```text
Initial blockers: 37
Final blockers:    0
Validate data:     success
Validate/build:    success
CYA CI:            success
Canonical counts:  40 / 200 / 298 preserved
```

Completed audit work:

- added `scripts/audit-corpus.mjs`
- made the corpus audit part of normal `npm test`
- normalized legacy event `source_count` values to direct evidence links
- documented the reviewed Nexo / Nexo Earn shared-domain exception
- retained non-blocking quality debt explicitly instead of guessing values

Known non-blocking debt includes:

- several platforms with thin evidence coverage
- repurposed original URLs
- one unresolved exact end date
- unclear historical terms for several records
- legacy split consumed-ledger files
- GitHub Actions Node.js 20 deprecation warnings in older workflows

### Phase 5 / R7 — deterministic candidate scanner

Completed in PR #60.

Implemented:

- normalized canonical-name, alias, and domain matching
- transparent match scores and reasons
- classifications for exact, probable, ambiguous, new, out-of-scope, historical, and manual-review cases
- `eligible_for_draft=true` only for duplicate-clear `decision=add_now`
- mandatory blocking of `needs_research`
- canonical SHA-256 write guard
- deterministic fixtures
- Node.js 24 artifact-only workflow

Current candidate scan result:

```text
Goldfinch: manual_review_required / draft-ineligible
BitMart:   manual_review_required / draft-ineligible
Canonical matches: none
```

### Phase 5 / R8 — review-only draft generator

Completed in PR #61.

Generated artifact groups:

- platform
- event
- evidence
- outcome
- product
- terms risk
- manifest with scan classifications and blockers

Safety properties:

```text
Canonical IDs assigned:       0
Canonical writes performed:   0
Goldfinch review state:        blocked
BitMart review state:          blocked
Outcome default:               unknown
Terms default:                 unknown
```

The generator never infers event dates, event types, source metadata, customer outcome, custody, yield source, terms, or asset ownership.

## Candidate queue and reserved identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate ID:       cya_candidate_000020
Next platform ID:        cya_plat_000041
Next event ID:           cya_ev_000206
Next canonical batch:    27
Next evidence prefix:    cya_src_b27_
```

Goldfinch and BitMart remain staging-only:

- Goldfinch requires a DeFi/institutional-yield scope and product/entity-boundary decision.
- BitMart requires an exchange-Earn exception decision plus product-specific redemption, custody, terms, and customer-outcome evidence.

They must not be silently inserted into batch 27 merely because the automation exists.

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
Phase 6: 40 -> 60                                   current
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
Phase 6 / batch 27 candidate-only gate

1. select two high-value, in-scope CeFi yield/lending candidates
2. investigate identity, product boundary, event history, terms, and customer outcome
3. assign candidate IDs 000020 and 000021 only after duplicate review
4. stage candidates without canonical changes
5. run candidate audit, scanner, draft generator, and all repository checks
6. merge the candidate-only PR
7. promote reviewed candidates in a separate canonical PR
```

## Phase 6 — 40 to 60 platforms

Use the scanner and draft-generator outputs while retaining manual source review and candidate-only duplicate gates.

### Batch policy

- normally add two canonical platforms per batch
- use one candidate-only PR followed by one canonical PR
- do not combine unresolved `needs_research` records with ready candidates
- prefer historically significant CeFi lending, interest-account, and centralized-yield records
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
Batches 23-26 repository/public-output validation: complete
40-platform audit: complete
Direct external production observation from this execution environment: not independently confirmed
```

Expected public values remain:

```text
platforms: 40
events: 200
evidence: 298
outcomes: 40
products: 58
terms-risk: 40
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
Phase 6 / batch 27 candidate-only gate

Select, research, duplicate-check, and stage two high-value CeFi yield/lending candidates as cya_candidate_000020 and cya_candidate_000021. Do not alter canonical data in the candidate PR.
```
