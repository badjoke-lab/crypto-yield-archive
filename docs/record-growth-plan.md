# CYA record growth operating plan

## Purpose

This document defines the controlled process for expanding Crypto Yield Archive without lowering evidence quality or mixing unreviewed research into the public registry.

The public registry under `data/` remains canonical. Research candidates and machine-generated drafts must remain under `data-staging/` until a reviewer explicitly promotes them through a pull request.

## Current growth milestones

| Milestone | Platform target | Main objective |
| --- | ---: | --- |
| Foundation | 28 | Existing editorial registry, validation, CI, and machine-readable layer |
| Coverage checkpoint | 40 | Broader platform coverage followed by a full quality audit |
| Monitoring checkpoint | 60 | Candidate scanning, draft generation, and existing-record monitoring |
| First mature corpus | 100 | Large enough to support meaningful cross-platform historical comparison |

## Priority order

1. Clear stale pull requests and repository conflicts.
2. Establish a non-public candidate ledger.
3. Add batch scaffolding and duplicate checks.
4. Reach 40 platforms through reviewed batches.
5. Pause additions and audit all records.
6. Add candidate scanning and staging-only draft generation.
7. Reach 60 platforms while balancing platform types and outcomes.
8. Add weekly monitoring for existing records.
9. Continue toward 100 platforms.

## Candidate lifecycle

Every candidate must use one of these decisions:

- `add_now`: evidence and scope are sufficient for the next reviewed batch.
- `needs_research`: plausible candidate, but material facts remain unresolved.
- `duplicate`: already represented by an existing platform or product record.
- `out_of_scope`: does not fit the current CYA scope.
- `insufficient_evidence`: relevant, but reliable evidence is not currently sufficient.
- `already_recorded`: confirmed canonical record already exists.

The normal lifecycle is:

```text
candidate
  -> needs_research
  -> add_now
  -> consumed
```

A candidate may instead move to `rejected` with a documented reason. Rejected candidates may be reconsidered when new primary evidence becomes available.

## Required candidate fields

Each candidate entry should contain:

- `candidate_id`
- `canonical_name`
- `aliases`
- `domain`
- `country_or_origin`
- `platform_type_guess`
- `status_guess`
- `major_event`
- `primary_sources`
- `secondary_sources`
- `duplicate_check`
- `decision`
- `notes`
- `first_seen_at`
- `last_reviewed_at`

Guesses are research aids only. They must not be copied into canonical records without evidence review.

## Batch sizing

Use two to three platforms per pull request when the cases are structurally simple and well documented.

Keep one platform per pull request when a case involves:

- multiple legal entities or jurisdictions
- bankruptcy, restructuring, or claims distributions
- disputed ownership or custody terms
- uncertain recovery rates
- overlapping brands or successor platforms
- unusually large evidence sets

## Evidence requirements

Before promotion to canonical data:

1. Run name, alias, slug, and domain duplicate checks.
2. Prefer primary regulatory, court, administrator, or official platform sources.
3. Preserve archived URLs for dead or materially changed sites where available.
4. Separate platform status, failure reason, and customer outcome.
5. Mark unknown dates and outcomes explicitly rather than inferring precision.
6. Link every event and interpretation to evidence.
7. Run validation, quality checks, build, and tests before merge.

## Safety boundary

The following must never be published automatically:

- unverified candidates
- internal monitoring findings
- machine-generated status classifications
- unreviewed recovery estimates
- private notes
- unresolved allegations

Only reviewed canonical records under `data/` are public registry data.
