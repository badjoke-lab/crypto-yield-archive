# Phase 10 candidate review 10 — Zenta System — 2026-08-13

Status: identity provisionally resolved / strong CYA scope fit / `needs_research` / no canonical allocation

## Baseline

This review begins only after JBank platform 104 passed exact-merge-SHA production verification on:

```text
c74cb314a70190a0ed1e52a8413bafd16ff99d6d
```

Production Surface Check #207 confirmed the Cloudflare custom domain serving that exact SHA with:

```text
Platforms:          104
Events:             339
Evidence:           619
Customer outcomes:  104
Product profiles:   145
Terms risk:         104
Claims ongoing:      18
```

The production visual verification captured 24/24 desktop/mobile states with zero failures.

## Identity resolution

Issue #186 lists `Zenta` as the next watchlist item.

Two distinct identities were found during the first pass:

```text
https://zenta-system.com/
```

and

```text
https://zenta.exchange/
```

The latter is a portfolio/wallet/tracking product and does not match the high-yield discovery material. The watchlist target is therefore provisionally resolved to **Zenta System** at `zenta-system.com`.

This boundary must remain explicit; the two identities must not be merged merely because they share the Zenta name.

## Official-source limitation

The official `zenta-system.com` site is live, but the available research crawler receives only a JavaScript application shell (`Enable javascript to continue using this application`).

As a result, this pass could verify the existence of the official domain but could not independently retrieve first-party:

- Terms of Service;
- deposit/investment plan contract;
- custody or asset-use terms;
- withdrawal/redemption agreement;
- legal/operator disclosure;
- audited revenue statement;
- regulatory/licensing disclosure.

That limitation is sufficient reason not to promote the candidate yet.

## Discovery evidence

Multiple current secondary/referral sources independently describe a consistent family of Zenta System programs:

```text
One Day
Core
Base
Stake
```

They describe deposits in USDT and, for Base products, BTC/ETH; business-day return ranges; term-based principal lockups; differing profit/principal release mechanics; and a referral/compensation layer.

The discovery sources broadly agree on examples such as a 100-USDT one-day trial, Core plans with locked principal and withdrawable periodic rewards, Base plans with BTC/ETH exposure, and longer Stake plans where principal/rewards remain locked until maturity.

These details establish **strong CYA relevance**, but they are not first-party authority. None of the rate ranges or repayment descriptions may enter canonical data from these sources alone.

## Corporate / security claims remain unverified

Secondary sources also repeat several claims about Zenta System, including:

- a Washington company named `ZENTA SYSTEM LIMITED`;
- UBI `606145475`;
- a Seattle principal address;
- a CertiK audit;
- AI trading, DeFi liquidity, arbitrage and B2B computing as revenue sources;
- KYC/AML and zero-fee withdrawal rules;
- multi-level referral compensation.

This review did **not** independently verify those claims against the Washington Secretary of State, CertiK, or first-party legal/financial documents. They therefore remain discovery claims only.

A critical review site also labels the model a Ponzi/pyramid scheme. CYA must not convert that characterization into a platform status, failure reason or fraud finding without authoritative evidence and an actual historical outcome event.

## Current CYA decision

Stage as:

```text
candidate: cya_candidate_000113
name:      Zenta System
domain:    zenta-system.com
type guess: centralized_yield
status guess: active
decision:  needs_research
```

The candidate remains in the active research queue because the described product model is directly within CYA scope, but the current first-party evidence is insufficient for a durable public record.

## Promotion gate

Before `add_now`, obtain and verify first-party or authoritative evidence for at least:

1. exact legal operator and jurisdiction;
2. product Terms / plan rules;
3. deposit/subscription asset treatment;
4. custody, commingling, lending/reuse or deployment rights;
5. principal lockup and redemption mechanics;
6. reward calculation and whether rates are fixed, variable, estimated or discretionary;
7. withdrawal processing and suspension rights;
8. launch chronology;
9. source-of-yield statements;
10. any claimed Washington registration, CertiK audit or regulatory status from the actual authority.

Advertised rates must remain issuer-advertised terms even if later verified first-party; they are not verified realized yield or proof of repayment.

## Duplicate controls

Exact repository searches before staging returned no existing CYA match for:

```text
Zenta
zenta-system.com
zenta.exchange
cya_candidate_000113
```

The hardened full-corpus candidate scanner remains authoritative for hidden alias/domain collisions.

## Next action

Run exact-head Candidate scan, Candidate draft/guard, Validate data, CYA CI, Validate/build, SEO and Preview Surface Check.

If green, merge this staging-only `needs_research` decision without allocating canonical IDs, then advance Issue #186 to `XERA` while Zenta System remains in the research queue.
