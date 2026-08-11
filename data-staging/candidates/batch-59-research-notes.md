# Phase 8 batch 59 candidate research notes

Baseline canonical SHA: `ef6426842399071c82ce6bfc388347fec3296f66`  
Canonical platforms: 98  
Initial candidate IDs: `cya_candidate_000097` / `cya_candidate_000098`  
Replacement candidate IDs: `cya_candidate_000099` / `cya_candidate_000100`

## Initial hardened-scan result

The first final-growth pair was rejected by the hardened full-corpus scanner:

- `cya_candidate_000097` Bitvavo Staking → `exact_duplicate` of `cya_plat_000085`;
- `cya_candidate_000098` Bitpanda Staking → `exact_duplicate` of `cya_plat_000083`.

Both are removed from the active add-now queue and preserved in `cya-consumed-duplicate-review-batch-59.json`. No canonical platform or event ID is consumed for either duplicate. Their reviewed first-party material may support later enrichment of the existing canonical records.

## Bit2Me Earn

Reviewed first-party basis:

- current dedicated Bit2Me Earn terms govern a product in which users transfer and lock eligible cryptoassets in favor of Bit2Me to receive variable rewards;
- the terms state Bit2Me may transfer, dispose of or use transferred/locked cryptoassets during the Earn period at its discretion;
- rewards are variable, product conditions can change, and withdrawals/suspensions and service-specific risks are documented;
- separate ETH 2.0 terms document proof-of-stake staking inside Bit2Me Earn and identify a 2023 ETH staking rollout, but that date must not be substituted for the original launch date of the broader Earn product;
- current support material distinguishes reward sources, including staking-validation rewards for eligible proof-of-stake assets;
- ownership/custody interpretation must follow the Earn-specific transfer/use terms rather than ordinary Bit2Me wallet custody language.

Primary sources:

- https://legal.bit2me.com/en/support/solutions/articles/35000290581
- https://legal.bit2me.com/en/support/solutions/articles/35000293201-eth-2-0
- https://support.bit2me.com/en/support/solutions/articles/35000226814

Decision: `add_now`, subject to the rerun hardened duplicate scanner and review-only draft gate. Keep the broad Earn launch date unresolved. Treat the product as centralized yield with an explicit transfer/use-of-assets boundary and do not infer customer-owned custody while assets are in the Earn arrangement.

## KriptoEarn

Reviewed first-party basis:

- current Kriptomat material describes KriptoEarn as a blockchain staking solution and simplified technical interface to staking functionality on individual proof-of-stake protocols;
- current terms state qualified virtual currencies can be staked through KriptoEarn for in-kind protocol-derived rewards;
- rewards shown in the interface are approximate, protocol-determined, variable and not guaranteed;
- current terms document withdrawal periods, fees and protocol/network malfunction risk;
- current product material documents supported staking assets and network lock-up mechanics;
- custody/ownership interpretation remains unresolved until the governing Kriptomat Terms of Service and KriptoEarn annex are jointly reviewed for canonical promotion;
- reviewed sources establish current operation but do not establish one exact original launch date.

Primary sources:

- https://kriptomat.io/kriptoearn-terms-of-use/
- https://kriptomat.io/earn/
- https://kriptomat.io/

Decision: `add_now`, subject to the rerun hardened duplicate scanner and review-only draft gate. Keep launch date unresolved unless an explicit first-party original-launch source is found. Do not convert marketing language about slashing insurance or staking returns into a general loss guarantee without governing-term support.

## Required gate

Only candidate IDs `cya_candidate_000099` and `cya_candidate_000100` remain active for the final growth gate. No canonical platform IDs are assigned here. Hardened scanning against the full 98-platform canonical corpus must pass after the duplicate replacements. Any further duplicate must again be resolved without consuming a canonical ID. The final canonical promotion may add only enough reviewed records to reach exactly 100 platforms; after that, record growth stops for the mandatory full-corpus audit.
