# CYA record growth execution roadmap

Status: post-remediation checkpoint audit / re-baseline active  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-09-02

## Purpose

This file is the authoritative recovery point for CYA record growth, candidate review, canonical promotion, production deployment, monitoring, and milestone audits.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates and generated drafts remain under `data-staging/` or workflow artifacts until reviewed.
- Candidate-only review and canonical promotion remain separate operations.
- CeFi and DeFi lending/yield systems are both in CYA scope; neither scope permits speculative inclusion.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, fraud, or customer outcome from marketing or candidate metadata.
- Product, legal-entity, jurisdiction, terms-version, custody, identity, event-significance, and customer-outcome boundaries require explicit review.
- Repository validation, Cloudflare deployment, and direct production observation are separate claims.
- Existing-record monitoring remains review-only and continues in parallel with growth.
- Pool, market, vault, deployment, and product-level records are added only when historically significant; they are not inventory targets.

## Superseded Phase 10 baseline

The previous snapshot in this file described a 101-platform corpus after the XORA sufficiency audit and proposed `cya_plat_000102` / `cya_ev_000341` as the next identifiers. That snapshot is superseded and must not be used for allocation or capacity planning.

Since that snapshot, canonical growth and the DeFi omission-remediation lane materially advanced the corpus. The remediation queue has now been completed through Morpho.

## Verified post-Morpho corpus baseline

The normal repository validation/audit suite executed against the Morpho PR merge state and reported:

```text
Platforms:          140
Events:             383
Evidence:           790
Customer outcomes:  140
Product profiles:   181
Terms risk:         140
Claims ongoing:      21
Active candidates:    5
Corpus blockers:      0
Quality debt:         30
```

The same run reported `primary_records: 140` and generated 140 record-level JSON entries. This is a count from canonical discovery/build output, not an inference from identifier suffixes.

Current allocated identifiers reach:

```text
Platform ID:       cya_plat_000140
Event ID:          cya_ev_000388
Evidence batch:    105
```

Event count and maximum event ID differ because IDs are not assumed contiguous.

### Current audit observations

The corpus audit reported zero blockers and 30 quality-debt findings. The quality-debt set includes repurposed historical URLs, four platforms with fewer than three evidence records, three events missing `source_count`, unresolved exact end dates, and unresolved/unknown terms classifications. These are maintenance findings and must not be silently rewritten merely to lower the metric.

The lifecycle-gap report also reported 25 unresolved inventory rows, including six next-review rows, while the material-concerns audit retained a broad research queue. Those outputs are evidence/review work queues rather than proof that the canonical corpus is invalid.

## DeFi omission-remediation closeout

The former CeFi-only scope assumption has been corrected. The bounded remediation queue documented in `docs/defi-backfill-review-order.md` was reviewed through:

1. Tectonic
2. Goldfinch
3. Euler
4. Cream Finance
5. Radiant Capital
6. Venus Protocol
7. Compound
8. Aave
9. Silo Finance
10. Morpho

The remediation lane is complete. Future DeFi candidates return to the same normal record-growth gate as CeFi candidates: duplicate review, identity resolution, historical significance, source quality, event/evidence/outcome boundaries, and repository validation. Completion does not authorize automatic inclusion of additional DeFi protocols or exhaustive market inventories.

## Checkpoint state

`docs/record-growth-plan.md` requires growth to stop at the 125-record checkpoint for a full-corpus audit before a later growth tier is authorized. The corpus reached 140 before this stale roadmap was corrected, so that policy checkpoint cannot be treated as satisfied merely because the numeric threshold was passed.

The repository audit suite now gives a verified 140-record mechanical baseline with zero blockers, but growth remains paused for checkpoint closeout until the audit state, quality-debt disposition, next-ID baseline, and exact-SHA production verification are recorded consistently.

No new canonical platform should be allocated from the old 101-platform roadmap while this checkpoint closeout is active.

## Current operating lanes

### Lane A — checkpoint audit closeout and re-baseline

Immediate work:

1. preserve the verified 140 / 383 / 790 / 140 / 181 / 140 corpus baseline;
2. review the 30 quality-debt findings and distinguish accepted historical limitations from actionable defects;
3. confirm duplicate-ID, slug/domain identity, cross-layer referential-integrity, and six-layer coverage checks remain clear;
4. confirm highest allocated platform/event IDs and the next evidence batch from canonical files;
5. run exact-head repository validation and production verification for the checkpoint closeout;
6. publish the next authorized growth baseline only after that closeout is complete.

### Lane B — candidate research

Candidate discovery and evidence recovery may continue without allocating canonical IDs. CeFi and DeFi candidates remain eligible when they satisfy normal CYA scope and evidence rules. Candidate-only research must not be converted into canonical growth merely to increase counts.

### Lane C — mature-corpus maintenance

Continue evidence, terms, identity, chronology, and customer-outcome improvements where stronger sources exist. Do not change records merely to improve an audit metric.

Current high-signal maintenance classes from the audit include:

- fewer than three evidence records;
- missing event `source_count`;
- exact end-date gaps;
- unknown terms classification;
- repurposed original URLs where preservation can be improved without overwriting history.

### Lane D — monitoring

Keep existing-record monitoring operational. New findings enter manual review and never bypass candidate/canonical evidence rules.

## Immediate next action

```text
1. Merge the DeFi remediation/source-of-truth documentation closeout only after its current-head CI is green.
2. Treat 140 platforms as the verified checkpoint baseline; do not return to the stale 101-platform allocation plan.
3. Close the checkpoint audit by classifying the 30 quality-debt findings as actionable or accepted historical limitations.
4. Confirm exact next IDs from canonical allocation state rather than from the old roadmap.
5. Run exact-SHA production verification for the checkpoint closeout.
6. Record the post-audit growth authorization and only then resume normal CeFi/DeFi canonical additions.
```
