import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const root = path.resolve(import.meta.dirname, '..');
const manifest = path.join(root, 'SHA256SUMS.json');
function files(directory, prefix = '') {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if ((['.git', 'node_modules'].includes(entry.name) || (prefix === '' && entry.name === 'dist')) || entry.name === 'SHA256SUMS.json' || entry.name.endsWith('.zip')) return [];
    const relative = prefix + entry.name;
    return entry.isDirectory() ? files(path.join(directory, entry.name), relative + '/') : [relative];
  });
}
const hashes = {};
for (const relative of files(root).sort()) hashes[relative] = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, relative))).digest('hex');
if (process.argv.includes('--check')) {
  assert.deepEqual(hashes, JSON.parse(fs.readFileSync(manifest, 'utf8')), 'Files differ from SHA256SUMS.json; inspect edits before regenerating it');
  console.log(`PASS: ${Object.keys(hashes).length} files match SHA-256 manifest byte for byte.`);
} else {
  fs.writeFileSync(manifest, JSON.stringify(hashes, null, 2) + '\n');
  console.log(`Wrote SHA-256 manifest for ${Object.keys(hashes).length} files.`);
}

