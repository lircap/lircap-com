## Design-loop promotion evidence

Closes / contributes to:
Run ID:
Winning candidate:
Baseline commit:
Candidate branch:

### Summary


### Why this candidate wins

- Baseline weighted score:
- Candidate weighted score:
- Delta:
- Materiality threshold:
- Promotion gate vs stop logic: default +3 percentage points is a promotion gate; trend-aware stop/switch logic recorded separately.
- Priority dimensions improved:
- Critical regressions: none / list with rationale
- Hard blockers: none

### Evidence

- Baseline scorecard:
- Candidate scorecard:
- Screenshots:
- Browser QA / axe:
- Audience-agent UX findings, if used:
- Performance:
- Pre-prod deploy smoke, if applicable:

### Specialist review verdicts

- `agent:design-director`:
- `agent:brand-strategist`:
- `agent:ux-researcher` / audience agents:
- `agent:browser-qa-reviewer`:
- `agent:code-security-reviewer`:
- `agent:devops-deployer`:

### Trend-aware decision note

| Run | Baseline score | Winning candidate score | Delta | Rolling average delta | Dimensions improved | Dimensions regressed | Decision |
|---|---:|---:|---:|---:|---|---|---|
| | | | | | | | promote / continue broad / surgical / request new inputs / stop |

- Marginal gain vs effort/risk cost:
- Noise vs real improvement assessment:
- Why this promotion should become the next baseline:

### Parent verification

- `git status --short --branch`:
- `git diff --check`:
- `npm run typecheck`:
- `npm run lint`:
- `npm test -- --run`:
- `npm run build`:
- `python3 scripts/check-placeholders.py`:
- `npm run perf:budget`:

### Post-merge requirement

After merge, verify #55 auto-deploy and record:

- `CI` run:
- `Deploy pre-prod` run:
- external unauth/auth smoke:
- active release symlink:
- new baseline score:
