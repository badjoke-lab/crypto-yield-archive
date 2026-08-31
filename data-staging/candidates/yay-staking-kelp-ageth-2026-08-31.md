# Candidate review — Yay! Staking / Kelp agETH incident

Status: needs_research
Reviewed: 2026-08-31

## Why this is being reviewed

A public post on 2026-08-31 resurfaced Yay! Japan's May incident-resolution notice and questioned whether the project had stopped.

## Scope fit

CYA explicitly allows historically significant Earn or staking products when they have major suspension, outcome, or failure relevance. Yay! Staking is a staking/yield product that routes users through partner vaults including StakeStone and Kelp, so this incident is potentially in scope even though Yay! is not a CeFi lender.

## Verified product facts

- Yay! Staking documentation describes rewards based on staking amount/duration and lists ETH staking through StakeStone and Kelp vaults.
- The FAQ describes yayAgETH as a liquid staking token representing AgETH holdings and documents redeem/unstake behavior.
- Yay! documentation remains reachable, so the resurfaced 2026-08-31 post is not evidence that the project itself has ceased operations.

## Incident chronology presently supported

- Incident start date reported by Yay!: 2026-04-18.
- 2026-05-18 update: Kelp rsETH protocol had resumed, but the Always Gain vault (agETH) used by Yay! Staking was still awaiting reopening; Yay! user withdrawals remained dependent on that reopening.
- Around 2026-05-25, Yay! reported that Kelp's Always Gain vault had reopened and Yay! Staking unstaking/withdrawals were again available as usual.
- Public Ethereum activity for the Yay yayAgETH token shows stake/redeem activity on 2026-05-25, consistent with resumed operation, but this is corroboration rather than a substitute for first-party incident evidence.

## Current classification boundary

Do not classify Yay! as failed, insolvent, dead, or permanently impaired from this incident.

The supported narrow claim is an upstream-vault-related temporary withdrawal/unstaking impairment followed by reported restoration. The exact customer impact population, whether all users were blocked uniformly, and whether any customer loss occurred are not yet established.

## Candidate disposition

`needs_research`

Reason: the incident has strong historical relevance for CYA, but canonical promotion should wait for durable first-party copies or archived originals of the April 18 / May 18 / May 25 incident communications and a clear platform/product identity boundary.

## Required before canonical promotion

1. Preserve first-party Yay! incident posts or archived copies for 2026-04-18, 2026-05-18, and resolution around 2026-05-25.
2. Confirm whether the canonical entity should be `Yay! Staking` as a historically significant staking product or a broader Yay! platform entity with a product profile.
3. Record Kelp Always Gain/agETH as upstream dependency rather than silently treating Kelp and Yay! as one platform.
4. Keep customer outcome `unknown` unless evidence establishes loss/recovery beyond restored withdrawal availability.
5. Do not infer insolvency, hack, fraud, or project shutdown.

## Sources reviewed

- https://yay.gitbook.io/yay-staking/yay-staking-intro
- https://yay.gitbook.io/yay-staking/yay-staking-intro/faq
- https://yay.gitbook.io/yay-staking/yay-staking-intro/rewards
- https://www.twstalker.com/Yay_JP (indexed mirror of Yay! Japan incident updates; use only as discovery/corroboration until first-party preservation is obtained)
- https://instalker.org/Yay_Global (indexed mirror of Yay! Global incident updates; use only as discovery/corroboration until first-party preservation is obtained)
- https://etherscan.io/address/0x0341d2c2ce65b62af8887e905245b8cfea2a3b97

No canonical data mutation is authorized by this candidate note.
