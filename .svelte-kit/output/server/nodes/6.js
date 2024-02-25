import * as universal from '../entries/pages/projects/transformers/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/transformers/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/transformers/+page.ts";
export const imports = ["_app/immutable/nodes/6.CteboQ6v.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.3wbO5xVr.js"];
export const stylesheets = [];
export const fonts = [];
