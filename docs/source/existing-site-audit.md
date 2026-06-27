# Existing site audit — lircap.com

**Control issue:** #28  
**Audit date:** 2026-06-27  
**Source:** live `https://lircap.com/`, `robots.txt`, `sitemap.xml`, and WordPress sitemap probes fetched directly during execution.

## Summary

The current public site is a WordPress/Divi shallow-site implementation for **LIR Capital Partners**.

Observed facts:

- HTTPS homepage returns `200`.
- `http://lircap.com/` finalises to `https://lircap.com/`.
- Homepage HTML title observed: `lircap.com – LIR Capital Partners`.
- `robots.txt` declares the WordPress sitemap and WordPress admin rules.
- `sitemap.xml`/`wp-sitemap.xml` expose additional public WordPress URLs beyond the homepage/contact page.
- WordPress/Divi, REST, XML-RPC, author/category archive, and upload surfaces are visible; the static replacement should not recreate admin/runtime surfaces.

## Robots and sitemap findings

- `robots.txt`: `200` final `https://lircap.com/robots.txt`, content-type `None`.

```text
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://lircap.com/wp-sitemap.xml
```

- `sitemap.xml`: `200` final `https://lircap.com/wp-sitemap.xml`, content-type `None`.
- `wp-sitemap.xml`: `200` final `https://lircap.com/wp-sitemap.xml`, child sitemaps discovered: 4.

Sitemap-index URLs:

- `https://lircap.com/wp-sitemap-posts-post-1.xml`
- `https://lircap.com/wp-sitemap-posts-page-1.xml`
- `https://lircap.com/wp-sitemap-taxonomies-category-1.xml`
- `https://lircap.com/wp-sitemap-users-1.xml`

## Crawled / sitemap-discovered public URLs

- `https://lircap.com/`
- `https://lircap.com/author/webmail-cole-tcgmail-com/`
- `https://lircap.com/category/uncategorized/`
- `https://lircap.com/contact/`
- `https://lircap.com/hello-world/`
- `https://lircap.com/privacy/`
- `https://lircap.com/terms/`

## Page metadata and copy observations

### Page 1: `https://lircap.com/`

- Status: `200`
- Final URL: `https://lircap.com/`
- Title: `lircap.com – LIR Capital Partners`
- `robots`: max-image-preview:large

Visible text excerpt, for migration triage only:

> Home Contact PREMIER BOUTIQUE INVESTMENT FIRM Clarity in Complexity LIR Capital Partners is a premier Irish investment firm committed to maximizing value for our clients. We bring structure, experience, and expertise to the most complex opportunities. Navigating the Uncharted We support individuals and select projects with investment research, opportunity assessment, and portfolio guidance – delivering with discretion, clear documentation, and a long-term mindset. our expertise Core Focus We help deploy resources across a range of strategies, always with a focus on capital preservation and value creation. Sovereign Advisory We provide value-add advisory across emerging and established markets Private Credit Bespoke Financing solutions for borrowers underserved by traditional banking channels Real Assets Strategic investments in real estate and infrastructure with value-add potential “Help me to journey beyond the familiar and into the unknown.” St. Brendan the Navigator Irish explorer LIR Capital Partners What We Do Join Our Team Investment Research & Insights Thematic research and clear viewpoints to support decision-making. Capital & Structuring Support Options analysis and coordination with specialist advisers where needed. Opportunity Assessment Screening and diligence support, including memo-style write-ups. Network & Introductions Where appropriate, introductions to established service providers and counterparties. Start a Conversation Contact Us At LIR Capital Partners, we use cutting-edge financial strategies to unlock value in complex situations. Our commitment to excellence and integrity drives every investment decision. Home Contact Privacy Terms of Service Contact Information Harmonycove Limited T/A Lir Capital partners, registered address: College House, 71-73 Rock Road, Co. Dublin, Ireland. Company registration number: 801328 Manage Consent To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functi

### Page 2: `https://lircap.com/author/webmail-cole-tcgmail-com/`

- Status: `200`
- Final URL: `https://lircap.com/author/webmail-cole-tcgmail-com/`
- Title: `webmail.cole.tc@gmail.com – lircap.com`
- `robots`: max-image-preview:large

Visible text excerpt, for migration triage only:

> Home Contact John O’Sullivan, the visionary behind LIR Capital Partners, brings over 30 years of experience in the financial sector. With a deep understanding of both the Irish and global markets, John has consistently demonstrated an ability to identify and capitalize on complex investment opportunities. His leadership is characterized by a commitment to integrity, strategic foresight, and a passion for transformative growth. Under his guidance, LIR Capital Partners has become a trusted name in the industry, known for its innovative solutions and steadfast dedication to client success. Post By Hello world! Dec 2, 2025 Uncategorized Welcome to WordPress. This is your first post. Edit or delete it, then start writing! Read More At LIR Capital Partners, we use cutting-edge financial strategies to unlock value in complex situations. Our commitment to excellence and integrity drives every investment decision. Home Contact Privacy Terms of Service Contact Information Harmonycove Limited T/A Lir Capital partners, registered address: College House, 71-73 Rock Road, Co. Dublin, Ireland. Company registration number: 801328 Manage Consent To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functions. Functional Functional Always active The technical storage or access is strictly necessary for the legitimate purpose of enabling the use of a specific service explicitly requested by the subscriber or user, or for the sole purpose of carrying out the transmission of a communication over an electronic communications network. Preferences Preferences The technical storage or access is necessary for the legitimate purpose of storing preferences that are not requested by the subscriber or user. Statistics Statistics The technical storage or access that is used exclusively for statistical purposes. The technical storage or access that is used exclusively for anonymous statistical purposes. Without a subpoena, voluntary compliance o

### Page 3: `https://lircap.com/category/uncategorized/`

- Status: `200`
- Final URL: `https://lircap.com/category/uncategorized/`
- Title: `Uncategorized – lircap.com`
- `robots`: max-image-preview:large

Visible text excerpt, for migration triage only:

> Home Contact Uncategorized Hello world! Dec 2, 2025 Uncategorized Welcome to WordPress. This is your first post. Edit or delete it, then start writing! Read More Stay Informed Success! Email Subscribe At LIR Capital Partners, we use cutting-edge financial strategies to unlock value in complex situations. Our commitment to excellence and integrity drives every investment decision. Home Contact Privacy Terms of Service Contact Information Harmonycove Limited T/A Lir Capital partners, registered address: College House, 71-73 Rock Road, Co. Dublin, Ireland. Company registration number: 801328 Manage Consent To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functions. Functional Functional Always active The technical storage or access is strictly necessary for the legitimate purpose of enabling the use of a specific service explicitly requested by the subscriber or user, or for the sole purpose of carrying out the transmission of a communication over an electronic communications network. Preferences Preferences The technical storage or access is necessary for the legitimate purpose of storing preferences that are not requested by the subscriber or user. Statistics Statistics The technical storage or access that is used exclusively for statistical purposes. The technical storage or access that is used exclusively for anonymous statistical purposes. Without a subpoena, voluntary compliance on the part of your Internet Service Provider, or additional records from a third party, information stored or retrieved for this purpose alone cannot usually be used to identify you. Marketing Marketing The technical storage or access is required to create user profiles to send advertising, or to track the user on a website or across several websites for similar marketing purposes. Manage options Manage services Manage {vendor_count} vendors Read more about these purposes Accept Deny View preferences Save preferences View preferen

### Page 4: `https://lircap.com/contact/`

- Status: `200`
- Final URL: `https://lircap.com/contact/`
- Title: `Contact – lircap.com`
- `robots`: max-image-preview:large

Visible text excerpt, for migration triage only:

> Home Contact Connect with LIR Capital Partners Explore opportunities and submit proposals with ease. Get in Touch Reach Out to Us We’re here to assist with your inquiries and proposals. Email info@lircap.com Address College House, 71 – 73 Rock Road, Blackrock, Co. Dublin Confidential Proposals Submit Your Proposal To submit a confidential proposal, please reach out directly to our team. We ensure the utmost discretion and security in handling your submissions. Our team is committed to reviewing each proposal with the attention it deserves, aligning with our mission to unlock value in complex situations. Partner with Us We invite you to explore investment opportunities with LIR Capital Partners. Whether you’re seeking capital solutions or wish to discuss potential partnerships, our team is ready to engage. Connect with us today to start a conversation about how we can collaborate to achieve your financial goals. Get in Touch At LIR Capital Partners, we use cutting-edge financial strategies to unlock value in complex situations. Our commitment to excellence and integrity drives every investment decision. Home Contact Privacy Terms of Service Contact Information Harmonycove Limited T/A Lir Capital partners, registered address: College House, 71-73 Rock Road, Co. Dublin, Ireland. Company registration number: 801328 Manage Consent To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functions. Functional Functional Always active The technical storage or access is strictly necessary for the legitimate purpose of enabling the use of a specific service explicitly requested by the subscriber or user, or for the sole purpose of carrying out the transmission of a communication over an electronic communications network. Preferences Preferences The technical storage or access is necessary for the legitimate purpose of storing preferences that are not requested by the subscriber or user. Statistics Statistics The technical sto

### Page 5: `https://lircap.com/hello-world/`

- Status: `200`
- Final URL: `https://lircap.com/hello-world/`
- Title: `Hello world! – lircap.com`
- `robots`: max-image-preview:large

Visible text excerpt, for migration triage only:

> Home Contact Hello world! by webmail.cole.tc@gmail.com Dec 2, 2025 Uncategorized 1 comment Welcome to WordPress. This is your first post. Edit or delete it, then start writing! Written By undefined More Posts by Further Insights on Strategic Investments No Results Found The page you requested could not be found. Try refining your search, or use the navigation above to locate the post. 1 Comment A WordPress Commenter on December 2, 2025 at 4:25 pm Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard. Commenter avatars come from Gravatar Reply Submit a Comment Cancel reply Your email address will not be published. Required fields are marked Comment Name Email Website Save my name, email, and website in this browser for the next time I comment. Submit Comment At LIR Capital Partners, we use cutting-edge financial strategies to unlock value in complex situations. Our commitment to excellence and integrity drives every investment decision. Home Contact Privacy Terms of Service Contact Information Harmonycove Limited T/A Lir Capital partners, registered address: College House, 71-73 Rock Road, Co. Dublin, Ireland. Company registration number: 801328 Manage Consent To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functions. Functional Functional Always active The technical storage or access is strictly necessary for the legitimate purpose of enabling the use of a specific service explicitly requested by the subscriber or user, or for the sole purpose of carrying out the transmission of a communication over an electronic communications network. Preferences Preferences The technical storage or access is necessary for the legitimate purpose of storing preferences that are not requested by the subscriber or user. Statistics Statistics The technical storage or access that is used exclusively for statistical purposes. The technical storage

### Page 6: `https://lircap.com/privacy/`

- Status: `200`
- Final URL: `https://lircap.com/privacy/`
- Title: `Privacy Policy – lircap.com`
- `robots`: max-image-preview:large

Visible text excerpt, for migration triage only:

> Home Contact Privacy Policy lircap.com Last updated: 10 April 2026 This Privacy Policy explains how lircap.com (“we”, “us”, or “our”) collects, uses, and protects information when you visit our website. We are committed to safeguarding your privacy and complying with applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the Irish Data Protection Act 2018. 1. Who We Are lircap.com is the data controller responsible for your personal data. If you have any questions about this policy or how we handle your information, you can contact us at: info@lircap.com. 2. Information We Collect We may collect and process the following types of information: Information you provide directly: name, email address, and any message content you submit through contact forms or correspondence. Technical information collected automatically: IP address, browser type and version, device type, operating system, referring URL, pages visited, and timestamps. Cookies and similar technologies: small data files stored on your device to enable site functionality and analytics (see Section 6 below). 3. How We Use Your Information We use the information we collect for the following purposes: To operate, maintain, and improve the website and its content. To respond to enquiries, requests, or feedback you send us. To analyse site usage and traffic patterns so we can improve user experience. To detect, prevent, and address technical issues, fraud, or security incidents. To comply with legal obligations. 4. Legal Basis for Processing (GDPR) Under the GDPR, we rely on the following legal bases to process your personal data: Consent: where you have given us explicit permission, for example by accepting cookies or submitting a form. Legitimate interests: to operate and improve our website and ensure its security, provided your rights do not override these interests. Legal obligation: where processing is required to comply with applicable laws. 5. Sharing Your Information We do not sell, rent, or trade your personal information. We may share data only with: Service providers who help us operate the website (such as hosting, analytics, and email providers), under a

### Page 7: `https://lircap.com/terms/`

- Status: `200`
- Final URL: `https://lircap.com/terms/`
- Title: `Terms – lircap.com`
- `robots`: max-image-preview:large

Visible text excerpt, for migration triage only:

> Home Contact Terms of Service lircap.com Last updated: 10 April 2026 Welcome to lircap.com. These Terms of Service (“Terms”) govern your access to and use of the lircap.com website (the “Site”) and any related services we provide. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site. 1. About Us The Site is operated by lircap.com (“we”, “us”, or “our”). For questions about these Terms, you can reach us at: info@lircap.com. 2. Eligibility You must be at least 16 years old to use the Site. By using the Site, you represent and warrant that you have the legal capacity to enter into a binding agreement with us and that your use complies with all applicable laws. 3. Use of the Site You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the Site. Specifically, you agree not to: Use the Site in any way that violates any applicable law or regulation. Attempt to gain unauthorised access to any part of the Site, its servers, or any connected systems. Introduce viruses, malware, or any other harmful code. Use automated systems (bots, scrapers, crawlers) to access the Site without our prior written permission. Interfere with or disrupt the operation of the Site or the servers and networks used to make it available. Use the Site to harass, abuse, or harm another person, or to transmit unlawful, defamatory, or offensive content. 4. Intellectual Property All content on the Site — including text, graphics, logos, images, and software — is the property of lircap.com or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may view and download content for personal, non-commercial use only. You may not reproduce, distribute, modify, or create derivative works without our prior written consent. 5. User Content If you submit any content to the Site (for example, through a contact form or comment), you grant us a non-exclusive, worldwide, royalty-free licence to use, store, and display that content for the purpose of operating the Site. You represent that you own or have t

## Public asset / endpoint observations

### Imagery and uploads

These are migration inputs only, not approved production assets. Reuse requires rights/source review and alignment with `docs/design/asset-inventory.md`.

- `https://images.unsplash.com/photo-1637979909766-ccf55518a928?ixid=M3w1ODkyNzF8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHwyfHx8MTc2NjA1OTcwOXww&ixlib=rb-4.1.0&fm=webp&fit=crop&crop=entropy&w=800&h=800&q=20&dpr=2` — Do not carry forward as production image; stock/licensed feel conflicts with art direction.
- `https://lircap.com/wp-content/uploads/2025/12/LIR-Capital-Partners-logo-transparent.png` — Logo reference only; recreate/normalise brand asset if approved.
- `https://lircap.com/wp-content/uploads/2025/12/LIR-Capital-partners-logo-white.png` — Logo reference only; recreate/normalise brand asset if approved.
- `https://lircap.com/wp-content/uploads/2025/12/samuel_beckett_bridge_night-scaled.png` — Potential atmosphere reference; rights/source and art-direction review required.
- `https://lircap.com/wp-content/uploads/2026/02/Brendan_the_Navigator-2.jpg` — Thematic reference only; likely remove unless rights/fit are approved.

### Runtime/feed/API endpoints

- `https://lircap.com/comments/feed/` — do not recreate as public runtime surface unless explicitly required; static replacement should return deliberate 404/410/redirect as appropriate.
- `https://lircap.com/feed/` — do not recreate as public runtime surface unless explicitly required; static replacement should return deliberate 404/410/redirect as appropriate.
- `https://lircap.com/wp-admin/` — do not recreate as public runtime surface unless explicitly required; static replacement should return deliberate 404/410/redirect as appropriate.
- `https://lircap.com/wp-json/` — do not recreate as public runtime surface unless explicitly required; static replacement should return deliberate 404/410/redirect as appropriate.
- `https://lircap.com/wp-json/oembed/1.0/embed` — do not recreate as public runtime surface unless explicitly required; static replacement should return deliberate 404/410/redirect as appropriate.
- `https://lircap.com/wp-json/wp/v2/pages` — do not recreate as public runtime surface unless explicitly required; static replacement should return deliberate 404/410/redirect as appropriate.
- `https://lircap.com/xmlrpc.php` — do not recreate as public runtime surface unless explicitly required; static replacement should return deliberate 404/410/redirect as appropriate.

## Keep / rewrite / remove posture

| Existing element | Decision | Reason |
|---|---|---|
| Public root URL `/` | Keep route, rewrite content | preserve primary URL equity; new homepage governed by #6/#22/#25. |
| Existing `/contact/` route | Keep or redirect deliberately | discovered as a public URL; align with #12 contact route. |
| `/privacy/` and `/terms/` | Rewrite/replace | legacy legal pages need compliance/privacy review, not blind carry-forward. |
| `/hello-world/` | 410 or redirect to `/` | default WordPress post; no content value. |
| `/category/uncategorized/` | 410 or noindex redirect | WordPress archive; do not recreate. |
| `/author/webmail-cole-tcgmail-com/` | 410 or noindex redirect | WordPress author surface; do not recreate and avoid exposing emails/usernames. |
| Legacy WordPress/Divi implementation | Remove from new stack | new PRD requires static Astro/Caddy minimal attack surface. |
| Existing page copy | Rewrite only with provenance/compliance review | existing copy may be useful context, but must pass claims register and canonical brief. |
| Existing visual style/fonts | Do not carry forward automatically | new design language is dark editorial/crossing-led. |
| Existing assets | Audit before reuse | no stock/AI/uncleared imagery; rights and releases must be clear. |
| WordPress runtime/admin/XML-RPC/REST/feed paths | Do not recreate | avoid exposed admin/runtime/API surfaces. |

## Compliance triage

Existing copy must not be treated as approved public copy for the new site unless:

1. it maps to `docs/brief/canonical-brief.md`;
2. any claims map to `docs/compliance/claims-register.md`;
3. regulated/authorised language is cleared;
4. named clients/counterparties/case studies have consent and substantiation;
5. privacy/form implications are reviewed.

Specific live-copy phrases requiring rewrite/review include:

- “PREMIER BOUTIQUE INVESTMENT FIRM”;
- “premier Irish investment firm committed to maximizing value”;
- “cutting-edge financial strategies to unlock value”;
- sector/service claims around sovereign advisory, private credit, real assets, research, structuring, opportunity assessment, and introductions.

## Implementation references

- #3 should use this audit when finalising content model and page inventory.
- #12 should decide whether `/contact/` is kept as canonical or redirected.
- #13 should use the redirect/SEO notes before metadata/structured data work.
- #27 should verify redirects and absence of old WordPress surfaces before launch.
