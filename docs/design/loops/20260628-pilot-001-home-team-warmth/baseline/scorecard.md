# Design-loop scorecard

Run ID: `20260628-pilot-001-home-team-warmth`
Candidate: baseline
Branch/worktree: `main` / `design-loop/20260628-pilot-001` evidence branch
Reviewer/profile: parent/orchestrator initial baseline estimate; specialist scouts to refine
Date: 2026-06-28
Evidence path or links: `baseline/screenshots/`, `baseline/browser-qa.json`

## Verdict

- Verdict: BASELINE — not a promotion candidate
- Total weighted score: **51.98 / 75**
- Baseline weighted score: **51.98 / 75**
- Delta vs baseline: n/a
- Materiality threshold for this run: +2.25 weighted points / +3 percentage points of max score
- Promotion gate: default +3 percentage points of max score unless run pre-declared otherwise; this is not the sole loop stopping rule.
- Formula: `(candidate weighted score - baseline weighted score) / 75 × 100`; 75 is the default max weighted score.
- Priority dimensions selected before implementation: composition/hierarchy; institutional credibility; human warmth; originality/anti-template; ownable crossing idea.
- Critical dimensions selected before implementation: accessibility; compliance/security risk; institutional credibility; imagery/placeholder discipline; performance.
- Regression guard selected before implementation: no critical dimension may regress by more than 0.25 weighted points; no non-critical dimension may regress by more than 1.0 weighted point unless explicitly accepted.
- Hard blockers: none observed in baseline QA; imagery/human warmth are asset-capped.

## Asset caps

| Dimension | Cap? | Reason | Input needed |
|---|---:|---|---|
| Human warmth | yes | Team portraits are neutral placeholders, limiting emotional presence. | Real approved photography / portrait art direction. |
| Imagery quality | yes | Homepage crossing graphic is bespoke-ish but restrained; team imagery is placeholder-only. | Approved photography or stronger non-photographic art direction. |
| Proof/claims | yes | Pilot cannot add unapproved claims/proof. | Approved proof points / compliance-reviewed claims. |

## Proof / provenance evidence

| Claim/proof point | Approved source / claim ID | Candidate changed it? | Risk / note |
|---|---|---|---|
| Existing homepage positioning and disclosure copy | current repo content / prior compliance gates | no | Candidate work must not broaden claims. |
| Team bios and focus areas | current repo content / prior team issue | no | Candidate work must not invent credentials. |

## Weighted dimensions

Score 0–5. Weighted score = score × weight. Higher is better; for “AI-template smell”, higher means lower template smell / stronger distinctiveness.

| Dimension | Weight | Baseline score | Candidate score | Delta | Blocker? | Evidence / notes |
|---|---:|---:|---:|---:|---|---|
| Strategic fit | 1.3 | 3.6 | n/a | n/a | no | Discreet, partner-led, institutional tone is present. |
| Ownable crossing idea | 1.2 | 2.8 | n/a | n/a | no | Map/crossing motif exists but does not yet structure the whole journey. |
| Composition and hierarchy | 1.1 | 3.0 | n/a | n/a | no | Strong serif scale, but homepage/team transition feels under-authored. |
| Typographic rhythm/tension | 1.0 | 3.5 | n/a | n/a | no | Elegant but can become repetitively large-serif plus cards. |
| Originality / anti-template | 1.2 | 2.8 | n/a | n/a | no | Premium dark/serif/gold language risks category familiarity. |
| Restraint | 1.0 | 4.0 | n/a | n/a | no | Confidently quiet; risk is too much austerity. |
| Institutional credibility | 1.3 | 3.5 | n/a | n/a | no | Credible tone and structure; proof remains understated. |
| Human warmth | 0.9 | 2.2 | n/a | n/a | no | Partner-led message present, but placeholders and distance reduce warmth. |
| Imagery / placeholder discipline | 1.0 | 2.5 | n/a | n/a | no | Placeholder discipline is honest; visual impact is capped. |
| Accessibility | 1.3 | 4.7 | n/a | n/a | no | Axe 0, first focus skip link, console/page errors 0. |
| Performance | 1.0 | 4.7 | n/a | n/a | no | Budget passing in recent checks; candidates must rerun. |
| Compliance/security risk | 1.4 | 4.5 | n/a | n/a | no | Conservative copy; no tracking; password gate separate. |
| AI-template smell | 1.3 | 2.8 | n/a | n/a | no | Avoids generic hype, but still resembles premium finance template patterns. |

## Browser / QA evidence

- Mobile screenshot: `screenshots/home-mobile-390.png`, `screenshots/team-mobile-390.png`, `screenshots/contact-mobile-390.png`
- Tablet/mid screenshot: `screenshots/home-tablet-1024.png`, `screenshots/team-tablet-1024.png`, `screenshots/contact-tablet-1024.png`
- Desktop screenshot: `screenshots/home-desktop-1440.png`, `screenshots/team-desktop-1440.png`, `screenshots/contact-desktop-1440.png`
- Reduced-motion evidence: `screenshots/home-desktop-1440-reduced-motion.png`
- Focus/keyboard evidence: `screenshots/focus-first-tab-desktop.png` — first focus is “Skip to content”
- Console/page errors: 0 observed in `browser-qa.json`
- Axe/equivalent: 0 violations observed in `browser-qa.json`
- Performance budget/Lighthouse: project perf budget previously passes; candidates must rerun.
- Pre-prod/auth smoke if relevant: #55/#60 pre-prod smoke already verified; candidate promotion must verify again after merge.

## Audience-agent UX findings

Pending UX researcher scenario setup. Simulated users are not real market proof; real human/client testing outranks simulated findings.

## Regression guard

Baseline has no candidate regression yet.

## Promotion decision rationale

Baseline is strong enough to run the optimisation process but visibly improvable. The pilot should seek a material lift in crossing ownership, editorial composition, warmth, and distinctiveness while preserving accessibility, restraint, credibility, performance, and compliance safety.

## Trend contribution

- Marginal gain for this candidate vs baseline: n/a
- Dimensions improved: n/a
- Dimensions regressed: n/a
- Likely noise vs real improvement: n/a
- Effect on next loop mode: continue broad exploration for first pilot

## Required changes, if any

- Candidate scouts should identify 1–3 bounded hypotheses; do not start broad redesign.

## Does this look AI-generated?

Not blocked, but not yet distinctive enough. The site avoids obvious AI slop; however, the dark premium serif/gold/card pattern risks looking like a polished finance template unless the crossing system and human warmth become more ownable.
