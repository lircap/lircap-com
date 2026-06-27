import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const home = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const hero = readFileSync(new URL('../src/components/CrossingHero.astro', import.meta.url), 'utf8');
const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('homepage crossing hero', () => {
  it('uses the crossing hero component and compliance-safe copy', () => {
    expect(home).toContain('<CrossingHero />');
    expect(hero).toContain('Where capital and opportunity take a bearing.');
    expect(hero).toContain('Discreet, partner-led conversations');
    expect(hero).not.toMatch(/authori[sz]ed|guarantee|exclusive access|exceptional founders|trusted adviser to leading companies/i);
  });

  it('routes primary journeys without adding a form or runtime dependency', () => {
    expect(hero).toContain("href: '/for-investors/'");
    expect(hero).toContain("href: '/for-deals/'");
    expect(home).not.toMatch(/<form|fetch\(|client:load|client:visible/i);
  });

  it('renders a navigational crossing metaphor rather than generic finance waves', () => {
    expect(hero).toContain('Abstract navigational crossing');
    expect(css).toContain('.track--capital');
    expect(css).toContain('.track--opportunity');
    expect(css).toContain('.fix');
    expect(`${home}\n${hero}\n${css}`).not.toMatch(/wave|waves|handshake|trading screen|skyline|anchor|ship wheel/i);
  });

  it('respects reduced-motion preferences', () => {
    expect(css).toContain('@media (prefers-reduced-motion: reduce)');
    expect(css).toContain('transition-duration: 0.001ms !important');
  });
});
