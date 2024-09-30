import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const css$1 = {
  code: ".box-container.svelte-1hozz65{display:flex;margin-bottom:50px auto;flex-wrap:wrap;justify-content:center;gap:10px;max-height:80%;padding:30px;overflow:auto}.box.svelte-1hozz65{flex:0 0 calc(27% - 20px);border:3px solid #4A4A4A;border-radius:10px ;padding:20px;font-size:1.5vh;cursor:default}@media(max-width: 768px){.box.svelte-1hozz65{flex-basis:calc(100% - 20px)}}.box.svelte-1hozz65:hover{cursor:pointer}.smallimagedesc.svelte-1hozz65{width:100%;height:auto;border-radius:25px;object-fit:cover}",
  map: null
};
const BoxContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="box-container svelte-1hozz65" style="margin-bottom:40px;">${each(data, (item) => {
    return `${"redirect" in item ? `<div onclick="${"window.location.href = '" + escape(item["redirect"] ? item["redirect"] : "", true) + "'"}" onmouseover="${"this.style.backgroundColor = '" + escape(item["color"] ? item["color"] : "", true) + "'"}" onmouseout="this.style.backgroundColor =''" class="box svelte-1hozz65">${"onlyH2" in item ? `<h4 style="margin:0px;">${escape(item["header"])}</h4>` : `<h2>${escape(item["header"])}</h2>`} <img${add_attribute("src", item["sImgSrc"], 0)} alt="small image desc" class="smallimagedesc svelte-1hozz65"> ${"smallHead" in item ? `<p style="margin:0px;"><b>${escape(item["smallHead"])}</b></p>` : ``} ${"para" in item ? `<p>${escape(item["para"])}</p>` : ``} </div>` : `<div onmouseover="${"this.style.backgroundColor = '" + escape(item["color"] ? item["color"] : "", true) + "'"}" onmouseout="this.style.backgroundColor =''" class="box svelte-1hozz65">${"onlyH2" in item ? `<h4 style="margin:0px;">${escape(item["header"])}</h4>` : `<h2>${escape(item["header"])}</h2>`} ${"smallHead" in item ? `<p style="margin:0px;"><b>${escape(item["smallHead"])}</b></p>` : ``} ${"para" in item ? `<p>${escape(item["para"])}</p>` : ``} </div>`}`;
  })} </div>`;
});
const css = {
  code: ".tiny-box-container.svelte-1pamtoh{display:flex;margin:0px;flex-wrap:wrap;justify-content:center;gap:10px;max-height:80%;padding:30px;overflow:auto}.tiny-box.svelte-1pamtoh{flex:0 0 calc(15% - 20px);border:3px solid #4A4A4A;border-radius:10px ;padding:20px;font-size:1.5vh;cursor:default}@media(max-width: 768px){.tiny-box.svelte-1pamtoh{flex-basis:calc(100% - 20px)}}.tiny-box.svelte-1pamtoh:hover{cursor:pointer}",
  map: null
};
const TinyContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="tiny-box-container svelte-1pamtoh" style="margin-bottom:40px;">${each(data, (item) => {
    return `<div onmouseover="${"this.style.backgroundColor = '" + escape(item["color"] ? item["color"] : "", true) + "'"}" onmouseout="this.style.backgroundColor =''" class="tiny-box svelte-1pamtoh"><h5 style="margin: 0px;">${escape(item["header"])}</h5> </div>`;
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let proj = [
    {
      "header": "Anti-bot",
      "smallHead": "Javascript, RESTful APIs, Backend",
      "para": "Stop bots from sending too many requests using browser data and Machine Learning. Based on Akamai and PerimeterX",
      "redirect": "https://antibot.akhilkothapalli.com/",
      "color": "lightgreen",
      "sImgSrc": base + "/images/antibot/pfp.png"
    },
    {
      "header": "Home Automation System (NEW)",
      "smallHead": "Embedded System, Networking, C",
      "para": "Using the LoRa protocol to transmit data over extreme distances to automate tasks around the house",
      "redirect": base + "/projects/esp32has",
      "color": "lightgreen",
      "sImgSrc": base + "/images/sig/image.jpg"
    },
    {
      "header": "Autonomous Vehicles Research",
      "smallHead": "ROS, Python, C, Git, Linux",
      "para": "I spend several hours every week working on a cool car that has LIDAR, vision, an NVidia Jetson Nano etc. and I need to make it fully autonmous so it can race in F1Tenth.",
      "redirect": base + "/exp/aevip",
      "color": "lightgreen",
      "sImgSrc": base + "/images/aevip/aeCar.jpg"
    },
    {
      "header": "Transforming Bots Tycoon",
      "smallHead": "Product, Lua, Game Dev",
      "para": "A full in-game economy where players can build their base, become robots and protect their land. Made raycasting physics, user data storage solutions etc.",
      "redirect": base + "/projects/transformers",
      "color": "lightgreen",
      "sImgSrc": base + "/images/trans/transform.gif"
    },
    {
      "header": "MyFinancePal",
      "smallHead": "AI, Prompt Engineering, Data Science",
      "para": "New investors often struggle with tunnel vision, risky choices, and emotions. Our project tackles these by fostering a broad perspective, simplifying metrics, and promoting data-driven decision-making.",
      "redirect": "https://github.com/ErMa12345/MyFinancePal",
      "color": "lightblue",
      "sImgSrc": base + "/images/mfp.png"
    },
    {
      "header": "cLLiMate.tech",
      "smallHead": "Data Science, K-n neighbors",
      "para": "We believe in tackling climate change by starting with personal awareness, emphasizing the need for reliable climate news sources. That's why we're creating a climate news feed using advanced technology like NLP and machine learning, making it easier to stay informed and understand the impacts of climate change.",
      "redirect": "https://devpost.com/software/cllimate",
      "color": "lightblue",
      "sImgSrc": base + "/images/climate.png"
    },
    {
      "header": "OSCAR Notification Bot",
      "smallHead": "Python, Requests, Chrome DevTools",
      "para": "Bot that notifies you when a class seat opens on Georgia Tech's system. Almost instant response time. Way faster than courseicle.",
      "redirect": base + "/projects/oscar",
      "color": "lightgreen",
      "sImgSrc": base + "/images/oscar/oscarbot.png"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1hxcyyj_START -->${$$result.title = `<title>AK | Home</title>`, ""}<meta name="description" content="Akhil Kothapalli's Portfolio website. Learn so much more about me here!"><!-- HEAD_svelte-1hxcyyj_END -->`, ""} <section><div class="page-container" data-svelte-h="svelte-1a9mc7"><div class="content-container"><div class="image-container"><img class="bio" src="images/ak3.jpg" alt="akhil"></div> <div class="content" style="margin: auto;"><p style="margin-bottom: 0px; text-align: center;">Hello I&#39;m</p> <h2 style="margin-top: 0px; text-align: center;">Akhil Kothapalli</h2> <p style="text-align: center;">a third-year CS major from Georgia. I enjoy coding and have done all sorts of projects including <b>full-stack web apps, game development and working with embedded systems. Check out my projects below!</b></p> <div style="text-align: center;"><a class="nostyle" target="_blank" href="https://docs.google.com/document/d/11Y2gMt14k4bMbR54mX4R9Z9txu6dHT7F-S20IIrQ2F4/edit?usp=sharing"><button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;">Resume</h3></button></a> <a class="nostyle" target="_blank" id="openPopup"><button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;">Tutorial of Site</h3></button></a> <br> <p><b>Click the icons below to contact me!</b></p> <a class="nostyle" target="_blank" href="https://www.linkedin.com/in/akhk1/"><img class="icon" src="images/linkedin.png" alt="LN"></a> <a class="nostyle" href="mailto:akothapalli31@gatech.edu?subject=Akhil&body=Hi Akhil, I got your email from your website!"><img class="icon" src="images/gmail.png" alt="GM"></a> <a class="nostyle" target="_blank" href="https://github.com/kakhil2004"><img class="icon" src="images/github.png" alt="GH"></a> <a class="nostyle" target="_blank" href="https://twitter.com/kakhil2004tech"><img class="icon" src="images/twitter.png" alt="X"></a></div></div></div></div> <hr id="proj"> <hr> <div class="page-container"><h2 style="text-align: center;" data-svelte-h="svelte-1vtnekl">Projects</h2> <p style="text-align: center;" data-svelte-h="svelte-1bj39nv">Hover over the boxes and click on the  <mark style="background-color: lightgreen; color:white;">green</mark> ones!</p> ${validate_component(BoxContainer, "BoxContainer").$$render($$result, { data: proj }, {}, {})}</div> <hr id="skill"> <hr> <div class="page-container"><h2 style="text-align: center;" data-svelte-h="svelte-n7npol">Skills</h2> <p style="text-align: center;" data-svelte-h="svelte-1cqnyex">Hover over a box to see how recently I used the skill! Green - Recent, Yellow - A little while ago</p> <h5 style="" data-svelte-h="svelte-1xt3awh">Programming Languages &amp; Database</h5> ${validate_component(TinyContainer, "TinyContainer").$$render(
    $$result,
    {
      data: [
        {
          "header": "Python",
          "color": "lightgreen"
        },
        {
          "header": "Javascript",
          "color": "lightgreen"
        },
        { "header": "C/C++", "color": "lightgreen" },
        { "header": "Java", "color": "lightgreen" },
        {
          "header": "SQL (MySQL)",
          "color": "lightgreen"
        },
        { "header": "R", "color": "yellow" }
      ]
    },
    {},
    {}
  )} <h5 style="" data-svelte-h="svelte-5zurt5">Frameworks</h5> ${validate_component(TinyContainer, "TinyContainer").$$render(
    $$result,
    {
      data: [
        {
          "header": "Svelte",
          "color": "lightgreen"
        },
        { "header": "Flask", "color": "lightgreen" },
        { "header": "React.js", "color": "yellow" },
        { "header": "Open-CV", "color": "yellow" },
        {
          "header": "Requests (APIs)",
          "color": "yellow"
        }
      ]
    },
    {},
    {}
  )} <h5 style="" data-svelte-h="svelte-146ko23">Tools</h5> ${validate_component(TinyContainer, "TinyContainer").$$render(
    $$result,
    {
      data: [
        {
          "header": "RStudio",
          "color": "lightgreen"
        },
        { "header": "ROS", "color": "lightgreen" },
        { "header": "Git", "color": "lightgreen" },
        {
          "header": "Docker",
          "color": "lightgreen"
        },
        {
          "header": "Andriod Studio",
          "color": "yellow"
        },
        {
          "header": "Kubernetes",
          "color": "yellow"
        }
      ]
    },
    {},
    {}
  )}</div> <hr id="exp"> <hr>  <button id="scrollToTopBtn" data-svelte-h="svelte-ne12jy">Top</button> <div id="popup" class="popup" data-svelte-h="svelte-1irpnyi"><div class="popup-content"><span class="close" id="closePopup">×</span> <h3>Boxes</h3> <p>Below for each section you will see boxes. Hover over them! If it turns <span style="color:green">green</span> then you can click on it for a cool description of that item.
				If it is <span style="color:lightblue">blue</span> then it has a link which leaves this page. If it doesn&#39;t light up, then my resume covers it enough OR I will add a page soon.

				Also for projects, look under the name to see <b>KEYWORDS</b> of what the project is about</p> <h3>Top button</h3> <p>Use the little &quot;Top&quot; button in the corner to scroll back to the top</p></div></div> <script data-svelte-h="svelte-mg5rox">window.onscroll = function() {scrollFunction()};


	function test(link) {
		window.location.href = link;
	}
		
	
	function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("scrollToTopBtn").style.display = "block";
	} else {
		document.getElementById("scrollToTopBtn").style.display = "none";
	}
		}

		document.getElementById("scrollToTopBtn").addEventListener("click", function() {
			console.log("Hello")
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		});

		// Get the popup and close button
	var popup = document.getElementById("popup");
	var closeBtn = document.getElementById("closePopup");
	var openBtn = document.getElementById("openPopup");
	
	// Open the popup when the button is clicked
	openBtn.onclick = function() {
		popup.style.display = "block";
	}
	
	// Close the popup when the close button is clicked
	closeBtn.onclick = function() {
		popup.style.display = "none";
	}
	
	// Close the popup when clicking outside of it
	window.onclick = function(event) {
		if (event.target == popup) {
		popup.style.display = "none";
		}
	}<\/script></section>`;
});
export {
  Page as default
};
