import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""} <div class="text-column"><h1 data-svelte-h="svelte-1gkpima">Transforming bots Tycoon</h1> <h3 data-svelte-h="svelte-gtadws">Why</h3> <p data-svelte-h="svelte-17nr7qy">Making games seems really cool. I decided to use Roblox Studio since it took care of the multiplayer stuff so I could just focus on the game. While I was doing my research I realized that the genre of Transforming Robots was lacking. There were no fun games to play there. In the images below you can see
		the transforming animation and car I made for users. You can also see the raycating physics that I used to make the railgun shoot. Lastly, you can see how people can buy in-game
		items using Robux (Roblox&#39;s virutal currency) to buy products.
		<a href="https://www.roblox.com/games/8553376182/Transforming-Bots-Tycoon-ALPHA">Click me to visit the game</a></p> ${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      images: [
        {
          path: "../images/trans/transform.gif",
          id: "",
          alt: "Atributo ALT de ejemplo para la imagen #1"
        },
        {
          path: "../images/trans/raycast.png",
          id: "",
          alt: "Atributo ALT de ejemplo para la imagen #1"
        },
        {
          path: "../images/trans/shop.png",
          id: "",
          alt: "Atributo ALT de ejemplo para la imagen #1"
        }
      ],
      imageHeight: 300,
      imageSpacing: 4
    },
    {},
    {}
  )} <h3 data-svelte-h="svelte-dorzh6">How to navigate this page?</h3> <p data-svelte-h="svelte-1e1r0u9">Since building a roblox game and explaining it takes a lot of work, I will just tell you about the challenges I overcame while making this.</p> <h3 data-svelte-h="svelte-dg8ifi">Storing Data Efficiently</h3> <p data-svelte-h="svelte-qwsuf9">Players have these things called Tycoons that are essentially bases they build to generate the in-game currency. Users asked for a way to save progress so I first came up with the
		idea of saving the physical Tycoon model in User Storage. This is obviously a terrible idea since the bases are all the same, and I would have so many replicated items that are clogging 
		up storage space. To solve this, I had to make a <b>schema</b> that would save the progress of the base and the user. I also had to change the way the base appeared.</p> <h3 data-svelte-h="svelte-1t6iwh6">Changes in the base</h3> <p data-svelte-h="svelte-6fyy6u">Rather than creating a new clone of a tycoon part and getting it from storage, the whole base is replicated and the upgrades are hidden. They are hidden such that the player can&#39;t see or touch them. 
		This made it much easier and faster to build the base as we didn&#39;t load everything one by one. It was all dealt with when the player first joins and then we simply change two attributes.</p></div>`;
});
export {
  Page as default
};
