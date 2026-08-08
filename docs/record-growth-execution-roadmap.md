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
- Use one candidate-only PR followed by one separate canonical PR.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, fraud, or customer outcome from marketing or candidate metadata.
- Product, legal-entity, jurisdiction, terms-version, custody, identity, and customer-outcome boundaries require explicit review.
- Repository validation, Cloudflare build state, and direct production observation are separate claims.

## Current confirmed baseline

```text
Repository:              badjoke-lab/crypto-yield-archive
Default branch:          main
Canonical release SHA:   81069600d1334b7e3a035f8046207c438282bdb4
Latest canonical PR:     #114 Add batch 35 BlueBenx and Hotbit Investment records
Candidate-only PR:       #113 Stage batch 35 BlueBenx and Hotbit yield candidates
Production verification: run #161 success
```

### Canonical scale

```text
Platforms:       58
Events:          277
Evidence:        417
Outcomes:         58
Products:         95
Terms risk:       58
Claims ongoing:   16
Generated pages:  72
```

Batch-35 repository validation and direct production verification confirmed canonical references, candidate history, generated HTML, machine-readable JSON, manifest counts, sitemap inputs, both new platform routes, the 58-record registry, and representative desktop/mobile surfaces.

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
- Batch 35 production capture completed 24/24 representative states with 0 failures.

### Cloudflare production verification

Production verification is bound directly to `main` and requires the custom-domain `/version.json` build commit to equal the triggering main SHA before the public-surface audit can pass.

Batch 35 production result:

```text
Expected/source commit:  81069600d1334b7e3a035f8046207c438282bdb4
Observed build commit:   81069600d1334b7e3a035f8046207c438282bdb4
Observed branch:         main
Production Surface Check: #161 success
Public registry:         58 platforms
Representative states:  24/24
Visual failures:         0
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

### Candidate selection

The batch began with four `needs_research` candidates: Goldfinch, Cabital, BlueBenx and Outlet Finance.

- BlueBenx was upgraded to `add_now` only after CVM primary material supplied legal-entity, product, regulatory and final administrative-enforcement evidence.
- Cabital remained `needs_research`; the earlier Matrixport acquisition premise had already been removed because the reviewed source established a commercial partnership, not an acquisition.
- Outlet Finance remained `needs_research` because counterparty, custody, closure and repayment evidence remains insufficient.
- Goldfinch remained `needs_research` because its DeFi/institutional-yield scope and entity boundary require a separate decision.
- `cya_candidate_000050` Hotbit Investment Products was newly staged as a product-scoped exchange-Earn candidate and passed the hardened duplicate gate.

### BlueBenx

- `cya_plat_000057`
- status: `withdrawals_suspended`
- failure reason: `unknown`
- August 2022 suspension of withdrawals, redemptions, deposits and transfers recorded
- BlueBenx's claimed hack preserved only as an attributed company explanation, not accepted as the verified causal failure reason
- 30 November 2022 CVM stop order recorded separately
- September 2024 CVM sanctions for an unregistered public securities offering recorded separately
- August 2025 CVM administrative sanctions for fraudulent securities-market operations and an unregistered offering recorded separately
- CVM findings are not described as a criminal fraud conviction
- final platform end date and customer recovery remain unknown
- outcome: `unknown`

### Hotbit Investment Products

- `cya_plat_000058`
- product-scoped record for Hotbit's Investment Center / DeFi Farm / staking layer, not a generic exchange listing
- first-party support notices document product closures and automatic redemption into Hotbit investment accounts
- internal product redemption is kept separate from external withdrawal completion
- all CEX operations ended on 22 May 2023
- users were instructed to withdraw remaining assets by 21 June 2023
- status: `operations_ended`
- failure reason: `voluntary_shutdown`
- universal customer recovery remains unknown
- outcome: `unknown`

### Batch-35 repository validation

```text
Validate data:                 success
Validate and build:            success
CYA CI:                        success
SEO:                           success
Candidate scan:                success
Candidate draft:               success
Representative screenshots:    success
Corpus blockers:               0
BlueBenx route:                /platform/bluebenx/
Hotbit route:                  /platform/hotbit-investment-products/
Generated pages:               72
Machine-readable counts:       58 / 277 / 417 / 58 / 95 / 58
Claims ongoing:                16
```

### Batch-35 production verification

```text
Production Surface Check:      run #161 success
Expected build commit:         81069600d1334b7e3a035f8046207c438282bdb4
Observed build commit:         81069600d1334b7e3a035f8046207c438282bdb4
Observed branch:               main
Primary records / platforms:   58
Events:                        277
Evidence:                      417
Customer outcomes:             58
Product profiles:              95
Terms-risk records:            58
Claims ongoing:                16
Home record cards:             18
Platform registry rows:        58
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

Next candidate IDs:      cya_candidate_000051 / cya_candidate_000052
Next platform ID:        cya_plat_000059
Next event ID:           cya_ev_000283
Next canonical batch:    36
Next evidence prefix:    cya_src_b36_
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
Phase 6 / batch 36: 58 -> 60                        current
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
Phase 6 / batch 36 candidate-only gate

1. review the three active needs_research candidates
2. discover additional high-value in-scope candidates when none are promotion-ready
3. run hardened canonical and consumed-ledger matching before add_now
4. investigate identity, product boundary, event history, terms, custody and customer outcome
5. use candidate IDs 000051 and 000052 for newly discovered records only
6. stage candidates without canonical changes
7. run candidate audit, hardened scanner, draft generator and all repository checks
8. merge the candidate-only PR
9. promote reviewed candidates in a separate canonical PR
10. verify the 60-platform production deployment
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

Batch 36 is the final 58 -> 60 gate before Phase 7 monitoring begins and before Phase 8 expands the registry from 60 toward 100.

## Known non-blocking quality debt

The latest corpus audit reports 0 blockers and 22 quality-debt items. These remain non-blocking and must not be hidden or replaced with guessed values.

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
Repository/public-output validation at 58 platforms: complete
Cloudflare main deployment for 81069600: complete
Direct custom-domain verification: complete
Production Surface Check run #161: success
Representative production visual audit: 24/24 states, 0 failures
```

Verified public values:

```text
platforms: 58
events: 277
evidence: 417
outcomes: 58
products: 95
terms-risk: 58
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
Begin Phase 6 / batch 36 candidate-only research.
Target: 58 -> 60 canonical platforms.
Reserved new candidate IDs: cya_candidate_000051 / cya_candidate_000052.
Do not silently promote Goldfinch, Cabital or Outlet Finance.
```
