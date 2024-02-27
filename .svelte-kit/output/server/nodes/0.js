

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CmxMlCel.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BMg8mb2A.js","_app/immutable/chunks/paths.CQJUe0yJ.js"];
export const stylesheets = ["_app/immutable/assets/0.Kps9LtjI.css"];
export const fonts = [];
