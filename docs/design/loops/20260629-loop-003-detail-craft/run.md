# Design-loop run record

Run ID: `20260629-loop-003-detail-craft`
Control issue: #71
Started: 2026-06-29
Closed:
Orchestrator: Morwenna Pendragon
Baseline commit: `8af8d993cc37a6663989f7e6f3011b8fa5e1a018`

## Objective

Loop 003 focuses on the detail-craft layer that remained after Loop 002: mobile shell/menu polish, hero/route typography and semantic lockup, copy micro-polish, no-photo team presentation, and footer/tail detail.

## Inputs

Client-flagged escaped details before this loop:

- temporary wordmark still needed proper optical alignment;
- mobile menu text/icon and button/frame alignment needed craft review;
- hero headline needed to match the crossing/intersection illustration more precisely;
- first homepage divider still had competing horizontal line sources.

Subagent scout findings added further focus:

- mobile shell optical lockup and open-state menu panel craft;
- dynamic accessible label for menu open/close state;
- homepage wide H1 and route H1 orphan-line control;
- route section-heading islanding;
- hero illustration ownability;
- no-photo team placeholder presentation;
- contact/legal/footer public-language polish;
- route vocabulary repetition and footer recovery links.

## Candidates

| Candidate | Branch / worktree | Hypothesis | Status | Notes |
|---|---|---|---|---|
| A | `design-loop/20260629-loop-003-a-mobile-shell-menu` | Mobile shell/menu optical craft and accessibility state | integrated | Improved mobile brand/toggle relationship, menu open panel, dynamic aria-label, JS-ready flash mitigation. |
| B | `design-loop/20260629-loop-003-b-hero-route-type` | Hero/route typography and section rhythm | integrated | Improved homepage wide H1 to 2 lines, route H1s to 1–2 lines desktop, route section rhythm, chart/seal direction. |
| C | `design-loop/20260629-loop-003-c-copy-team-footer` | Copy/team/footer tail-detail polish | integrated | Polished CTA copy, Legal/Contact public language, team no-photo placeholders, footer recovery links. |
| Integrated | `design-loop/20260629-loop-003-integrated` | Combine complementary A/B/C improvements | promoted candidate | Parent applied all three candidate diffs, resolved route-H1/copy overlap, verified build/tests/browser metrics. |

## Verification

Integrated candidate commands:

```bash
git diff --check
npm run typecheck
npm run lint
npm test -- --run
npm run build
npm run perf:budget
```

Results:

- typecheck passed;
- lint passed;
- tests passed: 10 files / 46 tests;
- build passed: 6 pages built;
- performance budget passed: total=74092B js=0B css=24481B.

Browser evidence:

- `integrated/browser-metrics.json`
- `integrated/contact-sheet.jpg`

Captured routes:

- `/`
- `/for-investors/`
- `/for-deals/`
- `/team/`
- `/contact/`
- `/legal/`

Captured widths:

- 320, 390, 768, 1024, 1440, 1728, 1920
- mobile menu open at 320 and 390

Metric summary:

- horizontal overflow: 0 for all captured routes and widths;
- homepage H1: 2 lines at 768+ and 3 at 390;
- Deals H1: 2 lines at 768+ and no desktop `complex` / `situations.` orphan split;
- Investors H1: 2 lines at 390+;
- Contact H1: 1 line desktop;
- menu open state: `aria-label=Close menu`, `aria-expanded=true`.

## Decision

Promote the integrated candidate for review/PR. A/B/C address complementary surfaces rather than competing alternatives, and the integrated branch passed parent verification with no obvious visual regression in the contact sheet.

## Remaining follow-ups / not solved

- Hero chart is improved but still CSS-authored; a commissioned/approved brand asset could further lift memorability.
- Team page remains no-photo until approved photography exists, though visible internal asset IDs were removed.
- Legal copy remains conservative; final production launch should still receive client/counsel review.
