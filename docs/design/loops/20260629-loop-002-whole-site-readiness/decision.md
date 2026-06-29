# Candidate decision — Loop 002 whole-site agency-readiness

Run ID: `20260629-loop-002-whole-site-readiness`
Date: 2026-06-29
Orchestrator: Morwenna Pendragon
Control issue: #68

## Decision

**PROMOTE Candidate A-salvaged**: `design-loop/20260629-loop-002-a-shell-routes`.

Candidate A was selected after parent verification and focused salvage because it is the only candidate that clears the Loop 002 hard blockers:

- conventional mobile menu;
- clean desktop nav labels;
- no draft/scaffold Investors/Deals routes;
- clearer contact and legal surfaces;
- refined footer disclosure;
- fixed wide homepage H1 from 5 lines to 3 lines at 1440/1728/1920;
- improved/reduced crossing chart;
- no captured horizontal overflow;
- all local verification checks passed.

## Candidate comparison

| Candidate | Score / status | Main improvements | Blocking failures | Decision |
|---|---:|---|---|---|
| Baseline | 44.60 | Existing restrained direction and static performance | Mobile nav pattern, dual descriptors, draft routes, wide hero, contact/legal/footer readiness | Reject baseline |
| A-salvaged | 57.85 | Shell, routes, contact/legal/footer, mobile menu, clean nav, focused hero/chart fix | No hard blockers found; asset caps remain | Promote |
| B | Rejected before final score | Refined hero concept/transition | Leaves mobile nav, dual descriptors, draft Investors/Deals, contact/legal/footer blockers; H1 metric worsened because deliberate spans produce 6+ line boxes | Reject |
| C | Rejected before final score | Some system polish and heading scale improvements | Leaves mobile nav, dual descriptors, draft Investors/Deals, contact/legal/footer blockers | Reject |

## Why B/C were not promoted

### Candidate B

Candidate B addressed the homepage hero and chart but left the whole-site readiness blockers untouched. It also produced many H1 line boxes in metrics due explicit line spans; visually the mobile hero still feels too large and does not solve the public route/nav failures. It is useful as a source of focused chart/transition ideas only.

### Candidate C

Candidate C improved some visual consistency and reduced the baseline homepage wide H1 line count from 5 to 4, but it did not address public route substance, mobile nav convention, or desktop nav descriptors. It is a polish pass, not a blocker-clearing candidate.

## Parent verification

Commands run on A-salvaged branch:

```bash
git diff --check
npm run typecheck
npm run lint
npm test -- --run
npm run build
```

Results:

- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm test -- --run` passed: 10 files / 46 tests.
- `npm run build` passed: 6 pages built.
- Browser capture completed for all public routes at 320, 390, 768, 1024, 1180, 1280, 1440, 1728, 1920.
- Mobile menu open/Escape state captured.

## Promotion threshold

- Baseline: 44.60 / 75.
- A-salvaged: 57.85 / 75.
- Delta: +13.25 weighted points.
- Percentage of max score: +17.67 percentage points.
- Threshold: +3 percentage points / +2.25 weighted points.
- Result: clears threshold and hard gates.

## Remaining follow-ups

- Team portraits / human warmth remain asset-capped until approved photography or explicit non-photo direction exists.
- The crossing chart is better but still not a commissioned brand asset; further art-direction may be worthwhile if it becomes the signature mark.
- Contact/legal should be reviewed by client/counsel before production launch.
- Whole-site system polish from Candidate C can be reconsidered after A lands, but only as a focused non-blocker pass.
