import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.D9Pqsx3_.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CUTYeL1M.js","_app/immutable/chunks/each.BKn9QdG9.js","_app/immutable/chunks/paths.CCp98pXJ.js"];
export const stylesheets = ["_app/immutable/assets/2.zgXM97w0.css"];
export const fonts = [];
