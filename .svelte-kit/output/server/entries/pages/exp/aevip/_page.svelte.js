import { c as create_ssr_component } from "../../../../chunks/ssr.js";
/* empty css                                                        */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""} <div class="text-column" data-svelte-h="svelte-1ovg7z0"><h1>Undergradute Research Work</h1> <h3>Why?</h3> <p>I&#39;ve always loved working on remote control cars and trying to make them autonomous. You can see some of my work for this in my project.</p> <video controls><source src="../images/aevip/vid.mp4" type="video/mp4"><track kind="captions">
	  Your browser does not support the video tag.</video> <h3>How?</h3> <p>Using LIDAR, Computer Vision and an Nvidia Jetson we can make many algorithms to traverse a track. Some might be reactive control where the car makes decisions on the spot or
		we can let the car get a feel for the map, create a 3D map and then following a pre-computer racing line</p> <h3>Tech Stack</h3> <ul><li>ROS2</li> <li>Ackerman Drive</li> <li>Linux</li> <li>Numpy</li> <li>OpenCV</li></ul> <h3>The page isn&#39;t fully complete and I will add updates soon!</h3></div>`;
});
export {
  Page as default
};
