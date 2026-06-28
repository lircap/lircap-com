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
    b/
      scorecard.md
      screenshots/
      browser-qa.json
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
- **promotion threshold** — default: at least 3 percentage points of max score, equivalent to +2.25 weighted points; 5 percentage points is +3.75 weighted points;
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

## Score trend adaptation

The loop must track score history over time.

| Signal | Adaptation |
|---|---|
| Early runs produce large gains | Continue broad but bounded exploration. |
| Gains fall below threshold for one run | Narrow prompts to the weakest dimensions/components. |
| No candidate clears the pre-declared materiality threshold across 3 consecutive runs, defaulting to ≥3 percentage points of max score (+2.25 weighted points) | Declare plateau; stop broad branch generation. |
| Repeated regressions in a dimension | Add a regression guard and reviewer focus for that dimension. |
| Scores capped by missing assets | Stop trying to solve with layout; request new inputs such as commissioned photography, approved copy, or brand assets. |
| Candidate is different but not better | Record no-promotion; preserve learning only. |

The orchestrator should rotate from **broad exploration → surgical optimisation → new-input request**. More branches are not automatically better.

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
