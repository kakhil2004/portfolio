import * as universal from '../entries/pages/attributions/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/attributions/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/attributions/+page.ts";
export const imports = ["_app/immutable/nodes/3.BdLOQRBM.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BMg8mb2A.js","_app/immutable/chunks/paths.CQJUe0yJ.js"];
export const stylesheets = [];
export const fonts = [];
