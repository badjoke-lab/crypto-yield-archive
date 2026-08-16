# CYA AI-era Execution Schedule

Status: Phase 1 complete / maintenance continues

## Order and current status
1. **Complete** — Continue current approved CYA development, record growth, quality and monitoring work; do not replace it.
2. **Complete** — Audit representative failed/impaired records for missing post-failure claims, restructuring, recovery and distribution evidence; create a bounded backlog.
3. **Complete** — Define lifecycle/outcome fields only where the existing model cannot represent reviewed facts; migrate conservatively.
4. **Complete** — Ship deterministic per-record machine-readable JSON and validation. Implemented in PR #265 at `/data/platform/{slug}.json`.
5. **Complete** — Strengthen structured filters/search around lifecycle/outcome fields. Completed through PR #266, including recovery type, lifecycle dates, jurisdiction/claims-related fields and evidence reliability alongside the existing registry filters.
6. **Complete** — Implement Compare focused on claims/recovery/outcome differences. Implemented in PR #264 at `/compare/`.
7. **Complete** — Implement Stats for failure/outcome/recovery timelines and coverage/data quality. Completed through PR #267.
8. **Complete for Phase 1** — Run reviewed lifecycle-follow-up batches on high-value records. The bounded follow-up pass covered representative recovery/outcome cases including AAX, BlueBenx, FTX Earn, BTCJam, BitConnect, Stablegains, Finblox, Pillow and Flint, with detector corrections where missing-stage signals were false positives. Further lifecycle follow-up remains normal maintenance, not a blocker for the next Ledger Series phase.
9. **Deferred to Ledger Series Phase 10** — Natural-language-to-filter translation is not a CYA Phase 1 closure requirement. If evaluated later, it may not bypass canonical filters or evidence.

## CYA Phase 1 closeout

CYA Phase 1 is complete as of main commit `4447dfe495f214e7b5868a11fa936235b84351c2`, subject to normal ongoing monitoring and record maintenance.

Closeout evidence:
- Compare: PR #264 merged.
- Deterministic record-level JSON: PR #265 merged.
- Structured lifecycle/recovery/date/evidence filters: PR #266 merged.
- Lifecycle/recovery/data-quality Stats expansion: PR #267 merged.
- Latest main repository validation workflows are green.
- Latest main `Production Surface Check` is green for commit `4447dfe495f214e7b5868a11fa936235b84351c2`.
- Representative lifecycle/outcome follow-up was completed before closeout; unresolved future record changes stay in monitoring/maintenance rather than blocking the Series roadmap.

## Next Ledger Series phase

The next horizontal roadmap task is **BIR Phase 2: post-incident lifecycle strengthening**. CYA record additions and lifecycle monitoring continue only as the normal vertical maintenance track and must not displace BIR Phase 2 work unless a high-severity correction requires intervention.

## Stage gate
For each stage: specification -> implementation PR -> tests/CI green -> merge -> production verification where applicable -> documentation/status sync.

## Mandatory continuation rule
Every future CYA work thread must read the current development policy/methodology plus `ai-era-registry-spec.md` and this schedule before selecting work. When the horizontal Ledger Series roadmap is being executed, completed CYA Phase 1 work must not be reopened merely because the maintenance queue contains additional records.