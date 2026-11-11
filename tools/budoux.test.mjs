import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { parser, segment, plainText, generate } from './budoux.mjs';

test('official Japanese parser splits its documented sample', () => {
  assert.deepEqual(parser.parse('今日は天気です。'), ['今日は', '天気です。']);
});
test('segmentation preserves text and is idempotent, including HTML-sensitive characters', () => {
  for (const text of ['川崎・尻手のMASALA KINGDOMへようこそ。', 'カレーとナンを、ご家族やご友人と。', 'G.and P. <合同会社> & "MASALA"', '']) {
    const first = segment(text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'));
    assert.equal(first.phrases.join(''), text);
    assert.equal(plainText(first.html), text);
    assert.equal(segment(first.html).html, first.html);
  }
});
test('all shipped Japanese paragraph outputs are reproducible without network access', () => generate(true));
test('both Japanese and English retain the same approved visible copy', () => {
  const current = fs.readFileSync(new URL('../script.js', import.meta.url), 'utf8');
  const baseline = JSON.parse(fs.readFileSync(new URL('../data/approved-copy.json', import.meta.url), 'utf8'));
  for (const language of ['ja', 'en']) {
    const dictionary = JSON.parse(current.match(new RegExp(`const ${language} = (\\{[\\s\\S]*?\\n\\});`))[1]);
    for (const [key, text] of Object.entries(baseline[language])) assert.equal(plainText(dictionary[key]), text, `${language}.${key}`);
  }
});
