---
status: draft
page: "Team"
route: "/team"
primary_audience: "Investors, deal owners, intermediaries assessing seniority"
primary_issue: "#7"
canonical_brief_sections:
  - "§6 Content architecture"
  - "§7 Voice and copy rules"
  - "§9 Proof and content provenance model"
compliance_claim_ids:
  - "CL-007"
  - "CL-010"
  - "CL-015"
copy_freeze: false
content_model: "src/content/team.js"
---

# Team page brief

## Job of the page

Build seniority and warmth through concise partner/adviser biographies while keeping unresolved source facts out of final-sounding marketing copy.

## Audience and journey

- Primary audience: Investors, deal owners, intermediaries assessing seniority.
- Journey entry point: visitors validating who sits behind the firm before contacting Lir.
- Desired next action: continue to the contact route or use partner context in a discreet conversation, without forms or over-soliciting regulated activity.

## Message hierarchy

1. Primary message: senior attention and clear accountability from partners/advisers.
2. Supporting proof: concise experience summaries only; detailed current/former role, employer, education, awards and relationship claims are tracked for sign-off.
3. CTA / next step: restrained contact language through the existing navigation/contact route.

## Source provenance

| Content block | Source | Implementation | Notes |
|---|---|---|---|
| Partner/adviser names and source biographies | `/root/lircap/artifacts/extracted_text/Lir Capital Team Biogs V1.docx.txt` | `src/content/team.js` | Source contains unresolved/awkward wording including “Prior to / along with”, “was / is”, “is also / was formerly”, “founded and led / leads”, and typo-like spacing. These facts are flagged, not published as final claims. |
| Claims/copy risk | `docs/compliance/claims-register.md` | `src/content/team.js`, `src/pages/team.astro` | Uses `CL-007`, `CL-010`, `CL-015`; public copy omits or softens controlled claims. |
| Team bio compliance checklist | `/root/lircap/artifacts/Lir_Website_Compliance_Copy_Review_v0.1.md` §H | `src/content/team.js` sign-off notes | Current/former roles, employer names, institutional references, external titles and she/her treatment require review. |
| Portrait/placeholder rules | `docs/design/asset-inventory.md` rows `IMG-POR-01`–`IMG-POR-06` | `src/pages/team.astro`, `src/styles/global.css` | Neutral labelled placeholders only; no stock, fake, generated or external imagery. |

## Compliance status

| Claim ID | Status | Current web posture | Owner/sign-off |
|---|---|---|---|
| `CL-007` | `needs-substantiation` | EV Cables “UK’s leading manufacturer” / similar superlative is not used in public bio copy. It remains in sign-off notes only. | Partners / compliance |
| `CL-010` | `needs-substantiation` | Page may say partner-led/senior attention in general terms. It does not state 100% partner handling, no delegation, mandate coverage, or absolutes. | Partners |
| `CL-015` | `needs-substantiation` | Public bios use broad, concise experience summaries. Current/former roles, named employers, institutional references, education, awards and external directorships are flagged in the content model for review. | Partners / compliance |

## Draft bio status

| Person | Public draft status | Sign-off notes |
|---|---|---|
| Sébastien Conway | Concise draft rendered | Confirm Ascoria current/former CEO wording; confirm whether named prior employers and education should appear. |
| Pierre Sallenave | Concise draft rendered | Confirm Magellan current/former role, France Marémoteur role, academic title and public-institution references. |
| Jules Herd | Concise draft rendered | She/her used. EV Cables superlative, named technology employers, awards and charity/association roles are omitted from public copy pending sign-off. |
| Jowaher Al Suwaidi | Concise draft rendered | Confirm JSP Capital current/former wording and named UAE institutional references before adding as proof. |
| Tim Cole | Concise draft rendered | Confirm Ascoria CIO tense and whether Ingen/Wing It/education references should be used. Avoid inflated governance language. |
| Steven Shenfeld | Concise draft rendered | Extensive named credit-market employer/fund/committee references omitted pending CL-015 sign-off. |

## Draft copy

Implemented in `src/content/team.js` and rendered by `src/pages/team.astro`. Copy remains draft and is not frozen for production until partner/compliance review records approval or further edits.

## Voice review

- [x] proof before claim — only broad, sourced experience categories are used publicly.
- [x] specific over generic — focus areas are partner-specific while controlled third-party detail stays flagged.
- [x] senior, restrained, human — no sales-deck bio prose is pasted wholesale.
- [x] no forbidden generic phrases — avoids “leading”, “exclusive”, “authorised”, active-deal figures and no-delegation absolutes in public page copy.
- [x] not pasted from deck/source copy — source biographies were rewritten into concise web form.

## Build handoff

- Component shape: static Astro route, responsive cards, accessible headings, labelled portrait slots, with review/sign-off detail retained in `src/content/team.js` and this page brief rather than rendered as public status copy.
- Imagery/placeholder requirements: use neutral portrait slots labelled `IMG-POR-01` through `IMG-POR-06`; these are pre-production blockers per asset inventory until approved photography replaces them. Do not emit production placeholder marker attributes on the published route because the placeholder scan intentionally fails when those markers appear in source/build output.
- Runtime constraints: no client JavaScript, forms, external images or data capture.
- Open decisions: partner/compliance sign-off on flagged third-party references and current/former role wording before production copy freeze.
