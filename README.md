# Fractal Field Guide for FM3 / FM9 / Axe-Fx III

---
<div align="center"><a href="https://komdosh.github.io/fractal_audio/">Fractal Audio Guide</a></div>
---

A static reference site focused on the Fractal Audio **FM3, FM9, and Axe-Fx III**. It covers block availability, product-specific instance counts, block parameters, effect and amp type catalogs, signal-chain templates by genre, scene-by-scene preset recipes, hardware differences, and links to primary Fractal Audio resources.

Live deploy target: `https://komdosh.github.io/fractal_audio/`

## Sources

Core reference data is cross-checked against Fractal Audio documentation and the Fractal Audio Wiki:

- [Fractal Audio Blocks Guide (PDF)](https://www.fractalaudio.com/downloads/manuals/fas-guides/Fractal-Audio-Blocks-Guide.pdf) — block-by-block parameter reference
- [Fractal Audio effects list](https://wiki.fractalaudio.com/wiki/index.php?title=Effects_list) — product-by-product block inventory
- [Fractal Audio Wiki product comparison](https://wiki.fractalaudio.com/wiki/index.php?title=Axe-Fx_III%2C_FM9%2C_FM3) — FM3, FM9, and Axe-Fx III differences
- [Fractal Audio Wiki](https://wiki.fractalaudio.com/wiki/) — firmware release notes, per-block pages, amp model guides
- [FM3 firmware 12.00 release notes](https://wiki.fractalaudio.com/wiki/index.php?title=Firmware_release_notes_FM3) — current FM3 firmware baseline used for live type-list checks

This is an unofficial fan site. It is not affiliated with or endorsed by Fractal Audio Systems.

## Stack

- **Vite 8** — dev server and build
- **React 19** + **TypeScript 6** (typecheck via the **TypeScript 7 native preview**, `tsgo`)
- **Effector** + **effector-react** — state for the block filter
- **React Router 7** (HashRouter) — works on GitHub Pages with no server-side rewrites
- **GitHub Actions** — CI/CD to Pages

### TypeScript 7

The `build` and `typecheck` scripts call `tsgo` from `@typescript/native-preview` — the native (Go) rewrite of the TS compiler, ~10× faster than tsc. `typescript@6` is kept installed for the IDE language service and as a peer for `typescript-eslint`.

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build to dist/
npm run preview      # preview the built site
npm run typecheck    # tsgo type-check
npm run lint
```

## Deploying

1. Push to GitHub on branch `main`.
2. **Settings → Pages → Source: GitHub Actions**.
3. Every push triggers `.github/workflows/deploy.yml`, which builds and publishes `dist/` to Pages.

### Base path

`vite.config.ts` sets `base: '/fractal_audio/'` to match the repo name. For a different repo name or a custom domain:

- Edit `base` in `vite.config.ts`, or
- Set `VITE_BASE` at build time (e.g. `VITE_BASE=/ npm run build` for a root-served site).

### Routing

`HashRouter` is used so deep links like `/#/blocks/amp` survive page refresh on GitHub Pages (which has no SPA fallback). If you move to a custom domain and want clean URLs, swap to `BrowserRouter` and ship a `404.html` that redirects to `index.html`.

## Project layout

```
src/
  main.tsx                    entry, wires HashRouter
  App.tsx                     shell + nav + routes
  data/
    blocks.ts                 typed block catalog with FM3/FM9/Axe-Fx III availability
    ampModels.ts              amp model catalog and source facts
    hacks.ts                  practical device techniques with sources
    chains.ts                 signal chains and preset recipes
  model/
    counter.ts                unused starter Effector example
    blockFilter.ts            Effector stores for block search/filter
  pages/
    HomePage.tsx              hero + feature grid
    HardwarePage.tsx          FM3, FM9, and Axe-Fx III comparison
    BlocksIndexPage.tsx       filterable block catalog
    BlockDetailPage.tsx       per-block parameter reference
    SignalChainsPage.tsx      genre-tailored chain templates
    PresetsPage.tsx           scene-by-scene preset recipes
    HacksPage.tsx             source-linked device techniques
    ResourcesPage.tsx         official links
    NotFoundPage.tsx
  styles/global.css           light theme + responsive layout
.github/workflows/deploy.yml  CI build + Pages publish
```

## Adding content

- A new block? Append a `Block` entry to `src/data/blocks.ts`. The detail page is templated — no new component needed.
- A new signal chain? Append a `SignalChain` to `src/data/chains.ts`.
- A new preset recipe? Append a `Preset` to `src/data/chains.ts`.

Pages will pick the new entries up automatically.
