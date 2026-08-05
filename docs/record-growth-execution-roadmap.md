# CYA record growth execution roadmap

Status: active execution checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-05

## Purpose

This file is the authoritative recovery point for CYA record growth, candidate review, canonical promotion, production deployment, and verification.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates and generated drafts remain under `data-staging/` or workflow artifacts until reviewed.
- Use one candidate-only PR followed by one separate canonical PR.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, fraud, or customer outcome from marketing or candidate metadata.
- Product, legal-entity, jurisdiction, terms-version, custody, identity, and customer-outcome boundaries require explicit review.
- Repository validation, Cloudflare build state, and direct production observation are separate claims.

## Current confirmed baseline

```text
Repository: badjoke-lab/crypto-yield-archive
Default branch: main
Confirmed main commit: 4ef61d652338cef84cff89f90246c7b49303c468
Latest merged PR: #104 Add batch 34 Finder Earn and AAX Savings records
Latest canonical PR: #104 Add batch 34 Finder Earn and AAX Savings records
```

### Canonical scale

```text
Platforms:       56
Events:          269
Evidence:        408
Outcomes:         56
Products:         91
Terms risk:       56
Claims ongoing:   16
Generated pages:  68
```

Batch-34 validation confirmed canonical references, candidate history, generated HTML, machine-readable JSON, manifest counts, sitemap inputs, and both new platform routes.

## Completed safety and automation gates

### Corpus audit

Completed in PR #59 and retained in normal `npm test`.

```text
Initial blockers: 37
Current blockers:  0
```

### Candidate scanner and draft generator

- PR #60: deterministic canonical-name, alias, and domain matching.
- PR #61: review-only six-group draft generation.
- PR #99: hardened duplicate gate.

The hardened scanner now fails CI when an `add_now` candidate is classified as an exact, probable, or ambiguous canonical match. `needs_research` matches remain visible for manual review but cannot be promoted automatically.

Required canonical groups remain:

- platform
- event
- evidence
- outcome
- product
- terms risk

Automatic canonical IDs, writes, promotion, and merge remain forbidden.

### SEO and visual validation

- PR #74: Open Graph, Twitter, structured data, reviewed sitemap dates and build-backed SEO validation.
- Representative desktop and mobile page screenshots now run for public-surface changes.

### Cloudflare deployment repair

- PR #85 removed the unusable token-dependent Direct Upload path and synchronized `main` to the configured Cloudflare production branch `agent/seo-hardening`.
- PR #89 chained production verification after synchronization.
- PR #91 created a unique Cloudflare-visible production commit with a source-main marker.
- PR #94 waits for the matching Cloudflare Pages check to succeed before running custom-domain verification.

Current batch-34 production path:

```text
Source main:              4ef61d652338cef84cff89f90246c7b49303c468
Cloudflare branch commit: 5e35fc217756ef9fed261099caa50bc1cbcebb53
Cloudflare Pages state:   build in progress at checkpoint update
Production verification: pending the post-build Production Surface Check
```

Do not claim the 56-platform custom-domain deployment as verified until the Production Surface Check succeeds.

## Phase 6 completed batches

```text
Batch 27: AQRU + YouHodler                          40 -> 42
Batch 28: Wirex X-Accounts + SwissBorg Earn         42 -> 44
Batch 29: CoinRabbit + Nebeus                       44 -> 46
Batch 30: Matrixport + Coinchange                   46 -> 48
Batch 31: YieldNodes + Bake                         48 -> 50
Batch 32: BitLendingClub + Bitbond Lending          50 -> 52
Batch 33: BitMart Earn + Kriptomat KriptoEarn       52 -> 54
Batch 34: Finder Earn + AAX Savings                 54 -> 56
```

## Batch 34 execution summary

Candidate-only gate: PR #103  
Canonical promotion: PR #104

### Discovery and duplicate correction

The hardened scanner prevented duplicate promotion and mapped the following proposals to existing canonical records:

```text
MyConstant      -> cya_plat_000026
Abra Earn       -> cya_plat_000013
Inlock          -> cya_plat_000039
Zipmex          -> cya_plat_000030
CoinFLEX        -> cya_plat_000029
Delio           -> cya_plat_000027
Finblox         -> cya_plat_000034
Linus Financial -> cya_plat_000028
Block Earner    -> cya_plat_000037
Stablegains     -> cya_plat_000025
Pillow          -> cya_plat_000035
Yield App       -> cya_plat_000024
```

Duplicate-review history is preserved in consumed ledgers. No duplicate canonical platform was added.

### Finder Earn

- `cya_plat_000055`
- product-scoped record separate from Finder.com and later Wallet Ventures activity
- late-February 2022 launch timing preserved without inventing an exact day
- Australian-dollar deposits, TAUD conversion and Finder Wallet working-capital use recorded
- product ceased from 24 November 2022
- ASIC states all customer funds were returned in full
- 2022 ASIC allegations, 2024 first-instance dismissal and 2025 appeal dismissal recorded separately
- outcome: `full_repayment`
- not classified as insolvency, fraud, an upheld licensing breach or a failed repayment case

### AAX Savings

- `cya_plat_000056`
- Flexible Savings, Fixed Savings and AAB Plus separated from spot and derivatives accounts
- AAX Asia and AAX Singapore separated from the wider multi-jurisdictional AAX Group
- November 2022 withdrawal freeze recorded separately from reported police allegations
- Singapore court findings support insolvency and winding-up for AAX Asia and AAX Singapore
- effective winding-up date: 17 October 2023
- missing customer records and uncertain contracting entities remain explicit
- outcome: `unknown`
- no universal fraud conviction, asset ownership, claim route, group-wide end date or recovery percentage inferred

### Batch-34 validation

```text
Validate data:                 success
Validate and build:            success
CYA CI:                        success
SEO:                           success
Candidate scan:                success
Candidate draft:               success
Representative screenshots:    success
Corpus blockers:               0
Finder route:                  /platform/finder-earn/
AAX route:                     /platform/aax-savings/
Generated pages:               68
Machine-readable counts:       56 / 269 / 408 / 56 / 91 / 56
```

## Candidate queue and reserved identifiers

```text
Active candidate queue: 4 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000045 Cabital
- cya_candidate_000047 BlueBenx
- cya_candidate_000049 Outlet Finance

Next candidate IDs:      cya_candidate_000050 / cya_candidate_000051
Next platform ID:        cya_plat_000057
Next event ID:           cya_ev_000275
Next canonical batch:    35
Next evidence prefix:    cya_src_b35_
```

No active candidate is approved for silent promotion:

- Goldfinch requires a DeFi/institutional-yield scope and entity-boundary decision.
- Cabital requires acquisition-perimeter, migration and successor-obligation evidence.
- BlueBenx requires reliable regulatory, court, legal-entity and customer-outcome evidence.
- Outlet Finance requires counterparty, closure, custody and repayment evidence.

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
Phase 6 / batch 33: 52 -> 54                        complete
Phase 6 / batch 34: 54 -> 56                        complete
Phase 6 / batch 35: 56 -> 58                        current
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
First: verify the 56-platform production deployment.
Then: Phase 6 / batch 35 candidate-only gate.

1. review the four active needs_research candidates
2. discover additional candidates when none are promotion-ready
3. run hardened canonical and consumed-ledger matching before add_now
4. investigate identity, product boundary, event history, terms, custody and customer outcome
5. use candidate IDs 000050 and 000051 for newly discovered records only
6. stage candidates without canonical changes
7. run candidate audit, hardened scanner, draft generator and all repository checks
8. merge the candidate-only PR
9. promote reviewed candidates in a separate canonical PR
```

## Phase 6 completion gate

```text
60 canonical platforms
no unresolved canonical duplicate
no critical reference break
traceable candidate history
all final CI checks green
verified production deployment
```

## Known non-blocking quality debt

- several legacy platforms have thin evidence coverage
- several original URLs are repurposed
- Flint and BitLendingClub have no exact verified end date
- historical terms remain unknown or unclear for several records
- split consumed-ledger files remain
- older workflows may emit Node.js 20 action-runtime warnings
- Cloudflare PR previews are not consistently provisioned and may remain pending or return 404 even when local build and visual checks pass

Do not hide these findings or replace them with guessed values.

## Production verification state

```text
Repository/public-output validation at 56 platforms: complete
Unique Cloudflare production commit creation: complete
Cloudflare build for 5e35fc2: in progress at checkpoint update
Direct custom-domain verification for 56 / 269 / 408: pending
```

Expected public values:

```text
platforms: 56
events: 269
evidence: 408
outcomes: 56
products: 91
terms-risk: 56
claims ongoing: 16
```

## Recovery procedure

```text
1. Read this file and docs/development-policy.md.
2. Fetch current main and recent/open PRs.
3. Check the latest Cloudflare production commit and Production Surface Check.
4. Confirm active candidates and all consumed ledgers.
5. Run candidate audit, hardened scanner, draft generator and next-ID reporter.
6. Recalculate canonical counts and maximum IDs.
7. Correct this checkpoint if repository reality differs.
8. Resume from the first incomplete gate only.
```

Recommended checks:

```bash
npm install
npm run candidates:check
npm run candidates:scan
npm run candidates:scan:guard -- <scan-artifact>
npm run candidates:draft
npm run batch:next-ids
npm test
```

## Immediate next action

```text
Confirm the 56-platform Cloudflare deployment and custom-domain surface.
Then begin Phase 6 / batch 35 candidate-only research with reserved IDs 000050 / 000051.
```
