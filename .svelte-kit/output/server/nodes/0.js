

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CWElJfGR.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.DdJWsZXy.js","_app/immutable/chunks/paths.CwaZEVzh.js"];
export const stylesheets = ["_app/immutable/assets/0.Dy2aBOhD.css"];
export const fonts = [];
