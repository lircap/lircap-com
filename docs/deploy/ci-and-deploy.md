# CI and deploy workflow

**Control issue:** #5

## CI quality gate

GitHub Actions workflow: `.github/workflows/ci.yml`.

Runs on pull requests and pushes to `main`:

1. `npm ci`
2. `npm run typecheck`
3. `npm run lint`
4. `npm test -- --run`
5. `npm run build`
6. `python3 scripts/check-placeholders.py`
7. `npm run perf:budget`

CI fails on broken install, typecheck, lint, tests, build, placeholder scan, or performance budget.

## Performance budget

`npm run perf:budget` executes `scripts/check-performance-budget.mjs` after `npm run build`.

Initial static-budget limits:

- total `dist/`: 1.5 MB
- JavaScript: 250 KB
- CSS: 250 KB

This is a lightweight PRD-aligned guard until full Lighthouse automation is added.

## Pre-prod deploy workflow

Workflow stub: `.github/workflows/deploy-preprod.yml`.

It is manual (`workflow_dispatch`) and currently builds/uploads the `dist/` artifact only. Actual VPS sync is intentionally not enabled until #4 confirms:

- deployment host and path;
- SSH key secret names;
- Caddy config location;
- password-gate credentials/hashes stored outside source;
- unauthenticated/authenticated smoke evidence requirements.

## Secrets policy

Secrets must live in GitHub Actions secrets, the VPS secret store, or the configured external secret manager. Do not commit or print:

- SSH private keys;
- Caddy basic-auth password or hash;
- deployment host secrets;
- analytics tokens;
- API keys.

## Follow-up

- #4 performs the actual pre-prod deployment and password-gate smoke checks.
- #16 performs broader browser QA/performance/accessibility closeout.
- #27 controls production launch/cutover.
