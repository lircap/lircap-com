import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const layout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('global navigation shell', () => {
  it('provides the primary routes, active state, and skip link without client JavaScript', () => {
    expect(layout).toContain('Skip to content');
    expect(layout).toContain('aria-label="Primary navigation"');
    expect(layout).toContain("{ href: '/', label: 'Home'");
    expect(layout).toContain("{ href: '/for-investors/', label: 'For investors'");
    expect(layout).toContain("{ href: '/for-deals/', label: 'For deals'");
    expect(layout).toContain("{ href: '/team/', label: 'Team'");
    expect(layout).toContain("{ href: '/contact/', label: 'Contact'");
    expect(layout).toContain("aria-current={isActive(item.href) ? 'page' : undefined}");
    expect(layout).not.toMatch(/client:load|client:visible|addEventListener|fetch\(/i);
    expect(layout).not.toMatch(/<script(?![^>]*type="application\/ld\+json")/i);
  });

  it('uses a structured footer with legal/contact links and compliance-safe disclosure', () => {
    expect(layout).toContain('aria-label="Entity disclosure"');
    expect(layout).toContain('Harmonycove Limited trading as Lir Capital Partners');
    expect(layout).toContain('Company No. 801328');
    expect(layout).toContain('aria-label="Footer navigation"');
    expect(layout).toContain('href="/legal/"');
  });

  it('has desktop, mobile, focus, and reduced-motion shell CSS', () => {
    expect(css).toContain('.site-header');
    expect(css).toContain('grid-template-columns: repeat(5, minmax(0, 1fr))');
    expect(css).toContain(".nav-list a[aria-current='page']");
    expect(css).toContain('.skip-link:focus-visible');
    expect(css).toContain('@media (max-width: 980px)');
    expect(css).toContain('@media (max-width: 720px)');
    expect(css).toContain('grid-template-columns: 1fr');
    expect(css).toContain('@media (prefers-reduced-motion: reduce)');
  });
});
