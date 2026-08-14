# Phase 10 — PBR LENDING canonical promotion

Date: 2026-08-15
Parent: #203
Candidate issue: #225
Candidate PR: #226

## Promotion decision

Promote duplicate-clear `cya_candidate_000128` to `cya_plat_000110` in canonical batch 69.

## Scope

Canonical identity: **PBR LENDING**
Operator: **Portobello Road株式会社**
Type: `cefi_lending`
Status: `active`

No exact original launch date is assigned. Current first-party promotional material indicates multi-year operation, but that is not sufficient to infer an exact launch date.

## Contract model

Current first-party Terms define customer-to-company crypto-asset consumption-loan contracts. Customers fund a lending-preparation wallet, select plan / asset / quantity and submit a lending request; the company then processes the individual lending contract.

The current Terms distinguish Regular Lending and Premium Lending with different lock periods and advertised rates.

## Risk boundary

Current first-party terms/disclosures state that:

- the service is not a deposit or deposit-like product and is not deposit-insured;
- the lending transaction is not crypto-asset exchange business and borrowed assets are outside statutory segregated-management treatment;
- no physical or personal collateral is provided;
- operational separation of borrowed assets is not legally complete trust protection;
- customer claims become general claims alongside other creditors in insolvency;
- failure of Portobello Road or its lending/investment counterparties can make return difficult or impossible.

CYA therefore records platform-owned / borrower-counterparty exposure during the lending contract.

## Yield-source boundary

Portobello Road states that borrowed crypto is used in crypto-market operations and/or business investments and that resulting revenue supports contractual interest. This is recorded as the operator's stated economic model only. It is not independent verification of investment performance, reserves, profitability, repayment history or solvency.

## Evidence boundary

Advertised rates, security statements, internal reserve / accumulation-fund claims, business-investment performance and repayment claims remain issuer statements. They must not be presented as independently verified realized returns, guarantees, reserve proof, insurance or solvency evidence.

## Candidate / duplicate gate

Candidate-only PR #226 passed the hardened full-corpus scanner against the 109-platform canonical corpus with six active candidates total and exactly one draft-eligible candidate. The safety guard passed.

## Production gate

Merge only after exact-final-head canonical CI is green. After merge, verify the exact merge SHA through the push-side Production Surface Check before closing #225 or advancing the canonical count to 110.
