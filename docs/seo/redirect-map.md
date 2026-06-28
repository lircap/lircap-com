# Redirect and SEO preservation map

**Control issue:** #28

This is the initial redirect map from the live-site audit. It must be updated after the Astro routes exist and before production launch.

## Rules

- Preserve `/` as the homepage.
- Explicitly map every sitemap-discovered public path to a new route, deliberate redirect, or deliberate `410`.
- Do not recreate WordPress admin/runtime/API/archive surfaces.
- Test redirects before production cutover.

## Initial map

| Existing URL/path | New route | Status | Notes |
|---|---|---|---|
| `/` | `/` | keep/rewrite | Primary homepage; rewrite under #6/#22. |
| `/author/webmail-cole-tcgmail-com/` | `n/a` | 410 or noindex redirect | WordPress archive surface; do not recreate. |
| `/category/uncategorized/` | `n/a` | 410 or noindex redirect | WordPress archive surface; do not recreate. |
| `/contact/` | `/contact/` | keep or 301 | Align with #12 contact route. |
| `/hello-world/` | `n/a or /` | 410 or redirect to / | Default WordPress post; no strategic content value. |
| `/privacy/` | `/legal/ or dedicated legal route` | rewrite/replace | Legacy legal pages need compliance/privacy review, not blind carry-forward. |
| `/terms/` | `/legal/ or dedicated legal route` | rewrite/replace | Legacy legal pages need compliance/privacy review, not blind carry-forward. |
| `/wp-admin/*` | n/a | do not serve / 404 or 410 | No WordPress admin surface in static site. |
| `/xmlrpc.php` | n/a | do not serve / 404 or 410 | No XML-RPC surface in static site. |
| `/wp-json/*` | n/a | do not serve / 404 or 410 | No WordPress REST surface in static site. |
| `/feed/` and `/comments/feed/` | n/a | do not serve / 404 or 410 | No WordPress feeds unless a future content strategy requires one. |
| WordPress asset paths `/wp-content/*` | n/a or static replacement | avoid | Do not depend on legacy Divi/WordPress assets. |

## Asset decisions

| Existing asset | Decision | Notes |
|---|---|---|
| `/photo-1637979909766-ccf55518a928` | remove / do not carry forward | Stock/licensed feel conflicts with photography brief. |
| `/wp-content/uploads/2025/12/LIR-Capital-Partners-logo-transparent.png` | reference only | Recreate as approved brand asset if needed. |
| `/wp-content/uploads/2025/12/LIR-Capital-partners-logo-white.png` | reference only | Recreate as approved brand asset if needed. |
| `/wp-content/uploads/2025/12/samuel_beckett_bridge_night-scaled.png` | rights/art-direction review before reuse | Do not ship without source/rights confirmation. |
| `/wp-content/uploads/2026/02/Brendan_the_Navigator-2.jpg` | rights/art-direction review before reuse | Do not ship without source/rights confirmation. |

## #13 SEO baseline consideration

This slice generates canonical URLs, `/sitemap.xml`, and `/robots.txt` for the new static Astro routes only. It does **not** configure Caddy redirects or recreate legacy WordPress URLs.

Redirect decisions remain launch/deployment work: `/` and `/contact/` are preserved as canonical routes; `/privacy/` and `/terms/` should redirect or rewrite to approved legal/privacy surfaces once counsel-cleared; WordPress admin/runtime/API/feed/archive paths should remain unserved or deliberately return `404/410` at the edge.

## Launch checks

Before production launch:

```bash
curl -I https://lircap.com/
curl -I https://lircap.com/contact/
curl -I https://lircap.com/privacy/
curl -I https://lircap.com/terms/
curl -I https://lircap.com/hello-world/
curl -I https://lircap.com/category/uncategorized/
curl -I https://lircap.com/author/webmail-cole-tcgmail-com/
curl -I https://lircap.com/xmlrpc.php
curl -I https://lircap.com/wp-admin/
curl -I https://lircap.com/wp-json/
```

Expected:

- `/` returns the new site with correct metadata;
- `/contact/` resolves or redirects deliberately;
- `/privacy/` and `/terms/` resolve or redirect deliberately to legal/privacy surfaces;
- WordPress runtime/admin/API/archive paths do not expose legacy services;
- any deliberate redirects return expected `301/308`;
- deliberate removals return expected `404/410`;
- no broken links from the new navigation.
