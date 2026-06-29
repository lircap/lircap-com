export const siteUrl = 'https://lircap.com';
export const siteName = 'Lir Capital';

export const routeSeo = [
  {
    path: '/',
    title: 'Lir Capital — Partner-led capital introductions',
    description:
      'Lir Capital is a discreet, partner-led advisory and capital platform for senior conversations where capital and complex opportunities meet.',
    changefreq: 'monthly',
    priority: 1.0,
  },
  {
    path: '/for-investors/',
    title: 'For Investors — Lir Capital',
    description:
      'A discreet route for capital relationships to explore fit, context and timing before any private conversation advances.',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/for-deals/',
    title: 'For Deals — Lir Capital',
    description:
      'A partner-led first conversation for owners, companies and introducers considering what kind of capital relationship a situation requires.',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/team/',
    title: 'Team — Lir Capital',
    description:
      'Meet the Lir Capital partners and advisers through concise web biographies and senior focus areas.',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/contact/',
    title: 'Contact — Lir Capital',
    description:
      'Contact Lir Capital by direct email for a discreet first conversation with clear context and appropriate handling of sensitive information.',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/legal/',
    title: 'Legal — Lir Capital',
    description:
      'Legal and disclosure information for Lir Capital, limited to confirmed company registration details and conservative website-use notes.',
    changefreq: 'monthly',
    priority: 0.5,
  },
];

export const seoByPath = Object.fromEntries(routeSeo.map((item) => [item.path, item]));

export function getSeo(path) {
  const normalizedPath = normalizePath(path);
  const seo = seoByPath[normalizedPath];

  if (!seo) {
    throw new Error(`Missing SEO metadata for route: ${normalizedPath}`);
  }

  return {
    ...seo,
    canonicalPath: seo.path,
  };
}

export function normalizePath(path) {
  if (!path || path === '/') return '/';
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

export function absoluteUrl(path = '/') {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  const canonicalPath = /\.[a-z0-9]+$/i.test(withLeadingSlash) ? withLeadingSlash : normalizePath(withLeadingSlash);
  return new URL(canonicalPath, siteUrl).toString();
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lir Capital Partners',
    alternateName: 'Lir Capital',
    url: siteUrl,
    legalName: 'Harmonycove Limited trading as Lir Capital Partners',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Ireland company number',
      value: '801328',
    },
    description:
      'Harmonycove Limited trading as Lir Capital Partners is registered in Ireland. Company No. 801328.',
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
  };
}
