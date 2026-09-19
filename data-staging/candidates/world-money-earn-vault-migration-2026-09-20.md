# World Money Earn / legacy Vault migration — CYA research note (2026-09-20)

Status: needs_research
Issue: #412

## Decision

**CYA-relevant.** The September 2026 World Money change is not just a wallet UI update: first-party World documentation says `Earn` replaced the WLD and USDC Vaults, and the USDC Dollar Vault's yield path changed from Sky/sDAI to an Earn flow using Morpho-selected on-chain lending protocols.

Do not create a new canonical platform automatically. The remaining review is the CYA identity boundary: whether to model the World wallet yield lineage as its own historically significant yield product/platform, or to preserve it as a distribution/access lifecycle event attached to the existing Morpho record.

## Supported chronology

### 2024-10-17 — World App 3.0 introduces Vault

World's World App 3.0 announcement describes a new Vault that let users earn on assets held in World App.

This establishes the user-facing Vault era, but the reviewed source does not by itself establish that every Vault asset used the same underlying provider or yield mechanism.

### 2025-04-30 — Morpho Mini App launch

World announced a Morpho Mini App for World App, describing access for more than 25 million users to lending, borrowing and vault rewards on World Chain.

The announcement identifies Morpho as the underlying permissionless lending infrastructure and describes the rollout as self-custodial open finance.

### 2026-09-15/17 — Earn replaces the Vaults

Current World Help material states:

- Earn is a feature in World Money.
- Supported examples include WLD, USDC, wETH and wBTC.
- World Money uses Morpho to find on-chain lending rates and uses on-chain lending protocols selected by Morpho.
- Withdrawal timing depends on on-chain liquidity and protocol conditions.
- Earn replaces the WLD and USDC Vaults.
- Legacy Vault users are offered either:
  - Upgrade to Earn; or
  - Transfer to spending.

### Legacy Dollar Vault mechanism

World's current Dollar Vault article explicitly states that the legacy **USDC Dollar Vault** generated yield from Sky Protocol:

- USDC was swapped by a decentralized smart contract into sDAI.
- sDAI represented the Dai Savings Rate.
- the rate was variable and set by Sky Protocol, not World Money.
- a legacy Dollar Vault balance remains on-chain as sDAI until the user moves it.

The same source says Earn generates rewards differently and uses Morpho.

**Do not generalize this Sky/sDAI mechanism to the historical WLD Vault without separate evidence.**

## Existing CYA overlap

Morpho is already canonical as `cya_plat_000140`.

The existing CYA platform record describes Morpho as a non-custodial lending protocol. That does not automatically make every wallet integration a separate platform or canonical event.

## Candidate record-shape options

### Option A — World wallet yield lineage as a separate CYA product/platform

Potential shape:

- identity: World App / World Money yield feature
- predecessor product: WLD / USDC Vault
- successor product: Earn
- architecture: non-custodial / DeFi-routed
- legacy USDC provider: Sky / sDAI
- current provider/infrastructure: Morpho
- lifecycle events:
  - Vault introduced
  - Morpho Mini App distribution
  - Vault deposits closed / Earn replacement
  - legacy-balance migration path

Use this only if the current CYA policy accepts the user-facing World yield product as a historically significant product identity rather than treating it as a thin distribution wrapper.

### Option B — Existing Morpho record receives significant distribution/access events

Potential events:

- 2025-04-30: Morpho Mini App launches inside World App for a reported 25M+ users.
- 2026-09: World Money's built-in Earn flow uses Morpho and replaces legacy WLD/USDC Vaults.

This avoids creating a frontend-only platform but risks flattening a real World-side product migration into Morpho's own lifecycle.

### Option C — research/context only

Use if neither A nor B clears the CYA significance and identity thresholds.

## Current recommendation for review

Do **not** treat World Money itself as a lending protocol.

The strongest CYA-specific fact is the **yield-product mechanism migration**:

```text
World USDC Dollar Vault
  → Sky Protocol / sDAI / DSR
  → deposits closed
  → user migration choice
  → World Money Earn
  → Morpho-selected on-chain lending protocols
```

This is stronger than a routine integration announcement and warrants canonical review.

## Unsupported / prohibited inferences

Do not infer:

- one universal Earn APY;
- guaranteed principal or rewards;
- instant withdrawals;
- global availability merely because World Money rolls out in 150+ countries;
- that all 150+ countries have Earn;
- that the WLD Vault used Sky/sDAI;
- that World Money itself is the borrower, lender, custodian or yield source;
- a customer loss or recovery outcome from the migration itself.

## Primary sources

- World, “Introducing World App 3.0: A super app for humans”, 2024-10-17:
  https://world.org/blog/announcements/introducing-world-app-3-super-app-humans
- World, “Morpho Mini App for World App brings DeFi lending, borrowing and rewards to 25 million users”, 2025-04-30:
  https://world.org/blog/announcements/morpho-mini-app-for-world-app
- World Help, “How do I use Earn?”, updated 2026-09-15:
  https://support.world.org/hc/en-us/articles/47022343436307-How-do-I-use-Earn
- World Help, “What is a Dollar Vault?”, updated 2026-09-17:
  https://support.world.org/hc/en-us/articles/32349648636691-What-is-a-Dollar-Vault
- World Help, “What is Worldcoin Vault?”, updated 2026-09-17:
  https://support.world.org/hc/en-us/articles/31618151074195-What-is-Worldcoin-Vault
- World, “Introducing World Money: a financial super app for humans”, 2026-09-17:
  https://world.org/blog/announcements/world-money

No canonical mutation is authorized by this research note.
