# CYA SEO hardening verification

This change set adds reviewed social metadata, structured data, sitemap last-modified dates, and a dedicated build-output SEO validation gate.

The SEO workflow must build the Astro site before running `scripts/check-seo.mjs`; the checker validates generated files under `dist/` and must never run against a missing build output directory.

Validation scope:

- canonical URL and English hreflang on generated HTML
- JSON-LD presence
- public data discovery links
- production origin in sitemap and robots output
- no stale 20-platform counts in public output
- Cloudflare preview deployment before merge
