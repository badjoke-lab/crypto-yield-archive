# Candidate review — LFJ Monad Liquidity Book / JOE staking withdrawal-only

Status: needs_research  
Reviewed: 2026-09-22

## Why this is being reviewed

LFJ announced on 2026-09-21 that Liquidity Book and JOE staking on Monad were moving to withdrawal-only mode. Existing positions remained withdrawable. LFJ said it was consolidating its Monad footprint around POE PropAMM, which remained operational.

This is potentially CYA-relevant because JOE staking is a yield-bearing staking product and Liquidity Book liquidity provision is fee-yield activity. The change is product/network-specific rather than an entity-wide shutdown.

## Scope fit

CYA now permits historically significant DeFi lending/yield lifecycle records. Its current schema also has product vocabulary for `staking_like_yield` and `defi_yield_aggregator`.

JOE staking is described in LFJ first-party documentation as single-sided staking that distributes protocol trading fees to stakers in USDC. That makes the staking side a clear yield-product candidate.

Liquidity Book liquidity provision also produces fee yield, but CYA should not automatically turn every LFJ pool into a product row. The relevant historical event is the Monad-side move to withdrawal-only.

## Confirmed facts

- LFJ is an active multichain DEX, including Monad.
- LFJ first-party documentation describes JOE staking as a single-sided staking product whose rewards come from trading fees and are paid in USDC.
- LFJ's 2026-09-21 protocol update says:
  - Liquidity Book on Monad is shifting to withdrawal-only.
  - JOE staking on Monad is shifting to withdrawal-only.
  - existing positions can be withdrawn at any time.
  - LFJ is consolidating its Monad footprint around POE PropAMM.
  - POE PropAMM remains fully operational.
- This does **not** establish insolvency, loss of principal, an exploit, or an entity-wide shutdown.

## Proposed CYA record shape

Do not promote automatically. If first-party event evidence is preserved, canonical implementation should consider:

1. A reviewed LFJ platform/entity record only if the current CYA platform-scope model can represent a DEX with a historically significant yield product without misclassifying the platform.
2. A `staking_like_yield` product for JOE staking, with Monad/network context where supported.
3. A 2026-09-21 lifecycle event representing the stop-new-deposits / withdrawal-only transition for Monad JOE staking.
4. A separate product/dependency note for Liquidity Book fee-yield positions rather than modeling every pool.
5. Continued-active context for POE PropAMM so the event is not misread as LFJ shutdown.
6. Customer outcome should remain `not_applicable` or `unknown` unless CYA's current outcome model requires another reviewed mapping; the announcement says existing positions remain withdrawable and does not report losses.

## Current classification boundary

Do not classify LFJ as failed, insolvent, bankrupt, dead, or globally impaired.

The supported narrow claim is:

> Monad Liquidity Book and JOE staking moved to withdrawal-only while existing positions remained withdrawable, and LFJ continued Monad activity through POE PropAMM.

The exact implementation date beyond the announcement date, whether new deposits stopped immediately for every affected contract/UI path, and the exact Monad staking contract/product identity should be confirmed before canonical promotion.

## Candidate disposition

`needs_research`

Reason: the event is historically relevant and the yield-product fit is strong, but canonical promotion should wait for a durable first-party event permalink/archive and confirmation of how LFJ should map into CYA's platform taxonomy.

## Required before canonical promotion

1. Preserve the 2026-09-21 LFJ first-party protocol update or a durable archive/permalink.
2. Confirm the exact Monad JOE staking product/contract identity and whether `deposits_suspended` is the correct CYA event enum.
3. Confirm whether LFJ should be modeled as a CYA platform entity or whether a narrower product-centric representation is needed under the existing schema.
4. Keep the event network-specific; do not imply global JOE staking or global Liquidity Book shutdown.
5. Keep LFJ/POE active context explicit.
6. Do not infer loss, insolvency, exploit, bad debt, or inability to withdraw.

## Sources reviewed

### First-party

- LFJ documentation — Welcome to LFJ: https://docs.lfj.gg/
- LFJ documentation — Staking: https://docs.lfj.gg/lfj-dex/usdjoe-token/stake_joe_tokens_6709447
- LFJ documentation — Monad contracts: https://docs.lfj.gg/lfj-dex/contracts/monad
- LFJ documentation — JOE token emissions / staking revenue: https://docs.lfj.gg/additional-information/brand-and-ecosystem-information/joe_token_emissions_6793324
- LFJ official social account: https://x.com/LFJ_gg

### Contemporaneous corroboration

- RawChain, 2026-09-21 — protocol update reproduction: https://rawchain.info/protocol-update-liquidity-book-and-joe-staking-on-monad-are

No canonical data mutation is authorized by this candidate note.
