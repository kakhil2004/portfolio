import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CP_QIe2g.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.DdJWsZXy.js","_app/immutable/chunks/each.C_V82_ow.js","_app/immutable/chunks/paths.CwaZEVzh.js"];
export const stylesheets = ["_app/immutable/assets/2.FOVQRKJB.css"];
export const fonts = [];
