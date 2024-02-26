import * as universal from '../entries/pages/projects/oscar/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/oscar/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/oscar/+page.ts";
export const imports = ["_app/immutable/nodes/5.K6v_xMQk.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.C4tCPUuz.js"];
export const stylesheets = [];
export const fonts = [];
