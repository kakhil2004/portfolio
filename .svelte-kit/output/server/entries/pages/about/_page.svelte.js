import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-up86il_START -->${$$result.title = `<title>About this Website</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-up86il_END -->`, ""} <div class="text-column" data-svelte-h="svelte-wljctv"><h1>About this Website</h1> <h3>Why</h3> <p>My resume cannot do my projects justice. I need to explain them properly here. Plus since I made this website myself, that to using Svelte, I can easily add new features.</p> <h3>Challenges I faced</h3> <h3>Too much</h3> <p>It took me three iterations to make this website. I always struggled with trying to make everything. This time I focused on something very simply. In fact, this was going to 
		vanilla js, html and css. I stayed strong but missed Svelte, so thats the only addition so far.</p> <h3>.nojekyll file</h3> <p>My app was not able to get some of it&#39;s files. It took me so long to find out that the .gitignore wasn&#39;t uploading the .nojekyll file which was messing everything up.</p></div>`;
});
export {
  Page as default
};
