# CYA 140-platform checkpoint audit — 2026-09-03

Status: checkpoint audit active
Issue: #384
Base merge: `84802358a919163d78f08cf284e11707a21e76e8`

## Verified canonical baseline

The current repository validation/audit baseline is:

```text
Platforms:          140
Events:             383
Evidence:           790
Customer outcomes:  140
Product profiles:   181
Terms-risk records: 140
Claims ongoing:      21
Corpus blockers:      0
Quality debt:        30
```

The corpus is structurally valid and currently has zero audit blockers. The 30 quality-debt findings are not equivalent to 30 canonical errors. They separate into direct metadata defects, evidence/research debt, and accepted historical/preservation limitations.

## Highest verified allocated identifiers

```text
Highest platform ID observed: cya_plat_000140 (Morpho)
Highest event ID observed:    cya_ev_000388 (Morpho Base oracle-manipulation event)
Latest batch:                 105
Latest batch evidence IDs:    cya_src_b105_0001 ... cya_src_b105_0004
```

These values are an audit observation only. The next canonical IDs are not authorized until this checkpoint closes.

## Quality-debt classification

### A. Direct metadata defects — 3

These are repository records that already have evidence but are missing required/expected metadata and should be corrected directly after locating the exact records:

- `cya_ev_000359`: `source_count` missing
- `cya_ev_000360`: `source_count` missing
- `cya_ev_000361`: `source_count` missing

These are the only findings in the current audit output that are plainly data-maintenance defects rather than research/evidence gaps or preservation limitations.

### B. Evidence/research debt — 16

These findings require stronger source recovery or historical research. They must not be filled by inference.

#### Fewer than three evidence records — 4

- `cya_plat_000019` Crypto.com Earn — 2 evidence records
- `cya_plat_000121` BitMEX EARN — 1 evidence record
- `cya_plat_000126` ZebPay Earn — 2 evidence records
- `cya_plat_000127` Smart Lending — 2 evidence records

#### Operations ended without exact end date — 2

- `cya_plat_000038` Flint
- `cya_plat_000051` BitLendingClub

#### Terms status unresolved — 10

- Babel Finance
- BlockFills
- Stablegains
- CoinTrade Lending
- bitFlyer 定期貸しコイン
- BitMEX EARN
- Hodlnaut
- Vauld
- Haru Invest
- CoinLoan

These remain explicit unknown/unclear states until source-grade terms evidence is recovered. The checkpoint does not permit replacing them with assumptions about custody, ownership, principal protection, or creditor treatment.

### C. Historical/preservation limitations — 11 audit findings

#### Original URL repurposed — 10

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

A repurposed historical URL is not itself a canonical factual error. It remains quality debt because the original product URL no longer resolves to the historical surface. Improvement is permitted only through stronger archived or preserved evidence; the historical URL must not be silently rewritten to a modern page that changes the record's meaning.

#### Split consumed ledgers remain — 1 aggregate finding

The audit reports the retained split `cya-consumed-*` ledgers as one quality-debt item. These files preserve candidate/review history. They are not a canonical blocker. Consolidation may improve maintainability, but deletion or rewriting is prohibited unless provenance and review-history semantics are preserved.

## Referential and layer coverage status

The repository validation passed at 140 platforms with:

- 140 platform records;
- 140 customer-outcome records;
- 140 terms-risk records;
- 181 product profiles;
- 383 lifecycle events;
- 790 evidence records.

The current audit therefore finds no missing platform-level outcome or terms-risk layer as a corpus blocker. Unknown outcomes and unclear terms remain explicit research states and are not validation failures.

## Lifecycle and material-concerns queues

The generated lifecycle-gap and material-concerns reports are research queues, not automatic canonical-defect lists.

Current lifecycle inventory includes unresolved final outcomes for historical/distress records and ongoing claims/restructuring watches. Material-concerns fields likewise distinguish derivable facts from `research_required`; the checkpoint must not turn a research-required field into an asserted fact simply to lower queue counts.

## Checkpoint decisions

1. Canonical corpus baseline is re-based at 140 platforms.
2. DeFi omission remediation is complete through Morpho (`cya_plat_000140`).
3. Corpus blocker count is 0.
4. The three missing `source_count` fields are direct correction targets.
5. Sixteen findings remain evidence/research debt and require source recovery rather than inference.
6. Eleven findings are historical/preservation limitations or maintenance debt, not evidence of incorrect canonical classification.
7. No next growth tier or next platform/event ID is authorized until the direct defects are corrected, exact-head CI passes, and this checkpoint is formally closed.

## Immediate execution order

```text
1. Locate cya_ev_000359..000361 and repair source_count from linked canonical evidence.
2. Re-run full repository validation/audit and confirm blockers remain 0.
3. Record the post-fix quality-debt count without forcing reductions in research-only items.
4. Close #384 only after exact-head CI and the resulting main SHA are verified.
5. Only then establish the next growth baseline and next IDs.
```
