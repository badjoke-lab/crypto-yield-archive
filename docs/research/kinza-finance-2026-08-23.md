# Kinza Finance — 2026-08-23 limited-operation signal

Status: review candidate
Observed: 2026-08-23

## Observed state

A current Kinza Finance market UI screenshot shows a notice stating that new supply and borrow functions are disabled while repay and withdraw functions remain open.

This supports a limited-operation / wind-down-like lifecycle signal, but does **not** by itself support classifying Kinza Finance as dead or fully shut down.

## Safe interpretation

- New supply: disabled
- New borrow: disabled
- Repay: available
- Withdraw: available
- Full shutdown: not established
- Dead status: not established

## CYA handling

Treat this as a candidate lifecycle/status-change event requiring evidence review and canonical schema mapping. Do not force a terminal status until an official shutdown or equivalent source is verified.

## Source notes

Primary observed artifact: user-supplied screenshot captured 2026-08-23 showing the Kinza Finance market notice.

Additional source verification should prioritize Kinza Finance official announcements / UI and reliable protocol-state sources before canonical promotion.
