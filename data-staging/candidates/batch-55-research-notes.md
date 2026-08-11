# Phase 8 batch 55 candidate research notes

Baseline canonical SHA: `ad9dca89048b89f5d57825130ff74184a67f4f65`  
Canonical platforms: 91  
Candidate IDs reviewed: `cya_candidate_000089` / `cya_candidate_000090`

## Gemini Staking

Reviewed first-party basis:

- Gemini announced the launch of Gemini Staking on 18 August 2022, initially supporting Polygon (MATIC), with additional proof-of-stake assets planned;
- the current Gemini Staking Agreement is dated 12 June 2026 and documents Gemini or third-party staking service providers, protocol-determined reward timing and amount, service fees, slashing, activation queues, unbonding periods, jurisdiction restrictions and non-guaranteed rewards;
- current terms state that staked assets are not covered by FDIC/SIPC or similar protections;
- the current agreement explicitly distinguishes conventional Gemini Staking from the separate Asset Rewards program.

Primary sources:

- https://www.gemini.com/en-GB/blog/gemini-launches-staking-for-polygon-matic
- https://www.gemini.com/legal/staking-agreement
- https://support.gemini.com/hc/en-us/articles/7329954040731-What-is-Gemini-Staking

Scanner resolution: `exact_duplicate` of `cya_plat_000014`. Decision: `duplicate`. No new canonical platform ID may be consumed. The reviewed 2022 launch and 2026 current terms may support a later evidence-backed enrichment of canonical `cya_plat_000014`, particularly the conventional-Staking versus Asset Rewards boundary and current fee/slashing/unbonding/protection treatment.

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

Scanner resolution: sole draft-eligible new candidate after Gemini duplicate resolution. Decision: `add_now`. Keep `launch_date` unresolved unless an explicit first-party original-launch source is found during canonical review. Beneficial-ownership language must remain an attributed product statement and must not be converted into a universal legal-segregation, principal-protection or insolvency conclusion. Jurisdiction-specific fee and availability differences remain explicit.

## Batch result

- `cya_candidate_000090` Revolut Crypto Staking remains the sole `add_now` candidate for Batch 55.
- `cya_candidate_000089` Gemini Staking is removed from the active candidate ledger and preserved in `cya-consumed-duplicate-review-batch-55.json`.
- canonical platform count remains 91.
- next canonical platform ID remains `cya_plat_000092`.
- next event ID remains `cya_ev_000338`.
- replacement candidate numbering resumes at `cya_candidate_000091`.

## Required gate

Revolut remains staging-only. No canonical platform or event ID is assigned in this candidate-only PR. Hardened candidate scanning, corpus audit and review-only draft generation must all pass before promotion. No unsupported launch date, custody conclusion, principal guarantee, insolvency treatment or customer-outcome claim may be inferred.
