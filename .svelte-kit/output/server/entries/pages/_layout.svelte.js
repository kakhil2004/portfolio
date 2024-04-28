import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const css$1 = {
  code: ".topnav.svelte-39akck.svelte-39akck{overflow:hidden;display:flex;justify-content:space-between;align-items:center}.topnav.svelte-39akck .brand.svelte-39akck{font-size:25px;margin:0;padding:10px 16px}.topnav-right.svelte-39akck.svelte-39akck{display:flex}.topnav-right.svelte-39akck a.svelte-39akck{text-decoration:none;font-size:17px;padding:14px 16px}",
  map: null
};
let logo = "Akhil Kothapalli";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header><div class="topnav svelte-39akck"><h2 class="brand svelte-39akck">${escape(logo)}</h2> <div class="topnav-right svelte-39akck" data-svelte-h="svelte-1lpu03o"><a href="${escape(base, true) + "/#proj"}" class="svelte-39akck">Projects</a> <a href="${escape(base, true) + "/#skill"}" class="svelte-39akck">Skills</a> <a href="${escape(base, true) + "/#exp"}" class="svelte-39akck">Experience</a> <a href="${escape(base, true) + "/attributions"}" class="svelte-39akck">Attributions</a></div></div> </header>`;
});
const css = {
  code: "#page-container.svelte-1qf80bv{position:relative;min-height:98.6vh}#content-wrap.svelte-1qf80bv{padding-bottom:50px}#footer.svelte-1qf80bv{padding-top:20px;border-top:2px solid  var(--secondaryColor);position:absolute;bottom:0;width:100%;height:50px;text-align:center;font-size:small}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ze56aw_START --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css" type="text/css"><link rel="stylesheet" href="${escape(base, true) + "/style.css"}" type="text/css"><!-- HEAD_svelte-ze56aw_END -->`, ""} <div id="page-container" class="svelte-1qf80bv">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main id="content-wrap" class="svelte-1qf80bv">${slots.default ? slots.default({}) : ``}</main> <footer id="footer" class="svelte-1qf80bv" data-svelte-h="svelte-1kei9k0"><div><p>©2023 Akhil, Powered by SvelteKit. <a href="${escape(base, true) + "/about"}">More about this site</a>  - 1.2.1</p></div></footer> </div>`;
});
export {
  Layout as default
};
