

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/remotepc/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.6d67922f.js","_app/immutable/chunks/index.aff0ecb9.js"];
export const stylesheets = [];
export const fonts = [];
