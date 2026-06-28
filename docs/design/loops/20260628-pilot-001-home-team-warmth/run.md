# Design-loop run record

Run ID: `20260628-pilot-001-home-team-warmth`
Control issue: https://github.com/lircap/lircap-com/issues/62
Started: 2026-06-28
Closed:
Orchestrator: Morwenna Pendragon
Baseline commit: `8827a18a71a4d44bebdd3b7a7c032380ae5b4d78`
Baseline pre-prod URL: `https://lircap.pendragon.bot/`

## Pre-declared scoring rules

These are filled before candidate implementation starts.

- Materiality threshold formula:
  - `(candidate weighted score - baseline weighted score) / 75 × 100`.
  - Promotion threshold: at least +3 percentage points of max score, equivalent to +2.25 weighted points.
  - The fixed +3 percentage-point rule is the default promotion gate, not the only loop stopping rule; stop/switch decisions also consider trend, noise, effort, and risk.
- Priority dimensions for this run:
  - Composition and hierarchy.
  - Institutional credibility.
  - Human warmth.
  - Originality / anti-template.
  - Ownable crossing idea.
- Critical dimensions for this run:
  - Accessibility.
  - Compliance/security risk.
  - Institutional credibility.
  - Imagery / placeholder discipline.
  - Performance.
- Regression guard:
  - No critical dimension may regress by more than 0.25 weighted points.
  - No non-critical dimension may regress by more than 1.0 weighted point unless explicitly accepted in `decision.md`.
- Asset/input caps declared before implementation:
  - Human warmth and imagery quality are capped while neutral portrait placeholders remain.
  - Proof/claims are capped unless approved source material already supports any change.
  - Candidate branches must not add fake, stock, or AI imagery.
- Production-design craft gate:
  - Required: yes, for every visual/UI candidate before final scorecard scoring.
  - Reviewer: `agent:production-design-reviewer`.
  - Candidate scoring allowed only after: PASS or focused changes fixed and re-reviewed.
  - Craft regression tolerance: no material craft regression on priority routes/viewports; unresolved production-design BLOCKER prevents scoring and promotion.

## Objective

Pilot 001 tests whether the homepage/team transition can become more distinctive, warmer, and more editorially authoritative without adding new photography, new claims, tracking, or broad copy rewrites.

## Baseline evidence

- Commit: `8827a18a71a4d44bebdd3b7a7c032380ae5b4d78`
- Pre-prod deploy run: `28325976245` from prior verified deployment of `main`
- Screenshots: `baseline/screenshots/`
- Browser QA JSON: `baseline/browser-qa.json`
- Production-design baseline audit: `baseline/production-design-review.md`
- Additional craft screenshots: `baseline/production-design-screenshots/`
- Known baseline craft defects:
  - high-severity `/team/` overflow around 1180px;
  - awkward tablet nav wrapping for two-word labels;
  - heavy mobile nav table rhythm;
  - homepage crossing illustration order/scale hierarchy issues on mobile/tablet;
  - inconsistent H1 line-breaking/top rhythm across pages;
  - divider/border hierarchy that reads repetitive rather than governed.
- Baseline scorecard: `baseline/scorecard.md`
- Known asset/input caps:
  - team portrait slots remain neutral placeholders;
  - no real photography is available in this run;
  - no new compliance-sensitive proof points are approved for this run.

## Baseline QA summary

- Screenshots captured: 10
- Console/page errors: 0 observed across captured page/viewport combinations
- Axe violations: 0 observed across captured page/viewport combinations
- First keyboard focus: `.skip-link` / “Skip to content”
- Performance budget on current build: previously verified passing; rerun required for candidates.

## Production-design craft QA plan

Required before any Pilot 001 candidate receives final scorecard scoring.

- Production-design reviewer: `agent:production-design-reviewer`
- Evidence supplied:
  - Baseline screenshots: `baseline/screenshots/`
  - Additional baseline craft screenshots: `baseline/production-design-screenshots/`
  - Candidate screenshots: `candidates/<a|b|c>/screenshots/` when implemented
  - Local/deployed URL: candidate local URL or pre-prod URL when promoted
  - Browser QA JSON: baseline/candidate `browser-qa.json`
- Priority routes/components:
  - global header/nav;
  - homepage crossing hero and first section;
  - homepage/team transition;
  - team hero and roster/card system;
  - contact CTA only if affected.
- Required viewports/states:
  - 320, 390, 768, 980, 981, 1024, 1180, 1181, 1280, 1440, and 1728/1920 where practical for affected routes;
  - active nav states for all nav routes;
  - first focus / skip-link and relevant hover/focus states;
  - reduced motion where illustration or transition behaviour changes.
- Known baseline craft defects not to worsen:
  - `/team/` 1180px overflow;
  - awkward tablet nav wrapping and heavy mobile nav table;
  - homepage illustration order/scale and weak integration with H1;
  - inconsistent heading scale/line breaks/top alignment;
  - repeated dividers/borders without clear hierarchy;
  - oversized/dominant team portrait placeholders.
- Craft checks in scope:
  - [x] spacing rhythm
  - [x] alignment/grid/container edges
  - [x] typography measure/leading/line breaks
  - [x] component consistency
  - [x] responsive polish
  - [x] visual hierarchy/focal order
  - [x] placeholder/imagery discipline
  - [x] premium restraint / no cheap decoration
- Candidate scoring blocked until production-design verdict is PASS or required changes are fixed and re-reviewed? yes

## Initial parent baseline observations

- Homepage has an elegant dark institutional base and strong typography, but the composition can feel spacious to the point of under-authored.
- The crossing device exists as a map-like visual, but it is not yet structurally carried through the homepage/team transition.
- Team page is credible and disciplined, but placeholder portraits visibly cap human warmth and emotional memorability.
- The design avoids obvious clutter and hype, but still risks premium-finance template familiarity: dark field, serif hero, gold accents, grid/cards.
- The highest-value pilot opportunity is not a broad redesign; it is to make the crossing idea and partner-led warmth more ownable within existing constraints.

## Selected opportunities

Scout review selected three bounded candidate hypotheses from design-director and brand-strategist findings. All candidates must use approved/existing copy only, preserve no-stock/no-AI imagery discipline, and avoid new proof or regulated claims.

| Opportunity | Hypothesis | Source reviewer | Affected surface | Risk |
|---|---|---|---|---|
| Carry the crossing system through homepage → team | If the crossing motif becomes a structural page system rather than only a hero illustration, the site will feel more ownable and editorially directed without new assets or claims. | design-director + brand-strategist | homepage lower sections, team intro/roster framing | over-literal route decoration; implied process/access claims; mobile visual noise |
| Provenance-first team warmth | If team cards lead with judgement/focus and treat portrait placeholders as reserved verified assets rather than dominant missing-photo blocks, warmth and credibility improve within the asset cap. | design-director + brand-strategist | team roster cards across desktop/tablet/mobile | fake warmth; hiding missing asset state; unapproved bio/credential claims |
| Judgement map / route ledger | If existing homepage/team focus areas are organised as a concise judgement map or route ledger, users perceive clearer institutional breadth without new claims. | brand-strategist + design-director | homepage second section and/or team pre-roster module | turning focus areas into unsupported proof claims; reinforcing card/table template smell |

## Candidates

Maximum default candidates: 3. Candidate branches were created from accepted `origin/main` baseline. Implementation/scoring is now paused until the production-design craft gate is applied to each candidate and high-severity baseline craft defects are built into candidate prompts or explicitly separated into follow-up work.

| Candidate | Branch | Implementer | Hypothesis | Status | Score delta | Verdict |
|---|---|---|---|---|---:|---|
| A | `design-loop/20260628-pilot-001-a-crossing` | delegated frontend implementer | Crossing carried into team, while fixing homepage illustration hierarchy/scale, nav/header craft regressions, and divider/rhythm issues on affected surfaces. | paused for craft-gate reprompt | pending | pending |
| B | `design-loop/20260628-pilot-001-b-provenance-team` | delegated frontend implementer | Provenance-first team warmth, while fixing `/team/` 1180px overflow, portrait-placeholder dominance, team heading rhythm, and card density. | paused for craft-gate reprompt | pending | pending |
| C | `design-loop/20260628-pilot-001-c-judgement-map` | delegated frontend implementer | Judgement map / route ledger, while preserving/repairing production craft: nav rhythm, heading system, divider hierarchy, responsive spacing, and no new proof claims. | paused for craft-gate reprompt | pending | pending |

## Audience-agent UX testing plan

UX researcher scenarios are defined for candidate scoring. Use supplied screenshots/local URL only; no external browsing. Simulated findings are qualitative only and do not replace real human/client evidence.

- UX researcher: delegated setup completed
- Evidence supplied: `baseline/screenshots/`, candidate screenshots/local URL when available
- Scenarios:
  - Institutional investor: “Can I understand whether this is a credible capital conversation?”
  - Founder-dealmaker: “Would I trust this team with a sensitive opportunity?”
  - Intermediary adviser: “Can I route the right introduction?”
  - Compliance-conscious reviewer: “Does the candidate stay conservative?”
- Audience roles selected: `audience:institutional-investor`, `audience:founder-dealmaker`, `audience:intermediary-adviser`, `audience:compliance-conscious-reviewer`
- Real human/client testing available? no; simulated findings are qualitative only and do not replace human/client evidence.

| Audience role | Candidate(s) reviewed | Scenario | Finding summary | Dimension implications | Confidence |
|---|---|---|---|---|---:|
| `audience:institutional-investor` | A/B/C | credible capital conversation | pending | institutional credibility, strategic fit, composition, compliance | pending |
| `audience:founder-dealmaker` | A/B/C | trust sensitive opportunity | pending | human warmth, team credibility, imagery discipline, hierarchy | pending |
| `audience:intermediary-adviser` | A/B/C | route introduction | pending | strategic fit, hierarchy, institutional credibility, contact UX | pending |
| `audience:compliance-conscious-reviewer` | A/B/C | conservative risk check | pending | compliance/security, accessibility, restraint, imagery discipline | pending |

## Review verdicts

| Candidate | Design director | Brand strategist | Production design | UX researcher / audience | Browser QA | Code/security | DevOps | Notes |
|---|---|---|---|---|---|---|---|---|
| A | | | required before scoring | | | | | |
| B | | | required before scoring | | | | | |
| C | | | required before scoring | | | | | |

## Decision

- Decision: pending
- Winning branch, if any:
- PR, if any:
- Merge commit, if any:
- Auto-deploy run, if any:
- New baseline score, if promoted:

## Score trend note

| Run | Baseline score | Winning / no-promotion candidate score | Delta | Rolling average delta | Dimensions improved | Dimensions regressed | Decision |
|---|---:|---:|---:|---:|---|---|---|
| 001 | 51.98 / 75 | pending | pending | n/a | pending | pending | continue broad initially |

- Previous baseline score: n/a
- New baseline score or no-promotion score: pending
- Delta: pending
- Marginal gain per candidate/run: pending
- Noise vs real improvement assessment: pending
- Evidence for/against local optimum: too early; first pilot
- Consecutive no-promotion / below-threshold runs: 0
- Expected improvement vs effort/risk cost: pending
- Adaptation for next run: pending

## Closeout evidence

- Parent verification commands: pending
- CI: pending
- Deploy/pre-prod smoke: pending if promoted
- Screenshots/browser evidence: baseline captured; candidates pending
- Production-design review: `baseline/production-design-review.md`; candidate reviews pending
- Craft defects fixed/re-reviewed: pending; candidate scoring is blocked until PASS/focused re-review
- Remaining risks/follow-up issues: #63 tracks craft-gate/process correction; candidate implementation must explicitly handle or triage high-severity baseline craft defects
