# Phase 9A — XORA Finance incident-led exception

Status: proposed operating decision  
Project: Crypto Yield Archive (CYA)  
Baseline audit-release SHA: `bf2b1948f7ac817956f740e91fcfe80bb8ad0ba4`

## Decision

After the Phase 8 100-platform audit release is production-verified, open a **single-platform incident-led exception window** for XORA Finance.

This decision does **not** restart general record growth. It authorizes only:

1. staging and review of `cya_candidate_000102` XORA Finance;
2. hardened duplicate scan and candidate-draft generation against the full 100-platform corpus;
3. public-quality source review and transaction-level incident verification;
4. at most one canonical platform promotion, taking the corpus from 100 to 101 only if every normal gate passes.

If XORA does not reach public quality, the canonical corpus remains at 100 and the candidate stays `needs_research`.

## Safety boundary

- `data/` remains canonical and unchanged during candidate research.
- Candidate staging does not allocate a canonical platform ID.
- No fraud, scam, insolvency, loss, recovery or customer-outcome conclusion may be inferred from social posts or investigation summaries alone.
- A risk label used by a third party is evidence about that publisher's assessment, not CYA's canonical classification.
- Current operation, legal entity, custody, terms version, yield source and withdrawal behavior require independent review.
- Any canonical incident event must distinguish first-party statements, third-party allegations and on-chain observations.

## Why XORA is in scope

First-party XORA materials describe a custodial XRP yield product. The current yield-source material describes treasury-subsidized XRP yield and presents XRPL-native AMM/lending as later roadmap phases. This is directly relevant to CYA's centralized/custodial yield history.

The 5 August 2026 RippleXity material supplied for review and the linked XRPL.to investigation report an unresolved XRP deposit/withdrawal dispute involving `29,899.8 XRP`, conflicting account narratives and questions about represented treasury assets. These are material research signals, but they remain non-canonical until verified.

## Promotion gate

XORA may consume platform 101 only if all of the following are satisfied:

1. duplicate scan against the 100-platform canonical corpus passes;
2. operating platform and product boundary are clear;
3. current terms/custody/yield-source evidence is archived or reproducibly captured;
4. the reported deposit is tied to a reproducible XRPL transaction and destination context, or the incident wording is explicitly constrained to an attributed report if transaction evidence remains unavailable;
5. withdrawal-settlement claims are checked against XRPL and are not stated more strongly than the available evidence supports;
6. conflicting support/account narratives are preserved from attributable sources before being described;
7. treasury/BTC/IOU claims are independently reproduced before any canonical reserve-representation event is created;
8. legal-entity and jurisdiction claims are not copied from marketing without review;
9. candidate draft, validation, build, audit, SEO, preview and production gates pass;
10. no new corpus blocker is introduced.

## Canonical shape if approved

The initial canonical record should be conservative:

- platform status remains `active` unless stronger reviewed evidence supports another status;
- product is represented as custodial/centralized yield according to applicable first-party terms;
- current yield-source wording attributes treasury-subsidy claims to XORA and does not imply current XRPL lending without proof;
- incident event wording remains attributed and separates reported facts from verified on-chain observations;
- outcome remains unknown unless a customer result is directly established;
- no scam/fraud classification is created from community investigation alone.

## Growth boundary after platform 101

This exception authorizes **no platform 102**. A broader post-100 growth target requires another explicit operating decision after the XORA review/promotion is resolved.
