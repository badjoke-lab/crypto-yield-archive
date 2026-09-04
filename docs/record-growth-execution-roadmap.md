# CYA record growth execution roadmap

Status: normal CeFi/DeFi growth authorized after 140-platform checkpoint closeout  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-09-04

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

## Superseded baselines

The former 101-platform Phase 10 allocation snapshot is permanently superseded.

The later 140-platform checkpoint baseline was used for the required full-corpus audit and closeout. That checkpoint is now complete via #384 and the follow-up metadata repairs merged in #385.

## Verified checkpoint closeout

The 140-platform checkpoint closed with:

```text
Platforms:          140
Events:             383
Evidence:           790
Customer outcomes:  140
Product profiles:   181
Terms risk:         140
Claims ongoing:      21
Corpus blockers:      0
Quality debt:        27
```

The quality-debt reduction from 30 to 27 came only from repairing three missing event `source_count` fields. The remaining 27 findings are retained as evidence/research debt or historical/preservation limitations and must not be suppressed by inference.

## Current post-checkpoint main edge

Moonwell / MAMO was added after checkpoint closeout through PR #386.

Current canonical allocation reaches:

```text
Platform ID:       cya_plat_000141
Event ID:          cya_ev_000389
Evidence batch:    106
```

The next provisional allocation edge is:

```text
Platform ID:       cya_plat_000142
Event ID:          cya_ev_000390
Evidence batch:    107
```

These are provisional only. Every new canonical batch must re-read actual `main` immediately before allocation so concurrent work cannot reuse an identifier.

## DeFi omission-remediation closeout

The former CeFi-only scope assumption is invalid. CYA covers both CeFi and DeFi lending/yield systems.

The bounded DeFi omission-remediation queue was completed through Morpho. Future DeFi candidates use the same normal record-growth gate as CeFi candidates: duplicate review, identity resolution, historical significance, source quality, event/evidence/outcome boundaries, and repository validation.

Completion of the remediation lane does not authorize exhaustive protocol, pool, vault, market, or deployment inventories.

## Current operating lanes

### Lane A — normal canonical growth

Canonical growth is authorized again after checkpoint closeout.

For each new platform:

1. recheck actual main allocation edge;
2. clear duplicate identity/domain/alias review;
3. establish historical significance and CYA scope;
4. build the six-layer package where applicable: platform, event, evidence, outcome, product, terms-risk;
5. preserve unknowns rather than infer favorable or adverse facts;
6. run exact-head repository checks before merge;
7. verify the resulting main state separately from PR validation.

### Lane B — candidate research

Candidate discovery and evidence recovery continue without automatic canonical allocation. CeFi and DeFi candidates remain eligible when they satisfy normal CYA scope and evidence rules.

Candidate-only research must not be promoted merely to increase counts.

### Lane C — mature-corpus maintenance

Continue evidence, terms, identity, chronology, and customer-outcome improvements where stronger sources exist.

Current high-signal maintenance classes include:

- platforms with fewer than three evidence records;
- exact end-date gaps;
- unresolved terms classifications;
- repurposed historical URLs where preservation can be improved without overwriting history;
- unresolved lifecycle and material-concerns research queues.

### Lane D — monitoring

Keep existing-record monitoring operational. New findings enter manual review and never bypass candidate/canonical evidence rules.

## Immediate next action

```text
1. Treat cya_plat_000141 / cya_ev_000389 / batch 106 as the current verified allocation edge.
2. Recheck main before the next allocation; provisional next edge is 000142 / 000390 / batch 107.
3. Resume normal CeFi/DeFi candidate review and canonical growth.
4. Continue mature-corpus maintenance and monitoring in parallel.
5. Do not reopen the completed 140-platform checkpoint unless a new corpus-level blocker is discovered.
```
