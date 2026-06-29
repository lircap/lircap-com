# Production-design craft QA

Run ID:
Candidate: baseline / A / B / C
Branch/worktree:
Reviewer/profile: `agent:production-design-reviewer`
Date:
Evidence reviewed:
- Screenshots:
- Local/deployed URL:
- Browser QA JSON:
- Baseline comparison:

## Verdict

- Verdict: PASS / NEEDS FOCUSED CHANGES / REJECT / BLOCKER
- Candidate scoring allowed? yes/no
- Promotion blocked? yes/no
- Summary:

## Reviewed surfaces

| Route / component | 320 | 390 | 768 | 980 | 981 | 1024 | 1180 | 1181 | 1280 | 1440 | 1728/1920 | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | reviewed / n/a | reviewed / n/a | reviewed / n/a | reviewed / n/a | reviewed / n/a | reviewed / n/a | reviewed / n/a | reviewed / n/a | reviewed / n/a | reviewed / n/a | reviewed / n/a | |

If a width is not practical or not relevant to the run, record the omission and rationale. Candidate evidence should be comparable with baseline evidence at the same widths unless explicitly waived by the orchestrator.

## Craft checklist

| Area | Verdict | Evidence / defect | Severity | Required fix |
|---|---|---|---|---|
| Spacing rhythm / vertical cadence | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Grid / container alignment | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Wordmark/logo lockup optical alignment | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Typography measure / leading / letter-spacing / kerning / line breaks / top alignment | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Visual hierarchy / focal order | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Component consistency | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Responsive polish | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Hover/focus visual fit | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Placeholder / imagery discipline | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Premium restraint / no cheap decoration | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Screenshot delta vs baseline | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |

## Whole-site agency-readiness checks

These checks are mandatory before promotion even when the candidate hypothesis is narrow. If a public route is visible in primary nav, footer nav, or hero CTAs, it must be production-grade or deliberately hidden/renamed.

| Area | Verdict | Evidence / defect | Severity | Required fix |
|---|---|---|---|---|
| Public route completeness: `/`, `/for-investors/`, `/for-deals/`, `/team/`, `/contact/`, `/legal/` | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Mobile nav expected pattern: conventional right-aligned hamburger/menu or approved alternative | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Mobile menu toggle craft: icon/text optical alignment, button shape, touch target, and safe spacing from frame/container lines; use visible text only when it adds clarity beyond the common hamburger affordance | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Desktop nav IA/copy: clean labels, no confusing dual descriptors or internal taxonomy feel | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Header/brand lockup: wordmark, descriptor, nav, and frame lines are optically aligned at mobile/tablet/desktop; temporary marks still meet production-craft standards | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Super-wide hero: 1728/1920 composition, line breaks, image/text relationship | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Hero illustration craft: line weight, optical spacing, scale, originality, art-direction adequacy | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Headline/illustration semantic lockup: the hero message and visual metaphor describe the same idea without strained language or conflicting metaphors | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Section flow/divider hierarchy: no orphaned sections, repeated accidental rules, missing-module feel | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Divider single-source check: adjacent sections must not show two competing horizontal rules/ornaments; if an ornamental transition exists, suppress nearby borders/rules | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Contact page task fit: user knows how/why to contact and what happens next | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Legal page sanity: coherent, conservative, sourced/approved or clearly minimal; no nonsense | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Footer closure/refinement: simple-but-finished, not default/basic | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |
| Contact-sheet wall review: all public routes together feel like one crafted system | PASS / ISSUE / BLOCKER | | low/med/high/blocking | |

## Baseline comparison

- Craft improvements vs baseline:
- Craft regressions vs baseline:
- Baseline defects preserved:
- Baseline defects fixed:

## Required focused changes

- [ ] Route:
      Viewport:
      Screenshot:
      Defect:
      Severity:
      Proposed owner/profile:
      Required fix:
      Blocks scoring? yes/no

## Re-review

- Re-review date:
- Evidence:
- Remaining defects:
- Final verdict:

## Scorecard implications

Affected scorecard dimensions:
- Composition and hierarchy:
- Typographic rhythm/tension:
- Restraint:
- Institutional credibility:
- Human warmth:
- Imagery / placeholder discipline:
- Accessibility:
- AI-template smell:

Recommended scoring action:
- [ ] Allow scoring
- [ ] Score only after focused changes
- [ ] Reject candidate for craft quality
