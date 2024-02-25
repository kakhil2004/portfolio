

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/attributions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.2e0f5f93.js","_app/immutable/chunks/index.aff0ecb9.js"];
export const stylesheets = [];
export const fonts = [];
