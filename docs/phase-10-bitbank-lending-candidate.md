# Phase 10 — bitbank 暗号資産を貸して増やす candidate review

Date: 2026-08-17
Parent: #203
Candidate issue: #269

## Decision

Stage `cya_candidate_000132` as `add_now`, subject to the hardened exact-head candidate scanner.

## Current product and operator

bitbank's current first-party site lists `貸して増やす（レンディング）` among its services and identifies the operator as ビットバンク株式会社 / Bitbank, Inc. Current support material describes applications through the `貸して増やす` interface and states that the usage/lending fee rate varies by quantity lent.

## Maturity and return mechanics

First-party support states that the standard maturity is one year after contract formation. After maturity, bitbank returns the crypto lent for the relevant recruitment period plus the prescribed usage/lending fee within the published return window. Current support also documents early termination through the support channel subject to an early-termination fee.

These are issuer product terms. They must not be presented as independent proof that every historical customer received the advertised rate or that every historical contract completed without loss or delay.

## Custody / segregation boundary

A first-party Ethereum PoW fork FAQ states that ETH lent through `貸して増やす` was not eligible for the fork allocation because assets lent through the service were outside the segregated-management balance referenced for ordinary exchange custody. This is important CYA terms-risk evidence.

Do not represent bitbank's crypto-asset exchange registration or ordinary exchange custody controls as establishing that lent assets receive the same segregation treatment.

## Historical date boundary

bitbank's annual transaction-report guidance includes `貸出数量`, `返却数量`, and `貸出損益`, and the same reporting guidance references 2018 and 2019 report history. This supports historical operation by that period but does not establish the original launch day of the lending service.

No exact launch date should be created unless stronger first-party historical evidence establishes it.

## Primary sources

- https://bitbank.cc/
- https://support.bitbank.cc/hc/ja/articles/360036057594--%E6%9A%97%E5%8F%B7%E8%B3%87%E7%94%A3%E3%82%92%E8%B2%B8%E3%81%97%E3%81%A6%E5%A2%97%E3%82%84%E3%81%99-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6
- https://support.bitbank.cc/hc/ja/articles/4403394521625-%E8%B2%B8%E3%81%97%E3%81%A6%E5%A2%97%E3%82%84%E3%81%99%E3%81%AE%E8%BF%94%E9%82%84%E6%97%A5%E3%81%AF%E3%81%84%E3%81%A4%E3%81%A7%E3%81%99%E3%81%8B-%E6%BA%80%E6%9C%9F%E3%81%AF%E3%81%94%E5%A5%91%E7%B4%84%E3%81%8B%E3%82%89%EF%BC%91%E5%B9%B4%E5%BE%8C%E3%81%A7%E3%81%99
- https://support.bitbank.cc/hc/ja/articles/9809690720921-Ethereum-PoW-ETHW-%E3%81%AF%E4%BB%98%E4%B8%8E%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%81%8B
- https://support.bitbank.cc/hc/ja/articles/360016527753-%E5%B9%B4%E9%96%93%E5%8F%96%E5%BC%95%E5%A0%B1%E5%91%8A%E6%9B%B8%E3%81%AE%E8%A6%8B%E6%96%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E6%95%99%E3%81%88%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84

## Promotion boundary

Before canonical IDs are allocated:

1. run the hardened full-corpus duplicate/domain/alias candidate scanner on the exact PR head;
2. require the candidate to remain `add_now` / draft-eligible and duplicate-clear;
3. preserve unknown launch chronology rather than infer an exact date;
4. preserve the custody/segregation distinction as terms-risk evidence;
5. keep advertised rates as issuer terms rather than realized-return claims.
