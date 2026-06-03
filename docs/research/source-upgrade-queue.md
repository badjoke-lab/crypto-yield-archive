# Source Upgrade Queue

Status: active source replacement queue

This file tracks source-quality gaps before data records are promoted to higher confidence.

## Rules

- Do not raise platform / event / outcome / terms-risk confidence until a stronger source is added.
- Low reliability evidence may remain only when it is clearly marked as pending or research lead.
- Prefer official statements, case portals, court documents, regulatory notices, archived original pages, or administrator / liquidator updates.
- Secondary reporting can support a claim, but should not be the only source for major customer-outcome claims.

## Hodlnaut

Current state:

- Platform halt: supported by Hodlnaut original statement candidate and Reuters coverage.
- Judicial management: supported by Reuters coverage.
- Liquidation / wind-up: currently supported by CoinDesk coverage.
- Terms-risk: unknown.
- Outcome: claims_ongoing.

Upgrade targets:

1. Add official / administrator / liquidator source for liquidation or wind-up.
2. Add direct judicial management / court-source reference if accessible.
3. Add liquidation process or creditor update source for customer outcome.
4. Replace or supplement secondary reporting for Terra / balance-sheet exposure only if direct court or administrator documents are available.

Do not do yet:

- Do not change terms_status from unknown.
- Do not invent recovery percentage.
- Do not raise outcome confidence above medium.

## Vauld

Current state:

- Platform halt: supported by Reuters coverage.
- Creditor protection / restructuring: supported by Reuters coverage.
- Nexo transaction path: supported by CoinDesk coverage.
- Terms-risk: unknown.
- Outcome: claims_ongoing.

Upgrade targets:

1. Add official Vauld statement or archived Vauld statement for the July 2022 halt.
2. Add Singapore court / moratorium / creditor-process source if available.
3. Add official Nexo or Vauld source for the transaction discussion path.
4. Add latest creditor outcome source before changing status or outcome.

Do not do yet:

- Do not mark Vauld as operations_ended unless a direct current-state source supports it.
- Do not raise outcome confidence above medium.
- Do not convert terms-risk unknown into a legal ownership interpretation without direct support.

## Haru Invest

Current state:

- Platform halt: supported by CoinDesk plus a low-confidence original notice candidate.
- Legal process: supported by secondary reporting.
- Terms-risk: unknown.
- Outcome: claims_ongoing.

Upgrade targets:

1. Verify Haru original notice URL or archive capture.
2. Add court / prosecutor / official administrator source for legal process.
3. Add customer recovery / claims process source.
4. Replace low-confidence original notice candidate if archive cannot be verified.

Do not do yet:

- Do not raise source reliability of the Haru original notice candidate until verified.
- Do not set no_recovery or partial_repayment without a direct source.

## CoinLoan

Current state:

- Platform is low-confidence.
- Withdrawal-limit and insolvency entries are retained as research placeholders.
- Current evidence is deliberately marked low reliability.
- Outcome: unknown.
- Terms-risk: unknown.

Upgrade targets:

1. Find direct insolvency / bankruptcy / administrator source.
2. Find official CoinLoan notice or archived original page for withdrawal limits.
3. Confirm whether bankruptcy, liquidation, or other insolvency wording is legally correct.
4. If direct sources cannot be found, keep CoinLoan as low-confidence or move it to a watch / candidate layer later.

Do not do yet:

- Do not raise platform confidence.
- Do not describe a precise recovery process.
- Do not keep broken news URLs as evidence.

## Major-case later upgrades

After Hodlnaut / Vauld / Haru / CoinLoan source gaps are handled, strengthen direct evidence for:

- Celsius plan confirmation / distribution details
- BlockFi plan and wind-down details
- Voyager plan / distribution details
- Genesis plan approval / Gemini Earn distribution relationship

## Completion criteria

This queue can be closed when:

- every low-reliability evidence record has been either replaced, verified, or explicitly retained as pending
- every platform has at least 3 meaningful evidence records, or a documented reason for fewer
- all outcome records have direct or high-quality support
- all terms-risk unknown values remain justified by source limits
