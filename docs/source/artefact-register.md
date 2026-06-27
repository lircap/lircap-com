# Artefact register

Generated from `/root/lircap/artifacts/manifest.json` on 2026-06-27T16:30:44.499195+00:00.

The binary/source artefacts are intentionally **not** committed to this repository at this stage. This register records provenance and tells agents which source to consult.

| # | Artefact | VPS source path | Bytes | Extracted chars | Extracted text path | Primary use | Status |
|---:|---|---|---:|---:|---|---|---|
| 1 | `Lir Capital Sales Deck NEAR FINAL.pptx` | `/root/lircap/artifacts/Lir Capital Sales Deck NEAR FINAL.pptx` | 97737 | 10919 | `/root/lircap/artifacts/extracted_text/Lir Capital Sales Deck NEAR FINAL.pptx.txt` | Messaging/proof/proposition input; contains claims requiring substantiation/softening. | Received; preserved outside repo |
| 2 | `Lir Capital Team Biogs V1.docx` | `/root/lircap/artifacts/Lir Capital Team Biogs V1.docx` | 19726 | 11600 | `/root/lircap/artifacts/extracted_text/Lir Capital Team Biogs V1.docx.txt` | Raw team biography input; must be edited and compliance-reviewed before publication. | Received; preserved outside repo |
| 3 | `Lir Hero - The Crossing.dc.html` | `/root/lircap/artifacts/Lir Hero - The Crossing.dc.html` | 17761 | 17707 | `—` | Hero-direction prototype; visual/metaphor reference only, not production code to paste wholesale. | Received; preserved outside repo |
| 4 | `lir-hero-direction.html` | `/root/lircap/artifacts/lir-hero-direction.html` | 6353 | 6340 | `—` | Hero direction sketch; confirms dark editorial/nav-crossing approach. | Received; preserved outside repo |
| 5 | `Lir_Capital_Brand_Guide_V3.docx` | `/root/lircap/artifacts/Lir_Capital_Brand_Guide_V3.docx` | 23072 | 3932 | `/root/lircap/artifacts/extracted_text/Lir_Capital_Brand_Guide_V3.docx.txt` | Brand colour/type reference; source for palette and register. | Received; preserved outside repo |
| 6 | `Lir_Photography_Art_Direction_Brief_v0.1.md` | `/root/lircap/artifacts/Lir_Photography_Art_Direction_Brief_v0.1.md` | 5877 | 5838 | `—` | Photography/asset production, placeholder rules, rights/releases. | Received; preserved outside repo |
| 7 | `Lir_Website_Compliance_Copy_Review_v0.1.md` | `/root/lircap/artifacts/Lir_Website_Compliance_Copy_Review_v0.1.md` | 7032 | 6918 | `—` | Compliance gates, claims/sign-off requirements, copy risk posture. | Received; preserved outside repo |
| 8 | `Lir_Website_Design_Language_Spec_v0.2.md` | `/root/lircap/artifacts/Lir_Website_Design_Language_Spec_v0.2.md` | 12620 | 12444 | `—` | Design-system source: thesis, tokens, typography, components, critique loop. | Received; preserved outside repo |
| 9 | `Lir_Website_PRD_v0.1-2.md` | `/root/lircap/artifacts/Lir_Website_PRD_v0.1-2.md` | 11155 | 10956 | `—` | Technical architecture, content models, routes, CI/perf/a11y/deploy requirements. | Received; preserved outside repo |
| 10 | `Lir_Website_Strategic_Brief_v0.2.md` | `/root/lircap/artifacts/Lir_Website_Strategic_Brief_v0.2.md` | 14794 | 14634 | `—` | Primary strategic source of truth: positioning, audiences, proof model, voice, dependencies. | Received; preserved outside repo |
| 11 | `Privates Slide.pptx` | `/root/lircap/artifacts/Privates Slide.pptx` | 16192 | 1056 | `/root/lircap/artifacts/extracted_text/Privates Slide.pptx.txt` | Private Markets proposition input; by-introduction-only and compliance-sensitive. | Received; preserved outside repo |

## Source hierarchy

1. **Strategic source of truth:** `Lir_Website_Strategic_Brief_v0.2.md`.
2. **Build/technical source:** `Lir_Website_PRD_v0.1-2.md`.
3. **Design source:** `Lir_Website_Design_Language_Spec_v0.2.md` plus `Lir_Capital_Brand_Guide_V3.docx`.
4. **Compliance source:** `Lir_Website_Compliance_Copy_Review_v0.1.md`.
5. **Copy/proof inputs:** sales deck, Privates slide, team bios, existing site audit when completed.
6. **Visual/asset inputs:** photography brief and hero sketches.

## Agent-use rule

Implementation agents should not ingest the full artefact set. The orchestrator must pass only the issue body, the relevant canonical-brief section, and any specifically required source excerpt/path.
