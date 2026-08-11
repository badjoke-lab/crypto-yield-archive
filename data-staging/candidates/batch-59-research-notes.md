# Phase 8 batch 59 candidate research notes

Baseline canonical SHA: `ef6426842399071c82ce6bfc388347fec3296f66`  
Canonical platforms: 98  
Candidate IDs reviewed: `cya_candidate_000097` / `cya_candidate_000098`

## Bitvavo Staking

Reviewed first-party basis:

- Bitvavo currently operates Flex and Fixed Staking for supported digital assets through its Earn surface;
- current Terms state users opt in to staking supported assets held in the Bitvavo wallet, with Bitvavo acting as validator or delegator on the user's behalf in third-party proof-of-stake networks;
- current Terms state staking assets continue to be held by the Foundation and separately document the Foundation/custody structure for user assets;
- rewards are protocol/service dependent, distributed after applicable fees, and estimates/rates may change;
- Fixed Staking can impose lock-up and unstaking restrictions, while current terms warn that slashing or protocol malfunction can cause partial or total loss;
- certain assets can be eligible for both staking and lending; if the user enables both services, Bitvavo may decide which service applies, so canonical promotion must keep the staking product boundary explicit rather than importing lending treatment into all staking balances;
- reviewed sources establish current staking operation but do not establish one exact original launch date.

Primary sources:

- https://bitvavo.com/en/terms
- https://bitvavo.com/en/earn
- https://support.bitvavo.com/hc/en-us/articles/4405243949841-Staking-at-Bitvavo

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. Keep `launch_date` unresolved unless an explicit first-party original-launch source is found. Legal/custody treatment must be stated only within the reviewed staking and Foundation terms and must not be conflated with Bitvavo's separate lending service.

## Bitpanda Staking

Reviewed first-party basis:

- Bitpanda's first-party launch announcement dated 10 May 2022 states that Bitpanda Staking was then available on ten crypto-assets;
- current Bitpanda Earn/Staking material documents proof-of-stake participation, weekly rewards, automatic restaking and network/protocol-dependent unstaking constraints;
- current product material explicitly distinguishes Staking from Earn on Stablecoins: the staking product participates in Proof-of-Stake validation, while Earn on Stablecoins is a lending product with separate ownership/counterparty treatment;
- current staking material documents slashing, hack and market-value risks and does not support treating staking rewards as guaranteed;
- Bitpanda maintains a dedicated Staking Terms document on its current legal hub;
- ownership, segregation and insolvency treatment must remain conservative until the governing staking/user terms are reviewed closely enough to support a specific CYA terms classification.

Primary sources:

- https://blog.bitpanda.com/en/bitpanda-staking-here
- https://www.bitpanda.com/en/staking
- https://www.bitpanda.com/en/legal/staking

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. A dated launch event may be created only after scanner clearance and canonical review, using the first-party 2022-05-10 launch announcement. Keep Bitpanda Staking separate from Earn on Stablecoins.

## Required gate

Both records remain staging-only. No canonical platform IDs are assigned here. Ordinary repository search returned no matching Bitvavo Staking or Bitpanda Staking records but is not authoritative. Hardened scanning against the full 98-platform canonical corpus is mandatory and any duplicate must be resolved without consuming a canonical ID. The final growth batch may promote only enough records to reach exactly 100 platforms; after that, record growth stops for the mandatory full-corpus audit.
