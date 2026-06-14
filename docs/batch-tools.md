# CYA batch tools

## Candidate audit

```bash
npm run candidates:check
```

Validates the three non-public candidate ledgers under `data-staging/candidates/`.

The command checks:

- required candidate identifiers and names
- allowed decision values
- duplicate candidate IDs
- duplicate normalized candidate names
- possible name, alias, or domain matches against canonical platforms

Possible canonical matches are warnings for review. Invalid ledger structure is an error.

## Next identifiers

```bash
npm run batch:next-ids
```

Reports:

- latest batch number
- next batch number
- next platform ID
- next event ID
- next evidence prefix
- current evidence record count

Run this before opening a new record batch. The output is an aid only; the normal validator remains authoritative.

## Public-data boundary

These tools read the canonical registry and internal candidate ledger. They do not promote candidates, create public records, or modify files automatically.
