# Quality gates: CI, accessibility, performance, and browser QA

**Control issue:** #25

This document defines the measurable quality gates required before pre-prod review and final launch readiness.

## Gate philosophy

A green build is necessary but not sufficient. Visual, accessibility, performance, browser-console, and password-gate evidence must be captured for relevant issues.

## CI baseline

Once the Astro scaffold exists, CI should run:

```bash
npm ci
npm run typecheck
npm run lint
npm test -- --run
npm run build
```

If a command is not yet available, the PR must state why and link the issue that will add it.

## Browser smoke automation

Once a runnable site exists, rendered UI PRs should include Playwright or equivalent browser smoke checks where practical.

Minimum automated smoke coverage should include:

- homepage loads without client-side errors;
- primary navigation links resolve;
- core page routes return expected status/content;
- reduced-motion mode can be exercised for motion-heavy slices;
- pre-prod authentication checks can be run safely without printing credentials.

If Playwright or equivalent browser automation is not yet available for a PR, the PR must state why, include manual browser evidence instead, and link the issue that will add or extend automated browser smoke coverage.

## Static/docs-only changes

For docs/workflow-only PRs, minimum checks are:

```bash
git status --short --branch
git diff --check
git diff --stat
```

Plus any targeted script used to verify acceptance criteria.

## Accessibility gate

Target: WCAG 2.2 AA.

For rendered pages/components:

- keyboard operability and visible focus;
- semantic headings/landmarks where applicable;
- contrast checked for critical foreground/background pairs;
- `prefers-reduced-motion` respected;
- forms have labels, errors, and privacy context;
- axe or equivalent scan run where practical.

Accessibility defects are release blockers unless the PR/issue explicitly defers them with owner, reason, and follow-up issue.

## Performance gate

PRD target once site is scaffolded:

- Lighthouse Performance ≥ 95;
- Accessibility ≥ 95;
- Best Practices ≥ 95;
- SEO ≥ 95;
- no unexpected large JS payload for static pages;
- images sized/responsive and not stock/AI stand-ins.

Before automated Lighthouse exists, capture manual Lighthouse or equivalent notes for major UI closeout.

## Browser QA gate

For UI work, capture:

- desktop screenshot at ~1440px;
- mobile screenshot around 390px;
- tablet/mid viewport where layout changes materially;
- console status after load;
- reduced-motion behaviour for motion-heavy slices;
- no mixed-content errors;
- relevant hover/focus/navigation states;
- authenticated and unauthenticated states when testing pre-prod.

## Whole-site agency-readiness gate

For design-loop promotion or any PR that changes the public shell, homepage hero, nav, footer, or public-route content, browser QA must include a whole-site readiness pass. Technical checks are necessary but not sufficient: a route can pass axe/console/build and still be blocked for being blank, nonsensical, conventionally confusing, or below the agreed craft bar.

Required public routes unless explicitly hidden/removed from navigation:

- `/`
- `/for-investors/`
- `/for-deals/`
- `/team/`
- `/contact/`
- `/legal/`
- footer links and primary CTA destinations

Blocking findings include:

- visible public route is blank, scaffold-like, or lacks a clear page job;
- primary nav or hero CTA points to a non-production-grade destination;
- mobile nav does not use the conventional right-aligned hamburger/menu pattern unless an alternative is explicitly approved;
- mobile menu toggle shows visible icon/text misalignment, unnecessary label clutter, undersized/unclear hit target, or border collision with frame/container lines;
- desktop nav labels/descriptors feel like internal taxonomy or copy indecision;
- wordmark/logo lockup has visible optical alignment defects, accidental wrapping, uneven descriptor line rhythm, or sloppy relationship to frame/nav; temporary marks are not exempt from craft QA;
- hero fails at 1728/1920 via overlap, accidental one-word lines, or degraded hierarchy;
- hero headline and hero illustration use mismatched or strained metaphors, weakening the ownable idea;
- contact page does not explain how/why to contact and what happens next;
- legal page contains nonsense, placeholder legal wording, false specificity, or unsourced claims;
- footer looks default/basic rather than intentionally simple and refined;
- repeated dividers/rules, spacing, headings, CTAs, or components are inconsistent across routes.
- adjacent section boundaries show two competing horizontal dividers/ornaments where one intentional transition should own the separation.

Recommended evidence: a contact-sheet artifact showing all public routes at 320, 390, 768, 1024, 1180, 1280, 1440, 1728, and 1920 where practical, plus any route-specific danger widths.

## Design gate integration

Use `docs/design/critique-rubric.md` for major visual slices. Design work is not done until:

- at least two critique/refinement passes exist;
- screenshots are linked;
- weakest element has been removed/refined;
- final review answers: “Does this look AI-generated?”

## Pre-prod password-gate QA

For `lircap.pendragon.bot`, issue #16 and #4 must include real evidence that:

- unauthenticated `/` returns `401` / auth challenge;
- unauthenticated known routes and at least one static asset are also gated;
- authenticated `/` and known routes load;
- security headers are present, using the same measurable header set required by `docs/deploy/preprod-runbook.md`:
  - `Strict-Transport-Security`;
  - `X-Content-Type-Options`;
  - `Referrer-Policy`;
  - `Permissions-Policy`;
  - `X-Frame-Options` or equivalent `frame-ancestors` CSP;
  - `Content-Security-Policy`;
  - `Cache-Control`;
  - `Content-Encoding` where compression applies;
- browser console is clean after authenticated load;
- no credentials/passwords/hashes are printed.

## Required PR evidence slots

Every PR should include the relevant command/output summary in `.github/pull_request_template.md`:

- targeted checks;
- build/typecheck/lint/tests;
- browser/screenshot checks;
- deploy/auth smoke if infrastructure;
- specialist review verdicts;
- parent/orchestrator verification.

## Issue #16 closeout requirement

Issue #16 cannot close without real browser/screenshot evidence, including:

1. desktop and mobile screenshots for implemented pages;
2. browser console status;
3. accessibility findings/check output;
4. reduced-motion verification for motion-heavy slices;
5. performance/Lighthouse or equivalent notes;
6. pre-prod password-gate evidence once deployed;
7. list of defects filed or explicit statement that no release-blocking defects remain.

## Defect handling

Findings must be filed as GitHub issues when they are not fixed in the same PR. Each defect should include:

- route/component;
- viewport/device;
- steps to reproduce;
- expected vs actual;
- screenshot/console evidence;
- severity;
- proposed owner/profile.
