import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.D2VK1YTg.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.DXGBtcAU.js"];
export const stylesheets = ["_app/immutable/assets/2.CYLNgQnZ.css"];
export const fonts = [];
