# CoinEx Earn wind-down — CYA research note (2026-09-20)

## Decision

**CYA-relevant and add-now eligible after the required candidate/canonical separation.**

The historically significant event is not a routine exchange Earn listing. CoinEx has announced an orderly cessation that directly affects its Earn, Staking and other non-spot financial products.

Provisional candidate: `cya_candidate_000119`.

## Confirmed lifecycle

- CoinEx's current product history says the earlier Financial module was upgraded to **CoinEx Earn** in 2025, with Flexible Savings and Fixed Savings under the Earn surface.
- Current first-party Flexible Savings documentation describes a CoinEx-platform financial product in which users move assets into an Earn/Savings account and receive variable yield.
- Current first-party Dual Investment documentation describes a non-principal-protected investment product under the CoinEx Earn surface.
- On **2026-09-15**, CoinEx announced an orderly cessation process.
- From that announcement date:
  - no new Earn subscriptions/orders are accepted;
  - no new Staking subscriptions/orders are accepted;
  - other named non-spot products also stop taking new business;
  - futures are reduce-only.
- CoinEx schedules **all non-spot services to cease on 2026-09-22**.
- Spot trading is separately scheduled to cease on 2026-09-29.
- The CoinEx exchange platform is scheduled to cease after the withdrawal period on 2026-12-22.

As of this review date, CYA should therefore treat the yield surface as **limited / winding down**, not yet `operations_ended`.

## Proposed canonical boundary

Canonical promotion should model one CYA platform identity for the CoinEx exchange-yield surface:

- canonical name: **CoinEx Earn**
- type: `exchange_earn`
- architecture: `cefi`
- current status: `limited`
- failure reason: `voluntary_shutdown`
- exact end date: **null until September 22 cessation is confirmed**
- customer outcome: `not_applicable` unless later evidence establishes a claims/recovery process

Product profiles should distinguish materially different mechanics where supported:

1. **CoinEx Flexible Savings** — exchange Earn / flexible savings
2. **CoinEx Fixed Savings** — exchange Earn / fixed-term savings
3. **CoinEx Dual Investment** — structured yield / non-principal-protected
4. **CoinEx Staking** — staking-like yield

Do not collapse the wider CoinEx exchange into CYA. HEI remains the ledger for the exchange lifecycle.

## Evidence

### First-party cessation

- CoinEx, “Important Notice on CoinEx’s Orderly Cessation of Operations”, 2026-09-15:
  https://www.coinex.com/en/announcements/detail/53539656293908

This is the core event source. It establishes the staged shutdown, the immediate stop to new Earn/Staking subscriptions or orders, and the September 22 non-spot cessation schedule.

### First-party product identity

- CoinEx, “CoinEx 2025: When Hype Is No Longer the Answer — Building Long-Term Value Through Professionalism”:
  https://www.coinex.com/en/blog/14208-coinex-2025-when-hype-is-no-longer-the-answer-building-longterm-value-through-professionalism

This identifies the upgrade from the Financial module to CoinEx Earn and names Flexible and Fixed Savings.

- CoinEx, “CoinEx Flexible Savings User Agreement”:
  https://www.coinex.com/en/help/sections/articles/49378759062553

This establishes the platform/account relationship, subscription/redemption mechanics, variable yield and the platform's right to suspend or terminate the service.

- CoinEx, “FAQ about Dual Investment”:
  https://www.coinex.com/en/help/sections/articles/52628294275481

This identifies Dual Investment as a high-yield, non-principal-protected financial product with locked subscriptions until maturity.

### Independent corroboration

- CoinDesk, “Hong Kong crypto exchange CoinEx to cease operations after 9 years in business”, 2026-09-15:
  https://www.coindesk.com/business/2026/09/15/hong-kong-crypto-exchange-coinex-to-cease-operations-after-9-years-in-business

## Explicit non-inferences

- Do **not** infer insolvency. CoinEx describes the shutdown as orderly and voluntary.
- Do **not** infer customer losses, a haircut, claims process or recovery rate from the shutdown announcement.
- Do **not** mark the yield platform `operations_ended` before the September 22 terminal state is confirmed.
- Do **not** treat the exchange's December 22 withdrawal deadline as the Earn end date; the first-party schedule separates non-spot cessation on September 22 from later exchange withdrawal closure.
- Do **not** treat APY marketing as realized customer returns.
- Do **not** assign identical custody, principal-protection or redemption terms across Flexible Savings, Fixed Savings, Dual Investment and Staking without product-specific evidence.

## Duplicate / ledger boundary

Fresh CYA repository search found no CoinEx or CoinEx Earn canonical record.

The existing HEI CoinEx entity is not a CYA duplicate. HEI records the exchange lifecycle; CYA records the yield-product lifecycle.

## Next canonical step

After this staging PR is reviewed/merged:

1. re-read actual CYA main;
2. allocate the next platform/event/evidence batch IDs from fresh main;
3. create the six-layer package;
4. run exact-head repository validation;
5. merge only after CI is green;
6. verify the public platform page and derived counts separately.
