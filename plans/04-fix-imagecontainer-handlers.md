# Step 4: Fix Inline Event Handlers in ImageContainer.svelte

## What was done
Replaced old HTML-style inline event handlers (`onclick="..."`, `onmouseover="..."`) with proper Svelte event handlers (`on:click`, `on:mouseover`).

## Why
Inline event handlers like `onclick="window.location.href = '{item.redirect}'"` are:
- An old pattern from the early 2000s, not how modern frameworks work
- Fragile — string interpolation inside event handlers can break or behave unexpectedly
- Harder to read and maintain

## Note
`ImageContainer.svelte` is currently only used on the test page (`/test`), not in production. It could be deleted entirely in a future cleanup step.

## Files changed
- Modified: `src/lib/ImageContainer.svelte`
