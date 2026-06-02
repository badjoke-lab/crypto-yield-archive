# Crypto Yield Archive Specification

Status: draft foundation

Crypto Yield Archive is an evidence-based historical registry for crypto lending, Earn, and yield platforms.

## Mission

The project records what happened after users deposited assets into crypto yield platforms. It is not an APY ranking site, investment recommendation site, trading tool, real-time TVL dashboard, or news-speed product.

## v0 scope

v0 is limited to CeFi lending and yield platforms:

- crypto lending platforms
- crypto interest accounts
- centralized yield platforms
- borrowing and lending services

v0 does not include Exchange Earn, DeFi lending, yield aggregators, pool-level records, chain deployments, real-time APY, or real-time TVL.

## Expansion order

The long-term coverage order is fixed:

1. CeFi lending and yield
2. Event-significant Exchange Earn
3. Major DeFi lending and yield protocols
4. Pool, vault, and deployment-level records

DeFi is not excluded, but it is not part of v0.

## Core differentiators

CYA competes on depth rather than count:

- customer outcome
- terms risk
- failure chain
- evidence dossier
- bankruptcy and restructuring timeline

## Data model

Canonical data files:

- data/platforms.json
- data/events.json
- data/evidence.json
- data/outcomes.json
- data/products.json
- data/terms-risk.json

Core records:

- platform_entity
- platform_event
- platform_evidence
- customer_outcome
- product_profile
- terms_risk

## Pages

v0 pages:

- /
- /platform/[slug]/
- /outcomes/
- /bankruptcy-cases/
- /methodology/
- /about/

Later pages:

- /failures/
- /terms-risk/
- /timeline/
- /stats/

## Record completion standard

A standard public record should have:

- platform entity
- at least 3 events
- at least 3 evidence items
- customer outcome, or a clear unknown explanation
- terms risk, or a clear unknown explanation
- what happened summary
- customer funds summary
- uncertainty summary

Major cases should have:

- at least 5 events
- at least 5 evidence items
- customer outcome
- terms risk
- bankruptcy or restructuring section
- failure chain section
- uncertainty notes

Thin records with only a name, website, or single database reference should not be published.

## Technology

v0 uses zero-cost static infrastructure:

- Cloudflare Pages
- GitHub integration
- static JSON
- no database
- no backend
- no authentication

## Non-goals

CYA must not become:

- APY ranking
- yield discovery
- real-time dashboard
- investment advice
- trading tool
