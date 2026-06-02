# Crypto Yield Archive Specification

Status: draft / foundation specification  
Project: Crypto Yield Archive  
Abbreviation: CYA  
Operating model: zero-cost static registry  
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

CYA is designed to expand over time, but v0 is deliberately narrow.

### Stage 1 / v0: CeFi lending and yield

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

Excluded from v0:

- Exchange Earn products
- DeFi lending protocols
- DeFi yield aggregators
- pool-level records
- vault-level records
- chain deployments
- real-time APY history
- real-time TVL

### Stage 2 / v0.5: event-significant Exchange Earn

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

### Stage 3 / v1: major DeFi lending and yield

DeFi is not excluded, but it is not part of v0.

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

### Stage 4 / later: pool, vault, and deployment layer

Later possible rows:

- protocol version records
- pool-level records
- vault-level records
- chain deployment records

This is not part of v0 or v1 unless the project clearly needs it.

---

## 6. Coverage estimates

Estimated scale by stage:

- Stage 1: 80-150 entities
- Stage 2: 150-300 entities
- Stage 3: 300-1000+ entities
- Stage 4: thousands to 10,000+ rows if deployments/pools are split

The site should be designed for expansion, but the v0 dataset should prioritize depth over count.

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

The site should make uncertainty visible instead of hiding it.

---

## 8. Canonical data files

The v0 canonical data lives in repo JSON files.

```text
data/platforms.json
data/events.json
data/evidence.json
data/outcomes.json
data/products.json
data/terms-risk.json
```

All files must use an array root.

No database is required in v0.

---

## 9. Record types

### 9.1 platform_entity

Represents the platform or historically meaningful yield service.

Required fields:

- id
- slug
- canonical_name
- type
- status
- summary
- confidence
- last_verified_at

Recommended fields:

- aliases
- failure_reason
- launch_date
- end_date
- country_or_origin
- official_url_original
- official_domain_original
- official_url_status
- archived_url
- notes

### 9.2 platform_event

Represents a meaningful event in the platform timeline.

Required fields:

- id
- platform_id
- event_type
- event_date
- title
- description
- confidence

Recommended fields:

- impact_level
- event_status_effect
- source_count
- notes

### 9.3 platform_evidence

Represents a source that supports an entity, event, outcome, terms-risk, or URL-history claim.

Required fields:

- id
- platform_id
- source_type
- title
- url
- publisher
- reliability

Recommended fields:

- event_id
- published_at
- archived_url
- accessed_at
- claim_scope
- notes

### 9.4 customer_outcome

Represents what happened to user funds.

Required fields:

- platform_id
- outcome_status
- notes
- confidence

Recommended fields:

- estimated_recovery_rate
- repayment_started_at
- repayment_completed_at
- repayment_method
- claim_process_url
- affected_products

### 9.5 product_profile

Represents important product categories offered by a platform.

Required fields:

- platform_id
- product_type
- product_name

Recommended fields:

- custody_model
- yield_source
- risk_notes

### 9.6 terms_risk

Represents asset ownership / terms interpretation risk.

Required fields:

- platform_id
- terms_status
- notes
- confidence

Recommended fields:

- asset_ownership_interpretation
- affected_product
- source_evidence_id

---

## 10. Enums

### platform type

- cefi_lending
- crypto_interest_account
- centralized_yield
- borrow_lend_platform
- exchange_earn
- defi_lending
- yield_aggregator
- structured_yield
- unknown

### platform status

- active
- limited
- withdrawals_suspended
- restructuring
- bankrupt
- acquired
- rebranded
- operations_ended
- inactive
- unknown

### failure_reason

- insolvency
- liquidity_crisis
- counterparty_exposure
- misconduct
- regulatory_action
- market_collapse
- risk_mismanagement
- voluntary_shutdown
- acquisition
- restructuring
- unknown

### event_type

- launched
- yield_program_started
- yield_rate_changed
- deposits_suspended
- withdrawals_suspended
- bankruptcy_filed
- restructuring_started
- restructuring_completed
- asset_sale_announced
- asset_sale_completed
- customer_repayment_started
- customer_repayment_completed
- regulatory_action
- lawsuit
- operations_ended
- rebranded
- acquired
- other

### source_type

- official_statement
- court_document
- bankruptcy_document
- regulatory_notice
- news_article
- archive_capture
- database_reference
- community_reference
- other

### outcome_status

- full_repayment
- partial_repayment
- claims_ongoing
- no_recovery
- unknown
- not_applicable

### terms_status

- customer_owned
- platform_owned
- unclear
- varies_by_product
- unknown

### reliability / confidence

- high
- medium
- low

### official_url_status

- live_verified
- live_unverified
- dead_domain
- redirected
- repurposed
- unsafe
- unknown

---

## 11. Pages

### 11.1 Home `/`

Purpose: registry entry point.

Required sections:

- short project explanation
- summary metrics
- search
- filters
- registry table

Primary table columns:

- Name
- Type
- Status
- Failure reason
- Customer outcome
- Years
- Domain
- Archive

### 11.2 Platform detail `/platform/[slug]/`

Purpose: full dossier for one platform.

Required sections:

- hero / identity
- meta facts
- URL history
- product profile
- failure chain
- customer outcome
- terms risk
- event timeline
- evidence dossier
- uncertainty notes
- related platforms
- correction link

Each detail page must answer:

- What happened?
- Why did it fail or change?
- What happened to customer funds?
- What evidence supports this?
- What remains uncertain?

### 11.3 Outcomes `/outcomes/`

Purpose: cross-platform customer outcome comparison.

Primary groups:

- full repayment
- partial repayment
- claims ongoing
- no recovery
- unknown

This is one of the main differentiation pages.

### 11.4 Bankruptcy cases `/bankruptcy-cases/`

Purpose: summarize bankruptcy and restructuring-heavy cases.

Initial examples:

- Celsius
- BlockFi
- Voyager
- Genesis
- Haru Invest
- CoinLoan
- Vauld
- Hodlnaut

### 11.5 Methodology `/methodology/`

Purpose: definitions, limits, source quality, and classification rules.

Must cover:

- scope
- counting unit
- status definitions
- failure reason definitions
- customer outcome definitions
- terms risk definitions
- evidence reliability
- URL handling
- uncertainty
- correction process
- DeFi expansion rule

### 11.6 About `/about/`

Purpose: explain what the project is, why it exists, and what it does not do.

### 11.7 Later pages

Possible later pages:

- `/failures/`
- `/terms-risk/`
- `/timeline/`
- `/stats/`

---

## 12. Search and filters

Search targets:

- canonical_name
- aliases
- official_domain_original
- platform type
- status
- failure_reason
- outcome_status
- product_type

Filters:

- status
- failure_reason
- outcome_status
- product_type
- country_or_origin
- terms_status

---

## 13. URL handling

Rules:

- preserve original URLs as historical records
- prefer archive URLs for ended, bankrupt, or repurposed platforms
- do not actively link unsafe or repurposed domains as normal outbound links
- show URL status separately from platform status
- use archive-first behavior for ended platforms

---

## 14. Correction workflow

Public correction routes:

- Google Form
- GitHub Issues

Detail pages should use the label:

- Report this entry

A good correction should include:

- platform name
- page URL
- field or claim that appears wrong
- source links
- short explanation

---

## 15. Record completion standard

CYA prioritizes depth over count.

### 15.1 Standard record

A standard public record should include:

- platform entity
- 3+ events
- 3+ evidence items
- customer outcome, or an explicit unknown explanation
- terms risk, or an explicit unknown explanation
- what happened summary
- customer funds summary
- uncertainty summary

### 15.2 Major case record

Applies to major failures and restructuring cases.

Minimum requirements:

- 5+ events
- 5+ evidence items
- customer outcome
- terms risk
- bankruptcy or restructuring section
- failure chain section
- uncertainty notes

### 15.3 Incomplete records

Do not publish records that only contain:

- name
- website
- single database reference
- single article
- current listing only

Thin candidates should remain pending or needs_research.

---

## 16. Technology stack

v0 stack:

- Cloudflare Pages
- GitHub integration
- static JSON
- no database
- no backend
- no authentication
- zero operating cost

v1 may add:

- GitHub Actions validation
- candidate staging
- manual review PR flow

Canonical JSON must not be directly auto-modified by ingestion.

---

## 17. MVP launch criteria

Scope:

- CeFi lending / yield only

Minimum dataset:

- 20-30 platforms
- 80-150 events
- 100-200 evidence records

Required pages:

- `/`
- `/platform/[slug]/`
- `/outcomes/`
- `/bankruptcy-cases/`
- `/methodology/`
- `/about/`

Required depth:

- customer outcomes for major failures
- terms risk for major failures
- failure chain for major failures
- bankruptcy or restructuring information for major failures

---

## 18. Canonical expansion rule

Even when the archive expands beyond CeFi, the four pillars remain mandatory:

- Customer Outcome
- Terms Risk
- Failure Chain
- Evidence Dossier

The project must remain a historical registry.
