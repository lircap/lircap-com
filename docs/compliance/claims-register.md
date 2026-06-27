# Claims register

**Control issue:** #18
**Operational gate issue:** #9
**Canonical brief section:** `docs/brief/canonical-brief.md` §8–§9
**Companion tracker:** `docs/compliance/sign-off-tracker.md`
**Default posture:** no claim ships in a “to be confirmed” state. It is either cleared, softened, anonymised, or removed.

Status values:

- `allowed` — confirmed as safe for the stated scope, with source/sign-off recorded.
- `safe-default` — acceptable only as conservative fallback/direction for the stated scope, not as a final legal/factual claim unless separately signed off.
- `needs-substantiation` — factual evidence/sign-off required before final copy.
- `needs-counsel` — legal/regulatory judgement required.
- `remove-soften` — original source wording is too risky or unsupported; publish only the fallback or omit.
- `exclude` — do not publish in pre-prod/client-facing copy.

| ID | Claim / copy area | Source | Risk class | Current status | Safe web posture / fallback | Owner / sign-off needed | Affected issues |
|---|---|---|---|---|---|---|---|
| CL-001 | “registered and authorised in Ireland (Company No. 801328)” / “Authorised” governance language | Sales deck slides 7 and 11 | Regulatory status | `exclude` / `needs-counsel` | State only that Harmonycove Limited trades as Lir Capital Partners and is registered with Company No. 801328. Do not use “authorised” unless authorising body and reference are confirmed. | Tim Cole / counsel | #8, #9, #12, #27 |
| CL-002 | Deal origination, advisory, capital raising, co-investment via dedicated fund, arranging deals | Sales deck slides 1, 3, 4, 6 | Regulated activity / financial promotion | `needs-counsel` | Use high-level capability wording only; avoid implying regulated status, offer, invitation, or solicitation until mapping is complete. | Tim Cole / counsel | #8, #12 |
| CL-003 | “For professional and institutional counterparties only” | Sales deck slide 12 / compliance review | Financial-promotion gating | `needs-counsel` | Treat as a footer/disclaimer candidate, not proof that active professional-investor gating is unnecessary. | Tim Cole / counsel | #9, #12, #24, #27 |
| CL-004 | Named Jagex / Carlyle / CVC / Haveli case-study narrative | Sales deck slide 9 | Named counterparty / confidentiality / substantiation | `remove-soften` | Anonymise or use a generalised proof unit unless written consent and public-source substantiation are on file. | Partners / counsel | #8, #9 |
| CL-005 | “over 300 million lifetime accounts” and “£910 million” transaction reference | Sales deck slide 9 | Factual claim | `needs-substantiation` | Omit or generalise unless public, current, and relevant to Lir/Jules role. | Partners / compliance | #8 |
| CL-006 | “world’s largest wholesale market” / similar superlatives | Compliance review Gate A-D | Superlative | `needs-substantiation` | Use hedged wording such as “one of the world’s largest…” or omit. | Partners / compliance | #8 |
| CL-007 | EV Cables “UK’s leading manufacturer” / “leading UK manufacturer” | Compliance review Gate A-D / team bio context | Superlative / third-party reference | `needs-substantiation` | Use “a UK manufacturer” or omit unless evidence supports “leading”. | Partners / compliance | #7, #8 |
| CL-008 | “direct relationships across sovereign funds, family offices, institutional allocators” | Sales deck / strategic brief | Relationship claim | `needs-substantiation` | Use restrained wording: “relationships across sovereign, family-office and institutional capital networks” only if partners confirm. | Partners | #8 |
| CL-009 | “4 partners across four global cities”, “Dublin · London · New York · Abu Dhabi” | Sales deck slides 1, 7, 12 | Presence / location claim | `needs-substantiation` | Confirm current partner locations and whether each is a formal office, partner location, or market presence; avoid implying regulated branch offices. | Partners / Tim Cole | #8, #13 |
| CL-010 | “100% mandates handled at partner level” / “no delegation” | Sales deck slides 1 and 8 | Operational claim | `needs-substantiation` | Use “partner-led” as safer direction unless absolute wording is confirmed. | Partners | #7, #8 |
| CL-011 | “TBC active deals” / track-record placeholders / “PLACEHOLDER - TO BE INSERTED” | Sales deck slides 1 and 10 | Placeholder / incomplete proof | `exclude` | Do not publish. Replace only with cleared, substantiated proof or remove section. | Partners / compliance | #8, #16, #27 |
| CL-012 | “Private Markets… exclusive access to pre-liquidity assets… by introduction only” | Privates slide | Financial promotion / exclusivity | `needs-counsel` | Present, if at all, as by-introduction-only capability with minimal marketing language and no offer/invitation. | Tim Cole / counsel | #8, #9, #12 |
| CL-013 | “SPV-matched capital” / Special Purpose Vehicles | Privates slide | Regulated/structuring language | `needs-counsel` | Avoid detailed product-like language until counsel confirms acceptable phrasing and gating. | Tim Cole / counsel | #8, #12 |
| CL-014 | Formal mandate letters, confidentiality, KYC/AML/data protection across every jurisdiction | Sales deck slide 11 | Governance/compliance claim | `needs-substantiation` | Use only if documented as actual process and jurisdictionally accurate; otherwise omit. | Tim Cole | #8, #9, #12 |
| CL-015 | Team bios: current/former roles, employer names, institutional references | Team biogs DOCX / compliance Gate B-H | Bio accuracy / third-party references | `needs-substantiation` | Edit bios to concise web form and verify tense, titles, employer references, and any confidentiality/trademark concerns. | Partners / compliance | #7 |
| CL-016 | “No stock/AI imagery; placeholders only pre-prod; no placeholder reaches production” | Design/photo briefs | Production quality / rights | `safe-default` | Neutral grey placeholders in pre-prod only; production requires real asset rights/releases. | Design director / photography producer | #10, #16, #23, #27 |
| CL-017 | Privacy policy, contact/enquiry data handling, analytics/cookies | PRD / compliance Gate B-G | GDPR / data processing | `needs-counsel` / `needs-substantiation` | Keep forms minimal; do not select third-party processors or analytics posture without documented decision. | Tim Cole / DevOps | #12, #13, #24, #27 |

## Required closeout evidence for affected issues

Every issue listed in the `Affected issues` column carries a compliance dependency. Before closing any affected issue, include:

1. claim IDs touched;
2. final status for each claim;
3. exact fallback/approved wording used;
4. owner/sign-off or reason for exclusion;
5. reviewer verdict from `agent:compliance-reviewer`.

Issues #7, #8, #9, and #12 are the primary copy/form/legal closeout blockers. Other affected issues (#10, #13, #16, #23, #24, #27, and any future issue added to the register) must at minimum state whether the referenced claim is blocking, advisory, or satisfied for that issue's scope.
