/** @typedef {'CL-007' | 'CL-010' | 'CL-015'} ClaimId */
/** @typedef {'safe-web-draft' | 'needs-partner-review' | 'needs-compliance-review'} SignOffStatus */

/**
 * @typedef {object} TeamMember
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {string} portraitAssetId
 * @property {string} locationLabel
 * @property {string[]} focusAreas
 * @property {string[]} webBio
 * @property {ClaimId[]} claimIds
 * @property {SignOffStatus} complianceStatus
 * @property {string[]} thirdPartyReferenceFlags
 * @property {string[]} signOffNotes
 */

/** @type {TeamMember[]} */
export const teamMembers = [
  {
    id: 'sebastien-conway',
    name: 'Sébastien Conway',
    role: 'Partner and Director',
    portraitAssetId: 'IMG-POR-01',
    locationLabel: 'Dublin / international sovereign infrastructure focus',
    focusAreas: ['Sovereign digital infrastructure', 'Government-facing financial technology', 'Real estate and investment foundations'],
    webBio: [
      'Sébastien works across sovereign digital infrastructure and government-facing financial technology, with a focus on opportunities where public-sector systems, institutional capital and specialist operating knowledge meet.',
      'His background spans company-building, investment and real estate, giving him a practical lens on transactions that require both relationship depth and execution discipline.',
    ],
    claimIds: ['CL-010', 'CL-015'],
    complianceStatus: 'needs-partner-review',
    thirdPartyReferenceFlags: ['Ascoria Technologies current/former CEO wording', 'Ingen Capital and JLL prior-role references', 'Technological University Dublin degree reference'],
    signOffNotes: [
      'Source bio contains unresolved “Prior to / along with” and “was / is” phrasing for Ascoria Technologies; do not publish current title until confirmed. Location label also requires partner confirmation before production copy freeze.',
      'Sovereign-client and senior-decision-maker relationship claims are softened in public copy pending substantiation.',
    ],
  },
  {
    id: 'pierre-sallenave',
    name: 'Pierre Sallenave',
    role: 'Partner and Director',
    portraitAssetId: 'IMG-POR-02',
    locationLabel: 'France / maritime and infrastructure focus',
    focusAreas: ['Maritime and shipping', 'Infrastructure finance', 'Energy transition'],
    webBio: [
      'Pierre focuses on maritime, infrastructure and energy-transition opportunities, bringing long-cycle sector experience to situations where technical credibility and capital judgement both matter.',
      'His work combines strategic advisory, project-finance experience and academic involvement in infrastructure and engineering communities.',
    ],
    claimIds: ['CL-010', 'CL-015'],
    complianceStatus: 'needs-partner-review',
    thirdPartyReferenceFlags: ['Magellan founder/current leader wording', 'France Marémoteur role', 'École Nationale des Ponts et Chaussées title', 'French Prime Minister’s office advisory reference'],
    signOffNotes: [
      'Source bio contains unresolved “founded and led / leads” wording for Magellan; current role must be confirmed before publication. Location label also requires partner confirmation before production copy freeze.',
      'Named institutional and education references require partner/compliance sign-off before being used as proof.',
    ],
  },
  {
    id: 'jules-herd',
    name: 'Jules Herd',
    role: 'Partner',
    portraitAssetId: 'IMG-POR-03',
    locationLabel: 'UK / communications, media and technology focus',
    focusAreas: ['Entertainment, media and technology', 'Narrative advisory', 'Brand and communications strategy'],
    webBio: [
      'Jules advises where communication, positioning and stakeholder trust are central to value. Her focus spans entertainment, media, technology and businesses navigating high-scrutiny growth moments.',
      'She brings senior communications and operating experience across global technology, advisory and entrepreneurial environments.',
    ],
    claimIds: ['CL-007', 'CL-010', 'CL-015'],
    complianceStatus: 'needs-compliance-review',
    thirdPartyReferenceFlags: ['Microsoft, HTC and Deezer prior-role references', 'Five in a Boat founding reference', 'Ascoria Technologies CRO timing', 'EV Cables co-owner and superlative wording', 'Blind Swan Drinks awards reference', 'PRCA and One in Four roles'],
    signOffNotes: [
      'Use she/her for Jules Herd throughout. Location label requires partner confirmation before production copy freeze.',
      'Do not publish EV Cables “UK’s leading manufacturer” or awards language unless substantiated; public bio omits both pending CL-007 review.',
      'Source bio contains typo/awkward drafting (“found ed”) and a missing sentence break around Ascoria; edited web copy avoids those unresolved details.',
    ],
  },
  {
    id: 'jowaher-al-suwaidi',
    name: 'Jowaher Al Suwaidi',
    role: 'Partner',
    portraitAssetId: 'IMG-POR-04',
    locationLabel: 'Abu Dhabi / Gulf focus',
    focusAreas: ['Gulf institutional relationships', 'Origination', 'Alternative investment opportunities'],
    webBio: [
      'Jowaher focuses on origination and relationships across the Gulf, with experience spanning government-linked institutions, private-sector advisory and entrepreneurial capital.',
      'Her perspective supports conversations where regional knowledge, institutional context and long-term relationship-building are essential.',
    ],
    claimIds: ['CL-010', 'CL-015'],
    complianceStatus: 'needs-partner-review',
    thirdPartyReferenceFlags: ['JSP Capital current/former Founder and Managing Director wording', 'UAE Ministry, Embassy, diplomatic academy and TAQA references', 'Bedaya role', 'Harvard Business School Online certificate'],
    signOffNotes: [
      'Source bio contains unresolved “is also / was formerly” wording for JSP Capital; current title must be confirmed before publication. Location label also requires partner confirmation before production copy freeze.',
      'Relationship-network claims are softened and should not imply formal offices, mandates or guaranteed access.',
    ],
  },
  {
    id: 'tim-cole',
    name: 'Tim Cole',
    role: 'Company Secretary',
    portraitAssetId: 'IMG-POR-05',
    locationLabel: 'Dublin / governance and administration focus',
    focusAreas: ['Governance', 'Corporate administration', 'Technology operations'],
    webBio: [
      'Tim supports Lir Capital’s governance, corporate administration and operating discipline as Company Secretary.',
      'His background combines entrepreneurship, investment activity and technology operations, bringing practical oversight to the firm’s internal structures and statutory responsibilities.',
    ],
    claimIds: ['CL-015'],
    complianceStatus: 'needs-partner-review',
    thirdPartyReferenceFlags: ['Ingen Capital association', 'Wing It restaurant group reference', 'Ascoria Technologies current/former CIO wording', 'Sandford Park School education reference'],
    signOffNotes: [
      'Source bio contains unresolved “served / serves” and “was / is” phrasing for Ascoria Technologies; public copy omits current external role pending confirmation. Location label also requires partner confirmation before production copy freeze.',
      'Avoid “highest standards” institutional-integrity language unless approved; public copy uses restrained governance wording.',
    ],
  },
  {
    id: 'steven-shenfeld',
    name: 'Steven Shenfeld',
    role: 'Senior Adviser',
    portraitAssetId: 'IMG-POR-06',
    locationLabel: 'North America / credit markets focus',
    focusAreas: ['Credit markets', 'Leveraged finance', 'Capital structure advisory'],
    webBio: [
      'Steven advises Lir Capital on credit-oriented situations, capital structure questions and institutional-investor context in North America.',
      'He brings deep experience across leveraged finance, alternative credit and non-investment-grade company financing.',
    ],
    claimIds: ['CL-015'],
    complianceStatus: 'needs-compliance-review',
    thirdPartyReferenceFlags: ['MidOcean Credit Partners current Chairman role', 'MidOcean Partners description', 'MD Sass Macquarie, Avenue Capital, BancBoston, Bankers Trust, DLJ and Salomon Brothers prior roles', 'Velocity Capital Management Senior Adviser role', 'Tufts and University of Michigan education references'],
    signOffNotes: [
      'Source bio includes extensive named employer, fund-size, committee and role references; public copy omits named third parties pending CL-015 sign-off. Location label also requires adviser confirmation before production copy freeze.',
      '“One of the most extensive networks” wording is not used in public copy because it is a superlative-style relationship claim.',
    ],
  },
];

/** @type {Record<ClaimId, string>} */
export const teamClaimTraceability = {
  'CL-007': 'Controlled manufacturing superlatives and third-party company claims are not used in public copy; retained only as non-public sign-off notes.',
  'CL-010': 'Public copy uses partner-led language only; no absolute mandate-handling or delegation claim is made.',
  'CL-015': 'Current/former roles, employer names, institutional references and education details are flagged for partner/compliance sign-off.',
};
