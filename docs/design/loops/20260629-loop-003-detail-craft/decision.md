# Loop 003 decision

Decision: **PROMOTE integrated candidate to PR**.

## Why

The three Loop 003 candidates were complementary rather than mutually exclusive:

- Candidate A handled mobile shell/menu craft and accessibility state.
- Candidate B handled hero/route typography and section rhythm.
- Candidate C handled copy, team placeholders, legal/contact/footer/tail details.

The parent integrated all three, resolved the only patch conflict by keeping Candidate B's route-H1 class hook and Candidate C's improved Investors headline copy, then reran verification.

## Checks

- `git diff --check` passed.
- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm test -- --run` passed: 10 files / 46 tests.
- `npm run build` passed: 6 pages built.
- `npm run perf:budget` passed: total=74092B js=0B css=24481B.
- Browser metrics/contact-sheet captured from production preview on port 4330.

## Browser metric highlights

- No horizontal overflow across all captured routes/widths.
- Homepage H1: 2 lines at 768/1024/1440/1728/1920.
- Deals H1: 2 lines at 768/1024/1440/1728/1920.
- Investors H1: 2 lines at 390+.
- Contact H1: 1 line desktop.
- Mobile menu open state reports `aria-label=Close menu` and `aria-expanded=true`.

## Remaining non-blocking risks

- Hero illustration is more ownable, but still not a commissioned final brand asset.
- Team warmth remains constrained by lack of approved photography.
- Legal/contact language remains conservative and should be reviewed before public production launch.
