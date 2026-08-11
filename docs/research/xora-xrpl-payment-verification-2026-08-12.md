# XORA Finance XRPL payment verification — 2026-08-12

Purpose: public provenance for the transaction-level fact used in the XORA Finance canonical dossier.

## Method

The repository's `XORA XRPL research` workflow queried Ripple's full-history `s2.ripple.com` server with `account_tx` for treasury account `rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o`.

The probe scanned:

- 10 paginated result pages;
- 3,604 treasury transactions;
- 2,454 inbound payments;
- ledger range 32,570 through 106,224,267.

The target amount was `29,899.8 XRP` (`29,899,800,000` drops).

## Exact match

Exactly one successful delivered-amount match was found:

```text
Transaction:      4FD202B3DB7ADCA94ABDF3CC06762A3B2DD615532E13B531B1737E14788C09AA
Ledger:           105566760
Close time:       2026-07-13T09:02:02Z
Sender:           rBtttd61FExHC68vsZ8dqmS3DfjFEceA1A
Destination:      rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o
Destination tag:  287588244
Delivered:        29,899.8 XRP
Result:           tesSUCCESS
```

The scanned treasury history contained no outbound Payment from the treasury back to that exact sending address.

## Workflow provenance

```text
Workflow:         XORA XRPL research
Run ID:           31506973985
Head SHA:         38afdade2b22b563c35808004a30cb50a5be267b
Artifact ID:      9107429871
Artifact digest:  sha256:7f843c3799d990de04b91ac0c4f157125fbfb95f0d90450ae8d563e2336897a2
```

## Interpretation boundary

This verification establishes only that the exact reported amount was successfully delivered to the treasury address used in the XORA research boundary with destination tag `287588244`.

It does **not** by itself establish:

- claimant identity;
- the withdrawal destination later requested by the claimant;
- withdrawal rejection or non-settlement;
- fraud or scam;
- insolvency;
- permanent customer loss;
- a recovery rate.

A withdrawal could have specified an address different from the original sending address, so the absence of an outbound Payment to the sender is not treated as proof of refusal or loss.
