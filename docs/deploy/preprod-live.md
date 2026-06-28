# Pre-prod deployment — lircap.pendragon.bot

**Control issue:** #4  
**Status:** live password-gated pre-prod deployment.

## Public endpoint

- URL: `https://lircap.pendragon.bot/`
- DNS: Cloudflare DNS-only `A` record to `188.245.250.56`
- Host: `backoffice`
- Host access path: Tailscale SSH to `100.106.234.125`
- Site path on host: `/opt/lircap-preprod/site`
- Runtime path on host: `/opt/lircap-preprod`
- Runtime service: Docker Compose project `lircap-preprod`, service `caddy`
- Edge/reverse proxy: Caddy `2.10`

## Protection model

The whole site is protected by Caddy `basic_auth` before file serving. There is no app-level route handling before the password gate.

Credential material is stored only on the VPS:

- `/opt/lircap-preprod/secrets/preview.env`
- mode: `0600`
- owner: `root`

Do not commit or print the password or password hash. Client review packages must provide password instructions without including the password in the issue/PR body.

## Deployment layout

```text
/opt/lircap-preprod/
  Caddyfile
  docker-compose.yml
  site -> releases/<active-release>/  # symlink managed by auto deploy
  releases/
    <utc-stamp>-<run-id>-<attempt>-<sha>/
      index.html
      contact/index.html
      for-deals/index.html
      for-investors/index.html
      legal/index.html
      team/index.html
      robots.txt
      sitemap.xml
  secrets/preview.env       # not in git; root-only
  caddy-data/               # ACME/cert state
  caddy-config/
```

The first automated deploy moves any pre-existing non-symlink `site/` directory to `releases/pre-automation-backup-<release-id>` before creating the `site` symlink. Each later deploy creates a timestamped release, atomically moves a temporary `site.next` symlink into place as `site`, and force-recreates only the Caddy container so Docker's `./site` bind mount resolves to the newly active release.

## Current verification evidence

Captured after deployment:

```text
DNS: lircap.pendragon.bot -> 188.245.250.56
HTTP: 308 redirect to https://lircap.pendragon.bot/
Unauthenticated HTTPS: 401
WWW-Authenticate: Basic realm="restricted"
Authenticated HTTPS: 200
Authenticated page contains Lir Capital text and main route navigation
TLS verification result: 0
```

Security header evidence on both unauthenticated and authenticated HTTPS responses:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
X-Frame-Options: DENY
Cache-Control: no-store
```

Service evidence:

```text
Docker Compose project: lircap-preprod
Container: lircap-preprod-caddy-1
Ports: 188.245.250.56:80->80/tcp, 188.245.250.56:443->443/tcp
```

## Operating commands

Run these on `backoffice`:

```bash
cd /opt/lircap-preprod
docker compose ps
docker compose logs --tail=100 caddy
docker compose restart caddy
```

## Automated redeploy static build

Primary redeploy path is GitHub Actions workflow `.github/workflows/deploy-preprod.yml` using the `preprod` Environment.

Automatic path:

1. Merge reviewed code to `main`.
2. `CI` runs on `main`.
3. `Deploy pre-prod` starts on `workflow_run` only after successful same-repository `push` CI completion on `main`.
4. The deploy workflow rebuilds/verifies, joins the Tailscale tailnet, uploads a tarball over SSH with pinned `known_hosts`, activates a timestamped release under `/opt/lircap-preprod/releases/`, force-recreates Caddy for the symlinked bind mount, and smokes the password gate.

Manual fallback:

1. Open **Actions → Deploy pre-prod → Run workflow**.
2. Run the workflow; it redeploys `main` only and does not accept arbitrary refs.
3. Confirm the `preprod` environment and smoke checks pass.

Required GitHub Environment configuration is documented in `docs/deploy/ci-and-deploy.md`. The `preprod` Environment must be restricted to `main` deployments only. Values must be stored as Environment secrets/vars only; do not commit them.

## Credential rotation

Run on `backoffice`. Do not print the generated password in shared logs.

```bash
cd /opt/lircap-preprod
umask 077
PW=$(openssl rand -base64 32 | tr -d '=+/\n' | cut -c1-28)
printf 'PREVIEW_USER=%s\nPREVIEW_PASSWORD=%s\n' 'lircap' "$PW" > secrets/preview.env
set -a
. secrets/preview.env
set +a
HASH=$(docker run --rm --env PREVIEW_PASSWORD caddy:2.10 caddy hash-password --plaintext "$PREVIEW_PASSWORD")
python3 - <<'PY'
from pathlib import Path
import os
p = Path('Caddyfile')
text = p.read_text()
user = os.environ['PREVIEW_USER']
hash_value = os.environ['HASH']
lines = text.splitlines()
out = []
in_auth = False
for line in lines:
    stripped = line.strip()
    if stripped == 'basic_auth {':
        in_auth = True
        out.append(line)
        continue
    if in_auth and stripped == '}':
        out.append(f'\t\t{user} {hash_value}')
        out.append(line)
        in_auth = False
        continue
    if in_auth:
        continue
    out.append(line)
p.write_text('\n'.join(out) + '\n')
PY
docker compose restart caddy
```

## Rollback

Preferred rollback is to repoint `/opt/lircap-preprod/site` to a previous timestamped release and keep Caddy running with the existing password gate:

```bash
cd /opt/lircap-preprod
readlink -f site
find releases -maxdepth 1 -mindepth 1 -type d -printf '%TY-%Tm-%Td %TH:%TM %p\n' | sort
ln -sfn /opt/lircap-preprod/releases/<previous-release> site
docker compose up -d --force-recreate --no-deps caddy
```

After rollback, verify unauthenticated `/` returns `401` with a case-insensitive `WWW-Authenticate` Basic challenge, then verify authenticated `/`, `/team/`, `/contact/`, `/robots.txt`, and `/sitemap.xml` load expected content.

If public exposure must be removed, delete or disable the `lircap.pendragon.bot` DNS record in Cloudflare.

## Closeout notes

- Password gate is at the reverse-proxy edge.
- Static build is served from `site/`; there is no runtime app server/database.
- Password/hash values are excluded from git and should not be pasted into issues, PRs, or chat.
- Browser/screenshot critique remains part of downstream visual QA; this issue verifies deployment/auth routing.
