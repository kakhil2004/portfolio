import * as universal from '../entries/pages/projects/remotepc/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/remotepc/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/remotepc/+page.ts";
export const imports = ["_app/immutable/nodes/6.CT5O168V.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BMg8mb2A.js"];
export const stylesheets = [];
export const fonts = [];
