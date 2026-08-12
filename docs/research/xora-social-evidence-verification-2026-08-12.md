# XORA Finance social evidence preservation — 2026-08-12

Purpose: preserve the core claimant-published media used by the XORA Finance incident record in a durable, privacy-safe repository form, independent of a short-lived GitHub Actions artifact or the continued availability of the original X post.

## Source and retrieval provenance

Original claimant post:

- X post ID: `2084206277757161565`
- author: Hwan (`@gimgyeongh62101`)
- source URL: `https://x.com/gimgyeongh62101/status/2084206277757161565`

The repository's manual `XORA social evidence research` workflow retrieved the public post metadata and attached media using X publish oEmbed, the public syndication endpoint, t.co redirect resolution, and public media download.

```text
Workflow:         XORA social evidence research
Run ID:           31508695647
Artifact ID:      9108124449
Artifact digest:  sha256:08440837570dcddce4146321666854aefce10105d7f460c491be01235f4cb9cd
Artifact expiry:  2026-09-10T15:44:59Z
```

The Actions artifact is only retrieval provenance. The two privacy-reviewed copies below are committed to repository history so the evidentiary basis does not disappear when the artifact expires or if the live social post is removed.

## Preserved public media

### Image 1 — conflicting phishing / no-account narrative

Repository path:

`docs/research/xora-social-media/2084206277757161565-1.webp`

```text
Original JPEG SHA-256: 3c8979e8962df2959b0934d2ad54a96207b083d66778e98364e25888205d05dd
Public WebP SHA-256:    1c888ab91460d0c020a36f71233d5a39f22d77e94dda6a1aa754436aac56563e
```

The claimant-published image depicts a forwarded message attributed to Joren Lundgren stating that the affected person had fallen for a phishing website, had never had an account with XORA, and that a fake XORA website existed. The counterpart identity in the source image was already obscured by the publisher.

This is preserved as claimant-published media. CYA has not independently authenticated the depicted sender, the forwarding chain, or whether the message refers to exactly the same off-chain account represented by destination tag `287588244`.

### Image 2 — destination-tag / AML-hold narrative and Binance deposit record

Repository path:

`docs/research/xora-social-media/2084206277757161565-2-redacted.webp`

```text
Original JPEG SHA-256:          f68ad403892e879608add4fc0f6bc24332a498c6b05ba18c7e9df29c7b89c3dd
Privacy-redacted JPEG SHA-256:  8483b459f48d03b5637d1f10cea1f24ad5ff93f04e593efe2b549720a0ad6baf
Public WebP SHA-256:            066160ecca9ce6b96b1c63d4c7d224fbb067bc314df173d4ca96216ac5eaef65
```

The public copy removes only the claimant email address visible in two locations. The transaction amount, treasury address, destination tag, transaction hash, timestamps, and depicted support text were not redacted or altered.

The claimant-published image depicts:

- a DM interface labeled `Xora Finance / @xora_finance` discussing a stuck withdrawal;
- text describing the X account as matched to XORA destination tag `287588244`;
- text describing a `manual AML hold`, `withdraw freeze`, and `lifetime cap 0`;
- a Binance XRP withdrawal record for `29,899.8 XRP` to `rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o` with destination tag `287588244`;
- transaction `4FD202B3DB7ADCA94ABDF3CC06762A3B2DD615532E13B531B1737E14788C09AA`.

The transaction fields shown in the image are independently corroborated by `docs/research/xora-xrpl-payment-verification-2026-08-12.md`, which reproduced the exact successful XRPL payment through Ripple full-history data. The DM interface itself is not independently authenticated as an XORA internal support record.

## First-party context reviewed separately

Current XORA terms state that XRP/TRX withdrawals can be delayed for security reviews or technical issues and that XORA may impose withdrawal limits or holds for security and compliance purposes. Current XORA privacy material separately describes collection of deposit/withdrawal records, destination tags, transaction hashes, and information used for identity, wallet-ownership, sanctions, fraud, and AML reviews.

Those first-party policies establish that such controls and review processes exist in XORA's published operating model. They do **not** authenticate the claimant-published DM or establish that the claimant's account was in fact subjected to a valid AML hold.

## Interpretation boundary

The durable evidence supports the existing narrow canonical statement that:

1. a `29,899.8 XRP` deposit to the XORA-attributed treasury with destination tag `287588244` is independently verified on XRPL;
2. claimant-published media links the same transaction/tag to a withdrawal dispute and depicts an AML-hold explanation;
3. claimant-published media also depicts a conflicting phishing/no-account explanation.

It does **not** establish:

- the withdrawal destination requested by the claimant;
- whether a withdrawal transaction was submitted by XORA;
- final settlement or recovery;
- permanent customer loss;
- fraud or scam;
- insolvency;
- a platform-wide withdrawal suspension;
- the verified operating legal entity.

Treasury BTC/IOU representation allegations remain outside the canonical record until independently reproduced.
