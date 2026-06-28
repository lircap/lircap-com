# Subagent operating rules

This project uses Hermes subagents and specialist profiles to protect context and iteration limits.

Implementation work must be issue-sized. If a request mixes unrelated content, design, frontend, compliance, browser QA, or deploy work, the orchestrator splits it before dispatch.

## Default loop

1. Morwenna/orchestrator selects one issue or tight issue cluster.
2. Orchestrator prepares a self-contained prompt with:
   - issue body;
   - relevant canonical-brief section;
   - exact files/commands;
   - forbidden actions and stop conditions.
3. Dispatch a fresh bounded subagent for the task.
4. Run required specialist reviews in order:
   - spec compliance and brief/design/content quality review first;
   - compliance review before claims/copy/forms/legal/privacy are shippable;
   - code/security review for implementation;
   - browser QA/design screenshot review for UI.
5. Orchestrator independently verifies repo state, diff, tests, build, browser or deploy smoke.
6. Only then update issue/PR evidence and close.

## Context rules

- Do not pass the full artefact set by default.
- Do not ask any subagent to ingest all briefs, artefacts, screenshots, and repo files unless original-source audit is the issue itself.
- Use `docs/brief/canonical-brief.md` as the normal source for implementation.
- Use `/root/lircap/artifacts/` only when the issue explicitly requires original-source inspection.
- If a subagent times out or broadens scope, split the issue rather than extending the task.

## Review and verification rules

- Every implementation slice needs a spec-compliance check against the issue acceptance criteria and supplied canonical references.
- Every implementation slice needs a quality review from the relevant specialist perspective: brand strategy, design direction, compliance copy, code/security, browser QA, or DevOps smoke.
- Reviewer reports must return `PASS` or required changes with evidence. Required changes block PR readiness until fixed and rechecked.
- The orchestrator retains final responsibility for repo state, diff review, commands run, PR evidence, and deployment verification. Subagent self-report is never sufficient proof.

## Spawned profiles

Use actual Hermes profiles only for long-running independent missions. For normal issue slices, use `delegate_task` with the relevant operating profile in the prompt.
