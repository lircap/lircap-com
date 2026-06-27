# Lir Capital website

Repository for the rebuilt Lir Capital website.

- Pre-prod target: `https://lircap.pendragon.bot`
- Source artefacts live outside the repo at `/root/lircap/artifacts/`.
- Canonical build brief: [`docs/brief/canonical-brief.md`](docs/brief/canonical-brief.md)
- Artefact register: [`docs/source/artefact-register.md`](docs/source/artefact-register.md)

This project is in pre-production implementation. Implementation must trace back to the canonical brief and relevant GitHub issue acceptance criteria.

## Local development

```bash
npm ci
npm run dev
npm run typecheck
npm run lint
npm test -- --run
npm run build
```

## Project shape

- `src/pages/` — Astro static routes.
- `src/layouts/` — shared document layouts.
- `src/styles/` — global design foundation.
- `src/content/` — typed content collections.
- `content/pages/` — planning page briefs used before copy freeze.
- `docs/` — canonical brief, workflow gates, launch/deploy/QA controls.

The site is static-first: no runtime database, app server, CMS, or exposed admin surface should be introduced without a new issue and explicit approval.
