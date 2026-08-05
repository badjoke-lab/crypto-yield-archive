# CYA record growth execution roadmap

Status: active execution checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-05

## Purpose

This file is the authoritative recovery point for CYA record growth, corpus audits, staging automation, production verification, and monitoring work.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates and generated drafts remain under `data-staging/` or workflow artifacts until reviewed.
- Never write directly to `main`.
- Use one candidate-only PR followed by one separate canonical PR.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, fraud, or customer outcome from candidate metadata or marketing.
- Product, legal-entity, jurisdiction, terms-version, custody, identity, and customer-outcome boundaries must be reviewed before promotion.
- Repository validation, Cloudflare deployment, and direct production observation are separate claims.

## Current confirmed baseline

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: 9d9f6534ae5ad255ea871c6a5a622af546c767d0
Latest merged PR: #87 Add batch 32 BitLendingClub and Bitbond records
Latest canonical PR: #87 Add batch 32 BitLendingClub and Bitbond records
```

### Canonical scale

```text
Platforms:       52
Events:          254
Evidence:        383
Outcomes:         52
Products:         83
Terms risk:       52
Claims ongoing:   16
Generated pages:  64
```

Batch-32 validation confirmed that canonical arrays, generated HTML, public JSON, manifest counts, metadata, sitemap inputs, candidate history, and the two new platform routes resolve to the same registry.

## Completed safety, automation, and public-surface gates

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

### Production deployment repair

Completed in PR #85.

- removed the unusable token-dependent Direct Upload workflow
- identified `agent/seo-hardening` as the Cloudflare Pages production branch
- added a GitHub-native sync from public-build changes on `main`
- uses only the repository `GITHUB_TOKEN`
- preserves the existing Cloudflare project and custom-domain configuration
- serializes sync jobs and cancels superseded runs

Batch 32 triggered the new sync successfully after PR #87 merged.

## Phase 6 completed batches

```text
Batch 27: AQRU + YouHodler                         40 -> 42
Batch 28: Wirex X-Accounts + SwissBorg Earn        42 -> 44
Batch 29: CoinRabbit + Nebeus                      44 -> 46
Batch 30: Matrixport + Coinchange                  46 -> 48
Batch 31: YieldNodes + Bake                        48 -> 50
Batch 32: BitLendingClub + Bitbond Lending         50 -> 52
```

### Batch 30 — Matrixport and Coinchange

Candidate-only gate: PR #75  
Canonical promotion: PR #76

- Matrixport: `cya_plat_000047 / borrow_lend_platform / active`
- Coinchange: `cya_plat_000048 / yield_aggregator / active`
- both use `varies_by_product` terms and `not_applicable` outcomes

### Batch 31 — YieldNodes and Bake

Candidate-only gate: PR #78  
Canonical promotion: PR #79

- YieldNodes: `cya_plat_000049 / centralized_yield / restructuring`
- Bake: `cya_plat_000050 / centralized_yield / limited`
- disputed or incomplete recovery evidence remains explicit
- historical product and current withdrawal-only terms remain separated

### Batch 32 — BitLendingClub and Bitbond Lending Marketplace

Candidate-only gate: PR #86  
Canonical promotion: PR #87

#### BitLendingClub

- `cya_plat_000051`
- `borrow_lend_platform / operations_ended`
- temporary Loanbase rebrand preserved
- February 2016 account compromise separated from the later shutdown
- December 2016 stop to new registrations, loans, and investments
- failure reason: `regulatory_action`
- exact final shutdown date remains unknown
- outcome: `unknown`; uniform repayment or withdrawal completion is not inferred
- the unrelated current Japanese BitLending service is excluded

#### Bitbond Lending Marketplace

- `cya_plat_000052`
- `borrow_lend_platform / operations_ended`
- product-scoped historical marketplace record
- 2019 BB1 security-token financing layer recorded separately
- May 2020 stop to new loan origination and tokenization pivot
- failure reason: `voluntary_shutdown`
- current Bitbond tokenization infrastructure remains outside the failure classification
- marketplace claims and BB1 token-holder rights remain separate
- outcome: `unknown`

#### Batch-32 validation

```text
Validate data:        success
Validate and build:   success
CYA CI:               success
SEO:                  success
Candidate scan:       success
Candidate draft:      success
Corpus blockers:      0
Candidate matches:    0 possible matches before promotion
BitLendingClub route: /platform/bitlendingclub-loanbase/
Bitbond route:        /platform/bitbond-lending-marketplace/
Generated pages:      64
```

## Candidate queue and reserved identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate IDs:      cya_candidate_000032 / cya_candidate_000033
Next platform ID:        cya_plat_000053
Next event ID:           cya_ev_000260
Next canonical batch:    33
Next evidence prefix:    cya_src_b33_
```

Goldfinch and BitMart remain staging-only:

- Goldfinch requires a DeFi/institutional-yield scope and product/entity-boundary decision.
- BitMart requires an exchange-Earn exception decision plus product-specific redemption, custody, terms, and customer-outcome evidence.

They must not be silently inserted into batch 33.

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
Phase 6 / batch 31: 48 -> 50                        complete
Phase 6 / batch 32: 50 -> 52                        complete
Phase 6 / batch 33: 52 -> 54                        current
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
Phase 6 / batch 33 candidate-only gate

1. select two high-value, in-scope CeFi yield/lending candidates
2. confirm no canonical or consumed-ledger match
3. investigate identity, product boundary, event history, terms, custody, and customer outcome
4. assign candidate IDs 000032 and 000033 only after duplicate review
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
- preserve terms evolution, marketing-versus-contract differences, disputed causes, and customer-outcome uncertainty

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
- Flint and BitLendingClub have no exact verified end date
- historical terms remain unknown or unclear for several records
- legacy split consumed-ledger files remain
- older non-production workflows may still emit Node.js 20 action-runtime warnings

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
PR #85 Cloudflare production-branch sync: merged and successful
Batch 32 repository/public-output validation: complete
Batch 32 main-to-production-branch sync: successful
Latest 52-platform direct production observation: pending Cloudflare deployment completion
40-platform audit: complete
```

Expected public values after the latest deployment:

```text
platforms: 52
events: 254
evidence: 383
outcomes: 52
products: 83
terms-risk: 52
claims ongoing: 16
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
#77 batch 31 checkpoint
#78 batch 31 candidate-only gate
#79 batch 31 canonical promotion
#80 production-smoke serialization
#85 Cloudflare production-branch sync repair
#86 batch 32 candidate-only gate
#87 batch 32 canonical promotion
```

## Update rule

After every covered merge, update the confirmed main commit, latest merged PR, canonical counts, reserved IDs, candidate queue, completed work, current phase, first incomplete gate, and production-verification state.

Do not leave a stale current-location marker.

## Immediate next action

```text
Phase 6 / batch 33 candidate-only gate

Select, research, duplicate-check, and stage two high-value CeFi yield/lending candidates as cya_candidate_000032 and cya_candidate_000033. Do not alter canonical data in the candidate PR.
```
