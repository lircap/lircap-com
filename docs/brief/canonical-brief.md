# Lir Capital canonical website brief

**Status:** pre-production source of truth for implementation.
**Origin:** reconciles the uploaded strategy, PRD, brand/design, compliance, photography, sales-deck, private-markets, and team-biography artefacts.
**GitHub control issue:** #17.

## 1. Project job

Build a new Lir Capital website that acts as an elite advisory proof machine: senior, discreet, partner-led, and institutionally credible. The site should help sovereign funds, family offices, institutional allocators, business owners, and intermediaries understand where Lir sits: at the point where capital needs a deal and deals need the right capital.

The site must not read as a generic finance template or an AI-generated premium website. It should feel art-directed, restrained, and specific.

## 2. Public identity and baseline facts

- Public brand: **Lir Capital**.
- Legal entity in supplied brief: **Harmonycove Limited, trading as Lir Capital Partners**, Company No. **801328**, Dublin, Ireland.
- Existing compliance-safe default: company registration language only; do **not** infer or publish regulatory authorisation language from the company number.
- Any wording around authorisation, regulated activity, financial promotion, investor gating, named counterparties, or case studies is subject to the compliance gate.

## 3. Positioning and audience model

### 3.1 Positioning

Lir is a boutique merchant-banking / deal-origination, advisory, and capital-raising firm. The strategic archetype is the elite advisory proof machine: Centerview/Evercore/Qatalyst-style proof discipline and credibility, with a warmer, partner-led layer.

### 3.2 Audiences

1. **Investors / allocators** — sovereign funds, family offices, institutional allocators. They need access to the right opportunities, properly structured and pre-qualified.
2. **Deals / companies / owners** — compelling businesses or asset owners needing the right capital partner and senior advisory judgement.
3. **Intermediaries / introducers** — people with relationship proximity who need confidence that Lir is serious, discreet, and partner-led.

### 3.3 Primary journeys

- Investor path: Hero → For Investors → Sectors/proof → Team seniority → talk about mandate.
- Deals path: Hero → For Deals → Advisory/case-study proof → submit or discuss opportunity.
- Intermediary path: Hero → capabilities/proof → team → contact/introduction.

## 4. Ownable idea: the crossing

The signature design/content idea is **the crossing**: a navigational fix, the point where two lines of position meet. It should generate layout, motion, components, language, and imagery.

Use navigation/depth/horizon/Atlantic references with restraint. Avoid literal maritime clichés: anchors, ship wheels, compass clip art, generic waves, glass towers, handshakes, trading screens, and skyline stock imagery.

## 5. Brand and design language

### 5.1 Palette

Source palette from Brand Guide V3 / Design Spec:

- Obsidian `#12151C` — primary dark surface.
- Atlantic Deep `#0C2B35` — secondary dark surface.
- Aged Gold `#B8975A` — accent only.
- Atlantic Slate `#7A9BA8` — supporting tone.
- Parchment `#F5F1EB` — relief/editorial reading surface.

### 5.2 Typography

- Display/headings: **Newsreader** where available; Georgia/Garamond fallback acceptable.
- Body/interface: **Inter** where available; Arial/system fallback acceptable.
- Tone: editorial, precise, senior, not decorative or heritage pastiche.

### 5.3 Experience model

Dark-dominant, art-directed experience. Parchment appears as relief and editorial reading, not the default beige premium-finance template. There is no colour-mode toggle.

### 5.4 Motion

Motion should be purposeful, quiet, and navigational. It must respect reduced-motion preferences.

## 6. Content architecture

Initial sitemap/page inventory:

1. **Home** — positioning hero, structural gap, one function/two directions, capabilities, why Lir, proof teaser.
2. **For Investors** — investor problem, mandate understanding, mapped/pre-qualified opportunities, partner-level handling.
3. **For Deals** — company/asset-owner problem, capital/advisory routes, partner fit.
4. **Sectors / Capabilities** — investment banking, mining & hard assets, infrastructure, real estate, sovereign digital infrastructure, tax technology, private markets.
5. **Private Markets** — present but deliberately by introduction only; not marketed broadly.
6. **Team** — partner-led proof and concise biographies.
7. **Case-study / proof units** — anonymised by default unless consent and substantiation are cleared.
8. **Contact / enquiry** — senior, discreet, minimal, privacy-conscious.
9. **Legal/privacy** — entity disclosure, privacy/GDPR, and required notices once confirmed.
10. **News/announcements** — mechanism may be built but section remains off unless cadence and compliance clearance are real.

## 7. Voice and copy rules

Always:

- Proof before claim.
- Specific over generic.
- Senior, restrained, human.
- Named partner authority where appropriate.
- Web-native copy, not slide-text pasted from the sales deck.

Avoid:

- “trusted adviser to leading companies”
- “at the intersection of capital and innovation”
- “deep sector expertise” without concrete proof
- “long-term value creation”
- “we partner with exceptional founders”
- vague global finance boilerplate

## 8. Compliance constraints

The compliance review defines two blocking gates.

### Gate A — before build copy is considered shippable

- Regulatory authorisation status and language.
- Regulated-activity mapping.
- Named-counterparty consent.
- Substantiation of factual and superlative claims.
- Financial-promotion gating decision.

### Gate B — before deploy/client/public review as applicable

- Entity disclosure.
- Data protection/GDPR.
- Team bio accuracy and third-party references.
- Endorsements/testimonials.

Default safe posture until cleared:

- Use live-site-style registration language only.
- Anonymise case studies.
- Hedge or soften superlatives and claim-heavy deck language.
- Do not publish “authorised” language from the sales deck unless counsel/company secretary confirms exact status and wording.

## 9. Proof and content provenance model

| Content area | Primary source | Compliance status |
|---|---|---|
| Positioning and audiences | Strategic brief | usable as direction |
| Technical/content model | PRD | usable as build spec |
| Palette/type/design thesis | Brand guide + design spec | usable; verify contrast |
| Team biographies | Team biogs DOCX | raw input; needs editing and accuracy review |
| Proposition/capabilities | Sales deck + strategic brief | raw input; claims need review |
| Private Markets | Privates slide + strategic brief | highly sensitive; by-introduction only |
| Case studies / track record | Sales deck | anonymise and substantiate before publication |
| Regulatory/governance copy | Compliance review + confirmed facts | blocked until sign-off |
| Imagery | Photography brief | placeholders pre-prod only; production needs real assets/rights |

## 10. Imagery and placeholder rule

Commissioned partner portraits and atmosphere imagery are critical. Until real assets land, imagery slots use neutral grey placeholder blocks at correct aspect ratios, optionally labelled with purpose. No stock, no AI stand-ins, no lorem images.

No placeholder reaches production.

## 11. Technical architecture summary

- Static-first Astro site.
- Git-backed content; Keystatic considered by PRD.
- Pre-prod served at `lircap.pendragon.bot` behind a password gate.
- Caddy/static serving preferred on VPS with auto-HTTPS and security headers.
- CI should run install, typecheck, lint, build, accessibility/performance gates where practical.
- No runtime CMS/server/database unless a later issue justifies it.

## 12. Definition of done for implementation units

A page/component is not done until it:

- traces to this canonical brief and its GitHub issue;
- renders correct content from the chosen content model;
- is responsive from 320px to 1440px;
- is keyboard-operable with visible focus;
- respects reduced-motion;
- passes relevant contrast/accessibility checks;
- has no console errors;
- has screenshot evidence for visual work;
- has at least two critique passes for major visual slices;
- has compliance status for all claims/copy;
- has parent/orchestrator verification, not just subagent self-report.

## 13. Open decisions

See [`open-decisions.md`](open-decisions.md). Blocking items must be resolved or softened/removed before the affected implementation issue can close.
