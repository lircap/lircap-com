# Production-design craft QA — baseline audit

Run ID: `20260628-pilot-001-home-team-warmth`
Candidate: baseline
Branch/worktree: `design-loop/20260628-pilot-001`
Reviewer/profile: `agent:production-design-reviewer`
Date: 2026-06-28
Evidence reviewed:
- Existing Pilot 001 baseline screenshots: `baseline/screenshots/`
- Additional craft audit screenshots: `baseline/production-design-screenshots/`
- Browser QA JSON: `baseline/browser-qa.json`
- Temporary measurement script reported true `/team/` horizontal overflow around 1180px (`overflowX 7`).

## Verdict

- Verdict: BLOCKER for candidate scoring until the craft gate is integrated and baseline defects are triaged into candidate scope or follow-up issues.
- Candidate scoring allowed? no — Pilot 001 candidates must not receive final scorecards until production-design QA exists and material craft defects are addressed or explicitly accepted.
- Promotion blocked? yes, for any candidate that preserves or worsens the high-severity defects below on priority surfaces.
- Summary: The baseline is technically clean for basic browser/a11y checks, but it has material production-design craft defects in responsive nav, home illustration scaling/order, team responsive layout, heading rhythm, and divider/border hierarchy. These are not merely taste notes; several are obvious enough to undermine the premium/agency-grade objective.

## Reviewed surfaces

| Route / component | 320 | 390 | 768 | 820 | 980 | 981 | 1024 | 1180 | 1181 | 1280 | 1440 | 1728 | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` homepage | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | Hero illustration and heading/fold hierarchy are priority defects. |
| `/team/` | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | 1180px overflow and placeholder dominance are priority defects. |
| `/contact/` | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | CTA/header hierarchy craft issues are secondary. |
| `/for-investors/` | reviewed | n/a | reviewed | reviewed | reviewed | reviewed | n/a | reviewed | reviewed | reviewed | n/a | reviewed | Public draft route craft is unfinished. |
| `/for-deals/` | reviewed | n/a | reviewed | reviewed | reviewed | reviewed | n/a | reviewed | reviewed | reviewed | n/a | reviewed | Public draft route craft is unfinished. |
| `/legal/` | reviewed | n/a | reviewed | reviewed | reviewed | reviewed | n/a | reviewed | reviewed | reviewed | n/a | reviewed | Functional but boxed/slabbed on mobile. |
| Global header/nav | reviewed | reviewed on core pages | reviewed | reviewed | reviewed | reviewed | reviewed on core pages | reviewed | reviewed | reviewed | reviewed on core pages | reviewed | Nav label wrapping/mobile table weight is high severity. |

Notes: original Browser-QA screenshots covered the core 390/1024/1440 matrix for `/`, `/team/`, and `/contact/`; expanded production-design screenshots cover additional craft widths and routes. Widths marked `n/a` were not part of the original baseline Browser-QA capture but are covered where practical in the expanded craft screenshot set.

## Baseline craft findings

| # | Route | Viewport | Evidence | Defect | Severity | Proposed owner/profile | Pilot 001 impact |
|---:|---|---:|---|---|---|---|---|
| 1 | `/team/` | 1180px | `baseline/production-design-screenshots/team-1180.png` | Team card layout extends past viewport by about 7px. This is true horizontal overflow. | High / blocking | Frontend implementer + production-design reviewer | Must be fixed by any candidate touching Team; otherwise blocks craft QA. |
| 2 | Global header/nav | 768–1024px | `baseline/production-design-screenshots/home-768.png`, `baseline/screenshots/home-tablet-1024.png` | Two-word nav labels wrap awkwardly while neighbours remain single-line, creating uneven rhythm and active-state imbalance. | High | Frontend implementer + production-design reviewer | Must be fixed or explicitly separated into a header craft issue before promotion. |
| 3 | Global header/nav | 320–390px | `baseline/production-design-screenshots/home-320.png`, `baseline/screenshots/home-mobile-390.png` | Mobile nav becomes a tall five-row table that dominates first screen and feels like a collapsed desktop nav rather than a designed mobile system. | High | Frontend implementer + production-design reviewer | Priority candidate concern if header/nav remains public route framing. |
| 4 | `/` homepage | 320–390px | `baseline/production-design-screenshots/home-320.png`, `baseline/screenshots/home-mobile-390.png` | Landing illustration appears before the headline and consumes too much first-fold space, delaying the page's core message. | High | Design director + frontend implementer + production-design reviewer | Blocks homepage candidate scoring unless addressed or intentionally accepted. |
| 5 | `/` homepage | 390–1024px | `baseline/screenshots/home-mobile-390.png`, `baseline/screenshots/home-tablet-1024.png`, `baseline/production-design-screenshots/home-768.png` | Crossing illustration scales inconsistently: oversized on mobile/tablet, visually weak on desktop, and not integrated with headline. | High | Design director + frontend implementer + production-design reviewer | Core Pilot 001 defect; must be addressed in homepage candidates. |
| 6 | `/` homepage | 768px | `baseline/production-design-screenshots/home-768.png` | Breakpoint transition is awkward: chart above copy, headline below, with loose blank bands between header, chart, copy, cards, and divider. | Medium–High | Design director + frontend implementer + production-design reviewer | Fold into candidate craft requirements. |
| 7 | Global page headers | desktop/mobile | `baseline/screenshots/home-desktop-1440.png`, `team-desktop-1440.png`, `contact-desktop-1440.png`, `team-mobile-390.png` | H1 scale, line-breaking, top alignment, and rhythm vary page-by-page rather than feeling governed by a type system. | Medium–High | Design director + production-design reviewer | Must inform scorecard typography/composition scoring. |
| 8 | `/team/` | 1024–1180px | `baseline/screenshots/team-tablet-1024.png`, `baseline/production-design-screenshots/team-1180.png` | Team portrait placeholders become large landscape slabs and dominate the content; at 1180 they contribute to overflow. | High at 1180 / Medium at 1024 | Frontend implementer + production-design reviewer | Core team-warmth and placeholder-discipline defect. |
| 9 | `/team/` | 1440px | `baseline/screenshots/team-desktop-1440.png` | Team cards feel dense and spreadsheet-like; grid/border density reduces warmth. | Medium | Design director + frontend implementer | Fold into team candidate. |
| 10 | `/contact/` | desktop/mobile | `baseline/screenshots/contact-desktop-1440.png`, `baseline/screenshots/contact-mobile-390.png` | Email CTA is mechanically correct but under-designed relative to page hierarchy. | Medium | Design director + frontend implementer | Secondary improvement opportunity. |
| 11 | Global dividers/rules | all audited routes | baseline and craft screenshots | Header rule, section separators, card borders, grid lines, and footer rule share similar low-contrast treatments without clear hierarchy; repeated boxes feel accidental. | Medium | Production-design reviewer + frontend implementer | Directly addresses user-flagged divider inconsistency; include in craft gate. |
| 12 | `/for-investors/`, `/for-deals/` | 320–768px | `baseline/production-design-screenshots/investors-768.png`, `deals-768.png` | Public draft scaffold routes look visibly unfinished with sparse empty hero regions. | Medium–High | Product/content + design director | Follow-up or fold into nav/public-route treatment if header candidates expose them prominently. |
| 13 | `/legal/` | 320px | `baseline/production-design-screenshots/legal-320.png` | Functional but cramped/boxed due to repeated border language. | Low–Medium | Production-design reviewer + frontend implementer | Broader craft cleanup, not Pilot 001 blocker. |
| 14 | Global brand/header | all | all baseline screenshots | Brand lockup is delicate while nav tiles are heavy; tablet/mobile nav mass dominates the brand. | Medium | Design director + frontend implementer | Fold into header/nav craft if changed. |

## Required focused changes before Pilot 001 scoring

- [ ] Add production-design craft gate to loop docs/templates and this run record.
- [ ] Reframe candidate implementation prompts so A/B/C must account for high-severity baseline craft defects rather than only macro brand direction.
- [ ] Capture candidate screenshots at expanded craft breakpoints, including 320, 390, 768, 980, 981, 1024, 1180, 1181, 1280, 1440 and 1728/1920 where practical for affected routes.
- [ ] Require production-design reviewer PASS or focused-change re-review before final scorecard scoring.
- [ ] Treat unresolved 1180px Team overflow, obvious nav wrapping/table weight, and homepage illustration hierarchy/scaling as scoring blockers on any candidate that preserves them.

## Scorecard implications

- Composition and hierarchy: materially reduced by hero/fold sequencing, nav mass, spacing bands, and card density.
- Typographic rhythm/tension: reduced by inconsistent heading line breaks, cross-page top alignment, and insufficiently governed letter-spacing/kerning checks.
- Restraint: reduced where repeated borders/dividers feel accidental rather than governed.
- Institutional credibility: reduced by visible responsive sloppiness and unfinished draft route craft.
- Human warmth: capped further by Team placeholder dominance and dense card rhythm.
- Imagery / placeholder discipline: honest but visually heavy; needs more intentional treatment.
- Accessibility: basic checks pass, but visual craft defects still affect perceived usability and scanability.
- AI-template smell: increased by generic dark-serif/gold/cards plus uneven production craft.

Recommended scoring action:
- [ ] Allow scoring
- [x] Score only after focused changes and production-design gate integration
- [ ] Reject candidate for craft quality
