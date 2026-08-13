# Phase 10 conditional P3 review — CryptoPanda × IZAKA-YA

Date: 2026-08-13  
Issue: #186  
Decision: **lending-related relationship confirmed / enrich existing IZAKA-YA record / no new platform**

## Why this review exists

Issue #186 listed CryptoPanda only as a conditional P3 item: review it if evidence supports a lending-related relationship.

That condition is now satisfied by first-party evidence from both sides of the relationship.

## Relationship evidence

CryptoPanda first-party campaign material dated 2026-02-09 explicitly calls IZAKA-YA a partner and describes a product flow in which users:

1. purchase JPYR through CryptoPanda;
2. use the purchased JPYR for a lending campaign on IZAKA-YA;
3. select a 10-day or longer lending term under the campaign flow;
4. receive campaign benefits through the IZAKA-YA wallet under the published conditions.

A later CryptoPanda campaign dated 2026-03-31 again identifies the IZAKA-YA collaboration and again ties JPYR purchase through CryptoPanda to an IZAKA-YA 10-day lending flow.

Independent first-party corroboration also exists on the IZAKA-YA side. An IZAKA-YA campaign page dated 2025-05-01 documents a CryptoPanda collaboration requiring use of both services and connects CryptoPanda activity to the user's IZAKA-YA wallet.

The current IZAKA-YA company profile additionally lists CryptoPanda among partner companies, but this maintenance package does not duplicate that already-canonical company-profile URL merely to restate the partner list.

## Canonical treatment

CryptoPanda is not promoted as a separate CYA platform.

The reviewed evidence establishes CryptoPanda primarily as a purchase/P2P/exchange-side service participating in an IZAKA-YA lending funnel. The yield/lending contract and lending account remain on the already-canonical IZAKA-YA identity:

```text
cya_plat_000102
IZAKA-YA
```

Accordingly this maintenance package adds:

```text
cya_ev_000345
2026-02-09
CryptoPanda and IZAKA-YA announce JPYR purchase-and-lend collaboration
```

and first-party relationship evidence:

```text
cya_src_b61_0011
cya_src_b61_0012
cya_src_b61_0013
```

No new platform ID, outcome record, product identity or terms-risk identity is created.

## Yield-claim boundary

The campaign pages contain high annualized-rate and combined-benefit promotional figures.

Those figures are retained only as issuer/promoter campaign terms and must not be interpreted as:

```text
verified realized customer return
principal guarantee
proof of solvency
proof of universal payout
independent return verification
```

The event is therefore `other`, has no platform-status effect, and exists to record the verified product/commercial relationship rather than to certify campaign performance.

## Issue #186 completion

This resolves the final conditional P3 item in Issue #186.

After the exact final PR head passes the normal data, CI, build, SEO and preview gates and the canonical change is production-verified on its exact merge SHA, Issue #186 can be closed as completed.
