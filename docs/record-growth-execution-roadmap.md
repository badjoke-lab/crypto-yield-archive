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
- Do not treat moratorium, plan effectiveness, a new brand, or a new token as proof that old claims are resolved.
- GitHub search is supplementary; the candidate audit and canonical JSON are authoritative.

## Current confirmed baseline

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: 9fd65b61abb346c00b5981b209a6e8db228baf8b
Latest merged PR: #43 Unify canonical public counts and machine-readable data
```

### Current canonical scale

```text
Platforms:  32
Events:     158
Evidence:   214
Outcomes:    32
Products:    50
Terms risk:  32
Claims ongoing: 13
```

PR #43 changed public generation, metadata, SEO, redirects, and deployment safeguards only. It did not add or remove canonical records.

### Latest completed logical work

```text
R1 / batch 22: complete

Cred:
- promoted as cya_plat_000031
- operations_ended / misconduct
- Chapter 11 liquidation
- claims_ongoing

SALT Lending:
- promoted as cya_plat_000032
- active comparator
- 2022 withdrawal pause
- California settlement and license reinstatement

Corrective public-surface gate:
- PR #42 closed as superseded
- PR #43 merged as the final public-surface implementation
- canonical public JSON added for all six record groups
- HTML, machine-readable counts, build metadata, canonical links, redirects, sitemap, robots, and preview safeguards aligned
- Cloudflare branch preview succeeded before merge
- production verification for merge commit 9fd65b61 remains an explicit release check
```

### Queue and next identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate ID:       cya_candidate_000012
Next platform ID:        cya_plat_000033
Next event ID candidate: cya_ev_000164
Next formal batch:       batch 23
Next evidence prefix:    cya_src_b23_
```

Always rescan all canonical files before assigning IDs. Counts and maximum IDs are not interchangeable.

Goldfinch and BitMart are not approved batch-23 promotions. Both remain staging-only because their inclusion depends on scope and product-level outcome review.

### Current phase

```text
Phase 3A: reach 30 platforms                         complete
Phase 3B / R1: batch 22, 30 -> 32                   complete
Public-surface corrective gate                      complete in repository
Production verification for PR #43                  pending confirmation
Phase 3B / R2: batch 23, 32 -> 34                   current
Phase 3B / R3-R5: reach 40                          not started
Phase 4: 40-platform audit                          not started
Phase 5: scanner and draft generator                not started
Phase 6: 40 -> 60                                   not started
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

Current execution point:

```text
1. Confirm the PR #43 production deployment and public counts.
2. Reconstruct batch 23 from current main rather than reusing the closed branch directly.
3. Review Donut and Finblox as the first batch-23 candidate pair.
4. Assign candidate IDs cya_candidate_000012 and cya_candidate_000013 only after current duplicate and ID scans.
5. Keep Goldfinch and BitMart in needs_research unless separate scope review promotes them.
```

## Interruption findings recorded on 2026-08-03

### Closed batch-23 branch

PR #40 and branch `cya-b23` contain incomplete Donut and Finblox research. The branch must not be merged or resumed directly because:

- it predates the public-surface correction;
- it used candidate IDs now occupied by Goldfinch and BitMart;
- it mixed candidate staging and incomplete canonical files;
- its evidence, outcomes, products, and terms-risk records were not complete.

Reusable research may be inspected, but all new work must start from current `main` with fresh IDs and candidate-only staging.

### Open pull-request state

```text
PR #42: closed as superseded
PR #43: merged
Open development PRs after #43 merge: none expected before roadmap update
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
| R2 | 23 | 32 -> 34 | current |
| R3 | 24 | 34 -> 36 | pending |
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

Indicative, dependency-aware ranges from the current 32-platform baseline:

```text
32 -> 40:                 3-5 working weeks
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
Phase 3B / R2 / batch 23

1. verify production commit and canonical counts after PR #43
2. create a fresh batch-23 candidate branch from current main
3. stage Donut and Finblox only as cya_candidate_000012 and cya_candidate_000013 after ID scan
4. run duplicate audit and candidate-only CI
5. decide new platform / existing enrichment / hold / rejection separately for each candidate
6. complete public-quality platform, event, evidence, outcome, product, and terms-risk records only for approved candidates
7. preserve Goldfinch and BitMart as needs_research unless a separate scope decision changes them
8. run final CI
9. squash merge with expected head SHA
10. verify production and update this checkpoint
```
