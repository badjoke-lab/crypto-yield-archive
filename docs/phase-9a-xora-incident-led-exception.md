# Phase 9A — XORA Finance incident-led exception

Status: canonical promotion pending production verification  
Project: Crypto Yield Archive (CYA)  
Canonical target: 101 platforms  
Phase 8 finalization SHA: `162c216621687a149ebbfe213960a622667aa391`  
Phase 8 Production Surface Check: #193 success

## Decision

Phase 8 remains complete. Phase 9A authorizes exactly one incident-led exception: XORA Finance.

The candidate-only review is complete. `cya_candidate_000102` is duplicate-clear against the 100-platform corpus and was advanced to `add_now` only after the XRPL deposit leg and claimant-published public evidence were preserved and reviewed.

The separate canonical promotion uses:

- platform: `cya_plat_000101`
- incident event: `cya_ev_000340`
- batch: 60
- status: `active`
- platform type: `centralized_yield`
- terms risk: `unclear`
- customer outcome: `unknown`

No platform 102 is authorized.

## Evidence boundary

Current XORA first-party materials establish a custodial XRP yield product using a shared XRPL treasury, per-user destination tags and off-chain balance accounting. Current materials state that the native XRP yield is treasury-subsidized during bootstrap and present XRPL AMM and on-chain lending as later transition stages. Current terms state that supported deposited balances are held in XORA-managed custodial wallets and permit security/compliance withdrawal holds.

A reproducible Ripple full-history probe independently found exactly one successful `29,899.8 XRP` inbound payment matching the reported amount:

```text
Transaction:      4FD202B3DB7ADCA94ABDF3CC06762A3B2DD615532E13B531B1737E14788C09AA
Ledger:           105566760
Validated:        2026-07-13T09:02:02Z
Treasury:         rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o
Destination tag:  287588244
Result:            tesSUCCESS
```

The claimant-published public media depicts a Binance withdrawal record with the same amount, treasury, tag and transaction hash, plus a DM interface labeled Xora Finance / `@xora_finance` describing a manual AML hold tied to that tag. A separate claimant-published screenshot depicts a conflicting phishing/no-account explanation.

Those screenshots are preserved as claimant-published evidence, not authenticated XORA internal records.

## Canonical wording rules

The canonical record may state that:

- XORA is a custodial/centralized XRP yield platform;
- the reported `29,899.8 XRP` deposit leg is independently reproduced on XRPL;
- a claimant publicly reported a withdrawal dispute;
- claimant-published screenshots depict an AML-hold explanation tied to destination tag `287588244` and a separate conflicting phishing/no-account explanation;
- the requested withdrawal destination, final settlement, customer outcome and operating legal entity remain unresolved.

The canonical record must not infer:

- fraud or scam;
- insolvency;
- permanent customer loss;
- a recovery rate;
- platform-wide withdrawal suspension;
- legal asset ownership merely from custodial control.

## Event boundary

`cya_ev_000340` uses `event_type: other` and `event_status_effect: none`.

Its date, `2026-08-03`, marks the first preserved claimant post publishing support evidence. It is not represented as the date the underlying withdrawal problem necessarily began.

## Terms boundary

`terms_status: unclear` is intentional. XORA's June 2026 terms establish custodial control but do not clearly resolve legal or beneficial ownership of deposited assets or insolvency treatment. CYA therefore does not map custody to `platform_owned` or `customer_owned` without stronger language.

## Customer-outcome boundary

`outcome_status: unknown` is scoped to the documented dispute. It does not mean XORA is insolvent or that platform-wide customers have losses. Update the outcome only when the requested withdrawal destination, settlement or recovery/loss becomes directly supportable.

## Remaining research

After canonical promotion, later evidence may still improve the record by:

1. identifying the requested withdrawal destination and final XRPL settlement state;
2. verifying the operating legal entity independently of Stockholm marketing origin and Delaware governing-law language;
3. reproducing any treasury BTC/IOU representation claim before creating a reserve-representation event;
4. updating the customer outcome if recovery, loss or settlement becomes directly supportable.

## Production gate

Merge the canonical promotion only after repository validation, build, candidate, SEO and preview gates succeed. After merge, production-verify the exact merged SHA. General record growth stays locked; Phase 9A ends at platform 101.
