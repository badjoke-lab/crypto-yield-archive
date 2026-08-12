# CYA record growth execution roadmap

Status: Phase 10 active — candidate review 1 in progress after XORA evidence-sufficiency closeout  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-12

## Purpose

This file is the authoritative recovery point for CYA record growth, candidate review, canonical promotion, production deployment, monitoring, and milestone audits.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates and generated drafts remain under `data-staging/` or workflow artifacts until reviewed.
- Candidate-only review and canonical promotion remain separate operations.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, fraud, or customer outcome from marketing or candidate metadata.
- Product, legal-entity, jurisdiction, terms-version, custody, identity, and customer-outcome boundaries require explicit review.
- Repository validation, Cloudflare deployment, and direct production observation are separate claims.
- Existing-record monitoring remains review-only and continues in parallel with growth.

## Production-verified mature baseline

The 100-platform Phase 8 corpus and its mandatory audit are complete. Phase 9A added XORA Finance as platform 101. A separate evidence-sufficiency audit then strengthened XORA preservation without changing its classification.

```text
Repository:                       badjoke-lab/crypto-yield-archive
Default branch:                   main
Phase 8 mature baseline:          100 platforms / complete
Phase 9A canonical PR:            #176 merged
XORA canonical merge SHA:         87f21a256949b4d07ad4d073b91e860aa0bb02fe
Phase 9A closeout PR:             #177 merged
Phase 9A closeout merge SHA:      731c3fd0fa74239e36d06aca0ddc8dd2733cb5f2
Phase 10 operating PR:            #179 merged
XORA sufficiency/preservation PR: #181 merged
XORA audit merge SHA:             3b49f0cdad7d195dfe4bc5904a686a5ba4f6a85f
Production Surface Check #202:    success on XORA audit SHA
```

### Canonical scale after XORA sufficiency audit

```text
Platforms:          101
Events:             335
Evidence:           598
Customer outcomes:  101
Product profiles:   142
Terms risk:         101
Claims ongoing:      18
Corpus blockers:      0
Quality debt:         23
```

Production Surface Check #202 verified Cloudflare main deployment, current production surface, Chromium installation, desktop/mobile production capture, and production verification-artifact upload for exact SHA `3b49f0cdad7d195dfe4bc5904a686a5ba4f6a85f`.

Production UI artifact:

```text
Name:    cya-production-ui-verification-31569631221
ID:      9130844425
Digest:  sha256:42403e42e52da97859ab5abc4b0ba4f48ea583b09cf9757a4b548acc6abb442d
```

## XORA Finance — evidence sufficiency confirmed

XORA Finance remains canonical as:

```text
Platform:           cya_plat_000101
Event:              cya_ev_000340
Platform type:      centralized_yield
Platform status:    active
Terms status:       unclear
Customer outcome:   unknown
```

PR #181 completed a separate sufficiency/preservation audit before Phase 10 candidate growth continued.

The audit confirmed that the current narrow canonical record is sufficiently supported while stronger incident conclusions are not established. It permanently preserved privacy-reviewed copies of the claimant-published core screenshots, recorded source/public-copy hashes and retrieval provenance, linked the claimant evidence to durable repository provenance, and added XORA's current Privacy Policy as first-party context for its general AML/security review framework.

The audit did **not** authenticate the claimant-published DM as an XORA internal record and did not change claimant sources from low reliability.

Still unresolved and retained in the normal evidence-upgrade lane:

- requested withdrawal destination;
- final XRPL settlement and claimant recovery/loss outcome;
- verified operating legal entity and registration jurisdiction;
- independently reproduced BTC/IOU treasury-representation claims;
- attributable first-party XORA response specifically resolving the claimant transaction.

Those gaps block stronger labels such as fraud/scam, permanent loss, insolvency, or platform-wide withdrawal suspension. They do not block the existing bounded `active / other / outcome unknown` record.

## Mature-corpus quality boundary

The XORA audit passes the mature-corpus safety boundary:

```text
Corpus blockers:                 0
Quality-debt items:             23
Low-confidence platforms:        0
Low-confidence events:          30
Unknown outcomes:               14
Claims ongoing:                 18
```

The two claimant-published XORA sources remain intentionally low reliability rather than being upgraded merely to improve metrics. The added official Privacy Policy evidence is high reliability and separately scoped to general XORA operating policy.

## Phase 10 — post-mature expansion to 125

Phase 10 is the controlled growth segment after the first mature corpus.

```text
Start:              101 canonical platforms
Target:             125 canonical platforms
Growth segment:      24 additional platforms
Full audit:          mandatory at 125
Next platform ID:    cya_plat_000102
Next event ID:       cya_ev_000341
```

Operating rules:

1. candidate-only review remains separate from canonical promotion;
2. simple cases use two to three platforms per canonical PR;
3. disputed, multi-entity, bankruptcy, custody, recovery, or evidence-heavy cases remain one platform per PR;
4. duplicate and rejected findings consume no canonical platform ID;
5. corpus blockers must remain `0`;
6. quality-debt count must not increase merely to accelerate growth;
7. monitoring continues in parallel and does not auto-edit canonical records;
8. each canonical release requires repository validation, build, preview/representative checks, merge, Cloudflare deployment, and exact-SHA production verification;
9. growth stops at 125 for a mandatory full-corpus audit;
10. no target beyond 125 is authorized until that audit and production verification complete.

## Phase 10 candidate review 1

The three long-lived active candidates were re-reviewed after the XORA gate.

### Goldfinch — out_of_scope

Goldfinch governance GIP-87 and the July 7, 2026 follow-up provide strong evidence for Goldfinch Prime wind-down, full Prime investor redemption, contract pause, and legacy V1 recovery-only maintenance. However, Goldfinch is fundamentally a DeFi lending protocol and CYA's fixed README focuses on CeFi lending/yield while explicitly not prioritizing DeFi lending protocols or pool-level records.

`cya_candidate_000010` is therefore removed from the active queue and preserved in `cya-rejected.json` as `out_of_scope`. This is a scope decision, not an adverse classification.

### Cabital — needs_research

`cya_candidate_000045` remains duplicate-clear and in scope, but is not promotion-ready.

WOO X documents termination of its Cabital fiat integration effective 2022-11-17. That does not prove platform-wide Cabital closure, insolvency, migration, or customer outcome. UK `CABITAL GLOBAL LIMITED` company 14888741 was incorporated in 2023, after the earlier Cabital Earn operation, so it cannot be silently treated as the historical operating entity.

Remaining blockers: original operating entity, first-party Earn terms/custody, platform-wide closure chronology, and customer repayment/migration outcome.

### Outlet Finance — needs_research

`cya_candidate_000049` remains duplicate-clear and has strong CYA scope fit. Apple's listing identifies Outlet Finance Inc and describes a digital-asset rewards product; first-party Outlet material documents its crypto-lending origin.

Closure evidence is not yet canonical-grade. Secondary sources place closure in 2023, but Apple's app history shows version 5.0.3 dated 2023-02-21 and no reviewed first-party closure/customer communication has yet established exact timing or repayment outcome.

Remaining blockers: first-party closure/customer communications, legal entity registration, historical terms/custody, and final customer-fund outcome.

### Active queue after review 1

```text
cya_candidate_000045 Cabital        needs_research
cya_candidate_000049 Outlet Finance needs_research
```

No platform 102 or event 341 record is allocated by this candidate-only review.

## Phase 10 work lanes

### Lane A — candidate growth

- keep Cabital and Outlet in research without lowering the evidence threshold;
- discover additional evidence-rich CeFi lending/yield candidates against all 101 canonical platforms;
- refresh duplicate checks before any `add_now` decision;
- candidate-only and canonical PRs remain separate.

### Lane B — mature-corpus maintenance

Work down the existing 23 quality-debt findings where stronger evidence actually exists. Do not change a record merely to improve the audit number.

Priority maintenance targets remain:

- thin evidence: Ledn, Crypto.com Earn, Haru Invest;
- unresolved historical terms: Babel Finance, BlockFills, Stablegains, Hodlnaut, Vauld, Haru Invest, CoinLoan;
- unresolved exact end dates: Flint, BitLendingClub;
- repurposed historical URLs and candidate-history storage remain documented unless a safe evidence-preserving improvement is available.

### Lane C — monitoring

Keep weekly existing-record monitoring operational. New findings enter manual review; they never bypass candidate/canonical evidence rules.

## Immediate next action

```text
1. Merge the Phase 10 candidate-review-1 PR only after candidate scan/draft and normal repository checks pass.
2. Do not allocate cya_plat_000102 merely to force growth.
3. Continue targeted Cabital and Outlet source recovery in the evidence-upgrade lane.
4. In parallel, discover a fresh evidence-rich CeFi candidate set against all 101 canonical platforms.
5. Resolve duplicates and scope before changing any candidate to add_now.
6. Promote only reviewed add_now candidates in a separate canonical PR beginning with cya_plat_000102.
7. Continue one supportable mature-corpus evidence improvement per growth batch where practical.
8. Stop at 125 for the mandatory full-corpus audit.
```
