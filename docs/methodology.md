# Methodology

Status: draft foundation

Crypto Yield Archive is a historical registry. It is not a live ranking, APY comparison, investment recommendation, or real-time dashboard.

## Counting unit

v0 counts platform entities. It does not count individual products, pools, vaults, or chain deployments as separate records.

## v0 scope

Included:

- CeFi lending platforms
- crypto interest accounts
- centralized yield platforms
- borrowing/lending services

Excluded from v0:

- Exchange Earn products
- DeFi lending protocols
- yield aggregators
- pool-level records
- deployment-level records
- real-time APY history
- real-time TVL

## Expansion rule

The archive may expand later, but the order is fixed:

1. CeFi lending/yield
2. event-significant Exchange Earn
3. major DeFi lending/yield protocols
4. pool/vault/deployment layer

DeFi is not excluded. It is deferred until the CeFi classification model is stable.

## Customer outcome

Customer outcome records what happened to user funds after a platform changed, halted, restructured, or ended.

Possible values:

- full_repayment
- partial_repayment
- claims_ongoing
- no_recovery
- unknown
- not_applicable

Unknown values should explain what remains unknown.

## Terms risk

Terms risk records how platform terms or legal interpretation treated deposited assets.

Possible values:

- customer_owned
- platform_owned
- unclear
- varies_by_product
- unknown

## Failure chain

A failure chain records the sequence of meaningful events that led to a platform's change, halt, bankruptcy, restructuring, acquisition, or end state.

## Evidence

Evidence supports claims.

Preferred sources:

- official statements
- court documents
- bankruptcy documents
- regulatory notices
- archived pages
- reputable reporting

## URL handling

Original URLs are preserved as historical records. Archived URLs should be preferred for ended or repurposed platforms. Unsafe or repurposed domains should not be treated as normal outbound links.

## Uncertainty

The archive should preserve uncertainty instead of forcing guesses. Low-confidence records should be marked clearly and improved later.

## Corrections

A good correction should include:

- platform name
- CYA page URL
- what appears wrong
- source links
- short explanation
