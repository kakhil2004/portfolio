import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""} <div class="text-column"><h1 data-svelte-h="svelte-38jo19">Oscar Class Bot</h1> <h3 data-svelte-h="svelte-gtadws">Why</h3> <p data-svelte-h="svelte-sxx26y">I barely had any classes and the Gerogia Tech registration system was super unfair. Coursicle was super slow and would never alert me when a seat opened. I deciced to take
		matters into my own hands and deal with it using my coding skills.</p> ${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      images: [
        {
          path: "../images/oscar/registration.png",
          id: "",
          alt: "Atributo ALT de ejemplo para la imagen #1"
        },
        {
          path: "../images/oscar/oscarbot.png",
          id: "",
          alt: "Atributo ALT de ejemplo para la imagen #1"
        }
      ],
      imageHeight: 300,
      imageSpacing: 4
    },
    {},
    {}
  )} <h3 data-svelte-h="svelte-1mkkzv">How?</h3> <p data-svelte-h="svelte-b9epo1">First using devtools, I looked into the APIs used by the school&#39;s registration system and how they fetched class data. Each semester had a special code and that would be passed
		in to an endpoint to fetch all the classes and their CRNs (unique id for each class). Then another API that takes in the CRN and returns the number of seats and waitlist 
		seats avaliable.</p> <h3 data-svelte-h="svelte-4lqizo">Ethics</h3> <p data-svelte-h="svelte-19iuhce">I did wonder if this was ethical and after reading Gerogia Tech&#39;s rules, I did not violate any. Also coursicle is an app that does the same thing but on a much larger scale.
		My app is just an improvement of an already existing and widely used software. To further follow the guidelines, I made sure to not use the &quot;registration&quot; endpoint but instead
		the &quot;look up&quot; API.</p> <h3 data-svelte-h="svelte-1qcmzd0">Tech Stack</h3> <ul data-svelte-h="svelte-7oneda"><li>Python Requests</li> <li>Python Sets</li> <li>Beautiful Soup</li> <li>Discord.js</li> <li>Chrome DevTools</li></ul> <h3 data-svelte-h="svelte-ifts69">Process</h3> <p data-svelte-h="svelte-95uvnq">This app is rather simple, so I won&#39;t go into too much detail. After anaylzing the end points and looking at what parameters they take in, I replicated everything in Python Requests.
		I then saved the data as a Python set so that I everytime I poll to the server, we can check if the data has been updated using set operations. Then if there is a change, push a 
		notification to discord.</p></div>`;
});
export {
  Page as default
};
