import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let metadata = [
    {
      path: "../images/aevip/aeCar.jpg",
      id: "",
      alt: "Atributo ALT de ejemplo para la imagen #1"
    },
    {
      path: "../images/aevip/oldCar.jpg",
      id: "",
      alt: "Atributo ALT de ejemplo para la imagen #1"
    },
    {
      path: "../images/aevip/brokenCar.jpg",
      id: "",
      alt: "Atributo ALT de ejemplo para la imagen #1"
    }
  ];
  return `<h1 data-svelte-h="svelte-fd0eb9">Autonomous Vehicles</h1> <p data-svelte-h="svelte-1c668ye"><strong>Skills: ROS, Python, C, Linux, Git (version control)</strong></p> <p data-svelte-h="svelte-xdr8t1"><a href="https://github.gatech.edu/dbergman8/racecar_group_2" rel="nofollow">Click me for GitHub Link</a></p> <h2 data-svelte-h="svelte-lerqz1">Why?</h2> <p data-svelte-h="svelte-7sj4e2">I’ve always loved working on remote control cars and trying to make them autonomous. You can see some of my work for this in my project.</p> <h2 data-svelte-h="svelte-sftmep">High Level Overview</h2> <hr> <ol data-svelte-h="svelte-btnqla"><li><a href="#step-1">Understanding the system</a></li> <li><a href="#step-2">Creating Basic algorithms</a></li> <li><a href="#step-3">Trying to use LIDAR and generating racelines</a></li> <li><a href="#step-4">Showcase</a></li></ol> <div id="step-1"></div> <h2 data-svelte-h="svelte-1uc3hfn">1. Understanding the system</h2> <hr> <p data-svelte-h="svelte-7oe9qr">I have built my own remote control drones in the past. For example, I created a remote control tank that was powered with a Raspberry PI and used WebSockets. My computer would interpret the signals from the Xbox Controller and send them to my public server. Then that would send information directly to the tank and it would move. With this method, the tank would work anywhere in the world as long as it has Wi-Fi. It also had a camera!</p> <div class="video-container" data-svelte-h="svelte-1pvlrr3"><iframe width="560" height="315" src="https://www.youtube.com/embed/Bc-4rDAujwg?si=9hwMYAMt1rRgetfF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <h4 data-svelte-h="svelte-37amnr">The New Car</h4> <p data-svelte-h="svelte-1dztvey">The car in my research position (shown below) was on a different scale. It had an <strong>Nvidia Jetson Nano, a high-end LIDAR (Hokuyo UST-10LX), a ZED camera and was really fast</strong>. On top of that we had huge spaces to test the car!</p> ${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      images: metadata,
      imageHeight: "300",
      imageSpacing: "4"
    },
    {},
    {}
  )} <div id="step-2"></div> <h2 data-svelte-h="svelte-1dvcghf">2. Creating Basic algorithms</h2> <hr> <h4 data-svelte-h="svelte-pxfo7w">Understanding the system</h4> <p data-svelte-h="svelte-17qslcb">This was my first time working with <strong>ROS</strong> so it took a week to understand the master slave system and the relevant nodes. After that I was able to create simple algorithms to get the car moving around a track. Here was a simple wall following algorithm I made!</p> <div class="video-container" data-svelte-h="svelte-1hl7xbu"><iframe width="560" height="315" src="https://www.youtube.com/embed/N_wLJqZBL7o?si=iilT77tWwscr4pcf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <h4 data-svelte-h="svelte-y0f5is">Research the LoRa protocol</h4> <p data-svelte-h="svelte-dfbnfi">After some research and realizing that the ESP’s antenna was just too small, I found the LoRa protocol. Apparently ESP32s without an external antenna could communicate with one another over huge ranges (500 meters). I could not believe it since the regular protocols performed so terribly.</p> <h4></h4> <div id="step-3"></div> <div id="step-4"></div>`;
});
export {
  Page as default
};
