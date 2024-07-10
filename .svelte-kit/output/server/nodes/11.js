import * as universal from '../entries/pages/test/_page.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.ts";
export const imports = ["_app/immutable/nodes/11.DYtMUZ78.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.DMVctPuR.js","_app/immutable/chunks/each.DzeuJ-LL.js"];
export const stylesheets = ["_app/immutable/assets/11.DeUMrcNL.css"];
export const fonts = [];
