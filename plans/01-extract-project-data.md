# Step 1: Extract Project Data

## What was done
Created `src/lib/data/projects.ts` — a dedicated data file that holds all project and experience entries.

## Why
The home page (`+page.svelte`) had all project data hardcoded inline, making it ~1,476 lines long. Adding or editing a project meant digging through a huge file mixed with UI logic and CSS.

## Result
- `src/lib/data/projects.ts` — clean list of all projects and experience with a `Project` TypeScript interface
- `+page.svelte` now just imports and uses the data: `import { projects, experience } from "$lib/data/projects"`
- Adding a new project = add one object to the array in `projects.ts`, nothing else

## Files changed
- Created: `src/lib/data/projects.ts`
- Modified: `src/routes/+page.svelte`
