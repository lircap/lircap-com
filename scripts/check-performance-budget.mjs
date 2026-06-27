#!/usr/bin/env node
import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const limits = {
  totalBytes: 1_500_000,
  scriptBytes: 250_000,
  cssBytes: 250_000,
};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

if (!existsSync(dist)) {
  console.log('Performance budget skipped: dist/ does not exist. Run npm run build first.');
  process.exit(0);
}

const files = await walk(dist);
let totalBytes = 0;
let scriptBytes = 0;
let cssBytes = 0;

for (const file of files) {
  const size = (await stat(file)).size;
  totalBytes += size;
  if (file.endsWith('.js')) scriptBytes += size;
  if (file.endsWith('.css')) cssBytes += size;
}

const findings = [];
if (totalBytes > limits.totalBytes) findings.push(`total ${totalBytes} > ${limits.totalBytes}`);
if (scriptBytes > limits.scriptBytes) findings.push(`script ${scriptBytes} > ${limits.scriptBytes}`);
if (cssBytes > limits.cssBytes) findings.push(`css ${cssBytes} > ${limits.cssBytes}`);

if (findings.length) {
  console.error(`Performance budget failed: ${findings.join('; ')}`);
  process.exit(1);
}

console.log(`Performance budget passed: total=${totalBytes}B js=${scriptBytes}B css=${cssBytes}B`);
