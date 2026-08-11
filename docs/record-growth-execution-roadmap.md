# CYA record growth execution roadmap

Status: Phase 8 complete. Phase 9A XORA incident-led research active.  
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
- Active Phase 9A authorizes only the XORA Finance incident-led candidate and at most platform 101.

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

## Phase 8 100-platform full-corpus audit — complete

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

The 75-platform audit completed with blocker count `0` and quality-debt count `23`. The 100-platform corpus reaches the milestone without introducing a new blocker and without increasing the audit debt count.

The detailed audit record is `docs/phase-8-100-platform-audit.md`.

### Production finalization

The audit release initially exposed a workflow-trigger gap: `Production Surface Check` excluded `docs/**`, so a docs-only audit checkpoint could deploy without automatically receiving the required exact-SHA production verification.

PR #170 added `docs/**` to the existing production-smoke push path without weakening any production verifier logic.

PR #172 then created a deployable docs-only finalization checkpoint. Its merge SHA passed the complete production gate:

```text
Phase 8 finalization SHA:        162c216621687a149ebbfe213960a622667aa391
Production Surface Check:        #193 success
Cloudflare main deployment:      success
Custom production surface check: success
Production desktop/mobile:       success
Verification artifact upload:    success
Artifact:                         cya-production-ui-verification-31502882155
```

Phase 8 is therefore complete.

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

Phase 9A adds one incident-led research candidate:

```text
cya_candidate_000102 XORA Finance
```

XORA remains `needs_research`, not `add_now`. No canonical platform ID has been allocated.

Current product-scope review supports CYA relevance:

- XORA's whitepaper and terms describe a custodial XRP yield product;
- current public yield-source material says the native XRP yield is treasury-subsidized and treats XRPL AMM/lending as later roadmap phases;
- current terms allow security/compliance withdrawal holds;
- DefiLlama independently classifies XORA as a custodial XRPL savings product and attributes TVL to shared treasury address `rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o`.

The reported `29,899.8 XRP` deposit/withdrawal dispute remains a material research signal but not a CYA canonical finding until the underlying transaction/account evidence is reviewed.

## Phase 9A automated gate result

The candidate scanner and candidate-draft workflow ran against the 100-platform corpus and both succeeded as workflows.

For XORA:

```text
canonical match:                none
duplicate state:                duplicate-clear
classification:                 manual_review_required
decision:                       needs_research
eligible_for_draft:             false
eligible_for_canonical promote: false
canonical IDs assigned:         0
canonical writes performed:     0
```

This is the intended safety result: XORA is not blocked as a duplicate, but manual evidence review is still required before any canonical promotion.

## Phase 9A operating boundary

The active Phase 9A decision is documented in `docs/phase-9a-xora-incident-led-exception.md`.

Boundary:

- authorize only `cya_candidate_000102` XORA Finance;
- require transaction-level review of the reported deposit/withdrawal dispute;
- independently reproduce relevant treasury/on-chain claims;
- preserve attributable XORA support/account narratives before describing conflicts;
- verify the operating legal entity and applicable terms version;
- do not infer country/origin from governing-law clauses alone;
- do not classify fraud/scam/insolvency/customer loss from social or investigation summaries alone;
- allow at most one canonical promotion, to 101 platforms, if every gate passes;
- authorize no platform 102.

If XORA does not reach public quality, canonical remains at 100.

## Immediate next action

```text
1. Merge the Phase 9A XORA staging/operating-decision PR after its refreshed repository checks pass.
2. Preserve XORA as needs_research; do not allocate a platform ID yet.
3. Verify the reported 29,899.8 XRP deposit transaction and destination-tag context.
4. Verify the reported withdrawal request and whether an XRPL settlement occurred.
5. Independently reproduce the attributed XORA treasury address/history and any BTC/IOU representation claim before canonical use.
6. Preserve attributable first-party support/account narratives and source snapshots.
7. Verify the operating legal entity and incident-date terms boundary.
8. If the candidate reaches public quality, change it through a separately reviewed candidate decision and open a separate canonical promotion PR for platform 101; otherwise retain needs_research and keep canonical at 100.
```
