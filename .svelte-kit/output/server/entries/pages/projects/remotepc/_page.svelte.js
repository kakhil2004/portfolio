import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""} <div class="text-column" data-svelte-h="svelte-s7fy4g"><h1>Remote PC</h1> <h3>Problem</h3> <p>When I&#39;m out on vacation or just back at college, there are times when I need a powerful computer to take care of intensive tasks. Other times I just forget to upload my latest
		code to github. I already figured out how to access my computer remotely but my computer had to been turned on. Now if there was nobody at home how would I do this?</p> <h3>A possible solution</h3> <p>I read an article about <a href="https://en.wikipedia.org/wiki/Wake-on-LAN">Wake-on-LAN </a>but my computer was far away from the router.</p></div>`;
});
export {
  Page as default
};
