# CYA candidate staging ledger

This directory contains internal research staging only. It is not canonical registry data and must not be exposed through the public site, public manifest, or machine-readable production endpoints.

## Files

- `cya-candidates.json`: active research queue.
- `cya-consumed.json`: candidates promoted into reviewed canonical batches.
- `cya-rejected.json`: candidates removed from the active queue with a documented reason.

## Candidate shape

```json
{
  "candidate_id": "cya_candidate_000001",
  "canonical_name": "Example Platform",
  "aliases": [],
  "domain": null,
  "country_or_origin": null,
  "platform_type_guess": null,
  "status_guess": null,
  "major_event": null,
  "primary_sources": [],
  "secondary_sources": [],
  "duplicate_check": {
    "checked_at": null,
    "matched_platform_ids": [],
    "notes": null
  },
  "decision": "needs_research",
  "notes": null,
  "first_seen_at": "YYYY-MM-DD",
  "last_reviewed_at": null
}
```

## Allowed decisions

```text
add_now
needs_research
duplicate
out_of_scope
insufficient_evidence
already_recorded
```

## Promotion rule

Moving a candidate to `cya-consumed.json` does not itself publish a record. Publication requires a separate reviewed pull request that adds valid platform, event, evidence, outcome, product, and terms-risk records under `data/`.

## Rejection rule

Each rejected entry must preserve the candidate identity, final decision, reason, and review date. Do not silently delete rejected candidates because the rejection history prevents repeated duplicate research.
