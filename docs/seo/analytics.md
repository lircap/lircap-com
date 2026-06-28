# Analytics posture for #13

**Status:** documented baseline only; no analytics script is shipped in this slice.

## Decision for this slice

The site remains cookieless and script-free by default. The #13 implementation deliberately does **not** add Plausible Cloud, self-hosted Plausible, Google Analytics, tag managers, pixels, or any other external analytics call.

## Rationale

- The PRD lists Plausible as the default analytics direction, with self-hosting on the VPS as the default if the decision remains open.
- `CL-017` in the claims register marks privacy policy, contact/enquiry data handling, analytics and cookies as `needs-counsel` / `needs-substantiation`.
- The current contact slice intentionally avoids web forms, tracking and client-side data capture.
- Adding third-party JavaScript before the privacy/processor/cookie posture is recorded would create avoidable compliance and data-protection work.

## Future implementation gate

Before analytics is enabled, record:

1. selected mode: self-hosted Plausible or Plausible Cloud/EU;
2. controller/processor and data-retention posture;
3. whether the implementation is truly cookieless and whether consent/cookie notice changes are needed;
4. production domain(s), staging exclusion, and admin access controls;
5. approved privacy-policy wording and compliance/counsel sign-off for `CL-017`.

Only after those items are cleared should the site add an analytics script. Until then, SEO metadata, sitemap and robots files are implemented without client-side tracking.
