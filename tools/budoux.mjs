import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const require = createRequire(import.meta.url);
const { Parser } = require('../vendor/budoux/dist/parser.js');
const { model } = require('../vendor/budoux/dist/data/models/ja.js');
export const parser = new Parser(model);
export const keys = ['aboutBody', 'homeQuality1Text', 'homeQuality2Text', 'homeQuality3Text'];
export const plainText = value => value.replace(/<[^>]*>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
export function segment(value) {
  const text = plainText(value);
  const phrases = parser.parse(text);
  if (phrases.join('') !== text) throw new Error('Segmentation changed the source text');
  return { text, phrases, html: phrases.map(phrase => `<span class="budoux-phrase">${escape(phrase)}</span>`).join('<wbr class="budoux-break">') };
}

export function generate(check = false) {
  const scriptPath = path.join(root, 'script.js');
  const htmlPath = path.join(root, 'index.html');
  let script = fs.readFileSync(scriptPath, 'utf8');
  let html = fs.readFileSync(htmlPath, 'utf8');
  const match = script.match(/const ja = (\{[\s\S]*?\n\});/);
  if (!match) throw new Error('Japanese dictionary not found');
  const dictionary = JSON.parse(match[1]);
  const snapshot = { budouxVersion: '0.10.3', model: 'ja', paragraphs: {} };
  for (const key of keys) {
    const value = segment(dictionary[key]);
    dictionary[key] = value.html;
    snapshot.paragraphs[key] = { text: value.text, phrases: value.phrases };
    const expression = new RegExp(`(<p\\b[^>]*data-i18n="${key}"[^>]*>)[\\s\\S]*?(</p>)`);
    if (!expression.test(html)) throw new Error(`Missing HTML paragraph: ${key}`);
    html = html.replace(expression, (_, opening, closing) => opening + value.html + closing);
  }
  script = script.replace(match[0], 'const ja = ' + JSON.stringify(dictionary, null, 2) + ';');
  const outputs = [[scriptPath, script], [htmlPath, html], [path.join(root, 'data/budoux-ja-phrases.json'), JSON.stringify(snapshot, null, 2) + '\n']];
  for (const [file, content] of outputs) {
    if (check) {
      if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== content) throw new Error(`BudouX output is out of date: ${path.relative(root, file)}`);
    } else {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, content);
    }
  }
  console.log(`PASS: BudouX 0.10.3, Japanese model, ${keys.length} paragraphs; ${check ? 'outputs reproducible' : 'outputs generated'}.`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) generate(process.argv.includes('--check'));
