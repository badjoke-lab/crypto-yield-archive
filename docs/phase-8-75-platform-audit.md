# Phase 8 — 75-platform full corpus audit

Status: repository audit passed; canonical baseline production verified; audit-release production gate pending  
Audit date: 2026-08-09  
Canonical baseline SHA: `106ec5b7b2f69a513d2795f4e352405e964456ca`  
Canonical production verification: Production Surface Check #174 — success  
Audit PR: #138

## Purpose

This checkpoint is the mandatory Phase 8 full-corpus audit between growth from 60 to 75 platforms and the next growth segment from 75 to 100.

Record growth is paused. Platform `cya_plat_000076` must not be staged or promoted until this audit release has been merged and its exact production SHA has passed the production verification gate.

## Baseline under audit

```text
Platforms:       75
Events:          309
Evidence:        485
Outcomes:         75
Products:        112
Terms risk:       75
Claims ongoing:   18
Generated pages:  89
```

The baseline was produced by canonical PR #137, which added Bitfinex Margin Funding and Poloniex Earn as platforms 74 and 75 after candidate-only PR #136.

The exact canonical SHA `106ec5b7b2f69a513d2795f4e352405e964456ca` passed Cloudflare deployment, custom production-surface verification, Chromium installation, production desktop/mobile capture and verification-artifact upload in Production Surface Check #174 before the audit PR was allowed to merge.

## Pre-audit result

The canonical 75-platform baseline reported:

```text
Corpus blockers:               0
Quality-debt items:           27
Medium-reliability evidence: 108
Low-reliability evidence:      0
Low-confidence platforms:      0
Low-confidence events:        30
Unknown outcomes:             13
Claims ongoing:               18
Unclear terms:                16
```

Four debt findings were deterministic cross-brand alias collisions introduced by generic exchange-yield labels:

- `simple earn flexible`
- `simple earn fixed`
- `simple earn`
- `flexible savings`

These were naming collisions, not duplicate canonical platforms.

## Audit correction

The audit namespaces or removes only ambiguous generic aliases while preserving canonical identity and reviewed facts.

### OKX Simple Earn

Changed generic aliases:

- `Simple Earn Flexible` -> `OKX Simple Earn Flexible`
- `Simple Earn Fixed` -> `OKX Simple Earn Fixed`

### Gate Simple Earn

Removed the bare cross-brand alias:

- `Simple Earn`

Retained Gate-specific flexible/fixed aliases.

### Binance Simple Earn

Removed the bare `Simple Earn` alias and namespaced flexible/locked aliases:

- `Simple Earn Flexible` -> `Binance Simple Earn Flexible`
- `Simple Earn Locked` -> `Binance Simple Earn Locked`

### Bitget Simple Earn

Namespaced generic aliases:

- `Flexible Savings` -> `Bitget Flexible Savings`
- `Simple Earn Flexible` -> `Bitget Simple Earn Flexible`
- `Simple Earn Fixed` -> `Bitget Simple Earn Fixed`

### Phemex Savings

Namespaced generic aliases:

- `Flexible Savings` -> `Phemex Flexible Savings`
- `Fixed Savings` -> `Phemex Fixed Savings`

### CoinEx Flexible Savings

Removed redundant bare `Flexible Savings`; the canonical name already preserves the product identity. Financial Account predecessor aliases remain.

No canonical ID, canonical name, slug, status, date, event, evidence claim, outcome, product interpretation or terms-risk interpretation was changed by this correction.

## Repository audit result

The audit branch passed the full normal `npm test` gate after the alias correction.

```text
Platforms:                      75
Events:                         309
Evidence:                       485
Outcomes:                        75
Products:                       112
Terms risk:                      75
Claims ongoing:                  18
Generated pages:                 89
Active candidates:                3
Corpus blockers:                  0
Quality-debt items:              23
Medium-reliability evidence:    108
Low-reliability evidence:         0
Low-confidence platforms:         0
Low-confidence events:           30
Unknown outcomes:                13
Unclear terms:                   16
```

Result: the four new cross-brand alias-collision findings are removed, returning the corpus to the pre-Phase-8-growth legacy debt count of 23 without inventing facts or weakening validation.

## Remaining non-blocking quality debt

The remaining 23 findings are explicit legacy debt and are intentionally retained until evidence supports a correction.

### Thin evidence coverage

Three platforms have fewer than three evidence records:

- Ledn — 2
- Crypto.com Earn — 2
- Haru Invest — 2

### Repurposed original URLs

Historical original URLs are marked repurposed for:

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

These are not silently relabelled as live or safe.

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

Consumed-candidate history remains split across legacy ledger files. This is a storage/maintenance finding, not a canonical-data ambiguity, and is not consolidated during this audit because preserving traceable review history takes priority over cosmetic file consolidation.

## Candidate boundary

The active candidate ledger still contains only three `needs_research` records:

- `cya_candidate_000010` Goldfinch
- `cya_candidate_000045` Cabital
- `cya_candidate_000049` Outlet Finance

None was promoted by this audit.

Reserved next identifiers remain:

```text
Next candidates: cya_candidate_000069 / cya_candidate_000070
Next platform:   cya_plat_000076
Next event:      cya_ev_000315
```

## Completion gate

Repository-side audit requirements are satisfied:

```text
75 canonical platforms preserved                    pass
canonical/reference blockers = 0                    pass
low-reliability evidence = 0                        pass
low-confidence platforms = 0                        pass
generic cross-brand alias collisions removed        pass
remaining quality debt documented                   pass
full npm test / build-output validation              pass
representative audit-branch capture                  pass
canonical 75-platform production SHA verified        pass / Production Surface Check #174
```

One production-side requirement remains mandatory before growth resumes:

```text
75-platform audit release exact-SHA production       pending until audit PR merge
```

The queue must remain `audit_at_75` until the audit release itself is observed on the custom production domain with the exact expected build SHA. Only then may a later checkpoint switch the queue to growth toward 100.
