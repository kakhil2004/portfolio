import * as universal from '../entries/pages/projects/oscar/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/oscar/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/oscar/+page.ts";
export const imports = ["_app/immutable/nodes/5.DE-4t7af.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BMg8mb2A.js","_app/immutable/chunks/Carousel.DzCEu0ss.js","_app/immutable/chunks/each.pN1v-k-H.js"];
export const stylesheets = ["_app/immutable/assets/Carousel.VNbS7xGE.css"];
export const fonts = [];
