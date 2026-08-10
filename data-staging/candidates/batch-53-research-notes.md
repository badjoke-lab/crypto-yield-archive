# Phase 8 batch 53 candidate research notes

Baseline canonical SHA: `e550475797e29898c07634ecf5b8ce1a66fbaadf`  
Canonical platforms: 88  
Candidate IDs reviewed: `cya_candidate_000085` / `cya_candidate_000086`

## eToro Staking

Reviewed first-party basis:

- eToro announced its new dedicated staking service on 1 October 2020 with Cardano (ADA) and TRON (TRX), with initial rewards scheduled for November 2020;
- the 2020 first-party launch material states that staked cryptoassets remain the property of eToro users while eToro executes the staking process on their behalf;
- current first-party staking material continues to state that staked cryptoassets are the users' assets and describes monthly staking rewards on a broader set of supported proof-of-stake assets;
- current reward mechanics are network-derived rather than a fixed CYA return; eToro retains a share of staking yield based on account tier and operating costs;
- eligibility, opt-in/opt-out behavior and supported assets vary by jurisdiction;
- current first-party material expressly identifies liquidity, slashing, network/protocol, market and regulatory risks;
- later first-party announcements document expansion to SOL and ETH in July 2024 and additional assets thereafter, without changing the original 2020 dedicated-service launch date.

Primary sources:

- https://www.etoro.com/news-and-analysis/crypto/staking-cardano-ada-tron-trx/
- https://www.etoro.com/crypto/staking/
- https://www.etoro.com/news-and-analysis/press-releases/etoro-launches-staking-for-solana-and-ethereum/

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. If duplicate-clear, `2020-10-01` is supported as the launch date of eToro's dedicated staking service. Customer-property language should be preserved as an express product statement, not converted into a guarantee against validator, custody, platform or insolvency risk, and jurisdiction-specific entity differences must remain explicit.

## Robinhood Crypto Staking

Reviewed first-party basis:

- Robinhood Crypto announced its first-ever crypto-staking product on 15 May 2024 for European customers, initially supporting Solana (SOL);
- that first-party Europe launch states that Robinhood Crypto customers own their crypto and Robinhood holds it securely on their behalf;
- Robinhood added Ethereum staking for European customers on 26 November 2024;
- on 30 June 2025 Robinhood announced crypto staking for eligible U.S. customers, starting with Ethereum and Solana;
- current U.S. first-party staking material supports Solana, Ethereum and Cardano staking and describes bonding/unbonding periods, network-derived variable rewards, third-party staking partner fees, Robinhood Crypto fees and slashing/protocol risks;
- current U.S. staking material states that rewards depend on the underlying protocol and are not guaranteed by Robinhood Crypto;
- Robinhood staking now spans multiple legal entities and jurisdictions. The 2024 Europe ownership statement should therefore not be generalized into one universal legal-title, segregation or insolvency conclusion for every current Robinhood staking customer without applicable terms.

Primary sources:

- https://robinhood.com/us/en/newsroom/robinhood-crypto-staking-europe/
- https://robinhood.com/us/en/support/articles/staking/
- https://robinhood.com/us/en/crypto/staking/
- https://robinhood.com/us/en/newsroom/robinhood-launches-stock-tokens-reveals-layer-2-blockchain-and-expands-crypto-suite-in-eu-and-us-with-perpetual-futures-and-staking/

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. If duplicate-clear, `2024-05-15` is supported as Robinhood Crypto's first-ever staking launch date. Jurisdiction-specific custody and ownership language must not be collapsed into a universal insolvency or segregation conclusion.

## Required gate

Both records remain staging-only. No canonical platform or event IDs are assigned in this branch. Ordinary repository search returned no matching eToro or Robinhood staking record but is not authoritative for duplicate clearance. The hardened candidate scanner must compare both candidates against the full canonical corpus before promotion. No unsupported legal-title, custody, segregation, principal-protection or insolvency-treatment claim may be inferred.
