# Phase 10 — LINE BITMAX canonical promotion

Parent: #203  
Candidate issue: #234  
Candidate-only authority: PR #235

## Decision

Promote `cya_candidate_000131` as canonical platform `cya_plat_000113` in batch 72.

This moves the canonical platform count from **112 to 113**.

## Canonical lifecycle

- **2020-10-07** — LVC Corporation / LINE launch material establishes the start of BITMAX crypto-asset lending.
- Later first-party help material documents variable-period and fixed-period lending mechanics.
- LINE BITMAX later operated under LINE Xenesis株式会社; the operator transition is preserved rather than collapsed into a single inferred legal entity.
- **2026-03-03** — LINE Xenesis / LY Corporation announced the overall LINE BITMAX shutdown for **2026-06-01**.
- **2026-06-01** — canonical platform status becomes `operations_ended` for the overall service.

## Fail-close boundaries

The overall 2026-06-01 platform shutdown date is **not** asserted as the exact termination date of every individual lending contract. The official shutdown plan says existing lending contracts would be ended sequentially.

The shutdown site's conversion-and-return procedure for remaining customer crypto assets and yen balances is recorded only as a service-end asset-return procedure. It is **not** promoted as evidence of universal historical lending performance, a recovery percentage, solvency, insurance, or guaranteed principal.

Launch campaigns and later published lending rates remain issuer product terms rather than independently verified realized returns.

## IDs

- Platform: `cya_plat_000113`
- Launch event: `cya_ev_000349`
- Service-end event: `cya_ev_000350`
- Evidence: `cya_src_b72_0001` through `cya_src_b72_0004`

## Candidate consumption

`cya_candidate_000131` is removed from the active candidate ledger and preserved in `data-staging/candidates/cya-consumed-batch-72.json` with its canonical mapping.

This promotion follows AI-era execution Stage 1: continue approved canonical record growth before deeper Stage 2 lifecycle-gap work.
