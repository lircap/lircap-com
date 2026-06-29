# Candidate A-salvaged scorecard — global shell + route readiness + focused hero fix

Run ID: `20260629-loop-002-whole-site-readiness`
Candidate: A-salvaged
Branch/worktree: `design-loop/20260629-loop-002-a-shell-routes`
Reviewer/profile: Morwenna parent scoring pass
Date: 2026-06-29
Evidence path: `docs/design/loops/20260629-loop-002-whole-site-readiness/candidates/a-salvaged/`

## Verdict

- Verdict: PROMOTE
- Total weighted score: provisional 57.85 / 75
- Baseline weighted score: 44.60 / 75
- Delta vs baseline: +13.25 weighted points = +17.67 percentage points of max score
- Materiality threshold for this run: +2.25 weighted points / +3 percentage points
- Priority dimensions improved: whole-site readiness, nav IA/convention, route completeness, contact/legal/footer trust, super-wide hero integrity, anti-template smell.
- Critical dimensions regressed? no material regression found in parent checks.
- Hard blockers: none remaining from Loop 002 gates in parent evidence.
- Production-design craft verdict: PASS WITH FOLLOW-UP ISSUES
- Candidate scoring allowed after craft QA? yes

## Binary readiness gates before weighted scoring

| Gate | Verdict | Evidence / notes | Blocking? |
|---|---|---|---|
| Whole-public-site route readiness | PASS | Investors/Deals now have route-purpose content and no draft/scaffold text. | no |
| Primary nav contract | PASS | Nav/hero destinations are no longer scaffold-only. | no |
| Mobile nav convention | PASS | Right-aligned `Menu` button opens conventional menu; Escape closes; screenshot/state captured. | no |
| Desktop nav IA/copy | PASS | Desktop nav labels are clean: Home, Investors, Deals, Team, Contact. | no |
| Super-wide hero integrity | PASS | Homepage H1 reduced from 5 lines to 3 at 1440/1728/1920; no captured overlap/overflow. | no |
| Hero illustration/art-direction adequacy | ISSUE | Refined/reduced chart is improved and more premium; still not a commissioned brand asset. | no |
| Contact page intent clarity | PASS | Direct email, what to include, what happens next, confidentiality guidance. | no |
| Legal/content sanity | PASS | Minimal conservative company disclosure; no invented specificity. | no |
| Footer refinement | PASS | Entity disclosure and links are cleaner; still intentionally minimal. | no |
| Cross-route visual/copy consistency | PASS | Public routes align better in structure and tone; team imagery remains asset-capped. | no |

## Asset caps

| Dimension | Cap? | Reason | Input needed |
|---|---:|---|---|
| Human warmth | yes | No approved photography. | Approved portraits or explicit non-photo direction. |
| Imagery quality | partial | Crossing chart is improved but still a CSS-built motif. | Commissioned/approved brand asset if desired. |
| Proof/claims | yes | No new proof/client/transaction claims. | Approved claims/register updates. |

## Weighted dimensions

| Dimension | Weight | Baseline score | Candidate score | Delta | Blocker? | Evidence / notes |
|---|---:|---:|---:|---:|---|---|
| Strategic fit | 1.3 | 3.4 | 4.0 | +0.6 | no | More credible public journeys and restrained copy. |
| Ownable crossing idea | 1.2 | 3.3 | 3.7 | +0.4 | no | Chart simplified and hero line breaks fixed; asset cap remains. |
| Composition and hierarchy | 1.1 | 2.8 | 3.9 | +1.1 | no | Public routes/contact/legal now have real page hierarchy. |
| Typographic rhythm/tension | 1.0 | 2.7 | 3.7 | +1.0 | no | Wide hero line count fixed; some mobile headings remain large but acceptable. |
| Originality / anti-template | 1.2 | 3.0 | 3.6 | +0.6 | no | Less scaffold-like; still uses restrained finance/editorial language. |
| Restraint | 1.0 | 3.4 | 3.9 | +0.5 | no | Adds substance without hype. |
| Institutional credibility | 1.3 | 2.8 | 4.0 | +1.2 | no | Public route gaps closed; legal/contact more coherent. |
| Human warmth | 0.9 | 2.4 | 2.8 | +0.4 | no | Improved clarity; imagery cap remains. |
| Imagery / placeholder discipline | 1.0 | 2.7 | 3.2 | +0.5 | no | Honest no-stock posture; crossing motif improved. |
| Accessibility | 1.3 | 4.1 | 4.2 | +0.1 | no | Menu has ARIA state, Escape close, focus behaviour; needs CI/browser follow-up after PR. |
| Performance | 1.0 | 4.2 | 4.1 | -0.1 | no | Small inline menu JS; build/perf still acceptable pending PR check. |
| Compliance/security risk | 1.4 | 3.8 | 4.1 | +0.3 | no | Conservative route/legal/contact copy, no new claims. |
| AI-template smell | 1.3 | 2.0 | 3.4 | +1.4 | no | Biggest gain: no blank public routes; less default/generated feel. |
| **Total** |  |  |  | **+13.25** |  | **57.85** |

## Browser / QA evidence

- Screenshots: `screenshots/`
- Browser QA JSON: `browser-qa.json`
- Metrics summary: `metrics-summary.md`
- Mobile menu open evidence: `home-390-menu-open.png`, `mobile-menu-state.json`
- Horizontal overflow: 0 across captured route/width matrix.
- Homepage H1 line count: 3 at 390/768/1024/1180/1280/1440/1728/1920; 4 at 320 with one narrow line, acceptable for 320.
- Draft/scaffold text: false across captured routes.

## Remaining non-blocking issues

- Team page still has placeholder portraits; this remains asset-capped.
- Hero illustration is improved but should receive further art-direction if it is meant to become the signature brand asset.
- Contact/legal are launch-safer, but counsel/client-approved copy should replace conservative minimal copy before production launch.
