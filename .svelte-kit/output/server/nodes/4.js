

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_...slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.39f672e2.js","_app/immutable/chunks/index.aff0ecb9.js"];
export const stylesheets = [];
export const fonts = [];
