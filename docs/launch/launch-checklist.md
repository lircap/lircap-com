# Launch readiness and production cutover checklist

**Control issue:** #27

This checklist defines what must be true before moving from password-gated pre-prod to production. It is a blocking launch control, not a suggestion.

## Launch decision rule

Production launch is blocked by any of:

- unresolved compliance Gate A or Gate B item;
- placeholder markers, lorem, stock/AI stand-ins, or unapproved imagery;
- unapproved/high-risk claims or unauthorised regulatory language;
- failed build, browser QA, accessibility, Lighthouse/performance, or broken-link checks;
- missing redirects/SEO/privacy/legal checks;
- missing rollback path;
- missing approval record.

## 1. Compliance gates

Required before production DNS or password-gate change:

- [ ] Gate A status reviewed in `docs/compliance/gate-status.md`.
- [ ] Gate B status reviewed in `docs/compliance/gate-status.md`.
- [ ] Every public claim maps to `docs/compliance/claims-register.md` or approved client/legal copy.
- [ ] No “authorised”/regulated activity wording unless cleared and documented.
- [ ] Named counterparties/case studies/testimonials have consent and substantiation, or are removed/anonymised.
- [ ] Private-markets/investor-solicitation language is reviewed.
- [ ] Legal/privacy/footer text is reviewed.
- [ ] Approval/counsel/client sign-off link recorded below.

## 2. Content and design gates

- [ ] All page briefs in `content/pages/` are either frozen or superseded by approved implementation docs.
- [ ] No lorem/TBD/filler copy remains in production pages.
- [ ] `docs/design/critique-rubric.md` final review completed for major visual pages.
- [ ] Final page reviews answer “Does this look AI-generated?” with `No — approved` or documented exception.
- [ ] No generic stock finance imagery, AI stand-ins, glass towers, handshakes, generic waves, or literal maritime clichés.
- [ ] News/announcements are disabled unless cadence and compliance workflow are real.

## 3. Placeholder and asset gates

- [ ] `python3 scripts/check-placeholders.py` returns PASS.
- [ ] All production imagery is listed in `docs/design/asset-inventory.md` or an approved successor.
- [ ] Rights/licensing status confirmed.
- [ ] Model releases confirmed for partner portraits.
- [ ] Retouch/colour-grade/crop status confirmed.
- [ ] No placeholder marker remains in source or build output.

## 4. CI and build gates

Once scaffold exists, run and capture output:

```bash
npm ci
npm run typecheck
npm run lint
npm test -- --run
npm run build
```

- [ ] CI is green on production/cutover PR.
- [ ] Build output inspected.
- [ ] No secret material in build logs or PR comments.

## 5. Browser QA / accessibility / performance gates

Use `docs/qa/quality-gates.md`.

- [ ] Desktop screenshots captured.
- [ ] Mobile screenshots captured.
- [ ] Tablet/mid viewport screenshots captured where layout changes.
- [ ] Browser console clean or findings dispositioned.
- [ ] Reduced-motion behaviour verified for motion-heavy slices.
- [ ] Axe or equivalent accessibility scan run.
- [ ] Keyboard/focus behaviour verified.
- [ ] Lighthouse or equivalent performance/SEO/accessibility/best-practices notes captured.
- [ ] No release-blocking accessibility defects remain.

## 6. Pre-prod password-gate evidence

Use `docs/deploy/preprod-runbook.md`.

- [ ] Unauthenticated `/` returns `401` / auth challenge.
- [ ] Unauthenticated known routes return `401` / auth challenge.
- [ ] Unauthenticated static asset URL is gated.
- [ ] Authenticated `/` loads.
- [ ] Authenticated known routes load.
- [ ] Browser authenticated load screenshot captured.
- [ ] Browser console clean after authenticated load.
- [ ] No password/hash/secrets printed.

## 7. Security headers

Capture evidence for:

- [ ] `Strict-Transport-Security`
- [ ] `X-Content-Type-Options`
- [ ] `Referrer-Policy`
- [ ] `Permissions-Policy`
- [ ] `X-Frame-Options` or equivalent `frame-ancestors` CSP
- [ ] `Content-Security-Policy`
- [ ] `Cache-Control`
- [ ] `Content-Encoding` where compression applies

## 8. SEO, redirects, analytics, privacy

Use `docs/seo/redirect-map.md` and `docs/source/existing-site-audit.md`.

- [ ] `/` resolves to production homepage.
- [ ] `/contact/` resolves or redirects deliberately.
- [ ] `/privacy/` and `/terms/` resolve or redirect deliberately.
- [ ] `/hello-world/`, `/category/uncategorized/`, and `/author/webmail-cole-tcgmail-com/` are deliberately removed/redirected/noindexed.
- [ ] WordPress admin/runtime/API surfaces are not exposed: `/wp-admin/`, `/xmlrpc.php`, `/wp-json/`.
- [ ] Sitemap generated or deliberately omitted with rationale.
- [ ] Robots policy checked.
- [ ] Canonical metadata checked.
- [ ] Open Graph/social preview checked.
- [ ] Analytics present only if privacy/legal review approves it.
- [ ] Privacy/legal footer links checked.

## 9. DNS, cutover, and rollback

- [ ] Production host and DNS target confirmed.
- [ ] TTL plan recorded.
- [ ] Caddy/edge config reviewed.
- [ ] TLS certificate issued/renewal path verified.
- [ ] Previous production state/backout option recorded.
- [ ] Rollback command/path documented.
- [ ] Person responsible for launch window identified.
- [ ] Post-cutover smoke test commands recorded.

## 10. Approval record

Before password gate is removed or production DNS changes, record:

| Approval | Required from | Link/date | Status |
|---|---|---|---|
| Client approval | Client/stakeholder | TBD | pending |
| Compliance/legal approval | Compliance reviewer/counsel/client | TBD | pending |
| Design approval | Design director/client | TBD | pending |
| Technical launch approval | Orchestrator/DevOps | TBD | pending |

## 11. Production cutover PR/issue evidence

The production cutover issue/PR must reference this completed checklist and include:

- checklist status;
- commands run;
- browser screenshots;
- auth/password-gate evidence;
- security-header evidence;
- SEO/redirect evidence;
- approval links;
- rollback path;
- post-launch monitoring notes.
