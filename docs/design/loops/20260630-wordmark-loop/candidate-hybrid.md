# Candidate C — Hybrid wordmark system

## Intent

Address the mobile header critique that the current lockup reads as a giant `Lir` separated from stacked `CAPITAL / PARTNERS`. Candidate C keeps one cohesive brand component and switches the visible wording by available header width:

- **Wider headers:** `Lir Capital Partners` as the formal full-name wordmark.
- **Constrained mobile headers:** `LirCap` as the compact wordmark.

The goal is to make both states feel like the same wordmark system rather than a split primary mark plus metadata block.

## Implementation choices

- Replaced the two-part `brand-lockup__mark` + `brand-lockup__meta` structure with a single `.brand-wordmark` component inside the home link.
- Kept both wordmark variants in the same accessible home link and hid the decorative visual text from assistive tech with `aria-hidden="true"`.
- Updated the link label to `Lir Capital Partners home`, preserving a clear accessible name independent of the responsive visual variant.
- Used the same display face, weight, tight tracking, and one-line treatment for both variants.
- Switched variants in CSS at the existing constrained mobile breakpoint (`max-width: 720px`) where the menu button appears.

## Tradeoffs

- The full name is less oversized than the previous standalone `Lir`, but it reads more formally and avoids implying that `Capital Partners` is secondary metadata.
- `LirCap` is a more compact shorthand for mobile; it reduces crowding but relies on users accepting the abbreviated brand expression.
- Keeping both variants in markup avoids JavaScript and preserves no-JS behavior, but duplicates decorative text in the DOM. The accessible label remains singular and explicit.
- This candidate intentionally limits scope to the header brand lockup and does not change footer disclosure, SEO titles, navigation behavior, or mobile menu scripting.

## Review notes

Evaluate whether the formal desktop wordmark has enough presence without returning to the prior split composition, and whether `LirCap` feels sufficiently premium and legible in the constrained mobile header.
