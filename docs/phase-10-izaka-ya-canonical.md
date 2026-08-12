# Phase 10 canonical batch 61 — IZAKA-YA

Date: 2026-08-13  
Lane: Phase 10 canonical growth  
Candidate authority: PR #187 / `cya_candidate_000107`

## Result

This batch promotes the duplicate-clear IZAKA-YA candidate into the canonical CYA corpus as platform 102.

```text
Platform: cya_plat_000102
Name:     IZAKA-YA
Type:     centralized_yield
Status:   active
Origin:   Hong Kong
```

The batch also adds one bounded campaign event and one mature-corpus evidence upgrade for Ledn.

Projected canonical state after merge:

```text
Platforms:          102
Events:             337
Evidence:           610
Customer outcomes:  102
Product profiles:   143
Terms risk:         102
Claims ongoing:      18
```

## Two-gate authority

Candidate-only review completed first in PR #187. The exact reviewed candidate head passed candidate audit, full-corpus scan, scanner guard, draft generation, CYA CI, data validation, build, SEO, and preview checks before merge.

This canonical PR is separate from the candidate-only operation and is the first point at which canonical platform IDs are allocated.

## Why this is a one-platform canonical PR

Phase 10 permits one platform per canonical PR when custody, legal-entity, jurisdiction, or ownership boundaries require extra care.

IZAKA-YA has strong first-party product evidence but incomplete public lending-contract detail. The public operator page identifies Izakaya Limited and a Hong Kong operating address, while generic website terms use Cayman Islands governing law. Public materials do not fully establish the lending counterparty, legal ownership transfer, custody deployment, rehypothecation, insolvency treatment, insurance, or regulatory authorization.

Those unresolved boundaries are preserved explicitly rather than reconciled by inference.

## Product evidence

Current first-party material establishes an account-based crypto lending wallet.

Reviewed product mechanics include:

- cryptocurrency is deposited to the IZAKA-YA wallet before lending;
- users select a lending amount and period;
- estimated interest and contract content are presented before application;
- IZAKA-YA describes periodic interest payments;
- principal plus interest are described as returning to the wallet after the lock period;
- the public site presents a normal lending surface of up to 12% APY with daily interest and terms from one day to one year.

These are product-mechanics and issuer-claim facts. They do not establish universal realized repayment or realized yield.

## Promotional-yield boundary

During 2026 IZAKA-YA published multiple temporary campaigns with headline annualized rates or reward formulas, including 33%, 100%, 500%, and 1000% APR-equivalent figures.

CYA records these only as issuer-advertised campaign terms. They are subject to campaign durations, eligibility requirements, lock periods, reward caps, KYC/application steps, or other conditions documented by the issuer.

They are not treated as:

```text
verified realized customer yield
proof of solvency
proof of principal protection
proof of universal payout
independent return verification
```

## Canonical event

The batch allocates:

```text
cya_ev_000342
2026-06-10
yield_rate_changed
status effect: none
```

The event records the issuer's 1000% APR-equivalent switching campaign because it is a dated, unusually large change in advertised yield terms with explicit eligibility and reward-cap conditions.

`cya_ev_000341` was not available: exact-head validation identified it as already allocated by the prior Wirex maintenance event in `events-batch-60-maintenance-wirex-20260812.json`. The batch therefore advances to the next verified-unused event ID, `cya_ev_000342`, rather than overwriting historical authority.

The event does not change the platform's active status.

## Outcome boundary

No reviewed evidence establishes a failure, insolvency, platform-wide withdrawal freeze, restructuring, haircut, or claims process.

The canonical outcome is therefore:

```text
not_applicable
```

The support statement that principal and interest return after lock expiry remains a product-mechanics statement and is not promoted into a historical customer-recovery conclusion.

## Terms-risk boundary

The canonical terms status is:

```text
unclear
```

The generic public terms do not fully resolve:

- exact lending counterparty;
- legal or beneficial ownership of lent assets;
- asset deployment or rehypothecation;
- insolvency treatment and claim priority;
- insurance or compensation coverage;
- regulatory authorization.

Hong Kong operator evidence and the Cayman governing-law clause are kept as separate sourced facts.

## Identifier allocation

```text
Platform: cya_plat_000102
Event:    cya_ev_000342
Evidence: cya_src_b61_0001 through cya_src_b61_0009
```

Candidate `cya_candidate_000107` is removed from the active candidate queue and preserved in `cya-consumed-batch-61.json` mapped to platform 102.

## Mature-corpus maintenance

Phase 10 asks each growth batch to attempt one evidence upgrade where strong evidence exists.

This batch adds:

```text
cya_src_b61_0010
platform: cya_plat_000011 / Ledn
source: current first-party Ledn help article
```

The source documents current Ledn services, including Growth Accounts earning interest on USDC and USDT. This brings Ledn from two reviewed evidence records to three without changing its platform status or product classification.

If no other quality-debt finding is introduced, this should reduce the mature-corpus quality-debt count by one.

## Deployment and completion

Canonical promotion is not complete at merge alone.

Required sequence:

1. all exact-head repository validation passes;
2. this PR merges to `main`;
3. Cloudflare deploys the exact merged SHA;
4. Production Surface Check succeeds on that exact SHA;
5. `/platform/izaka-ya/` and machine-readable counts match the canonical data;
6. only then may Phase 10 continue to platform 103.

Until exact-SHA production verification succeeds, platform 102 is repository-merged rather than production-verified.
