# CYA record growth execution roadmap

Status: active execution checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-03

## Purpose

This document is the recovery point for CYA record-growth, audit, automation, and monitoring work.

It records:

- the latest confirmed `main`
- current canonical counts
- current candidate queue and next IDs
- completed logical phases
- the first incomplete gate
- the ordered schedule through 100 platforms

Permanent operating policy remains in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Unreviewed candidates, generated drafts, monitoring findings, and private notes stay under `data-staging/`.
- Never write directly to `main`.
- Never promote before name, alias, domain, product-boundary, and entity-boundary review.
- Never infer final recovery rates or repayment completion.
- Do not treat moratorium, plan effectiveness, a new brand, a corporate dissolution, an automated status page, or a withdrawal window as sufficient proof of customer outcome.
- GitHub search is supplementary; candidate audit and canonical JSON inspection are authoritative.

## Current confirmed baseline

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: 30691bb79eecdf82d7b56fe4435720db81fdba47
Latest merged PR: #57 Add batch 26 Inlock and Stablehouse records
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

The final batch-26 validation confirmed that source arrays, generated HTML, public JSON, manifest counts, version metadata, and sitemap inputs resolve to the same counts.

## Latest completed work

```text
Phase 3B / R5 / batch 26: complete
40-platform growth checkpoint: complete
```

### Inlock

- promoted as `cya_plat_000039`
- `operations_ended / risk_mismanagement`
- records the November 2022 emergency shutdown after a failed liquidation process
- records migration, discounted exit-payout, scheduled-release, and final-settlement paths
- records the end of active services on 30 June 2026
- outcome is `partial_repayment`
- fixed incident-date U.S.-dollar milestones are not treated as universal in-kind recovery

### Stablehouse

- promoted as `cya_plat_000040`
- `acquired / acquisition`
- records the 2021 yield-platform launch and 2022 rate changes
- records XBTO's 2023 acquisition announcement and completed integration evidence
- records the transition toward institutional custody and trading
- outcome is `not_applicable`
- no failure, customer-loss, withdrawal-halt, or repayment event is inferred

### Batch-26 validation

```text
Validate data: success
Validate and build: success
CYA CI: success
Candidate audit: 15 entries, 0 possible matches
Build-output check: success
Inlock route generated: /platform/inlock/
Stablehouse route generated: /platform/stablehouse/
40-platform checkpoint: confirmed
```

## Queue and reserved next identifiers

```text
Active candidate queue: 2 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000011 BitMart

Next candidate ID after audit: cya_candidate_000020
Next platform ID after audit:  cya_plat_000041
Next event ID after audit:     cya_ev_000206
Next evidence prefix:          cya_src_b27_
```

These identifiers are reserved only. Do not start batch 27 before the Phase 4 audit is complete.

Goldfinch and BitMart remain staging-only:

- Goldfinch requires a DeFi/institutional-yield scope and entity-boundary decision.
- BitMart requires an exchange-Earn exception decision plus product-specific redemption, custody, and customer-outcome evidence.

## Current phase

```text
Phase 3A: reach 30 platforms                         complete
Phase 3B / R1: batch 22, 30 -> 32                   complete
Public-surface corrective gate                      complete
Phase 3B / R2: batch 23, 32 -> 34                   complete
Phase 3B / R3: batch 24, 34 -> 36                   complete
Phase 3B / R4: batch 25, 36 -> 38                   complete
Phase 3B / R5: batch 26, 38 -> 40                   complete
Phase 4: 40-platform full audit                     current
Phase 5: scanner and draft generator                not started
Phase 6: 40 -> 60                                   not started
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
Create one audit-only PR covering the entire 40-platform corpus.
Do not add platforms in the audit PR.
```

Audit order:

```text
1. run current validation, quality, build, and candidate checks
2. inspect every warning rather than only checking process exit status
3. repair critical reference, duplicate, count, and contradiction defects
4. classify non-critical quality debt into explicit follow-up queues
5. clean candidate-history fragmentation where safe and traceable
6. review workflow runtime warnings and production-smoke procedure
7. rerun all repository gates
8. merge the audit PR
9. update this checkpoint to Phase 5
```

## Production verification state

```text
PR #43 public-surface implementation: merged
Batches 23-26 repository/public-output validation: complete
PR #57 Cloudflare production deployment: triggered by main merge
Direct production observation: pending
```

Expected public values after deployment:

```text
platforms: 40
events: 200
evidence: 298
outcomes: 40
products: 58
terms-risk: 40
claims ongoing: 15
```

Required public surfaces:

```text
/
/platform/inlock/
/platform/stablehouse/
/version.json
/data/manifest.json
/data/platforms.json
/data/events.json
/data/evidence.json
/data/customer-outcomes.json
/data/products.json
/data/terms-risk.json
/sitemap.xml
/robots.txt
```

Direct production access from the current execution environment may fail at DNS resolution. Repository and generated-output gates must remain separate from external deployment observation; never report production success without direct evidence.

## Workflow maintenance note

The August 2026 GitHub runner emits Node.js 20 deprecation warnings for some action runtimes. Validation remains green and Node 20.20.2 installs successfully. Review workflow action versions and runtime compatibility in the Phase 4 audit or a separate maintenance PR.

## Recovery procedure

After interruption:

```text
1. Read this file and docs/development-policy.md.
2. Fetch current main.
3. List open and recently closed PRs.
4. Confirm the current phase and first incomplete gate.
5. Confirm candidate queue state.
6. Run candidate audit and next-ID reporter.
7. Recalculate all canonical counts and maximum IDs.
8. Correct this checkpoint if reality differs.
9. Resume only from the first incomplete gate.
```

Recommended checks:

```bash
npm install
npm run candidates:check
npm run batch:next-ids
npm run validate
npm run quality
npm run build
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
```

## Phase 4 — 40-platform full audit

The audit PR must not add new platforms.

### Integrity checks

- duplicate platform IDs, slugs, canonical names, aliases, and domains
- duplicate event and evidence IDs
- missing platform and event references
- event `source_count` mismatches, including legacy warnings
- missing outcome, product, or terms-risk coverage
- unresolved `source_evidence_id` references
- count mismatch across source arrays, generated HTML, public JSON, manifest, version metadata, and sitemap

### Classification checks

- status, failure reason, end date, and outcome contradictions
- `claims_ongoing` records described as complete
- `full_repayment` records lacking direct primary support
- product-scoped records conflated with continuing parent businesses
- acquired/rebranded records incorrectly described as failures
- ordinary account assets mixed with product-specific yield claims
- value-based recovery metrics described as in-kind or universal recovery

### Evidence and URL checks

- unsafe, repurposed, stale, or dead original domains
- missing archive URLs
- low-confidence platforms and events
- medium/low-reliability evidence concentrations
- platforms with fewer than three evidence records
- unknown outcomes and unknown/unclear terms
- source-type and claim-scope consistency

### Staging and workflow checks

- active, consumed, and rejected candidate-ledger consistency
- split consumed history such as `cya-consumed-coinloan.json`
- stale candidate IDs and duplicate decisions
- GitHub Actions runtime warnings
- preview workflow scope for staging-only and data-only changes
- production-smoke access and deployment-observation procedure

### Audit output

The audit PR should include:

- repaired canonical or tooling defects where evidence is sufficient
- a machine-readable or Markdown audit report
- an explicit list of remaining non-blocking quality debt
- confirmed 40-platform counts after all fixes
- no new platform records

## Phase 5 — staging automation

After the audit:

### R7 candidate scanner

- normalized names, aliases, and domains
- official and archive URL candidates
- provisional status and confidence
- duplicate score
- output classes: new, exact, probable, ambiguous, out-of-scope, manual-review

### R8 staging-only draft generator

Generate reviewable drafts for:

- platform
- event
- evidence
- outcome
- product
- terms risk
- PR summary
- reviewer checklist

Forbidden:

- direct main writes
- automatic canonical promotion
- automatic ready-for-review transition
- automatic merge

## Phase 6 — 40 to 60 platforms

Use scanner and draft-generator output while retaining manual evidence review and candidate-only duplicate gates.

Completion requirements:

```text
60 canonical platforms
no unresolved canonical duplicate
no critical reference break
traceable candidate history
all final CI checks green
```

## Phase 7 — weekly monitoring

Monitor official blogs, court and administrator pages, creditor portals, regulators, archives, and official domains. Findings remain in staging. Create no PR when nothing material changed.

## Phase 8 — 60 to 100 platforms

```text
60 -> 75
75-platform audit
75 -> 100
100-platform maturity audit
```

## Update rule

After every covered merge, update:

```text
confirmed main commit
latest merged PR
all six canonical counts
next reserved IDs
candidate queue state
completed logical PR
current phase and first incomplete gate
production-verification state
```

Do not leave a stale current-location marker.

## Immediate next action

```text
Phase 4 / 40-platform full audit

1. create an audit branch from current main
2. run and inspect all integrity and quality checks
3. repair confirmed defects only
4. write the audit report and remaining-debt list
5. run all final repository gates
6. merge the audit-only PR
7. advance to Phase 5 candidate scanner
```
