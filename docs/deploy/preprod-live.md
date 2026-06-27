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
  site/
    index.html
    contact/index.html
    for-deals/index.html
    for-investors/index.html
    legal/index.html
    team/index.html
  secrets/preview.env       # not in git; root-only
  caddy-data/               # ACME/cert state
  caddy-config/
```

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

## Redeploy static build

From a trusted operator machine with repository access:

```bash
cd /root/lircap/repos/lircap-com
npm ci
npm run build
python3 scripts/check-placeholders.py
tar -C dist -czf /tmp/lircap-dist.tgz .
scp -i /root/.ssh/pendragon_hetzner_ed25519 /tmp/lircap-dist.tgz root@100.106.234.125:/tmp/lircap-dist.tgz
ssh -i /root/.ssh/pendragon_hetzner_ed25519 root@100.106.234.125 'tar -xzf /tmp/lircap-dist.tgz -C /opt/lircap-preprod/site && cd /opt/lircap-preprod && docker compose restart caddy'
```

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

1. Keep DNS in place but stop the service:

```bash
cd /opt/lircap-preprod
docker compose down
```

2. Or restore a previous `site/` bundle from backup and restart Caddy.
3. If public exposure must be removed, delete or disable the `lircap.pendragon.bot` DNS record in Cloudflare.

## Closeout notes

- Password gate is at the reverse-proxy edge.
- Static build is served from `site/`; there is no runtime app server/database.
- Password/hash values are excluded from git and should not be pasted into issues, PRs, or chat.
- Browser/screenshot critique remains part of downstream visual QA; this issue verifies deployment/auth routing.
