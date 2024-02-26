import * as universal from '../entries/pages/attributions/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/attributions/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/attributions/+page.ts";
export const imports = ["_app/immutable/nodes/3.iUKiG_oR.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.C4tCPUuz.js","_app/immutable/chunks/paths.DpexAEND.js"];
export const stylesheets = [];
export const fonts = [];
