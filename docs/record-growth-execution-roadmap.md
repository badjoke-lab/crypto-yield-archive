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
- Never promote before name/alias/domain duplicate review.
- Never infer final recovery rates or repayment completion.
- Do not treat moratorium, plan effectiveness, a new brand, a new token, a corporate dissolution, or an automated status page as sufficient proof of customer outcome.
- GitHub search is supplementary; the candidate audit and canonical JSON are authoritative.

## Current confirmed baseline

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: 709359bbd6d289ff4730b15c183fa5105a2f432b
Latest merged PR: #48 Add batch 23 Donut and Finblox records
```

### Current canonical scale

```text
Platforms:       34
Events:          169
Evidence:        233
Outcomes:         34
Products:         52
Terms risk:       34
Claims ongoing:   14
Generated pages:  46
```

Validation on the final batch-23 head confirmed that HTML, canonical JSON datasets, manifest counts, version metadata, sitemap inputs, and all six canonical record groups resolve to the same counts.

### Latest completed logical work

```text
R2 / batch 23: complete
```

Donut:

- promoted as `cya_plat_000033`
- `operations_ended / counterparty_exposure`
- records the November 2022 Genesis-linked account halt
- records the February 2023 discontinuation and 31 March 2023 app-removal deadline
- records the underlying August 2024 Genesis distribution milestone
- outcome remains `claims_ongoing`
- no universal Donut-specific recovery percentage or completion date is claimed

Finblox:

- promoted as `cya_plat_000034`
- `operations_ended / counterparty_exposure`
- records the June 2022 withdrawal restrictions and reward pause
- records the July 2022 partial restoration
- records the reported 7 July 2025 service closure
- records the March 2026 FINBLOX LIMITED dissolution as corroborating evidence
- outcome remains `unknown`
- the surviving automated status page is treated as potentially stale rather than proof of active service

Batch-23 validation:

```text
Validate data: success
Validate and build: success
CYA CI: success
Candidate audit: 9 entries, 0 possible matches
Build-output check: success
Donut route generated: /platform/donut/
Finblox route generated: /platform/finblox/
```

### Queue and next identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate ID:       cya_candidate_000014
Next platform ID:        cya_plat_000035
Next event ID candidate: cya_ev_000175
Next formal batch:       batch 24
Next evidence prefix:    cya_src_b24_
```

Always rescan all canonical files before assigning IDs. Counts and maximum IDs are not interchangeable.

Goldfinch and BitMart remain staging-only. Goldfinch needs an explicit DeFi/institutional-yield scope and entity-boundary decision. BitMart needs an exchange-Earn exception decision and product-specific redemption, custody, and customer-outcome evidence.

### Current phase

```text
Phase 3A: reach 30 platforms                         complete
Phase 3B / R1: batch 22, 30 -> 32                   complete
Public-surface corrective gate                      complete
Phase 3B / R2: batch 23, 32 -> 34                   complete
Phase 3B / R3: batch 24, 34 -> 36                   current
Phase 3B / R4-R5: reach 40                          not started
Phase 4: 40-platform audit                          not started
Phase 5: scanner and draft generator                not started
Phase 6: 40 -> 60                                   not started
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

### Production verification state

```text
PR #43 public-surface implementation: merged
PR #48 repository/public-output validation: complete
PR #48 Cloudflare production deployment: triggered by main merge
Direct production smoke confirmation: pending final observation
```

The repository gate is complete. Before classifying the release as production-verified, confirm the deployed commit and the following public surfaces:

```text
/
/platform/donut/
/platform/finblox/
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

Expected public counts are 34 / 169 / 233 with 34 outcomes, 52 products, 34 terms-risk records, and 14 claims ongoing.

## Interruption and recovery history

### Superseded public-surface work

- PR #42 was closed as superseded.
- PR #43 was rebased into a mergeable final implementation and merged.

### Closed batch-23 branch

PR #40 and branch `cya-b23` were not resumed directly because they predated the public-surface correction, used candidate IDs later occupied by Goldfinch and BitMart, and contained incomplete canonical groups. Donut and Finblox were rebuilt from current `main` through fresh candidate-only and canonical PRs.

### Completed restart PRs

```text
#46 Refresh CYA resume checkpoint after public surface merge
#47 Stage Donut and Finblox batch 23 candidates
#48 Add batch 23 Donut and Finblox records
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
| R3 | 24 | 34 -> 36 | current |
| R4 | 25 | 36 -> 38 | pending |
| R5 | 26 | 38 -> 40 | pending |

Normal target is two platforms per PR. A duplicate-enrichment PR is still successful; never force the count upward with an unreviewed replacement.

Candidate priority:

- documented withdrawal halt, bankruptcy, liquidation, restructuring, wind-down, acquisition, or major regulatory outcome
- primary court, regulator, administrator, or first-party sources
- customer outcome can be tracked
- yield/lending relationship is material
- not merely a generic exchange listing

Use one-platform PRs for complex multi-entity, multi-jurisdiction, disputed ownership, or uncertain recovery cases.

### Phase 4 — 40-platform full audit

One audit-only PR after 40 platforms. Do not add platforms in the audit PR.

Check:

- duplicate names, aliases, domains
- broken platform/event references
- source-count mismatch
- status/outcome/end-date contradictions
- `claims_ongoing` records described as complete
- unsafe or repurposed domains
- missing archive URLs
- low-confidence seeds
- unknown outcomes and terms
- candidate history and split consumed files

Consolidate `cya-consumed-coinloan.json` and other split history when safe and traceable.

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

Measure duplicate rate, scanner false positives/negatives, draft completeness, primary-source coverage, and correction rate.

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

At 100, audit the full operating system: canonical quality, candidate decisions, automation accuracy, monitoring usefulness, duplicate rate, primary-source rate, archive coverage, unknown/low-confidence rates, and event/evidence distribution.

## Planning horizon

Indicative, dependency-aware ranges from the current 34-platform baseline:

```text
34 -> 40:                 2-4 working weeks
40-platform audit:       1 week
staging automation:      1-2 weeks
40 -> 60:                4-8 weeks
monitoring setup:        1-2 weeks
60 -> 75:                3-6 weeks
75 audit:                1 week
75 -> 100:               5-10 weeks
100 audit:               1-2 weeks
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
Phase 3B / R3 / batch 24

1. complete the post-merge production smoke for batch 23
2. scan the canonical corpus and candidate history before assigning IDs
3. select two evidence-ready CeFi lending or historically significant yield candidates
4. keep Goldfinch and BitMart in needs_research unless an explicit scope decision is completed
5. stage fresh candidates beginning at cya_candidate_000014
6. run duplicate audit and candidate-only CI
7. promote only public-quality records with platform, event, evidence, outcome, product, and terms-risk coverage
8. run final CI and generated-public-output checks
9. squash merge with expected head SHA
10. verify production and update this checkpoint
```
