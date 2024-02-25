

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/dellserver/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5f0cf06e.js","_app/immutable/chunks/index.aff0ecb9.js"];
export const stylesheets = [];
export const fonts = [];
