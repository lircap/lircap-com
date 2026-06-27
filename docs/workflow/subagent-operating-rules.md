# Subagent operating rules

This project uses Hermes subagents and specialist profiles to protect context and iteration limits.

## Default loop

1. Morwenna/orchestrator selects one issue or tight issue cluster.
2. Orchestrator prepares a self-contained prompt with:
   - issue body;
   - relevant canonical-brief section;
   - exact files/commands;
   - forbidden actions and stop conditions.
3. Dispatch a fresh bounded subagent for the task.
4. Run required specialist reviews in order:
   - brief/spec/design/content compliance first;
   - compliance review before claims/copy/forms/legal/privacy are shippable;
   - code/security review for implementation;
   - browser QA/design screenshot review for UI.
5. Orchestrator independently verifies repo state, diff, tests, build, browser or deploy smoke.
6. Only then update issue/PR evidence and close.

## Context rules

- Do not pass the full artefact set by default.
- Use `docs/brief/canonical-brief.md` as the normal source for implementation.
- Use `/root/lircap/artifacts/` only when the issue explicitly requires original-source inspection.
- If a subagent times out or broadens scope, split the issue rather than extending the task.

## Spawned profiles

Use actual Hermes profiles only for long-running independent missions. For normal issue slices, use `delegate_task` with the relevant operating profile in the prompt.
