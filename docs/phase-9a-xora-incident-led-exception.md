# Phase 9A — XORA Finance incident-led exception

Status: production verified / complete  
Project: Crypto Yield Archive (CYA)  
Canonical target: 101 platforms  
Phase 8 finalization SHA: `162c216621687a149ebbfe213960a622667aa391`  
Phase 8 Production Surface Check: #193 success  
Phase 9A canonical merge SHA: `87f21a256949b4d07ad4d073b91e860aa0bb02fe`  
Phase 9A Production Surface Check: #197 success

## Decision

Phase 8 remains complete. Phase 9A authorized exactly one incident-led exception: XORA Finance. That exception is now canonical and production-verified.

The candidate-only review completed before canonical promotion. `cya_candidate_000102` was duplicate-clear against the 100-platform corpus and advanced to `add_now` only after the XRPL deposit leg and claimant-published public evidence were preserved and reviewed.

The canonical promotion uses:

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

## Production verification

The canonical promotion merged through PR #176 at exact main SHA:

```text
87f21a256949b4d07ad4d073b91e860aa0bb02fe
```

Production Surface Check #197 / workflow run `31513145221` verified the custom production domain after Cloudflare Pages served that exact SHA. The production checker returned:

```text
Platforms:          101
Events:             335
Evidence:           597
Customer outcomes:  101
Product profiles:   142
Terms risk:         101
Claims ongoing:      18
```

Production representative visual verification completed `24/24` desktop/mobile states with `0` failures.

```text
Artifact:  cya-production-ui-verification-31513145221
ID:        9109998416
Digest:    sha256:4cfcbfed3cb68ac601a4be1c11f03e27aea5950ff612ef95b3b5a182a0c3adb2
```

This satisfies the Phase 9A production gate.

## Remaining research

Later evidence may still improve the record by:

1. identifying the requested withdrawal destination and final XRPL settlement state;
2. verifying the operating legal entity independently of Stockholm marketing origin and Delaware governing-law language;
3. reproducing any treasury BTC/IOU representation claim before creating a reserve-representation event;
4. updating the customer outcome if recovery, loss or settlement becomes directly supportable.

These are evidence-upgrade tasks, not blockers to the completed platform-101 promotion.

## Phase closeout

Phase 9A ends at platform 101. General record growth remains locked at this boundary. Normal monitoring and evidence upgrades continue, but no platform 102 ID may be allocated or published without a separately reviewed and authorized growth phase.
