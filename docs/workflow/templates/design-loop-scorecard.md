# Design-loop scorecard

Run ID:
Candidate: baseline / A / B / C
Branch/worktree:
Reviewer/profile:
Date:
Evidence path or links:

## Verdict

- Verdict: PROMOTE / NO PROMOTION / REJECT / NEEDS FOCUSED CHANGES
- Total weighted score:
- Baseline weighted score:
- Delta vs baseline:
- Materiality threshold for this run:
- Promotion gate: default +3 percentage points of max score unless run pre-declared otherwise; this is not the sole loop stopping rule.
- Formula: `(candidate weighted score - baseline weighted score) / 75 × 100`; 75 is the default max weighted score.
- Example: baseline 52.00, candidate 54.50 → +2.50 weighted points → +3.33 percentage points of max score, clearing the default 3-point threshold.
- Priority dimensions selected before implementation:
- Critical dimensions selected before implementation:
- Regression guard selected before implementation:
- Hard blockers: none / list
- Production-design craft verdict: PASS / NEEDS FOCUSED CHANGES / REJECT / BLOCKER
- Candidate scoring allowed after craft QA? yes/no

## Asset caps

Record any dimensions that cannot currently reach top score because required inputs are missing.

| Dimension | Cap? | Reason | Input needed |
|---|---:|---|---|
| Human warmth | yes/no | | |
| Imagery quality | yes/no | | |
| Proof/claims | yes/no | | |

## Proof / provenance evidence

This section is mandatory for brand-strategist review even when no new copy is added.

| Claim/proof point | Approved source / claim ID | Candidate changed it? | Risk / note |
|---|---|---|---|
| | | yes/no | |

## Production-design craft QA

Required for visual/UI candidates before final scoring.

| Check | Verdict | Evidence / notes | Blocking? |
|---|---|---|---|
| Spacing rhythm / vertical cadence | PASS / ISSUE / BLOCKER | | yes/no |
| Alignment / grid / container edges | PASS / ISSUE / BLOCKER | | yes/no |
| Typography measure / leading / line breaks | PASS / ISSUE / BLOCKER | | yes/no |
| Component consistency / repeated modules | PASS / ISSUE / BLOCKER | | yes/no |
| Responsive polish across required widths | PASS / ISSUE / BLOCKER | | yes/no |
| Visual hierarchy / focal order | PASS / ISSUE / BLOCKER | | yes/no |
| Placeholder / imagery discipline | PASS / ISSUE / BLOCKER | | yes/no |
| Premium restraint / no cheap decoration | PASS / ISSUE / BLOCKER | | yes/no |
| Screenshot delta vs baseline | PASS / ISSUE / BLOCKER | | yes/no |

Required craft changes before scoring:
- [ ]

Production-design reviewer verdict:
- PASS / NEEDS FOCUSED CHANGES / REJECT / BLOCKER

Scoring impact:
- [ ] Scoring allowed
- [ ] Scoring blocked pending focused changes
- [ ] Candidate rejected for craft quality

## Weighted dimensions

Score 0–5. Weighted score = score × weight. Use `BLOCKER` when promotion is impossible regardless of total.

Production-design findings should be reflected in the relevant existing dimensions — especially Composition and hierarchy, Typographic rhythm/tension, Restraint, Imagery / placeholder discipline, Accessibility, and AI-template smell. Do not inflate scores by treating craft QA as separate from these dimensions. Unresolved material craft defects may block scoring regardless of total.

| Dimension | Weight | Baseline score | Candidate score | Delta | Blocker? | Evidence / notes |
|---|---:|---:|---:|---:|---|---|
| Strategic fit | 1.3 | | | | | |
| Ownable crossing idea | 1.2 | | | | | |
| Composition and hierarchy | 1.1 | | | | | |
| Typographic rhythm/tension | 1.0 | | | | | |
| Originality / anti-template | 1.2 | | | | | |
| Restraint | 1.0 | | | | | |
| Institutional credibility | 1.3 | | | | | |
| Human warmth | 0.9 | | | | | |
| Imagery / placeholder discipline | 1.0 | | | | | |
| Accessibility | 1.3 | | | | | |
| Performance | 1.0 | | | | | |
| Compliance/security risk | 1.4 | | | | | |
| AI-template smell | 1.3 | | | | | |

## Browser / QA evidence

- Mobile screenshot:
- Tablet/mid screenshot:
- Desktop screenshot:
- Reduced-motion evidence:
- Focus/keyboard evidence:
- Console/page errors:
- Axe/equivalent:
- Performance budget/Lighthouse:
- Production-design screenshots reviewed:
- Production-design review path:
- Craft defects / re-review status:
- Pre-prod/auth smoke if relevant:

## Audience-agent UX findings

Use this section only when audience-agent testing is in scope for the run. Findings inform dimension scores but do not bypass hard blockers; simulated users are not real market proof, and real human/client testing outranks simulated evidence.

| Audience role | Scenario / evidence used | Outcome | Confidence | Dimension implications | Notes / friction |
|---|---|---|---:|---|---|
| `audience:institutional-investor` | | PASSABLE / CONCERN / BLOCKING-FOR-THIS-AUDIENCE | | | |
| `audience:founder-dealmaker` | | PASSABLE / CONCERN / BLOCKING-FOR-THIS-AUDIENCE | | | |
| `audience:intermediary-adviser` | | PASSABLE / CONCERN / BLOCKING-FOR-THIS-AUDIENCE | | | |
| `audience:compliance-conscious-reviewer` | | PASSABLE / CONCERN / BLOCKING-FOR-THIS-AUDIENCE | | | |

- UX researcher synthesis:
- Real human/client testing available? yes/no; if yes, how it outweighs or conflicts with simulated findings:
- Any hard blockers surfaced separately above? yes/no

## Regression guard

List any dimension that regressed even if the total score improved.

| Dimension | Regression | Accepted? | Rationale |
|---|---|---|---|
| | | yes/no | |

## Craft regression guard

| Craft area | Baseline state | Candidate state | Regression? | Accepted? | Rationale |
|---|---|---|---|---|---|
| Spacing rhythm | | | yes/no | yes/no | |
| Alignment/grid | | | yes/no | yes/no | |
| Typography/line breaks | | | yes/no | yes/no | |
| Responsive polish | | | yes/no | yes/no | |
| Component consistency | | | yes/no | yes/no | |
| Placeholder/imagery discipline | | | yes/no | yes/no | |

## Promotion decision rationale

Explain why this candidate should or should not replace the baseline. Include whether the change is a material improvement, merely different, blocked by missing inputs, or below expected improvement after effort/risk cost.

## Trend contribution

- Marginal gain for this candidate vs baseline:
- Dimensions improved:
- Dimensions regressed:
- Likely noise vs real improvement:
- Effect on next loop mode: continue broad / surgical / request new inputs / stop

## Required changes, if any

Production-design required changes:
- [ ] Route / viewport / screenshot:
      Defect:
      Required fix:
      Re-review result:

Other required changes:
- [ ]

## Does this look AI-generated?

Allowed answers:

- No — approved, with evidence.
- Not yet — revise, with specific changes.
- Yes — blocked, with causes.
