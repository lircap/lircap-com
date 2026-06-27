import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const gateStatus = readFileSync(new URL('../docs/compliance/gate-status.md', import.meta.url), 'utf8');
const claimsRegister = readFileSync(new URL('../docs/compliance/claims-register.md', import.meta.url), 'utf8');
const signOffTracker = readFileSync(new URL('../docs/compliance/sign-off-tracker.md', import.meta.url), 'utf8');
const baseLayout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
const legalPage = readFileSync(new URL('../src/pages/legal.astro', import.meta.url), 'utf8');

const combinedControls = `${gateStatus}\n${claimsRegister}\n${signOffTracker}`;

describe('compliance gate controls', () => {
  it('tracks all Gate A and Gate B items with blocking status', () => {
    for (const item of [
      'A. Regulatory authorisation status and language',
      'B. Regulated-activity mapping',
      'C. Named-counterparty consent',
      'D. Factual/superlative claim substantiation',
      'E. Financial-promotion gating',
      'F. Entity disclosure',
      'G. Data protection / GDPR',
      'H. Team bio accuracy and third-party references',
      'I. Endorsements/testimonials',
    ]) {
      expect(signOffTracker).toContain(item);
    }

    expect(gateStatus).toContain('Gate A');
    expect(gateStatus).toContain('Gate B');
    expect(gateStatus).toContain('Not globally cleared');
  });

  it('requires issue-level claim closeout for the remaining copy-bearing work', () => {
    for (const issue of ['#7', '#8', '#9', '#12', '#13', '#16']) {
      expect(signOffTracker).toContain(issue);
    }

    expect(signOffTracker).toContain('Compliance closeout');
    expect(signOffTracker).toContain('Claim IDs touched');
    expect(signOffTracker).toContain('Compliance reviewer verdict');
  });

  it('covers financial-promotion and named-counterparty risk explicitly', () => {
    expect(combinedControls).toMatch(/financial-promotion/i);
    expect(combinedControls).toMatch(/named-counterparty/i);
    expect(combinedControls).toMatch(/SPV|fund|offer|invitation|solicitation/i);
    expect(combinedControls).toContain('CL-004');
    expect(combinedControls).toContain('CL-012');
  });

  it('uses a normalized compliance status vocabulary only', () => {
    const allowedStatuses = [
      'allowed',
      'safe-default',
      'needs-substantiation',
      'needs-counsel',
      'remove-soften',
      'exclude',
    ];

    for (const status of allowedStatuses) {
      expect(combinedControls).toContain(`\`${status}\``);
    }

    expect(combinedControls).not.toMatch(/`(?:allowed-direction|anonymise|remove\/soften|exclude-until-cleared)`/i);
  });

  it('uses only the confirmed entity disclosure fallback on the site', () => {
    const disclosure = 'Harmonycove Limited trading as Lir Capital Partners. Registered in Ireland. Company No. 801328.';

    expect(gateStatus).toContain(disclosure);
    expect(signOffTracker).toContain(disclosure);
    expect(baseLayout).toContain(disclosure);
    expect(legalPage).toContain(disclosure);
    expect(`${baseLayout}\n${legalPage}`).not.toMatch(/authori[sz]ed|regulated by|registered office|\bVAT\b/i);
  });
});
