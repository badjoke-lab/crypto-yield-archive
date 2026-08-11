# Phase 9 XORA Finance incident research notes

Baseline audit-release SHA: `bf2b1948f7ac817956f740e91fcfe80bb8ad0ba4`  
Canonical platforms: 100  
Candidate: `cya_candidate_000102`  
Canonical platform ID: **not allocated**  
Latest manual review: 2026-08-12

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

## Independent product / custody corroboration

DefiLlama currently classifies XORA as a custodial XRPL savings product and attributes TVL to shared treasury address:

`rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o`

Its published methodology says user deposits route to that shared custody wallet through destination tags and that per-user accounting is internal to XORA. The address attribution is a strong research anchor but CYA must still reproduce the relevant XRPL history before relying on it for an incident finding.

Source:

- https://defillama.com/protocol/xora

## Operating-origin review

Round-two source review resolved the operating-origin field more strongly than the initial `Unknown` value:

- XORA's July 1 Chainwire release identifies Stockholm, Sweden, says the service went live in February 2026, and identifies Joren Lundgren as founder and CEO;
- a founder-authored June 17 TechBullion article identifies Joren Lundgren as founder/CEO and describes the same custodial treasury and subsidy model;
- a July XORA hiring listing independently says the company launched from Stockholm and identifies Lundgren as CEO.

Sources:

- https://chainwire.org/2026/07/01/xora-launches-xrp-neobank-letting-holders-earn-on-and-spend-their-xrp/
- https://techbullion.com/why-we-built-a-neobank-on-the-xrp-ledger/
- https://himalayas.app/companies/xora/jobs/growth-marketing-manager

Decision: record `country_or_origin` as `Sweden / Global` for operating origin. This is **not** a finding about the legal entity's registration jurisdiction. The operating legal entity remains unresolved.

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

## Round-two public-source search result

The manual search was expanded around:

- the exact `29,899.8 XRP` amount;
- the DefiLlama-attributed treasury address;
- the RippleXity post ID;
- the other supplied X post IDs;
- XORA withdrawal/account wording;
- public XRPL explorer/API routes.

Result:

- no indexed source exposed the claimant's XRPL address;
- no indexed source exposed the `29,899.8 XRP` transaction hash;
- no indexed source exposed the incident destination tag;
- no indexed source exposed a corresponding withdrawal transaction hash;
- no attributable XORA support message establishing the reported AML hold was recovered;
- no attributable XORA message establishing the later phishing/account-nonexistence narrative was recovered;
- the XRPL.to article and supplied X URLs remain useful leads but are not sufficient for transaction-level canonical wording by themselves.

This is a **source-availability blocker**, not evidence that the reported event did or did not occur.

## On-chain verification path

The official XRP Ledger API documents `account_tx` as the method for retrieving validated transactions involving an account, and official public-server documentation lists full-history mainnet servers. XRPSCAN also documents a public account-transactions endpoint with marker pagination.

Relevant method/reference sources:

- https://xrpl.org/docs/references/http-websocket-apis/public-api-methods/account-methods/account_tx
- https://xrpl.org/docs/tutorials/public-servers
- https://docs.xrpscan.com/api-documentation/account/transactions

The next valid on-chain step is therefore deterministic rather than speculative:

1. query the full transaction history for `rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o`;
2. filter inbound successful XRP Payments around the incident period for a delivered amount of `29,899.8 XRP` (29,899,800,000 drops if represented in drops);
3. capture sender, destination tag, ledger index, transaction hash and timestamp for any exact match;
4. use the sender/destination-tag pair to search for a corresponding outbound withdrawal or refund;
5. only then describe settlement/non-settlement as a CYA on-chain observation.

The current ChatGPT research environment could identify the official methods and the treasury-address attribution but could not retrieve the live address-specific transaction payload. The repository therefore must not pretend that this step has already been completed.

## Current candidate decision

Decision: `needs_research`.

Rationale:

1. CYA product scope is established;
2. operating origin is now reasonably established as Stockholm/Sweden, while legal registration remains unresolved;
3. the treasury address has independent third-party attribution;
4. the incident remains material but the transaction/account identifiers needed for an independent settlement finding are still missing;
5. the public terms expressly allow security/compliance withdrawal holds, so a reported hold cannot be equated with insolvency or permanent loss;
6. current evidence does not support `operations_ended`, fraud, scam, insolvency, loss, recovery-rate or customer-outcome conclusions;
7. no canonical platform ID should be consumed while the incident and legal-entity boundary remain unresolved.

## Required verification before any promotion

### On-chain

- identify and verify the reported `29,899.8 XRP` deposit transaction hash;
- verify destination account and destination tag relationship to XORA;
- independently reproduce the DefiLlama-attributed treasury address history from XRPL data;
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

- identify and verify the operating legal entity behind `xora.finance`;
- do not infer registration jurisdiction from Stockholm operating origin or Delaware governing-law language alone;
- capture the exact terms version applicable to the incident date;
- document custody, title/ownership language, treasury-use language and withdrawal rights without importing generic website claims;
- distinguish the current treasury-subsidized yield model from future XRPL-native AMM/lending roadmap claims.

### Source preservation

- archive first-party whitepaper, yield-source and terms pages;
- preserve Chainwire, founder-authored TechBullion material and the hiring-origin source;
- preserve the DefiLlama methodology snapshot used for treasury-address attribution;
- preserve the XRPL.to investigation and linked X posts if technically possible;
- record accessed dates and any unavailable/changed source state.

## Canonical promotion boundary

A later canonical PR may add XORA Finance only after manual source review changes the candidate decision through the normal review process. If promoted, the initial canonical record should remain conservative:

- `active` unless stronger reviewed evidence supports another status;
- no scam/fraud label from community investigation alone;
- incident wording must attribute unresolved third-party claims separately from verified on-chain facts;
- yield-source wording must distinguish first-party claims from independently verified on-chain activity;
- customer outcome remains unknown unless directly established.
