# Production-design baseline review — Loop 002

Run ID: `20260629-loop-002-whole-site-readiness`
Candidate: baseline
Branch/worktree: `main` at `a4b027035ecebfd676e6fce06af2902acbc34546`
Reviewer/profile: Morwenna parent baseline pass
Date: 2026-06-29
Evidence reviewed:
- Screenshots: `baseline/screenshots/`
- Browser QA JSON: `baseline/browser-qa.json`
- Metrics summary: `baseline/metrics-summary.md`

## Verdict

- Verdict: BLOCKER
- Candidate scoring allowed? baseline only
- Promotion blocked? yes, until Loop 002 hard blockers are addressed
- Summary: The baseline is technically renderable and has no captured horizontal overflow, but it is not whole-site agency-ready. The primary failures are public route incompleteness, mobile nav convention, desktop nav copy indecision, wide hero typography, and unfinished trust surfaces.

## Reviewed surfaces

| Route / component | 320 | 390 | 768 | 1024 | 1180 | 1280 | 1440 | 1728/1920 | Notes |
|---|---|---|---|---|---|---|---|---|---|
| `/` homepage | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | H1 reaches 5 lines from 1440+. |
| `/for-investors/` | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | Draft/scaffold route. |
| `/for-deals/` | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | Draft/scaffold route. |
| `/team/` | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | Long page, honest placeholders, craft still capped. |
| `/contact/` | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | More complete but reads around pre-prod limitations. |
| `/legal/` | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | Conservative but still a status/disclosure placeholder. |
| Header/nav | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | Visible mobile grid; dual labels/cues. |
| Footer | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | reviewed | Functional/basic; pre-production disclosure dominates. |

## Craft checklist

| Area | Verdict | Evidence / defect | Severity | Required fix |
|---|---|---|---|---|
| Spacing rhythm / vertical cadence | ISSUE | Sparse public route pages and repeated large sections create unfinished feel. | high | Add route-specific content modules and tighten section hierarchy. |
| Grid / container alignment | PASS | No captured overflow; shell generally aligns. | low | Preserve. |
| Typography / line breaks | BLOCKER | Homepage H1 5 lines at 1440/1728/1920; team 320 has narrow H1 fragment. | high | Add hero max-width/type clamp rules and screenshot verify. |
| Visual hierarchy / focal order | ISSUE | Mobile hero gives much vertical weight to navigation/graphic before message; Investors/Deals lack hierarchy. | high | Fix nav pattern and public route page jobs. |
| Component consistency | ISSUE | Developed pages and draft pages differ too sharply in polish. | high | Whole-site component/content pass. |
| Responsive polish | BLOCKER | Mobile nav pattern is unconventional exposed grid; wide hero degrades. | blocking | Use conventional mobile menu and wide hero integrity gate. |
| Hover/focus visual fit | ISSUE | Needs focused recheck after nav change. | medium | Re-test with menu. |
| Placeholder / imagery discipline | ISSUE | Honest placeholders, but hero art still feels prototype-like. | medium | Refine or reduce illustration; keep no fake imagery. |
| Premium restraint / no cheap decoration | ISSUE | Restraint is strong, but some surfaces cross into underbuilt. | high | Add simple-but-finished details. |
| Screenshot delta vs baseline | n/a | Baseline. | n/a | n/a |

## Whole-site agency-readiness checks

| Area | Verdict | Evidence / defect | Severity | Required fix |
|---|---|---|---|---|
| Public route completeness | BLOCKER | Investors/Deals have scaffold copy only. | blocking | Add safe route-purpose content or hide/rename. |
| Mobile nav expected pattern | BLOCKER | No hamburger/menu; grid visible at 320/390. | blocking | Implement right-aligned menu pattern. |
| Desktop nav IA/copy | BLOCKER | Dual labels/cues suggest indecision. | high | Use clean functional labels unless client approves descriptors. |
| Super-wide hero | BLOCKER | H1 5 lines at 1440–1920. | high | Adjust type/layout and verify. |
| Hero illustration craft | ISSUE | Coherent but not sufficiently refined as signature asset. | medium | Refine/reduce and improve optical relationship. |
| Section flow/divider hierarchy | ISSUE | Hero divider + home-brief rule still risks repeated-rule feel. | medium | Clarify transition and section job. |
| Contact page task fit | ISSUE | Has email and guidance, but copy focuses on system limitations. | medium | Reframe around user task and expectation. |
| Legal page sanity | ISSUE | Conservative, but reads as pre-production compliance status. | medium | Minimal public-facing legal/disclosure page. |
| Footer closure/refinement | ISSUE | Basic disclosure/nav; lacks final intentional closure. | medium | Refine structure/copy and visual closure. |
| Contact-sheet wall review | BLOCKER | Public routes do not yet feel like one finished system. | blocking | Whole-site consistency candidate needed. |

## Baseline comparison

- Craft improvements vs prior process: expanded evidence is now captured for all public routes.
- Craft regressions vs baseline: n/a.
- Baseline defects preserved: listed above.
- Baseline defects fixed: n/a.

## Required focused changes

- [ ] Mobile nav convention.
- [ ] Clean desktop nav labels.
- [ ] Investors/Deals public route readiness.
- [ ] Homepage wide hero and illustration refinement/reduction.
- [ ] Contact/legal/footer sanity and finishing.
- [ ] Whole-site wall review after candidate.

## Scorecard implications

Affected dimensions:
- Composition and hierarchy: blocked by hero/public-route issues.
- Typographic rhythm/tension: blocked by wide hero line count.
- Restraint: restrained but underbuilt in places.
- Institutional credibility: lowered by route/contact/legal/footer readiness.
- Human warmth: asset-capped.
- Imagery / placeholder discipline: honest but craft-capped.
- Accessibility: must be rechecked after nav/menu changes.
- AI-template smell: remains elevated due scaffold pages and repeated modules.

Recommended scoring action:
- [x] Score only after focused changes
- [x] Reject baseline for agency-readiness quality
