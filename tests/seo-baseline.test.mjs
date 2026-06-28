import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { absoluteUrl, organizationJsonLd, routeSeo } from '../src/data/seo.js';

const baseLayout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
const sitemapRoute = readFileSync(new URL('../src/pages/sitemap.xml.js', import.meta.url), 'utf8');
const robotsRoute = readFileSync(new URL('../src/pages/robots.txt.js', import.meta.url), 'utf8');
const analyticsDoc = readFileSync(new URL('../docs/seo/analytics.md', import.meta.url), 'utf8');
const redirectMap = readFileSync(new URL('../docs/seo/redirect-map.md', import.meta.url), 'utf8');
const allSource = [
  baseLayout,
  sitemapRoute,
  robotsRoute,
  analyticsDoc,
  redirectMap,
  readFileSync(new URL('../src/data/seo.js', import.meta.url), 'utf8'),
].join('\n');

const forbiddenClaims = /authori[sz]ed|regulated by|global offices|active deals|named clients|counterparties|premier boutique|cutting-edge financial strategies/i;

describe('SEO, analytics and structured-data baseline', () => {
  it('centralises safe metadata for each implemented route', () => {
    expect(routeSeo.map((route) => route.path)).toEqual([
      '/',
      '/for-investors/',
      '/for-deals/',
      '/team/',
      '/contact/',
      '/legal/',
    ]);

    for (const route of routeSeo) {
      expect(route.title).toMatch(/Lir Capital/);
      expect(route.description.length).toBeGreaterThan(70);
      expect(route.description).not.toMatch(forbiddenClaims);
      expect(absoluteUrl(route.path)).toMatch(/^https:\/\/lircap\.com\//);
    }
  });

  it('outputs canonical, robots, Open Graph, Twitter and JSON-LD metadata in the base layout', () => {
    expect(baseLayout).toContain('<link rel="canonical" href={canonicalUrl} />');
    expect(baseLayout).toContain('<meta name="robots" content={robots} />');
    expect(baseLayout).toContain('property="og:title"');
    expect(baseLayout).toContain('name="twitter:card"');
    expect(baseLayout).toContain('type="application/ld+json"');
    expect(baseLayout).toContain("replace(/</g, '\\\\u003c')");
  });

  it('keeps structured data compliance-safe and registration-only', () => {
    const organization = organizationJsonLd();

    expect(organization).toMatchObject({
      '@type': 'Organization',
      legalName: 'Harmonycove Limited trading as Lir Capital Partners',
    });
    expect(JSON.stringify(organization)).toContain('Company No. 801328');
    expect(JSON.stringify(organization)).not.toMatch(forbiddenClaims);
    expect(allSource).not.toMatch(/@type['"]?:\s*['"]Person/i);
  });

  it('generates sitemap and robots routes from metadata without legacy WordPress recreation', () => {
    expect(sitemapRoute).toContain('routeSeo');
    expect(sitemapRoute).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(robotsRoute).toContain('Sitemap: ${absoluteUrl(\'/sitemap.xml\')}');
    expect(robotsRoute).toContain('Disallow: /wp-admin/');
    expect(robotsRoute).toContain('Disallow: /wp-json/');
    expect(robotsRoute).toContain('Disallow: /xmlrpc.php');
  });

  it('documents analytics deferral and does not add tracking scripts or secrets', () => {
    expect(analyticsDoc).toMatch(/no analytics script is shipped/i);
    expect(analyticsDoc).toContain('CL-017');
    expect(allSource).not.toMatch(/plausible\.io\/js|googletagmanager|google-analytics|gtag\(|fbq\(|analytics\.js/i);
    expect(allSource).not.toMatch(/api[_-]?key|secret|token|password/i);
  });

  it('records existing-site redirect consideration without configuring edge redirects', () => {
    expect(redirectMap).toContain('#13 SEO baseline consideration');
    expect(redirectMap).toContain('does **not** configure Caddy redirects');
    expect(redirectMap).toContain('/privacy/');
    expect(redirectMap).toContain('/terms/');
  });
});
