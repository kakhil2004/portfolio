import * as universal from '../entries/pages/projects/remotepc/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/remotepc/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/remotepc/+page.ts";
export const imports = ["_app/immutable/nodes/6.DORhXGWe.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.C4tCPUuz.js"];
export const stylesheets = [];
export const fonts = [];
