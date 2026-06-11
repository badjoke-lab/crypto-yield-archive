# Production verification

This document defines the non-visual production checks for Crypto Yield Archive.

The purpose is to confirm that Cloudflare Pages is serving the expected production generation without relying on manual visual inspection.

## Build-output check

Run locally or in CI:

```bash
npm run test
```

This runs:

```bash
npm run validate
npm run quality
npm run build
npm run check:build-output
```

The build-output check verifies that the static build contains:

```text
dist/index.html
dist/version.json
dist/data/manifest.json
dist/llms.txt
dist/ai.txt
dist/source-quality/index.html
dist/stats/index.html
dist/timeline/index.html
```

It also verifies that:

- `version.json` has the expected design generation marker.
- `version.json` and `data/manifest.json` have matching record counts.
- `llms.txt` and `ai.txt` contain the expected registry routes.

## Production smoke check

Run after deployment:

```bash
npm run check:production
```

By default this checks:

```text
https://cya.badjoke-lab.com/version.json
https://cya.badjoke-lab.com/data/manifest.json
```

To test another deployed origin:

```bash
CYA_BASE_URL=https://example.pages.dev npm run check:production
```

## Expected production generation

The current expected marker is:

```text
editorial_registry_2026_06_10
```

The current expected verification marker is:

```text
cya_editorial_registry_redesign_complete
```

If production does not return these values, the live site is serving an older or incorrect build.

## Machine-readable endpoints

The following endpoints are part of the public production contract:

```text
/version.json
/data/manifest.json
/llms.txt
/ai.txt
```

Do not remove these without updating the CI checks and this document.
