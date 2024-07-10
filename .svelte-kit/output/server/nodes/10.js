import * as universal from '../entries/pages/projects/transformers/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/transformers/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/transformers/+page.ts";
export const imports = ["_app/immutable/nodes/10.BqIZY1tp.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.DMVctPuR.js","_app/immutable/chunks/Carousel.B7kHpPZN.js","_app/immutable/chunks/each.DzeuJ-LL.js"];
export const stylesheets = ["_app/immutable/assets/Carousel.VNbS7xGE.css"];
export const fonts = [];
