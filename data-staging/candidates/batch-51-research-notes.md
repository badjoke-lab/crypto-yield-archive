# Phase 8 batch 51 candidate research notes

Baseline canonical SHA: `fefbc76955c6fcd532d8b8c0d75c57dfc7ca7853`  
Canonical platforms: 84  
Candidate IDs reviewed: `cya_candidate_000081` / `cya_candidate_000082`

## Bitvavo Earn

Reviewed first-party basis:

- the current Bitvavo Earn hub combines Staking and Lending but identifies different service providers: Staking by Bitvavo B.V. and Lending by Bitvavo Custody B.V.;
- Bitvavo states that both Staking and Lending are currently outside MiCA regulation and that regulated-service safeguards may not apply;
- current Staking material distinguishes Flex Staking, where assets remain available to trade or withdraw, from Fixed Staking, where selected assets are locked for a defined period;
- current Lending material states that Bitvavo Custody B.V. lends eligible assets to professional parties supporting platform liquidity and may also lend assets to margin-trading users;
- a 2025 first-party update documents the current Flex/Fixed staking structure and a redesigned Lending program, while 2026 first-party rate updates confirm continuing operation;
- reviewed material does not establish one original umbrella Earn launch date or one universal legal-title, custody, segregation or protection model across Staking and Lending.

Primary sources:

- https://bitvavo.com/en/earn
- https://support.bitvavo.com/hc/en-us/articles/4405243949841-Staking-at-Bitvavo
- https://support.bitvavo.com/hc/en-us/articles/25307127969681-Lending-at-Bitvavo
- https://bitvavo.com/en/news/flex-fixed-staking-lending-earn-rates-jun-2025
- https://bitvavo.com/en/news/flex-fixed-staking-lending-earn-rates-jul-2026

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. No canonical launch date should be assigned unless a first-party historical umbrella launch source is separately verified.

## Coinmetro BTC Earn

Reviewed first-party basis:

- Coinmetro's BTC Earn article documents a current fixed-term BTC reward product with 3, 6, 12 and 24 month commitment terms and a minimum participation amount of 0.001 BTC;
- rewards accrue in BTC in real time and early exit forfeits rewards;
- Coinmetro states that the full BTC balance is returned at term end, but CYA treats this as a product promise rather than a universal principal or solvency guarantee;
- Coinmetro states that rewards are generated and distributed through its internal infrastructure without external lending platforms, third-party protocols, wrapped assets or synthetic tokens;
- official copies of the same BTC Earn article expose conflicting publication-date metadata across host and locale variants, so the review does not establish one reliable exact launch date;
- reviewed public material does not establish the underlying economic source of the reward, legal-title transfer, segregation or insolvency treatment;
- Coinmetro's broader on-chain staking and MARs/XCM ecosystem is a separate product lineage and is not collapsed into this narrow BTC Earn identity.

Primary sources:

- https://www.coinmetro.com/blog/earn-6-on-your-bitcoin-introducing-btc-earn-by-coinmetro
- https://coinmetro.com/home
- https://www.coinmetro.com/terms-of-use

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. Canonical `launch_date` must remain null unless a stable first-party historical source resolves the conflicting article-date metadata.

## Required gate

Both records remain staging-only in the candidate-review phase until promotion. Ordinary GitHub code search is not treated as authoritative for duplicate clearance because it missed exact JSON-backed identities in Batch 50. The hardened candidate scanner compared both candidates against the full canonical corpus and classified both as `new_candidate` with no canonical matches and `eligible_for_draft: true`. No unsupported legal-title, custody, segregation, principal-protection or insolvency-treatment claim may be inferred.
