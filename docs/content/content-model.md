# Content model and page map

**Control issue:** #3
**Status:** source-of-truth content model for implementation planning. Copy remains unfrozen until the relevant page issue records compliance status and review evidence.

## Source hierarchy

Use sources in this order:

1. `docs/brief/canonical-brief.md` — primary positioning, audience, content architecture, voice, and proof model.
2. `docs/compliance/claims-register.md` and `docs/compliance/gate-status.md` — binding compliance posture and fallback wording.
3. `docs/content/copy-review-checklist.md` and `content/pages/*.md` — page-level workflow and draft page briefs.
4. Supplied artefact excerpts via `docs/source/source-summaries.md` and extracted text paths in `docs/source/artefact-register.md`.
5. Sales deck / private slide / team bios — useful source material, never pasted wholesale.
6. `docs/source/existing-site-audit.md` — migration input only; existing copy is not approved copy.

If sources conflict, compliance-safe wording and the canonical brief win until the client/counsel resolves the decision.

## Page inventory

| Page | Route | Purpose | Primary audience | Primary CTA | Proof elements | Compliance status |
|---|---|---|---|---|---|---|
| Home | `/` | Establish Lir's position: the point where the right capital and the right opportunity meet. Route visitors into investor, deal, or intermediary journeys. | Investors, deal owners, intermediaries | Start a discreet conversation / choose investor or deal path | Partner-led positioning; crossing idea; capability overview; selected proof teasers only if cleared | `CL-001`, `CL-002`, `CL-008`, `CL-009`, `CL-010`; copy not frozen |
| For Investors | `/for-investors/` | Explain how Lir helps capital holders understand and access suitable opportunities without over-marketing financial products. | Sovereign funds, family offices, institutional allocators | Discuss mandate / explore fit | Relationship network claims, opportunity mapping, partner judgement; all relationship/mandate claims need substantiation | `CL-002`, `CL-003`, `CL-008`, `CL-012`, `CL-013`; counsel-sensitive |
| For Deals | `/for-deals/` | Speak to companies, owners, and introducers who need the right capital partner or senior advisory judgement. | Owners, companies, intermediaries | Discuss opportunity / introduction | Process discipline, partner handling, anonymised proof units | `CL-002`, `CL-004`, `CL-005`, `CL-014`; anonymise/soften until cleared |
| Sectors / Capabilities | `/sectors/` | Define where Lir has pattern recognition without generic sector-card boilerplate. | All audiences assessing fit | Explore fit / contact | Capability map, sector coordinates, partner focus | `CL-002`, `CL-006`, `CL-011`, `CL-012`; no superlatives or active-deal placeholders |
| Private Markets | `/private-markets/` | Present private-markets capability as deliberately restricted/by-introduction only, if used. | Qualified/professional counterparties by introduction | Request introduction / discuss privately | Very limited, compliance-reviewed explanation | `CL-003`, `CL-012`, `CL-013`; counsel-sensitive; copy not frozen |
| Team | `/team/` | Build seniority and warmth through concise partner-led proof and bios. | All audiences validating people and trust | Contact relevant partner / start conversation | Partner biographies, locations/focus, photography once available | `CL-007`, `CL-010`, `CL-015`; bio accuracy and third-party references require review |
| Contact / Enquiry | `/contact/` | Provide a discreet, privacy-conscious way to start a conversation without over-collecting data. | Qualified counterparties and introducers | Email/contact the team | Entity details, minimal contact channel, privacy context | `CL-002`, `CL-003`, `CL-017`; forms/privacy require counsel/data-flow decision |
| Legal / Privacy | `/legal/` or dedicated legal routes | Publish entity disclosure, privacy/GDPR, terms/disclaimers once approved. | All visitors | n/a | Company registration facts and legal/privacy text | `CL-001`, `CL-003`, `CL-017`; legal/privacy copy not frozen |
| Case-study / proof units | component/page TBD | Provide specific proof only when consent/substantiation exists. | Investors, deal owners, intermediaries | Continue to relevant journey / contact | Anonymised deal/course narratives; named cases only with approval | `CL-004`, `CL-005`, `CL-011`; default anonymise/omit |
| News / announcements | dormant | Keep mechanism off unless cadence and compliance workflow are real. | n/a | n/a | none until active workflow exists | Disabled by default; launch checklist blocks stale news |

## Page brief files

Existing planning briefs live in `content/pages/*.md`. They are draft controls, not final page copy:

- `content/pages/home.md`
- `content/pages/for-investors.md`
- `content/pages/for-deals.md`
- `content/pages/sectors-capabilities.md`
- `content/pages/private-markets.md`
- `content/pages/team.md`
- `content/pages/contact.md`
- `content/pages/legal-privacy.md`

Implementation issues must update or supersede these before freezing copy.

## Content dependencies and unknowns

| ID | Dependency / unknown | Blocks | Default until resolved | Owner |
|---|---|---|---|---|
| `CD-001` | Regulatory authorisation and regulated-activity language | Home, investors, deals, contact, legal | registration-only language; avoid “authorised” | Tim Cole / counsel |
| `CD-002` | Partner locations/offices and whether city claims are offices or locations | Home, team, SEO metadata | describe presence cautiously; no branch-office implication | Partners |
| `CD-003` | Relationship/network claims and mandate handling proof | investors, home | soften to partner-led/network language only if confirmed | Partners |
| `CD-004` | Named counterparty/case-study permissions | deals, proof units, sectors | anonymise or omit | Partners / counsel |
| `CD-005` | Team bio accuracy, tense, employer references | team | concise bios only after partner review | Partners / compliance |
| `CD-006` | Private markets / SPV / professional-counterparty gating | private markets, contact, legal | minimal by-introduction-only posture or omit | Tim Cole / counsel |
| `CD-007` | Contact form vs email-only and privacy/data-flow decision | contact, legal, analytics | email/contact route only; no third-party processors | Tim Cole / DevOps |
| `CD-008` | Production photography, rights, releases | home, team, sectors, launch | neutral placeholders in pre-prod only; no production placeholders | design director / photography producer |
| `CD-009` | Legacy `/privacy/` and `/terms/` rewrite/redirect decision | legal, SEO, launch | replace with reviewed legal/privacy route(s) | compliance / DevOps |
| `CD-010` | News/announcement cadence and approval workflow | news mechanism | disabled | client / compliance |

## Implementation use

- #6 homepage must use the Home row and `content/pages/home.md`.
- #7 team must use Team row, `CL-015`, and partner bio review.
- #8 proposition copy must use Investors/Deals/Sectors/Private Markets rows, the claims register, and `docs/content/proposition-copy.md` for web-native draft copy plus compliance-sensitive alternatives.
- #12 contact must use Contact row and `CL-017`.
- #13 SEO must use this page map plus `docs/source/existing-site-audit.md` and `docs/seo/redirect-map.md`.
- #27 launch must confirm unresolved dependencies are either resolved or explicitly excluded from production.

## Copy freeze rule

No page copy is frozen until:

1. page brief exists or is superseded by approved implementation copy;
2. source provenance is recorded;
3. relevant `CL-*` IDs are listed;
4. compliance reviewer records status/fallback;
5. voice review passes;
6. implementation PR links the evidence.
