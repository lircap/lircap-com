# Compliance gate status

**Control issue:** #9
**Source:** `Lir_Website_Compliance_Copy_Review_v0.1.md`
**Owner named in source artefact:** Tim Cole, Company Secretary, with external counsel where flagged.
**Companion tracker:** `docs/compliance/sign-off-tracker.md`

This file is a project-control instrument, not legal advice. It records the default safe posture and the blocking gates that implementation agents must respect.

## Gate summary

| Gate | Items | Status | Blocks | Default until cleared |
|---|---|---|---|---|
| Gate A | A–E | Not globally cleared | final/build-ready copy | use registration-only language; use anonymised/generalised case-study fallbacks; hedge/soften claims; no active regulated-status implications |
| Gate B | F–I | Not globally cleared | pre-prod/client review or deploy as applicable | do not deploy public/client-facing final content until legal/entity/privacy/bio/endorsement checks are documented |

Implementation may continue only when the issue-specific closeout in `sign-off-tracker.md` records each touched claim as `allowed`, `safe-default`, `remove-soften`, or explicitly excluded from the scope. No claim ships in a “to be confirmed” state.

## Status vocabulary

| Status | Use |
|---|---|
| `allowed` | Confirmed as safe for the stated scope, with source/sign-off recorded. |
| `safe-default` | Conservative fallback wording from `claims-register.md`; no high-risk claim is being made. |
| `needs-substantiation` | Factual proof, partner confirmation, or documentary evidence is missing. |
| `needs-counsel` | Legal/regulatory judgement is required. |
| `remove-soften` | Original source wording is too risky or unsupported; publish only the fallback or omit. |
| `exclude` | Do not publish this copy/claim in client-facing pre-prod or public production. |

## Gate A — before build copy is considered shippable

| ID | Item | Status | Owner | Blocking effect | Primary claim IDs |
|---|---|---|---|---|---|
| A | Regulatory authorisation status and language | Not cleared | Tim Cole / counsel | No “authorised” wording; registration/company-number only | `CL-001` |
| B | Regulated-activity mapping | Not cleared | Tim Cole / counsel | Service descriptions must avoid implying unauthorised regulated activity | `CL-002`, `CL-012`, `CL-013` |
| C | Named-counterparty consent | Not cleared | Partners / counsel | Case studies use anonymised/generalised fallback by default | `CL-004`, `CL-005` |
| D | Factual/superlative claim substantiation | Not cleared | Partners / compliance | Claims must be hedged, softened, omitted, or marked not-publishable | `CL-006`–`CL-011`, `CL-014`, `CL-015` |
| E | Financial-promotion gating | Not cleared | Tim Cole / counsel | Professional/institutional wording is not enough to assume active gating requirements are satisfied | `CL-003`, `CL-012`, `CL-013` |

## Gate B — before deploy/client/public review

| ID | Item | Status | Owner | Blocking effect | Primary claim IDs |
|---|---|---|---|---|---|
| F | Entity disclosure | Partially safe via registration fallback only | Tim Cole | Footer/legal pages may use confirmed registration facts; address, authorisation, and regulatory wording remain unconfirmed | `CL-001` |
| G | Data protection / GDPR | Not cleared | Tim Cole / DevOps | Contact forms, analytics, privacy policy, processors, retention must match reality | `CL-017` |
| H | Team bio accuracy and third-party references | Not cleared | Partners / compliance | Bios need fact/tensing/employer-reference review | `CL-007`, `CL-015` |
| I | Endorsements/testimonials | Not cleared | Partners / compliance | No quote or implied client validation without consent | `CL-004`, `CL-005`, `CL-011` |

## Confirmed safe entity disclosure fallback

Until Tim Cole/counsel confirms fuller legal wording, the site may use only:

> Harmonycove Limited trading as Lir Capital Partners. Registered in Ireland. Company No. 801328.

Do not add “authorised”, regulator names, registered office address, VAT/tax references, branch-office claims, or jurisdictional compliance wording without a recorded sign-off update.

## Implementation rule

Every issue listed against a claim in `claims-register.md` must link to the register before closure and state whether the claim dependency is blocking, advisory, satisfied, softened, or excluded for that issue's scope.

Issues #7, #8, #9, and #12 are the primary copy/form/legal blockers and cannot close without stating which claims/copy blocks are allowed, softened, anonymised, or excluded.

Use the closeout block below in PR bodies or issue comments for all copy-bearing issues:

```text
Compliance closeout
- Claim IDs touched:
- Final status for each claim:
- Exact wording/fallback used:
- Excluded/softened source wording:
- Owner/sign-off required before production:
- Compliance reviewer verdict:
```
