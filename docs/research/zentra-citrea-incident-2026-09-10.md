# Zentra Finance / Citrea incident review — 2026-09-10

Status: research / not canonical
Issue: #409

## Verified scope

Zentra Finance describes itself as a decentralized/native money market on Citrea using Aave V3 architecture, with supply/borrow/yield markets including ctUSD.

On 2026-09-09, Citrea stated that it temporarily paused bridging for ctUSD, USDC, USDT, WBTC, and CTR following a security incident at third-party application Zentra Finance. Citrea stated that the pause was precautionary and that Citrea protocol and bridge contracts were not affected. Funds outside Zentra Finance were stated not to be at risk.

On 2026-09-10, Citrea stated that bridging had resumed for those assets after review. Solver-based routes were still returning progressively. Citrea also stated that the Zentra team had identified the root cause and contained the incident by pausing its contracts.

Citrea said a separate follow-up would cover ecosystem-wide impact, including the ctUSD Earn Vault and next steps for affected depositors.

## CYA candidate interpretation

Zentra is in CYA scope as a DeFi lending / money-market platform.

Candidate record work:

- new Zentra Finance platform entity, subject to duplicate/canonical identity review
- security incident / protocol-pause event chain
- Citrea bridge pause/reopen as external ecosystem context, not as a Zentra loss amount
- depositor / lender outcome remains unresolved
- ctUSD Earn Vault impact remains unresolved

## Claims not currently supported

Do not yet assert:

- a specific exploit vector
- a specific loss amount
- bad debt amount
- depositor principal loss
- reimbursement amount or status
- protocol insolvency
- permanent shutdown
- stablecoin depeg or backing impairment

## Sources

Primary/product source:

- https://zentra.finance/

Citrea statement mirrors / secondary corroboration:

- https://www.gate.com/en-us/news/detail/citrea-suspends-cross-chain-bridging-for-ctusd-usdc-usdt-wbtc-ctr-over-17866949
- https://panews.io/newsflash
- https://www.kucoin.com/news/flash/citrea-resumes-cross-chain-services-for-ctusd-usdc-usdt-wbtc-and-ctr

Operator-provided evidence:

- screenshot of Citrea's 2026-09-09 X statement supplied in project conversation

## Next gate

Before canonical mutation, capture either Zentra's own incident statement/postmortem or Citrea's promised impact update, then map the supported facts into the current CYA platform/event/evidence/outcome schema and run the repository's normal validation and review process.
