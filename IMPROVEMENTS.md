# Portfolio Website — Possible Improvements

This document outlines everything that could be improved, fixed, or cleaned up in this codebase. Items are grouped by priority. None of these are breaking issues — the site works fine as-is — but these would make it faster, cleaner, and easier to maintain.

---

## High Priority

### 1. Update Dependencies
All packages are 1–2 years old and have newer versions available.

| Package | Current | What to do |
|---|---|---|
| `svelte` | 4.2.12 | Update to Svelte 5 (major rewrite, big perf gains) |
| `@sveltejs/kit` | 2.5.1 | Update to latest 2.x patch |
| `vite` | 5.1.4 | Update to Vite 6.x |
| `typescript` | 5.0.0 | Update to 5.7+ |
| `svelte-check` | 3.0.1 | Update to latest |
| `mdsvex` | 0.11.2 | Update to latest |
| `@sveltejs/adapter-static` | 3.0.1 | Update to latest |

**Two packages can be removed entirely** — they are installed but never used anywhere:
- `@neoconfetti/svelte` (confetti animation — not used)
- `@fontsource/fira-mono` (font — not used, font is loaded from Google Fonts instead)

### 2. Compress the Images
The `static/images/` folder is ~17MB. One image (`ak2.jpg`) is 8.8MB alone.
For a web page, images should be under 200–500KB each.

- Compress all images (tools: Squoosh, TinyPNG, or just running `sharp` in a script)
- Convert to WebP format (smaller file size, same quality)
- Add lazy loading (`loading="lazy"` on `<img>` tags) so images only load when scrolled into view

**Impact:** Page load time could drop from several seconds to under 1 second on mobile.

### 3. Move the Discord Webhook URL Out of the Code
In `src/routes/Header.svelte` there is a Discord webhook URL hardcoded directly in the source code. Since this repo is public on GitHub, anyone can see it and spam that webhook.

**Fix:** Move it to an environment variable (a `.env` file that is git-ignored).

---

## Medium Priority

### 4. Extract Project Data to a Separate File
Right now all project info (titles, descriptions, skills, links) is written directly inside `src/routes/+page.svelte`, which makes that file very long (~1,476 lines).

**Fix:** Move the project data to a file like `src/lib/data/projects.ts`. Then `+page.svelte` just imports and displays it. This makes adding new projects much simpler — you edit one small data file instead of digging through a huge page file.

### 5. Add TypeScript Types for Project Data
Components like `BoxContainer.svelte` accept `data: any[]` — meaning TypeScript doesn't know what shape the data is and can't catch mistakes.

**Fix:** Create interfaces like:
```ts
interface Project {
  title: string;
  description: string;
  skills: string[];
  redirect?: string;
  color?: string;
  image?: string;
}
```

This catches bugs before the site even builds.

### 6. Fix the Old-Style Inline Event Handlers
`src/lib/ImageContainer.svelte` uses old HTML-style event handlers like `onclick="window.location.href = '...'"`. This is a pattern from the early 2000s and doesn't work well with modern frameworks.

**Fix:** Replace with Svelte's built-in `on:click` handler. This is also safer (no XSS risk from string interpolation).

### 7. Clean Up the Popup/Modal Code
The tutorial popup in `+page.svelte` (lines ~253–297) uses vanilla JavaScript (`document.getElementById`, global `window` event listeners) mixed in with Svelte code.

**Fix:** Rewrite as a proper Svelte component using reactive variables (`let showPopup = false`). This is cleaner and the Svelte way to do things.

### 8. Consolidate Styles
Styles are currently spread across four places:
- `src/app.html` (base styles)
- `static/style.css` (global overrides)
- `<style>` blocks inside each component
- Inline `style=""` attributes on elements

This makes it hard to know where to change something. The goal would be to keep global styles in one place (`static/style.css`) and component-specific styles in that component's `<style>` block.

---

## Lower Priority (Nice to Have)

### 9. Accessibility Improvements
- The filter system uses color (green = clickable, blue = external) to communicate meaning, but colorblind users can't distinguish these
- Some images are missing descriptive `alt` text
- Filter buttons could use better keyboard navigation (tab focus, enter to select)

### 10. Remove `ImageContainer.svelte`
`src/lib/ImageContainer.svelte` is a partial duplicate of `BoxContainer.svelte` with worse code (see item #6). It could either be deleted if unused, or its functionality folded into `BoxContainer.svelte`.

### 11. Add a Sitemap
A `sitemap.xml` file helps Google index all pages of the site correctly. SvelteKit can generate this automatically. This improves SEO.

### 12. Upgrade to Svelte 5
Svelte 5 is a near-complete rewrite with much better performance and cleaner syntax ("runes" instead of reactive declarations). It's a significant migration but the end result is a faster, more modern codebase. Not urgent, but the long-term direction.

---

## Summary Table

| # | Task | Effort | Impact |
|---|---|---|---|
| 1 | Update packages | Low | Medium |
| 2 | Compress images | Low | **High** |
| 3 | Move Discord webhook to env var | Low | Security fix |
| 4 | Extract project data to separate file | Medium | Maintainability |
| 5 | Add TypeScript types | Medium | Code quality |
| 6 | Fix inline event handlers | Low | Code quality |
| 7 | Rewrite popup as Svelte component | Medium | Code quality |
| 8 | Consolidate styles | High | Maintainability |
| 9 | Accessibility improvements | Medium | Accessibility |
| 10 | Remove `ImageContainer.svelte` | Low | Cleanup |
| 11 | Add sitemap | Low | SEO |
| 12 | Migrate to Svelte 5 | Very High | Performance |

---

*Generated by Claude Code on 2026-03-19*
