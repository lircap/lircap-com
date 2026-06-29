import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { getSeo } from '../src/data/seo.js';

const investorsPage = readFileSync(new URL('../src/pages/for-investors.astro', import.meta.url), 'utf8');
const dealsPage = readFileSync(new URL('../src/pages/for-deals.astro', import.meta.url), 'utf8');
const legalPage = readFileSync(new URL('../src/pages/legal.astro', import.meta.url), 'utf8');
const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('public route readiness', () => {
  it('replaces investor and deal scaffold copy with conservative route-purpose content', () => {
    for (const page of [investorsPage, dealsPage]) {
      expect(page).not.toMatch(/Draft route|scaffolded|Copy is not frozen/i);
      expect(page).toMatch(/fit,? context and timing|fit, timing, and discretion/i);
      expect(page).toMatch(/first conversation/i);
      expect(page).toMatch(/Please (avoid sending|do not send) (confidential|sensitive)/i);
      expect(page).not.toMatch(/guarantee|returns?|track record|exclusive access|available transactions/i);
    }

    expect(investorsPage).toContain('For investors');
    expect(investorsPage).toContain('A discreet path for capital relationships.');
    expect(dealsPage).toContain('For deals');
    expect(dealsPage).toContain('A careful first conversation for complex situations.');
  });

  it('keeps legal minimal and based on confirmed disclosure', () => {
    expect(getSeo('/legal/').description).toMatch(/confirmed company registration details/i);
    expect(legalPage).toContain('Harmonycove Limited trading as Lir Capital Partners');
    expect(legalPage).toContain('Company No. 801328');
    expect(legalPage).toMatch(/confirmed company disclosure and general notes/i);
    expect(legalPage).toMatch(/Nothing on this website is an offer, invitation, solicitation/i);
    expect(legalPage).not.toMatch(/pre-production|compliance gate|status summary|counsel review/i);
  });

  it('adds responsive route styles for the new public pages', () => {
    expect(css).toContain('.route-page');
    expect(css).toContain('.route-card-grid');
    expect(css).toContain('.route-note');
    expect(css).toContain('grid-template-columns: repeat(3, minmax(0, 1fr))');
    expect(css).toContain('.route-card-grid,');
  });
});
