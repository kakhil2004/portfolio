import * as universal from '../entries/pages/test/_page.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.ts";
export const imports = ["_app/immutable/nodes/12.CzmY3d8K.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CUTYeL1M.js","_app/immutable/chunks/each.BKn9QdG9.js"];
export const stylesheets = ["_app/immutable/assets/12.DeUMrcNL.css"];
export const fonts = [];
