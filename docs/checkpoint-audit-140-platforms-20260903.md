# CYA 140-platform checkpoint audit — 2026-09-03

Status: checkpoint closeout ready
Issue: #384
Base merge: `84802358a919163d78f08cf284e11707a21e76e8`
Verified repair head: `602c88579752df141b10ee1333b3e210add50356`

## Verified canonical baseline

The pre-repair checkpoint baseline was:

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

The 30 quality-debt findings were not equivalent to 30 canonical errors. They separated into three direct metadata defects, sixteen evidence/research findings, and eleven historical/preservation limitations.

## Post-fix verification

The three direct metadata defects were repaired from existing canonical evidence links:

- `cya_ev_000359`: `source_count=1`
- `cya_ev_000360`: `source_count=1`
- `cya_ev_000361`: `source_count=1`, matching the one evidence record directly linked by `event_id`; two additional platform/status sources remain linked at platform level and are not counted as direct event evidence.

Full repository validation and audit on repair head `602c88579752df141b10ee1333b3e210add50356` then confirmed:

```text
Platforms:          140
Events:             383
Evidence:           790
Customer outcomes:  140
Product profiles:   181
Terms-risk records: 140
Claims ongoing:      21
Corpus blockers:      0
Quality debt:        27
```

All six pull-request workflows succeeded on the repair head: CYA CI, Validate data, Validate and build, SEO, Preview Surface Check, and Ledger Series Phase 9 Adapter.

The quality-debt reduction from 30 to 27 is exactly the removal of the three direct metadata defects. No research-only or preservation-only finding was suppressed to improve the metric.

## Highest verified allocated identifiers

```text
Highest platform ID observed: cya_plat_000140 (Morpho)
Highest event ID observed:    cya_ev_000388 (Morpho Base oracle-manipulation event)
Latest batch:                 105
Latest batch evidence IDs:    cya_src_b105_0001 ... cya_src_b105_0004
```

These values establish the checkpoint edge. Allocation beyond them is authorized only after this checkpoint PR is merged into `main` and the resulting main baseline is verified.

## Remaining quality debt — 27

### A. Evidence/research debt — 16

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

### B. Historical/preservation limitations — 11

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

Repository validation passed at 140 platforms with:

- 140 platform records;
- 140 customer-outcome records;
- 140 terms-risk records;
- 181 product profiles;
- 383 lifecycle events;
- 790 evidence records.

The checkpoint therefore finds no missing platform-level outcome or terms-risk layer as a corpus blocker. Unknown outcomes and unclear terms remain explicit research states and are not validation failures.

## Lifecycle and material-concerns queues

The generated lifecycle-gap and material-concerns reports remain research queues, not automatic canonical-defect lists.

Current lifecycle inventory includes unresolved final outcomes for historical/distress records and ongoing claims/restructuring watches. Material-concerns fields likewise distinguish derivable facts from `research_required`; the checkpoint must not turn a research-required field into an asserted fact simply to lower queue counts.

## Checkpoint decisions

1. Canonical corpus baseline is re-based at 140 platforms.
2. DeFi omission remediation is complete through Morpho (`cya_plat_000140`).
3. The three direct `source_count` metadata defects are resolved.
4. Corpus blocker count is 0 after repair.
5. Quality debt is 27 after repair: sixteen evidence/research findings plus eleven historical/preservation limitations.
6. No unresolved item is upgraded, inferred, deleted, or reclassified merely to reduce audit counts.
7. After this checkpoint PR is merged and `main` is verified, the next allocation edge is `cya_plat_000141` / `cya_ev_000389`; the next batch number is 106 unless concurrent main changes allocate them first.
8. Any subsequent growth must recheck the actual main edge before allocation.

## Closeout

```text
Checkpoint baseline: 140 platforms
Direct defects fixed: 3
Post-fix blockers:    0
Post-fix quality debt:27
Highest platform:     cya_plat_000140
Highest event:        cya_ev_000388
Next provisional edge:cya_plat_000141 / cya_ev_000389 / batch 106
```

This checkpoint is ready to close once the exact final documentation head passes the normal pull-request workflows and is merged to `main`.
