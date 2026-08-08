# CYA record growth execution roadmap

Status: active execution checkpoint  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-09

## Purpose

This file is the authoritative recovery point for CYA record growth, candidate review, canonical promotion, production deployment, and verification.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates and generated drafts remain under `data-staging/` or workflow artifacts until reviewed.
- Use one candidate-only PR followed by one separate canonical PR for new records.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, fraud, or customer outcome from marketing or candidate metadata.
- Product, legal-entity, jurisdiction, terms-version, custody, identity, and customer-outcome boundaries require explicit review.
- Repository validation, Cloudflare build state, and direct production observation are separate claims.

## Current confirmed baseline

```text
Repository:              badjoke-lab/crypto-yield-archive
Default branch:          main
Canonical release SHA:   0ef086c1f635235a6e395fa286b743561987d51b
Latest canonical PR:     #117 Add batch 36 FTX Earn and Liquid Earn records
Candidate-only PR:       #116 Stage batch 36 FTX Earn and Liquid Earn candidates
Production verification: run #162 success
```

### Canonical scale

```text
Platforms:       60
Events:          281
Evidence:        426
Outcomes:         60
Products:         97
Terms risk:       60
Claims ongoing:   18
Generated pages:  74
```

Batch-36 repository validation and direct production verification confirmed canonical references, candidate history, generated HTML, machine-readable JSON, manifest counts, sitemap inputs, both new platform routes, the 60-record public registry, and representative desktop/mobile surfaces.

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

The hardened scanner fails CI when an `add_now` candidate is classified as an exact, probable, or ambiguous canonical match. `needs_research` matches remain visible for manual review but cannot be promoted automatically.

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
- Representative desktop and mobile page screenshots run for public-surface changes.
- Batch 36 production capture completed 24/24 representative states with 0 failures.

### Cloudflare production verification

Production verification is bound directly to `main` and requires both the Cloudflare Pages check and custom-domain `/version.json` build commit to match the triggering main SHA before the public-surface audit can pass.

Batch 36 production result:

```text
Expected/source commit:   0ef086c1f635235a6e395fa286b743561987d51b
Observed build commit:    0ef086c1f635235a6e395fa286b743561987d51b
Observed branch:          main
Production Surface Check: #162 success
Public registry:          60 platforms
Representative states:   24/24
Visual failures:          0
```

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
Batch 35: BlueBenx + Hotbit Investment Products     56 -> 58
Batch 36: FTX Earn + Liquid Earn                    58 -> 60
```

## Batch 34 execution summary

Candidate-only gate: PR #103  
Canonical promotion: PR #104

### Finder Earn

- `cya_plat_000055`
- product-scoped record separate from Finder.com and later Wallet Ventures activity
- late-February 2022 launch timing preserved without inventing an exact day
- Australian-dollar deposits, TAUD conversion and Finder Wallet working-capital use recorded
- product ceased from 24 November 2022
- ASIC states all customer funds were returned in full
- 2022 ASIC allegations, 2024 first-instance dismissal and 2025 appeal dismissal recorded separately
- outcome: `full_repayment`

### AAX Savings

- `cya_plat_000056`
- Flexible Savings, Fixed Savings and AAB Plus separated from spot and derivatives accounts
- AAX Asia and AAX Singapore separated from the wider multi-jurisdictional AAX Group
- November 2022 withdrawal freeze recorded separately from reported police allegations
- Singapore court findings support insolvency and winding-up for AAX Asia and AAX Singapore
- effective winding-up date: 17 October 2023
- missing customer records and uncertain contracting entities remain explicit
- outcome: `unknown`

## Batch 35 execution summary

Candidate-only gate: PR #113  
Canonical promotion: PR #114  
Canonical release SHA: `81069600d1334b7e3a035f8046207c438282bdb4`  
Production verification: Production Surface Check run #161 — success

### BlueBenx

- `cya_plat_000057`
- status: `withdrawals_suspended`
- failure reason: `unknown`
- August 2022 suspension of withdrawals, redemptions, deposits and transfers recorded
- BlueBenx's claimed hack preserved only as an attributed company explanation
- later CVM stop order and administrative sanctions recorded as separate events
- final platform end date and customer recovery remain unknown
- outcome: `unknown`

### Hotbit Investment Products

- `cya_plat_000058`
- product-scoped Investment Center / DeFi Farm / staking record
- first-party notices document internal product closures and automatic redemption
- internal product redemption is kept separate from external withdrawal completion
- all CEX operations ended on 22 May 2023
- status: `operations_ended`
- failure reason: `voluntary_shutdown`
- outcome: `unknown`

## Batch 36 execution summary

Candidate-only gate: PR #116  
Canonical promotion: PR #117  
Canonical release SHA: `0ef086c1f635235a6e395fa286b743561987d51b`  
Production verification: Production Surface Check run #162 — success

### Candidate selection

The active queue did not contain two promotion-ready records, so two product-scoped exchange-yield candidates were researched and staged with reserved IDs `cya_candidate_000051` and `cya_candidate_000052`.

- FTX Earn passed the hardened duplicate gate as a distinct yield-product record rather than a generic FTX exchange dossier.
- Liquid Earn passed the hardened duplicate gate as a distinct Liquid/Celsius-powered yield product rather than a generic Liquid exchange dossier.
- Goldfinch, Cabital and Outlet Finance remain `needs_research`.

### FTX Earn

- `cya_plat_000059`
- type: `exchange_earn`
- status: `bankrupt`
- failure reason: `insolvency`
- FTX App Earn preserved as the historical product boundary
- 11 November 2022 Chapter 11 filing used as the product record end date
- post-bankruptcy support explicitly includes Earn amounts in customer account histories
- initial plan distributions recorded from 18 February 2025
- customer outcome: `claims_ongoing`
- no FTX-wide distribution percentage is treated as a product-specific FTX Earn recovery rate
- FTX.com, FTX US and other legal-entity/jurisdiction boundaries remain explicit

### Liquid Earn

- `cya_plat_000060`
- type: `exchange_earn`
- launch date: 28 April 2021
- launch tied to Celsius's compounding-yield integration
- fiat and crypto withdrawals suspended on 15 November 2022 after parent FTX entered Chapter 11
- status: `withdrawals_suspended`
- failure reason: `counterparty_exposure`
- customer outcome: `claims_ongoing`
- Liquid's current help center continues to direct users to the FTX Chapter 11 claims process
- no independent Liquid/Quoine insolvency finding is inferred
- no assumption is made that every Liquid Earn balance was a direct Celsius claim

### Batch-36 repository validation

```text
Validate data:                 success
Validate and build:            success
CYA CI:                        success
SEO:                           success
Candidate scan:                success
Candidate draft:               success
Representative screenshots:    success
Corpus blockers:               0
FTX Earn route:                /platform/ftx-earn/
Liquid Earn route:             /platform/liquid-earn/
Generated pages:               74
Machine-readable counts:       60 / 281 / 426 / 60 / 97 / 60
Claims ongoing:                18
Quality-debt items:            23
```

### Batch-36 production verification

```text
Production Surface Check:      run #162 success
Expected build commit:         0ef086c1f635235a6e395fa286b743561987d51b
Observed build commit:         0ef086c1f635235a6e395fa286b743561987d51b
Observed branch:               main
Primary records / platforms:   60
Events:                        281
Evidence:                      426
Customer outcomes:             60
Product profiles:              97
Terms-risk records:            60
Claims ongoing:                18
Home record cards:             18
Platform registry rows:        60
Support page:                  present
Shared support wallets:        present
Production visual states:      24/24
Production visual failures:    0
```

## Candidate queue and reserved identifiers

```text
Active candidate queue: 3 needs_research candidates
- cya_candidate_000010 Goldfinch
- cya_candidate_000045 Cabital
- cya_candidate_000049 Outlet Finance

Next candidate IDs:      cya_candidate_000053 / cya_candidate_000054
Next platform ID:        cya_plat_000061
Next event ID:           cya_ev_000287
Latest completed batch:  36
```

No active candidate is approved for silent promotion:

- Goldfinch requires a DeFi/institutional-yield scope and entity-boundary decision.
- Cabital requires operating-entity, product-boundary, closure, custody and customer-outcome evidence.
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
Phase 6 / batch 35: 56 -> 58                        complete
Phase 6 / batch 36: 58 -> 60                        complete
Phase 7: weekly existing-record monitoring          current
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Phase 6 completion gate

```text
60 canonical platforms                              complete
no unresolved canonical duplicate                  complete
no critical reference break                        complete
traceable candidate history                        complete
all final CI checks green                          complete
verified production deployment                     complete
```

Phase 6 is complete. Registry growth beyond 60 belongs to Phase 8 after the Phase 7 monitoring gate is established.

## Current execution point

```text
Phase 7: weekly existing-record monitoring

1. define the monitoring scope and output contract for the 60 canonical platforms
2. reuse canonical platform IDs and existing evidence/status fields; do not create parallel record identities
3. detect stale verification dates, broken or repurposed official/evidence URLs, current-status changes, claim-process changes and material new events
4. keep detected changes in review-only staging/report output until explicitly reviewed
5. never auto-promote a monitoring signal into canonical status, failure reason, customer outcome or recovery percentage
6. add a scheduled GitHub Actions workflow plus workflow_dispatch
7. validate that a no-change run produces a clean report without canonical writes
8. validate that synthetic fixtures can surface expected status/evidence/claim alerts
9. merge the monitoring implementation only after canonical-write guards and repository checks pass
10. after Phase 7 is operational, begin Phase 8 growth from 60 toward 75 and 100 with full audits at both milestones
```

## Known non-blocking quality debt

The latest corpus audit reports 0 blockers and 23 quality-debt items. These remain non-blocking and must not be hidden or replaced with guessed values.

Current categories include:

- several legacy platforms with fewer than three evidence records
- several repurposed original URLs
- Flint and BitLendingClub without exact verified end dates
- historical terms that remain unknown or unclear for several records
- split consumed-ledger files
- older workflow runtime/deprecation warnings
- Cloudflare PR previews that are not consistently provisioned

## Production verification state

```text
Repository/public-output validation at 60 platforms: complete
Cloudflare main deployment for 0ef086c1: complete
Direct custom-domain verification: complete
Production Surface Check run #162: success
Representative production visual audit: 24/24 states, 0 failures
```

Verified public values:

```text
platforms: 60
events: 281
evidence: 426
outcomes: 60
products: 97
terms-risk: 60
claims ongoing: 18
```

## Recovery procedure

```text
1. Read this file and docs/development-policy.md.
2. Fetch current main and recent/open PRs.
3. Check the latest Cloudflare production commit and Production Surface Check.
4. Confirm active candidates and all consumed ledgers.
5. Recalculate canonical counts and maximum IDs.
6. If Phase 7 is incomplete, resume monitoring implementation before Phase 8 record growth.
7. Do not silently promote monitoring findings or needs_research candidates.
8. Correct this checkpoint if repository reality differs.
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

## Immediate next action

```text
Begin Phase 7 weekly existing-record monitoring implementation for the 60-platform canonical registry.
Keep monitoring outputs review-only and preserve canonical-write guards.
Do not begin Phase 8 60 -> 100 growth until the Phase 7 monitoring gate is operational.
```
