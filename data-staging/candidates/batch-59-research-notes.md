# Phase 8 batch 59 candidate research notes

Baseline canonical SHA: `ef6426842399071c82ce6bfc388347fec3296f66`  
Canonical platforms: 98

## Hardened-scan duplicate resolutions

The final-growth search has so far rejected three candidates as exact canonical duplicates:

- `cya_candidate_000097` Bitvavo Staking → `cya_plat_000085`;
- `cya_candidate_000098` Bitpanda Staking → `cya_plat_000083`;
- `cya_candidate_000100` KriptoEarn → `cya_plat_000054`.

All three are preserved in `cya-consumed-duplicate-review-batch-59.json` and consume no canonical IDs. Bit2Me Earn (`cya_candidate_000099`) passed the corrected scan as draft-eligible and remains active.

## Bit2Me Earn — `cya_candidate_000099`

Reviewed first-party basis:

- current dedicated Bit2Me Earn terms govern a product in which users transfer and lock eligible cryptoassets in favor of Bit2Me to receive variable rewards;
- the terms state Bit2Me may transfer, dispose of or use transferred/locked cryptoassets during the Earn period at its discretion;
- rewards are variable, product conditions can change, and withdrawals/suspensions and service-specific risks are documented;
- separate ETH 2.0 terms document proof-of-stake staking inside Bit2Me Earn and identify a 2023 ETH staking rollout, but that date must not be substituted for the original launch date of the broader Earn product;
- ownership/custody interpretation must follow the Earn-specific transfer/use terms rather than ordinary Bit2Me wallet custody language.

Primary sources:

- https://legal.bit2me.com/en/support/solutions/articles/35000290581
- https://legal.bit2me.com/en/support/solutions/articles/35000293201-eth-2-0
- https://support.bit2me.com/en/support/solutions/articles/35000226814

Decision: `add_now`; the corrected hardened scanner classified this candidate as draft-eligible. Keep the broad Earn launch date unresolved and preserve the explicit transfer/use-of-assets boundary.

## Coinmerce Earn — `cya_candidate_000101`

Reviewed first-party basis:

- Coinmerce currently offers the Earn Program through a Yield Account in cooperation with the separate Coinmerce Earn B.V. entity;
- current first-party terms define the client as lender and Coinmerce Earn as borrower of eligible cryptoassets dedicated to Earn;
- Earn assets are transferred out of Foundation custody to Coinmerce Earn, which may use them for on-lending and staking with third parties to generate yield;
- current terms and support material distinguish Yield Account assets dedicated to Earn from ordinary Foundation-held custody assets;
- current terms describe weekly rewards and material Yield Account risks; the Earn/Yield service is not treated as ordinary MiCAR custody protection;
- reviewed sources establish current operation but do not establish one exact original Earn launch date.

Primary sources:

- https://support.coinmerce.io/en/articles/178721-what-is-earn
- https://support.coinmerce.io/en/articles/179087-general-terms-and-conditions
- https://support.coinmerce.io/es/articles/348925-earn-terms-and-conditions

Decision: `add_now`, subject to the rerun hardened scanner and review-only draft gate. Treat Coinmerce Earn as product-scoped centralized yield/lending and do not apply ordinary Coinmerce Foundation custody segregation to assets lent into the Earn Program.

## Required gate

Only `cya_candidate_000099` Bit2Me Earn and `cya_candidate_000101` Coinmerce Earn remain active for the final growth gate. No canonical platform IDs are assigned here. Hardened scanning against the full 98-platform canonical corpus must pass for the corrected pair. Any further duplicate must again be resolved without consuming a canonical ID. The final canonical promotion may add only enough reviewed records to reach exactly 100 platforms; after that, record growth stops for the mandatory full-corpus audit.
