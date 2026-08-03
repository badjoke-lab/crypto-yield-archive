# CYA canonical public data contract

The reviewed JSON arrays under `data/` are the source of truth.

Public HTML, statistics, sitemap entries, version metadata, manifest metadata, and canonical JSON datasets are generated from the same build.

Public datasets:

- `/data/platforms.json`
- `/data/events.json`
- `/data/evidence.json`
- `/data/customer-outcomes.json`
- `/data/outcomes.json` (compatibility alias)
- `/data/products.json`
- `/data/terms-risk.json`

Every dataset declares `schema_version`, `data_schema_version`, `canonical_origin`, `canonical_only`, `generated_at`, build metadata, record count, and records.

Customer outcomes are point-in-time records. Public outcome records include an `as_of` date and scope dimensions for product names, claim classes, and jurisdictions. Empty scope arrays mean that the reviewed record does not yet specify that dimension. They do not mean that an outcome applies uniformly to every product, jurisdiction, or claim class.

`partial_repayment`, `full_repayment`, and `claims_ongoing` must not be reduced to one universal platform recovery number without source support for that exact scope.

`data-staging/` is excluded from public canonical datasets. Candidate queues, internal monitoring, private notes, and unreviewed drafts are not public records.
