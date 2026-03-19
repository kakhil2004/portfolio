# Step 3: Replace Vanilla JS with Svelte in +page.svelte

## What was done
The home page had a second bare `<script>` block (no `lang="ts"`) with ~45 lines of plain JavaScript using `document.getElementById`, `window.onscroll`, and inline DOM manipulation. This was replaced with proper Svelte reactive code.

## Why
Mixing vanilla JS with Svelte is an anti-pattern. Svelte has built-in ways to handle all of this that are cleaner, less error-prone, and work properly with server-side rendering.

## Specific changes

| Before | After |
|---|---|
| `window.onscroll = function() { ... }` | `<svelte:window on:scroll={handleScroll} />` |
| `document.getElementById("scrollToTopBtn").style.display = "block"` | `let showScrollTop = false` + `{#if showScrollTop}` |
| `document.getElementById("popup").style.display = "block"` | `let showPopup = false` + `{#if showPopup}` |
| `openBtn.onclick = function() { ... }` | `on:click={() => showPopup = true}` |
| Hardcoded `display: none` in CSS for `#scrollToTopBtn` | Svelte `{#if}` renders/removes element from DOM |

## Files changed
- Modified: `src/routes/+page.svelte`
- Modified: `static/style.css` (removed old `#scrollToTopBtn` and cleanup of popup CSS that relied on `display: none`)
