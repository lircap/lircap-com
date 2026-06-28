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
- Priority dimensions improved:
- Critical regressions: none / list with rationale
- Hard blockers: none

### Evidence

- Baseline scorecard:
- Candidate scorecard:
- Screenshots:
- Browser QA / axe:
- Performance:
- Pre-prod deploy smoke, if applicable:

### Specialist review verdicts

- `agent:design-director`:
- `agent:brand-strategist`:
- `agent:browser-qa-reviewer`:
- `agent:code-security-reviewer`:
- `agent:devops-deployer`:

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
