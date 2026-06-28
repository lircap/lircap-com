# Issue #14 — agency-grade design critique loop closeout evidence

**Issue:** #14 — Run agency-grade design critique loop  
**Scope reviewed:** Home, Team, Contact major visual slices  
**Review standard:** `docs/design/critique-rubric.md`, Design Language Spec v0.2 §9, Photography Art-Direction Brief v0.1  
**Preview URL:** `http://127.0.0.1:4323` after `npm run build` and `npm run preview -- --port 4323`  
**Closeout:** required-change follow-up completed for skip-link first-tab evidence and 1024px Team tablet card layout.

## Screenshot evidence

All screenshots are stored in `docs/design/reviews/issue-14/`.

| Page | Mobile 390px | Tablet/mid 1024px | Desktop 1440px |
|---|---|---|---|
| Home | `home-mobile-390.png` | `home-tablet-1024.png` | `home-desktop-1440.png` |
| Team | `team-mobile-390.png` | `team-tablet-1024.png` | `team-desktop-1440.png` |
| Contact | `contact-mobile-390.png` | `contact-tablet-1024.png` | `contact-desktop-1440.png` |

Additional evidence:

- First keyboard tab / skip-link focus: `focus-skip-link-desktop.png`
- Contact email focus state: `focus-contact-email-desktop.png`
- Reduced motion desktop home: `home-desktop-1440-reduced-motion.png`
- Machine-readable browser QA: `browser-qa.json`

## Browser QA evidence

- Screenshot/QA command: Playwright Chromium via `/tmp/issue14-pw` using `playwright@1.57.0` and `axe-core@4.11.0`; evidence regenerated after the required-change CSS fixes on 2026-06-28.
- Console status: **0 console errors and 0 page errors** across home/team/contact at 390, 1024, and 1440 widths.
- Axe/accessibility scan, required-change follow-up: **0 violations** across home/team/contact at 390, 1024, and 1440 widths. Home: 38 passes / 2 incomplete. Team/contact: 39 passes / 2 incomplete.
- Keyboard/focus evidence:
  - Home desktop tab order captured: skip link → brand → Home → For investors → For deals → Team → Contact → first journey card.
  - Skip link first-tab screenshot recaptured in `focus-skip-link-desktop.png`; the box/text is immediately visible on focus rather than animating in from offscreen.
  - Contact email focus computed outline: `rgb(184, 151, 90) solid 2px`; screenshot captured in `focus-contact-email-desktop.png`.
- Team tablet evidence:
  - `team-tablet-1024.png` was regenerated after the tablet-only Team card adjustment. At 1024px the roster remains a two-column grid, but each card stacks its portrait slot above the text so portrait and copy no longer fight for narrow columns.
- Reduced motion evidence:
  - Playwright context matched `prefers-reduced-motion: reduce`.
  - Computed `html` scroll behavior: `auto`.
  - Computed nav and journey-card transition durations: `1e-06s`.
  - Screenshot captured in `home-desktop-1440-reduced-motion.png`.
- Contrast evidence from rendered token values:

| Pair | Ratio | Requirement | Result |
|---|---:|---|---|
| Parchment on obsidian | 16.23:1 | AA body ≥ 4.5:1 | PASS |
| Parchment-dim on obsidian | 10.42:1 | AA body ≥ 4.5:1 | PASS |
| Aged gold on obsidian | 6.62:1 | AA text/UI ≥ 4.5/3:1 | PASS |
| Atlantic slate on obsidian | 6.16:1 | AA body ≥ 4.5:1 | PASS |
| Parchment on Atlantic Deep | 13.21:1 | AA body ≥ 4.5:1 | PASS |
| Parchment on portrait placeholder | 14.67:1 | AA body ≥ 4.5:1 | PASS |

## Design critique — pass 1/2

Screenshots reviewed:

- Mobile: home/team/contact at 390px from the first Playwright capture.
- Tablet/mid: home/team/contact at 1024px from the first Playwright capture.
- Desktop: home/team/contact at 1440px from the first Playwright capture.
- Reduced motion: home desktop reduced-motion state captured in Playwright.

Browser QA evidence:

- Console status: PASS — no console or page errors across the reviewed routes.
- Contrast: PASS — critical token pairs were comfortably above WCAG AA.
- Keyboard/focus: PASS — skip link and focus ring were visible; tab order was logical.
- Reduced motion: PASS — `prefers-reduced-motion` switched scroll behavior to `auto` and shortened transitions.
- Axe/accessibility scan: NEEDS WORK — first run found semantic ARIA issues:
  - Team: `aria-allowed-role` on article/listitem pattern.
  - Contact: `aria-allowed-role` on article/listitem pattern and `landmark-complementary-is-top-level` for an `aside` nested inside main content.

Rubric:

- Strategic fit: PASS — the overall direction feels senior, discreet, and institutional rather than SaaS or retail-finance.
- The crossing: PASS — strongest on home, where the navigational chart is the page’s governing idea rather than decoration.
- Composition: PASS with watch item — desktop has confident left/right asymmetry and editorial whitespace; mobile is disciplined but the fully expanded nav consumes a large first screen.
- Typographic tension: PASS — large Newsreader display type creates authority and rhythm; body copy remains controlled.
- Originality: PASS — the dark navigational system, route-table nav, and crossing chart avoid the default cream/gold finance brochure.
- Restraint: PASS — no stock photography, no icons, no badges, no glowing metric cards, no excess claims.
- Institutional credibility: PASS — disclosure footer, quiet contact model, and matter-of-fact copy support trust.
- Human warmth: NEEDS WORK until photography — Team copy gives partner-led accountability, but neutral portrait placeholders cannot fully carry human presence.
- Imagery: PASS for interim / NEEDS WORK before production — placeholders follow the no-stock/no-AI rule and are explicitly labelled, but commissioned portraits remain a launch gate.
- Accessibility: NEEDS WORK — axe semantics needed refinement before sign-off.
- AI-template smell: PASS with watch item — visual language avoids the common cream/serif/gold AI-premium trope; the remaining risk is the absence of real art-directed photography.

Weakest element to remove/refine:

- The invalid ARIA/list semantics and nested aside landmark were the weakest concrete blockers. They created accessibility noise without adding visual or content value.

Required changes before next pass:

- Convert Team and Contact card groups to valid list semantics.
- Convert the Contact privacy/spam note from nested `aside` to section-level content.
- Preserve visual design and public copy while making semantic/accessibility fixes.
- Rebuild, re-screenshot, rerun browser QA, and rerun verification.

Does this look AI-generated?

- **Not yet — revise**, because pass 1 still had accessibility semantics to fix before closeout. Visually it did not read as AI-generated, but approval was withheld until browser QA passed.

Verdict: **NEEDS WORK**

## Changes made between passes / required-change follow-up

Runtime UI changes were limited to concrete browser-QA/design-review blockers:

- `src/pages/team.astro`: changed the team card group to a valid `ul[role="list"]` / `li[role="listitem"]` structure.
- `src/pages/contact.astro`: changed the intent card group to a valid `ul[role="list"]` / `li[role="listitem"]` structure and changed the nested privacy/spam `aside` to a `section`.
- `src/styles/global.css`: reset `list-style`, `margin`, and `padding` on `.team-grid` and `.intent-grid` so the semantic change does not alter visual layout.
- `src/styles/global.css`: removed the skip-link focus transition and added `:focus` coverage, stronger stacking, weight, and shadow so the first keyboard Tab immediately exposes a full “Skip to content” control.
- `src/styles/global.css`: added a 981–1180px Team-card breakpoint that keeps the roster grid at two columns while stacking each card’s portrait placeholder above its copy, with a wider 16:9 placeholder ratio to reduce squeeze at 1024px.

No stock imagery, AI imagery, or new public marketing copy was added.

## Design critique — pass 2/2

Screenshots reviewed:

- Mobile:
  - `home-mobile-390.png`
  - `team-mobile-390.png`
  - `contact-mobile-390.png`
- Tablet/mid:
  - `home-tablet-1024.png`
  - `team-tablet-1024.png`
  - `contact-tablet-1024.png`
- Desktop:
  - `home-desktop-1440.png`
  - `team-desktop-1440.png`
  - `contact-desktop-1440.png`
- Reduced motion:
  - `home-desktop-1440-reduced-motion.png`

Browser QA evidence:

- Console status: PASS — no console or page errors across all page/viewport combinations.
- Contrast: PASS — all critical token pairs pass WCAG AA, with dark-ground primary text comfortably in AAA range.
- Keyboard/focus: PASS — skip link is visible immediately as a complete text box on first tab; contact email focus ring is visible and token-consistent.
- Team tablet layout: PASS — `team-tablet-1024.png` now avoids the cramped portrait/text split by stacking each card internally at tablet widths while preserving the two-column roster rhythm.
- Reduced motion: PASS — reduced-motion media query is active and transitions are effectively disabled.
- Axe/accessibility scan: PASS — 0 violations across home/team/contact at mobile, tablet, and desktop widths.

Rubric:

- Strategic fit: PASS — the experience reads as a discreet advisory institution: dark, calm, precise, not startup-pitch or luxury-template.
- The crossing: PASS — home’s chart and route framing make the crossing a structural idea; contact’s routing model extends the same logic quietly.
- Composition: PASS — desktop layouts use asymmetry, large negative space, and table-like grids with editorial judgement; mobile stacks without collapsing hierarchy.
- Typographic tension: PASS — Newsreader’s large display scale creates tension against compact Inter labels and quiet body copy; line lengths remain controlled.
- Originality: PASS — the navigation-table shell and charted crossing feel specific to Lir’s positioning rather than a generic finance template.
- Restraint: PASS — gold is limited to active/focus/crossing accents, surfaces are flat, and there are no unnecessary icons, shadows, glows, or decorative imagery.
- Institutional credibility: PASS — the pages are direct and conservative where needed; disclosure, privacy/spam posture, and no-form contact model increase trust.
- Human warmth: PASS for pre-production — team names, roles, locations, and bios provide human presence; final warmth still depends on commissioned portrait delivery.
- Imagery: PASS for interim — only neutral labelled placeholders are present; no stock or AI imagery was introduced. Production remains gated on approved art-directed assets.
- Accessibility: PASS — semantic refinements, visible focus, reduced-motion behavior, contrast ratios, and axe scans are documented.
- AI-template smell: PASS — the pages avoid centered hero/card/gradient sameness and the common cream+serif+gold cliché; the design feels authored around the crossing.

Weakest element removed/refined:

- The weak semantic ARIA/list pattern and nested aside landmark were removed/refined. Visual design remained stable while browser QA became clean.

Design-director review:

- APPROVED for this closeout slice. Direction is high-end agency enough for pre-production evidence: ownable crossing, editorial type scale, hard restraint, and credible institutional tone. Keep watching the large mobile nav footprint and do not let neutral placeholders ship to production.

Browser QA pass:

- APPROVED. Playwright screenshots, console checks, axe scans, contrast calculations, keyboard/focus screenshots, and reduced-motion evidence are stored in this folder.

Does this look AI-generated?

- **No — approved.** Evidence: ownable crossing system, dark institutional palette, restrained gold usage, labelled neutral placeholders instead of stock/AI imagery, non-generic contact/privacy posture, successful browser QA, and two critique passes with a concrete refinement between them.

Verdict: **PASS**

## Practical verification

Commands run from `/root/lircap/repos/lircap-com`:

```bash
npm run build
npm run typecheck
npm run lint
npm test
npm run perf:budget
node - <<'NODE'
// targeted source/public scan for forbidden stock/AI imagery markers and data-placeholder hooks
NODE
git diff --check
```

Result:

- Build: PASS — 6 static pages generated.
- Typecheck: PASS.
- Lint: PASS.
- Tests: PASS — 8 test files / 37 tests.
- Performance budget: PASS — `total=48045B js=0B css=14991B`.
- Placeholder/imagery source scan: PASS — no forbidden stock/AI imagery markers or `data-placeholder` hooks in `src`/`public`.
- `git diff --check`: PASS.

## Open issues / launch gates

- Real art-directed partner photography remains required before production; current neutral portrait slots are explicitly pre-production placeholders.
- Mobile navigation is accessible and clear but visually large; acceptable for current static shell, worth revisiting if a compact nav interaction is introduced later.
