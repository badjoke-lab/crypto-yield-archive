# CYA public surface audit

Baseline: latest main after PR #39.

Canonical totals are 32 platforms, 158 events, 214 evidence records, 32 customer outcomes, 50 product profiles, and 32 terms-risk records.

The historical value `20 platforms` corresponds to the state created by PR #6, which added `cya_plat_000020`. Current source search found no hard-coded `20 platforms`, `Platforms: 20`, or JSON platform count of 20.

The stale answer was therefore reachable through a historical production/search snapshot or an immutable Cloudflare deployment from that period, not through current canonical source files.

The corrective PR adds public canonical datasets, shared build metadata, complete counts, scoped outcome dates, cross-surface CI, stale-count detection, legacy redirects, Pages-origin canonicalization, and production/preview smoke checks.
