

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.4708848f.js","_app/immutable/chunks/index.aff0ecb9.js"];
export const stylesheets = ["_app/immutable/assets/0.f4597a7d.css"];
export const fonts = [];
