

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BXGfYpTr.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.DXGBtcAU.js","_app/immutable/chunks/paths.Bf4eI46X.js"];
export const stylesheets = ["_app/immutable/assets/0.Bsk3Hq-u.css"];
export const fonts = [];
