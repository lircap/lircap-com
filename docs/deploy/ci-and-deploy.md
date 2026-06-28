# CI and deploy workflow

**Control issue:** #5<br>
**Auto pre-prod deploy issue:** #55

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

GitHub Actions workflow: `.github/workflows/deploy-preprod.yml`.

The workflow deploys only from trusted sources:

- automatically after the `CI` workflow completes successfully for a same-repository `push` to `main` via `workflow_run`;
- manually through `workflow_dispatch`, which always redeploys `main` and does not accept arbitrary refs.

The deploy job also checks `github.ref == 'refs/heads/main'` for manual runs. Configure the GitHub Environment `preprod` deployment branch policy to allow deployments from `main` only; this prevents a manually selected non-main workflow file from receiving environment secrets.

The Tailscale GitHub Action is pinned to a reviewed commit SHA rather than a mutable major tag because it receives a tailnet auth key.

It does **not** deploy on `pull_request` events. PRs must merge to `main`, pass CI, and then the deploy workflow performs a fresh install, verification, build, deploy, and smoke check.

The deploy job uses the GitHub Environment named `preprod`. Configure any required environment approvals there if the team wants a human gate before the VPS update.

### Deployment model

1. Check out the trusted ref.
2. Run the same quality gate as CI: typecheck, lint, tests, build, placeholder scan, and performance budget.
3. Create `lircap-dist.tgz` from `dist/`.
4. Join the Tailscale tailnet with the GitHub Environment `TS_AUTHKEY` secret so the runner can reach the private pre-prod SSH target.
5. Connect to the VPS over SSH using GitHub Environment secrets/vars and a pinned `known_hosts` file.
6. Validate deploy configuration and restrict `PREPROD_RUNTIME_PATH` to `/opt/lircap-preprod` or a child path.
7. Extract to a timestamped release directory under `/opt/lircap-preprod/releases/<utc-stamp>-<run-id>-<attempt>-<sha>`.
8. Move the first pre-automation `site/` directory aside once, if needed, then atomically repoint `/opt/lircap-preprod/site` as a symlink to the new release via `site.next`.
9. Force-recreate Caddy with `docker compose up -d --force-recreate --no-deps caddy` so Docker re-resolves the symlinked bind mount.
10. Run smoke checks against `https://lircap.pendragon.bot/`.

Caddy basic auth remains configured on the VPS and is not modified by this workflow.

## Required GitHub Environment configuration

Create/configure the GitHub Environment `preprod`. Set its deployment branch policy to `main` only. Do not commit values.

### Environment secrets

- `TS_AUTHKEY` — reusable, ephemeral, preauthorised Tailscale auth key used by GitHub Actions to join the tailnet. It must be valid for repeated deploys and ACL/tag-permitted to reach the pre-prod SSH target at `100.106.234.125:22`.
- `PREPROD_SSH_PRIVATE_KEY` — private key allowed to deploy to the pre-prod VPS.
- `PREPROD_SSH_KNOWN_HOSTS` — pinned SSH known_hosts entry for the VPS host. This replaces any need to disable host-key checking.
- `PREPROD_BASIC_AUTH_USER` — username for post-deploy smoke checks.
- `PREPROD_BASIC_AUTH_PASSWORD` — password for post-deploy smoke checks.

### Environment variables

- `PREPROD_URL` — pre-prod base URL. Default used by the workflow if unset: `https://lircap.pendragon.bot`.
- `PREPROD_SSH_HOST` — Tailscale SSH target host, currently `100.106.234.125`.
- `PREPROD_SSH_PORT` — SSH port. Default used by the workflow if unset: `22`.
- `PREPROD_SSH_USER` — SSH user. Default used by the workflow if unset: `root`.
- `PREPROD_RUNTIME_PATH` — runtime directory. Default used by the workflow if unset: `/opt/lircap-preprod`.

## Smoke evidence expectations

The deploy workflow should show command success/failure without printing credentials.

Expected checks:

- unauthenticated `GET /` returns HTTP `401`;
- unauthenticated response includes a case-insensitive `WWW-Authenticate: Basic` header;
- authenticated `GET /` contains `Lir Capital` or `private markets`;
- authenticated `GET /team/` contains `team` or `investment`;
- authenticated `GET /contact/` contains `contact` or `conversation`;
- authenticated `GET /robots.txt` contains `User-agent:`;
- authenticated `GET /sitemap.xml` contains `<urlset` or `<sitemapindex`.

If smoke checks fail, treat the deploy as failed and use rollback below.

## Manual redeploy and rerun

Preferred rerun path for a failed transient deploy: rerun the failed `Deploy pre-prod` workflow from GitHub Actions after confirming the cause.

Manual redeploy path:

1. Open **Actions → Deploy pre-prod → Run workflow**.
2. Run the workflow; it redeploys `main` only.
3. Select/run against the `preprod` environment.
4. Confirm the smoke-check step passes.

Do not use the deploy workflow to preview unreviewed PR code; it intentionally has no arbitrary-ref input.

## Rollback

Rollback is performed on `backoffice` over the documented Tailscale SSH path.

```bash
cd /opt/lircap-preprod
readlink -f site
find releases -maxdepth 1 -mindepth 1 -type d -printf '%TY-%Tm-%Td %TH:%TM %p\n' | sort
ln -sfn /opt/lircap-preprod/releases/<previous-release> site
docker compose up -d --force-recreate --no-deps caddy
```

After rollback, rerun smoke checks from the workflow where possible, or manually verify:

- unauthenticated `/` returns `401` with a case-insensitive `WWW-Authenticate` Basic challenge;
- authenticated `/`, `/team/`, `/contact/`, `/robots.txt`, and `/sitemap.xml` load expected content.

If the legacy pre-automation directory was moved, it will be under `releases/pre-automation-backup-<release-id>` and can be selected the same way.

## Secrets policy

Secrets must live in GitHub Actions Environment secrets, the VPS secret store, or the configured external secret manager. Do not commit or print:

- SSH private keys;
- Caddy basic-auth password or hash;
- deployment host secrets;
- analytics tokens;
- API keys.

The workflow must not use `StrictHostKeyChecking=no` and must not log credential values.

## Follow-up

- #16 performs broader browser QA/performance/accessibility closeout.
- #27 controls production launch/cutover.
