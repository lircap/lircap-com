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

## Review verdicts

| Candidate | Design director | Brand strategist | Browser QA | Code/security | DevOps | Notes |
|---|---|---|---|---|---|---|
| A | | | | | | |
| B | | | | | | |
| C | | | | | | |

## Decision

- Decision: PROMOTE candidate __ / NO PROMOTION / REQUEST NEW INPUTS
- Winning branch, if any:
- PR, if any:
- Merge commit, if any:
- Auto-deploy run, if any:
- New baseline score, if promoted:

## Score trend note

- Previous baseline score:
- New baseline score or no-promotion score:
- Delta:
- Consecutive no-promotion / below-threshold runs:
- Adaptation for next run: broad exploration / surgical optimisation / new input required

## Closeout evidence

- Parent verification commands:
- CI:
- Deploy/pre-prod smoke:
- Screenshots/browser evidence:
- Remaining risks/follow-up issues:
