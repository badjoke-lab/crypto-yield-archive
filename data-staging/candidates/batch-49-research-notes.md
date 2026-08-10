# Phase 8 batch 49 candidate research notes

Baseline canonical SHA: `327e0c3b627826ee241f66511c92f9e89e7ebbac`  
Canonical platforms: 82  
Candidate IDs reviewed: `cya_candidate_000077` / `cya_candidate_000078`

## Bitpanda Earn

Reviewed first-party basis:

- Bitpanda announced Staking on 2022-05-10 with weekly rewards and no general lock-in or warm-up period at launch;
- the current Bitpanda Earn surface groups Staking, Earn on Stablecoins and Passive Earn;
- current materials explicitly distinguish staking rewards sourced from proof-of-stake networks from stablecoin yield paid by Bitpanda;
- Earn on Stablecoins is described as a loan/title-transfer arrangement: ownership transfers to Bitpanda during the transaction and the customer becomes an unsecured creditor;
- Bitpanda discloses counterparty, insolvency, default and de-pegging risk and states the stablecoin Earn product is not a bank deposit and has no deposit protection;
- product-specific Staking Terms and Earn Terms are listed on Bitpanda's current legal surface.

Primary sources:

- https://www.bitpanda.com/en/staking
- https://blog.bitpanda.com/en/bitpanda-staking-here
- https://support.bitpanda.com/hc/en-us/articles/23210946637212-Earn-on-stablecoins
- https://www.bitpanda.com/en/legal

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. If promoted first, this candidate would receive the next canonical platform ID, `cya_plat_000083`.

## CEX.IO Earn

Reviewed first-party basis:

- CEX.IO's current Earn surface presents both Staking and Savings;
- first-party Staking documentation is dated 2020 and describes rewards while supported assets remain in the CEX.IO account;
- first-party Savings material describes Savings as a mechanism for earning rewards by lending cryptocurrency and documents a dedicated Savings account;
- a 2025-03-26 first-party update states that Automated Crypto Staking was suspended on 2025-04-01, while also describing an updated reward structure for continuing Staking and Savings programs;
- current Savings material presents flexible Savings and also contains inconsistent statements about whether Locked Savings is presently available; canonical review must not flatten that inconsistency into a universal current product term;
- jurisdictional access and asset treatment require product-specific verification.

Primary sources:

- https://earn.cex.io/
- https://earn.cex.io/staking
- https://earn.cex.io/savings
- https://support.cex.io/en/articles/4383555-staking
- https://support.cex.io/en/articles/10940951-important-updates-to-our-staking-and-savings-services

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. If both candidates remain promotion-ready after review, CEX.IO would follow Bitpanda with the next available canonical platform ID.

## Required gate

Both records remain staging-only. No canonical IDs are assigned in this branch. No universal custody, legal-title, segregation, principal-protection, locked-term availability or customer-outcome claim may be inferred from these candidate notes. Candidate scanning and the corpus audit must resolve any existing canonical overlap before promotion.
