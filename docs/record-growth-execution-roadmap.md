# CYA record growth execution roadmap

Status: active execution checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-05

## Purpose

This file is the authoritative recovery point for CYA record growth, corpus audits, staging automation, and monitoring work.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates and generated drafts remain under `data-staging/` or workflow artifacts until reviewed.
- Never write directly to `main`.
- Use one candidate-only PR followed by one separate canonical PR.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, or customer outcome from candidate metadata or marketing.
- Product, legal-entity, jurisdiction, terms-version, custody, and customer-outcome boundaries must be reviewed before promotion.
- Repository validation and direct production observation are separate claims.

## Current confirmed baseline

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: c02369f453cf8702debbfc0aa2fadcc1d586801b
Latest merged PR: #76 Add batch 30 Matrixport and Coinchange records
```

### Canonical scale

```text
Platforms:       48
Events:          235
Evidence:        353
Outcomes:         48
Products:         76
Terms risk:       48
Claims ongoing:   15
Generated pages:  60
```

Batch-30 validation confirmed that canonical arrays, generated HTML, public JSON, manifest counts, metadata, sitemap inputs, and the two new platform routes resolve to the same registry.

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

The corpus audit remains part of normal `npm test`.

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

Generated review groups:

- platform
- event
- evidence
- outcome
- product
- terms risk

Automatic canonical IDs, canonical writes, promotion, and merge remain forbidden.

### SEO hardening

Completed in PR #74.

- Open Graph and Twitter metadata
- WebSite, Dataset, and platform breadcrumb structured data
- sitemap reviewed dates
- dedicated Node.js 24 SEO workflow
- Astro build before generated-output validation

## Phase 6 completed batches

```text
Batch 27: AQRU + YouHodler                         40 -> 42
Batch 28: Wirex X-Accounts + SwissBorg Earn        42 -> 44
Batch 29: CoinRabbit + Nebeus                      44 -> 46
Batch 30: Matrixport + Coinchange                  46 -> 48
```

### Batch 30 — Matrixport and Coinchange

Candidate-only gate: PR #75  
Canonical promotion: PR #76

#### Matrixport

- `cya_plat_000047`
- `borrow_lend_platform / active`
- approximate 2019 platform launch
- July 2021 Lite interface with fixed-income access
- May 2022 fixed-income API
- June 2022 non-liquidation loan launch
- current fixed-income, flexible-saving, staking, structured-yield, and collateralized-loan operation
- terms: `varies_by_product`
- outcome: `not_applicable`

#### Coinchange

- `cya_plat_000048`
- `yield_aggregator / active`
- Q3 2021 proprietary-platform launch
- August 2021 High Yield Account agreement
- current individual and business Earn, API, vault, and multi-strategy infrastructure
- historical and current terms remain separate
- terms: `varies_by_product`
- outcome: `not_applicable`

#### Batch-30 validation

```text
Validate data:        success
Validate and build:   success
CYA CI:               success
SEO:                  success
Candidate draft:      success
Corpus blockers:      0
Candidate matches:    0 possible matches before promotion
Matrixport route:     /platform/matrixport/
Coinchange route:     /platform/coinchange/
```

## Candidate queue and reserved identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate IDs:      cya_candidate_000028 / cya_candidate_000029
Next platform ID:        cya_plat_000049
Next event ID:           cya_ev_000241
Next canonical batch:    31
Next evidence prefix:    cya_src_b31_
```

Goldfinch and BitMart remain staging-only:

- Goldfinch requires a DeFi/institutional-yield scope and product/entity-boundary decision.
- BitMart requires an exchange-Earn exception decision plus product-specific redemption, custody, terms, and customer-outcome evidence.

They must not be silently inserted into batch 31.

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
Phase 6 / batch 30: 46 -> 48                        complete
Phase 6 / batch 31: 48 -> 50                        current
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
Phase 6 / batch 31 candidate-only gate

1. select two high-value, in-scope CeFi yield/lending candidates
2. confirm no canonical or consumed-ledger match
3. investigate identity, product boundary, event history, terms, custody, and customer outcome
4. assign candidate IDs 000028 and 000029 only after duplicate review
5. stage candidates without canonical changes
6. run candidate audit, scanner, draft generator, and all repository checks
7. merge the candidate-only PR
8. promote reviewed candidates in a separate canonical PR
```

## Phase 6 — 40 to 60 platforms

### Batch policy

- normally add two canonical platforms per batch
- do not combine unresolved `needs_research` records with ready candidates
- prefer historically significant CeFi lending, interest-account, and centralized-yield records
- active comparators are allowed when lending or yield is a core platform function
- product-scoped records are allowed when the parent business must remain separate
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
PR #74 SEO hardening: merged and production-checked
Batches 23-30 repository/public-output validation: complete
40-platform audit: complete
Batch-30 production deployment and direct route observation: pending current main smoke completion
```

Expected public values after the batch-30 deployment:

```text
platforms: 48
events: 235
evidence: 353
outcomes: 48
products: 76
terms-risk: 48
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
#47-#61 batches 23-26, 40-platform audit, scanner, and draft generator
#62 Phase 6 checkpoint
#63-#70 batches 27-29 and checkpoints
#71 batch 30 checkpoint before execution
#74 SEO hardening
#75 batch 30 candidate-only gate
#76 batch 30 canonical promotion
```

## Update rule

After every covered merge, update the confirmed main commit, latest merged PR, canonical counts, reserved IDs, candidate queue, completed work, current phase, first incomplete gate, and production-verification state.

Do not leave a stale current-location marker.

## Immediate next action

```text
Phase 6 / batch 31 candidate-only gate

Select, research, duplicate-check, and stage two high-value CeFi yield/lending candidates as cya_candidate_000028 and cya_candidate_000029. Do not alter canonical data in the candidate PR.
```
