# SEO Indexation Recovery

Baseline captured on 2026-09-10 from Google Search Console / GSC Wizard:

- Search Console property: `https://cya.badjoke-lab.com/`
- Sitemap resubmitted and fetched successfully: 156 URLs, 0 warnings, 0 errors
- Sitemap indexed count at baseline: 0
- Search Console performance: 0 Google clicks / 0 Google impressions in the latest 28- and 90-day windows
- URL Inspection samples showed both `Crawled - currently not indexed` and `URL is unknown to Google`
- GA4 showed 109 sessions / 58 active users over the inspected 90-day window, with all observed organic sessions attributed to Bing rather than Google

## Recovery sequence

1. Keep sitemap, canonical URLs, robots directives, and public machine-readable routes in sync through CI.
2. Keep all canonical HTML pages directly indexable and provide stable metadata, favicon, structured organization identity, and bounded meta descriptions.
3. Track all sitemap URLs in the GSC Wizard Indexing Tracker and use URL Inspection to distinguish unknown, crawled-not-indexed, and indexed states.
4. Improve discovery through meaningful internal links and the BadJoke-Lab project network rather than bulk manual index requests.
5. After deployment, request indexing only for a small representative set of high-value URLs and measure state transitions before expanding.
6. Treat impressions as the gate for ranking/CTR work; do not optimize CTR while Google impressions remain zero.

This document records an operational baseline. It does not claim that metadata changes alone cause indexing, and no fabricated publication dates should be introduced to satisfy schema validators.
