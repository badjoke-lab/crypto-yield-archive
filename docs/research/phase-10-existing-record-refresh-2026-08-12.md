# Phase 10 Existing Record Refresh — 2026-08-12

Status: maintenance review completed on branch  
Scope: `cya_plat_000042`, `cya_plat_000043`, `cya_plat_000046`  
Canonical platform count: 101  
Platform 102: unallocated

## YouHodler — `cya_plat_000042`

Reviewed current platform, event, evidence, product and terms-risk layers against current official material discovered during Phase 10 duplicate screening.

Decision: no canonical data change.

The existing record already captures the current product, entity/jurisdiction boundary and relevant terms-risk evidence closely enough for the present public claim set. No duplicate maintenance evidence is warranted.

## Wirex X-Accounts — `cya_plat_000043`

Decision: add one regional migration event and one first-party evidence item.

Wirex's official Wirex One migration FAQ states that, for EEA, UK and Australian customers, 30 June 2026 was the deadline after which Classic Wirex stopped supporting transactions in those regions. It states that X-Accounts are closed and balances returned to the main balance as part of that migration.

This is not recorded as a global X-Accounts shutdown. Current Wirex materials continue to describe X-Accounts, including under Wirex One/current regional product materials.

Canonical treatment:

- event status effect: `limited`
- platform overall status: unchanged
- no global yield-program-ended conclusion

Source:

- https://help.wirexapp.com/it/article/wirex-one-upgrade-faq-1685

## Nebeus — `cya_plat_000046`

Decision: add one first-party evidence item documenting the current counterparty ambiguity.

Current official Nebeus pages use different Rintral entities in the Renting/legal context. The support-portal `Renting Terms of Use` identifies Rintral Capital S.L.U., while another current first-party Renting Terms page identifies Rintral Trading S.L.U. in relevant service terms.

Canonical treatment:

- do not force a single `legal_entity`
- retain current platform status and product treatment
- preserve the discrepancy as evidence-bound uncertainty

Sources:

- https://support.nebeus.com/portal/en/kb/articles/renting-terms-of-use
- https://nebeus.com/renting-general-terms-and-conditions

## Growth impact

No new platform is created.  
Canonical platform count remains 101.  
`cya_plat_000102` remains unallocated.  
Cabital and Outlet Finance remain the active Phase 10 `needs_research` candidates.
