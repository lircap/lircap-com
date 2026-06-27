# Design token implementation

**Control issue:** #2

The executable token source is `src/styles/tokens.css`.

## Colour

| Token | Hex | Role |
|---|---:|---|
| `--obsidian` | `#12151c` | primary dark surface |
| `--atlantic-deep` | `#0c2b35` | secondary dark surface |
| `--aged-gold` | `#b8975a` | accent only: crossing node, hairline rules, hover markers |
| `--atlantic-slate` | `#7a9ba8` | supporting captions, secondary labels, rules |
| `--parchment` | `#f5f1eb` | text on dark and relief/editorial surface |
| `--parchment-dim` | `#c9c3b8` | subtle secondary text tier |

Gold must not become a dominant fill. Gold text on parchment is prohibited by contrast.

## Typography

- Display: `Newsreader, Georgia, 'Times New Roman', serif`.
- Body/UI: `Inter, Arial, system-ui, sans-serif`.
- Utility labels: uppercase Inter with letter spacing.

## Space, grid, radius, motion

- Spacing follows a 4px base scale through `--space-*` tokens.
- Container max is `--container-max: 77.5rem` (~1240px).
- Radius is intentionally sharp: `0` or `2px` only.
- Elevation is flat; hairline rules and tonal shifts replace shadows.
- Motion primitives include `--motion-fast`, `--motion-reveal`, and `--motion-crossing`, with reduced-motion support in global CSS.

## Contrast checks

Automated contrast checks live in `tests/design-tokens.test.mjs`.

Required passing pairs:

- parchment on obsidian;
- parchment on Atlantic Deep;
- obsidian on parchment;
- Atlantic Deep on parchment;
- aged gold on obsidian;
- aged gold on Atlantic Deep.

Known non-body/non-link pairs intentionally fail and are tested as prohibited:

- aged gold on parchment;
- Atlantic Slate as body text on parchment.
