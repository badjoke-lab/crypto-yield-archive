# Crypto Yield Archive Specification

Status: foundation specification  
Project: Crypto Yield Archive  
Abbreviation: CYA  
Primary mode: historical registry, not a ranking site

---

## 1. Mission

Crypto Yield Archive records what happened after users deposited assets into crypto lending, Earn, and yield platforms.

It exists to answer five questions:

1. What was the platform or product?
2. What happened to it over time?
3. Why did it fail, change, restructure, or continue operating?
4. What happened to customer funds?
5. What evidence supports the record?

CYA is not an APY dashboard. It is a historical archive of platforms, products, incidents, restructurings, repayments, and unresolved outcomes.

---

## 2. Non-goals

CYA must not become:

- an APY ranking site
- an investment recommendation site
- a yield discovery product
- a real-time TVL dashboard
- a trading tool
- a news-speed product
- a promotional list of current platforms

CYA may mention yield products, but only as historical records.

---

## 3. Target audience

Primary readers:

- researchers
- journalists
- crypto historians
- former platform users
- bankruptcy claimants
- risk analysts
- people comparing past platform failures

Secondary readers:

- builders of crypto risk tools
- people studying custody and counterparty risk
- people trying to understand what happened in the 2021-2023 yield collapse cycle

Not primary readers:

- yield hunters
- short-term investors
- day traders
- people looking for current APY recommendations

---

## 4. Competitive position

CYA avoids direct competition with APY dashboards and exploit databases.

Existing adjacent categories:

- APY / TVL dashboards: current yield and pool data
- exploit databases: hack and exploit records
- news sites: event reporting
- bankruptcy portals: case-specific documents
- blog articles: recommendations or explanations

CYA's gap:

- platform-level history
- customer outcome tracking
- terms risk tracking
- failure-chain reconstruction
- evidence-first dossiers
- cross-platform comparison of lending and yield collapses

---

## 5. Scope model

CYA is designed to expand over time, but the initial scope is deliberately narrow.

### Initial scope: CeFi lending and yield

Included:

- CeFi lending platforms
- crypto interest accounts
- centralized yield platforms
- borrow/lend platforms

Initial candidate examples:

- Celsius
- BlockFi
- Voyager
- Genesis
- Hodlnaut
- Vauld
- CoinLoan
- Haru Invest
- Midas Investments
- Nexo
- Ledn
- Babel Finance

Excluded from the initial scope:

- Exchange Earn products
- DeFi lending protocols
- DeFi yield aggregators
- pool-level records
- vault-level records
- chain deployments
- real-time APY history
- real-time TVL

### Later scope: event-significant Exchange Earn

Exchange Earn products are added only when they have historical significance.

Allowed triggers:

- suspension
- repayment issue
- asset freeze
- major terms change
- regulatory action
- bankruptcy or restructuring connection
- customer outcome relevance

Do not add Earn products just because they exist.

### Later scope: major DeFi lending and yield

DeFi is not excluded, but it is not part of the initial scope.

Candidate examples:

- Aave
- Compound
- Morpho
- Spark
- Yearn
- Maple Finance
- TrueFi
- Goldfinch
- Anchor Protocol

Add DeFi only when it has one or more of:

- historical importance
- major market impact
- significant incident
- CeFi collapse connection
- governance or regulatory relevance
- strong yield-market relevance

### Later scope: pool, vault, and deployment layer

Later possible rows:

- protocol version records
- pool-level records
- vault-level records
- chain deployment records

This layer is not part of the initial registry unless the project clearly needs it.

---

## 6. Coverage estimates

Estimated scale by stage:

- Initial CeFi scope: 80-150 entities
- Expanded Earn / CeFi scope: 150-300 entities
- Major DeFi lending and yield: 300-1000+ entities
- Pool / vault / deployment layer: thousands to 10,000+ rows if split

The site should be designed for expansion, but the initial dataset should prioritize depth over count.

---

## 7. Core differentiators

### 7.1 Customer outcome

Track what happened to customer funds.

Fields should answer:

- Were customers repaid?
- Was repayment full, partial, ongoing, or unknown?
- Was the recovery rate estimated or class-dependent?
- When did repayments begin?
- Did repayments complete?
- What claim process or distribution process applied?
- Which products or claim classes were affected?
- What remains uncertain?

### 7.2 Terms risk

Track how platform terms or legal interpretation treated deposited assets.

Values:

- customer_owned
- platform_owned
- unclear
- varies_by_product
- unknown

Terms risk is especially important for interest accounts and custodial yield products.

### 7.3 Failure chain

Record the chain of causes and events instead of a single label.

Example flow:

- aggressive yield product growth
- counterparty exposure
- market shock
- liquidity mismatch
- withdrawal run
- withdrawal suspension
- bankruptcy filing
- restructuring
- customer repayment

The failure chain should be readable by non-specialists and backed by evidence.

### 7.4 Evidence dossier

Every major claim should be supported by sources.

Preferred evidence types:

- official statement
- court document
- bankruptcy document
- regulatory notice
- archived website capture
- reputable news report
- database reference
