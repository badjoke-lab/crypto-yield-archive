# Crypto Yield Archive

Crypto Yield Archive (CYA) is an evidence-based historical registry of crypto lending, Earn, and yield platforms.

Public site:

```text
https://cya.badjoke-lab.com/
```

It records what happened after users deposited assets into yield platforms: launches, withdrawal suspensions, insolvencies, bankruptcies, restructurings, repayments, acquisitions, shutdowns, and customer outcomes.

## Positioning

CYA is not:

- an APY comparison site
- a yield ranking site
- an investment recommendation site
- a real-time TVL dashboard
- a trading tool
- a news-speed product

CYA is:

- a historical registry
- an evidence-first archive
- a record of platform failures, restructurings, and outcomes
- a way to compare what happened to customer funds across crypto yield platforms

## Scope

CYA focuses on CeFi lending and yield platforms.

Included:

- CeFi lending platforms
- crypto interest accounts
- centralized yield platforms
- borrowing/lending services

Not prioritized in the initial registry scope:

- Exchange Earn products
- DeFi lending protocols
- yield aggregators
- pool-level records
- chain deployments
- real-time APY data

## Core data pillars

- platform entity
- platform event
- platform evidence
- customer outcome
- product profile
- terms risk

## Stack

The project uses Astro as a static site generator with repository-local JSON data.

- Astro static build
- Cloudflare Pages
- static JSON data files

## Local commands

```bash
npm install
npm run validate
npm run build
npm test
```

`npm test` runs validation and the Astro build.

## Data files

Registry data currently lives in:

```text
data/platforms.json
data/events.json
data/events-batch-03.json
data/evidence.json
data/evidence-batch-03.json
data/outcomes.json
data/products.json
data/terms-risk.json
```

## Pages

Astro generates:

- `/`
- `/platform/[slug]/`
- `/outcomes/`
- `/bankruptcy-cases/`
- `/failures/`
- `/terms-risk/`
- `/timeline/`
- `/stats/`
- `/source-quality/`
- `/methodology/`
- `/about/`
- `/robots.txt`
- `/sitemap.xml`

## Deployment

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```
