# Phase 10 candidate review 11 — XERA / Luxera DAO — 2026-08-13

Status: identity resolved / current-scope rejection / no canonical allocation

## Baseline

This review begins after Zenta System was retained as `needs_research` in candidate-only PR #196.

Current main at lane start:

```text
cfc60146fd9b6bdd64c5d996ec99eb1def7f1646
```

The latest canonical addition remains JBank platform 104, already production-verified on exact merge SHA `c74cb314a70190a0ed1e52a8413bafd16ff99d6d`.

## Watchlist identity

Issue #186 lists the next item as `XERA`.

The current referral/watchlist ecosystem resolves that name to:

```text
Luxera DAO / XERA DAO
https://xeradao.com/
https://about.xeradao.com/
```

User-facing registration material links directly into `xeradao.com/Login/index` through a connected wallet and documents an active `Stake XERA` flow. This supports identity resolution but remains discovery/support evidence, not authority for return or safety claims.

## First-party scope

The official Luxera/XERA information surface describes XERA as a DAO token and global blockchain-payment ecosystem connecting merchants, consumers, payment gateways and wallets.

The same first-party surface explicitly describes the protocol as:

- non-custodial;
- designed so that no one can access or control stakers' funds;
- operated with independent node operators;
- decentralized/governed through token-holder participation.

These statements establish that staking is part of the ecosystem while also establishing an important architectural boundary: this is not presented as a conventional centralized deposit or CeFi interest-account product.

## Staking evidence boundary

Current external/user-facing guides show wallet-connected XERA staking and multiple lock periods, including 30, 90, 120, 180 and 360 days. Other promotional surfaces publish aggressive daily/monthly reward examples.

Those materials are not first-party product contracts. Therefore CYA does not use them to establish:

```text
verified staking rate
verified realized yield
principal guarantee
custody guarantee
universal withdrawal outcome
```

If CYA ever revisits this identity, first-party contract/terms evidence should govern exact staking and redemption mechanics.

## ASIC / Moneysmart disambiguation

A separate historical identity named `Xera` / `Xera Global` appears on ASIC/Moneysmart's investor-alert system with the domains:

```text
xera.pro
web.xera.pro
```

That alert dates to April 2024.

The current Luxera/XERA DAO identity uses:

```text
xeradao.com
about.xeradao.com
```

and belongs to a later, separately presented ecosystem.

Exact CYA searches for `xera.pro` and `Xera Global` also returned no existing record. The ASIC alert must not be used as adverse evidence against Luxera/XERA DAO unless an authoritative source establishes an actual legal/operational relationship between the identities.

Therefore any external source that says `Luxera/XERA DAO is ASIC-blacklisted` solely by pointing to the xera.pro alert is rejected as an identity conflation.

## CYA scope decision

CYA's fixed initial scope prioritizes CeFi lending/yield platforms and only selectively includes staking/Earn products when there is a historically significant suspension, outcome, failure or regulatory event.

For the current Luxera/XERA DAO identity, reviewed evidence establishes:

- an active DAO/payment ecosystem;
- non-custodial token staking;
- current wallet-connected participation;
- no verified major staking freeze or platform-wide access event;
- no verified customer-outcome process;
- no verified shutdown/failure event;
- no regulator action tied to the `xeradao.com` identity.

The candidate is therefore resolved as:

```text
candidate: cya_candidate_000114
name:      Luxera DAO
aliases:   XERA / XERA DAO / Luxera / XeraDAO
domain:    xeradao.com
decision:  out_of_scope
```

This is a scope decision only. It is not a fraud, safety, solvency or return-quality classification.

## Re-review trigger

Re-open the identity if either condition becomes true:

1. CYA formally expands from its current CeFi/historical-exception scope into generic non-custodial token staking; or
2. first-party/regulatory evidence establishes a material staking freeze, withdrawal/access restriction, shutdown, customer-loss/outcome process, or other historically significant event.

Advertised staking rates remain attributed issuer/promoter claims, not verified realized return.

## Duplicate and candidate-ID controls

Exact repository searches before staging returned no CYA match for:

```text
Luxera
XERA DAO
xeradao.com
xera.pro
Xera Global
cya_candidate_000114
```

The hardened full-corpus candidate audit/scanner remains authoritative for any hidden alias/domain collision.

## Next action

Run the exact-head Candidate scan, Candidate draft/guard, Validate data, CYA CI, Validate/build, SEO and Preview Surface Check.

If green, merge this candidate-only scope decision. No canonical promotion PR is required. Issue #186 then advances to `CDAO`.
