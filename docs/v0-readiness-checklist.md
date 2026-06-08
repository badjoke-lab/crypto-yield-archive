# CYA v0 readiness checklist

Crypto Yield Archive has reached the first minimum coverage target for a v0 review pass.

This checklist is for release-readiness verification before treating the public site as a v0 historical registry rather than only a seed dataset.

## Current expected baseline

After batch 10 is loaded, the expected minimum baseline is:

```text
platforms: 20+
events: 80+
outcomes: every platform has one outcome record
products: every platform has at least one product record
terms-risk: every platform has one terms-risk record
```

The site may still need additional records before broader promotion, but this is enough for a first public-readiness pass.

## Required commands

Run these before merging release-prep or data PRs:

```bash
npm run validate
npm run quality
npm run build
npm test
```

`npm test` must pass on GitHub Actions.

## Core page checks

Confirm these pages build and render:

```text
/
/platform/celsius/
/platform/nexo-earn-interest-product/
/outcomes/
/failures/
/terms-risk/
/timeline/
/stats/
/source-quality/
/methodology/
/about/
/corrections/
/sitemap.xml
/robots.txt
```

## Data integrity checks

Before v0 release, confirm:

- no duplicate platform IDs
- no duplicate slugs
- no duplicate event IDs
- no duplicate evidence IDs
- every event references an existing platform
- every evidence record references an existing platform
- every event-linked evidence record references an existing event
- every outcome references an existing platform
- every product references an existing platform
- every terms-risk record references an existing platform
- every `source_evidence_id` in terms-risk resolves to an evidence record

These checks are enforced by `scripts/validate-data.mjs`.

## Quality review checks

Use `npm run quality` to review:

- low reliability evidence
- low confidence platforms
- low confidence events
- unknown or ongoing outcomes
- unknown terms-risk records
- platforms with fewer than three evidence records

Low or unknown values are allowed when historically honest, but they should be intentional rather than accidental.

## Public positioning checks

The public site must continue to avoid:

- APY rankings
- investment recommendations
- claims that active Earn products are safe
- implying that regulatory product changes are platform collapses
- implying uniform customer outcomes across all jurisdictions or claim classes

CYA should remain an evidence-first historical registry.

## Next coverage targets

After v0 readiness, the next data pass should prioritize event-significant yield platforms such as:

```text
Midas Investments
Yield App
Freeway
Finblox
Stablegains
Babel Finance
Zipmex Earn context
```

Each new platform batch should include:

- platform record
- event records
- evidence records
- outcome record
- product record
- terms-risk record
- loader and validation wiring
