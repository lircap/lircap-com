# Design-loop run record

Run ID:
Control issue:
Started:
Closed:
Orchestrator:
Baseline commit:
Baseline pre-prod URL:

## Pre-declared scoring rules

These must be filled before candidate implementation starts.

- Materiality threshold formula:
  - Default: `(candidate weighted score - baseline weighted score) / 75 × 100`.
  - Default promotion threshold: at least +3 percentage points of max score, equivalent to +2.25 weighted points.
  - The fixed +3 percentage-point rule is the default promotion gate, not the only loop stopping rule; stop/switch decisions also consider trend, noise, effort, and risk.
- Priority dimensions for this run:
- Critical dimensions for this run:
- Regression guard:
  - Default: no critical dimension may regress by more than 0.25 weighted points.
  - Default: no non-critical dimension may regress by more than 1.0 weighted point unless explicitly accepted in `decision.md`.
- Asset/input caps declared before implementation:
- Production-design craft gate:
  - Required? yes/no
  - Reviewer:
  - Candidate scoring allowed only after: PASS / focused changes re-reviewed
  - Craft regression tolerance:
    - Default: no material craft regression on priority routes/viewports.
    - Default: unresolved production-design BLOCKER prevents scoring and promotion.

## Objective

State the bounded opportunity, not a broad redesign.

## Baseline evidence

- Commit:
- Pre-prod deploy run:
- Screenshots:
- Browser QA JSON:
- Production-design baseline audit:
- Known baseline craft defects:
- Baseline scorecard:
- Known asset/input caps:

## Selected opportunities

| Opportunity | Hypothesis | Source reviewer | Affected surface | Risk |
|---|---|---|---|---|
| | | | | |

## Candidates

| Candidate | Branch | Implementer | Hypothesis | Status | Score delta | Verdict |
|---|---|---|---|---|---:|---|
| A | | | | | | |
| B | | | | | | |
| C | | | | | | |

## Production-design craft QA plan

Required for visual/UI candidates before final scoring.

- Production-design reviewer:
- Evidence supplied:
  - Baseline screenshots:
  - Candidate screenshots:
  - Local/deployed URL:
  - Browser QA JSON:
- Priority routes/components:
- Required viewports/states:
  - default smoke widths: mobile ~390, tablet/mid ~1024, desktop ~1440
  - expanded craft breakpoint matrix: 320, 390, 768, 980, 981, 1024, 1180, 1181, 1280, 1440, and 1728/1920 where practical
  - route/component-specific breakpoint edges:
  - baseline/candidate comparability rule: capture the same widths for baseline and candidate, or document why a width is candidate-only / not practical
  - active nav states for every nav-bearing route:
  - hover/focus states:
  - reduced motion, if relevant:
- Known baseline craft defects not to worsen:
  - [ ]
- Craft checks in scope:
  - [ ] spacing rhythm
  - [ ] alignment/grid/container edges
  - [ ] typography measure/leading/letter-spacing/kerning/line breaks/top alignment
  - [ ] component consistency
  - [ ] responsive polish
  - [ ] visual hierarchy/focal order
  - [ ] placeholder/imagery discipline
  - [ ] premium restraint / no cheap decoration
- Candidate scoring blocked until production-design verdict is PASS or required changes are fixed and re-reviewed? yes/no
- Expanded craft screenshots indexed in browser-QA JSON or production-design review? yes/no

## Audience-agent UX testing plan

Use only when relevant to the run objective. Audience agents review supplied screenshots/local URL and constrained scenarios; findings inform dimensions but do not bypass hard blockers.

- UX researcher:
- Evidence supplied: screenshots / local URL / deployed URL
- Scenarios:
  - Scenario 1:
  - Scenario 2:
- Audience roles selected: `audience:institutional-investor` / `audience:founder-dealmaker` / `audience:intermediary-adviser` / `audience:compliance-conscious-reviewer`
- Real human/client testing available? yes/no; if yes, record why it outranks simulated audience evidence.

| Audience role | Candidate(s) reviewed | Scenario | Finding summary | Dimension implications | Confidence |
|---|---|---|---|---|---:|
| | | | | | |

## Review verdicts

| Candidate | Design director | Brand strategist | Production design | UX researcher / audience | Browser QA | Code/security | DevOps | Notes |
|---|---|---|---|---|---|---|---|---|
| A | | | | | | | | |
| B | | | | | | | | |
| C | | | | | | | | |

## Decision

- Decision: PROMOTE candidate __ / NO PROMOTION / REQUEST NEW INPUTS
- Winning branch, if any:
- PR, if any:
- Merge commit, if any:
- Auto-deploy run, if any:
- New baseline score, if promoted:

## Score trend note

| Run | Baseline score | Winning / no-promotion candidate score | Delta | Rolling average delta | Dimensions improved | Dimensions regressed | Decision |
|---|---:|---:|---:|---:|---|---|---|
| | | | | | | | continue broad / surgical / request new inputs / stop |

- Previous baseline score:
- New baseline score or no-promotion score:
- Delta:
- Marginal gain per candidate/run:
- Noise vs real improvement assessment:
- Evidence for/against local optimum:
- Consecutive no-promotion / below-threshold runs:
- Expected improvement vs effort/risk cost:
- Adaptation for next run: continue broad / surgical optimisation / request new inputs / stop

## Closeout evidence

- Parent verification commands:
- CI:
- Deploy/pre-prod smoke:
- Screenshots/browser evidence:
- Production-design review:
- Craft defects fixed/re-reviewed:
- Remaining risks/follow-up issues:
