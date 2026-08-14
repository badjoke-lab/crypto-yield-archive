# Phase 10 — LINE BITMAX 暗号資産貸出サービス candidate review

Date: 2026-08-15
Parent: #203
Candidate issue: #234

## Decision

Stage `cya_candidate_000131` as `add_now`, subject to the hardened exact-head candidate scanner.

## Launch and product history

Issuer-distributed LINE material states that LVC Corporation would start BITMAX's crypto-asset lending service on **2020-10-07**. Users lent crypto assets to BITMAX and received lending fees.

Later first-party help material documents variable-period and fixed-period lending. Fixed-period lending generally could not be cancelled during the term; published help states principal and lending fees were returned after maturity.

## Shutdown history

LINE BITMAX later operated under LINE Xenesis株式会社. On 2026-03-03, LINE Xenesis / LY Corporation announced that the entire LINE BITMAX service would end on **2026-06-01**.

The official shutdown site states that crypto-lending applications were stopped and existing lending contracts would be ended sequentially as part of the shutdown process.

Do not invent one exact final date for every lending contract if individual contracts ended before the platform-wide shutdown date.

## Operator boundary

Launch-era operator: LVC Corporation.
Shutdown-era operator: LINE Xenesis株式会社.

Preserve this operator/history transition rather than collapsing the legal-entity history by inference.

## Outcome boundary

The shutdown plan states that remaining crypto assets after service end would be converted at a reasonable/fair market price and returned with yen balances under the announced procedure. This is evidence of the shutdown asset-return process, not proof of universal historical lending performance or every lending-contract repayment.

## Rate boundary

Launch campaigns and later published lending rates are issuer product terms. They are not independently verified realized returns, guarantees, reserve proof, insurance or solvency evidence.

## Duplicate pre-check

Exact repository searches for `BITMAX`, `LINE BITMAX`, and `cya_candidate_000131` returned no indexed CYA identity match before allocation.

The hardened full-corpus scanner on the exact PR head remains authoritative. Promotion stops on exact, probable, or ambiguous duplicate.
