# Phase 8 batch 52 candidate research notes

Baseline canonical SHA: `d54584b8be7c905ac6fc2eaea26caed778dc6762`  
Canonical platforms: 86  
Candidate IDs reviewed: `cya_candidate_000083` / `cya_candidate_000084`

## Uphold Staking

Reviewed first-party basis:

- current Uphold Staking Program Terms govern staking of eligible cryptoassets held on the Uphold platform into third-party proof-of-stake networks;
- the current U.S. terms state that users retain ownership of each staked eligible cryptoasset, the asset remains the user's property, beneficial ownership remains unaffected, and Uphold retains custodial responsibility;
- staking rewards are determined by the relevant network rather than promised as a fixed return, and protocol-level risks including slashing and unbonding constraints apply;
- current first-party help material documents active Staking and Boosted Staking flows;
- a 28 July 2022 first-party Cardano integration article states that users could stake ADA through their Uphold wallet, establishing that staking was in operation by that date;
- reviewed sources do not establish one original umbrella Uphold Staking launch date across all assets and jurisdictions.

Primary sources:

- https://uphold.com/en-us/legal/uphold-staking-program-terms
- https://support.uphold.com/hc/en-us/articles/11967029021339-Staking-Overview
- https://uphold.com/blog/deposit-withdraw/how-to-deposit-stake-cardano-ada

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. No exact umbrella launch date should be assigned without a separate first-party launch source. Any legal-title or custody treatment must remain jurisdiction- and terms-specific rather than generalized beyond what the reviewed terms expressly state.

## HashKey Exchange ETH Staking

Reviewed first-party basis:

- HashKey Exchange announced ETH Staking for all exchange clients with a launch time of 4:00 PM HKT on 26 March 2026;
- the first-party launch announcement specifies a 32 ETH initial and minimum total investment amount and a 20% service fee on rewards generated during the staking period;
- the service uses an independent-node staking model and staking/unstaking processing follows Ethereum network queue conditions;
- rewards are network-generated and explicitly not fixed returns;
- HashKey's staking disclosure identifies Wancloud Limited, operated as HashKey Cloud, as a third-party node validation service provider and notes that other third-party validators may be engaged;
- staking carries validator, slashing, network and operational risks;
- statements that principal and accrued rewards are returned when service conditions trigger termination are product promises and must not be converted into CYA principal-protection or solvency guarantees;
- reviewed public material does not by itself establish a universal legal-title, segregation or insolvency-treatment conclusion for the retail staking product.

Primary sources:

- https://support.hashkey.com/hc/en-gb/articles/56360295848473-HashKey-Earn-Channel-offers-ETH-Staking
- https://support.hashkey.com/hc/en-gb/articles/45642777730585-HashKey-Exchange-Disclosure-for-Staking-Services
- https://support.hashkey.com/hc/en-gb/articles/56300196698521--Launch-of-Staking-Stake-to-Receive-188-HKD-Plus-a-10-Extra-Reward-Up-to-1-ETH

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. If duplicate-clear, the first-party launch announcement supports the exact launch date `2026-03-26` for this ETH Staking product.

## Required gate

Both records remain staging-only. No canonical platform or event IDs are assigned in this branch. Ordinary repository search is not authoritative for duplicate clearance. The hardened candidate scanner must compare both candidates against the full canonical corpus before promotion. No unsupported legal-title, custody, segregation, principal-protection or insolvency-treatment claim may be inferred.
