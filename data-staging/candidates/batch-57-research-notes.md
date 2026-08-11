# Phase 8 batch 57 candidate research notes

Baseline canonical SHA: `89db1785eefc5e486a8349a889edc5f52f0eaeaf`  
Canonical platforms: 94  
Candidate IDs reviewed: `cya_candidate_000093` / `cya_candidate_000094`

## Ndax Staking

Reviewed first-party basis:

- Ndax announced on 15 February 2022 that staking was available starting that day, describing it as its first flexible crypto staking program and initially supporting ETH, DOT and ADA;
- current Ndax staking material documents a broader active multi-asset staking service with asset-specific reward schedules, standard/instant redemption options and variable estimated APYs;
- current Ndax Staking Policy states staking is opt-in, rewards depend on the relevant blockchain/protocol and validator performance, rewards are not guaranteed, bonding/unbonding can delay availability, slashing/on-chain risks apply and Ndax charges an administration fee;
- current relationship material states Ndax identifies supported staking assets and uses experienced third-party validators to operate staking nodes;
- current Ndax legal material states virtual assets are not protected by CIPF or CDIC;
- CYA must preserve staking/custody and third-party-validator mechanics without converting security/cold-wallet or flexible-redemption language into a universal principal, legal-title, segregation or insolvency guarantee.

Primary sources:

- https://ndax.io/en/blog/article/announcing-ndax-staking-earn-rewards-from-your-eth-dot-ada-easily
- https://ndax.io/en/staking
- https://ndax.io/en/legal/account-agreements/staking
- https://ndax.io/en/legal/account-agreements/relationship-disclosure-document
- https://ndax.io/en/legal/account-agreements/user-agreement

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. If duplicate-clear, `2022-02-15` is supported as the staking launch date and may support the next canonical dated event. Legal-title, segregation and insolvency treatment remain separate questions and must not be inferred from product custody/security language.

## VALR Staking

Reviewed first-party basis:

- VALR announced on 27 June 2023 that it had officially launched crypto staking, initially supporting Solana (SOL) and Avalanche (AVAX);
- current VALR product material continues to present staking and liquid-staking/yield functionality;
- current VALR Terms of Service include a dedicated staking section under which supported digital assets may be contributed for participation in on-chain proof-of-stake validation and rewards depend on the relevant protocol and service terms;
- staking is opt-in and asset/product availability can change;
- current terms and product materials must be used product-specifically: CYA must not infer universal legal title, segregation, principal protection or insolvency treatment merely from the mechanics of contributing assets for staking;
- the 2023 launch date is directly supported by first-party material and can be used if the identity is duplicate-clear.

Primary sources:

- https://blog.valr.com/blog/valr-launches-solana-and-avalanche-staking
- https://www.valr.com/
- https://support.valr.com/hc/en-us/articles/360019021931-Terms-of-Service

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. If duplicate-clear, `2023-06-27` is supported as the VALR staking launch date. Terms/legal-title treatment must remain conservative unless the reviewed governing terms explicitly resolve it.

## Required gate

Both records remain staging-only. No canonical platform or event IDs are assigned here. Ordinary repository search returned no matching Ndax or VALR records but is not authoritative. The hardened candidate scanner must compare both identities, aliases and domains against the full 94-platform canonical corpus before promotion. Any duplicate must be resolved without consuming a canonical ID.
