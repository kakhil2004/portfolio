import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-column" data-svelte-h="svelte-7wld7x"><h1>Attributions</h1> <a href="${escape(base, true) + "/"}"><button>Click me to go back to the main portfolio page!</button></a><br> <h3>Images</h3> <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a><br> <a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">Gmail icons created by Pixel perfect - Flaticon</a><br> <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Dave Gandy - Flaticon</a><br> <a href="https://www.flaticon.com/free-icons/twitter-x" title="twitter x icons">Twitter x icons created by khulqi Rosyid - Flaticon</a></div>`;
});
export {
  Page as default
};
