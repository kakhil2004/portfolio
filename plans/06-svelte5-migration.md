# Step 6 (Future): Migrate to Svelte 5

## Status: NOT DONE — documented for future reference

## What this would involve
Svelte 5 is a rewrite of the framework with better performance and cleaner syntax called "runes". The ecosystem (SvelteKit, vite-plugin-svelte) has moved to requiring Svelte 5.

### Syntax changes needed

**Reactive variables** — `$:` becomes `$derived` / `$state`:
```svelte
// Before (Svelte 4)
$: filteredProjects = ...

// After (Svelte 5)
let filteredProjects = $derived(...)
```

**Props** — `export let` becomes `$props()`:
```svelte
// Before
export let data: any[] = [];

// After
let { data = [] } = $props();
```

**Event handlers** — `on:click` becomes `onclick`:
```svelte
// Before
<button on:click={handler}>

// After
<button onclick={handler}>
```

## Why it's worth doing eventually
- Latest SvelteKit updates and security patches require Svelte 5
- Svelte 5 is noticeably faster
- Runes syntax is cleaner and less "magic"
- Active ecosystem development is focused on Svelte 5

## Estimated effort
Medium — most changes are mechanical find-and-replace. The SvelteKit migration guide covers it well.
