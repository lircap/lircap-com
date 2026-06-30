# Wordmark loop decision — 2026-06-30

Decision: **promote Candidate C — hybrid wordmark system**.

## User prompt

The user flagged that the header should read as either `Lir Capital Partners` or `LirCap` as a single wordmark, not as a large `Lir` separated from stacked `CAPITAL / PARTNERS` metadata.

## Candidates explored

- **Candidate A — compact `LirCap` everywhere.** Strongest mobile fit and most ownable shorthand, but loses formal institutional name on desktop.
- **Candidate B — formal `Lir Capital Partners` everywhere.** Most literal and legally/formally clear, but mobile presence becomes smaller and less distinctive.
- **Candidate C — hybrid system.** Uses `Lir Capital Partners` on wider headers and `LirCap` on constrained mobile. It resolves the split-lockup defect while preserving formal desktop credibility and compact mobile clarity.

## Rationale

Candidate C best balances the two viable naming directions requested by the user:

- mobile shell gets a single premium `LirCap` wordmark with clear separation from the menu button;
- desktop retains the formal `Lir Capital Partners` wordmark as one cohesive phrase;
- accessibility keeps the full `Lir Capital Partners home` label independent of the responsive visual shorthand;
- no navigation behavior, SEO title, footer disclosure, legal copy, or page content changes are included.

## Evidence

Candidate subagents ran:

- `npm run typecheck` — passed.
- `npm run lint` — passed.
- `npm test -- --run` — passed, 10 files / 46 tests.
- `npm run build` — passed, 6 pages built.

Candidate C browser evidence:

- `candidate-hybrid-mobile.png` — mobile header shows `LirCap`.
- `candidate-hybrid-desktop.png` — desktop header shows `Lir Capital Partners`.

Final promoted branch reran verification separately after a parent craft fix to keep the brand link's clickable width aligned to the visible wordmark (`justify-self: start`). Final checks:

- `npm run typecheck` — passed.
- `npm run lint` — passed.
- `npm test -- --run` — passed, 10 files / 46 tests.
- `npm run build` — passed, 6 pages built.
- `npm run perf:budget` — passed, total=74184B js=0B css=24369B.

Final Playwright evidence in `final-browser/metrics.json` captured 320, 390, 720, 980, 981, 1024, and 1440 px:

- 320/390/720 show visible `LirCap`, full wordmark hidden, no overflow, no menu overlap, menu opens with `aria-expanded=true` and nav display `grid`.
- 980/981/1024/1440 show visible `Lir Capital Partners`, compact wordmark hidden, no overflow.
- At 390 px the visible wordmark-to-toggle gap is 208.42 px after the parent craft fix.
