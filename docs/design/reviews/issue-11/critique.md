# Issue #11 navigation shell — browser/design evidence

**PR:** #48  
**Issue:** #11  
**Review pass:** 2/2 closeout evidence for navigation/page shell

## Screenshots

- Mobile: `docs/design/reviews/issue-11/mobile.png` — 390 × 900
- Tablet: `docs/design/reviews/issue-11/tablet.png` — 1024 × 900
- Desktop: `docs/design/reviews/issue-11/desktop.png` — 1440 × 950
- Focus state: `docs/design/reviews/issue-11/focus-skip-link.png` — first keyboard tab reveals the skip link

## Browser QA evidence

- Preview command: `npm run preview -- --port 4322`
- Screenshot command: `npx --yes playwright@1.57.0 screenshot ...`
- Rendered HTML smoke: home page contains skip link, primary nav, active `aria-current`, footer nav, and no `<script>` tag.
- Console status: Playwright load at `http://127.0.0.1:4322/` captured **0 console/page errors**.
- No mixed content/external runtime: rendered home page contains **0 script tags** and the implementation adds no external resources.
- Keyboard/focus evidence:
  - First `Tab` focus target: `A.skip-link`, text `Skip to content`, href `#main-content`.
  - Captured focus screenshot: `focus-skip-link.png`.
  - Observed tab order: skip link → brand home → Home → For investors → For deals → Team → Contact → first journey card.
  - Global `:focus-visible`, skip-link reveal, semantic header/nav/main/footer landmarks, and active nav state are implemented in `BaseLayout.astro`/`global.css`.
- Reduced motion evidence:
  - Playwright context matched `prefers-reduced-motion: reduce`.
  - Computed `html` scroll behavior: `auto`.
  - Computed nav transition duration under reduced motion: `1e-06s`.
- Axe accessibility scan:
  - Tool: Playwright + `axe-core` against rendered home page.
  - Violations: **0**.
  - Passes: **38**.
  - Incomplete: **2**; no release-blocking defects identified for this shell slice.

## Contrast evidence

Measured from the rendered page token values:

| Pair | Ratio | Requirement | Result |
|---|---:|---|---|
| Parchment on obsidian/body dark surface | 16.23:1 | WCAG AA body/link ≥ 4.5:1 | PASS |
| Parchment-dim on obsidian secondary text | 10.42:1 | WCAG AA body/link ≥ 4.5:1 | PASS |
| Aged gold on obsidian accent/focus | 6.62:1 | WCAG AA UI/focus ≥ 3:1 | PASS |
| Atlantic slate on obsidian nav cue | 6.16:1 | WCAG AA body/link ≥ 4.5:1 | PASS |
| Parchment on Atlantic Deep | 13.21:1 | WCAG AA body/link ≥ 4.5:1 | PASS |

## Rubric

- Strategic fit: PASS — restrained institutional shell, not startup/SaaS navigation.
- The crossing: PASS — navigation behaves as a gridded route system with route cues rather than decorative marine styling.
- Composition: PASS — desktop creates asymmetry between brand lockup and gridded route table; mobile stacks into a deliberate manifest-like route list.
- Typography: PASS — Newsreader/Inter pairing remains legible and distinctive.
- Restraint: PASS — no icons, badges, stats, glows, stock visuals, or decorative clutter added.
- Institutional credibility: PASS — footer disclosure and quiet route labels support trust.
- Human warmth: PASS — concise route cues add context without marketing noise.
- Imagery: PASS — no new imagery or placeholder polish added.
- Accessibility: PASS — semantic landmarks, skip link, visible focus, active state, responsive breakpoints, reduced-motion support, contrast evidence, and axe scan are present.
- AI-template smell: PASS — the shell avoids generic centered-nav/cards/finance-template patterns; it extends Lir's crossing/grid idea.

## Weakest element refined

The original basic inline nav/footer was replaced with a structured route grid, skip link, active state, and disclosure footer so the page shell feels intentionally designed rather than scaffolded.

## Does this look AI-generated?

No — approved for the #11 navigation/page shell slice.
