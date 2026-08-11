# Phase 8 batch 56 candidate research notes

Baseline canonical SHA: `d5610cf53d04b4d4a89419bca4dfab8bc51dc0ae`  
Canonical platforms: 92  
Candidate IDs reviewed: `cya_candidate_000091` / `cya_candidate_000092`

## Bitso Earnings

Reviewed first-party basis:

- Bitso's current Earnings product pays weekly yields for eligible cryptoassets while balances remain available for withdrawals and transactions;
- current first-party material documents stablecoin yields for USDC/USDT and dynamic yields for ETH, ADA, DOT, ATOM and SOL;
- Bitso's current staking explainer states that eligible proof-of-stake assets can earn weekly yields without a fixed lock-up and that Bitso handles the staking process;
- current product education also documents other yield methods, including U.S. Treasury-bill exposure and the Aave Protocol, while a Bitso product guide states that Bitso sources some yields from specialized third-party yield providers;
- therefore CYA must not collapse every Bitso Earnings asset into one universal yield source, counterparty, custody or legal-title model;
- reviewed current sources establish active operation and mechanics but do not establish one exact original launch date for the current umbrella Earnings product.

Primary sources:

- https://bitso.com/products/earnings
- https://support.bitso.com/hc/en-us/articles/26708370590612-How-Bitso-Earnings-works
- https://support.bitso.com/hc/en-us/articles/36099189024404-What-is-staking-and-how-does-it-work
- https://bitso.com/blog/bitso-guide-and-how-to-use-it-to-earn-yields-on-your-crypto/

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. Keep `launch_date` unresolved unless an explicit first-party original-launch source is found. Product-specific yield sources and counterparties must remain separated; no universal principal, custody, segregation or protection claim may be inferred.

## Luno Staking

Reviewed first-party basis:

- Luno currently offers staking to customers in Malaysia, Nigeria and South Africa, with supported assets varying by region;
- current first-party product material states that staked crypto remains in Luno's custody and rewards are paid automatically;
- Luno's help material describes the technical flow through a selected staking service provider and movement of staked crypto into a dedicated validator-node blockchain address;
- current staking guidance documents variable annual reward percentages, token-specific activation/unstaking behavior and proof-of-stake validator risk;
- Luno Staking Terms are explicitly incorporated into the contracting Luno entity's Terms of Use and have been published since at least 1 June 2023, but the reviewed material does not establish that date as the original staking-service launch;
- therefore CYA must keep `launch_date` unresolved unless a separate explicit first-party launch announcement is found.

Primary sources:

- https://www.luno.com/en-gb/staking
- https://guide.luno.com/hc/en-gb/articles/11035618387357-What-is-staking
- https://guide.luno.com/hc/en-gb/articles/11035626257437-How-do-I-stake-my-crypto-with-Luno
- https://guide.luno.com/hc/en-gb/articles/11035644821661-Luno-Staking-Terms-and-Conditions

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. Current operation, custody and validator mechanics are well supported, but no original launch date is asserted. Region-specific eligibility, supported assets and contracting-entity terms must remain explicit; custody language must not be converted into a principal or insolvency guarantee.

## Required gate

Both records remain staging-only. No canonical platform or event IDs are assigned here. Ordinary repository search returned no matching Bitso Earnings or Luno Staking records but is not authoritative. The hardened candidate scanner must compare both identities, aliases and domains against the full 92-platform canonical corpus before promotion. Any duplicate must be resolved without consuming a canonical ID.
