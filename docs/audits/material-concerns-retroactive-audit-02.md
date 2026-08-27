# CYA material concerns retroactive audit — executable full-corpus pass

Status: implementation in progress
Parent: #323
Spec: `docs/material-concerns-and-retroactive-audit-spec.md`

## Purpose

Pass 01 defined the audit dimensions but did not enumerate every canonical platform. This pass closes that implementation gap by making full-corpus enumeration part of the repository audit command.

`node scripts/material-concerns-retroactive-audit.mjs` discovers every canonical platform file and classifies all current platforms across the eight required material-concern dimensions:

1. principal guarantee / explicit lack of guarantee;
2. material yield history and promotions;
3. disclosed source of yield;
4. terms / ownership / segregation / priority risk;
5. withdrawal restrictions or suspensions;
6. regulatory actions;
7. insolvency / failure chain;
8. customer outcome / recovery.

Each dimension must resolve to `derivable`, `research_required`, or `not_applicable`. The executable audit intentionally defaults unresolved historical questions to `research_required`; absence of a matching event or evidence string is never converted into a favorable conclusion.

## CI gate

`npm run audit` now includes the full-corpus material-concerns audit. A platform cannot silently fall outside the audit enumeration, and none of the eight dimensions may be left without a valid classification.

The script reports per-dimension totals and a platform-level research queue. `--json` emits the full row set for review and correction-batch planning.

## Boundary

This executable pass establishes complete corpus coverage and produces the research queue. It does not itself prove unresolved facts or close #323. `research_required` rows still require evidence review and, where necessary, canonical correction batches before the parent issue can close.
