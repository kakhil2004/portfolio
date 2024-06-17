import * as universal from '../entries/pages/attributions/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/attributions/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/attributions/+page.ts";
export const imports = ["_app/immutable/nodes/4.DujX2toW.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Cqvjk_UP.js","_app/immutable/chunks/paths.CafRX8-Z.js"];
export const stylesheets = [];
export const fonts = [];
