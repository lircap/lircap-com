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

## Objective

State the bounded opportunity, not a broad redesign.

## Baseline evidence

- Commit:
- Pre-prod deploy run:
- Screenshots:
- Browser QA JSON:
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

| Candidate | Design director | Brand strategist | UX researcher / audience | Browser QA | Code/security | DevOps | Notes |
|---|---|---|---|---|---|---|---|
| A | | | | | | | |
| B | | | | | | | |
| C | | | | | | | |

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
- Remaining risks/follow-up issues:
