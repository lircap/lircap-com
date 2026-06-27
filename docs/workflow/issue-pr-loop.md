# Issue / branch / PR delivery loop

**Control issue:** #20

This loop is mandatory for LirCap repository work. It exists to keep implementation small, reviewable, and independently verified.

## 1. Select work

1. Start from clean, current `main` unless explicitly stacking a direct dependency.
2. Choose one GitHub issue or a tight dependency cluster.
3. Confirm the issue has:
   - primary `agent:*` label;
   - required reviewer `agent:*` labels;
   - acceptance criteria;
   - canonical brief/compliance references where relevant.
4. If the issue is too broad, split it before implementation.

Commands:

```bash
git checkout main
git pull --ff-only origin main
git status --short --branch
gh issue view <N> --repo lircap/lircap-com
```

## 2. Branch

Use short-lived issue branches:

```bash
git checkout -B issue-<N>-<short-title>
```

Rules:

- One implementation issue per branch unless the dependency is explicit.
- Stacked PRs are allowed only for workflow/dependency chains and must name the base branch.
- Never mix unrelated content, design, devops, and code changes.

## 3. Implement smallest viable slice

Implementation agents receive:

- issue body;
- relevant `docs/brief/canonical-brief.md` sections;
- relevant `docs/compliance/claims-register.md` claim IDs;
- exact files/commands;
- stop conditions.

They do **not** receive the full artefact set by default.

## 4. Local verification before review

Minimum parent checks before opening review:

```bash
git status --short --branch
git diff --check
git diff --stat
```

Then run the project-specific gate for the slice:

- docs-only: structural/content script or targeted markdown checks;
- frontend: install/build/typecheck/lint/tests once scaffold exists;
- UI: browser screenshot and console check;
- deploy/auth: curl/browser authenticated and unauthenticated smoke checks.

## 5. Specialist review order

1. Spec/brief/content/design review.
2. Compliance review for claims, copy, privacy, forms, legal/entity language.
3. Code/security review for code, secrets, attack surface, forms, auth gates, deployment.
4. Browser QA/design screenshot review for rendered UI.

Reviewers return `PASS` or required changes. Required changes are blocking.

## 6. Parent verification

The orchestrator must verify independently after subagent work and after every required-change fix:

- inspect `git status --short --branch`;
- inspect diff/stat;
- re-run relevant checks;
- confirm no untracked files were missed;
- confirm no secrets or credentials were added;
- confirm GitHub issue/PR evidence is current.

Subagent self-report is never sufficient proof.

## 7. PR creation

Open a PR with:

- close keyword for the issue;
- source/canonical brief references;
- compliance claim IDs if applicable;
- commands run and output summary;
- specialist review verdicts or pending-review note;
- parent verification evidence;
- screenshots/smoke evidence where relevant.

Use `.github/pull_request_template.md`.

## 8. Merge discipline

Before merge:

1. All required reviews are `PASS` or resolved.
2. Parent verification has been rerun after final changes.
3. PR is not draft.
4. Merge state is clean/green.
5. Merge the parent/base PR first in stacked chains.
6. Fast-forward local `main` after each merge.

Commands:

```bash
gh pr ready <PR>
gh pr merge <PR> --merge
git checkout main
git pull --ff-only origin main
git status --short --branch
```

## 9. Closeout evidence

Issue closeout comment or PR must include:

- PR URL and merge commit;
- commands run;
- specialist review verdicts;
- parent verification summary;
- remaining risks or follow-up issues.

## First implementation PR requirement

The first non-workflow implementation PR must explicitly link this workflow issue (#20) and demonstrate this loop end-to-end.
