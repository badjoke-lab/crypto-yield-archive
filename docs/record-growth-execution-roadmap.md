# CYA record growth execution roadmap

Status: active execution checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-03  

## Purpose

This is the recovery point for CYA record-growth work. It records the latest confirmed `main`, canonical counts, next IDs, current phase, remaining PR order, recovery procedure, and merge-report rules.

Permanent operating policy remains in `docs/record-growth-plan.md`. Update this file after every merged growth, audit, automation, monitoring, or public-surface corrective pull request.

## Canonical safety boundary

- `data/` is canonical.
- Unreviewed candidates, generated drafts, monitoring findings, and private notes stay under `data-staging/`.
- Never write directly to `main`.
- Never promote before name, alias, domain, product-boundary, and entity-boundary review.
- Never infer final recovery rates or repayment completion.
- Do not treat moratorium, plan effectiveness, a new brand, a new token, a corporate dissolution, an automated status page, or a withdrawal window as sufficient proof of customer outcome.
- GitHub search is supplementary; candidate audit and canonical JSON inspection are authoritative.

## Current confirmed baseline

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: 802417c6ff14f820cba6007b56ac9b8e15cef204
Latest merged PR: #54 Add batch 25 Block Earner and Flint records
```

### Current canonical scale

```text
Platforms:       38
Events:          188
Evidence:        274
Outcomes:         38
Products:         56
Terms risk:       38
Claims ongoing:   15
Generated pages:  50
```

The final batch-25 build confirmed that HTML, canonical JSON datasets, manifest counts, version metadata, sitemap inputs, and all six canonical record groups resolve to the same counts.

## Latest completed logical work

```text
R4 / batch 25: complete
```

### Block Earner Earner Product

- promoted as `cya_plat_000037`
- product-scoped; Block Earner's continuing business and separate Access product remain outside the record
- `operations_ended / regulatory_action`
- offered from 17 March to 16 November 2022
- records ASIC proceedings and the Federal, Full Federal, and High Court stages through 17 June 2026
- outcome is `full_repayment`
- Federal Court penalty judgment records that all cryptocurrency lent through Earner was returned within weeks of discontinuation
- terms are `platform_owned` because users transferred rights and title to Block Earner

### Flint

- promoted as `cya_plat_000038`
- historical `flint.money` yield service only
- `operations_ended / voluntary_shutdown`
- records January 2023 unlend and withdrawal instructions during the regulatory-uncertainty phase-out
- records Flint Labs' confirmation that Flint Money had closed while the company pivoted
- exact final operational date remains unresolved
- outcome remains `unknown`
- withdrawal availability and company assurances are not treated as proof of universal completed withdrawal

### Batch-25 validation

```text
Validate data: success
Validate and build: success
CYA CI: success
Candidate audit: 13 entries, 0 possible matches
Build-output check: success
Block Earner route generated: /platform/block-earner-earner-product/
Flint route generated: /platform/flint-money/
```

## Queue and next identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate ID:       cya_candidate_000018
Next platform ID:        cya_plat_000039
Next event ID candidate: cya_ev_000194
Next formal batch:       batch 26
Next evidence prefix:    cya_src_b26_
```

Always rescan all canonical files before assigning IDs. Counts and maximum IDs are not interchangeable.

Goldfinch and BitMart remain staging-only:

- Goldfinch needs a DeFi/institutional-yield scope and entity-boundary decision.
- BitMart needs an exchange-Earn exception decision plus product-specific redemption, custody, and customer-outcome evidence.

## Current phase

```text
Phase 3A: reach 30 platforms                         complete
Phase 3B / R1: batch 22, 30 -> 32                   complete
Public-surface corrective gate                      complete
Phase 3B / R2: batch 23, 32 -> 34                   complete
Phase 3B / R3: batch 24, 34 -> 36                   complete
Phase 3B / R4: batch 25, 36 -> 38                   complete
Phase 3B / R5: batch 26, 38 -> 40                   current
Phase 4: 40-platform full audit                     next
Phase 5: scanner and draft generator                not started
Phase 6: 40 -> 60                                   not started
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Production verification state

```text
PR #43 public-surface implementation: merged
PR #48 batch-23 repository/public-output validation: complete
PR #51 batch-24 repository/public-output validation: complete
PR #54 batch-25 repository/public-output validation: complete
PR #54 Cloudflare production deployment: triggered by main merge
Direct production smoke confirmation: pending final observation
```

Before classifying the current release as production-verified, confirm the deployed commit and these public surfaces:

```text
/
/platform/block-earner-earner-product/
/platform/flint-money/
/version.json
/data/manifest.json
/data/platforms.json
/data/events.json
/data/evidence.json
/data/customer-outcomes.json
/data/products.json
/data/terms-risk.json
/sitemap.xml
robots.txt
```

Expected public counts are 38 / 188 / 274 with 38 outcomes, 56 products, 38 terms-risk records, 15 claims ongoing, and 50 generated pages.

Direct production access from the current execution environment is blocked by DNS resolution, so repository and generated-output gates are complete while external production observation remains explicitly pending rather than falsely reported as successful.

## Workflow maintenance note

The August 2026 GitHub runner emits Node.js 20 deprecation warnings for the action runtime. Validation remains green and the project installs Node 20.20.2 successfully. Review action/runtime upgrades during the 40-platform audit or a separate maintenance PR; do not mix them into record-growth batches.

## Interruption and recovery history

### Superseded public-surface work

- PR #42 closed as superseded.
- PR #43 rebuilt into a mergeable final implementation and merged.

### Closed legacy batch-23 branch

PR #40 and branch `cya-b23` were not resumed directly because they predated the public-surface correction, used candidate IDs later occupied by Goldfinch and BitMart, and contained incomplete canonical groups. Donut and Finblox were rebuilt from current `main` through fresh candidate-only and canonical PRs.

### Completed restart PRs

```text
#46 Refresh CYA resume checkpoint after public surface merge
#47 Stage Donut and Finblox batch 23 candidates
#48 Add batch 23 Donut and Finblox records
#49 Advance CYA roadmap after batch 23
#50 Stage Pillow and Nuri batch 24 candidates
#51 Add batch 24 Pillow and Nuri interest-account records
#52 Advance CYA roadmap after batch 24
#53 Stage Block Earner and Flint batch 25 candidates
#54 Add batch 25 Block Earner and Flint records
```

## Recovery procedure

After interruption:

```text
1. Read this file.
2. Fetch current main.
3. List open PRs.
4. Inspect branches for the current batch.
5. Confirm candidate queue state.
6. Run candidate audit and next-ID reporter.
7. Recalculate all record counts and maximum IDs.
8. Correct this checkpoint if repository reality differs.
9. Only then stage or edit records.
```

Recommended checks:

```bash
npm install
npm run candidates:check
npm run batch:next-ids
npm test
```

Never assume an interrupted PR operation failed; inspect open and closed PRs first.

## Standard growth PR lifecycle

```text
candidate selection
-> candidate-only commit
-> candidate audit and CI
-> new / exact match / ambiguous / out-of-scope decision
-> canonical promotion or existing-record enrichment
-> clear promoted candidates from active queue
-> record consumed/rejected decision
-> final CI on final head
-> ready/non-draft PR
-> squash merge with expected head SHA
-> production verification when canonical public output changes
-> update this checkpoint
-> mandatory merge report
```

Decision rules:

```text
0 possible matches    -> eligible for new canonical platform
exact existing match  -> no new platform; enrich existing record
ambiguous match       -> keep in staging; research; do not promote
out of scope          -> reject with recorded reason
```

Final required workflows:

```text
CYA CI
Validate data
Validate and build
```

Candidate-only CI success is not sufficient for canonical promotion.

## Remaining schedule

### Phase 3B — reach 40 platforms

| Logical PR | Batch | Intended movement | Status |
| --- | --- | ---: | --- |
| R1 | 22 | 30 -> 32 | complete |
| R2 | 23 | 32 -> 34 | complete |
| R3 | 24 | 34 -> 36 | complete |
| R4 | 25 | 36 -> 38 | complete |
| R5 | 26 | 38 -> 40 | current |

Normal target is two platforms per PR. A duplicate-enrichment PR is still successful; never force the count upward with an unreviewed replacement.

Candidate priority:

- documented withdrawal halt, bankruptcy, liquidation, restructuring, wind-down, acquisition, or major regulatory outcome
- primary court, regulator, administrator, or first-party sources
- customer outcome can be tracked
- yield/lending relationship is material
- not merely a generic exchange listing

Use one-platform PRs for complex multi-entity, multi-jurisdiction, disputed ownership, or uncertain recovery cases.

### Phase 4 — 40-platform full audit

Immediately after batch 26, create one audit-only PR. Do not add platforms in the audit PR.

Mandatory checks:

- duplicate canonical names, aliases, and domains
- product-scoped records accidentally conflated with continuing parent businesses
- broken platform and event references
- event `source_count` mismatches, including legacy warnings
- status, outcome, and end-date contradictions
- `claims_ongoing` records described as complete
- full-repayment records lacking direct primary support
- unsafe, repurposed, or stale domains
- missing archive URLs
- low-confidence events and medium-reliability evidence concentrations
- unknown outcomes and terms
- platforms with fewer than three evidence records
- candidate and consumed-history consistency
- split consumed files such as `cya-consumed-coinloan.json`
- GitHub Actions runtime and Node-version maintenance warnings
- production smoke access and deployment-observation procedure

Do not mix new platform additions into the audit PR.

### Phase 5 — staging automation

R7 candidate scanner:

- normalized names, aliases, domains
- official/archive URL candidates
- provisional status/confidence
- duplicate score
- output: new, exact, probable, ambiguous, out-of-scope, manual-review

R8 staging-only draft generator:

- platform, event, evidence, outcome, product, terms-risk drafts
- PR summary and reviewer checklist

Forbidden: automatic canonical promotion, direct main commit, automatic ready, automatic merge.

### Phase 6 — 40 to 60 platforms

R9-R16, about eight PRs of two to three platforms. Use automation but retain manual evidence review.

Measure duplicate rate, scanner false positives and negatives, draft completeness, primary-source coverage, and correction rate.

Completion: 60 platforms, no unresolved duplicate, no critical reference break, traceable candidate history, all CI green.

### Phase 7 — weekly monitoring

R17 monitoring configuration for official blogs, courts, administrators, creditor portals, regulators, archives, and domains.

R18 weekly GitHub Actions workflow. Findings go only to staging. No canonical writes and no PR when nothing material changed.

### Phase 8 — 60 to 100 platforms

```text
R19-R26: 60 -> 75
R27: 75-platform audit
R28-R39: 75 -> 100
R40: 100-platform maturity audit
```

At 75, audit scanner thresholds, draft omissions, outcomes, terms-risk, evidence density, and monitoring quality.

At 100, audit the complete operating system: canonical quality, candidate decisions, automation accuracy, monitoring usefulness, duplicate rate, primary-source rate, archive coverage, unknown and low-confidence rates, and event/evidence distribution.

## Planning horizon

Indicative, dependency-aware ranges from the current 38-platform baseline:

```text
38 -> 40:                 one reviewed batch
40-platform audit:       one audit PR
staging automation:      1-2 working weeks
40 -> 60:                4-8 working weeks
monitoring setup:        1-2 working weeks
60 -> 75:                3-6 working weeks
75 audit:                1 working week
75 -> 100:               5-10 working weeks
100 audit:               1-2 working weeks
```

These are planning ranges, not promises of continuous daily work.

## Update rule

After every covered merge, update:

```text
confirmed main commit
latest merged PR
platform/event/evidence/outcome/product/terms counts
next candidate/platform/event IDs
next batch and evidence prefix
candidate queue state
completed logical PR
current phase and execution point
production verification state when public output changed
```

Do not leave a stale current-location marker.

## Mandatory merge report

Before the next PR, report:

```text
1. merge commit
2. changes
3. platform / event / evidence counts
4. current phase
5. overall roadmap position
6. next PR
7. production verification state when applicable
```

## Immediate next action

```text
Phase 3B / R5 / batch 26

1. scan canonical data and candidate history before assigning IDs
2. select two evidence-ready CeFi lending or historically significant yield candidates
3. keep Goldfinch and BitMart in needs_research unless an explicit scope decision is completed
4. stage fresh candidates beginning at cya_candidate_000018
5. run duplicate audit and candidate-only CI
6. promote only public-quality records with platform, event, evidence, outcome, product, and terms-risk coverage
7. run final CI and generated-public-output checks
8. squash merge with expected head SHA
9. confirm the 40-platform canonical checkpoint
10. begin the Phase 4 audit without adding new platforms
```
