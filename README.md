# Masala Kingdom

Four-page Japanese/English restaurant website for MASALA KINGDOM, operated by G.and P. 合同会社.

This is the complete editable static source. Images are kept in their original PNG/JPEG bytes. Fonts, styles, scripts, BudouX parser/model, generated Japanese phrase data, source licences, and preview screenshots are included. No framework migration, image optimisation, or minification is required to host it.

## View and build

Use Node.js 22 or later. No runtime dependency installation or network access is needed.

```sh
npm start
# http://127.0.0.1:4176

npm test
npm run verify
npm run build
```

`npm run build` copies the deployable site into `dist/` and verifies that every copied file has the same SHA-256 hash as its source. Deploy `dist/` as a static website. The four entry pages are `index.html`, `about.html`, `stores.html`, and `reservation.html`.

For a hosting preview that requires binding all interfaces, set `HOST=0.0.0.0` and the host's `PORT` environment variable before `npm start`. The default binds loopback only.

## Import into Manus

Read [MANUS_IMPORT.md](MANUS_IMPORT.md). Import this repository without recreating the design or regenerating the images. Build command: `npm run build`. Output directory: `dist`. Static hosts can also serve the four HTML files and assets directly from the source root.

## BudouX and Japanese typography

BudouX 0.10.3 and its Japanese model are vendored under `vendor/budoux/`. `tools/budoux.mjs` imports the upstream pure parser and Japanese model directly; it needs no npm dependencies and makes no external API calls. Source maps and TypeScript source are included.

The introductory paragraph and three home store-description paragraphs contain precomputed phrase spans and `<wbr>` boundaries. These survive copying, ZIP extraction, Git cloning, and static hosting; no parser service is required in the visitor's browser. The JP/EN dictionaries and HTML fallbacks contain the same generated markup. Hero lines, headings, buttons and English copy are not segmented.

After editing those Japanese paragraphs, run:

```sh
npm run budoux
npm test
npm run integrity
npm run verify
```

`data/budoux-ja-phrases.json` records the reproducible phrases. `data/approved-copy.json` holds the approved visible Japanese and English dictionary copy so tests detect text loss. For intentional copy changes, review and update that baseline as well.

## Lossless transfer and verification

`.gitattributes` disables Git line-ending conversion. `SHA256SUMS.json` covers the complete source payload, including images, fonts, parser source/model, documentation, and previews. It excludes only itself, Git internals, generated `dist/`, `node_modules/`, and generated ZIP copies. After cloning, `npm run verify` detects modified, missing, or unexpected source files.

Source files and production output are separate. Generated ZIP copies remain local or in GitHub release downloads; they are not required for a checkout and do not belong in the deployed directory.

Google Maps and booking/delivery links remain external services. Their live content, network availability, and behaviour are controlled by those providers. Font files are bundled locally. Pixel layout can vary with browser, operating system, viewport, or font-rendering engine even when every source byte is identical.

## File map

| Path | Purpose |
| --- | --- |
| Four root HTML pages | Editable static page content and Japanese fallbacks |
| `script.js` | Shared header/footer, JP/EN dictionaries, gallery, menu, scroll effects |
| `styles.css`, `masala.css` | Retained template styling and approved restaurant refinements |
| `assets/` | Original photos, logos, custom artwork and local fonts |
| `vendor/budoux/` | Pinned upstream parser, models, source and licence |
| `data/` | Approved visible copy and generated Japanese phrases |
| `tools/` | Offline segmentation, tests, verification, byte-preserving build and server |
| `preview/` | Review screenshots, including historical states; the HTML source is authoritative |
| `ARTWORK-PROMPTS.txt`, `VERIFICATION.txt` | Artwork provenance and historical validation notes |

Only public company/store information is included. LINE remains a disabled placeholder until its destination is supplied. The public address is `〒212-0015 神奈川県川崎市幸区柳町７−８`, verified against the supplied Google Maps pin.

## Rights and third-party components

Restaurant content and supplied images/logos retain their owners' rights. Public repository visibility does not grant a blanket open-source licence to those assets. BudouX is Apache-2.0; bundled fonts use the SIL Open Font License. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and the included licence files.
