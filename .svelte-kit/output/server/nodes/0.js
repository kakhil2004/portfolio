

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c21P31kN.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CUTYeL1M.js","_app/immutable/chunks/paths.Cg1tXoz-.js"];
export const stylesheets = ["_app/immutable/assets/0.Kps9LtjI.css"];
export const fonts = [];