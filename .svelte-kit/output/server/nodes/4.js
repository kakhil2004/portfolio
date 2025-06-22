import * as universal from '../entries/pages/attributions/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/attributions/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/attributions/+page.ts";
export const imports = ["_app/immutable/nodes/4.ClY5yK2k.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.DdJWsZXy.js","_app/immutable/chunks/paths.CwaZEVzh.js"];
export const stylesheets = [];
export const fonts = [];
