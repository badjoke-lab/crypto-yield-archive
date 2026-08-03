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
- historically significant Earn or staking products when they have major regulatory, suspension, outcome, or failure relevance

Not prioritized in the initial registry scope:

- generic Exchange Earn products without major historical events
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
npm run quality
npm run build
npm test
```

`npm test` runs validation and the Astro build.

## Development policy

Before starting or resuming development work, read:

```text
docs/development-policy.md
docs/record-growth-execution-roadmap.md
```

`docs/development-policy.md` defines repository validation, preview, merge, production verification, push discipline, and interruption recovery.

## Data files

Registry data currently lives in base files plus batch files under `data/`.

Core groups:

```text
data/platforms*.json
data/events*.json
data/evidence*.json
data/outcomes*.json
data/products*.json
data/terms-risk*.json
```

Current batch files are wired through:

```text
src/lib/data.ts
scripts/validate-data.mjs
scripts/data-quality-report.mjs
```

When adding a new batch, update all three files so the site, validator, and quality report read the same dataset.

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
- `/corrections/`
- `/robots.txt`
- `/sitemap.xml`

## v0 readiness

The v0 readiness checklist is maintained at:

```text
docs/v0-readiness-checklist.md
```

## Deployment

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```