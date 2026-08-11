# Phase 8 batch 55 candidate research notes

Baseline canonical SHA: `ad9dca89048b89f5d57825130ff74184a67f4f65`  
Canonical platforms: 91  
Candidate IDs reviewed: `cya_candidate_000089` / `cya_candidate_000090`

## Gemini Staking

Reviewed first-party basis:

- Gemini announced the launch of Gemini Staking on 18 August 2022, initially supporting Polygon (MATIC), with additional proof-of-stake assets planned;
- the launch material describes yield as crypto rewards paid by proof-of-stake networks to validators and states that Gemini simplifies validator/infrastructure operation for customers;
- the current Gemini Staking Agreement is dated 12 June 2026 and defines Staking as a service provided by Gemini Trust Company, LLC or Gemini Moonbase, LLC depending on the user context;
- current terms state Gemini or a third-party Staking Services Provider may facilitate staking, protocol rules determine reward timing and amount, Gemini charges a staking service fee, and rewards are not guaranteed;
- current terms document slashing, activation queues, unbonding periods, jurisdiction restrictions, and absence of FDIC/SIPC or similar protections for staked assets;
- the current agreement explicitly distinguishes conventional Gemini Staking from the separate Asset Rewards program, so CYA must not collapse those two mechanisms into one product identity.

Primary sources:

- https://www.gemini.com/en-GB/blog/gemini-launches-staking-for-polygon-matic
- https://www.gemini.com/legal/staking-agreement
- https://support.gemini.com/hc/en-us/articles/7329954040731-What-is-Gemini-Staking

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. If duplicate-clear, `2022-08-18` is supported as the launch date of Gemini Staking. Product/legal-entity/jurisdiction boundaries and the separation from Asset Rewards must remain explicit. No deposit-insurance, principal-protection or universal custody/segregation conclusion may be inferred.

## Revolut Crypto Staking

Reviewed first-party basis:

- current Revolut material documents a live in-app crypto staking service for proof-of-stake assets;
- Revolut's current first-party staking explainer states that Revolut continues holding staked cryptoassets on the user's behalf and that the user remains the beneficial owner of those cryptoassets;
- the same material documents token-specific lock-up periods, validator performance risk, slashing risk, market risk and non-guaranteed staking rewards;
- current help material documents stake/unstake operation and token-specific waiting or unbonding periods;
- fee treatment varies by jurisdiction and current local help material, so CYA must not assert one universal Revolut staking fee schedule across all markets;
- the reviewed first-party sources establish current operation and product mechanics but do not establish one exact original launch date for Revolut Crypto Staking.

Primary sources:

- https://www.revolut.com/blog/post/what-is-staking/
- https://help.revolut.com/en-LI/help/wealth/cryptocurrencies/crypto-staking/managing-my-crypto-staking/is-there-minimum-duration-of-staking/
- https://help.revolut.com/en-DE/help/wealth/cryptocurrencies/crypto-staking/crypto-staking-costs-and-benefits/is-there-a-fee-associated-with-staking/

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. If duplicate-clear, keep `launch_date` unresolved unless an explicit first-party original-launch source is found during canonical review. Beneficial-ownership language should be preserved as an attributed product statement and must not be converted into a universal legal-segregation, principal-protection or insolvency conclusion. Jurisdiction-specific fee and availability differences remain explicit.

## Required gate

Both records remain staging-only. No canonical platform or event IDs are assigned here. Ordinary repository search returned no matching Gemini Staking or Revolut staking record but is not authoritative. The hardened candidate scanner must compare both identities, aliases and domains against the full 91-platform canonical corpus before promotion. Candidate draft generation remains review-only. Any duplicate must be resolved without consuming a canonical ID.
