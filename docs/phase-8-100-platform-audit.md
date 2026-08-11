# Phase 8 — 100-platform full corpus audit

Status: audit release pending production verification  
Audit date: 2026-08-11  
Canonical baseline SHA: `4c23420ac2a499f215956d240942932da89fd508`  
Canonical production verification: Production Surface Check #191 — success  
Audit baseline CYA CI: #504 — success

## Purpose

This checkpoint is the mandatory Phase 8 full-corpus audit at the 100-platform first-mature-corpus milestone.

The canonical 100-platform baseline is production-verified. Record growth remains locked while this audit release is reviewed and until the audit state transition itself is merged and production-verified. No platform 101 candidate, canonical ID or promotion is authorized by this document.

## Baseline under audit

```text
Platforms:       100
Events:          334
Evidence:        587
Outcomes:        100
Products:        141
Terms risk:      100
Claims ongoing:   18
Generated pages: 114
```

The baseline was produced by canonical PR #168, which promoted Bit2Me Earn and Coinmerce Earn as platforms 99 and 100 after final candidate-only PR #167.

The exact canonical SHA `4c23420ac2a499f215956d240942932da89fd508` passed Cloudflare main deployment, current production-surface verification, Chromium installation, production desktop/mobile capture and verification-artifact upload in Production Surface Check #191 before the audit branch was created. The representative-page capture for the same main SHA also passed.

## Repository audit result

Main CYA CI #504 ran the normal `npm test` gate against the exact 100-platform SHA. The gate includes canonical validation, data-quality reporting, the full `scripts/audit-corpus.mjs` corpus audit, candidate scanner tests, candidate draft tests, existing-record monitor tests, the static build and machine-readable build-output verification.

```text
Platforms:                      100
Events:                         334
Evidence:                       587
Outcomes:                       100
Products:                       141
Terms risk:                     100
Claims ongoing:                  18
Generated pages:                114
Active candidates:                3
Corpus blockers:                  0
Quality-debt items:              23
Medium-reliability evidence:    108
Low-reliability evidence:         0
Low-confidence platforms:         0
Low-confidence events:           30
Unknown outcomes:                13
Unclear terms:                   24
```

Result: **no corpus blocker exists at the 100-platform milestone.** The audit reports the same total of 23 non-blocking quality-debt findings recorded after the 75-platform audit correction. Growth from 75 to 100 therefore introduced no new blocker and did not increase the audit debt count.

## Comparison with the 75-platform audit

The prior mandatory audit at 75 platforms completed with:

```text
Corpus blockers:                  0
Quality-debt items:              23
Medium-reliability evidence:    108
Low-reliability evidence:         0
Low-confidence platforms:         0
Low-confidence events:           30
Unknown outcomes:                13
Claims ongoing:                  18
Unclear terms:                   16
```

At 100 platforms:

- blocker count remains `0`;
- quality-debt count remains `23`;
- medium-reliability evidence count remains `108`;
- low-reliability evidence remains `0`;
- low-confidence platform count remains `0`;
- low-confidence event count remains `30`;
- unknown outcome count remains `13`;
- claims-ongoing count remains `18`;
- `unclear terms` rises from 16 to 24 as the corpus adds product-scoped records whose reviewed legal treatment is intentionally not overstated. `unclear` is not silently converted into a stronger ownership claim.

No deterministic cross-brand canonical-name/domain/reference collision was found. The only allowed product-scoped official-domain share remains the explicitly permitted Nexo pair on `nexo.com`.

## Remaining non-blocking quality debt

The 23 findings are explicit legacy or maintenance debt. They are not converted into unsupported facts merely to reduce an audit counter.

### Thin evidence coverage

- Ledn — 2 evidence records
- Crypto.com Earn — 2 evidence records
- Haru Invest — 2 evidence records

### Repurposed original URLs

The original URLs for the following records remain marked repurposed rather than silently relabelled as live or safe:

- Gemini Earn
- Yield App
- CoinFLEX
- Nuri Bitcoin Interest Account
- Bitbond Lending Marketplace
- Kriptomat KriptoEarn
- FTX Earn
- Celsius Network
- BlockFi
- Voyager Digital

### Exact end date unresolved

- Flint
- BitLendingClub

Both remain `operations_ended` without an invented exact end date.

### Historical terms unresolved

Terms remain `unknown` for:

- Babel Finance
- BlockFills
- Stablegains
- Hodlnaut
- Vauld
- Haru Invest
- CoinLoan

### Candidate-history storage debt

Consumed-candidate history remains split across legacy per-batch and duplicate-review ledgers. The corpus audit intentionally counts this as one maintenance finding. The audit does not consolidate those ledgers because traceable candidate/review history takes priority over cosmetic file consolidation.

## Candidate boundary

The active candidate ledger contains only the same three long-lived `needs_research` records:

- `cya_candidate_000010` Goldfinch
- `cya_candidate_000045` Cabital
- `cya_candidate_000049` Outlet Finance

None is promoted by the audit.

No next growth identifiers are allocated while the 100-platform audit lock is active:

```text
Next candidates: none
Next platform:   not allocated
Next event:      cya_ev_000340 remains unconsumed
```

## Machine-readable and build verification

Main CYA CI #504 verified the generated machine-readable layer against the same exact baseline SHA:

```text
primary_records:    100
platforms:          100
events:             334
evidence:           587
customer_outcomes:  100
product_profiles:   141
terms_risk_records: 100
claims_ongoing:      18
html_pages:         114
build_commit:       4c23420ac2a499f215956d240942932da89fd508
```

Build-output verification returned `ok: true`.

## Completion gate for the audit release

```text
100 canonical platforms preserved                    pass
canonical/reference blockers = 0                     pass
quality-debt count not increased from 75 audit       pass / 23 -> 23
low-reliability evidence = 0                         pass
low-confidence platforms = 0                        pass
cross-brand canonical/domain collision blockers = 0 pass
remaining quality debt documented                   pass
full npm test / build-output validation              pass
canonical 100-platform production SHA verified       pass / Production Surface Check #191
audit release repository checks                      pending
representative audit-branch capture                  pending
audit release production SHA verified                pending
```

The corpus itself is audit-clean at blocker level. The mandatory checkpoint is not marked complete until this audit release passes its normal repository/representative checks, merges, and the resulting exact audit-release SHA passes production verification.

## Post-audit boundary

The current operating plan defines 100 platforms as the first mature corpus and does not define an approved post-100 growth milestone. Therefore this audit does **not** allocate `cya_plat_000101`, does not create new candidate IDs, and does not automatically resume record growth.

After the audit release is production-verified, Phase 8 may be marked complete while the growth lock remains in place. Any future expansion beyond 100 requires an explicit next-phase operating decision and a separately reviewed release of the growth lock.
