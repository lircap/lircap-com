# Agent operating model

**Control issues:** #19, #15

This project uses Morwenna as orchestrator plus bounded specialist subagents/profiles. The aim is to protect context, avoid iteration drift, and prevent unreviewed AI-looking output.

## Operating principle

Use the smallest capable agent for each issue slice. The orchestrator owns sequencing, repo state, PRs, deployment decisions, and final evidence. Specialist agents produce or review bounded artefacts; their reports are evidence, not proof.

## Profiles

| Operating profile | Hermes profile | Primary inputs | Outputs | Stop conditions |
|---|---|---|---|---|
| `agent:orchestrator` | `default` / `lircaporchestrator` | GitHub issues, repo state, PRs, verification results | issue sequencing, branch/PR decisions, final evidence | no verification path; unresolved user decision; unsafe/destructive action |
| `agent:brief-strategist` | `lircapbrief` | artefact register, canonical brief, source excerpts | provenance decisions, canonical-brief updates, source hierarchy | missing source; contradictory source hierarchy; needs client decision |
| `agent:brand-strategist` | `lircapbrand` | strategic brief, brand guide, design spec, screenshots | strategic-fit verdict, positioning critique, brand-risk findings | output drifts from Lir positioning or cannot be judged without screenshots |
| `agent:content-strategist` | `lircapcontent` | canonical brief, claims register, page issue | page briefs, web-native copy, copy-risk notes | copy needs compliance/counsel; source provenance missing |
| `agent:compliance-reviewer` | `lircapcompliance` | claims register, compliance review, copy/page diffs | allowed/soften/remove verdicts, Gate A/B status | legal/counsel decision required; claim source missing |
| `agent:design-director` | `lircapdesign` | design spec, screenshots, page/component issue | agency-grade critique, anti-AI-template findings | no screenshot/render; first-generation output only; imagery/copy not judgeable |
| `agent:frontend-implementer` | `lircapfrontend` | implementation issue, canonical sections, exact repo files | code changes, local check output, commit-ready diff | task broadens; missing content/design decision; tests/build unavailable |
| `agent:code-security-reviewer` | `lircapsecurity` | diff, affected files, commands run | security/code-quality findings and verdict | secrets risk, auth/gating ambiguity, unrun relevant checks |
| `agent:browser-qa-reviewer` | `lircapqa` | deployed/local URL, screenshots, browser steps | console/responsive/a11y/performance evidence | no runnable URL/build; cannot reproduce; visual evidence missing |
| `agent:devops-deployer` | `lircapdevops` | deploy issue, VPS/Caddy/DNS context, secrets constraints | deploy/runbook changes, smoke-check output | credentials missing; destructive infra action requires user approval |
| `agent:photography-producer` | `lircapphoto` | photography brief, asset inventory, design needs | asset requirements, rights/release checklist, placeholder status | asset rights unknown; production imagery missing |
| `agent:seo-analytics-specialist` | `lircapseo` | page map, existing-site audit, metadata/schema issues | SEO/analytics/redirect recommendations | compliance-sensitive schema/copy unclear; old-site crawl incomplete |
| `agent:client-review-coordinator` | `lircapclient` | review URL, screenshots, feedback, issue list | review pack, triage, change-control issues | ambiguous feedback; compliance-sensitive request not routed |

## Issue #15 orchestration roles

These are the required protected-context roles for issue-sized development. Each role receives only the inputs needed for its slice, not the full artefact set.

| Role | Scope | Inputs | Outputs | Stop conditions |
|---|---|---|---|---|
| Orchestrator | Selects and sequences issue-sized work; prepares bounded prompts; owns repo state, PR evidence, deployment decisions, and final verification. | GitHub issue, current branch/status, relevant canonical brief/compliance/design excerpts, prior review results. | Agent dispatch prompts, reconciled review plan, verified diff/check evidence, PR/issue closeout evidence. | Unsafe/destructive action would be required; user decision needed; no independent verification path exists. |
| Brand strategist | Reviews strategic fit, positioning, tone, and brand risk against LirCap source-of-truth material. | Strategic brief/canonical brief excerpts, brand guide, page/design spec, screenshots or copy under review. | Brand-fit verdict, positioning/tone findings, required changes or PASS. | Cannot judge without relevant copy/render; conflict in brand source hierarchy; recommendation would change approved positioning. |
| Design director | Reviews visual quality, hierarchy, interaction feel, and avoidance of generic AI-template output. | Design spec, component/page issue, rendered screenshots or local URL, relevant brand/design constraints. | Design-quality verdict, visual defects, required changes or PASS. | No render/screenshot; imagery or copy is too incomplete to judge; findings require new design direction. |
| Frontend implementer | Implements the smallest viable code/content slice for a single issue or explicit dependency cluster. | Issue body, exact files, canonical section excerpts, relevant claim IDs/design constraints, commands to run. | Commit-ready diff, local check output, implementation notes and blockers. | Scope broadens beyond issue; missing content/design/compliance decision; required checks cannot run. |
| Compliance copy reviewer | Reviews claims, copy, forms, privacy, legal/entity language, and regulated phrasing before shipping. | Copy diff, claims register IDs, compliance review excerpts, page/form context. | Allowed/soften/remove verdicts, claim-risk findings, Gate A/B status or required changes. | Claim source missing; legal/counsel decision required; requested wording exceeds approved evidence. |
| Browser QA reviewer | Verifies rendered behavior, responsive layout, console state, accessibility/performance basics, and screenshot evidence. | Local/deployed URL, browser steps, acceptance criteria, expected viewports/states. | QA evidence, screenshots/console notes, PASS or reproducible defects. | No runnable URL/build; cannot reproduce steps; visual evidence cannot be captured. |
| DevOps deployer | Handles deploy/runbook/infrastructure slices under explicit constraints and proves smoke behavior. | Deploy issue, repo state, VPS/Caddy/DNS context, secret-handling constraints, smoke-check plan. | Deploy/runbook changes, commands run, smoke-check output, rollback/blocker notes. | Credentials missing; destructive infra action requires approval; smoke checks cannot verify the change. |

Implementation tasks must remain issue-sized and pass both spec-compliance review and quality review before the orchestrator treats them as shippable. Subagent reports are inputs to the decision; the orchestrator retains final repo and deploy verification responsibility.

## Default issue loop

1. Orchestrator selects one issue or a tight dependency cluster.
2. Orchestrator confirms branch/worktree state with `git status --short --branch`.
3. Orchestrator prepares a self-contained prompt with:
   - issue body;
   - relevant canonical-brief sections;
   - exact files/commands;
   - forbidden actions;
   - expected output format.
4. Dispatch a fresh bounded subagent for implementation/specialist production.
5. Dispatch review agents in the required order:
   - spec/brief/content/design review first;
   - compliance review for copy, claims, privacy, forms, legal/entity language;
   - code/security review for code and infrastructure;
   - browser QA/design critique for rendered UI.
6. Orchestrator independently verifies actual state:
   - `git status --short --branch`;
   - `git diff --check` and diff/stat;
   - project tests/build/lint when available;
   - browser screenshots/console for UI;
   - curl/browser smoke for deploy/auth gates.
7. Orchestrator updates PR/issue with evidence and does not close until review findings are reconciled.

## Context budget rules

- Do not pass the full artefact set to implementation agents.
- Use `docs/brief/canonical-brief.md` as the normal source of truth.
- Pass original artefact paths only when the issue explicitly requires source inspection.
- Split tasks immediately if an agent starts reading irrelevant files, times out, or reports broad uncertainty.
- Prefer `delegate_task` for bounded work. Spawn the actual Hermes profile only when the task needs a long-lived independent process.

## Branching rules

- One implementation issue or tight dependency cluster per branch.
- Stacked PRs are acceptable only for direct dependencies, and the base branch must be explicit.
- Parent verifies and fast-forwards `main` before starting unrelated implementation work.
- Never treat subagent “tests passed” as proof.

## Review evidence required in PRs

Each PR must include:

- linked issue(s);
- primary profile and reviewers;
- files changed;
- commands run and results;
- subagent review verdicts or pending review status;
- parent verification evidence;
- screenshots/browser evidence for visual UI;
- compliance claim IDs for copy/form/legal/privacy changes;
- deployment smoke evidence for infra changes;
- remaining risks/blockers.
