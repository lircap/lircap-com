# Pre-prod deployment and password-gate runbook

**Control issue:** #24  
**Implementation issue:** #4  
**Pre-prod host:** `lircap.pendragon.bot`

This runbook defines the secure workflow for standing up pre-prod. It is not the final deployed config; it is the control document that implementation issue #4 must follow and verify.

## Security objectives

- Serve a static Astro build with minimal attack surface.
- Put the password gate at the reverse-proxy edge before any site route is reachable.
- Keep credentials and hashes out of git, PRs, issue comments, and logs.
- Verify unauthenticated and authenticated behaviour before sharing any client link.
- Record security-header evidence before closing #4.

## Target architecture

```text
visitor
  ↓ HTTPS
Caddy on external VPS
  ↓ basic_auth gate + security headers + compression/cache
static files from deployed Astro build
```

Runtime Node/SSR/database services are out of scope unless a later issue justifies them. The pre-prod target should be static files served by Caddy.

## DNS and host assumptions

- Hostname: `lircap.pendragon.bot`
- TLS: Caddy-managed ACME certificate.
- Root directory: implementation issue #4 must confirm final path, provisionally `/srv/lircap/preprod/current`.
- Deploy user/path/secrets: define during #4 without committing secrets.

## Credential handling

Never commit the password, basic-auth hash, or secret material.

Recommended pattern:

1. Generate/store the password in the team secret manager or VPS secret store.
2. Generate a Caddy-compatible bcrypt hash on the VPS.
3. Store the hash in an environment file readable by the Caddy service or in a root-owned Caddy snippet outside the repo.
4. Reference the secret/hash from deployed Caddy config without exposing it in repository files.

Example command shape, to be run only on the VPS and without pasting output into GitHub:

```bash
caddy hash-password --plaintext '<password-from-secret-manager>'
```

Do not put the plaintext password in shell history. Prefer a prompt/secret file workflow where possible.

## Caddy config shape

Illustrative only — issue #4 must adapt paths and secret reference on the VPS.

```caddyfile
lircap.pendragon.bot {
  encode zstd gzip

  # Gate before all routes.
  basic_auth {
    {$LIRCAP_PREPROD_USER} {$LIRCAP_PREPROD_PASSWORD_HASH}
  }

  root * /srv/lircap/preprod/current
  file_server

  header {
    Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    X-Content-Type-Options "nosniff"
    Referrer-Policy "strict-origin-when-cross-origin"
    Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
    X-Frame-Options "DENY"
  }

  # Add CSP once asset model is known. Start strict; loosen only with evidence.
  header Content-Security-Policy "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; script-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"

  @static path *.css *.js *.png *.jpg *.jpeg *.webp *.svg *.ico *.woff *.woff2
  header @static Cache-Control "public, max-age=31536000, immutable"
  header Cache-Control "no-store"
}
```

## Required smoke tests for #4 closeout

Run from outside the VPS where possible. Do not print the password.

### 1. Unauthenticated request is blocked

```bash
curl -I https://lircap.pendragon.bot
```

Expected:

- `401 Unauthorized`
- `WWW-Authenticate` present
- no page HTML is returned without credentials

### 2. Authenticated request reaches site

Use a safe credential injection pattern. Do not paste the password into logs.

```bash
curl -I --user "$LIRCAP_PREPROD_USER:$LIRCAP_PREPROD_PASSWORD" https://lircap.pendragon.bot
```

Expected:

- `200 OK` or appropriate static route status
- Caddy/security headers present
- no credential value in captured logs/comments

### 3. Route protection check

Check more than `/`:

```bash
curl -I https://lircap.pendragon.bot/some-known-route
curl -I --user "$LIRCAP_PREPROD_USER:$LIRCAP_PREPROD_PASSWORD" https://lircap.pendragon.bot/some-known-route
```

Expected: every route is gated before site handling.

### 4. Header check

Record presence of:

- `Strict-Transport-Security`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Frame-Options` or equivalent `frame-ancestors` CSP
- `Content-Security-Policy`
- `Cache-Control`
- `Content-Encoding` where compression applies

### 5. Browser check

Browser QA must capture:

- unauthenticated gate view or browser auth prompt evidence;
- authenticated page load screenshot;
- console status after authenticated load;
- no mixed-content errors.

## #4 closeout evidence required

Issue #4 cannot close without:

1. DNS target confirmed.
2. Deployed static build path confirmed.
3. Password gate at Caddy/edge confirmed.
4. Unauthenticated `401` evidence.
5. Authenticated page-load evidence.
6. Header evidence.
7. Browser QA evidence.
8. Statement that no secrets/passwords/hashes were committed or printed.
9. Rollback instructions.

## Rollback shape

Implementation issue #4 must document the actual rollback path. Preferred shape:

- keep timestamped releases under `/srv/lircap/preprod/releases/<timestamp>`;
- `current` is a symlink;
- rollback by switching `current` to previous release and reloading Caddy if config changed;
- verify with authenticated and unauthenticated smoke tests.

## Follow-up issues

- #4 performs the actual deployment and smoke checks.
- #5 wires CI/deploy automation.
- #16 performs broader browser QA/performance/accessibility closeout.
- #27 owns launch/cutover readiness.
