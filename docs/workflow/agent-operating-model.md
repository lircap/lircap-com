# Agent operating model

**Control issue:** #19

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
