# Phase 8 batch 50 candidate research notes

Baseline canonical SHA: `541ba3eee33936c7eed1822b3e5765a47c6a4c48`  
Canonical platforms: 84  
Candidate IDs reviewed: `cya_candidate_000079` / `cya_candidate_000080`

## SwissBorg Earn

Reviewed first-party basis:

- SwissBorg launched its first USDC Smart Yield account on 2020-12-14;
- the original Smart Yield optimizer explicitly reviewed DeFi programs, CeFi programs and liquidity pools rather than relying on one yield mechanism;
- SwissBorg launched SwissBorg Earn on 2022-09-08 as the next evolution of Smart Yield, adding multiple customizable strategies and risk profiles;
- current SwissBorg materials identify Earn as the former Smart Yield product line and continue to expose low-, medium- and high-risk strategies;
- current SwissBorg App Terms describe Yield Services as gateways to third-party protocols and centralized-finance platforms and state that SwissBorg acts as technology provider rather than the counterparty serving yield;
- current terms also disclose smart-contract, protocol/platform and cyber risks and require strategy/gateway-specific terms.

Primary sources:

- https://swissborg.com/blog/swissborg-launches-usdc-smart-yield
- https://swissborg.com/blog/swissborg-earn
- https://help.swissborg.com/hc/en-gb/articles/10716337159825-SwissBorg-Earn-What-is-it
- https://swissborg.com/legal/swissborg-app-terms-of-use

Scanner resolution: `exact_duplicate` of `cya_plat_000044`. Canonical SwissBorg Earn already preserves the 2020 Smart Yield launch and the 2022 Earn transition. Decision: `duplicate`; no new platform ID is consumed. Newly reviewed current App Terms may be considered later as enrichment of the existing record.

## Wirex X-Accounts

Reviewed first-party basis:

- current Wirex materials present X-Accounts as an interest-bearing crypto feature under Grow > Earn;
- current product materials distinguish Flexible and Fixed X-Accounts, with different interest and withdrawal/lock mechanics;
- current X-Account Terms state that when customers deposit compatible crypto-assets into an X-Account, ownership transfers to Wirex, which may use, hold or manage the assets at its discretion;
- the Terms explicitly state that X-Accounts are not checking, savings, bank or deposit accounts and are not protected by government-backed depositor compensation, insurance or guarantee schemes;
- UK regulatory material classifies X-Accounts as a crypto feature not regulated by the FCA; that conclusion is UK-specific and must not be generalized across other jurisdictions;
- Wirex Business Yield is a separate business-facing product and must not be collapsed into this consumer X-Accounts identity.

Primary sources:

- https://help.wirexapp.com/article/what-is-x-accounts-1290
- https://help.wirexapp.com/article/how-to-open-an-x-account-1291
- https://help.wirexapp.com/article/x-account-terms-of-service-1667
- https://help.wirexapp.com/article/regulations-united-kingdom-1600

Scanner resolution: `exact_duplicate` of `cya_plat_000043`. Canonical Wirex X-Accounts already records the 2021-06-23 launch using the company-issued launch announcement syndicated through PR Newswire and already records the current ownership-transfer and non-deposit terms. Decision: `duplicate`; no new platform ID is consumed. Newly reviewed UK regulatory material may be considered later as enrichment of the existing record.

## Batch result

Both staged identities were exact canonical duplicates. They are removed from the active candidate ledger and preserved in `cya-consumed-duplicate-review-batch-50.json`. Canonical platform count remains 84, next platform ID remains `cya_plat_000085`, and replacement candidate IDs begin at `cya_candidate_000081` / `cya_candidate_000082`.
