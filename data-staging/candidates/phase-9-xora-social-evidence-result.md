# Phase 9A XORA social-evidence review result

Date: 2026-08-12  
Candidate: `cya_candidate_000102`  
Decision after review: `add_now`  
Canonical platform ID: **not allocated**

## Result

The second evidence track links the independently verified XRPL deposit to the claimant's public incident account strongly enough to permit a narrowly bounded canonical XORA platform record.

The preserved public X material includes:

- RippleXity's investigation context, which says the review began after Hwan reported depositing `29,899.8 XRP` into XORA and being unable to access the funds;
- Hwan's public `XORA Finance – My XRP Withdrawal Timeline` account, framed by Hwan as a factual chronology rather than an accusation;
- a separate Hwan post publishing screenshots about two different explanations received after the withdrawal issue;
- XRPDegens commentary referring to the transaction ID and XORA's reported explanation;
- DNF_sol identifying Hwan's post as the case participant's final summary.

Normalized preservation record:

- `data-staging/research/xora-social-evidence-2026-08-12.json`

Retrieval provenance:

```text
Workflow:         XORA social evidence research
Run ID:           31508695647
Artifact ID:      9108124449
Artifact digest:  sha256:08440837570dcddce4146321666854aefce10105d7f460c491be01235f4cb9cd
```

## Screenshot linkage

One claimant-published screenshot depicts a completed Binance XRP withdrawal with:

```text
Amount:           29,899.8 XRP
Treasury:         rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o
Destination tag:  287588244
Transaction:      4FD202B3DB7ADCA94ABDF3CC06762A3B2DD615532E13B531B1737E14788C09AA
```

These fields match the transaction independently recovered through the repository's XRPL full-history probe.

The same claimant-published image depicts a DM interface labeled `Xora Finance / @xora_finance` describing a stuck withdrawal, matching the X account to destination tag `287588244`, and describing a manual AML hold with a withdrawal freeze and lifetime cap `0`.

A private email address visible in the source image is deliberately excluded from normalized repository records.

A second claimant-published screenshot depicts a message attributed to Joren Lundgren saying the person had fallen for a phishing website, had never had an account with XORA, and that a fake XORA website existed.

## Evidence boundary

The screenshots materially strengthen the relationship between the independently verified transaction/tag and Hwan's public dispute account, but CYA does **not** treat them as authenticated XORA internal records.

Therefore a canonical record may say only that:

- the `29,899.8 XRP` deposit to the attributed XORA treasury/tag is independently verified;
- Hwan publicly reported a withdrawal problem;
- Hwan-published screenshots depict an AML-hold explanation tied to the same destination tag and a separate conflicting phishing/no-account explanation;
- the requested withdrawal destination, final settlement and customer outcome remain unresolved.

A canonical record must not infer fraud, scam, insolvency, permanent loss or a recovery rate from this evidence.

## Candidate decision

Decision: **`add_now`**.

The platform itself, custody/yield model, operating origin, launch period and the verified deposit leg are sufficiently supported for a conservative canonical record. Remaining uncertainty can be represented explicitly rather than blocking the platform's inclusion.

The candidate-only decision allocates no canonical platform/event/evidence/outcome/product/terms IDs. Canonical promotion remains a separate reviewed change.
