import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'..');
const pages=['index.html','about.html','stores.html','reservation.html'];
let refs=0;
for(const file of [...pages,'styles.css','masala.css','script.js']){
 const text=fs.readFileSync(path.join(root,file),'utf8');
 assert(!/DEEP JYOTI|deep-jyoti|Taragodo|Tara Gaire|Tobe-cho|Yokohama|0453164145|045-316-4145|gairetars13/i.test(text),file+' contains stale or private information');
 for(const m of text.matchAll(/(?:src|href)=["']([^"']+)["']|url\(["']?([^"')]+)["']?\)/g)){
 const ref=m[1]||m[2];if(/^(https?:|tel:|mailto:|#|data:)/.test(ref))continue;
 assert(fs.existsSync(path.resolve(root,ref.split('?')[0])),file+': missing '+ref);refs++;
 }
}
const js=fs.readFileSync(path.join(root,'script.js'),'utf8');
execFileSync(process.execPath,['--check',path.join(root,'script.js')]);

const css=fs.readFileSync(path.join(root,'styles.css'),'utf8');
assert(css.includes('@keyframes heroZoom')&&css.includes('@keyframes pageEnter'));
assert(js.includes('IntersectionObserver')&&js.includes('renderLanguage')&&js.includes('showSlide'));
const store=fs.readFileSync(path.join(root,'stores.html'),'utf8');
assert.equal([...store.matchAll(/class="gallery-slide(?: is-active)?"/g)].length,4);
assert.equal([...store.matchAll(/data-i18n-aria="photo(?:One|Two|Three|Four)"/g)].length,4);
for(const file of pages) assert(fs.readFileSync(path.join(root,file),'utf8').includes('data-page="'+({ 'index.html':'home','about.html':'about','stores.html':'stores','reservation.html':'reservation'}[file])+'"'));
assert(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('disabled aria-disabled="true"'));
const booking=fs.readFileSync(path.join(root,'reservation.html'),'utf8');
for(const id of ['14091432','60xxxr230000','3309762','101qRhCnRD-yzPR8xYmKKw','storeId=11530','tel:0445333005'])assert(booking.includes(id),'missing link '+id);
console.log('PASS: 4 pages; '+refs+' local references; JavaScript syntax; motion hooks; 4 gallery slides and controls; expected booking/delivery destinations; private/stale-content scan.');

