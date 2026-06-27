# Design critique — issue #6 homepage crossing hero

## Pass 1/2

Screenshots:

- Mobile: captured locally with Playwright at 390px before refinement.
- Desktop: captured locally with Playwright at 1440px before refinement.
- Reduced motion: captured locally with Playwright using `reduced_motion='reduce'`.

Browser QA evidence:

- Console status: no console errors.
- Contrast: uses previously tested token pairs: parchment on obsidian/Atlantic Deep and aged gold on dark surfaces.
- Keyboard/focus: primary journey card focus outline reported `solid 2px`.
- Reduced motion: transition duration reduced to `1e-06s`.
- Accessibility: no horizontal overflow at 390px or 1440px.

Rubric:

- Strategic fit: PASS — senior/dark/editorial, avoids startup pitch energy.
- The crossing: PASS — navigational fix/chart is structural rather than decorative wave imagery.
- Composition: NEEDS WORK — the second section placed its heading and cards awkwardly, with narrow bottom cards and excessive empty right-side space.
- Typography: PASS — Newsreader/Inter hierarchy is distinctive and restrained.
- Restraint: PASS — no stats, badges, glow-heavy finance theatre, or stock imagery.
- Institutional credibility: PASS — copy is sober and compliance-safe.
- Human warmth: PASS — partner-led tone appears without lifestyle imagery.
- Imagery: PASS — no stock/AI placeholder imagery; abstract chart is CSS-drawn.
- Accessibility: PASS — focus/reduced-motion/overflow checks passed.
- AI-template smell: Not yet — revise lower section composition to remove template-like card awkwardness.

Weakest element refined:

- Reworked the `home-brief` section into an explicit `section-heading` plus full-width three-card proof/navigation row.
- Reduced second-section card height and made the grid read as a deliberate editorial panel rather than accidental masonry.

Verdict: NEEDS WORK before pass 2.

## Pass 2/2

Screenshots:

- Mobile: [`mobile.png`](mobile.png)
- Desktop: [`desktop.png`](desktop.png)
- Reduced motion: [`mobile-reduced-motion.png`](mobile-reduced-motion.png)

Browser QA evidence:

- Console status: no console errors.
- Contrast: critical foreground/background pairs use approved dark token combinations.
- Keyboard/focus: `.journey-card` focus outline reported `solid 2px`.
- Reduced motion: `.journey-card` transition duration reported `1e-06s` under reduced-motion emulation.
- No horizontal overflow:
  - mobile `scrollWidth=390`, `innerWidth=390`
  - desktop `scrollWidth=1440`, `innerWidth=1440`

Rendered checks:

```text
mobile title: Lir Capital — The crossing
mobile h1: Where capital and opportunity take a bearing.
mobile cardCount: 2
mobile console_errors: []
desktop title: Lir Capital — The crossing
desktop h1: Where capital and opportunity take a bearing.
desktop cardCount: 2
desktop console_errors: []
reduced_motion_transition_duration: 1e-06s
```

Rubric:

- Strategic fit: PASS — dark, restrained, senior and partner-led.
- The crossing: PASS — chart/fix/track system makes the crossing an organising idea, not a maritime cliché.
- Composition: PASS — hero has tension between oversized editorial copy and precise chart; second section now reads as a deliberate editorial continuation.
- Typography: PASS — large Newsreader creates authority without luxury-template ornament.
- Restraint: PASS — no stock photos, stats strips, glass towers, waves, handshakes, trading screens, or badges.
- Institutional credibility: PASS — no unsubstantiated performance or mandate claims.
- Human warmth: PASS — copy uses discreet/partner-led language without overfriendly tone.
- Imagery: PASS — CSS-drawn navigational metaphor; no placeholder or AI imagery.
- Accessibility: PASS for this slice's checked criteria: focus, reduced motion, overflow, and token contrast posture.
- AI-template smell: No — approved for draft PR review. It is specific enough to Lir's crossing concept and avoids generic premium-finance tropes.

Weakest remaining element:

- The abstract chart is intentionally austere; a later design pass with real photography/atmosphere could add warmth, but no production placeholder should be introduced for #6.

Verdict: PASS for draft PR review.
