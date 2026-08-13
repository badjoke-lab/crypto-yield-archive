# Phase 10 candidate review 13 — ORCA / iOrca — 2026-08-13

Status: identity resolved / strong CYA scope fit / `needs_research` / no canonical allocation

## Baseline

This review begins after Crypto DAO / CDAO was resolved as out of current CYA scope and merged.

Current main at lane start:

```text
1fd2cc06b60cda6d294d9cd5a5e92fd216a739a1
```

The latest canonical addition remains JBank platform 104.

## Identity resolution

Issue #186 lists `ORCA`.

This name is ambiguous. The watchlist/referral item is **not** the established Solana Orca AMM at `orca.so`.

Current referral material links directly to:

```text
https://dapp.ocagent.io/
```

The live registration surface identifies itself as:

```text
iOrca
```

and requires a username, affiliate code, wallet connection and agreement to Terms of Service, Privacy Policy and Risk Disclosure.

Therefore the watchlist identity is provisionally resolved as:

```text
iOrca / ORCA System / OC Agent
ocagent.io
```

## Discovery product model

Multiple current Japanese discovery/referral sources independently describe a broadly consistent product model:

- participation with BNB-chain USDT;
- wallet connection;
- minimum participation around 100 USDT;
- fixed-term packages including 10, 90, 180 and 360 days;
- principal locked during the selected term;
- daily rewards paid directly to the connected wallet;
- reward-rate increases through daily check-in;
- referral/rank compensation;
- a launch-period doubled-deposit campaign;
- yield attributed to AI-assisted arbitrage across prediction markets.

Those details make the product strongly relevant to CYA. They do **not** make it promotion-ready because the available first-party surface has not yet yielded stable product/legal terms.

## First-party limitation

The live iOrca registration page exposes links to Terms of Service and Risk Disclosure, but the available crawler could not reliably retrieve those documents in this pass. The attempted terms/risk routes redirected through alternate ocagent-like hostnames and failed in the research environment.

No stable first-party document was retrieved that establishes:

- legal operator and jurisdiction;
- exact deposited-asset ownership/custody;
- whether USDT is transferred, pooled, traded, lent or otherwise reused;
- package lockup and redemption contract;
- exact reward calculation;
- right to suspend or delay withdrawals;
- economic source of returns;
- liability for promotional campaign credits;
- formal launch date.

That evidence gap is sufficient to block `add_now`.

## Nodepay claim boundary

Current referral material says a `Nodepay` organization/company is related to ORCA and provides data for prediction-market activity.

No first-party ORCA/iOrca material retrieved in this pass establishes that relationship. It must remain unverified and must not be used as canonical operator/counterparty evidence.

## Return-claim boundary

Discovery sources advertise daily return ranges, check-in multipliers, direct daily USDT payments and temporary doubled-deposit campaigns.

CYA must not convert any of these into:

```text
verified realized yield
verified source-of-yield
principal guarantee
proof of solvency
proof of universal repayment
```

Even if later confirmed first-party, they remain issuer-advertised mechanics unless independently verified.

## CYA decision

Stage as:

```text
candidate: cya_candidate_000116
name:      iOrca
aliases:   ORCA / ORCA System / OC Agent
domain:    ocagent.io
type guess: centralized_yield_ai_arbitrage
status guess: active
decision:  needs_research
```

This decision means the candidate appears directly within CYA's product scope but lacks sufficient first-party evidence for a durable public record.

It is not a fraud, safety, solvency or return-quality classification.

## Promotion gate

Before `add_now`, obtain and verify first-party or authoritative evidence for at least:

1. operator legal entity and jurisdiction;
2. Terms of Service and Risk Disclosure;
3. deposit/custody/asset-use treatment;
4. package lockup/redemption mechanics;
5. reward calculation and payout mechanics;
6. withdrawal/suspension rights;
7. source-of-yield language;
8. launch chronology;
9. promotional-credit obligations;
10. any claimed relationship to Nodepay or other prediction-market/data counterparties.

## Duplicate controls

Exact repository searches before staging returned no CYA match for:

```text
iOrca
ocagent.io
ORCA System
orca.so
cya_candidate_000116
```

The Solana Orca protocol is a separate identity and must not be merged with this candidate.

The hardened full-corpus candidate audit/scanner remains authoritative for hidden collisions.

## Next action

Run the exact-head Candidate scan, Candidate draft/guard, Validate data, CYA CI, Validate/build, SEO and Preview Surface Check.

If green, merge this staging-only `needs_research` decision. No canonical promotion PR is required yet. Issue #186 then advances to `SmartLending` while iOrca remains in the active research queue.
