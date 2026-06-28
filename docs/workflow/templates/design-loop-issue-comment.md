## Design-loop run update

Run ID:
Baseline commit / pre-prod:
Control issue:

### Objective


### Baseline evidence

- Screenshots:
- Browser QA:
- Baseline score:
- Asset/input caps:

### Scoring rules declared before implementation

- Formula:
- Promotion threshold:
- Promotion gate vs stop logic: default +3 percentage points is a promotion gate; loop stop/switch decision also considers trend, noise, effort, and risk.
- Priority dimensions:
- Critical dimensions:
- Regression guard:

### Candidates

| Candidate | Branch | Hypothesis | Score delta | Blockers | Verdict |
|---|---|---|---:|---|---|
| A | | | | | |
| B | | | | | |
| C | | | | | |

### Review verdicts

- `agent:design-director`:
- `agent:brand-strategist`:
- `agent:ux-researcher` / audience agents:
- `agent:browser-qa-reviewer`:
- `agent:code-security-reviewer`:
- `agent:devops-deployer`:

### Audience-agent UX findings

- Scenarios/evidence used:
- Audience roles: `audience:institutional-investor` / `audience:founder-dealmaker` / `audience:intermediary-adviser` / `audience:compliance-conscious-reviewer`
- Synthesis:
- Dimension implications:
- Hard blockers remain controlling? yes/no
- Real human/client testing available? yes/no; if yes, record how it outranks simulated evidence.

### Decision

- Decision: PROMOTE / NO PROMOTION / REQUEST NEW INPUTS
- Rationale:
- PR, if promoted:
- If no promotion, what we learned:

### Score trend adaptation

| Run | Baseline score | Winning / no-promotion candidate score | Delta | Rolling average delta | Dimensions improved | Dimensions regressed | Decision |
|---|---:|---:|---:|---:|---|---|---|
| | | | | | | | continue broad / surgical / request new inputs / stop |

- Delta vs baseline:
- Marginal gain per candidate/run:
- Noise vs real improvement assessment:
- Evidence for/against local optimum:
- Expected improvement vs effort/risk cost:
- Consecutive below-threshold/no-promotion runs:
- Next mode: continue broad / surgical optimisation / request new inputs / stop

### Parent verification

- Commands run:
- CI/deploy evidence:
- Remaining risks:
