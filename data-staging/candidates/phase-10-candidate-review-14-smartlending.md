# Phase 10 candidate review 14 — SmartLending

Issue: #186  
Review date: 2026-08-13  
Decision: **identity unresolved / hold**  
Canonical promotion: **none**  
Candidate ID allocation: **none**

## Why no candidate ID is allocated

The Issue #186 watchlist label is only `SmartLending`. Current first-party research does **not** resolve that label to one unique crypto lending/yield identity.

At least four unrelated first-party product families currently collide with the same or near-identical name:

1. **WhiteBIT Earn / Crypto Lending**
   - WhiteBIT's official material states that its Crypto Lending product was formerly `SMART-staking` and is a centralized product in which users lend digital assets to the platform for interest.
   - This is CYA-relevant as a CeFi yield product, but the available Issue #186 discovery label does not establish that WhiteBIT is the intended watchlist identity.
   - Sources:
     - https://blog.whitebit.com/en/what-is-whitebit-earn/
     - https://blog.whitebit.com/en/changes-to-crypto-lending-apr/

2. **FEG / SmartDeFi SmartLending**
   - FEG first-party documentation uses the exact `SmartLending` name for interest-free collateralized loans against SmartDeFi tokens.
   - This is primarily a DeFi borrowing feature, not a conventional CeFi interest-account identity.
   - Source:
     - https://docs.feg.io/smartdefi-tm-platform/smartdefi-protocol/smartlending

3. **Lista DAO Smart Lending**
   - Lista's first-party documentation uses `Smart Lending` for a DeFi lending design in which collateral is placed into DEX liquidity pools and can generate trading-fee income while backing borrowing.
   - This is a DeFi protocol feature and is outside CYA's current CeFi-focused canonical boundary absent a separate historically significant outcome event.
   - Sources:
     - https://docs.bsc.lista.org/introduction/smart-lending
     - https://blog.lista.org/lista-lending-20-introducing-smart-lending

4. **Smart Crypto Lending (SCL)**
   - The Japanese service at `scllending.com`, operated by Mirising Co., Ltd. / ミライジング株式会社, is a current centralized crypto lending product.
   - Its first-party terms explicitly define a service in which customers lend crypto assets to the company and the company returns the same asset plus interest after the contractual period.
   - This is strongly CYA-relevant if it is the intended watchlist identity, but `SmartLending` alone is insufficient to make that attribution.
   - Sources:
     - https://scllending.com/
     - https://scllending.com/terms/
     - https://scllending.com/company/

## Repository duplicate check

Exact CYA repository searches before this review returned no existing match for:

- `SmartLending`
- `WhiteBIT`
- `Lista`
- `FEG SmartDeFi`
- `Smart Crypto Lending`

That means there is no canonical CYA record that can safely absorb the ambiguous watchlist label by exact identity.

## Scope / evidence decision

Do **not** select one of the above identities by name similarity alone.

The correct fail-closed treatment is:

```text
SmartLending
identity unresolved
no candidate ID allocated
no canonical platform/event/evidence IDs allocated
```

Before any future `add_now` decision, recover at least one identity-bearing attribute from the original discovery source, such as:

- official domain;
- app/registration URL;
- operator/company name;
- logo or screenshot with product branding;
- supported assets / plan mechanics unique enough to disambiguate;
- referral URL or affiliate code tied to a specific domain.

If the intended identity is **Smart Crypto Lending (SCL)** or **WhiteBIT Crypto Lending**, perform a normal CYA duplicate/scope/evidence review at that time. If it is **FEG SmartLending** or **Lista Smart Lending**, keep the DeFi scope boundary unless a historically significant incident/outcome justifies separate treatment.

## Safety boundary

This review makes **no fraud, solvency, safety, licensing, or realized-return classification** for any of the four products above. The first-party sources are used only to prove that the name collision exists and that the products are materially different.

## Issue #186 progression

SmartLending remains an unresolved research hold rather than a promoted or rejected canonical identity.

After exact-head CI passes, merge this review note and advance Issue #186 to the next scheduled target: **CryptoPawn**.
