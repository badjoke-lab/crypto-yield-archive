# CYA record growth execution roadmap

Status: Phase 8 — 100-platform mandatory audit in progress  
Project: Crypto Yield Archive (CYA)  
Last baseline review: 2026-08-11

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
- Record growth is locked at 100 platforms while the mandatory full-corpus audit is in progress.
- No platform 101 candidate, ID allocation or promotion is authorized by the audit.

## Production-verified 100-platform baseline

```text
Repository:                    badjoke-lab/crypto-yield-archive
Default branch:                main
Canonical 100 SHA:             4c23420ac2a499f215956d240942932da89fd508
Canonical PR:                  #168 merged
Production Surface Check:      #191 success
Representative page capture:   success
Main CYA CI:                   #504 success
Queue status:                  audit_in_progress
```

### Canonical scale

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

The exact 100-platform SHA passed Cloudflare main deployment, current production-surface verification, production desktop/mobile capture and verification-artifact upload before the audit branch was created. Main CYA CI built the same SHA and verified the machine-readable layer with `primary_records=100` and matching platform/event/evidence/outcome/product/terms-risk counts.

## 100-platform full-corpus audit result

Main CYA CI #504 executed the normal full gate, including `scripts/audit-corpus.mjs`.

```text
Corpus blockers:                  0
Quality-debt items:              23
Medium-reliability evidence:    108
Low-reliability evidence:         0
Low-confidence platforms:         0
Low-confidence events:           30
Unknown outcomes:                13
Claims ongoing:                  18
Unclear terms:                   24
Active candidates:                3
```

The 75-platform audit completed with blocker count `0` and quality-debt count `23`. The 100-platform corpus therefore reaches the milestone without introducing a new blocker and without increasing the audit debt count.

The detailed audit record is `docs/phase-8-100-platform-audit.md`.

## Remaining non-blocking debt boundary

The existing 23 findings remain explicit rather than being repaired with unsupported assumptions:

- three platforms have fewer than three evidence records: Ledn, Crypto.com Earn and Haru Invest;
- ten historical original URLs remain correctly marked repurposed;
- Flint and BitLendingClub remain `operations_ended` without invented exact end dates;
- historical terms remain `unknown` for Babel Finance, BlockFills, Stablegains, Hodlnaut, Vauld, Haru Invest and CoinLoan;
- consumed-candidate history remains split across traceable legacy ledgers and is counted as one storage/maintenance finding.

Low-reliability evidence remains `0`, low-confidence platform count remains `0`, and no canonical/reference blocker is present.

## Candidate boundary

The active candidate ledger contains only the same three long-lived `needs_research` records:

```text
cya_candidate_000010 Goldfinch
cya_candidate_000045 Cabital
cya_candidate_000049 Outlet Finance
```

No audit action promotes them.

```text
Active staged candidates: none
Next candidate IDs:       none
Next platform ID:         not allocated
Next event ID:            cya_ev_000340 remains unconsumed
```

## Current audit release gate

The audit checkpoint branch may merge only if all normal repository checks pass, including:

1. canonical validation and data-quality reporting;
2. full corpus audit with blocker count `0`;
3. candidate scanner and candidate draft tests;
4. existing-record monitor tests;
5. static build and machine-readable build-output validation;
6. SEO checks;
7. preview surface verification;
8. representative desktop/mobile capture.

After merge, `main` must freeze on the resulting audit-release SHA and that exact SHA must pass Cloudflare deployment, Production Surface Check and production desktop/mobile capture before the audit checkpoint is considered complete.

## Post-100 operating boundary

`docs/record-growth-plan.md` defines 100 platforms as the **First mature corpus** and does not define an approved platform target beyond 100. Therefore the audit checkpoint does not pre-authorize a 101-platform growth segment.

After successful audit-release production verification:

- Phase 8 may be marked complete;
- the 100-platform corpus becomes the production-verified mature baseline;
- the growth lock remains active;
- no next platform/candidate IDs are allocated;
- future growth beyond 100 requires an explicit next-phase operating decision and a separately reviewed release of the growth lock.

## Immediate next action

```text
1. Open the 100-platform audit checkpoint PR with no canonical data changes.
2. Require all repository, corpus-audit, preview and representative-surface checks to pass.
3. Merge only with blocker count 0 and no new audit regression.
4. Freeze main on the resulting audit-release SHA and production-verify the exact SHA.
5. Record Phase 8 as complete only after the audit release is production-verified.
6. Keep the growth lock active and do not allocate or stage platform 101 without an explicit next-phase plan.
```
