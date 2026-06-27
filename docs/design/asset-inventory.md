# Photography and asset inventory

**Control issue:** #23  
**Implementation dependency:** #10  
**Source:** `Lir_Photography_Art_Direction_Brief_v0.1.md`, `docs/design/critique-rubric.md`, `docs/compliance/claims-register.md` (`CL-016`).

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

## Asset inventory

| ID | Stream | Usage / surface | Ratio(s) | Priority | Production requirement | Placeholder marker | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| `IMG-POR-01` | Partner portrait | Sébastien Conway primary team portrait | 1:1, 4:5 | High | commissioned portrait, unified grade, release | `data-placeholder="lircap-IMG-POR-01"` | Photography producer | placeholder-ok-preprod |
| `IMG-POR-02` | Partner portrait | Pierre Sallenave primary team portrait | 1:1, 4:5 | High | commissioned portrait, unified grade, release | `data-placeholder="lircap-IMG-POR-02"` | Photography producer | placeholder-ok-preprod |
| `IMG-POR-03` | Partner portrait | Jules Herd primary team portrait | 1:1, 4:5 | High | commissioned portrait, unified grade, release | `data-placeholder="lircap-IMG-POR-03"` | Photography producer | placeholder-ok-preprod |
| `IMG-POR-04` | Partner portrait | Jowaher Al Suwaidi primary team portrait | 1:1, 4:5 | High | commissioned portrait, unified grade, release | `data-placeholder="lircap-IMG-POR-04"` | Photography producer | placeholder-ok-preprod |
| `IMG-POR-05` | Partner portrait | Tim Cole primary team portrait | 1:1, 4:5 | High | commissioned portrait, unified grade, release | `data-placeholder="lircap-IMG-POR-05"` | Photography producer | placeholder-ok-preprod |
| `IMG-POR-06` | Partner portrait | Steven Shenfeld primary team portrait | 1:1, 4:5 | High | commissioned portrait, unified grade, release | `data-placeholder="lircap-IMG-POR-06"` | Photography producer | placeholder-ok-preprod |
| `IMG-POR-WIDE` | Partner portrait | wide/case-study or team section crops for partners | 16:9 | Medium | commissioned horizontal crops, unified grade, releases | `data-placeholder="lircap-IMG-POR-WIDE"` | Photography producer | placeholder-ok-preprod |
| `IMG-HERO-01` | Atmosphere | homepage/crossing hero | 16:9, generous safe area | High | commissioned dark Atlantic/horizon/navigation atmosphere; no literal clichés | `data-placeholder="lircap-IMG-HERO-01"` | Design director + photography producer | placeholder-ok-preprod |
| `IMG-ATM-01` | Atmosphere | section dividers / page headers | 16:9, 3:2 | Medium | commissioned dark water/horizon/abstract navigation set | `data-placeholder="lircap-IMG-ATM-01"` | Design director + photography producer | placeholder-ok-preprod |
| `IMG-ATM-02` | Atmosphere | texture/detail moments | 3:2, 1:1 | Medium | commissioned abstract light/water/depth details | `data-placeholder="lircap-IMG-ATM-02"` | Design director + photography producer | placeholder-ok-preprod |
| `IMG-DUB-01` | Atmosphere | Dublin / Samuel Beckett Bridge night context if used | 16:9, 3:2 | Low | commissioned/location-cleared dark editorial city-waterfront frame | `data-placeholder="lircap-IMG-DUB-01"` | Photography producer | brief-needed |

## Production requirements for #10 closeout

Issue #10 cannot close until it defines, for each required asset class:

- usage surface and route/component;
- aspect ratios and crop safe areas;
- owner;
- production status;
- rights/licensing status;
- model release status for portraits;
- retouch/colour-grade status;
- replacement path from placeholder to production asset;
- whether the asset is a launch blocker.

## Rights and releases gate

Production assets must have:

- full commercial buyout, perpetual, worldwide, all media;
- model releases for all partner portraits;
- confirmation that no client/deal/counterparty material appears;
- single retoucher/grade across portrait set;
- web exports in AVIF/WebP plus archival masters.

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
