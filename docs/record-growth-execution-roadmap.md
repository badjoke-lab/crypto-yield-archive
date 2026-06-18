# CYA record growth execution roadmap

Status: active execution checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-06-18  

## 1. Purpose

This document is the recovery point for CYA record-growth work.

It records:

- the latest confirmed main commit
- the current canonical record counts
- the next batch and ID ranges
- the current phase
- the ordered pull-request schedule through 100 platforms
- the checks required before and after every merge

The permanent operating rules remain in `docs/record-growth-plan.md`.
This file is the changing execution ledger and must be updated after every merged record-growth, audit, automation, or monitoring pull request.

## 2. Canonical safety rule

The public registry under `data/` is canonical.

Unreviewed candidates, machine-generated drafts, monitoring findings, and internal research notes must remain under `data-staging/` until explicitly promoted through a reviewed pull request.

Never:

- write directly to `main`
- publish a candidate before duplicate review
- infer final recovery rates
- infer repayment completion
- treat a moratorium application as completed liquidation
- treat a new business, token, or brand as proof that old creditor claims were resolved
- rely on GitHub code search alone for duplicate decisions

## 3. Current confirmed baseline

### Repository

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: a954111da60670c6663ded21457a8f17890bef52
Latest merged PR: #35 Add batch 21 Zipmex record
```

### Recent completed work

```text
PR #33
Strengthen existing Babel Finance restructuring record
Merge commit: 4997c1c9ef6dad3cc98da9083a9c91d42f4f3e7a
Result: duplicate candidate matched existing cya_plat_000009
Platform count remained 29

PR #34
Add batch 21 Zipmex record
Result: closed without merge after the pull-request creation path became inconsistent

PR #35
Add batch 21 Zipmex record
Merge commit: a954111da60670c6663ded21457a8f17890bef52
Result: Zipmex added as cya_plat_000030
```

### Current canonical scale

```text
Platforms: 30
Events:    146
Evidence:  197
```

These counts are the baseline recorded by merged PR #35. Recalculate them from the current repository before beginning a new batch if `main` has advanced.

### Current queue and next identifiers

```text
Active candidate queue: empty
Next candidate ID:       cya_candidate_000008
Next platform ID:        cya_plat_000031
Next event ID candidate: cya_ev_000152
Next formal batch:       batch 22
Next evidence prefix:    cya_src_b22_
```

The next event ID must always be confirmed by scanning all canonical event files. Record count and maximum ID are not interchangeable.

### Current phase

```text
Phase 3A: reach 30 platforms                         complete
Phase 3B: grow from 30 to 40 platforms              current
Phase 4:  audit the full 40-platform corpus         not started
Phase 5:  candidate scanner and draft generation    not started
Phase 6:  grow from 40 to 60 platforms              not started
Phase 7:  weekly monitoring of existing records     not started
Phase 8:  grow from 60 to 100 platforms             not started
```

Current execution point:

```text
Select and stage the two candidates for batch 22.
```

## 4. Recovery procedure

When work resumes after an interruption, perform these steps before changing data.

```text
1. Read this file.
2. Fetch the current main commit.
3. Confirm whether main still contains the baseline recorded above.
4. List all open pull requests.
5. Inspect branches related to the next batch.
6. Confirm the candidate queue state.
7. Run the candidate audit and next-ID reporter.
8. Recalculate platform, event, and evidence counts.
9. Update this file if reality differs from the recorded checkpoint.
10. Only then begin candidate staging or canonical edits.
```

Recommended local checks:

```bash
npm install
npm run candidates:check
npm run batch:next-ids
npm test
```

Do not assume an interrupted pull-request creation failed. Always check the open pull-request list before creating another one.

## 5. Standard pull-request lifecycle

Every record-growth pull request follows this order.

```text
candidate selection
  -> candidate-only commit
  -> duplicate audit
  -> exact/probable match decision
  -> canonical promotion or existing-record enrichment
  -> candidate queue removal
  -> consumed/rejected history update
  -> final validation
  -> ready for review
  -> squash merge with expected head SHA
  -> update this roadmap
  -> merge report
```

### Candidate-only gate

The first meaningful commit must change only candidate staging data unless the candidate has already completed a documented duplicate audit.

Review:

- canonical name
- aliases
- domain
- corporate names
- products and old brand names
- existing platform IDs
- possible predecessor/successor relationships

Priority order for duplicate decisions:

```text
candidate audit result
canonical JSON inspection
normalized name comparison
alias comparison
domain comparison
repository search
```

### Duplicate decision branches

```text
possible matches: 0
  -> promote as a new canonical platform

exact existing match
  -> do not add a platform
  -> enrich the existing platform record

ambiguous match
  -> keep the candidate in staging
  -> add research
  -> do not promote

out of scope
  -> move to rejected history with the reason
```

### Final CI gate

After canonical changes, rerun all required checks on the final head.

```text
CYA CI
Validate data
Validate and build
```

Candidate-only CI success is not enough to merge canonical changes.

## 6. Detailed execution schedule

The schedule is organized by logical pull requests rather than fixed PR numbers. Actual GitHub PR numbers are assigned when each pull request is created.

The calendar ranges are planning targets, not automatic merge deadlines. Court-source availability, duplicate findings, and CI failures may change them.

### Phase 3B — 30 to 40 platforms

Target window: approximately 3 to 5 working weeks  
Target: five reviewed batch pull requests, normally two new platforms per batch

| Logical PR | Batch | Intended movement | Main work | Completion gate |
| --- | --- | ---: | --- | --- |
| R1 | 22 | 30 -> 32 | Stage two candidates, audit duplicates, promote valid records | Final CI green; queue consumed |
| R2 | 23 | 32 -> 34 | Same controlled two-candidate flow | Final CI green; queue consumed |
| R3 | 24 | 34 -> 36 | Same controlled two-candidate flow | Final CI green; queue consumed |
| R4 | 25 | 36 -> 38 | Same controlled two-candidate flow | Final CI green; queue consumed |
| R5 | 26 | 38 -> 40 | Complete the 40-platform checkpoint | Final CI green; counts confirmed |

A batch is successful even when a candidate resolves to an existing platform.
Do not force the platform count upward by replacing a duplicate with an unreviewed candidate in the same final commit.

Candidate selection priority:

- withdrawal suspension is documented
- bankruptcy, liquidation, restructuring, or wind-down is documented
- court, regulator, administrator, or official sources exist
- customer outcome can be tracked
- the yield/lending relationship is material
- the candidate is not merely a generic exchange listing

Complex cases remain one-platform pull requests even during this phase.

### Phase 4 — 40-platform full quality audit

Target window: approximately 1 working week  
Target: one audit-only pull request

Logical PR: R6

Scope:

- all 40 platforms
- all events
- all evidence
- all outcomes
- all products
- all terms-risk records
- candidate history and staging files

Audit checks:

```text
duplicate canonical names
alias collisions
domain collisions
broken platform_id references
broken event_id references
source_count mismatches
status/outcome contradictions
end-date contradictions
claims_ongoing records described as completed
restructuring records described as normal operations
unsafe or repurposed domains
missing archive URLs
low-confidence seeds
unknown outcomes
unknown terms status
```

Staging cleanup includes:

- consolidating split consumed-candidate files where safe
- reviewing `cya-consumed-coinloan.json`
- removing obsolete staging fragments
- preserving a traceable decision history

Do not mix new platform additions into R6.

### Phase 5 — staging automation

Target window: approximately 1 to 2 working weeks  
Target: two implementation pull requests

#### R7 — candidate scanner

Add staging-only helpers for:

- normalized name matching
- alias matching
- domain matching
- official URL candidates
- archive URL candidates
- provisional status classification
- provisional confidence classification
- duplicate scoring

Required output classes:

```text
new_candidate
exact_match
probable_match
ambiguous
out_of_scope
manual_review_required
```

The scanner must never change canonical files.

#### R8 — staging-only draft generator

Generate reviewable drafts for:

- platform
- event
- evidence
- outcome
- product
- terms risk
- pull-request summary
- reviewer checklist

Forbidden behavior:

- automatic commits to main
- automatic canonical promotion
- automatic ready-for-review transition
- automatic merge

### Phase 6 — 40 to 60 platforms

Target window: approximately 4 to 8 working weeks  
Target: about eight pull requests, usually two to three platforms each

| Logical PR range | Intended movement | Operating change |
| --- | ---: | --- |
| R9-R16 | 40 -> 60 | Use scanner and draft generator, but retain manual evidence review and promotion |

During this phase, measure:

- exact duplicate rate
- probable duplicate rate
- scanner false positives
- scanner false negatives discovered during review
- draft-field completion rate
- primary-source coverage
- average review corrections per candidate

Completion gates:

```text
60 canonical platforms
no unresolved duplicate platform
no critical reference break
candidate history remains traceable
all final CI checks succeed
```

### Phase 7 — weekly existing-record monitoring

Target window: approximately 1 to 2 working weeks  
Target: two implementation pull requests

#### R17 — monitoring configuration

Monitor:

- official blogs
- court pages
- administrator or liquidator pages
- creditor portals
- regulator notices
- archive availability
- official domain status

Output classes:

```text
no_change
possible_update
source_unavailable
domain_changed
new_court_document
new_distribution_notice
manual_review_required
```

#### R18 — weekly workflow

Requirements:

- run weekly through GitHub Actions
- write findings only to staging
- create noise only for actionable warning/error conditions
- never modify canonical records
- avoid creating a pull request when nothing material changed

### Phase 8A — 60 to 75 platforms

Target window: approximately 3 to 6 working weeks  
Target: about six to eight record-growth pull requests

Logical PR range: R19-R26

Use monitoring findings and candidate scanning, but continue normal candidate-only duplicate gates.

### Phase 8B — 75-platform audit

Target window: approximately 1 working week  
Target: one audit-only pull request

Logical PR: R27

Review:

- additions since the 40-platform audit
- scanner error patterns
- duplicate-score thresholds
- generated draft omissions
- outcome classifications
- terms-risk classifications
- evidence density
- monitoring signal quality

### Phase 8C — 75 to 100 platforms

Target window: approximately 5 to 10 working weeks  
Target: about eight to twelve record-growth pull requests

Logical PR range: R28-R39

Increase ordinary batches toward three platforms only when:

- duplicate checks are stable
- source sets are straightforward
- the cases do not span complex legal entities or jurisdictions
- generated drafts require limited correction

Keep complex insolvency, restructuring, multi-entity, or disputed-outcome records in separate pull requests.

### Phase 8D — 100-platform maturity audit

Target window: approximately 1 to 2 working weeks  
Target: one audit-only pull request

Logical PR: R40

Review the complete operating system:

- canonical record quality
- candidate decision history
- staging automation accuracy
- monitoring usefulness
- duplicate rate
- primary-source rate
- archive coverage
- unknown outcome rate
- low-confidence rate
- event and evidence distribution per platform
- unresolved long-running claims

This audit decides the operating model beyond 100 platforms.

## 7. Overall planning horizon

Indicative full horizon from the current 30-platform baseline:

```text
30 -> 40 platforms:        3-5 working weeks
40-platform audit:         1 working week
staging automation:        1-2 working weeks
40 -> 60 platforms:        4-8 working weeks
weekly monitoring setup:   1-2 working weeks
60 -> 75 platforms:        3-6 working weeks
75-platform audit:         1 working week
75 -> 100 platforms:       5-10 working weeks
100-platform audit:        1-2 working weeks
```

Indicative total:

```text
20-37 working weeks
approximately 40 logical pull requests including this roadmap checkpoint
```

This is not a promise of continuous daily work. It is a dependency-aware estimate for reviewed, evidence-first growth.

## 8. Roadmap update rule

After every merge covered by this roadmap, update this file in the next immediate documentation change or as part of the merged pull request when safe.

Update at minimum:

```text
Confirmed main commit
Latest merged PR
Platforms / Events / Evidence
Next candidate ID
Next platform ID
Next event ID candidate
Next formal batch
Next evidence prefix
Candidate queue state
Current phase
Current execution point
Completed logical PR
Next logical PR
```

Do not leave a stale current-location marker after a merge.

## 9. Mandatory merge report

Before starting the next pull request, report:

```text
1. Merge commit
2. What changed
3. Current platform / event / evidence counts
4. Current phase and platform milestone
5. Overall roadmap position
6. Next pull request
```

Template:

```text
Merge commit:
<sha>

Merged:
<PR title>

Changes:
- ...
- ...

Current totals:
Platforms: XX
Events:    XX
Evidence:  XX

Current phase:
Phase X / batch XX

Overall progress:
30 -> 40 -> audit -> automation -> 60 -> monitoring -> 75 audit -> 100 -> maturity audit

Next PR:
<logical PR and purpose>
```

## 10. Immediate next action

The next record-growth work after this roadmap is merged is:

```text
Phase 3B / R1 / batch 22

1. Reconfirm main and next IDs.
2. Select two evidence-ready candidates.
3. Add them to the candidate queue only.
4. Run duplicate audit and candidate-only CI.
5. Promote only candidates with no canonical match.
6. Enrich existing records when a match is found.
7. Clear and record candidate decisions.
8. Run final CI.
9. Squash merge with expected head SHA.
10. Update this roadmap and publish the mandatory merge report.
```
