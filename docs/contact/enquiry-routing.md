# Contact / enquiry routing model

**Control issue:** #12
**Status:** bounded safe slice for pre-production. This document selects the current public posture and records the future form model without enabling it.

## Selected route for this slice

The `/contact/` page is **email-only**:

- public address: `partners@lircap.com`;
- no HTML form;
- no client-side JavaScript;
- no `fetch`/XHR submission;
- no external form action, no third-party form processor, and no other third-party processor;
- no analytics, tracking pixel, CAPTCHA widget, or hosted spam script;
- no SMTP host, API key, password, webhook URL, Turnstile key, or other secret in client code.

Rationale: `CL-017` and content dependency `CD-007` are unresolved. Until privacy, retention, processor, and counsel decisions are confirmed, direct email exposes the least website data-flow surface and avoids collecting personal data inside the static site.

## Public intent routing

The public page asks senders to identify one of three broad routes in the subject or opening line:

1. **Capital relationships** — institutional, family-office, or professional-counterparty context.
2. **Company or transaction introductions** — owners, companies, advisers, or trusted introducers.
3. **General or senior introductions** — other relationship-led enquiries.

The routing language is deliberately fit/conversation oriented. It must not state or imply an offer, invitation, solicitation, financial promotion, regulated status, transaction availability, or professional-investor gate clearance.

## Spam-protection posture

Current slice: spam is handled by normal email-layer controls only. The website does not expose a submission endpoint and therefore does not need a browser spam widget.

Selected future default, once approved: **self-hosted enquiry handler** with:

- honeypot field;
- Cloudflare Turnstile or equivalent privacy-reviewed challenge;
- server-side validation;
- IP/request rate limiting;
- plain-text email delivery to the approved team mailbox;
- no database persistence unless separately approved;
- operational logging limited to security needs and documented retention.

Third-party form processors remain excluded unless Tim Cole / DevOps / counsel record that self-hosting is disproportionate and approve processor terms, data location, retention, and sub-processors.

## Privacy / GDPR implications to close before deploy

Before any live form, analytics, or processor is deployed, record:

- data controller identity and contact details;
- exact personal data fields collected;
- lawful basis for handling enquiries;
- recipient mailbox and internal routing/access controls;
- retention period for enquiry emails, logs, and backups;
- whether special-category/confidential transaction data might be submitted and how the public copy discourages over-sharing;
- data-subject rights process;
- cross-border transfer position for email, hosting, security, CAPTCHA, analytics, and backup providers;
- processor/sub-processor list and DPAs;
- incident/security handling for enquiry data;
- privacy-policy wording matching the implemented data flow.

## Deploy blockers

Do not deploy a live form endpoint until:

- `CL-017` is reviewed for the implemented data flow;
- `CD-007` is resolved or explicitly deferred as email-only;
- counsel/compliance confirms that contact wording and any professional-counterparty language do not create inappropriate gating or solicitation risk (`CL-002`, `CL-003`);
- secrets are stored only in server/GitHub/VPS secret stores and never rendered into static HTML or client JavaScript;
- the privacy/legal page accurately describes contact data handling.

## Traceability

- `content/pages/contact.md`
- `src/pages/contact.astro`
- `docs/content/content-model.md` (`CD-007`)
- `docs/compliance/claims-register.md` (`CL-002`, `CL-003`, `CL-017`)
- `/root/lircap/artifacts/Lir_Website_PRD_v0.1-2.md` §5, §13
- `/root/lircap/artifacts/Lir_Website_Compliance_Copy_Review_v0.1.md` Gate B-G
