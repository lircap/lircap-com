import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { getSeo } from '../src/data/seo.js';

const contactPage = readFileSync(new URL('../src/pages/contact.astro', import.meta.url), 'utf8');
const contactBrief = readFileSync(new URL('../content/pages/contact.md', import.meta.url), 'utf8');
const routingDoc = readFileSync(new URL('../docs/contact/enquiry-routing.md', import.meta.url), 'utf8');
const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const combinedDocs = `${contactBrief}\n${routingDoc}`;
const contactSeo = getSeo('/contact/');

describe('contact enquiry route safe slice', () => {
  it('renders a static senior contact route with email-only routing', () => {
    expect(contactPage).toContain("const seo = getSeo('/contact/');");
    expect(contactSeo.title).toBe('Contact — Lir Capital');
    expect(contactSeo.description).toMatch(/avoids web forms, tracking and client-side enquiry capture/i);
    expect(contactPage).toContain('Discreet enquiry');
    expect(contactPage).toContain('Start with a direct note.');
    expect(contactPage).toContain('partners@lircap.com');
    expect(contactPage).toContain('mailto:${contactEmail}?subject=Lir%20Capital%20enquiry');
    expect(contactPage).toContain('Capital relationships');
    expect(contactPage).toContain('Company or transaction introductions');
    expect(contactPage).toContain('General or senior introductions');
    expect(contactPage).toMatch(/not an offer, invitation, or solicitation/i);
  });

  it('does not expose a live form, client scripts, fetch calls, external actions, or secrets', () => {
    expect(contactPage).not.toMatch(/<form\b|<script\b|client:load|client:visible|fetch\(|XMLHttpRequest|navigator\.sendBeacon/i);
    expect(contactPage).not.toMatch(/action=["']https?:|formaction=["']https?:|webhook|formspree|web3forms|turnstile|captcha/i);
    expect(contactPage).not.toMatch(/smtp|password|passwd|secret|api[_-]?key|token|bearer|private[_-]?key|BEGIN [A-Z ]*PRIVATE KEY/i);
    expect(contactPage).not.toMatch(/https?:\/\//i);
  });

  it('documents routing, spam posture, privacy implications, and deploy blockers', () => {
    expect(routingDoc).toContain('email-only');
    expect(routingDoc).toContain('self-hosted enquiry handler');
    expect(routingDoc).toContain('honeypot');
    expect(routingDoc).toContain('Turnstile');
    expect(routingDoc).toContain('rate limiting');
    expect(routingDoc).toMatch(/Privacy \/ GDPR implications/i);
    expect(routingDoc).toMatch(/Deploy blockers/i);
    expect(routingDoc).toMatch(/no database persistence/i);
    expect(routingDoc).toMatch(/no third-party form processor/i);
    expect(routingDoc).toMatch(/No secrets|never rendered into static HTML/i);
  });

  it('keeps CL-002, CL-003, and CL-017 traceability visible in the control brief and routing doc', () => {
    for (const claimId of ['CL-002', 'CL-003', 'CL-017']) {
      expect(contactBrief).toContain(claimId);
      expect(routingDoc).toContain(claimId);
    }

    expect(combinedDocs).toContain('CD-007');
    expect(combinedDocs).toContain('docs/contact/enquiry-routing.md');
    expect(combinedDocs).toMatch(/not a suitability process, investor categorisation, or financial-promotion gate/i);
  });

  it('adds responsive contact styles without JavaScript-dependent behaviour', () => {
    expect(css).toContain('.contact-page');
    expect(css).toContain('.contact-email');
    expect(css).toContain('.intent-grid');
    expect(css).toContain('.contact-note');
    expect(css).toContain('grid-template-columns: repeat(3, minmax(0, 1fr))');
    expect(css).toContain('@media (max-width: 980px)');
  });
});
