# Crypto Yield Archive

Crypto Yield Archive (CYA) is an evidence-based historical registry of crypto lending, Earn, and yield platforms.

Public site:

```text
https://cya.badjoke-lab.com/
```

It records what happened after users committed assets to crypto lending and yield systems: launches, withdrawal or market suspensions, exploits, insolvencies, bankruptcies, restructurings, repayments, recoveries, acquisitions, shutdowns, and customer or lender outcomes.

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
- a record of lending/yield platform failures, incidents, restructurings, recoveries, and outcomes
- a way to compare what happened to user funds across custodial and non-custodial crypto yield systems

## Scope

CYA covers historically significant crypto lending and yield systems across both CeFi and DeFi.

Included:

- CeFi lending platforms
- crypto interest accounts
- centralized yield platforms
- borrowing/lending services
- DeFi lending protocols
- DeFi lending markets and historically significant yield aggregators
- historically significant Earn or staking products when they have major regulatory, suspension, exploit, recovery, outcome, or failure relevance

Architecture is distinct from product type. Canonical platform records may explicitly identify `cefi`, `defi`, `hybrid`, or `unknown` architecture, while the platform `type` records the product/system class such as `cefi_lending`, `defi_lending`, or `centralized_yield`.

DeFi records are still platform/protocol-level by default. Pool-, market-, chain-deployment-, or contract-level records are added only when needed to explain a historically significant event; they are not used for indiscriminate inventory growth.

Not prioritized:

- generic Exchange Earn products without major historical events
- generic staking/token reward programs without historically significant access, exploit, regulatory, failure, or outcome events
- pool-level inventory without historical significance
- chain deployments as standalone records
- real-time APY data

## Core data pillars

- platform entity
- platform event
- platform evidence
- customer/lender outcome
- product profile
- terms risk

For DeFi, event records may additionally carry network, exploit amount, bad debt, protocol pause, oracle/price manipulation, emergency governance, contract migration, and recovery context when supported by evidence.

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
