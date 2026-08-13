# Phase 10 candidate batch 02 — Kraken and Phemex

Issue: #204  
Review date: 2026-08-13  
Canonical mutation: **none in this PR**

## Purpose

Continue Phase 10 growth from 102 toward the authorized 125-platform checkpoint without allowing unresolved legacy candidates to stall canonical growth.

This candidate-only batch stages two current CeFi/exchange Earn identities with direct first-party product and legal material:

- `cya_candidate_000118` — Kraken
- `cya_candidate_000119` — Phemex

Both are marked `add_now` **subject to the hardened full-corpus candidate scanner on the exact PR head**. A scanner duplicate or ambiguous identity result overrides the provisional add-now decision.

## Kraken — `cya_candidate_000118`

Identity:

```text
Kraken
kraken.com
```

First-party material reviewed:

- https://support.kraken.com/articles/360044886311-overview-of-opt-in-rewards-on-kraken
- https://support.kraken.com/articles/overview-of-auto-earn-on-kraken
- https://support.kraken.com/articles/overview-of-bonded-earn
- https://www.kraken.com/legal/global-terms
- https://www.kraken.com/legal/us-oir-terms

Current product evidence establishes:

- Opt-In Rewards on otherwise idle eligible Kraken balances;
- a distinction between Opt-In Rewards and onchain staking;
- flexible and fixed/bonded reward variants;
- weekly reward distribution under the product rules;
- Auto Earn allocation into eligible reward products;
- jurisdiction-dependent availability and contracting entities.

The record must remain platform/brand-level rather than inventing one universal legal counterparty. U.S. Opt-In Rewards terms identify Payward, Inc. for that U.S. product, while global terms route other customers through jurisdiction-dependent Kraken/Payward entities.

Variable reward rates are issuer product terms, not verified realized returns or guarantees.

Provisional decision:

```text
add_now
```

## Phemex — `cya_candidate_000119`

Identity:

```text
Phemex
phemex.com
```

First-party material reviewed:

- https://phemex.com/help-center/what-are-the-earn-crypto-savings-accounts
- https://phemex.com/help-center/how-do-i-earn-crypto-with-phemexs-savings-accounts
- https://phemex.com/help-center/phemex-terms-of-use
- https://phemex.com/help-center/phemex-earn-and-wealth-management-passive-income-guide

Current product evidence establishes:

- interest-generating crypto Savings/Earn accounts;
- Flexible Savings availability;
- Fixed Savings product mechanics and current unavailability on the reviewed help surface;
- daily/flexible reward mechanics and redemption behavior;
- fixed-term subscription/redemption and maturity treatment in the Terms of Use;
- a multi-entity Phemex service structure rather than one universal legal counterparty.

Advertised APY, return and safety statements remain issuer claims and are not treated as independently verified realized returns, reserve proof or guarantees.

Provisional decision:

```text
add_now
```

## Duplicate controls

Before staging, exact repository searches returned no indexed match for:

- `Kraken`
- `Phemex`
- `cya_candidate_000118`
- `cya_candidate_000119`

Those searches are preliminary only. The repository's hardened candidate scanner loads the complete canonical platform corpus and is authoritative for this gate.

## Promotion rule

This PR does not allocate any canonical platform/event/evidence/outcome/product/terms-risk IDs.

After exact-head CI:

1. if both candidates are scanner-classified `new_candidate` / draft-eligible, merge this candidate-only PR;
2. promote each through a separate canonical PR because both have jurisdiction-dependent/multiple legal-entity boundaries;
3. exact-head validation must pass before each canonical merge;
4. exact merge-SHA Production Surface Check must pass before moving to the next platform.

The intended canonical sequence is Kraken first, then Phemex.
