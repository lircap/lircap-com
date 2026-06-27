# Compliance gate status

**Control issue:** #18
**Source:** `Lir_Website_Compliance_Copy_Review_v0.1.md`
**Owner named in source artefact:** Tim Cole, Company Secretary, with external counsel where flagged.

This file is a project-control instrument, not legal advice. It records the default safe posture and the blocking gates that implementation agents must respect.

## Gate summary

| Gate | Items | Status | Blocks | Default until cleared |
|---|---|---|---|---|
| Gate A | A–E | Not cleared | final/build-ready copy | use registration-only language; anonymise case studies; hedge/soften claims; no active regulated-status implications |
| Gate B | F–I | Not cleared | pre-prod/client review or deploy as applicable | do not deploy public/client-facing final content until legal/entity/privacy/bio/endorsement checks are documented |

## Gate A — before build copy is considered shippable

| ID | Item | Status | Owner | Blocking effect |
|---|---|---|---|---|
| A | Regulatory authorisation status and language | Not cleared | Tim Cole / counsel | No “authorised” wording; registration/company-number only |
| B | Regulated-activity mapping | Not cleared | Tim Cole / counsel | Service descriptions must avoid implying unauthorised regulated activity |
| C | Named-counterparty consent | Not cleared | Partners / counsel | Case studies anonymised by default |
| D | Factual/superlative claim substantiation | Not cleared | Partners / compliance | Claims must be hedged, softened, omitted, or marked not-publishable |
| E | Financial-promotion gating | Not cleared | Tim Cole / counsel | Professional/institutional wording is not enough to assume active gating requirements are satisfied |

## Gate B — before deploy/client/public review

| ID | Item | Status | Owner | Blocking effect |
|---|---|---|---|---|
| F | Entity disclosure | Not cleared | Tim Cole | Footer/legal pages need exact entity/address wording |
| G | Data protection / GDPR | Not cleared | Tim Cole / DevOps | Contact forms, analytics, privacy policy, processors, retention must match reality |
| H | Team bio accuracy and third-party references | Not cleared | Partners / compliance | Bios need fact/tensing/employer-reference review |
| I | Endorsements/testimonials | Not cleared | Partners / compliance | No quote or implied client validation without consent |

## Implementation rule

Every issue listed against a claim in `claims-register.md` must link to the register before closure and state whether the claim dependency is blocking, advisory, or satisfied for that issue's scope.

Issues #7, #8, #9, and #12 are the primary copy/form/legal blockers and cannot close without stating which claims/copy blocks are allowed, softened, anonymised, or excluded.
