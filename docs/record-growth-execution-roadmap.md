# CYA record growth execution roadmap

Status: Phase 9A complete. Phase 10 post-mature growth planning active.  
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

The 100-platform Phase 8 corpus and its mandatory audit are complete. Phase 9A then added one separately reviewed incident-led exception, XORA Finance, as platform 101.

```text
Repository:                    badjoke-lab/crypto-yield-archive
Default branch:                main
Phase 8 mature baseline:       100 platforms / complete
Phase 9A canonical PR:         #176 merged
XORA canonical merge SHA:      87f21a256949b4d07ad4d073b91e860aa0bb02fe
Phase 9A closeout PR:          #177 merged
Phase 9A closeout merge SHA:   731c3fd0fa74239e36d06aca0ddc8dd2733cb5f2
Production Surface Check #197: success on XORA canonical SHA
Production Surface Check #198: success on Phase 9A closeout SHA
Current post-closeout main:    5fd437548dbf7bfd03a49acfdfd9a625d4d59223
```

### Canonical scale after Phase 9A

```text
Platforms:          101
Events:             335
Evidence:           597
Customer outcomes:  101
Product profiles:   142
Terms risk:         101
Claims ongoing:      18
```

The Phase 9A production verification completed with 24/24 representative production states and 0 visual failures.

## Phase 9A — complete

XORA Finance is canonical as:

```text
Platform:           cya_plat_000101
Event:              cya_ev_000340
Platform type:      centralized_yield
Platform status:    active
Terms status:       unclear
Customer outcome:   unknown
```

The canonical record preserves the reviewed boundary: independently reproduced XRPL deposit facts are separated from claimant-published support narratives. No fraud, insolvency, permanent-loss, recovery-rate, or platform-wide withdrawal-suspension classification is inferred.

Remaining XORA work belongs to the normal evidence-upgrade lane unless new evidence supports a reviewed canonical change:

- requested withdrawal destination and final settlement state;
- operating legal entity;
- independently reproduced BTC/IOU treasury-representation claims;
- customer recovery/loss outcome.

## Mature-corpus quality boundary

The mandatory 100-platform audit completed with:

```text
Corpus blockers:                 0
Quality-debt items:             23
Medium-reliability evidence:   108
Low-reliability evidence:        0
Low-confidence platforms:        0
Low-confidence events:          30
Unknown outcomes:               13
Claims ongoing:                 18
```

The 23 quality-debt findings remain non-blocking maintenance work. Post-mature growth must not create new blockers or hide debt by inventing unsupported facts.

## Existing active candidate boundary

After XORA consumption, the long-lived `needs_research` candidates remain:

```text
cya_candidate_000010 Goldfinch
cya_candidate_000045 Cabital
cya_candidate_000049 Outlet Finance
```

They remain research work and are not automatically promoted by Phase 10.

## Phase 10 — post-mature expansion to 125

Phase 10 is the next controlled growth segment after the first mature corpus.

Target:

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
4. duplicate findings consume no canonical platform ID;
5. corpus blockers must remain `0`;
6. quality-debt count must not increase merely to accelerate growth;
7. monitoring continues in parallel and does not auto-edit canonical records;
8. each canonical release requires repository validation, build, preview/representative checks, merge, Cloudflare deployment, and exact-SHA production verification;
9. growth stops at 125 for a mandatory full-corpus audit;
10. no target beyond 125 is authorized until that audit and production verification complete.

## Phase 10 work lanes

### Lane A — candidate growth

- refresh duplicate detection against all 101 canonical platforms;
- research a first Phase 10 candidate set;
- prefer evidence-rich candidates that broaden platform-type, jurisdiction, and outcome coverage rather than adding near-duplicates;
- keep candidate-only and canonical PRs separate.

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
1. Merge the Phase 10 operating-decision / roadmap correction PR after all normal checks pass.
2. Production-verify that exact merge SHA because docs/** is part of the production-verification contract.
3. Start a Phase 10 candidate-only discovery batch against the full 101-platform corpus.
4. Resolve duplicates and scope before allocating canonical IDs.
5. Promote only reviewed add_now candidates in a separate canonical PR beginning with cya_plat_000102.
6. In parallel, take one evidence-quality maintenance item per growth batch where supportable.
7. Continue until 125, then stop growth for the mandatory full-corpus audit.
```
