import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../chunks/index.js";
const BoxContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".box-container.svelte-l0ffwe{display:flex;margin-bottom:50px auto;flex-wrap:wrap;justify-content:center;gap:10px;max-height:80%;padding:30px;overflow:auto}.box.svelte-l0ffwe{flex:0 0 calc(27% - 20px);border:3px solid #4A4A4A;border-radius:10px ;padding:20px;font-size:1.5vh;cursor:default}@media(max-width: 768px){.box.svelte-l0ffwe{flex-basis:calc(100% - 20px)}}.box.svelte-l0ffwe:hover{cursor:pointer}",
  map: null
};
const BoxContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="box-container svelte-l0ffwe" style="margin-bottom:40px;">${each(data, (item) => {
    return `${"redirect" in item ? `<div onclick="${"window.location.href = '" + escape(item["redirect"] ? item["redirect"] : "", true) + "'"}" onmouseover="${"this.style.backgroundColor = '" + escape(item["color"] ? item["color"] : "", true) + "'"}" onmouseout="this.style.backgroundColor =''" class="box svelte-l0ffwe">${"onlyH2" in item ? `<h4 style="margin:0px;">${escape(item["header"])}</h4>` : `<h2>${escape(item["header"])}</h2>`}
                
                ${"smallHead" in item ? `<p><b>${escape(item["smallHead"])}</b></p>` : ``}
                ${"para" in item ? `<p>${escape(item["para"])}</p>` : ``}
                
            </div>` : `<div onmouseover="${"this.style.backgroundColor = '" + escape(item["color"] ? item["color"] : "", true) + "'"}" onmouseout="this.style.backgroundColor =''" class="box svelte-l0ffwe">${"onlyH2" in item ? `<h4 style="margin:0px;">${escape(item["header"])}</h4>` : `<h2>${escape(item["header"])}</h2>`}
            
            ${"smallHead" in item ? `<p><b>${escape(item["smallHead"])}</b></p>` : ``}
            ${"para" in item ? `<p>${escape(item["para"])}</p>` : ``}
            
        </div>`}`;
  })}
</div>`;
});
const TinyContainer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tiny-box-container.svelte-c6ewpd{display:flex;margin-bottom:50px auto;flex-wrap:wrap;justify-content:center;gap:10px;max-height:80%;padding:30px;overflow:auto}.tiny-box.svelte-c6ewpd{flex:0 0 calc(15% - 20px);border:3px solid #4A4A4A;border-radius:10px ;padding:20px;font-size:1.5vh;cursor:default}@media(max-width: 768px){.tiny-box.svelte-c6ewpd{flex-basis:calc(100% - 20px)}}.tiny-box.svelte-c6ewpd:hover{cursor:pointer}",
  map: null
};
const TinyContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="tiny-box-container svelte-c6ewpd" style="margin-bottom:40px;">${each(data, (item) => {
    return `<div onmouseover="${"this.style.backgroundColor = '" + escape(item["color"] ? item["color"] : "", true) + "'"}" onmouseout="this.style.backgroundColor =''" class="tiny-box svelte-c6ewpd"><h5 style="margin: 0px;">${escape(item["header"])}</h5>
            
            
        </div>`;
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let exp = [
    {
      "header": "Teaching Assistant",
      "smallHead": "Certified Associates in the CADing software SOLIDWORKS",
      "para": "a second-year CS major from Georgia. I enjoy coding and have done all sorts of projects from game dev to web apps. Other than that, I love going to the gym and have recently picked up indoor rock climbing (not amazing at it). I'm excited to work with you and hopefully get you to enjoy this course as much as I did!"
    },
    {
      "header": "Undergraduate Researcher",
      "smallHead": "Active Safety for Autonomous and Semi-Autonomous Vehicles",
      "para": "a second-year CS major from Georgia. I enjoy coding and have done all sorts of projects from game dev to web apps. Other than that, I love going to the gym and have recently picked up indoor rock climbing (not amazing at it). I'm excited to work with you and hopefully get you to enjoy this course as much as I did!"
    },
    {
      "header": "Hi, I'm Akhil",
      "smallHead": "Certified Associates in the CADing software SOLIDWORKS",
      "para": "a second-year CS major from Georgia. I enjoy coding and have done all sorts of projects from game dev to web apps. Other than that, I love going to the gym and have recently picked up indoor rock climbing (not amazing at it). I'm excited to work with you and hopefully get you to enjoy this course as much as I did!"
    }
  ];
  let proj = [
    {
      "header": "MyFinancePal",
      "para": "New investors often struggle with tunnel vision, risky choices, and emotions. Our project tackles these by fostering a broad perspective, simplifying metrics, and promoting data-driven decision-making.",
      "redirect": "https://github.com/ErMa12345/MyFinancePal",
      "color": "lightblue"
    },
    {
      "header": "cLLiMate.tech",
      "para": "We believe in tackling climate change by starting with personal awareness, emphasizing the need for reliable climate news sources. That's why we're creating a climate news feed using advanced technology like NLP and machine learning, making it easier to stay informed and understand the impacts of climate change.",
      "redirect": "https://devpost.com/software/cllimate",
      "color": "lightblue"
    },
    {
      "header": "OSCAR Notification Bot",
      "para": "Bot that notifies you when a class seat opens on Georgia Tech's system. Almost instant response time. Way faster than courseicle.",
      "redirect": "/projects/remotepc",
      "color": "lightgreen"
    },
    {
      "header": "Transforming Bots Tycoon",
      "para": "A full in-game economy where players can build their base, become robots and protect their land. Made raycasting physics, user data storage solutions etc.",
      "redirect": "/projects/transformers",
      "color": "lightgreen"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-vyda69_START -->${$$result.title = `<title>AK | Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-vyda69_END -->`, ""}

<section><div class="page-container"><div class="content-container"><div class="image-container"><img class="bio" src="images/ak.png" alt="akhil"></div>
			<div class="content" style="margin: auto;"><p style="margin-bottom: 0px; text-align: center;">Hi I&#39;m</p>
				<h2 style="margin-top: 0px; text-align: center;">Akhil Kothapalli</h2>
				<p style="text-align: center;">a second-year CS major from Georgia. I enjoy coding and have done all sorts of projects from game dev to web apps. Other than that, I love going to the gym and have recently picked up indoor rock climbing (not amazing at it). I&#39;m excited to work with you and hopefully get you to enjoy this course as much as I did!</p>
				<div style="text-align: center;"><a class="nostyle" target="_blank" href="https://docs.google.com/document/d/1cx9gJDNv9LRQL82QafHxEocb3PT7T4Hx5ZAaa0BO750/edit?usp=sharing"><button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;">Resume</h3></button></a>
					<a class="nostyle" target="_blank" id="openPopup"><button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;">How to Navigate Site</h3></button></a>
					
					
					<br>
					<a class="nostyle" target="_blank" href="https://www.linkedin.com/in/akhk1/"><img class="icon" src="images/linkedin.png" alt="LN"></a>
					<a class="nostyle" href="mailto:akothapalli31@gatech.edu?subject=Akhil&body=Hi Akhil, I got your email from your website!"><img class="icon" src="images/gmail.png" alt="GM"></a>
					<a class="nostyle" target="_blank" href="https://github.com/kakhil2004"><img class="icon" src="images/github.png" alt="GH"></a>
					<a class="nostyle" target="_blank" href="https://twitter.com/kakhil2004tech"><img class="icon" src="images/twitter.png" alt="X"></a></div></div></div></div>

	<hr id="proj">
	<hr>


	<div class="page-container"><h2 style="text-align: center;">Projects</h2>
		${validate_component(BoxContainer, "BoxContainer").$$render($$result, { data: proj }, {}, {})}</div>
	<hr id="skill">
	<hr>

	<div class="page-container"><h2 style="text-align: center;">Skills</h2>
		<p style="text-align: center;">Hover over a box to see how recently I used the skill!</p>
		<h5 style="">Programming Languages &amp; Database</h5>
		${validate_component(TinyContainer, "TinyContainer").$$render(
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
          "color": "yellow"
        },
        { "header": "R", "color": "yellow" }
      ]
    },
    {},
    {}
  )}
		<h5 style="">Frameworks</h5>
		${validate_component(TinyContainer, "TinyContainer").$$render(
    $$result,
    {
      data: [
        {
          "header": "React.js",
          "color": "lightgreen",
          "onlyH2": true
        },
        {
          "header": "Svelte",
          "color": "lightgreen",
          "onlyH2": true
        },
        {
          "header": "NumPY",
          "color": "lightgreen",
          "onlyH2": true
        },
        {
          "header": "OpenCV",
          "color": "lightgreen",
          "onlyH2": true
        },
        {
          "header": "ROS2",
          "color": "lightgreen",
          "onlyH2": true
        }
      ]
    },
    {},
    {}
  )}
		<h5 style="">Tools</h5>
		${validate_component(TinyContainer, "TinyContainer").$$render(
    $$result,
    {
      data: [
        {
          "header": "React.js",
          "color": "lightgreen",
          "onlyH2": true
        },
        {
          "header": "Svelte",
          "color": "lightgreen",
          "onlyH2": true
        },
        {
          "header": "NumPY",
          "color": "lightgreen",
          "onlyH2": true
        },
        {
          "header": "OpenCV",
          "color": "lightgreen",
          "onlyH2": true
        },
        {
          "header": "ROS2",
          "color": "lightgreen",
          "onlyH2": true
        }
      ]
    },
    {},
    {}
  )}</div>
	<hr id="exp">
	<hr>

<div class="page-container"><h2 style="text-align: center;">Experience</h2>
	${validate_component(BoxContainer, "BoxContainer").$$render($$result, { data: exp }, {}, {})}</div>

<button id="scrollToTopBtn">Top</button>

<div id="popup" class="popup"><div class="popup-content"><span class="close" id="closePopup">×</span>
		<h3>Boxes
			</h3>
			<p>Below for each section you will see boxes. Hover over them! If it turns <span style="color:green">green</span> then CLICK ON IT. If it is 
				<span style="color:lightblue">blue</span> then it has a link which leaves this page. If it doesn&#39;t light up, then my resume covers it enough.
			</p>
		<h3>Top button
		</h3>
		<p>Use the little &quot;Top&quot; button in the corner to scroll back to the top</p></div></div>
	



<script>window.onscroll = function() {scrollFunction()};


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
	}
<\/script></section>`;
});
export {
  Page as default
};
