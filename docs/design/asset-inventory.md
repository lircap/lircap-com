# Photography and asset inventory

**Control issue:** #23  
**Implementation dependency:** #10  
**Source:** `Lir_Photography_Art_Direction_Brief_v0.1.md`, `Lir_Website_Design_Language_Spec_v0.2.md` §7–§7a, `docs/design/critique-rubric.md`, `docs/compliance/claims-register.md` (`CL-016`).

## Core rule

No stock imagery. No AI stand-ins. No production launch while placeholder markers remain on published pages.

Pre-prod may use neutral grey placeholder blocks only when:

- correct aspect ratio is reserved;
- placeholder is labelled by purpose;
- placeholder has no fake polish, stock-photo feel, or generated atmosphere;
- replacement owner/status is tracked here;
- placeholder marker scanning is run before launch.

## Status terms

| Status | Meaning |
|---|---|
| `placeholder-ok-preprod` | Neutral placeholder permitted for pre-prod only. |
| `brief-needed` | Production asset requirement explicit but photographer/asset not yet briefed. |
| `in-production` | Shoot/licensing/retouch workflow underway. |
| `ready-for-review` | Asset exported and ready for design/compliance review. |
| `approved-production` | Rights/releases/grade/crops approved; can ship. |
| `blocked` | Missing rights, release, crop, grade, or compliance approval. |
| `n/a` | Requirement does not apply to this asset class. |

## Placeholder convention

Placeholders are implementation scaffolding, not art direction. They must read as intentionally unfinished editorial layout blocks rather than replacement photography.

| Requirement | Rule |
|---|---|
| Marker | Every placeholder wrapper carries `data-placeholder="lircap-[asset-id]"`; no untracked placeholders. |
| Visual treatment | Flat neutral block only: dark-surface placeholder `#1B1F27`; light-surface placeholder `#E3DDD2`; optional 1px hairline using existing surface divider tokens. |
| Label | Small utility label: `IMAGE — [purpose]` and asset ID, e.g. `IMAGE — PARTNER PORTRAIT / IMG-POR-01`. |
| Prohibited | Stock/library/licensed images, AI-generated images, blurred pseudo-photography, gradients that mimic atmosphere, people silhouettes, fake headshots, generic water/skyline renders. |
| Accessibility | Placeholder label must be visible text or `aria-label`; production asset must use meaningful alt text or empty alt when purely decorative. |
| Launch gate | Any `data-placeholder="lircap-..."` marker in production source/build output is a blocker unless explicitly scoped to non-production preview documentation. |

## Asset inventory and production requirements

| ID | Asset class | Usage surface / route / component | Required ratios and crop safe areas | Production requirement | Owner | Production status | Rights/licensing status | Model release status | Retouch/colour-grade status | Replacement path | Launch blocker? |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `IMG-POR-01` | Partner portrait | Team route; Sébastien Conway team card/detail; possible homepage proof/team teaser | 1:1 face-safe centre crop; 4:5 primary portrait with eyes in upper third; 16:9 secondary crop when used in editorial/case-study modules; keep 10% safe area around head/shoulders | Commissioned primary eye-line portrait + secondary working/three-quarter frame, shot to shared lighting/framing spec | Photography producer | `placeholder-ok-preprod` | `blocked` until commercial buyout logged | `blocked` until signed | `blocked` until included in unified portrait grade | Replace matching placeholder marker with approved AVIF/WebP exports and archival master reference | Yes |
| `IMG-POR-02` | Partner portrait | Team route; Pierre Sallenave team card/detail; possible homepage proof/team teaser | 1:1 face-safe centre crop; 4:5 primary portrait with eyes in upper third; 16:9 secondary crop when used in editorial/case-study modules; keep 10% safe area around head/shoulders | Commissioned primary eye-line portrait + secondary working/three-quarter frame, shot to shared lighting/framing spec | Photography producer | `placeholder-ok-preprod` | `blocked` until commercial buyout logged | `blocked` until signed | `blocked` until included in unified portrait grade | Replace matching placeholder marker with approved AVIF/WebP exports and archival master reference | Yes |
| `IMG-POR-03` | Partner portrait | Team route; Jules Herd team card/detail; possible homepage proof/team teaser | 1:1 face-safe centre crop; 4:5 primary portrait with eyes in upper third; 16:9 secondary crop when used in editorial/case-study modules; keep 10% safe area around head/shoulders | Commissioned primary eye-line portrait + secondary working/three-quarter frame, shot to shared lighting/framing spec | Photography producer | `placeholder-ok-preprod` | `blocked` until commercial buyout logged | `blocked` until signed | `blocked` until included in unified portrait grade | Replace matching placeholder marker with approved AVIF/WebP exports and archival master reference | Yes |
| `IMG-POR-04` | Partner portrait | Team route; Jowaher Al Suwaidi team card/detail; possible homepage proof/team teaser | 1:1 face-safe centre crop; 4:5 primary portrait with eyes in upper third; 16:9 secondary crop when used in editorial/case-study modules; keep 10% safe area around head/shoulders | Commissioned primary eye-line portrait + secondary working/three-quarter frame, shot to shared lighting/framing spec | Photography producer | `placeholder-ok-preprod` | `blocked` until commercial buyout logged | `blocked` until signed | `blocked` until included in unified portrait grade | Replace matching placeholder marker with approved AVIF/WebP exports and archival master reference | Yes |
| `IMG-POR-05` | Partner portrait | Team route; Tim Cole team card/detail; possible homepage proof/team teaser | 1:1 face-safe centre crop; 4:5 primary portrait with eyes in upper third; 16:9 secondary crop when used in editorial/case-study modules; keep 10% safe area around head/shoulders | Commissioned primary eye-line portrait + secondary working/three-quarter frame, shot to shared lighting/framing spec | Photography producer | `placeholder-ok-preprod` | `blocked` until commercial buyout logged | `blocked` until signed | `blocked` until included in unified portrait grade | Replace matching placeholder marker with approved AVIF/WebP exports and archival master reference | Yes |
| `IMG-POR-06` | Partner portrait | Team route; Steven Shenfeld team card/detail; possible homepage proof/team teaser | 1:1 face-safe centre crop; 4:5 primary portrait with eyes in upper third; 16:9 secondary crop when used in editorial/case-study modules; keep 10% safe area around head/shoulders | Commissioned primary eye-line portrait + secondary working/three-quarter frame, shot to shared lighting/framing spec | Photography producer | `placeholder-ok-preprod` | `blocked` until commercial buyout logged | `blocked` until signed | `blocked` until included in unified portrait grade | Replace matching placeholder marker with approved AVIF/WebP exports and archival master reference | Yes |
| `IMG-POR-WIDE` | Partner portrait set crop | Case-study/proof units, sector relationship modules, wide team/partner-led proof bands where individual partner context is needed | 16:9 landscape; partner may sit off-centre; maintain 20% quiet negative space for captions/eyebrows; no tight facial crop | Horizontal crop exported from each approved portrait session; same release as source portrait | Photography producer | `placeholder-ok-preprod` | `blocked` until source portrait buyouts logged | `blocked` until source portrait releases signed | `blocked` until included in unified portrait grade | Replace wide placeholders with per-partner approved crop selected by page owner | Yes when used on published page |
| `IMG-HERO-01` | Atmosphere / hero | Home route hero/crossing component; possible top-level page hero variant | 16:9 desktop with centre and left/right safe crops; mobile may crop to 4:5/1:1 from same master; keep 35% low-detail negative space for headline/crossing overlay | Commissioned dark Atlantic/horizon/navigation atmosphere; cinematic, restrained, no literal cliché | Design director + photography producer | `placeholder-ok-preprod` | `blocked` until commercial buyout or original commission terms logged | `n/a` unless people appear; avoid people | `blocked` until matched to portrait duotone/monochrome system | Replace hero placeholder with approved responsive AVIF/WebP set and alt/decorative decision | Yes |
| `IMG-ATM-01` | Atmosphere / section | Page headers and section dividers across Home, For Investors, For Deals, Sectors/Capabilities, Private Markets | 16:9 and 3:2; keep 25% quiet edge for type and crossing-line overlays; horizon must not bisect headings awkwardly | Commissioned dark water/horizon/abstract navigation set, 4–6 usable frames | Design director + photography producer | `placeholder-ok-preprod` | `blocked` until commercial buyout or original commission terms logged | `n/a` unless people appear; avoid people | `blocked` until unified atmosphere grade approved | Replace route-specific placeholders with approved frame chosen in page art-direction review | Yes when used on published page |
| `IMG-ATM-02` | Atmosphere / texture | Texture/detail moments in cards, pull-quotes, contact bands, proof teasers | 3:2 and 1:1; crop-safe abstract detail; no recognisable third-party property/logos; preserve low-contrast quietness | Commissioned abstract light/water/depth details, 6–10 usable frames | Design director + photography producer | `placeholder-ok-preprod` | `blocked` until commercial buyout or original commission terms logged | `n/a` unless people appear; avoid people | `blocked` until unified atmosphere grade approved | Replace component placeholders with approved texture from controlled set | No if component can ship without image; yes if placeholder remains |
| `IMG-DUB-01` | Atmosphere / location | Optional Dublin / Samuel Beckett Bridge night context; legal/about/contact context if used | 16:9 and 3:2; avoid readable faces, vehicle plates, private interiors, client/counterparty signage; keep 20% quiet area for caption/type | Commissioned or location-cleared editorial city-waterfront frame; dark, specific, non-stock | Photography producer | `brief-needed` | `blocked` until photographer/location/property permissions confirmed | `n/a` if no identifiable people; otherwise `blocked` until releases secured | `blocked` until matched to atmosphere grade | Use only after location/rights clearance; otherwise omit slot rather than substituting generic city imagery | No unless design depends on this optional image |

## Rights and releases gate

Production assets must have documented approval before `approved-production` status:

| Gate | Requirement | Applies to | Blocking condition |
|---|---|---|---|
| Licence / buyout | Full commercial buyout, perpetual, worldwide, all media including web, deck, print, social and future brand uses | All commissioned or licensed assets | Missing written grant, restricted term/territory/media, unclear photographer/agency ownership |
| Model release | Signed model release from every identifiable person | All partner portraits; any atmosphere/location frame with identifiable people | Missing, unsigned, or scope narrower than licence |
| Confidentiality | No client, deal, counterparty, document, screen, logo, private address, vehicle plate, or sensitive location detail visible | All assets | Any unresolved confidential or third-party material visible |
| Property/location | Permission or clearance for recognisable private interiors/locations and any controlled shoot site | Atmosphere/location and environmental portraits | Unclear location rights or uncontrolled recognisable property |
| Compliance review | Imagery does not imply regulated status, endorsements, specific counterparties, performance claims, or unavailable case-study proof | All public imagery | Image context creates an unsupported claim or endorsement |
| Delivery archive | RAW/high-res master stored; approved AVIF/WebP responsive exports; sRGB profile; alt/decorative decision captured | All approved assets | Missing master/export, inconsistent file naming, or no accessibility treatment |

## Retouch and colour-grade direction

| Area | Direction | Approval requirement |
|---|---|---|
| Overall grade | Monochrome or cool duotone anchored in Obsidian / Atlantic Deep / Atlantic Slate; Aged Gold is not used as an image tint. | Design director approves representative proof before batch export. |
| Portrait consistency | Six partners must feel shot by one hand despite multiple cities: consistent contrast, black point, skin tone handling, crop distance, eye-line presence and background density. | Single retoucher/colour grade across all portraits; mismatched local edits are rejected. |
| Portrait retouch | Natural and restrained: remove transient distractions only; preserve age, texture, expression and credibility. No glossy skin, reshaping, bright corporate headshot polish or founder-style glamour. | Photography producer confirms retouch restraint; partner may flag factual/comfort issues without breaking set consistency. |
| Atmosphere grade | Dark, cinematic, quiet tonal range that blends into Obsidian and leaves negative space for type/crossing overlays. Avoid HDR, saturated sunset, tourist-postcard colour and generic dramatic waves. | Design director checks against hero/page mockups at mobile and desktop crops. |
| Export QA | Check image readability on dark and parchment surfaces; verify safe crops at required ratios; avoid banding/noise compression in low-light frames. | Asset cannot move to `approved-production` until crop/contact sheet and responsive exports pass review. |

## Placeholder-to-production workflow

1. Reserve the slot with the correct aspect ratio and placeholder marker from the inventory table.
2. Keep the placeholder visually neutral and labelled by purpose; do not search for temporary stock or AI substitutes.
3. When a shoot/licence starts, update production, rights, release and grade statuses independently.
4. On delivery, review contact sheets against crop safe areas and the design critique rubric imagery dimension.
5. Approve rights/releases, retouch/grade and responsive exports before changing status to `approved-production`.
6. Replace the `data-placeholder="lircap-[asset-id]"` slot with production asset references and remove the marker.
7. Run placeholder scanning before launch; any remaining marker on published source/build output blocks release.

## Placeholder scanning

Placeholder markers use the form:

```html
data-placeholder="lircap-IMG-HERO-01"
```

Before production launch, run:

```bash
python3 scripts/check-placeholders.py
```

Expected result for launch:

```text
PASS: no LirCap placeholder markers found
```

Any marker found in build/source output is a production blocker unless explicitly scoped to non-production preview docs.
