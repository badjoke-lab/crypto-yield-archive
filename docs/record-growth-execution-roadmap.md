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
Confirmed main commit: 2990752796fba735d291cf1ca5cbc7e46ba70285
Latest merged PR: #92 Add batch 33 BitMart and Kriptomat Earn records
Latest canonical PR: #92 Add batch 33 BitMart and Kriptomat Earn records
```

### Canonical scale

```text
Platforms:       54
Events:          262
Evidence:        397
Outcomes:         54
Products:         87
Terms risk:       54
Claims ongoing:   16
Generated pages:  66
```

Batch-33 validation confirmed canonical references, candidate history, generated HTML, machine-readable JSON, manifest counts, sitemap inputs, and both new platform routes.

## Completed safety and automation gates

### Corpus audit

Completed in PR #59.

```text
Initial blockers: 37
Final blockers:    0
```

The corpus audit remains part of `npm test`.

### Candidate scanner

Completed in PR #60.

- deterministic canonical-name, alias, and domain matching
- transparent scores and reasons
- duplicate-clear `decision=add_now` required for draft eligibility
- `needs_research` remains blocked
- canonical SHA-256 write guard

### Review-only six-group draft generator

Completed in PR #61.

Required groups:

- platform
- event
- evidence
- outcome
- product
- terms risk

Automatic canonical IDs, writes, promotion, and merge remain forbidden.

### SEO hardening

Completed in PR #74.

- Open Graph and Twitter metadata
- WebSite, Dataset, and breadcrumb structured data
- reviewed dates in sitemap
- build-backed SEO validation

### Cloudflare deployment repair

#### PR #85

- removed unusable token-dependent Direct Upload
- identified `agent/seo-hardening` as the configured Cloudflare production branch
- added GitHub-native synchronization from `main`

#### PR #89

- chained `Production Surface Check` after successful production-branch synchronization
- separated manual count checks from strict deployed-revision checks

#### PR #91

- fixed the remaining no-deploy condition caused by force-pushing an already-existing main SHA
- each public synchronization now creates a unique commit on `agent/seo-hardening`
- writes `public/.well-known/cya-source-commit.txt` with the source main SHA
- production verification checks the source marker, canonical counts, routes, JSON outputs, sitemap, guides, and HTML surfaces

Latest production sync:

```text
Source main: 2990752796fba735d291cf1ca5cbc7e46ba70285
Cloudflare branch commit: d934baa437fdfa71d87593bd6e2cab280f0df040
Cloudflare Pages state at checkpoint update: build in progress
Production Surface Check: run #146 in progress
```

Do not claim the 54-platform custom-domain deployment as verified until run #146 succeeds.

## Phase 6 completed batches

```text
Batch 27: AQRU + YouHodler                          40 -> 42
Batch 28: Wirex X-Accounts + SwissBorg Earn         42 -> 44
Batch 29: CoinRabbit + Nebeus                       44 -> 46
Batch 30: Matrixport + Coinchange                   46 -> 48
Batch 31: YieldNodes + Bake                         48 -> 50
Batch 32: BitLendingClub + Bitbond Lending          50 -> 52
Batch 33: BitMart Earn + Kriptomat KriptoEarn       52 -> 54
```

## Batch 32 summary

Candidate-only gate: PR #86  
Canonical promotion: PR #87

### BitLendingClub

- `cya_plat_000051`
- temporary Loanbase rebrand preserved
- February 2016 account compromise separated from regulatory-pressure shutdown
- exact final shutdown and uniform repayment completion remain unknown
- unrelated current Japanese BitLending service excluded

### Bitbond Lending Marketplace

- `cya_plat_000052`
- historical lending marketplace separated from current tokenization business
- marketplace claims separated from BB1 security-token rights
- legacy customer outcomes remain unknown

## Batch 33 summary

Candidate-only gate: PR #90  
Canonical promotion: PR #92

### BitMart Earn and Lending

- `cya_plat_000053`
- product-scoped exchange-Earn record
- Savings, Staking, and Crypto Loans modeled separately
- current status remains `limited`
- 26 August 2026 and 31 January 2027 remain scheduled future events
- product-specific redemption and withdrawal completion remain unknown

### Kriptomat KriptoEarn

- `cya_plat_000054`
- November 2022 precautionary pause separated from the 2026 MiCA-related wind-down
- customer ownership language preserved without treating the service as self-custody
- internal-wallet return separated from external withdrawal or Kraken transfer
- regulated-service cessation confirmed for 30 June 2026
- universal customer withdrawal and account-closure completion remain unknown

### Batch-33 validation

```text
Validate data:        success
Validate and build:   success
CYA CI:               success
SEO:                  success
Candidate scan:       success
Candidate draft:      success
Corpus blockers:      0
BitMart route:        /platform/bitmart-earn-and-lending/
Kriptomat route:      /platform/kriptomat-kriptoearn/
Generated pages:      66
```

## Candidate queue and reserved identifiers

```text
Active candidate queue: 1 needs_research candidate
- cya_candidate_000010 Goldfinch

Next candidate IDs:      cya_candidate_000033 / cya_candidate_000034
Next platform ID:        cya_plat_000055
Next event ID:           cya_ev_000268
Next canonical batch:    34
Next evidence prefix:    cya_src_b34_
```

Goldfinch remains staging-only and must not be silently promoted. It still requires a DeFi/institutional-yield scope decision and a product/entity/customer-outcome boundary review.

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
Phase 6 / batch 34: 54 -> 56                        current
Phase 7: weekly existing-record monitoring          not started
Phase 8: 60 -> 100 with 75/100 audits               not started
```

## Current execution point

```text
Phase 6 / batch 34 candidate-only gate

1. select two high-value, in-scope CeFi yield/lending candidates
2. confirm no canonical or consumed-ledger match
3. investigate identity, product boundary, event history, terms, custody, and customer outcome
4. assign candidate IDs 000033 and 000034 only after duplicate review
5. stage candidates without canonical changes
6. run candidate audit, scanner, draft generator, and all repository checks
7. merge the candidate-only PR
8. promote reviewed candidates in a separate canonical PR
```

## Phase 6 batch policy

- normally add two canonical platforms per batch
- do not combine unresolved `needs_research` candidates with ready candidates
- prefer historically significant CeFi lending, interest-account, and centralized-yield records
- active comparators are allowed when lending or yield is a core function
- product-scoped records are allowed when the parent business must remain separate
- preserve terms evolution, future dates, marketing-versus-contract differences, disputed causes, and customer-outcome uncertainty

Every promoted platform requires reviewed platform, event, evidence, outcome, product, and terms-risk records.

### Phase 6 completion gate

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
- legacy split consumed-ledger files remain
- older non-production workflows may emit Node.js 20 runtime warnings
- Cloudflare PR previews are not consistently provisioned and may return 404 even when repository checks pass

Do not hide these findings or replace them with guessed values.

## Production verification state

```text
Repository/public-output validation at 54 platforms: complete
Unique Cloudflare production commit creation: complete
Cloudflare build for d934baa: in progress at checkpoint update
Direct custom-domain verification for 54 / 262 / 397: pending run #146
```

Expected public values:

```text
platforms: 54
events: 262
evidence: 397
outcomes: 54
products: 87
terms-risk: 54
claims ongoing: 16
```

## Recovery procedure

```text
1. Read this file and docs/development-policy.md.
2. Fetch current main and recent/open PRs.
3. Check Cloudflare Pages and the latest Production Surface Check.
4. Confirm candidate queue and consumed ledgers.
5. Run candidate audit, scanner, draft generator, and next-ID reporter.
6. Recalculate canonical counts and maximum IDs.
7. Correct this checkpoint if repository reality differs.
8. Resume from the first incomplete gate only.
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
First: confirm Production Surface Check #146 for the 54-platform deployment.
Then: begin Phase 6 / batch 34 candidate-only gate with candidate IDs 000033 and 000034.
```
