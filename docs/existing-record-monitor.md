# CYA existing-record monitoring

Status: Phase 7 operating specification  
Scope: the canonical CYA platform registry

## Purpose

The existing-record monitor is a review-only maintenance layer for already published CYA records. It looks for records that may need human/AI review; it does not decide new canonical facts.

## Schedule

`.github/workflows/existing-record-monitor.yml` runs weekly and can also be started manually.

The scheduled run uses network mode and writes only workflow artifacts:

```text
artifacts/existing-record-monitor/monitoring-report.json
artifacts/existing-record-monitor/monitoring-summary.md
```

The workflow does not commit those files.

## Checks

The monitor currently checks:

- missing or stale `last_verified_at`
- thin evidence coverage
- missing event history
- `claims_ongoing` outcomes without a claim-process URL
- official URL reachability
- evidence URL reachability
- claim-process URL reachability
- official-domain redirects to a different domain

Network results are signals, not canonical conclusions. HTTP blocking, rate limits, transient outages and redirects can all require manual interpretation.

## Severity

```text
high
  missing verification date
  verification older than 365 days
  fewer than 2 evidence records
  missing event history
  HTTP 404 / 410 on a monitored URL

medium
  verification older than 180 days
  exactly 2 evidence records
  claims ongoing without claim_process_url
  official-domain redirect change
  other unreachable URL state

low
  HTTP 403 / 429 probe blocking or rate limiting
```

Severity is a review priority only. It is not a platform-risk score.

## Canonical safety boundary

The monitoring script hashes all canonical JSON under `data/` before and after the run. A changed digest fails the run.

The monitor must never automatically change:

- platform `status`
- `failure_reason`
- customer `outcome_status`
- recovery percentages
- launch or end dates
- custody or ownership interpretation
- canonical events
- canonical evidence
- official URL status

A monitoring finding must be investigated and promoted through a normal reviewed PR if a canonical update is justified.

## Commands

Offline structural monitoring:

```bash
npm run monitor:records
```

Network monitoring:

```bash
npm run monitor:records:network
```

Fixture tests:

```bash
npm run test:monitor
```

The fixture test covers stale verification, thin evidence, missing claim-process links and dead URL detection without depending on the public internet.

## Phase 7 completion criteria

Phase 7 is operational when:

1. fixture tests pass in normal repository CI;
2. the weekly workflow is merged on `main`;
3. a manual or scheduled network run succeeds;
4. the run proves canonical data remained unchanged;
5. JSON and Markdown reports are uploaded as artifacts;
6. detected findings remain review-only.

Only after these gates are satisfied should the roadmap move from Phase 7 into Phase 8 registry growth.
