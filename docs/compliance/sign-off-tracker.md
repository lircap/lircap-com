# Compliance sign-off tracker

**Control issue:** #9
**Source controls:** `docs/compliance/gate-status.md`, `docs/compliance/claims-register.md`, `docs/brief/canonical-brief.md` §8–§9
**Status:** live project tracker. This is not legal advice and does not replace counsel or Company Secretary sign-off.

## Status vocabulary

Every copy area, claim, and implementation issue must use one of these statuses before closure:

| Status | Meaning | Allowed in pre-prod/client review? | Allowed in production? |
|---|---|---|---|
| `allowed` | Confirmed as safe for the stated scope, with source/sign-off recorded. | Yes | Yes, if sign-off remains current |
| `safe-default` | Conservative fallback wording from the claims register; no high-risk claim is being made. | Yes, if reviewer confirms scope | Yes only if production launch checklist accepts the fallback |
| `needs-substantiation` | Factual proof, partner confirmation, or documentary evidence is missing. | No, unless softened or excluded | No |
| `needs-counsel` | Legal/regulatory judgement is required. | No, unless excluded or explicitly counsel-cleared | No |
| `remove-soften` | Original source wording is too risky or unsupported; publish only the fallback or omit. | Fallback only | Fallback only |
| `exclude` | Do not publish this copy/claim in client-facing pre-prod or public production. | No | No |

## Gate A — build-copy closeout

Gate A covers copy that could imply regulatory status, regulated activity, named-counterparty proof, factual/superlative claims, or a financial promotion. Build copy is not considered shippable until each touched item below is either `allowed`, `safe-default`, or excluded from the issue scope.

| Gate item | Claim IDs | Default project status | Required closeout before issue merge |
|---|---|---|---|
| A. Regulatory authorisation status and language | `CL-001` | `exclude` / `needs-counsel` | No “authorised” language; use only registration/company-number wording unless counsel confirms exact regulatory status. |
| B. Regulated-activity mapping | `CL-002`, `CL-012`, `CL-013` | `needs-counsel` | Avoid offer, invitation, arranging, product-like SPV/fund, or active regulated-service language. |
| C. Named-counterparty consent | `CL-004`, `CL-005` | `remove-soften` / `needs-substantiation` | Named case studies/counterparties are omitted or anonymised unless consent and public substantiation are recorded. |
| D. Factual/superlative claim substantiation | `CL-006`, `CL-007`, `CL-008`, `CL-009`, `CL-010`, `CL-011`, `CL-014`, `CL-015` | `needs-substantiation` or `exclude` | Hedge, soften, omit, or record evidence/sign-off. No placeholders or superlatives ship. |
| E. Financial-promotion gating | `CL-003`, `CL-012`, `CL-013` | `needs-counsel` | Professional/institutional wording is not enough by itself; private-markets/investor-solicitation language remains excluded unless counsel-cleared. |

## Gate B — pre-prod/client/public-review closeout

Gate B covers disclosure, privacy, team-bio accuracy, and implied endorsements. It must be reviewed before client-facing pre-prod, public deployment, or production launch for the affected scope.

| Gate item | Claim IDs | Default project status | Required closeout before issue merge or deploy |
|---|---|---|---|
| F. Entity disclosure | `CL-001` | `safe-default` for confirmed registration facts only | Footer/legal route may state: “Harmonycove Limited trading as Lir Capital Partners. Registered in Ireland. Company No. 801328.” Address, authorisation, and regulatory wording remain unconfirmed. |
| G. Data protection / GDPR | `CL-017` | `needs-counsel` / `needs-substantiation` | Contact forms, analytics, processors, retention, and privacy copy require documented decision before use. Email-only fallback is preferred until cleared. |
| H. Team bio accuracy and third-party references | `CL-007`, `CL-015` | `needs-substantiation` | Bios require partner/compliance review for titles, tense, employer names, third-party references, and claims. |
| I. Endorsements/testimonials | `CL-004`, `CL-005`, `CL-011` | `exclude` | No quote, testimonial, logo, named client validation, or implied endorsement without written consent and substantiation. |

## Issue closeout matrix

| Issue | Scope | Required claim IDs | Current allowed posture | Merge/closure condition |
|---|---|---|---|---|
| #7 Team section | Partner/team copy and cards/detail model | `CL-007`, `CL-010`, `CL-015` | concise bios only; no unsupported “leading” claims; “partner-led” only, not absolute mandate handling | compliance reviewer confirms bios are softened or flagged; third-party references listed for sign-off |
| #8 Proposition copy | Sales-deck narrative adapted to pages | `CL-002`–`CL-014` as applicable | high-level capability wording; anonymise/omit case studies; no private-markets/SPV/product language unless counsel-cleared | claim-by-claim mapping in PR; risky claims either substantiated, softened, or excluded |
| #9 Compliance gate | This control layer | all active claims | controls must be explicit and testable | gate docs, tracker, legal/footer fallback, and tests present |
| #12 Contact route | enquiry/contact and routing model | `CL-002`, `CL-003`, `CL-017` | email-only or documented minimal route until privacy/form decision is cleared | no client-exposed secrets; privacy/data-flow decision recorded |
| #13 SEO/analytics | metadata, sitemap, analytics, structured data | `CL-001`, `CL-009`, `CL-017` plus page claims | compliance-safe metadata; no unconfirmed office/global claims; no analytics processor until decided | metadata and structured data claim-mapped; analytics/privacy decision recorded |
| #16 QA closeout | final browser/accessibility/performance gate | all live page claims | verify no excluded claims/placeholders/unauthorised language appear in rendered site | evidence filed; any findings linked as follow-up issues |

## Required PR checklist for copy-bearing issues

Every PR that changes page copy, metadata, legal text, forms, structured data, or proof units must include this checklist in the PR body or issue comment:

```text
Compliance closeout
- Claim IDs touched:
- Final status for each claim:
- Exact wording/fallback used:
- Excluded/softened source wording:
- Owner/sign-off required before production:
- Compliance reviewer verdict:
```

## Current project posture

- Gate A is **not globally cleared**. Implementation may continue only by using safe fallback wording and excluding/softening risky claims.
- Gate B is **not globally cleared**. Pre-prod can remain password-gated for review, but production launch remains blocked until launch checklist sign-off is complete.
- The only entity disclosure currently safe for the site is the confirmed registration fallback above.
- Financial-promotion, private-markets, SPV/fund, named-counterparty, testimonial, and absolute mandate-handling claims remain excluded until cleared.
