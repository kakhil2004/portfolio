import * as universal from '../entries/pages/test/_page.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.ts";
export const imports = ["_app/immutable/nodes/11.BwP8qbvp.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Cqvjk_UP.js","_app/immutable/chunks/each.CN95I62l.js"];
export const stylesheets = ["_app/immutable/assets/11.DeUMrcNL.css"];
export const fonts = [];
