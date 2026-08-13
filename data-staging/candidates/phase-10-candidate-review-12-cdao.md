# Phase 10 candidate review 12 — CDAO / Crypto DAO — 2026-08-13

Status: identity resolved / current-scope rejection / no canonical allocation

## Baseline

This review begins after XERA / Luxera DAO was resolved as out of current CYA scope and merged.

Current main at lane start:

```text
64a2cf9e67812f2d92a7e97e6652946ddc448ada
```

The latest canonical addition remains JBank platform 104.

## Identity resolution

Issue #186 lists `CDAO / Crypto DAO`.

The current watchlist/referral identity resolves to:

```text
Crypto DAO / CDAO
https://www.cryptodao.pro/
```

A companion live interface at:

```text
https://www.cryptodao.club/
```

exposes the same current ecosystem and generates referral links pointing back to `cryptodao.pro`.

This identity must be kept distinct from the unrelated legacy `cryptodao.com` exchange/project history.

## First-party / project evidence

The current Crypto DAO interface exposes:

- staking;
- CDAO sub-token staking;
- bonds;
- DAO rewards;
- governance;
- swap;
- referral/team activity.

A public GitHub repository under `CDAOIT/cryptodao-docs` describes itself as the official documentation repository for Crypto DAO and publishes contracts including:

```text
PRO.sol
sPRO.sol
StakingPool.sol
Treasury.sol
RBS.sol
OlympusBondingCalculator.sol
```

The published `StakingPool.sol` contains explicit on-chain `stake`, `unstake` and `rebase` mechanics. It transfers the staked token into the staking pool, transfers the staking token representation, supports unstaking back to the underlying token, and triggers reward/rebase distribution.

This is strong evidence that the current product is fundamentally an on-chain DeFi/rebase staking system rather than a conventional centralized interest account.

## Promotional / user-facing evidence boundary

Current Japanese user-facing guides describe:

- swapping USDT into PRO;
- fixed staking periods;
- rebase/auto-compounding rewards;
- released principal;
- vesting and withdrawal routes;
- referral/rank mechanics;
- very high theoretical APR/APY or compounding examples.

Those guides are discovery/support evidence only. They must not be used to establish:

```text
verified realized yield
verified principal value
verified universal redemption
principal protection
solvency
```

The exact first-party economic terms should be read from the deployed contracts/project documentation if CYA later reopens this identity.

## Historical-event check

This first pass found no authoritative evidence tied to the current `cryptodao.pro` identity establishing a:

- platform-wide shutdown;
- material staking/withdrawal freeze;
- verified customer-loss or claims process;
- insolvency/restructuring event;
- regulator action;
- major exploit with a documented customer outcome.

The project and staking interfaces remain active in the reviewed current surfaces.

## CYA scope decision

CYA's fixed initial scope prioritizes CeFi lending/yield platforms and only selectively includes staking/Earn products when there is a historically significant suspension, outcome, failure or regulatory event.

Current CDAO evidence establishes generic active DeFi/rebase token staking, not a qualifying historical exception.

Therefore:

```text
candidate: cya_candidate_000115
name:      Crypto DAO
aliases:   CDAO / C·DAO / CryptoDAO / Crypto DAO PRO
domain:    cryptodao.pro
decision:  out_of_scope
```

This is a scope decision only. It is not a fraud, safety, solvency or sustainability classification.

## Re-review trigger

Re-open CDAO if:

1. CYA expands to generic DeFi/rebase staking; or
2. authoritative first-party/regulatory evidence establishes a material withdrawal restriction, staking freeze, protocol failure, customer-outcome process, restructuring or regulatory action.

Any advertised APR/APY or theoretical compounding result remains an issuer/promoter claim rather than verified realized return.

## Duplicate controls

Exact repository searches before staging returned no CYA match for:

```text
Crypto DAO
cryptodao.pro
cryptodao.club
cya_candidate_000115
```

The hardened full-corpus candidate audit/scanner remains authoritative for hidden alias/domain collisions.

## Next action

Run the exact-head Candidate scan, Candidate draft/guard, Validate data, CYA CI, Validate/build, SEO and Preview Surface Check.

If green, merge this candidate-only scope decision. No canonical promotion PR is required. Issue #186 then advances to the ambiguous `ORCA` identity-resolution lane.
