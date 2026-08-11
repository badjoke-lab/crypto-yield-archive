# Phase 9 XORA Finance incident research notes

Baseline audit-release SHA: `bf2b1948f7ac817956f740e91fcfe80bb8ad0ba4`  
Canonical platforms: 100  
Candidate: `cya_candidate_000102`  
Canonical platform ID: **not allocated**

## Why XORA belongs in CYA research

First-party XORA materials describe a custodial XRP yield product rather than a non-custodial XRPL lending protocol. The product therefore fits CYA's centralized/custodial yield scope strongly enough for research staging.

Reviewed first-party basis:

- the XORA whitepaper describes a shared XRPL treasury, per-user destination tags, off-chain balance accounting and native XRP yield credits;
- the current yield-source page says the native XRP component is currently paid from a finite treasury subsidy and presents XRPL AMM/lending as later phases rather than current yield sources;
- the current terms state deposited XRP/TRX balances are held in custodial wallets managed by XORA;
- the current terms permit withdrawal limits or holds for security/compliance and warn that processing can be delayed, so a reported hold by itself does not establish insolvency, theft or permanent loss.

Primary sources:

- https://xora.finance/whitepaper
- https://xora.finance/yield-source
- https://xora.finance/terms

Independent scope/custody corroboration:

- DefiLlama currently classifies XORA as a custodial XRPL savings product and attributes TVL to shared treasury address `rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o`, with user deposits routed by destination tag and per-user accounting kept internally by XORA.
- This third-party address attribution is useful as a research starting point, but CYA must reproduce the relevant ledger state before using it as the basis of a canonical incident finding.

Secondary source:

- https://defillama.com/protocol/xora

## Incident signal supplied for review

The research trigger is the 5 August 2026 RippleXity post and the linked XRPL.to investigation concerning XORA Finance.

Reported claims requiring verification include:

- a user-reported deposit of `29,899.8 XRP`;
- funds reported as inaccessible;
- a withdrawal reported as not appearing on XRPL;
- conflicting descriptions of the affected account reported by third parties;
- unresolved questions concerning represented treasury/assets.

Secondary investigation / user-report sources:

- https://x.com/RippleXity/status/2084884136523948149
- https://xrpl.to/insights/xora-finance-deposit-investigation
- https://x.com/gimgyeongh62101/status/2084604284122038562
- https://x.com/XRPDegens/status/2084227389442462069
- https://x.com/DNF_sol/status/2084608721343398018

These claims are **research signals, not canonical findings**. Do not convert RippleXity's risk characterization into a CYA fraud/scam classification.

## Candidate decision

Decision: `needs_research`.

Rationale:

1. product and custody scope are sufficiently clear from current first-party materials and independently corroborated at a high level by DefiLlama;
2. custody and current yield-source claims are sufficiently material to justify a dedicated CYA review;
3. the incident allegation is significant, but CYA does not yet have the claimant's transaction hash/address evidence or attributable first-party support record in the repository;
4. current evidence does not support a canonical `operations_ended`, insolvency, fraud, loss, recovery-rate or customer-outcome conclusion;
5. governing-law language in the public terms does not prove the operating entity's country/origin;
6. no canonical platform ID should be consumed until the incident evidence and operating legal-entity boundary are reviewed.

## Required verification before any promotion

### On-chain

- identify and verify the reported `29,899.8 XRP` deposit transaction hash;
- verify destination account and destination tag relationship to XORA;
- independently reproduce the currently attributed treasury address and relevant balance/history from XRPL data;
- identify the requested withdrawal amount/date and any transaction hash supplied by XORA;
- verify whether an XRPL payment actually settled to the claimant address;
- map any additional XORA operational addresses only from reproducible evidence;
- independently test any claim involving BTC-denominated XRPL IOUs, holders, order books or AMMs before recording it.

### First-party / account narrative

- preserve XORA support communications concerning any AML hold or account freeze if available;
- preserve any later XORA statement alleging phishing or account nonexistence;
- establish whether the two narratives concern the same account/user/event and whether either was corrected;
- obtain or archive any direct XORA response to the XRPL.to/RippleXity investigation.

### Product / legal boundary

- verify the operating legal entity behind `xora.finance` independently of first-party marketing;
- do not infer country/origin from Delaware governing-law language alone;
- capture the exact terms version applicable to the incident date;
- document custody, title/ownership language, treasury-use language and withdrawal rights without importing generic website claims;
- distinguish the current treasury-subsidized yield model from future XRPL-native AMM/lending roadmap claims.

### Source preservation

- archive first-party whitepaper, yield-source and terms pages;
- preserve the DefiLlama methodology snapshot used for treasury-address attribution;
- preserve the XRPL.to investigation and linked X posts if technically possible;
- record accessed dates and any unavailable/changed source state.

## Canonical promotion boundary

A later canonical PR may add XORA Finance only after the normal candidate scanner/draft gate and manual source review. If promoted, the initial canonical record should remain conservative:

- active/current status unless stronger evidence supports another status;
- no scam/fraud label from community investigation alone;
- incident wording should attribute unresolved withdrawal/account claims to their sources;
- yield-source wording should distinguish first-party claims from independently verified on-chain activity;
- customer outcome should remain unknown unless directly established.
