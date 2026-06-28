---
status: draft
page: "Contact / Enquiry"
route: "/contact"
primary_audience: "Qualified counterparties considering first conversation"
primary_issue: "#12"
canonical_brief_sections:
  - "§6 Content architecture"
  - "§8 Compliance constraints"
  - "§11 Technical architecture summary"
compliance_claim_ids:
  - "CL-002"
  - "CL-003"
  - "CL-017"
copy_freeze: false
content_model: "docs/content/content-model.md"
---

# Contact / Enquiry page brief

## Job of the page

Draft the page narrative before any build work. This page brief is a planning/control surface, not final public copy.

## Audience and journey

- Primary audience: Qualified counterparties considering first conversation
- Journey entry point: to be refined during issue #12
- Desired next action: contact/discuss fit where appropriate, without over-soliciting regulated activity.

## Message hierarchy

1. Primary message: derive from canonical brief sections listed above.
2. Supporting proof: use only sourced, substantiated, anonymised, or softened proof from the claims register.
3. CTA / next step: senior, discreet enquiry language.

## Source provenance

| Content block | Source | Notes |
|---|---|---|
| Positioning | `docs/brief/canonical-brief.md` | Use listed sections only unless orchestrator supplies a source excerpt. |
| Claims/copy risk | `docs/compliance/claims-register.md` | Use listed claim IDs. |

## Compliance status

| Claim ID | Status | Approved/fallback wording | Owner/sign-off |
|---|---|---|---|
| `CL-002` | See claims register | Use fallback until cleared | See claims register |
| `CL-003` | See claims register | Use fallback until cleared | See claims register |
| `CL-017` | See claims register | Use fallback until cleared | See claims register |

## Implemented safe slice for issue #12

The public `/contact/` route is implemented as a static, email-only route. It uses direct `mailto:` routing to `partners@lircap.com` and does **not** include a live form, form endpoint, client-side scripts, analytics, CAPTCHA widget, third-party processor, or website database capture.

Supporting routing documentation: `docs/contact/enquiry-routing.md`.

## Public copy posture

- Tone: senior, discreet, concise, and human.
- CTA: direct note / first conversation / understand fit only.
- Avoids: offer, invitation, solicitation, product language, guaranteed access, active professional-investor gating, and regulated-status implications.
- Traceability: public route is controlled by `CL-002`, `CL-003`, and `CL-017` until counsel/compliance closeout.

## Routing model

Visitors are asked to identify one of three broad enquiry intents in the email subject or opening line:

1. Capital relationships.
2. Company or transaction introductions.
3. General or senior introductions.

This is a triage aid only. It is not a suitability process, investor categorisation, or financial-promotion gate.

## Spam protection and future form default

Selected current posture: **email-only now**. Spam protection is limited to ordinary mailbox-layer controls because no public submission endpoint exists.

Selected future default after privacy/counsel decision: self-hosted handler with honeypot, Turnstile or equivalent privacy-reviewed challenge, server-side validation, rate limiting, and email delivery to the approved team mailbox. No third-party form processor should be introduced unless processor terms, data location, sub-processors, and retention are approved and documented.

## Privacy / GDPR implications before deploy

Before any live form, analytics, or processor is enabled, record:

- controller identity and privacy contact;
- personal data fields collected;
- lawful basis;
- recipient mailbox and access controls;
- retention for enquiry emails, logs, and backups;
- treatment of confidential transaction data and over-sharing warnings;
- data-subject rights process;
- cross-border transfer and processor/sub-processor position;
- incident/security process;
- privacy-policy copy aligned to the actual data flow.

## No secrets policy

The contact route must not expose SMTP hosts, SMTP usernames/passwords, API keys, Turnstile secret keys, webhook URLs, CRM endpoints, private mailbox routing rules, or environment-variable values. Any future server-side form handler must keep secrets in GitHub/VPS/server secret stores only.

## Voice review

- [x] proof before claim
- [x] specific over generic
- [x] senior, restrained, human
- [x] no forbidden generic phrases
- [x] not pasted from deck copy

## Build handoff

- Components implemented: static contact hero, direct email link, intent cards, privacy/spam posture note.
- Imagery/placeholder requirements: no imagery or placeholders used.
- Open decisions: form handler, retention, privacy policy, counsel review, spam processor/Turnstile posture remain deploy blockers for any live form.
