# Crypto Yield Archive

Crypto Yield Archive (CYA) is an evidence-based historical registry of crypto lending, Earn, and yield platforms.

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

## v0 Scope

v0 focuses only on CeFi lending and yield platforms.

Included in v0:

- CeFi lending platforms
- crypto interest accounts
- centralized yield platforms
- borrowing/lending services

Not included in v0:

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

## Current stack

The project uses Astro as a static site generator with repo-local JSON data.

- Astro static build
- Cloudflare Pages target
- GitHub repository
- static JSON data files
- no database in v0
- no backend in v0
- no authentication in v0

## Local commands

```bash
npm install
npm run validate
npm run build
npm test
```

`npm test` runs validation and the Astro build.

## Data files

Canonical data currently lives in:

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
- `/source-quality/`
- `/methodology/`
- `/about/`

## Cloudflare Pages settings

Use these after the Astro build is confirmed:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Production branch: main
```

## Current status

Astro migration stage. No production launch claim.
