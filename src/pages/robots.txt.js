import { absoluteUrl } from '../data/seo.js';

export function GET() {
  return new Response(`User-agent: *
Allow: /
Disallow: /wp-admin/
Disallow: /wp-json/
Disallow: /xmlrpc.php
Disallow: /feed/
Disallow: /comments/feed/

Sitemap: ${absoluteUrl('/sitemap.xml')}
`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
