import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.COu52LZf.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Cqvjk_UP.js","_app/immutable/chunks/each.CN95I62l.js","_app/immutable/chunks/paths.CafRX8-Z.js"];
export const stylesheets = ["_app/immutable/assets/2.DMMRlyIk.css"];
export const fonts = [];
