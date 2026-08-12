# XORA Finance evidence sufficiency audit — 2026-08-12

Status: bounded canonical record sufficient / stronger incident conclusions not established  
Platform: `cya_plat_000101`  
Incident event: `cya_ev_000340`

## Question

Does CYA currently have enough information to retain XORA Finance as platform 101 and the existing narrowly scoped withdrawal-dispute event without overstating what happened?

## Verdict

**Yes, for the current bounded canonical record. No, for a definitive incident outcome or misconduct classification.**

The current record can remain canonical because the service model, custody/yield mechanics, attributed treasury, exact deposit transaction, claimant-public linkage, and existence of XORA's published AML/security review framework are sufficiently supported when each evidence class is kept within its stated boundary.

The evidence does **not** support changing XORA to `withdrawals_suspended`, `failed`, or another broader status; it does not support a fraud/scam/insolvency classification; and it does not establish permanent customer loss or a recovery rate.

## Sufficiency matrix

| Question | Result | Basis / boundary |
| --- | --- | --- |
| Is XORA in CYA scope? | sufficient | Current first-party whitepaper and terms describe a centralized custodial XRP yield service. |
| Is custody / yield architecture supportable? | sufficient | XORA describes shared treasury + per-user destination tags + off-chain accounting; current native XRP yield is described as finite treasury subsidy, with AMM/lending as later roadmap sources. |
| Is the treasury attribution supportable? | sufficient for current record | DefiLlama independently attributes `rhbErkS2d4H82tRbdGyFkhhc4LNtjKaC3o` to the XORA custody model. |
| Did exactly 29,899.8 XRP reach that treasury with tag 287588244? | independently verified | CYA's Ripple full-history probe found exactly one successful matching delivered amount and preserved transaction-level provenance. |
| Can the deposit be connected to the claimant's public dispute? | sufficient for attributed wording | Claimant-published media displays the same amount, treasury, tag and transaction hash; those transaction fields independently match XRPL. |
| Was there an AML-hold explanation? | sufficient only as attributed claimant evidence | The claimant-published DM image depicts `Xora Finance / @xora_finance`, destination tag 287588244 and a manual AML hold / withdrawal freeze / lifetime cap 0. The DM is not independently authenticated. |
| Does XORA publish an AML/security-review framework consistent with such controls? | sufficient as general context | Current XORA terms allow withdrawal holds for security/compliance; current privacy policy describes transaction records, destination tags/hashes, wallet-ownership, sanctions, fraud and AML review data. This does not authenticate the claimant DM. |
| Was a conflicting phishing/no-account explanation published? | sufficient only as attributed claimant evidence | A second claimant-published image depicts a message attributed to Joren Lundgren saying the person used a phishing site, never had an XORA account, and a fake XORA site existed. The sender/forwarding chain is not independently authenticated. |
| What withdrawal destination did the claimant request? | unresolved | No attributable source currently establishes it. |
| Did XORA submit or settle the requested withdrawal? | unresolved | Absence of an outbound payment to the original Binance sender does not prove non-settlement because the requested withdrawal destination may have differed. |
| Did the claimant ultimately recover the disputed balance? | unresolved | Customer outcome remains `unknown`. |
| Is the operating legal entity verified? | unresolved | Stockholm/Sweden operating origin is supportable, but reviewed first-party terms do not name a verified incorporated entity and Delaware governing law is not incorporation evidence. |
| Are BTC/IOU treasury-representation allegations independently reproduced? | unresolved / excluded | No canonical reserve-representation event should be created until the claim is independently reproduced. |

## Preservation audit

Before this audit, the core claimant screenshots were available through the live X post and a GitHub Actions artifact with a 30-day retention period. That was not durable enough for a historical archive.

This audit adds permanent privacy-reviewed repository copies:

- `docs/research/xora-social-media/2084206277757161565-1.webp`
- `docs/research/xora-social-media/2084206277757161565-2-redacted.webp`
- `docs/research/xora-social-evidence-verification-2026-08-12.md`

The second public image removes only the claimant email address visible in two locations. Transaction amount, treasury address, destination tag, transaction hash and depicted support text remain intact. Hashes for the source and privacy-reviewed copies are recorded in the provenance document.

## Current canonical classification after audit

No classification change is justified:

```text
platform status:       active
platform type:         centralized_yield
event type:            other
event status effect:   none
customer outcome:      unknown
terms status:          unclear
```

These values are deliberately conservative. `active` reflects current public operation, not a guarantee that every withdrawal is processed without review or delay.

## Non-blocking monitoring questions

The following remain open research lanes and should be updated only when attributable evidence appears:

1. requested withdrawal destination and any resulting XRPL settlement transaction;
2. claimant's final recovery / loss outcome;
3. verified operating legal entity and registration jurisdiction;
4. independently reproduced BTC/IOU treasury-representation history;
5. any first-party XORA response specifically addressing this claimant/transaction.

## Growth gate

Platform 102 work must not begin merely because XORA was already merged. First, this preservation/sufficiency audit must pass the normal repository checks, merge, and receive the repository's normal production verification. After that, XORA can remain in the normal monitoring lane while Phase 10 candidate growth proceeds.
