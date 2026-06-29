# Design-loop run record

Run ID: `20260629-loop-002-whole-site-readiness`
Control issue: #68
Started: 2026-06-29T11:00:00Z
Closed:
Orchestrator: Morwenna Pendragon
Baseline commit: `a4b027035ecebfd676e6fce06af2902acbc34546`
Baseline pre-prod URL: `https://lircap.pendragon.bot/` / local baseline captured from current `main`

## Pre-declared scoring rules

- Materiality threshold formula:
  - `(candidate weighted score - baseline weighted score) / 75 × 100`.
  - Default promotion threshold: at least +3 percentage points of max score, equivalent to +2.25 weighted points.
  - The fixed +3 percentage-point rule is the promotion gate; stop/switch decisions also consider trend, noise, effort, and risk.
- Priority dimensions for this run:
  - Whole-site route readiness and page-purpose completeness.
  - Navigation IA/convention clarity.
  - Production craft and responsive polish.
  - Contact/legal/footer trust and sanity.
  - Cross-route visual/copy consistency.
- Critical dimensions for this run:
  - Accessibility/focus/keyboard basics.
  - Compliance/security/legal sanity.
  - Institutional credibility.
  - Mobile nav convention.
  - Super-wide hero integrity.
  - Public nav/CTA route readiness.
- Regression guard:
  - No critical dimension may regress by more than 0.25 weighted points.
  - No non-critical dimension may regress by more than 1.0 weighted point unless explicitly accepted in `decision.md`.
- Asset/input caps declared before implementation:
  - No approved photography; team warmth and imagery quality remain capped.
  - No counsel-approved legal/privacy copy beyond confirmed entity details; legal page must remain conservative and non-invented.
  - No confirmed new proof/client/transaction claims; no candidate may invent claims.
- Production-design craft gate:
  - Required? yes
  - Reviewer: `agent:production-design-reviewer`
  - Candidate scoring allowed only after: PASS or focused changes re-reviewed
  - Craft regression tolerance: none on priority routes/viewports.

## Objective

Loop 002 closes the escaped process/site defects from Pilot 001: make the public site intentionally complete, conventionally usable, and agency-presentable across all linked routes and key breakpoints before further broad visual exploration.

## Baseline evidence

- Commit: `a4b027035ecebfd676e6fce06af2902acbc34546`
- Pre-prod deploy run: not yet re-smoked in this run; local baseline captured from `main`.
- Screenshots: `baseline/screenshots/`
- Browser QA JSON: `baseline/browser-qa.json`
- Metrics summary: `baseline/metrics-summary.md`
- Production-design baseline audit: `baseline/production-design-review.md`
- Baseline scorecard: `baseline/scorecard.md`
- Known asset/input caps: photography, legal/privacy counsel copy, proof claims.

## Selected opportunities

| Opportunity | Hypothesis | Source reviewer | Affected surface | Risk |
|---|---|---|---|---|
| Global shell + route readiness | Clean nav labels, conventional mobile menu, fuller public route content, contact/legal/footer sanity will remove major trust blockers. | Client feedback + retrospective agents | Header/nav, `/for-investors/`, `/for-deals/`, `/contact/`, `/legal/`, footer | Copy/legal scope creep; must avoid unsourced claims. |
| Hero + homepage narrative craft | Reducing hero scale, improving wide breakpoints, refining the crossing asset, and resolving dividers/orphan section will address visible craft misses. | Client feedback + production review | Homepage hero, crossing illustration, first transition | Art-direction ceiling without commissioned asset. |
| Whole-site consistency polish | Standardizing spacing, headings, dividers, cards, CTAs, and footer across routes will lift agency-readiness. | Retrospective agents | All public routes | Could become too broad; must stay hard-blocker oriented. |

## Candidates

| Candidate | Branch | Implementer | Hypothesis | Status | Score delta | Verdict |
|---|---|---|---|---|---:|---|
| A-salvaged | `design-loop/20260629-loop-002-a-shell-routes` | delegated + parent focused salvage | Global shell + public route readiness plus focused hero/chart fix | promoted | +13.25 | PROMOTE |
| B | `design-loop/20260629-loop-002-b-hero-home` | delegated | Hero + homepage narrative craft | reviewed | blocked by remaining whole-site gates | REJECT |
| C | `design-loop/20260629-loop-002-c-system-polish` | delegated | Whole-site consistency polish | reviewed | blocked by remaining whole-site gates | REJECT |

## Production-design craft QA plan

Required for visual/UI candidates before final scoring.

- Production-design reviewer: pending
- Evidence supplied:
  - Baseline screenshots: `baseline/screenshots/`
  - Candidate screenshots: candidate-specific `screenshots/`
  - Local/deployed URL: local server / pre-prod after promotion
  - Browser QA JSON: baseline/candidate `browser-qa.json`
- Priority routes/components:
  - `/`, `/for-investors/`, `/for-deals/`, `/team/`, `/contact/`, `/legal/`, header/nav, footer.
- Required viewports/states:
  - 320, 390, 768, 1024, 1180, 1280, 1440, 1728, 1920.
  - Active nav states for every nav-bearing route.
  - Focus states and reduced motion where relevant.
- Known baseline craft defects not to worsen:
  - [ ] Mobile nav is an exposed multi-button grid, not conventional hamburger/menu.
  - [ ] Desktop nav carries dual label/cue descriptors.
  - [ ] Homepage H1 becomes 5 lines at 1440+ and remains visually heavy.
  - [ ] Investors/Deals are draft/scaffold routes.
  - [ ] Footer is minimal/basic and contains pre-production disclosure language.
  - [ ] Repeated dividers/rules risk accidental rather than intentional hierarchy.
- Candidate scoring blocked until production-design verdict is PASS or required changes are fixed and re-reviewed? yes

## Audience-agent UX testing plan

- UX researcher: pending
- Evidence supplied: screenshots and local URL
- Scenarios:
  - Mobile visitor opens nav and finds the right route.
  - Investor/deal visitor follows nav/CTA and assesses destination usefulness.
  - Intermediary finds how to contact Lir and understands what to send/expect.
  - Compliance-conscious reviewer inspects Legal for coherence and false specificity.
- Audience roles selected: `audience:institutional-investor`, `audience:founder-dealmaker`, `audience:intermediary-adviser`, `audience:compliance-conscious-reviewer`
- Real human/client testing available? yes — Iain feedback from Pilot 001 outranks simulated audience evidence.

## Review verdicts

| Candidate | Design director | Brand strategist | Production design | UX researcher / audience | Browser QA | Code/security | DevOps | Notes |
|---|---|---|---|---|---|---|---|---|
| A | | | | | | | | |
| B | | | | | | | | |
| C | | | | | | | | |

## Decision

- Decision: PROMOTE Candidate A-salvaged
- Winning branch, if any: `design-loop/20260629-loop-002-a-shell-routes`
- PR, if any: pending
- Merge commit, if any:
- Auto-deploy run, if any:
- New baseline score, if promoted: provisional 57.85 / 75

## Score trend note

| Run | Baseline score | Winning / no-promotion candidate score | Delta | Rolling average delta | Dimensions improved | Dimensions regressed | Decision |
|---|---:|---:|---:|---:|---|---|---|
| Pilot 001 | see previous run | promoted A | positive but escaped blockers | n/a | homepage/team warmth | whole-site readiness | process patched, continue surgical |
| Loop 002 | 44.60 | 57.85 | +13.25 | +13.25 | route readiness, nav clarity, contact/legal/footer, wide hero | no material critical regression | promote A-salvaged |

- Previous baseline score: 44.60 / 75 provisional whole-site score.
- New baseline score or no-promotion score: 57.85 / 75 provisional A-salvaged score.
- Delta: +13.25 weighted points / +17.67 percentage points of max score.
- Marginal gain per candidate/run: high; one candidate cleared hard blockers after focused salvage.
- Noise vs real improvement assessment: real improvement; hard blockers eliminated in browser/text metrics and visual review.
- Evidence for/against local optimum: not at local optimum; asset-capped dimensions remain for future loops.
- Consecutive no-promotion / below-threshold runs: 0
- Expected improvement vs effort/risk cost: high; defects were known and material.
- Adaptation for next run: focused art-direction/team imagery or post-promotion polish, not broad route-readiness.

## Post-loop retrospective and process patch

Required before Loop 003.

## Closeout evidence

- Parent verification commands: `git diff --check`, `npm run typecheck`, `npm run lint`, `npm test -- --run`, `npm run build`, Playwright screenshot/metrics capture.
- CI: pending PR.
- Deploy/pre-prod smoke: pending merge/deploy.
- Screenshots/browser evidence: baseline and A-salvaged candidate captured under this run folder.
- Production-design review: A-salvaged passed with follow-up issues in `candidates/a-salvaged/scorecard.md` and `decision.md`.
- Craft defects fixed/re-reviewed: mobile nav, desktop nav labels, draft routes, wide hero line count, contact/legal/footer sanity.
- Remaining risks/follow-up issues: team photography/human warmth, commissioned hero art direction, counsel-approved legal/contact wording.
