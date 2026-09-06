# XRPH staking — CYA research note (2026-09-06)

## Decision

**CYA-relevant.** Treat the XRPH Wallet staking facility as a yield-product lifecycle case. Do not import the entire wallet compromise into CYA; WLR is the primary ledger for the wallet/key-management incident.

Provisional decision: `add_now` after canonical duplicate/ID allocation and current schema validation.

## Confirmed yield-product lifecycle

- XRP Healthcare announced XRPH staking inside XRPH Wallet on **2023-12-07**.
- Advertised terms at launch:
  - **6 months: 20% APR**
  - **12 months: 25% APR**
- XRP Healthcare announced cessation of **new** XRPH staking on **2024-07-23**.
- The cessation announcement explicitly said existing stakes would continue until their terms expired; no new staking contracts would be offered from that date.
- Current XRP Healthcare roadmap material states that the staking facility has been discontinued.

## 2026 security relevance to the historical yield product

XRPL.to's 2026-09-05 forensic investigation of the XRPH Wallet compromise found:

- 1,225 wallets had staked through the app.
- 1,198 of those wallets were among the drained wallets.
- The reviewed Android build contained staking/unstaking code that transmitted the user's seed to an XRP Healthcare server.
- New stakes had stopped in July 2024, but unstaking/rollover flows using the seed-transmission path continued afterward.

This is highly relevant to CYA's product/terms-risk history because the yield feature's implementation materially affected key-control/custody risk. However, **do not record the staking path as the root cause of the 2026 wallet-wide compromise**: the forensic investigation states that roughly seven in ten drained wallets had never staked, so that observed path does not explain the full victim set.

## Proposed CYA record shape

Canonical implementation should add or link the following, subject to the current CYA schemas and ID allocation:

1. Platform/product identity for XRP Healthcare / XRPH Wallet staking if no canonical platform already exists.
2. Product launch event dated 2023-12-07.
3. Product terms record preserving the advertised 20% APR / 25% APR and 6-/12-month lock periods as **advertised terms**, not realized returns.
4. New-staking cessation event dated 2024-07-23.
5. Current lifecycle outcome reflecting that the staking facility is discontinued, while distinguishing the 2024 stop-new-stakes date from later expiry/unstaking of existing positions.
6. Terms-risk / custody-risk evidence noting the later-disclosed seed transmission in staking/unstaking flows.

## Evidence

### First-party

- XRP Healthcare, “XRP Healthcare Launches XRPH Token Staking Feature on Our Decentralized Wallet and App!”, 2023-12-07: https://xrphtoken.com/blog/xrp-healthcare-launches-xrph-token-staking-feature-on-our-decentralized-wallet-and-app
- XRP Healthcare press release, “XRP Healthcare Halts New Staking of XRPH Token to Preserve Finite Supply, Shifts Focus to Real-World Healthcare Ventures”, 2024-07-23: https://www.prnewswire.com/news-releases/xrp-healthcare-halts-new-staking-of-xrph-token-to-preserve-finite-supply-shifts-focus-to-real-world-healthcare-ventures-302203541.html
- XRP Healthcare current roadmap, which states that the staking facility has been discontinued: https://xrphtoken.com/roadmap

### Security / forensic

- XRPL.to, “The XRPH Wallet Hack: 4,011 Wallets Emptied in Three Hours”, 2026-09-05: https://xrpl.to/insights/xrph-wallet-hack-4011-wallets

## Boundary rules

- Do not classify XRPH staking as a wallet product in CYA; it is a yield product/facility.
- Do not convert advertised APR into verified realized yield.
- Do not infer insolvency, loss of principal for every staker, or non-payment of promised rewards from the 2026 compromise alone.
- Do not claim that staking seed transmission caused all 2026 drains.
- Cross-reference WLR once the XRPH Wallet incident candidate is canonicalized.
