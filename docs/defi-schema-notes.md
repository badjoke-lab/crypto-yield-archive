# CYA DeFi schema field notes

## Platform

- `type`: product/system class. `defi_lending` is the DeFi lending platform type.
- `architecture`: optional compatibility field during migration; allowed values are `cefi`, `defi`, `hybrid`, `unknown`.
- Any canonical `defi_lending` record must set `architecture` to `defi`.
- `networks`: optional array for chains/networks relevant to the platform record.

## Product

- `defi_lending_market` is available for lending-market product records.
- `defi_yield_aggregator` remains available for aggregator products.
- `networks` and `contract_addresses` may be used as optional arrays when evidence supports them.

## Event

DeFi-specific event types include:

- `exploit`
- `oracle_manipulation`
- `price_manipulation`
- `protocol_paused`
- `market_paused`
- `bad_debt_created`
- `emergency_governance_action`
- `contract_migration`
- `fund_recovery`

Optional event fields include `networks`, `exploit_amount_usd`, and `bad_debt_usd`.

Amounts remain evidence-backed observations, not inferred net-loss or recovery claims.
