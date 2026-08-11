# Phase 8 batch 58 candidate research notes

Baseline canonical SHA: `b7a8c41b1d4637ea27a528adf1f5c152f2af5bfd`  
Canonical platforms: 96  
Candidate IDs reviewed: `cya_candidate_000095` / `cya_candidate_000096`

## Newton Earn (Staking)

Reviewed first-party basis:

- Newton currently operates Earn/Staking for supported proof-of-stake assets and documents warm-up, cool-down, validator fees, Newton fees and slashing risk;
- Newton's current Terms of Use state that Digital Assets held in account are fully-paid assets beneficially owned by the customer, not Newton, and are held in trust for the customer's benefit;
- current staking terms state staked assets remain in Newton omnibus accounts with the custodian, remain attributed to the user's account, and custody/possession/control is not transferred to validators;
- Newton uses approved validators and dedicated wallets with its custodian; reward rates are protocol/service dependent and not guaranteed;
- reviewed current sources establish active staking and a strong custody/ownership boundary but do not establish one exact original launch date for Newton Earn/Staking.

Primary sources:

- https://help.newton.co/hc/en-us/articles/27437521971731-What-is-Newton-Earn-Staking
- https://www.newton.co/terms-of-use
- https://help.newton.co/hc/en-us/articles/29114018238227-Understanding-Staking-Fees-on-Newton

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. Keep `launch_date` unresolved unless an explicit first-party original-launch source is found. Current beneficial ownership/trust/custody language may support customer-owned treatment but does not eliminate slashing, protocol, validator, market or platform risk.

## Wealthsimple Crypto Staking

Reviewed first-party basis:

- Wealthsimple currently offers staking for eligible cryptoassets including SOL, ETH, ADA and DOT and uses third-party validators from cold-storage custodial wallets;
- current Crypto Product Risk Disclosure states customer cryptoassets are fully-paid assets beneficially owned by the customer, not Wealthsimple, held in trust and separated from Wealthsimple's own assets;
- the same disclosure states Wealthsimple arranges staking/delegation on the customer's behalf through approved third-party validators while custodians retain the private keys controlling staked assets;
- current product material documents warm-up/cool-down periods, variable/non-guaranteed rewards, staking fees, third-party validator fees and slashing risk;
- reviewed current sources establish active operation and strong beneficial-ownership/trust/custody treatment but do not establish one exact original staking launch date.

Primary sources:

- https://help.wealthsimple.com/hc/en-ca/articles/8800241895835-Stake-your-crypto-assets
- https://www.wealthsimple.com/en-ca/legal/crypto-product-risk-disclosure
- https://www.wealthsimple.com/en-ca/legal/fees/crypto

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. Keep `launch_date` unresolved unless an explicit first-party original-launch source is found. Beneficial ownership, trust and segregation language must be preserved as current terms/risk-disclosure treatment without converting it into a guarantee against protocol, validator, market or operational losses.

## Required gate

Both records remain staging-only. No canonical platform or event IDs are assigned here. Ordinary repository search returned no matching Newton or Wealthsimple records but is not authoritative. Hardened scanning against the full 96-platform canonical corpus is mandatory and any duplicate must be resolved without consuming a canonical ID.
