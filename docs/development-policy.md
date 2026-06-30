# CYA Development Policy

Status: fixed operating policy  
Project: Crypto Yield Archive (CYA)

## Purpose

This document defines how CYA changes are validated, previewed, merged, and verified in production.

Read this file at the start of each development task and whenever work resumes after an interruption.

## Core flow

```text
repository change
-> repository validation
-> optional deployment preview
-> merge to main
-> production deployment
-> production verification
```

Repository validation is the normal development gate. Deployment preview is used only when deployed runtime behavior must be confirmed.

## Repository validation

Required checks depend on the affected area and may include:

- JSON and schema validation
- duplicate and reference integrity checks
- canonical data safety checks
- derived count validation
- static build success
- generated HTML and JSON checks
- sitemap and robots checks
- canonical, hreflang, structured-data, and discovery-link checks
- stale output detection

Development may continue when repository validation succeeds.

## Deployment preview

Preview is required for:

- UI or layout changes
- route changes
- redirects
- response headers
- middleware or functions
- generated endpoint behavior
- deployment configuration

Preview is normally unnecessary for:

- canonical data additions that do not change rendering logic
- evidence-only changes
- documentation-only changes
- staging-only changes

Create a preview only after the change set is stable and repository validation is green.

## Production verification

After merge to `main`, verify the affected production surfaces.

Depending on scope, verify:

- home page
- affected listing and detail pages
- public JSON endpoints
- `/version.json`
- `/data/manifest.json`
- sitemap and robots
- redirects and response headers
- deployed commit and generated timestamp
- canonical and derived record counts

Production verification is the final release gate.

## Branch and pull-request rules

Use one branch and one pull request for one logical task.

Recommended branch groups:

```text
work-*    normal implementation
batch-*   canonical data batches
fix-*     corrective changes
audit-*   audits and consistency work
preview-* final deployment-preview validation
```

Do not create replacement pull requests only to trigger another deployment.

Do not move the same task across multiple branches unless the original branch is unusable.

## Standard task procedure

```text
1. Read this policy and the current execution roadmap.
2. Fetch current main and inspect open pull requests.
3. Confirm the task scope and affected files.
4. Make related changes as one coherent change set.
5. Run repository validation.
6. Fix detected issues in grouped corrections where practical.
7. Run deployment preview only when required.
8. Review the final diff.
9. Merge one pull request.
10. Verify production.
11. Update the execution roadmap and merge report.
```

## Push discipline

Avoid one push per small edit.

Before pushing:

- inspect the full affected area
- update implementation and checks together
- remove temporary files and placeholders
- review the complete diff

Normal target:

```text
initial implementation push
-> one grouped correction push if needed
-> final cleanup push only when necessary
```

## Change-type matrix

| Change type | Repository validation | Preview | Production verification |
| --- | --- | --- | --- |
| Documentation only | targeted checks | no | only when rendered publicly |
| Staging-only changes | required targeted checks | no | no |
| Canonical data only | required | normally no | required |
| Validator or build checks | required | normally no | required if public output changes |
| UI or page rendering | required | required | required |
| Route, redirect, header, middleware, function | required | required | required |
| Deployment configuration | required | required | required |

## Build-trigger scope

Deployment builds should be limited to files that can affect public output.

Typical build-relevant paths:

```text
src/**
public/**
data/**
functions/**
package.json
package-lock.json
astro.config.*
scripts that generate public output
```

Typical non-build paths:

```text
docs/**
data-staging/**
review/**
```

A path remains build-relevant when the site reads it during build.

## Workflow rules

- Repository CI is the normal pull-request gate.
- Preview checks are explicitly triggered or limited to preview branches.
- Production checks run after `main` deployment.
- Deployment checks report the URL, expected commit, observed commit, record counts, and failure reason.
- A failed deployment check must not cause duplicate pull requests or branch replacement.
- Work that does not depend on deployed runtime behavior may continue while deployment is pending.

## Recovery after interruption

```text
1. Read this policy.
2. Read docs/record-growth-execution-roadmap.md.
3. Fetch current main.
4. Inspect open and recently closed pull requests.
5. Inspect the current branch and latest head SHA.
6. Separate repository-validation status from deployment status.
7. Resume from the first incomplete gate.
```

Never assume an interrupted operation failed. Verify repository and pull-request state first.

## Required merge record

After each covered merge, record:

- pull request number
- merge commit
- change summary
- repository validation results
- preview result when required
- production verification result
- canonical counts when affected
- current roadmap position
- next logical task

## Related documents

- `docs/record-growth-execution-roadmap.md`
- `docs/record-growth-plan.md`
- validation workflows under `.github/workflows/`

Canonical data safety rules and the current repository state take precedence when instructions conflict.
