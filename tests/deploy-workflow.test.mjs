import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const workflow = readFileSync(new URL('../.github/workflows/deploy-preprod.yml', import.meta.url), 'utf8');
const docs = readFileSync(new URL('../docs/deploy/ci-and-deploy.md', import.meta.url), 'utf8');

const requiredSecretNames = [
  'TS_AUTHKEY',
  'PREPROD_SSH_PRIVATE_KEY',
  'PREPROD_SSH_KNOWN_HOSTS',
  'PREPROD_BASIC_AUTH_USER',
  'PREPROD_BASIC_AUTH_PASSWORD',
];

const requiredVarNames = [
  'PREPROD_URL',
  'PREPROD_SSH_HOST',
  'PREPROD_SSH_PORT',
  'PREPROD_SSH_USER',
  'PREPROD_RUNTIME_PATH',
];

describe('pre-prod deploy workflow safety', () => {
  it('deploys only from trusted main CI completion or manual main dispatch', () => {
    expect(workflow).toMatch(/workflow_run:/);
    expect(workflow).toMatch(/workflows:\s*\[CI\]/);
    expect(workflow).toMatch(/branches:\s*\[main\]/);
    expect(workflow).toMatch(/workflow_dispatch:/);
    expect(workflow).toMatch(/github\.event_name\s*==\s*'workflow_dispatch'/);
    expect(workflow).toMatch(/github\.ref\s*==\s*'refs\/heads\/main'/);
    expect(workflow).toMatch(/github\.event\.workflow_run\.event\s*==\s*'push'/);
    expect(workflow).toMatch(/github\.event\.workflow_run\.conclusion\s*==\s*'success'/);
    expect(workflow).toMatch(/github\.event\.workflow_run\.head_repository\.full_name\s*==\s*github\.repository/);
    expect(workflow).toMatch(/github\.event\.workflow_run\.head_branch\s*==\s*'main'/);
    expect(workflow).toContain("github.event_name == 'workflow_dispatch' && 'main'");
    expect(workflow).not.toMatch(/inputs\.ref/);
    expect(workflow).not.toMatch(/description:\s*Git ref/i);
    expect(workflow).not.toMatch(/^\s*pull_request:/m);
  });

  it('uses the preprod environment, Tailscale, and documented secrets and vars', () => {
    expect(workflow).toMatch(/environment:\s*preprod/);
    expect(workflow).toContain('uses: tailscale/github-action@6cae46e2d796f265265cfcf628b72a32b4d7cade');
    expect(workflow).not.toMatch(/uses:\s*tailscale\/github-action@v\d+/);
    expect(workflow).toContain('secrets.TS_AUTHKEY');
    expect(workflow).not.toContain('secrets.TS_OAUTH_CLIENT_ID');
    expect(workflow).not.toContain('secrets.TS_OAUTH_SECRET');

    for (const name of requiredSecretNames) {
      expect(workflow).toContain(`secrets.${name}`);
      expect(docs).toContain(name);
    }

    for (const name of requiredVarNames) {
      expect(workflow).toContain(name);
      expect(docs).toContain(name);
    }
  });

  it('keeps host-key checking enabled and does not embed secret material', () => {
    expect(workflow).toContain('StrictHostKeyChecking=yes');
    expect(workflow).toContain('UserKnownHostsFile');
    expect(workflow).not.toMatch(/StrictHostKeyChecking=no/i);
    expect(workflow).not.toMatch(/StrictHostKeyChecking=accept-new/i);
    expect(workflow).not.toMatch(/BEGIN (?:OPENSSH|RSA|EC|DSA) PRIVATE KEY/);
    expect(workflow).not.toMatch(/password\s*[:=]\s*['"][^'"${}]+['"]/i);
  });

  it('uses scp-safe port options and shell-safe remote assignments', () => {
    expect(workflow).toContain('SCP_OPTS=(');
    expect(workflow).toContain('-P "$PREPROD_SSH_PORT"');
    expect(workflow).toContain('RUNTIME_PATH=${PREPROD_RUNTIME_PATH@Q}');
    expect(workflow).toContain('PREPROD_RUNTIME_PATH must not contain .. path segments');
    expect(workflow).toContain('PREPROD_RUNTIME_PATH must be under /opt/lircap-preprod');
    expect(workflow).not.toContain('scp "${SSH_OPTS[@]}"');
    expect(workflow).not.toContain("RUNTIME_PATH='$PREPROD_RUNTIME_PATH'");
  });

  it('deploys a tarball to timestamped releases and atomically updates site symlink', () => {
    expect(workflow).toMatch(/tar -C dist -czf lircap-dist\.tgz \./);
    expect(workflow).toContain('RELEASE_STAMP="$(date -u +%Y%m%dT%H%M%SZ)"');
    expect(workflow).toContain('releases/$RELEASE_ID');
    expect(workflow).toContain('ln -sfn "$release_dir" "$RUNTIME_PATH/site.next"');
    expect(workflow).toContain('mv -Tf "$RUNTIME_PATH/site.next" "$RUNTIME_PATH/site"');
    expect(workflow).toContain('docker compose up -d --force-recreate --no-deps caddy');
    expect(workflow).not.toContain('docker compose up -d --no-deps caddy');
  });

  it('smokes the basic-auth gate and authenticated content routes', () => {
    expect(workflow).toMatch(/unauth_code=.*%\{http_code\}/s);
    expect(workflow).toContain('test "$unauth_code" = "401"');
    expect(workflow).toContain("grep -iq '^www-authenticate:[[:space:]]*Basic' \"$headers\"");

    for (const path of ['/', '/team/', '/contact/', '/robots.txt', '/sitemap.xml']) {
      expect(workflow).toContain(`check_route ${path}`);
    }
  });
});
