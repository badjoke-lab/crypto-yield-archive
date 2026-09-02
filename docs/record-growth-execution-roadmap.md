# CYA record growth execution roadmap

Status: checkpoint re-baseline required after completed DeFi omission remediation  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-09-02

## Purpose

This file is the authoritative recovery point for CYA record growth, candidate review, canonical promotion, production deployment, monitoring, and milestone audits.

Permanent operating rules remain in `docs/record-growth-plan.md` and `docs/development-policy.md`.

## Canonical safety boundary

- `data/` is canonical.
- Candidates and generated drafts remain under `data-staging/` or workflow artifacts until reviewed.
- Candidate-only review and canonical promotion remain separate operations.
- CeFi and DeFi lending/yield systems are both in CYA scope; neither scope change permits speculative inclusion.
- Never infer repayment completion, recovery rate, custody, ownership, principal protection, fraud, or customer outcome from marketing or candidate metadata.
- Product, legal-entity, jurisdiction, terms-version, custody, identity, event-significance, and customer-outcome boundaries require explicit review.
- Repository validation, Cloudflare deployment, and direct production observation are separate claims.
- Existing-record monitoring remains review-only and continues in parallel with growth.
- Pool, market, vault, deployment, and product-level records are added only when historically significant; they are not inventory targets.

## Superseded Phase 10 baseline

The previous snapshot in this file described a 101-platform corpus after the XORA sufficiency audit and proposed `cya_plat_000102` / `cya_ev_000341` as the next identifiers. That snapshot is no longer a safe allocation baseline.

Since that snapshot, canonical growth and the DeFi omission-remediation lane materially advanced the corpus. The reviewed DeFi remediation queue has now been completed through Morpho. At the Morpho merge point (`2ca324145ee87131f4b0e41094e2dc96c3fbf021`), canonical identifiers reach at least:

```text
Platform ID:       cya_plat_000140
Event ID:          cya_ev_000388
Evidence batch:    105
```

These identifier maxima are not asserted to equal exact corpus counts. IDs may have gaps and counts must be recomputed from canonical data rather than inferred from the largest numeric suffix.

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

The remediation lane is complete. Future DeFi candidates return to the same normal record-growth gate as CeFi candidates: duplicate review, identity resolution, historical significance, source quality, event/evidence/outcome boundaries, and repository validation. Completion of the remediation lane does not authorize automatic inclusion of additional DeFi protocols or exhaustive market inventories.

## Mandatory checkpoint before further bulk growth

`docs/record-growth-plan.md` requires growth to stop at the 125-record checkpoint for a full-corpus audit before a later growth tier is authorized. The corpus has advanced beyond the stale 101-platform snapshot, so the next safe action is not to allocate another ID from the old roadmap.

Before further bulk canonical additions:

1. recompute exact canonical counts for platforms, events, evidence, outcomes, products, and terms-risk records;
2. verify duplicate IDs, slugs, and identity/domain collisions;
3. verify cross-layer referential integrity and required six-layer coverage;
4. review status/date/evidence freshness and unresolved quality-debt items under the existing audit policy;
5. confirm the current highest allocated IDs from canonical files;
6. publish the post-audit baseline and only then derive the next platform, event, and evidence identifiers;
7. preserve normal monitoring as review-only while the checkpoint audit runs.

No exact `next platform ID`, `next event ID`, remaining-capacity number, or later target is authorized by this document until that recomputation is complete.

## Current operating lanes

### Lane A — checkpoint audit and re-baseline

This is the immediate growth-control lane. Produce an exact post-remediation corpus baseline from `data/`, resolve any checkpoint blockers, and update this roadmap with verified counts and next IDs only after the audit is clear.

### Lane B — candidate research

Candidate discovery and evidence recovery may continue without allocating canonical IDs. CeFi and DeFi candidates remain eligible when they satisfy normal CYA scope and evidence rules. Candidate-only research must not be converted into canonical growth merely to increase counts.

### Lane C — mature-corpus maintenance

Continue evidence, terms, identity, chronology, and customer-outcome improvements where stronger sources exist. Do not change records merely to improve an audit metric.

### Lane D — monitoring

Keep existing-record monitoring operational. New findings enter manual review and never bypass candidate/canonical evidence rules.

## Immediate next action

```text
1. Complete the DeFi remediation documentation closeout.
2. Run the mandatory checkpoint/full-corpus audit against the actual canonical data.
3. Recompute exact corpus counts and highest allocated IDs; do not infer counts from ID suffixes.
4. Resolve any duplicate, referential-integrity, six-layer, evidence, or status blockers found by the audit.
5. Replace this temporary checkpoint state with a verified post-audit baseline.
6. Derive the next canonical IDs only from that verified baseline.
7. Resume normal CeFi/DeFi record growth only after the checkpoint gate is clear.
```
