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

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. Canonical review must preserve both the 2020 Smart Yield launch and the 2022 SwissBorg Earn transition as distinct events and decide whether a platform-level launch date can be assigned without obscuring that lineage.

## Wirex X-Accounts

Reviewed first-party basis:

- current Wirex materials present X-Accounts as an interest-bearing crypto feature under Grow > Earn;
- current product materials distinguish Flexible and Fixed X-Accounts, with different interest and withdrawal/lock mechanics;
- current X-Account Terms state that when customers deposit compatible crypto-assets into an X-Account, ownership transfers to Wirex, which may use, hold or manage the assets at its discretion;
- the Terms explicitly state that X-Accounts are not checking, savings, bank or deposit accounts and are not protected by government-backed depositor compensation, insurance or guarantee schemes;
- UK regulatory material classifies X-Accounts as a crypto feature not regulated by the FCA; that conclusion is UK-specific and must not be generalized across other jurisdictions;
- reviewed first-party material did not establish an authoritative original X-Accounts launch date;
- Wirex Business Yield is a separate business-facing product and must not be collapsed into this consumer X-Accounts identity.

Primary sources:

- https://help.wirexapp.com/article/what-is-x-accounts-1290
- https://help.wirexapp.com/article/how-to-open-an-x-account-1291
- https://help.wirexapp.com/article/x-account-terms-of-service-1667
- https://help.wirexapp.com/article/regulations-united-kingdom-1600

Decision: `add_now`, subject to hardened duplicate scanning, corpus audit and review-only draft generation. Unless a first-party historical launch source is separately verified, canonical `launch_date` should remain null.

## Required gate

Both records remain staging-only. No canonical IDs are assigned in this branch. SwissBorg strategy-level protocol/custody/risk details and Wirex jurisdiction-specific regulation, title transfer, product terms and protections must remain scoped to the evidence actually reviewed. Hardened duplicate scanning and corpus validation must resolve any canonical overlap before promotion.
