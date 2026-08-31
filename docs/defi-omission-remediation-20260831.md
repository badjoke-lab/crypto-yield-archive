# DeFi omission remediation — 2026-08-31

Status: active correction lane

## Why this exists

CYA's initial CeFi-focused scope caused DeFi lending protocols to be deprioritized or rejected even when they had historically significant lending/yield lifecycle events. That boundary is being corrected.

This is not a Tectonic-only exception. The remediation covers both the current Tectonic incident and historical DeFi lending/yield omissions.

## Immediate priority

1. Keep the 2026-08-30 Tectonic exploit under immediate review while facts are still developing.
2. Do not delay time-sensitive incident capture until the historical backfill is complete.
3. Preserve preliminary wording for loss amount, root cause, recovery, and user/lender outcomes.
4. Require first-party and durable evidence before canonical promotion.

## Scope correction

CYA now accepts historically significant CeFi and DeFi lending/yield systems.

Architecture and product/system type remain separate concepts:

- architecture: `cefi`, `defi`, `hybrid`, `unknown`
- platform type examples: `cefi_lending`, `defi_lending`, `centralized_yield`, `yield_aggregator`

DeFi is not a reason by itself to reject a candidate.

## Backfill review

The historical review must include:

- candidates previously rejected or deprioritized solely because they were DeFi;
- historically significant DeFi lending protocols that were never entered into the candidate queue;
- major exploit, oracle/price manipulation, bad-debt, protocol-pause, emergency-governance, migration, shutdown, recovery, and lender/user-outcome events.

Goldfinch is the first confirmed scope-based rejection requiring re-review. Additional candidates must be discovered systematically rather than by fame or TVL ranking.

## Canonical safety

- `data/` remains canonical.
- Tectonic and backfill candidates remain staging-only until reviewed.
- No exploit amount, bad debt, recovery amount, user loss, insolvency, fraud, or final root cause may be inferred from preliminary reporting.
- Frozen or stranded attacker-controlled funds are not recovered funds unless later evidence establishes recovery.
- Pool/market/contract details are contextual substructure; they do not automatically become standalone platform records.

## Schema correction

The validator now supports:

- explicit platform `architecture` values;
- `defi_lending` platform type with `architecture=defi` enforcement;
- `defi_lending_market` product type;
- DeFi event types including exploit, oracle/price manipulation, protocol/market pause, bad debt, emergency governance, contract migration, and fund recovery;
- optional network, contract-address, exploit-amount, and bad-debt fields with basic structural validation.

Existing CeFi records remain valid during migration. New DeFi canonical records must use the explicit DeFi architecture/type distinction rather than being forced into `other`.
