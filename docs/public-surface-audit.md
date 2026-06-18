# CYA public surface audit

Baseline: latest `main` after PR #39.

Current canonical totals:

- platforms: 32
- events: 158
- evidence: 214
- customer outcomes: 32
- product profiles: 50
- terms-risk records: 32
- claims ongoing: 13

The historical value `20 platforms` corresponds to the repository state created by PR #6, which added `cya_plat_000020`. No current source file contains a hard-coded `20 platforms`, `Platforms: 20`, or JSON platform count of 20.

The stale value was therefore reachable through a historical production/search snapshot, external cache, or Cloudflare deployment from that period, not through current canonical source files.

Cloudflare creates immutable commit previews and branch previews. The production `pages.dev` hostname redirects to the custom domain. Preview hosts remain available for review but return `X-Robots-Tag: noindex, nofollow, noarchive`; their robots file disallows crawling and their HTTP canonical link points to the corresponding custom-domain path.

The corrective PR adds:

- public canonical JSON for every record group
- shared build metadata
- complete record and derived counts
- point-in-time customer outcome scope
- HTML and JSON cross-surface CI
- stale 20-count detection
- legacy route redirects
- production Pages-origin canonicalization
- preview noindex controls
- production and branch-preview smoke checks
