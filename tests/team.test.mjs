import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { teamClaimTraceability, teamMembers } from '../src/content/team.js';
import { getSeo } from '../src/data/seo.js';

const teamPage = readFileSync(new URL('../src/pages/team.astro', import.meta.url), 'utf8');
const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const teamBrief = readFileSync(new URL('../content/pages/team.md', import.meta.url), 'utf8');
const teamSeo = getSeo('/team/');

const publicBioCopy = teamMembers
  .flatMap((member) => [member.name, member.role, member.locationLabel, ...member.focusAreas, ...member.webBio])
  .join('\n');

describe('team content model and route', () => {
  it('structures partner/adviser bios with compliance traceability', () => {
    expect(teamMembers).toHaveLength(6);

    for (const member of teamMembers) {
      expect(member.id).toMatch(/^[a-z0-9-]+$/);
      expect(member.name).toBeTruthy();
      expect(member.role).toBeTruthy();
      expect(member.portraitAssetId).toMatch(/^IMG-POR-0[1-6]$/);
      expect(member.webBio.length).toBeGreaterThanOrEqual(2);
      expect(member.focusAreas.length).toBeGreaterThanOrEqual(3);
      expect(member.claimIds.length).toBeGreaterThanOrEqual(1);
      expect(member.claimIds.every((claimId) => ['CL-007', 'CL-010', 'CL-015'].includes(claimId))).toBe(true);
      expect(member.signOffNotes.length).toBeGreaterThanOrEqual(1);
    }

    expect(teamClaimTraceability['CL-007']).toMatch(/manufacturing superlatives/i);
    expect(teamClaimTraceability['CL-010']).toMatch(/mandate-handling|delegation/i);
    expect(teamClaimTraceability['CL-015']).toMatch(/current\/former roles/i);
  });

  it('keeps unresolved source facts flagged rather than in public bio copy', () => {
    expect(publicBioCopy).not.toMatch(/\bwas \/ is\b|Prior to \/ along with|is also \/ was formerly|founded and led \/ leads|found ed|to confirm/i);
    expect(publicBioCopy).not.toMatch(/Microsoft|HTC|Deezer|MidOcean|Avenue Capital|TAQA|Carlyle|BancBoston|Bankers Trust|Salomon Brothers|EV Cables/i);
    expect(publicBioCopy).not.toMatch(/UK.?s leading manufacturer|one of the most extensive networks|highest standards/i);
    expect(Object.values(teamClaimTraceability).join('\n')).not.toMatch(/EV Cables/i);

    const notes = teamMembers.flatMap((member) => member.signOffNotes.concat(member.thirdPartyReferenceFlags)).join('\n');
    expect(notes).toMatch(/was \/ is|Prior to \/ along with|is also \/ was formerly|founded and led \/ leads/i);
    expect(notes).toMatch(/EV Cables|Microsoft|MidOcean|TAQA/i);
  });

  it('renders accessible static cards with tracked neutral placeholders', () => {
    expect(teamPage).toContain('aria-labelledby="page-title"');
    expect(teamPage).toContain('role="list"');
    expect(teamPage).toContain('role="listitem"');
    expect(teamPage).toContain("const seo = getSeo('/team/');");
    expect(teamSeo.description).toMatch(/partners and advisers/i);
    expect(teamPage).not.toMatch(/draft compliance status|tracked for review|subject to partner and compliance sign-off|rights and releases are complete/i);
    expect(teamPage).not.toContain('<details class="team-card__review">');
    expect(teamPage).toContain('aria-label={`No portrait currently published for ${member.name}`}');
    expect(teamPage).toContain('Portrait pending');
    expect(teamPage).not.toContain('IMAGE — PARTNER PORTRAIT');
    expect(teamPage).not.toContain('{member.portraitAssetId}');
    expect(teamPage).not.toContain('data-placeholder={`lircap-${member.portraitAssetId}`}');
    expect(teamPage).not.toMatch(/data-placeholder=["']lircap-/i);
    expect(teamPage).not.toMatch(/<img|src=https?:|client:load|client:visible|<script|<form|fetch\(/i);

    for (const assetId of ['IMG-POR-01', 'IMG-POR-02', 'IMG-POR-03', 'IMG-POR-04', 'IMG-POR-05', 'IMG-POR-06']) {
      expect(teamMembers.some((member) => member.portraitAssetId === assetId)).toBe(true);
    }
  });

  it('adds responsive card styles without JavaScript-dependent behaviour', () => {
    expect(css).toContain('.team-grid');
    expect(css).toContain('.team-card');
    expect(css).toContain('.portrait-placeholder');
    expect(css).toContain('grid-template-columns: repeat(2, minmax(0, 1fr))');
    expect(css).toContain('@media (max-width: 980px)');
    expect(css).toContain('@media (max-width: 720px)');
  });

  it('updates the page brief with source provenance and claim closeout notes', () => {
    expect(teamBrief).toContain('/root/lircap/artifacts/extracted_text/Lir Capital Team Biogs V1.docx.txt');
    expect(teamBrief).toContain('/root/lircap/artifacts/Lir_Website_Compliance_Copy_Review_v0.1.md');
    expect(teamBrief).toContain('src/content/team.js');
    expect(teamBrief).toContain('IMG-POR-01');

    for (const claimId of ['CL-007', 'CL-010', 'CL-015']) {
      expect(teamBrief).toContain(`\`${claimId}\``);
      expect(Object.keys(teamClaimTraceability)).toContain(claimId);
    }
  });
});
