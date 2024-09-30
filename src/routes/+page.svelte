<script>
	import BoxContainer from "$lib/BoxContainer.svelte";
	import TinyContainer from "$lib/TinyContainer.svelte";
	import { base } from '$app/paths';
	let exp = [
		{
			"header" : "Teaching Assistant",
			"smallHead" : "Georiga Institute of Technology",
			"para" : "I teach lectures every week to 30+ students, make weekly check-up quizzes for them on Canvas and spend 3 hours of 1-on-1 time every week. This led to me mastering this course",
			"redirect" : "https://csvistool.com/",
			"color" : "lightblue"
		},
		{
			"header" : "Electrical Mentor & Technician",
			"smallHead" : "FRC Team 1683 - Techno Titans",
			"para" : "I spent hours here tutoring students about electrical and programming for FRC and the real world (Microcontrollers & Shields). I was also the first person to be called if the robot ever needed repairs.",
			"redirect" : "https://www.technotitans.org/",
			"color" : "lightblue"
		}
		
		
	]
	let proj = [
		{
			"header" : "Anti-bot",
			"smallHead" : "Javascript, RESTful APIs, Backend",
			"para" : "Stop bots from sending too many requests using browser data and Machine Learning. Based on Akamai and PerimeterX",
			"redirect" : "https://antibot.akhilkothapalli.com/",
			"color" : "lightgreen",
			"sImgSrc" : base  + "/images/antibot/pfp.png"
		},
		{
			"header" : "Home Automation System (NEW)",
			"smallHead" : "Embedded System, Networking, C",
			"para" : "Using the LoRa protocol to transmit data over extreme distances to automate tasks around the house",
			"redirect" : base+"/projects/esp32has",
			"color" : "lightgreen",
			"sImgSrc" : base  + "/images/sig/image.jpg"
		},
		{
			"header" : "Autonomous Vehicles Research",
			"smallHead" : "ROS, Python, C, Git, Linux",
			"para" : "I spend several hours every week working on a cool car that has LIDAR, vision, an NVidia Jetson Nano etc. and I need to make it fully autonmous so it can race in F1Tenth.",
			"redirect" : base+"/exp/aevip",
			"color" : "lightgreen",
			"sImgSrc" : base  +  "/images/aevip/aeCar.jpg"
		},
		{
			"header" : "Transforming Bots Tycoon",
			"smallHead" : "Product, Lua, Game Dev",
			"para" : "A full in-game economy where players can build their base, become robots and protect their land. Made raycasting physics, user data storage solutions etc.",
			"redirect" : base+"/projects/transformers",
			"color" : "lightgreen",
			"sImgSrc" : base  + "/images/trans/transform.gif"
		},
		{
			"header" : "MyFinancePal",
			"smallHead" : "AI, Prompt Engineering, Data Science",
			"para" : "New investors often struggle with tunnel vision, risky choices, and emotions. Our project tackles these by fostering a broad perspective, simplifying metrics, and promoting data-driven decision-making.",
			"redirect" : "https://github.com/ErMa12345/MyFinancePal",
			"color" : "lightblue",
			"sImgSrc" : base  + "/images/mfp.png"
		},
		{
			"header" : "cLLiMate.tech",
			"smallHead" : "Data Science, K-n neighbors",
			"para" : "We believe in tackling climate change by starting with personal awareness, emphasizing the need for reliable climate news sources. That's why we're creating a climate news feed using advanced technology like NLP and machine learning, making it easier to stay informed and understand the impacts of climate change.",
			"redirect" : "https://devpost.com/software/cllimate",
			"color" : "lightblue",
			"sImgSrc" : base  + "/images/climate.png"

		},
		{
			"header" : "OSCAR Notification Bot",
			"smallHead" : "Python, Requests, Chrome DevTools",
			"para" : "Bot that notifies you when a class seat opens on Georgia Tech's system. Almost instant response time. Way faster than courseicle.",
			"redirect" : base+"/projects/oscar",
			"color" : "lightgreen",
			"sImgSrc" : base  +  "/images/oscar/oscarbot.png"

		}
	]


</script>

<svelte:head>
	<title>AK | Home</title>
	<meta name="description" content="Akhil Kothapalli's Portfolio website. Learn so much more about me here!" />
</svelte:head>

<section>
	<div class="page-container" >

		<div class="content-container">
			<div class="image-container">
				<img class="bio" src="images/ak3.jpg" alt="akhil">
			</div>
			<div class="content" style="margin: auto;">
				<p style="margin-bottom: 0px;  text-align: center;">Hello I'm</p>
				<h2 style="margin-top: 0px; text-align: center;">Akhil Kothapalli</h2>
				<p style="text-align: center;">a third-year CS major from Georgia. I enjoy coding and have done all sorts of projects including <b>full-stack web apps, game development and working with embedded systems. Check out my projects below!</b></p>
				<div style="text-align: center;">

					<a class="nostyle" target="_blank" href="https://docs.google.com/document/d/11Y2gMt14k4bMbR54mX4R9Z9txu6dHT7F-S20IIrQ2F4/edit?usp=sharing"><button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;">Resume</h3></button></a>
					<a class="nostyle" target="_blank" id="openPopup"><button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;"> Tutorial of Site</h3></button></a>
					
					
					<br>
					<p><b>Click the icons below to contact me!</b></p>
					<a class="nostyle" target="_blank" href="https://www.linkedin.com/in/akhk1/"><img class="icon"src="images/linkedin.png" alt="LN"></a>
					<a class="nostyle" href="mailto:akothapalli31@gatech.edu?subject=Akhil&body=Hi Akhil, I got your email from your website!"><img class="icon"src="images/gmail.png" alt="GM"></a>
					<a class="nostyle" target="_blank" href="https://github.com/kakhil2004"><img class="icon"src="images/github.png" alt="GH"></a>
					<a class="nostyle" target="_blank" href="https://twitter.com/kakhil2004tech"><img class="icon"src="images/twitter.png" alt="X"></a>

				</div>
			</div>
		</div>
		
	</div>

	<hr id="proj">
	<hr>


	<div class="page-container">
		<h2 style="text-align: center;">Projects</h2>
		<p style="text-align: center;">Hover over the boxes and click on the  <mark style="background-color: lightgreen; color:white;">green</mark> ones!</p>
		<BoxContainer data={proj}/>
		
	</div>
	<hr id="skill">
	<hr>

	<div class="page-container">
		<h2 style="text-align: center;">Skills</h2>
		<p style="text-align: center;">Hover over a box to see how recently I used the skill! Green - Recent, Yellow - A little while ago</p>
		<h5 style="">Programming Languages & Database</h5>
		<TinyContainer data={[
			{"header" : "Python","color":"lightgreen"},
			{"header" : "Javascript","color":"lightgreen"},
			{"header" : "C/C++","color":"lightgreen"},
			{"header" : "Java","color":"lightgreen"},
			{"header" : "SQL (MySQL)","color":"lightgreen"},
			{"header" : "R","color":"yellow"},
		
			]}/>
		<h5 style="">Frameworks</h5>
		<TinyContainer data={[
			{"header" : "Svelte","color":"lightgreen"},
			{"header" : "Flask","color":"lightgreen"},
			{"header" : "React.js","color":"yellow"},
			{"header" : "Open-CV","color":"yellow"},
			{"header" : "Requests (APIs)","color":"yellow"},
		
			]}/>
		<h5 style="">Tools</h5>
		<TinyContainer data={[
			{"header" : "RStudio","color":"lightgreen"},
			{"header" : "ROS","color":"lightgreen"},
			{"header" : "Git","color":"lightgreen"},
			{"header" : "Docker","color":"lightgreen"},
			{"header" : "Andriod Studio","color":"yellow"},
			{"header" : "Kubernetes","color":"yellow"},
		
			]}/>
		
		
	</div>
	<hr id="exp">
	<hr>
<!--
<div class="page-container">
	<h2 style="text-align: center;">Experience</h2>
	<BoxContainer data={exp}/>
	
</div>
-->
<button id="scrollToTopBtn">Top</button>

<div id="popup" class="popup">
	<div class="popup-content">
		<span class="close" id="closePopup">&times;</span>
		<h3>
			Boxes
			</h3>
			<p>Below for each section you will see boxes. Hover over them! If it turns <span style="color:green">green</span> then you can click on it for a cool description of that item.
				If it is <span style="color:lightblue">blue</span> then it has a link which leaves this page. If it doesn't light up, then my resume covers it enough OR I will add a page soon.

				Also for projects, look under the name to see <b>KEYWORDS</b> of what the project is about
			</p>
		<h3>
		Top button
		</h3>
		<p>Use the little "Top" button in the corner to scroll back to the top</p>
	</div>
	</div>
	



<script>
	window.onscroll = function() {scrollFunction()};


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


</script>
</section>

