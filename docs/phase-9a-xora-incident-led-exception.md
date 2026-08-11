# Phase 9A — XORA Finance incident-led exception

Status: active operating decision  
Project: Crypto Yield Archive (CYA)  
Canonical platforms: 100  
Phase 8 finalization SHA: `162c216621687a149ebbfe213960a622667aa391`  
Phase 8 Production Surface Check: #193 success

## Decision

Phase 8 is complete. Open a **single-platform incident-led exception window** for XORA Finance.

This decision does **not** restart general record growth. It authorizes only:

1. staging and review of `cya_candidate_000102` XORA Finance;
2. hardened duplicate scan and candidate-draft generation against the full 100-platform corpus;
3. public-quality source review and transaction-level incident verification;
4. at most one canonical platform promotion, taking the corpus from 100 to 101 only if every normal gate passes.

If XORA does not reach public quality, the canonical corpus remains at 100 and the candidate stays `needs_research`.

## Phase 8 release evidence

The finalization revision `162c216621687a149ebbfe213960a622667aa391` passed the exact production gate:

- Cloudflare main deployment: success;
- custom production surface/version check: success;
- Production Surface Check #193: success;
- production desktop/mobile representative capture: success;
- production UI verification artifact upload: success.

This closes the audit lock condition without changing the 100-platform canonical corpus.

## Safety boundary

- `data/` remains canonical and unchanged during candidate research.
- Candidate staging does not allocate a canonical platform ID.
- No fraud, scam, insolvency, loss, recovery or customer-outcome conclusion may be inferred from social posts or investigation summaries alone.
- A risk label used by a third party is evidence about that publisher's assessment, not CYA's canonical classification.
- Current operation, legal entity, custody, terms version, yield source and withdrawal behavior require independent review.
- Any canonical incident event must distinguish first-party statements, third-party allegations and on-chain observations.

## Why XORA is in scope

Current first-party XORA materials describe a custodial XRP yield product. The current yield-source material describes treasury-subsidized native XRP yield and presents XRPL-native AMM/lending as later roadmap phases. Current public terms state that supported deposited balances are held in custodial wallets managed by XORA and that withdrawal holds may be imposed for security/compliance purposes.

DefiLlama independently classifies XORA as a custodial XRPL savings product and currently attributes its TVL to shared treasury address `rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o`, with destination-tag routing and internal per-user accounting. This supports the product/custody research boundary but does not by itself prove the incident allegations.

The 5 August 2026 RippleXity material supplied for review and the linked XRPL.to investigation report an unresolved XRP deposit/withdrawal dispute involving `29,899.8 XRP`, conflicting account narratives and questions about represented treasury assets. These are material research signals, but they remain non-canonical until verified.

## Automated candidate gate result

The Phase 9A candidate branch has already passed the repository's candidate scanner and candidate-draft workflows against the 100-platform corpus.

Result for `cya_candidate_000102`:

```text
canonical match:                none
duplicate state:                duplicate-clear
classification:                 manual_review_required
decision:                       needs_research
eligible_for_draft:             false
eligible_for_canonical promote: false
canonical IDs assigned:         0
canonical writes performed:     0
```

The automated gate therefore confirms that XORA is not an existing canonical duplicate, but it does **not** authorize promotion. Manual evidence review remains required.

## Promotion gate

XORA may consume platform 101 only if all of the following are satisfied:

1. duplicate scan against the 100-platform canonical corpus passes;
2. operating platform and product boundary are clear;
3. current terms/custody/yield-source evidence is archived or reproducibly captured;
4. the reported deposit is tied to a reproducible XRPL transaction and destination context, or the incident wording is explicitly constrained to an attributed report if transaction evidence remains unavailable;
5. withdrawal-settlement claims are checked against XRPL and are not stated more strongly than the available evidence supports;
6. conflicting support/account narratives are preserved from attributable sources before being described;
7. treasury/BTC/IOU claims are independently reproduced before any canonical reserve-representation event is created;
8. legal-entity and jurisdiction claims are not copied from marketing or inferred from governing-law clauses without review;
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
