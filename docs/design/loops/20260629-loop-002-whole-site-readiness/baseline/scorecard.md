# Baseline scorecard — Loop 002 whole-site readiness

Run ID: `20260629-loop-002-whole-site-readiness`
Candidate: baseline
Branch/worktree: `main` at `a4b027035ecebfd676e6fce06af2902acbc34546`
Reviewer/profile: Morwenna parent baseline pass
Date: 2026-06-29
Evidence path: `docs/design/loops/20260629-loop-002-whole-site-readiness/baseline/`

## Verdict

- Verdict: BASELINE WITH KNOWN BLOCKERS
- Total weighted score: provisional 44.60 / 75
- Hard blockers:
  - Mobile nav convention failure: exposed button grid rather than expected right-aligned hamburger/menu.
  - Public route readiness failure: `/for-investors/` and `/for-deals/` are scaffold/draft routes.
  - Desktop nav IA/copy issue: dual label/cue descriptors create copy indecision.
  - Super-wide hero integrity issue: homepage H1 becomes 5 lines at 1440/1728/1920.
  - Footer/legal/contact still carry pre-production posture and require refinement/sanity pass.
- Production-design craft verdict: BLOCKER
- Candidate scoring allowed after craft QA? baseline only

## Binary readiness gates before weighted scoring

| Gate | Verdict | Evidence / notes | Blocking? |
|---|---|---|---|
| Whole-public-site route readiness | BLOCKER | Investors/Deals text length ~122/118 and scaffold copy present. | yes |
| Primary nav contract | BLOCKER | Primary nav and hero CTAs point to draft Investors/Deals routes. | yes |
| Mobile nav convention | BLOCKER | Nav remains visible grid/button pattern at 320/390 rather than hamburger/menu. | yes |
| Desktop nav IA/copy | ISSUE | Every nav item has label plus cue (`Home/Crossing`, etc.). | yes for Loop 002 |
| Super-wide hero integrity | ISSUE | H1 line count 5 at 1440, 1728, 1920. | yes for Loop 002 |
| Hero illustration/art-direction adequacy | ISSUE | Current crossing chart is coherent but still diagrammatic/prototype-like. | no |
| Contact page intent clarity | ISSUE | More complete than draft, but still frames itself around pre-prod limitations. | no |
| Legal/content sanity | ISSUE | Conservative, but reads as pre-production status page rather than final legal surface. | no |
| Footer refinement | ISSUE | Functional but basic; pre-production disclosure dominates closure. | no |
| Cross-route visual/copy consistency | ISSUE | Homepage/team/contact/legal have developed pages; Investors/Deals are scaffolds. | yes for Loop 002 |

## Asset caps

| Dimension | Cap? | Reason | Input needed |
|---|---:|---|---|
| Human warmth | yes | No approved photography; portrait placeholders remain. | Approved photography or explicit non-photo identity decision. |
| Imagery quality | yes | Crossing illustration is CSS/SVG-like system asset, not commissioned art. | Art direction or acceptance of reduced graphic role. |
| Proof/claims | yes | No new client/transaction/credential proof approved. | Claims register/counsel/client sign-off. |

## Weighted dimensions

| Dimension | Weight | Baseline score | Weighted | Evidence / notes |
|---|---:|---:|---:|---|
| Strategic fit | 1.3 | 3.4 | 4.42 | Quiet/discreet direction fits, but public route gaps weaken seriousness. |
| Ownable crossing idea | 1.2 | 3.3 | 3.96 | Ownable enough to work, not yet refined enough as signature art. |
| Composition and hierarchy | 1.1 | 2.8 | 3.08 | Hero and public route hierarchy issues remain. |
| Typographic rhythm/tension | 1.0 | 2.7 | 2.70 | 5-line wide hero and repeated page scale issues. |
| Originality / anti-template | 1.2 | 3.0 | 3.60 | Better than generic finance, but route/card scaffolding creates template smell. |
| Restraint | 1.0 | 3.4 | 3.40 | Restrained, but sometimes too sparse/unfinished. |
| Institutional credibility | 1.3 | 2.8 | 3.64 | Blank routes and pre-prod legal/footer lower trust. |
| Human warmth | 0.9 | 2.4 | 2.16 | Asset-capped and placeholder-heavy. |
| Imagery / placeholder discipline | 1.0 | 2.7 | 2.70 | Honest no-stock posture, but art/portrait placeholders cap quality. |
| Accessibility | 1.3 | 4.1 | 5.33 | No obvious captured status/overflow blockers; needs full axe/focus recheck per candidate. |
| Performance | 1.0 | 4.2 | 4.20 | Static site; build passes; perf budget still to rerun for candidate. |
| Compliance/security risk | 1.4 | 3.8 | 5.32 | Conservative wording, but legal/contact copy needs sanity/refinement. |
| AI-template smell | 1.3 | 2.0 | 2.60 | Premium finance tropes and simple generated-feeling modules remain. |
| **Total** |  |  | **44.60** |  |

## Browser / QA evidence

- Screenshots: `screenshots/`
- Browser QA JSON: `browser-qa.json`
- Metrics summary: `metrics-summary.md`
- Console/page errors: captured in JSON; no immediate console issue surfaced in summary.
- Horizontal overflow: `0` across captured route/width matrix.
- H1 issue: homepage H1 5 lines at 1440, 1728, 1920.
- Draft/scaffold issue: draft/pre-production language is present across captured text; especially Investors/Deals.

## Regression guard baseline

Candidates must not regress accessibility, conservative compliance posture, performance, or honest no-fake-imagery discipline while addressing visible readiness blockers.
