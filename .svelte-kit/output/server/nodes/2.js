import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BP31I3d1.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.DMVctPuR.js","_app/immutable/chunks/each.DzeuJ-LL.js","_app/immutable/chunks/paths.Dm0SPHx4.js"];
export const stylesheets = ["_app/immutable/assets/2.DMMRlyIk.css"];
export const fonts = [];
