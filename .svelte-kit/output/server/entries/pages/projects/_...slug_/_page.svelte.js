import { c as create_ssr_component, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-a2mtl2_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-a2mtl2_END -->`, ""}

<div class="text-column"><h1>${escape(data)}</h1>

	<h3>In need of an upgrade</h3>
	<p>My Raspberry Pi 2 B+ was just not cutting it. It was outdated and I had to order multiple dongles and add-ons to make it work. On top of that, I was running too many applications
		on it, so I needed an upgrade.
	</p></div>`;
});
export {
  Page as default
};
