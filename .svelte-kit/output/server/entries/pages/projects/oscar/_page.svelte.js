import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""} <div class="text-column" data-svelte-h="svelte-1x54cep"><h1>Oscar Class Bot</h1> <h3>Why</h3> <p>I barely had any classes and the Gerogia Tech registration system was super unfair. Coursicle was super slow and would never alert me when a seat opened. I deciced to take
		matters into my own hands and deal with it using my coding skills.</p> <img src="../images/oscarbot.png" alt="X"></div>`;
});
export {
  Page as default
};
