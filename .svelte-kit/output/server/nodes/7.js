

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/transformers/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.6f7d81cd.js","_app/immutable/chunks/index.aff0ecb9.js"];
export const stylesheets = [];
export const fonts = [];
