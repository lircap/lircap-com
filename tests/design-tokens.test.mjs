import { describe, expect, it } from 'vitest';

const colours = {
  obsidian: '#12151c',
  atlanticDeep: '#0c2b35',
  agedGold: '#b8975a',
  atlanticSlate: '#7a9ba8',
  parchment: '#f5f1eb',
};

function channel(value) {
  const normal = value / 255;
  return normal <= 0.03928 ? normal / 12.92 : ((normal + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const value = hex.replace('#', '');
  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);
  return 0.2126 * channel(red) + 0.7152 * channel(green) + 0.0722 * channel(blue);
}

function contrast(foreground, background) {
  const a = luminance(foreground);
  const b = luminance(background);
  const lighter = Math.max(a, b);
  const darker = Math.min(a, b);
  return (lighter + 0.05) / (darker + 0.05);
}

describe('design token contrast', () => {
  const passingPairs = [
    ['parchment on obsidian', colours.parchment, colours.obsidian],
    ['parchment on Atlantic Deep', colours.parchment, colours.atlanticDeep],
    ['obsidian on parchment', colours.obsidian, colours.parchment],
    ['Atlantic Deep on parchment', colours.atlanticDeep, colours.parchment],
    ['aged gold on obsidian', colours.agedGold, colours.obsidian],
    ['aged gold on Atlantic Deep', colours.agedGold, colours.atlanticDeep],
  ];

  it.each(passingPairs)('%s passes WCAG AA for normal text', (_label, foreground, background) => {
    expect(contrast(foreground, background)).toBeGreaterThanOrEqual(4.5);
  });

  it('prohibits aged gold as text on parchment', () => {
    expect(contrast(colours.agedGold, colours.parchment)).toBeLessThan(4.5);
  });

  it('prohibits Atlantic Slate as body text on parchment', () => {
    expect(contrast(colours.atlanticSlate, colours.parchment)).toBeLessThan(4.5);
  });
});
