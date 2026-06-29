# Agency-grade design critique rubric

**Control issue:** #21

This rubric turns the “high-end brand agency / Pentagram-grade” requirement into a review gate. It is mandatory for major visual slices and page/component PRs.

## Non-negotiable principle

Generation #1 cannot be marked done. Major visual work must pass at least two critique/refinement loops:

1. build or prototype;
2. capture screenshots at mobile and desktop widths;
3. critique against this rubric;
4. remove or refine the weakest element;
5. re-screenshot and critique again;
6. only then proceed to implementation closeout.

## Required screenshots

For each major page or visual slice, capture at minimum:

- mobile: 390px wide or equivalent;
- tablet or mid viewport where layout changes materially;
- desktop: 1440px wide or equivalent;
- normal-motion state for motion-heavy slices;
- reduced-motion state for motion-heavy slices. If motion is central, both normal and `prefers-reduced-motion` evidence are required.

Store or link screenshots in the PR, issue comment, or `docs/design/reviews/<issue-or-pr>/` if committed assets are useful.

## Critique dimensions

Score each dimension: `PASS`, `NEEDS WORK`, or `BLOCKER`.

| Dimension | What to check | Blocking smell |
|---|---|---|
| Strategic fit | Does it feel like senior Lir: elite advisory proof machine + human warmth? | generic fintech, VC SaaS, or luxury template |
| The crossing | Is the crossing/navigational fix ownable and generative? | decorative lines/waves with no structural idea |
| Composition | Is there real hierarchy, tension, and editorial judgement? | centered hero + cards + gradient = template |
| Typography | Does Newsreader/Inter create authority and rhythm? | oversized generic serif, weak measure, poor hierarchy |
| Restraint | Is the page confident enough to remove excess? | too many effects, icons, badges, stats, glows |
| Institutional credibility | Would a sovereign/family-office/institutional visitor trust it? | startup-pitch energy, hype, unsubstantiated claims |
| Human warmth | Is partner-led credibility present without becoming lifestyle content? | sterile corporate anonymity or overfriendly startup tone |
| Imagery | Are placeholders neutral and purposeful, or real assets art-directed? | stock finance, AI imagery, glass towers, handshakes, generic waves |
| Accessibility | Does contrast/focus/reduced-motion work? | illegible gold, motion dependence, hidden focus |
| AI-template smell | Does it look like an LLM-generated premium finance site? | cream+serif+gold cliché, generic maritime metaphors, symmetrical sameness |

## Browser QA evidence

For rendered UI reviews, the PR or issue comment must include:

- viewport screenshot links or attachments for mobile, tablet/mid where relevant, and desktop;
- console status: no errors, or a list of findings with disposition;
- contrast evidence for critical foreground/background pairs;
- keyboard/focus visibility evidence for interactive elements;
- reduced-motion evidence for motion-heavy slices, including both normal-motion and reduced-motion states;
- axe or equivalent accessibility scan output where a runnable page exists.

## Required review answer

Every final page/design review must explicitly answer:

> Does this look AI-generated?

Allowed answers:

- `No — approved`, with evidence.
- `Not yet — revise`, with specific changes.
- `Yes — blocked`, with specific causes.

## Two-pass critique comment template

```markdown
## Design critique — pass [1/2 or 2/2]

Screenshots:
- Mobile:
- Tablet/mid viewport, or `N/A — no material layout change`:
- Desktop:
- Reduced motion, or `N/A — no motion central to slice`:

Browser QA evidence:
- Console status:
- Contrast:
- Keyboard/focus:
- Reduced motion:
- Axe/accessibility scan:

Rubric:
- Strategic fit:
- The crossing:
- Composition:
- Typography:
- Restraint:
- Institutional credibility:
- Human warmth:
- Imagery:
- Accessibility:
- AI-template smell:

Weakest element to remove/refine:

Required changes before next pass:

Does this look AI-generated?

Verdict: PASS / NEEDS WORK / BLOCKER
```

## Whole-site wall review

For a design-loop promotion or public-site readiness claim, reviewers must place the route screenshots together as a system and answer:

- Is every public route in nav/CTA/footer intentionally complete enough to show the client?
- Does the mobile nav follow the expected right-aligned hamburger/menu convention, unless an alternative is explicitly approved?
- Does desktop nav copy have a clear public-facing point of view rather than dual-label indecision?
- At 1728/1920, does the hero remain composed without accidental one-word line breaks, overlap, or degraded image/text balance?
- Is the hero illustration refined enough to function as a brand-defining asset, or should it be reduced until proper art direction exists?
- Do section dividers/rules and empty bands form a deliberate system rather than accidental repetition or missing-module placeholders?
- Do `/for-investors/`, `/for-deals/`, `/contact/`, `/legal/`, and the footer each perform their expected page job?
- What is the one thing a high-end agency creative director would refuse to show tomorrow?

Any `BLOCKER` answer prevents promotion even if the weighted score improves.

## Page/issue applicability

Mandatory for:

- #2 design tokens/base visual system when visual examples are added;
- #6 homepage/crossing hero;
- #7 team section visual treatment;
- #10 imagery/photography requirements;
- #11 navigation/page shell;
- #14 design critique loop execution;
- #16 browser QA closeout;
- #23 photography/asset pipeline;
- every future page implementation issue.

## Placeholder rule

Neutral placeholders are acceptable in pre-prod only when labelled by purpose and correct aspect ratio. Placeholders must not create fake visual polish, stock-photo feel, or AI-generated atmosphere. No placeholder reaches production.
