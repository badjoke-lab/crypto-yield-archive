# Phase 9A XORA XRPL full-history probe result

Date: 2026-08-12  
Candidate: `cya_candidate_000102`  
Canonical platform ID: **not allocated**  
Research workflow run: `31506973985`

## Result

A reproducible `account_tx` scan against Ripple's public full-history mainnet server found an exact on-chain match for the incident amount reported in the XORA research lead.

```text
Treasury account:   rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o
Server:             https://s2.ripple.com:51234/
API method:         account_tx
API version:        2
Pages:              10
Transactions:       3,604
Inbound payments:   2,454
Target:             29,899.8 XRP / 29,899,800,000 drops
Exact matches:      1
```

Exact match:

```text
Transaction hash:   4FD202B3DB7ADCA94ABDF3CC06762A3B2DD615532E13B531B1737E14788C09AA
Ledger index:       105566760
Validated time:     2026-07-13T09:02:02Z
Sender:             rBtttd61FExHC68vsZ8dqmS3DfjFEceA1A
Destination:        rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o
Destination tag:    287588244
Delivered amount:   29,899.8 XRP
Result:             tesSUCCESS
```

The scan also found **zero outbound Payments from the XORA-attributed treasury back to the exact sending address** across the scanned treasury history through ledger `106224267`.

## What this establishes

CYA can now independently state at research level that:

1. the exact reported amount of `29,899.8 XRP` was successfully delivered on XRPL;
2. the destination was the treasury address independently attributed to XORA by DefiLlama;
3. the deposit carried destination tag `287588244`;
4. the transaction was validated successfully on 13 July 2026;
5. the exact amount match is unique within the scanned inbound treasury Payments.

This resolves the prior blocker that the reported deposit transaction itself could not be located.

## Sender-address context

Public explorer/indexed sources such as Bithomp and Whale Alert label `rBtttd61FExHC68vsZ8dqmS3DfjFEceA1A` as a Binance wallet in other historical transactions.

This does **not** identify the claimant. XORA's own architecture allows a user to deposit from a centralized exchange into the shared treasury using a unique destination tag, so a Binance sending wallet and an XORA destination tag are compatible with a normal exchange-originated user deposit.

## What this does not establish

The result does not yet prove:

- which XORA account was mapped to destination tag `287588244`;
- that the person described in the RippleXity/XRPL.to material controlled that XORA account;
- which XRPL address the user later requested for withdrawal;
- whether XORA created or attempted a withdrawal transaction to that requested address;
- whether a security/AML hold was actually communicated;
- whether a later phishing/account-nonexistence explanation came from XORA and referred to the same account;
- fraud, insolvency, permanent loss, or a recovery outcome.

The absence of an outbound Payment to the original Binance sending address is not enough to establish a failed withdrawal because XORA's public terms allow a user to specify a withdrawal destination independently.

## Provenance

Normalized repository record:

- `data-staging/research/xora-xrpl-payment-research-2026-08-12.json`

GitHub Actions provenance:

```text
Workflow:           XORA XRPL research
Run ID:             31506973985
Head SHA:           38afdade2b22b563c35808004a30cb50a5be267b
Artifact ID:        9107429871
Artifact digest:    sha256:7f843c3799d990de04b91ac0c4f157125fbfb95f0d90450ae8d563e2336897a2
```

## Candidate decision after the probe

Decision remains: `needs_research`.

The deposit leg is now independently verified, but the customer-account mapping and withdrawal-destination/settlement leg remain unresolved. Platform 101 must not be allocated until those boundaries and the operating legal entity are reviewed or the eventual canonical wording is explicitly narrowed to facts that do not require those unresolved claims.
