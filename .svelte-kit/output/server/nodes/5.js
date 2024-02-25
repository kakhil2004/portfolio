import * as universal from '../entries/pages/projects/remotepc/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/remotepc/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/remotepc/+page.ts";
export const imports = ["_app/immutable/nodes/5.DdkBDH-L.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.3wbO5xVr.js"];
export const stylesheets = [];
export const fonts = [];
