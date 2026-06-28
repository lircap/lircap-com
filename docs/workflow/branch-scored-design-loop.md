# Branch-scored delegated design improvement loop

**Control issue:** #56

This operating model turns design refinement into a governed optimisation loop. Morwenna acts as parent/orchestrator: she protects context, selects bounded opportunities, delegates implementation/review to specialist profiles, verifies real evidence, and promotes only material improvements. The loop is deliberately not a fully autonomous deploy system.

## Purpose

Move Lir Capital from a strong pre-prod baseline toward high-end, agency-grade quality by testing candidate improvements on isolated branches, scoring them against the current deployed baseline, and promoting only the best accepted candidate.

The loop must trend upward, then detect diminishing returns. “No promotion” is a valid and healthy outcome when candidates do not materially beat the baseline.

## Preconditions

Before a scored design run starts:

- `main` is current and clean locally.
- #55 auto-deploy is active so merged `main` becomes the pre-prod baseline at `https://lircap.pendragon.bot/`.
- The current baseline has screenshots/QA evidence or the run begins by capturing it.
- `docs/design/critique-rubric.md`, `docs/qa/quality-gates.md`, `docs/workflow/agent-operating-model.md`, and `docs/workflow/issue-pr-loop.md` are treated as mandatory guardrails.

## Roles

| Role/profile | Responsibility in the design loop | Cannot do |
|---|---|---|
| `agent:orchestrator` | Owns run setup, candidate selection, branch hygiene, score reconciliation, promotion/no-promotion decision, PR/merge/deploy evidence. | Does not let candidates self-promote; does not skip parent verification. |
| `agent:design-director` | Finds visual opportunities, reviews composition/typography/restraint/AI-template smell, scores design dimensions. | Does not implement or approve without rendered evidence. |
| `agent:brand-strategist` | Scores strategic fit, ownable crossing idea, institutional credibility, proof model, warmth. | Does not invent new positioning or compliance-sensitive claims. |
| `agent:ux-researcher` | Writes constrained UX/audience testing scenarios, assigns audience-agent tasks, synthesises findings into scorecard evidence and trend recommendations. | Does not treat simulated users as market proof; does not bypass hard blockers or rewrite strategy from audience comments alone. |
| `audience:institutional-investor` | Tests whether the experience feels credible, disciplined, legible, and worth a follow-up from an institutional capital perspective. | Does not approve regulated claims, diligence facts, or investment merit. |
| `audience:founder-dealmaker` | Tests whether the experience feels warm, high-trust, direct, and useful to a founder/operator considering a transaction. | Does not create new positioning, promises, testimonials, or proof points. |
| `audience:intermediary-adviser` | Tests whether advisers can quickly understand fit, process, seriousness, and referral confidence. | Does not approve legal/compliance language or invent client examples. |
| `audience:compliance-conscious-reviewer` | Tests whether the page raises trust, disclosure, overclaiming, or ambiguity concerns from a cautious reader viewpoint. | Does not replace code/security or formal legal/compliance review. |
| `agent:frontend-implementer` | Implements one bounded candidate branch from an orchestrator-selected hypothesis. | Does not broaden scope, add imagery/copy, or share a branch with another implementer. |
| `agent:browser-qa-reviewer` | Captures/validates screenshots, console, keyboard/focus, axe/equivalent, responsive behaviour, reduced motion. | Does not pass visual work without reproducible evidence. |
| `agent:code-security-reviewer` | Reviews code, data, runtime, secrets, tracking, dependency and compliance-risk surface. | Does not accept secret leakage, trackers, or unsafe deploy/auth changes. |
| `agent:devops-deployer` | Confirms promotion/deploy path, pre-prod visibility, smoke checks, rollback implications. | Does not bypass `main`/pre-prod policy or print secrets. |

## Evidence locations

Use a run ID such as `YYYYMMDD-HHMM-short-topic`, for example `20260628-hero-rhythm`.

```text
docs/design/loops/<run-id>/
  run.md
  baseline/
    scorecard.md
    screenshots/
    browser-qa.json
  candidates/
    a/
      scorecard.md
      screenshots/
      browser-qa.json
      audience-findings.md
    b/
      scorecard.md
      screenshots/
      browser-qa.json
      audience-findings.md
    c/
      scorecard.md
      screenshots/
      browser-qa.json
      audience-findings.md
  decision.md
```

Evidence may be committed when it is useful for audit/review. Large throwaway artefacts can be linked from PR/issue comments instead, but the run summary and final decision must remain durable.

## Branch naming

```text
design-loop/<run-id>-baseline-notes      # optional docs-only branch
design-loop/<run-id>-a                   # candidate A
design-loop/<run-id>-b                   # candidate B
design-loop/<run-id>-c                   # candidate C
issue-56-branch-scored-design-loop       # operating model/docs branch only
```

Rules:

- One implementer per candidate branch/worktree.
- Candidate branches start from current `main`, not from each other, unless the orchestrator explicitly declares a stacked dependency.
- Losing candidates are not merged. Their evidence can be summarised in `decision.md` and the issue.
- The winning candidate opens a draft PR only after parent verification and initial scoring.

## Loop phases

### 1. Baseline capture

Capture the deployed/current `main` baseline before proposing changes:

- screenshots at mobile (~390), tablet/mid (~1024), desktop (~1440);
- reduced-motion evidence when motion matters;
- console/page error state;
- axe/equivalent accessibility result where practical;
- performance budget/Lighthouse-equivalent note;
- current scorecard using `templates/design-loop-scorecard.md`.

Baseline scoring must state asset caps: for example, human warmth and imagery quality may be capped while neutral portrait placeholders remain.

### 2. Opportunity scouting

Dispatch `agent:design-director` and `agent:brand-strategist` with only the relevant evidence, current issue context, design rubric, and constraints. Each scout returns:

- ranked opportunities;
- measurable hypothesis;
- affected routes/components;
- likely risk;
- whether the opportunity requires new inputs such as real photography.

The orchestrator selects one to three opportunities. Broad redesign prompts are disallowed.

Before any candidate is implemented, the orchestrator must pre-declare the run's scoring rules in `templates/design-loop-run.md`:

- **materiality threshold formula** — default: candidate improvement percentage = `(candidate weighted score - baseline weighted score) / 75 × 100`, because the default scorecard maximum is 75 weighted points;
- **promotion threshold** — default: at least 3 percentage points of max score, equivalent to +2.25 weighted points; 5 percentage points is +3.75 weighted points. This fixed +3 percentage-point rule is the default **promotion gate**, not the sole stopping rule for the loop;
- **priority dimensions** — normally 1–3 dimensions selected from the run objective before implementation;
- **critical dimensions** — dimensions where regression is unacceptable without explicit rationale, normally accessibility, compliance/security risk, institutional credibility, and any run-specific brand/design dimension;
- **regression guard** — default: no critical dimension may drop by more than 0.25 weighted points and no non-critical dimension may drop by more than 1.0 weighted point unless the decision record explicitly accepts the trade-off.

### 3. Candidate generation

For each selected hypothesis, create a candidate branch/worktree and delegate to `agent:frontend-implementer`.

Candidate prompt constraints:

- keep the change bounded to the hypothesis;
- no stock imagery, AI imagery, fake portraits, trackers, secrets, or broad copy rewrites;
- no compliance-sensitive new claims unless they already exist in approved source material;
- preserve accessibility and performance budgets;
- run targeted verification and report changed files.

### 4. Candidate QA and scoring

For each candidate:

- build and capture the same evidence set as the baseline;
- complete `templates/design-loop-scorecard.md`, including proof/provenance evidence for any claims or proof points touched by the candidate;
- dispatch design, brand, browser-QA, and code/security review as relevant;
- record blockers separately from score improvements.

Scoring must compare against baseline, not against taste in isolation.

### 4a. Audience-agent UX testing, when useful

Use audience-agent UX testing when the run affects first-impression trust, clarity, warmth, conversion confidence, or comprehension. This is a lightweight simulation layer, not analytics and not a substitute for real client/user testing.

Default workflow:

1. `agent:ux-researcher` writes 2–4 constrained scenario prompts before audience review starts. Scenarios must name the role, viewport or local URL/screenshot set, task, timebox, and exact questions to answer.
2. Audience agents review only screenshots, recorded evidence, or a local/deployed URL supplied by the orchestrator. They must not browse for outside facts or infer unavailable commercial proof.
3. Each audience agent returns observations, friction points, confidence rating, and dimension-level implications. They do not assign final promotion decisions.
4. The UX researcher synthesises findings into `audience-findings.md` and scorecard notes, mapping evidence to affected dimensions such as institutional credibility, human warmth, composition/hierarchy, proof/provenance, accessibility-visible clarity, and compliance/security risk.

Rules:

- Audience findings may inform dimension scores and opportunity selection, but **must not bypass hard blockers**.
- Simulated audience reactions are qualitative evidence only. They are not real market proof, client validation, conversion data, legal advice, or compliance sign-off.
- Real human/client testing outranks simulated audience evidence. If real testing conflicts with audience agents, record the conflict and prefer real evidence unless it is out of scope, stale, or unsafe to use.
- Do not add tracking, analytics, beacons, or behavioural instrumentation as part of this loop.

### 5. Selection and promotion gate

A candidate can win only if all are true:

- no blocking accessibility, security, compliance, deploy, or placeholder leakage issue;
- total weighted score improves by at least the run’s pre-declared materiality threshold, normally **3 percentage points of the 75-point maximum** (`(candidate - baseline) / 75 × 100`), equivalent to **+2.25 weighted points**;
- at least one priority dimension improves materially;
- no critical dimension regresses beyond the regression guard;
- browser evidence is complete enough for the affected surface;
- parent/orchestrator independently verifies the diff and commands.

If no candidate clears the threshold, record **NO PROMOTION**. Do not merge the least-bad branch.

### 6. PR, merge, deploy, new baseline

For the winning candidate only:

1. Open a draft PR from the winning branch.
2. Include score deltas, evidence links, review verdicts, and parent verification.
3. Resolve required changes with focused re-review.
4. Merge only when CI/reviews/parent verification pass.
5. Let #55 auto-deploy `main` to pre-prod.
6. Verify the real deploy run and external smoke.
7. Capture post-deploy score as the next baseline.

## Score trend adaptation and stopping logic

The loop must track score history per run, per candidate, per dimension, and total weighted score. The default +3 percentage-point materiality threshold remains the promotion gate for replacing the baseline; stopping decisions also consider trend, noise, effort, and risk.

Record score history in the run record and durable decision notes:

| Run | Baseline score | Winning / no-promotion candidate score | Delta | Rolling average delta | Dimensions improved | Dimensions regressed | Decision |
|---|---:|---:|---:|---:|---|---|---|
| | | | | | | | continue broad / surgical / request new inputs / stop |

Trend interpretation:

| Signal | Adaptation |
|---|---|
| Early runs produce large, repeatable gains across priority dimensions | Continue broad but bounded exploration. |
| One run misses the promotion threshold but improves a priority dimension without regressions | Continue once with a narrower hypothesis or surgical optimisation. |
| Marginal gain per run/candidate is falling and rolling average delta is near zero | Treat as approaching a local optimum; stop broad branch generation. |
| Candidate deltas are within scoring noise or reviewer disagreement | Do not promote on taste alone; request focused tie-break, stronger evidence, or no-promotion. |
| No candidate clears the pre-declared materiality threshold across 3 consecutive runs, defaulting to ≥3 percentage points of max score (+2.25 weighted points) | Declare plateau unless new inputs or a materially different hypothesis exist. |
| Repeated regressions in a dimension | Add or tighten a regression guard and reviewer focus for that dimension. |
| Scores capped by missing assets | Stop trying to solve with layout; request new inputs such as commissioned photography, approved copy, or brand assets. |
| Candidate is different but not better | Record no-promotion; preserve learning only. |

Distinguish noise from real improvement:

- Treat tiny deltas, isolated reviewer preference, or improvements paired with equal regressions as noise unless corroborated by screenshots, QA evidence, audience synthesis, or repeated score movement.
- Treat an improvement as stronger when it appears in priority dimensions, persists across viewports, aligns with design/brand review, and does not increase accessibility, compliance, performance, or deploy risk.
- Track marginal gain per candidate and per run: `(candidate weighted score - baseline weighted score) / implementation-and-review effort`. If expected improvement is below the likely effort/risk cost, stop or switch modes.
- Estimate a local optimum when several bounded candidates cluster around the same total, improve different minor dimensions while regressing others, or require missing assets/claims to move further.

The orchestrator should rotate from **broad exploration → surgical optimisation → new-input request → stop**. More branches are not automatically better. Stop or switch modes when expected improvement is lower than effort, review, regression, compliance, or deploy risk.

## Hard blockers

Any of these blocks promotion regardless of score:

- axe/WCAG blocker or hidden/unclear focus state;
- contrast failure on critical text;
- performance budget failure without approved exception;
- secret, credential, auth, or deploy-policy regression;
- external trackers or analytics outside approved policy;
- stock/AI/generated/fake imagery;
- placeholder marker or placeholder asset leaking beyond approved pre-prod usage;
- compliance-risky new claim or regulated phrasing without source/sign-off;
- broken pre-prod password gate or route smoke;
- PR branch not based on current accepted baseline.

## Context and iteration budget

- Parent/orchestrator holds the run state and evidence index.
- Subagents receive only the evidence and files needed for their bounded role.
- Maximum default candidates per run: **3**.
- Maximum default implementation/review cycles per candidate: **2** before reject or narrow scope.
- Required-change fixes must be focused; do not turn a review fix into a new design direction.
- If reviewers disagree, the orchestrator records the trade-off and asks for a focused tie-breaker only on the disputed dimension.

## Role delegation prompt templates

Use these compact prompt shapes when dispatching loop work. Fill only relevant paths/evidence; do not paste the whole artefact pack.

### Design-director scout/reviewer

```text
Inputs: run objective, baseline/candidate screenshots, critique rubric, scorecard, affected routes/components.
Task: identify visual opportunities or score the candidate against baseline for composition, typography, restraint, originality, accessibility-visible design, and AI-template smell.
Forbidden: do not implement; do not invent new copy/claims/assets; do not approve without rendered evidence.
Expected output: PASS / REQUIRED CHANGES / REJECT plus dimension scores, blockers, weakest element, and whether it looks AI-generated.
Stop conditions: missing screenshots/rendered URL; candidate requires new art direction outside run scope.
```

### Brand-strategist scout/reviewer

```text
Inputs: canonical brief excerpts, claims/proof references, baseline/candidate screenshots or copy diff, scorecard.
Task: score strategic fit, ownable crossing idea, institutional credibility, human warmth, and proof/provenance support.
Forbidden: do not create new positioning, regulated claims, client promises, or unsourced proof.
Expected output: PASS / REQUIRED CHANGES / REJECT plus priority-dimension scores, proof/provenance notes, asset caps, and brand-risk findings.
Stop conditions: missing source for claims; recommendation would change approved positioning.
```

### UX-researcher scenario writer/synthesiser

```text
Inputs: run objective, baseline/candidate screenshots or local URL, selected audience roles, scorecard dimensions, known hard blockers, approved source constraints.
Task: write constrained scenario prompts for audience agents and synthesise their findings into dimension implications, friction themes, confidence levels, and recommended next mode.
Forbidden: do not add tracking/analytics; do not treat simulated users as market proof; do not bypass accessibility/security/compliance/deploy blockers; do not invent claims or commercial facts.
Expected output: scenario prompts, audience matrix, synthesis of strongest findings, affected dimensions, whether findings support continue broad / surgical / request new inputs / stop.
Stop conditions: no screenshots/local URL; scenario requires real confidential client context; findings would require new claims/assets outside approved inputs.
```

### Audience-agent UX test

```text
Inputs: assigned audience role, constrained scenario, screenshots or local URL, specific questions, timebox, hard-blocker reminder.
Task: act as the assigned audience type while reviewing only the supplied evidence; report first impression, comprehension, trust/friction points, task outcome, confidence rating, and scorecard dimension implications.
Forbidden: do not browse for outside facts; do not invent diligence proof, testimonials, claims, or market validation; do not make final promotion decisions; do not overrule hard blockers.
Expected output: PASSABLE / CONCERN / BLOCKING-FOR-THIS-AUDIENCE plus observations, quoted UI references, affected dimensions, and what evidence would change the view.
Stop conditions: evidence cannot be viewed; scenario asks for facts not present; role would need real human/client testing rather than simulation.
```

### Frontend-implementer candidate

```text
Inputs: selected hypothesis, exact branch/worktree, allowed files, baseline evidence, target verification commands.
Task: implement one bounded candidate that tests the hypothesis and preserves existing approved content/compliance constraints.
Forbidden: no stock/AI imagery, fake portraits, trackers, secrets, broad copy rewrites, deploy-policy edits, or shared-branch work.
Expected output: changed files, implementation notes, commands run, blockers, and evidence paths.
Stop conditions: scope broadens; required source/design decision missing; checks cannot run.
```

### Browser-QA reviewer

```text
Inputs: local/deployed URL, baseline/candidate branches, required viewports/states, QA gates.
Task: capture or verify screenshots, console/page errors, focus/keyboard states, reduced motion, axe/equivalent, and performance evidence.
Forbidden: do not pass without reproducible rendered evidence; do not print credentials.
Expected output: PASS / REQUIRED CHANGES with screenshots/evidence paths and reproducible defects.
Stop conditions: no runnable build/URL; auth unavailable; browser evidence cannot be captured.
```

### Code-security reviewer

```text
Inputs: git diff, changed files, verification output, hard blockers.
Task: review code/process safety, secrets, auth/deploy policy, external scripts/trackers, dependency/runtime risk, and compliance-risky data handling.
Forbidden: do not modify files; do not accept secret leakage or unsafe deployment/auth changes.
Expected output: PASS / REQUIRED CHANGES with file/line findings and required fixes.
Stop conditions: unreviewable generated blob; missing diff; relevant checks not run.
```

### DevOps deployer/reviewer

```text
Inputs: PR branch, #55 deploy model, pre-prod URL, smoke requirements, rollback constraints.
Task: verify promotion/deploy feasibility, pre-prod visibility, CI/deploy run evidence, smoke checks, and rollback notes.
Forbidden: do not bypass `main`/pre-prod policy; do not print secrets; do not perform destructive infra changes without approval.
Expected output: PASS / REQUIRED CHANGES with deploy/smoke evidence or blockers.
Stop conditions: credentials missing; deploy workflow unavailable; smoke cannot verify the promoted baseline.
```

## Templates

Use these templates:

- `docs/workflow/templates/design-loop-scorecard.md`
- `docs/workflow/templates/design-loop-run.md`
- `docs/workflow/templates/design-loop-issue-comment.md`
- `docs/workflow/templates/design-loop-pr-comment.md`

## First pilot recommendation

After #56, the first pilot should be opened as a separate issue. Recommended scope:

> Run design loop pilot 001 on the homepage/team transition and visual warmth without adding new photography or claims.

This is deliberately bounded: it can test rhythm, composition, hierarchy, and placeholder discipline while recognising that final human warmth/imagery scores are asset-capped until real photography exists.
