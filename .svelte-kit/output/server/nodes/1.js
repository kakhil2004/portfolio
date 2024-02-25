

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d916429b.js","_app/immutable/chunks/index.aff0ecb9.js","_app/immutable/chunks/singletons.f9484d2a.js"];
export const stylesheets = [];
export const fonts = [];
