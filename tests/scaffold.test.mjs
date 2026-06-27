import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));

describe('project scaffold', () => {
  it('uses Astro static output and exposes baseline commands', () => {
    expect(packageJson.dependencies.astro).toBeDefined();
    expect(packageJson.scripts.build).toBe('astro build');
    expect(packageJson.scripts.typecheck).toBe('astro sync && tsc --noEmit');
    expect(packageJson.scripts.lint).toBe('eslint .');
  });
});
