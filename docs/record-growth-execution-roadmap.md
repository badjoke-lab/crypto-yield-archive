# CYA record growth execution roadmap

Status: Phase 8 audit release merged; exact production verification pending. Phase 9A XORA incident-led exception proposed.  
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
- General record growth remains locked beyond 100 platforms.
- Phase 9A, if activated after Phase 8 production verification, authorizes only the XORA Finance incident-led candidate and at most platform 101.

## Production-verified 100-platform canonical baseline

```text
Repository:                    badjoke-lab/crypto-yield-archive
Default branch:                main
Canonical 100 SHA:             4c23420ac2a499f215956d240942932da89fd508
Canonical PR:                  #168 merged
Production Surface Check:      #191 success
Representative page capture:   success
Main CYA CI:                   #504 success
Canonical platforms:           100
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

The exact 100-platform canonical SHA passed Cloudflare main deployment, current production-surface verification, production desktop/mobile capture and verification-artifact upload before the audit branch was created. Main CYA CI built the same SHA and verified the machine-readable layer with `primary_records=100` and matching platform/event/evidence/outcome/product/terms-risk counts.

## Phase 8 100-platform full-corpus audit

The audit checkpoint was merged in PR #169.

```text
Audit release SHA:               bf2b1948f7ac817956f740e91fcfe80bb8ad0ba4
Audit PR:                        #169 merged
Corpus blockers:                 0
Quality-debt items:             23
Medium-reliability evidence:   108
Low-reliability evidence:        0
Low-confidence platforms:        0
Low-confidence events:          30
Unknown outcomes:               13
Claims ongoing:                 18
Unclear terms:                  24
```

The 75-platform audit completed with blocker count `0` and quality-debt count `23`. The 100-platform corpus therefore reaches the milestone without introducing a new blocker and without increasing the audit debt count.

The detailed audit record is `docs/phase-8-100-platform-audit.md`.

### Audit-release production-verification gap

Cloudflare Pages deployed the audit release SHA `bf2b1948f7ac817956f740e91fcfe80bb8ad0ba4` successfully. However, the `Production Surface Check` push trigger excluded `docs/**`, so the docs-only audit release did not automatically receive the required exact-SHA production-surface and representative screenshot run.

PR #170 fixes that trigger boundary by adding `docs/**` without weakening any verifier logic. Phase 8 is not marked complete until the resulting release is checked on the custom production domain with the existing exact-SHA verifier and production screenshots.

## Remaining non-blocking debt boundary

The existing 23 findings remain explicit rather than being repaired with unsupported assumptions:

- three platforms have fewer than three evidence records: Ledn, Crypto.com Earn and Haru Invest;
- ten historical original URLs remain correctly marked repurposed;
- Flint and BitLendingClub remain `operations_ended` without invented exact end dates;
- historical terms remain `unknown` for Babel Finance, BlockFills, Stablegains, Hodlnaut, Vauld, Haru Invest and CoinLoan;
- consumed-candidate history remains split across traceable legacy ledgers and is counted as one storage/maintenance finding.

Low-reliability evidence remains `0`, low-confidence platform count remains `0`, and no canonical/reference blocker is present.

## Candidate boundary

The pre-existing active candidate ledger contains three long-lived `needs_research` records:

```text
cya_candidate_000010 Goldfinch
cya_candidate_000045 Cabital
cya_candidate_000049 Outlet Finance
```

Phase 9A proposes one additional incident-led research candidate:

```text
cya_candidate_000102 XORA Finance
```

XORA is staged as `needs_research`, not `add_now`. Its CYA product scope is strongly supported by first-party custodial/yield material, while the reported deposit/withdrawal dispute and treasury questions still require transaction-level, attributable and legal-entity review.

No canonical platform ID is allocated by candidate staging.

## Phase 9A operating decision

The proposed Phase 9A decision is documented in `docs/phase-9a-xora-incident-led-exception.md`.

Boundary:

- activate only after Phase 8 exact production verification succeeds;
- authorize only `cya_candidate_000102` XORA Finance;
- run hardened duplicate scan and candidate draft against the full 100-platform corpus;
- require first-party product/terms review and transaction-level incident verification;
- allow at most one canonical promotion, to 101 platforms, if every gate passes;
- do not classify fraud/scam/insolvency/customer loss from social or investigation summaries alone;
- authorize no platform 102.

If XORA does not reach public quality, canonical remains at 100.

## Immediate next action

```text
1. Merge PR #170 only after its repository checks pass.
2. Require the resulting main SHA to pass Cloudflare deployment, Production Surface Check and production desktop/mobile capture.
3. Mark Phase 8 complete only after that exact-SHA production verification succeeds.
4. Merge the Phase 9A XORA candidate/operating-decision PR only after the Phase 8 gate is closed and its own repository checks pass.
5. Run hardened candidate scan/draft for cya_candidate_000102 against the full 100-platform corpus.
6. Perform the required on-chain, source-preservation, legal-entity and terms review before allocating platform 101.
7. If public quality is achieved, open a separate canonical promotion PR; otherwise retain XORA as needs_research and keep canonical at 100.
```
