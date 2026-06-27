# Client/stakeholder review and change-control loop

**Control issue:** #26

This workflow turns client feedback into controlled GitHub work without losing design quality, compliance discipline, or scope boundaries.

## Review-round package

Each client review round must be packaged as a written issue/comment before feedback is requested.

Include:

- review round ID, e.g. `R1`, `R2`;
- pre-prod URL;
- password instructions without printing the password;
- pages/routes included;
- required screenshot or screen-recording evidence for every reviewed page/state;
- if screenshots are not possible, a written exception explaining why and what evidence replaces them;
- change summary since previous round;
- known limitations/placeholders;
- exact feedback deadline;
- requested feedback format.

Do not send a client link until pre-prod password-gate checks have passed.

## Feedback intake format

Ask for feedback in this structure:

```markdown
Page/route:
Section/component:
Type: defect / copy / design / compliance question / new scope / question
Severity: blocker / high / medium / low
Feedback:
Expected outcome:
Screenshot/reference, if any:
```

Ambiguous verbal feedback is not implemented until written into a GitHub issue/comment.

## Triage categories and labels

| Category | Label | Handling |
|---|---|---|
| Defect | `feedback:defect` | Fix in current milestone if it blocks acceptance. |
| Copy change | `feedback:copy` | Route through content workflow and claims register. |
| Design refinement | `feedback:design` | Route through design critique rubric; require screenshot evidence. |
| Compliance question | `feedback:compliance` | Route to compliance reviewer/counsel; do not implement directly. |
| New scope | `feedback:scope` | Estimate and approve separately before implementation. |
| Clarification | `feedback:question` | Resolve in writing before implementation. |
| Review round marker | `review-round` | Apply to package/summary issues for a review round. |

## Triage workflow

1. Capture feedback in GitHub.
2. De-duplicate by page/section/root cause.
3. Classify with labels above.
4. Link relevant source docs:
   - `docs/brief/canonical-brief.md`
   - `docs/content/copy-review-checklist.md`
   - `docs/compliance/claims-register.md`
   - `docs/design/critique-rubric.md`
   - `docs/qa/quality-gates.md`
5. Decide: accept, reject with reason, ask clarification, defer, or convert to new scope.
6. Accepted changes become bounded implementation issues or are attached to an existing active issue.
7. Close the review round only when every item has a disposition.

## Compliance routing

Feedback must route to compliance before implementation when it touches:

- authorisation/regulated activity language;
- investment performance, claims, credentials, superlatives;
- named counterparties, case studies, testimonials;
- private markets/investor solicitation;
- privacy, forms, analytics, contact handling;
- legal pages, risk warnings, or disclaimers.

No compliance-sensitive feedback is implemented from a chat/verbal note alone.

## Design quality routing

Design feedback must be interpreted against the design critique rubric, not implemented as literal pixel instructions by default.

For design changes:

- preserve the crossing idea and restrained institutional tone;
- avoid generic finance-template fixes;
- capture before/after screenshots;
- answer “Does this look AI-generated?” again after material visual changes.

## Decision log

Maintain the canonical decision log in review-round issue comments using this format:

```markdown
| ID | Source | Category | Decision | Owner | Follow-up issue/PR | Notes |
|---|---|---|---|---|---|---|
| R1-001 | Client | copy | accepted | content strategist | #NN | Route via CL-008. |
```

## First review round gate

The first client review round must create or update GitHub issues; no ad-hoc edits are allowed.

Minimum closeout evidence for a review round:

- review package URL/comment;
- feedback items captured;
- labels applied;
- disposition for every item;
- follow-up issues/PRs linked;
- compliance-sensitive items routed;
- scope additions separated from defects.
