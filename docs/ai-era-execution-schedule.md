# CYA AI-era Execution Schedule

Status: roadmap addendum

## Order
1. Continue current approved CYA development, record growth, quality and monitoring work; do not replace it.
2. Audit representative failed/impaired records for missing post-failure claims, restructuring, recovery and distribution evidence; create a bounded backlog.
3. Define lifecycle/outcome fields only where the existing model cannot represent reviewed facts; migrate conservatively.
4. Ship deterministic per-record machine-readable JSON and validation.
5. Strengthen structured filters/search around lifecycle/outcome fields.
6. Implement Compare focused on claims/recovery/outcome differences.
7. Implement Stats for failure/outcome/recovery timelines and coverage/data quality.
8. Run reviewed lifecycle-follow-up batches on high-value records.
9. Only then evaluate natural-language-to-filter translation; it may not bypass canonical filters or evidence.

## Stage gate
For each stage: specification -> implementation PR -> tests/CI green -> merge -> production verification where applicable -> documentation/status sync.

## Mandatory continuation rule
Every future CYA work thread must read the current development policy/methodology plus `ai-era-registry-spec.md` and this schedule before selecting work.