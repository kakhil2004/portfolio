# CLAUDE.md — Portfolio Codebase Guide

This is Akhil Kothapalli's personal portfolio site. It is a static SvelteKit site deployed via GitHub Pages.

## Stack

- **SvelteKit 2** with **Svelte 5** (runes syntax throughout — no legacy `$:`, `export let`, or `on:` directives)
- **adapter-static** — outputs a fully static site to `build/`
- **mdsvex** — lets `.md` files be used as SvelteKit page routes (alongside `.svelte`)
- **TypeScript** everywhere
- **gh-pages** for deployment (`npm run deploy`)
- **sharp** (devDep) — used by `scripts/compress-images.mjs` for in-place image compression

## Key commands

```
npm run dev      # dev server (also binds to 0.0.0.0 via --host)
npm run build    # static build → build/
npm run check    # svelte-check type + a11y lint (target: 0 errors)
npm run deploy   # build → clean.js → gh-pages push
```

**Run npm commands via Bash tool, not PowerShell** — Windows execution policy blocks npm in PS.

## Project structure

```
src/
  routes/
    +layout.svelte        # Global layout: Header + footer + style.css injection + Google Analytics
    +page.svelte          # Home page: bio, project grid, skill filter, popup tutorial
    Header.svelte         # Fixed top nav (brand left, Projects + Attributions right)
    about/                # About this site page
    attributions/         # Attributions page
    exp/
      aevip/+page.md      # Autonomous Vehicles Research detail (mdsvex markdown)
    projects/
      antibot/+page.md    # Anti-bot project detail (markdown)
      esp32has/+page.md   # Home Automation System detail (markdown)
      r6drone/+page.md    # R6 Drone project detail (markdown)
      dellserver/         # Dell server project (.svelte — has Carousel)
      oscar/              # OSCAR bot project (.svelte — has Carousel)
      remotepc/           # Remote PC project (.svelte)
      transformers/       # Transforming Bots Tycoon (.svelte — has Carousel)
    test/                 # Scratch/test page (ignore)
  lib/
    BoxContainer.svelte   # 3-column card grid for projects (used on home page)
    ImageContainer.svelte # Full-width list of items (used on sub-pages for experience)
    TinyContainer.svelte  # Compact item list (used on sub-pages)
    Carousel.svelte       # Image slideshow (used on project detail pages)
    Code.svelte           # Inline code display component
    data/
      projects.ts         # Source of truth for ALL project and experience data
static/
  style.css               # Global styles (loaded via layout <link>)
  images/                 # All site images (see Images section below)
  resume.pdf
  aevip_paper.pdf
  robots.txt
scripts/
  compress-images.mjs     # Run once with `node scripts/compress-images.mjs` to compress images in-place
plans/                    # Session notes from past Claude conversations (reference only)
```

## Data model

All projects and experience entries live in `src/lib/data/projects.ts`. The `Project` interface:

```ts
interface Project {
  header: string;       // Title displayed in the card
  smallHead?: string;   // Subtitle (skills summary)
  para?: string;        // Short description
  redirect?: string;    // URL to navigate to on click (use `base +` for internal routes)
  color?: string;       // Hover highlight color ('lightgreen' = internal page, 'lightblue' = external link)
  sImgSrc?: string;     // Thumbnail image shown in BoxContainer cards
  skills?: string[];    // Used for home page skill filter
}
```

**To add a new project:** add an entry to the `projects` array in `projects.ts`, add its detail page under `src/routes/projects/<name>/`, and drop any images in `static/images/<name>/`.

## Svelte 5 conventions (important)

The entire codebase uses Svelte 5 runes — do not introduce legacy Svelte 4 syntax:

- Props: `let { foo, bar = default } = $props();`
- State: `let x = $state(value);`
- Derived: `const y = $derived(expr);`
- Reactive Sets/Maps: use `SvelteSet` / `SvelteMap` from `svelte/reactivity`, not plain `new Set()`
- Event handlers: `onclick={...}` not `on:click={...}`
- Slots: `{@render children()}` not `<slot />`; get `children` from `$props()`
- No event modifiers (no `on:click|self`) — replicate manually with `if (e.target === e.currentTarget)`

## Images

Stored in `static/images/`. After adding new images run `node scripts/compress-images.mjs` to compress them in-place (skips GIFs, uses mozjpeg for JPEGs, max compressionLevel for PNGs).

Potentially unreferenced (verify before deleting):
- `static/images/ak1.png` (4.5MB — lossless PNG, only compressible via format conversion)
- `static/images/ak2.jpg` (2.2MB)
- `static/images/trans/t1.png` (2.75MB)

## Deployment

`npm run deploy` runs: `vite build` → `node clean.js` (post-build cleanup) → `gh-pages -d build -t true` (pushes `build/` to the `gh-pages` branch).

The `paths.base` in `svelte.config.js` is set to `''` (empty string). All internal links use `base` from `$app/paths` to stay portable.

## Style architecture

Styles are intentionally spread across three layers (consolidation is a known backlog item):
1. `static/style.css` — global reset/typography/colors, loaded via `<link>` in layout
2. Per-component `<style>` blocks — scoped component styles
3. Inline `style=""` on elements — occasional one-offs

## Known backlog

- **Sitemap** — `static/sitemap.xml` needs the actual deployed domain URL before being created
- **Style consolidation** — move globals out of inline styles into `style.css` or component styles
- **ak1.png** — 4.5MB PNG, won't shrink without converting to JPEG; needs a decision on whether to delete or convert
