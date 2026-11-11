import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const root = path.resolve(import.meta.dirname, '..');
const destination = path.join(root, 'dist');
for (const args of [['tools/verify.mjs'], ['tools/budoux.mjs', '--check'], ['--test', 'tools/budoux.test.mjs']]) execFileSync(process.execPath, args, { cwd: root, stdio: 'inherit' });
fs.mkdirSync(destination, { recursive: true });
const entries = ['index.html', 'about.html', 'stores.html', 'reservation.html', 'script.js', 'styles.css', 'masala.css', 'assets'];
for (const entry of entries) fs.cpSync(path.join(root, entry), path.join(destination, entry), { recursive: true });
let count = 0;
function verify(relative) {
  const source = path.join(root, relative);
  if (fs.statSync(source).isDirectory()) return fs.readdirSync(source).forEach(child => verify(path.join(relative, child)));
  const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  assert.equal(hash(source), hash(path.join(destination, relative)), `Build changed bytes: ${relative}`);
  count++;
}
entries.forEach(verify);
console.log(`PASS: dist/ contains ${count} deployment files, copied without transforming or recompressing a byte.`);
