# Design-loop scorecard

Run ID: `20260628-pilot-001-home-team-warmth`
Candidate: A — crossing system carried through homepage → team
Branch/worktree: `design-loop/20260628-pilot-001-a-crossing` / `/root/lircap/worktrees/pilot001-a-crossing`
Reviewer/profile: parent/orchestrator draft after specialist reviews; audience synthesis pending
Date: 2026-06-28
Evidence path or links: `candidates/a/screenshots/`, `candidates/a/browser-qa.json`

## Verdict

- Verdict: PROMOTE candidate A, pending audience-agent synthesis and final parent verification
- Total weighted score: **59.84 / 75**
- Baseline weighted score: **51.98 / 75**
- Delta vs baseline: **+7.86 weighted points** / **+10.48 percentage points of max score**
- Materiality threshold for this run: +2.25 weighted points / +3 percentage points of max score
- Promotion gate: cleared on current specialist-review evidence
- Formula: `(candidate weighted score - baseline weighted score) / 75 × 100`; 75 is the default max weighted score.
- Priority dimensions selected before implementation: composition/hierarchy; institutional credibility; human warmth; originality/anti-template; ownable crossing idea.
- Critical dimensions selected before implementation: accessibility; compliance/security risk; institutional credibility; imagery/placeholder discipline; performance.
- Regression guard selected before implementation: no critical dimension may regress by more than 0.25 weighted points; no non-critical dimension may regress by more than 1.0 weighted point unless explicitly accepted.
- Hard blockers: none from production-design, design/brand, compliance, parent browser metrics, test/build/perf/placeholder checks.
- Production-design craft verdict: PASS
- Candidate scoring allowed after craft QA? yes

## Asset caps

| Dimension | Cap? | Reason | Input needed |
|---|---:|---|---|
| Human warmth | yes | Team portraits remain neutral placeholders; Candidate A improves page system/warmth but does not add real people imagery. | Real approved photography / portrait art direction. |
| Imagery quality | partly | Candidate A improves non-photographic crossing-map art direction, but Team imagery remains placeholder-only. | Approved photography or refined non-photographic identity system. |
| Proof/claims | yes | Pilot cannot add unapproved claims/proof. | Approved proof points / compliance-reviewed claims. |

## Proof / provenance evidence

| Claim/proof point | Approved source / claim ID | Candidate changed it? | Risk / note |
|---|---|---|---|
| Existing homepage positioning and disclosure copy | current repo content / prior compliance gates | no material claim broadening | Candidate reorganises the crossing visual system but does not add regulated proof/access/performance claims. |
| Team hero language | current team page language | no material claim broadening | Adds abstract route/capital/opportunity labels; compliance review found no concrete access/mandate/performance claim. |
| Team portrait placeholders | current approved placeholder discipline | preserved | No stock/AI/fake imagery introduced. |

## Production-design craft QA

| Check | Verdict | Evidence / notes | Blocking? |
|---|---|---|---|
| Spacing rhythm / vertical cadence | PASS | Production-design review: A reduces loose mobile/fold hierarchy and has no major spacing blocker. | no |
| Alignment / grid / container edges | PASS | Captured metrics show `overflowX: 0` across `/`, `/team/`, `/contact/` at 320–1728. | no |
| Typography measure / leading / letter-spacing / kerning / line breaks / top alignment | PASS / minor note | H1 line counts still shift, but production-design review marked this non-blocking; H1 is no longer buried below illustration. | no |
| Component consistency / repeated modules | PASS | Lighter header/divider hierarchy and team crossing map improve system consistency. | no |
| Responsive polish across required widths | PASS | `overflowX: 0`; no chart/H1 intersections; no nav wrapping detected for A. | no |
| Visual hierarchy / focal order | PASS | Homepage H1 moves substantially higher on mobile and the chart is integrated with the lockup. | no |
| Placeholder / imagery discipline | PASS | No fake imagery; approved placeholder discipline remains. | no |
| Premium restraint / no cheap decoration | PASS / monitor | A is more designed; production/design reviewers considered the crossing motif acceptable if kept restrained. | no |
| Screenshot delta vs baseline | PASS | Fixes baseline nav wrapping, hero order/scale, and divider/header heaviness more completely than B/C. | no |

Required craft changes before scoring:
- None.

Production-design reviewer verdict:
- PASS

Scoring impact:
- [x] Scoring allowed
- [ ] Scoring blocked pending focused changes
- [ ] Candidate rejected for craft quality

## Weighted dimensions

Score 0–5. Weighted score = score × weight. Higher is better; for “AI-template smell”, higher means lower template smell / stronger distinctiveness.

| Dimension | Weight | Baseline score | Candidate score | Delta | Blocker? | Evidence / notes |
|---|---:|---:|---:|---:|---|---|
| Strategic fit | 1.3 | 3.6 | 4.0 | +0.52 | no | Advances the crossing metaphor while staying discreet and partner-led. |
| Ownable crossing idea | 1.2 | 2.8 | 4.2 | +1.68 | no | Strongest gain: crossing becomes a system across homepage/team, not isolated hero art. |
| Composition and hierarchy | 1.1 | 3.0 | 4.0 | +1.10 | no | Home hero lockup and team hero map improve hierarchy and continuity. |
| Typographic rhythm/tension | 1.0 | 3.5 | 3.7 | +0.20 | no | Better integration/top rhythm; still dramatic large-serif system with shifting line counts. |
| Originality / anti-template | 1.2 | 2.8 | 4.0 | +1.44 | no | Bespoke route/fix/chart grammar reduces generic premium-finance feel. |
| Restraint | 1.0 | 4.0 | 3.7 | -0.30 | no | Slight trade-off: more visual system and motif; still within guard. |
| Institutional credibility | 1.3 | 3.5 | 3.9 | +0.52 | no | More intentional system and fewer sloppy responsive defects. |
| Human warmth | 0.9 | 2.2 | 2.8 | +0.54 | no | Team first impression improves, but warmth remains asset-capped without photography. |
| Imagery / placeholder discipline | 1.0 | 2.5 | 3.1 | +0.60 | no | Better non-photographic art direction; placeholders remain honest. |
| Accessibility | 1.3 | 4.7 | 4.7 | +0.00 | no | Tests pass; no console/page errors; no new JS. Axe to be rerun if PR proceeds. |
| Performance | 1.0 | 4.7 | 4.7 | +0.00 | no | `perf:budget` passed: total=50513B js=0B css=16902B. |
| Compliance/security risk | 1.4 | 4.5 | 4.5 | +0.00 | no | Code-security/compliance review PASS; no tracking, scripts, fake imagery, or claim creep. |
| AI-template smell | 1.3 | 2.8 | 4.0 | +1.56 | no | More hand-composed and brand-specific than baseline. |

## Browser / QA evidence

- Mobile screenshots: `screenshots/home-320.png`, `home-390.png`, `team-320.png`, `team-390.png`, `contact-320.png`, `contact-390.png`
- Tablet/mid screenshots: `screenshots/home-768.png`, `home-980.png`, `home-981.png`, `home-1024.png`, `team-768.png`, `team-980.png`, `team-981.png`, `team-1024.png`, `contact-768.png`, `contact-980.png`, `contact-981.png`, `contact-1024.png`
- Desktop screenshots: `screenshots/home-1180.png`, `home-1181.png`, `home-1280.png`, `home-1440.png`, `home-1728.png`, plus team/contact equivalents
- Reduced-motion evidence: `screenshots/home-1440-reduced-motion.png` captured with `reduced_motion='reduce'`.
- Focus/keyboard evidence: `screenshots/focus-first-tab-desktop.png`; first focus is `A.skip-link` / “Skip to content”.
- Console/page errors: 0 in captured matrix
- Axe/equivalent: axe package unavailable locally; semantic/focus smoke captured, and full axe/equivalent should be rerun during PR-stage browser QA
- Performance budget/Lighthouse: `npm run perf:budget` passed
- Production-design screenshots reviewed / expanded breakpoint matrix: yes, 33 screenshots across `/`, `/team/`, `/contact/`
- Production-design review path: specialist review in delegation `deleg_8c7732f4`; durable candidate review file pending
- Craft defects / re-review status: no required craft changes from production-design review
- Pre-prod/auth smoke if relevant: required after merge/promotion only

## Audience-agent UX findings

Delegation: `deleg_53c4081c`.

| Audience role | Scenario / evidence used | Outcome | Confidence | Dimension implications | Notes / friction |
|---|---|---|---:|---|---|
| `audience:institutional-investor` | Candidate A vs baseline evidence/source/QA JSON | PASS / positive delta | Medium-high for discretion and institutional tone; medium for credibility | Improves composition, ownable crossing, institutional credibility, originality; proof and real people cues remain capped | CTA clarity moderate; proof remains inferred from tone/structure rather than demonstrated credentials/cases/regulatory posture. |
| `audience:founder-dealmaker` | Homepage → Team → Contact, Candidate A vs baseline | PASS with warmth caveat | Medium | Team credibility and craft improve; human warmth rises slightly but remains asset-capped | Mailto-only contact, no secure upload/phone/what-happens-next, placeholder portraits still limit trust. |
| `audience:intermediary-adviser` | Homepage, Team, Contact routing and email framing | PASS with caution | Medium | Routing clarity neutral-to-slight positive; compliance/security preserved; crossing idea more coherent | Contact routing already did most work; mixed intermediary route may still hesitate between investor/deal paths. |
| `audience:compliance-conscious-reviewer` | Compliance-sensitive read of Candidate A source/evidence | PASS with caution | Medium-high | Compliance/security risk remains strong; restraint mostly preserved | Watch phrases like “qualified opportunities”, “right counterparties”, and crossing/fix matching metaphor; do not pair with stronger proof/outcome claims. |

UX researcher synthesis:
- Candidate A is a meaningful improvement over baseline for institutional discretion, production craft, responsive trust cues, and ownership of the crossing system.
- It does not solve proof/trust ceilings that require approved inputs: real portrait photography, named/approved credentials, stronger regulatory/process clarity, or real client proof.
- Founder/dealmaker warmth improves only modestly; Candidate B’s team-card direction may be useful in a later focused iteration.
- Compliance posture remains acceptable; audience agents surfaced caution areas but no blocker.

- Real human/client testing available? no; simulated findings are qualitative only.
- Any hard blockers surfaced separately above? no

## Regression guard

| Dimension | Regression | Accepted? | Rationale |
|---|---|---|---|
| Restraint | -0.30 weighted | yes, pending final decision | Candidate A is more visually authored; this is a controlled trade-off for significant gains in crossing ownership, composition, originality, and AI-template resistance. Critical dimensions do not regress. |

## Craft regression guard

| Craft area | Baseline state | Candidate state | Regression? | Accepted? | Rationale |
|---|---|---|---|---|---|
| Spacing rhythm | Loose mobile/fold bands, repeated rules | More integrated hero/team rhythm | no | n/a | Production-design PASS. |
| Alignment/grid | Team overflow around 1180; nav wrap risk | `overflowX: 0`, no nav wrapping detected | no | n/a | Objective metrics. |
| Typography/line breaks | H1 inconsistency, mobile hero buried | H1 higher and integrated; line counts still shift | no material | yes | Non-blocking note only. |
| Responsive polish | Weak mobile/tablet hero and nav | Captured matrix clean | no | n/a | 320–1728 evidence. |
| Component consistency | Divider/border hierarchy repetitive | Lighter header/divider system | no | n/a | Production-design PASS. |
| Placeholder/imagery discipline | Honest but visually dominant placeholders | Honest placeholders retained, team map adds non-photographic system | no | n/a | Compliance PASS. |

## Promotion decision rationale

Candidate A is materially better than the baseline on the run’s priority dimensions and is the only candidate with production-design PASS, design/brand strongest-overall review, and compliance PASS. It clears the materiality threshold by a wide margin on the current scorecard. Final promotion remains pending audience-agent UX synthesis and PR-stage browser QA/focus/reduced-motion evidence.

## Trend contribution

- Marginal gain for this candidate vs baseline: +7.86 weighted points / +10.48pp of max score
- Dimensions improved: strategic fit, ownable crossing idea, composition/hierarchy, typographic rhythm, originality/anti-template, institutional credibility, human warmth, imagery/placeholder discipline, AI-template smell
- Dimensions regressed: restraint, small controlled trade-off
- Likely noise vs real improvement: real improvement; corroborated by production-design PASS, objective browser metrics, and design/brand review
- Effect on next loop mode: likely promote A if audience synthesis does not surface blockers; future loop can mine Candidate B’s team-card ideas as a focused refinement

## Required changes, if any

Production-design required changes:
- None.

Other required changes:
- Pending audience-agent synthesis.
- PR-stage browser QA should recapture focus/keyboard, reduced motion if relevant, and axe/equivalent.

## Does this look AI-generated?

No — Candidate A feels more hand-composed and brand-specific than baseline. The crossing/fix/chart language is the most ownable system in the candidate set, though it must remain restrained in future iterations.
