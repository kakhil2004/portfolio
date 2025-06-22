<script lang="ts">
	import BoxContainer from "$lib/BoxContainer.svelte";
	import { base } from '$app/paths';
	
	let selectedSkills = new Set<string>();
	let allSkills = new Set<string>();
	let filterExpanded = false;
	
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
			"header" : "Rainbox Six Siege Drone",
			"smallHead" : "Python, WebSockets, HTML",
			"para" : "Cool prototype of the drone from Rainbow Six Siege",
			"redirect" : base + "/projects/r6drone",
			"color" : "lightgreen",
			"sImgSrc" : base  + "/images/r6drone/drone.jpg",
			"skills" : ["Python", "WebSockets", "HTML"]
		},
		{
			"header" : "Anti-bot",
			"smallHead" : "Javascript, RESTful APIs, Backend",
			"para" : "Stop bots from sending too many requests using browser data and Machine Learning. Based on Akamai and PerimeterX",
			"redirect" : base + "/projects/antibot",
			"color" : "lightgreen",
			"sImgSrc" : base  + "/images/antibot/pfp.png",
			"skills" : ["Javascript", "RESTful APIs", "Backend", "Machine Learning"]
		},
		{
			"header" : "Home Automation System (NEW)",
			"smallHead" : "Embedded System, Networking, C",
			"para" : "Using the LoRa protocol to transmit data over extreme distances to automate tasks around the house",
			"redirect" : base+"/projects/esp32has",
			"color" : "lightgreen",
			"sImgSrc" : base  + "/images/sig/image.jpg",
			"skills" : ["C/C++", "Embedded Systems", "Networking", "LoRa"]
		},
		{
			"header" : "Autonomous Vehicles Research",
			"smallHead" : "ROS, Python, C, Git, Linux",
			"para" : "I spend several hours every week working on a cool car that has LIDAR, vision, an NVidia Jetson Nano etc. and I need to make it fully autonmous so it can race in F1Tenth.",
			"redirect" : base+"/exp/aevip",
			"color" : "lightgreen",
			"sImgSrc" : base  +  "/images/aevip/aeCar.jpg",
			"skills" : ["Python", "C/C++", "ROS", "Git", "Linux", "Computer Vision", "LIDAR"]
		},
		{
			"header" : "Transforming Bots Tycoon",
			"smallHead" : "Product, Lua, Game Dev",
			"para" : "A full in-game economy where players can build their base, become robots and protect their land. Made raycasting physics, user data storage solutions etc.",
			"redirect" : base+"/projects/transformers",
			"color" : "lightgreen",
			"sImgSrc" : base  + "/images/trans/transform.gif",
			"skills" : ["Lua", "Game Development", "Product Management", "Physics", "User Data Storage"]
		},
		{
			"header" : "MyFinancePal",
			"smallHead" : "AI, Prompt Engineering, Data Science",
			"para" : "New investors often struggle with tunnel vision, risky choices, and emotions. Our project tackles these by fostering a broad perspective, simplifying metrics, and promoting data-driven decision-making.",
			"redirect" : "https://github.com/ErMa12345/MyFinancePal",
			"color" : "lightblue",
			"sImgSrc" : base  + "/images/mfp.png",
			"skills" : ["AI", "Prompt Engineering", "Data Science", "Machine Learning"]
		},
		{
			"header" : "cLLiMate.tech",
			"smallHead" : "Data Science, K-n neighbors",
			"para" : "We believe in tackling climate change by starting with personal awareness, emphasizing the need for reliable climate news sources. That's why we're creating a climate news feed using advanced technology like NLP and machine learning, making it easier to stay informed and understand the impacts of climate change.",
			"redirect" : "https://devpost.com/software/cllimate",
			"color" : "lightblue",
			"sImgSrc" : base  + "/images/climate.png",
			"skills" : ["Data Science", "Machine Learning", "NLP", "K-n neighbors"]

		},
		{
			"header" : "OSCAR Notification Bot",
			"smallHead" : "Python, Requests, Chrome DevTools",
			"para" : "Bot that notifies you when a class seat opens on Georgia Tech's system. Almost instant response time. Way faster than courseicle.",
			"redirect" : base+"/projects/oscar",
			"color" : "lightgreen",
			"sImgSrc" : base  +  "/images/oscar/oscarbot.png",
			"skills" : ["Python", "Requests", "Chrome DevTools", "Automation"]

		}
	]
	
	// Collect all unique skills from projects
	$: {
		allSkills.clear();
		proj.forEach(project => {
			if (project.skills) {
				project.skills.forEach((skill: string) => allSkills.add(skill));
			}
		});
	}
	
	// Filter projects based on selected skills
	$: filteredProjects = selectedSkills.size === 0 
		? proj 
		: proj.filter(project => 
			project.skills && project.skills.some((skill: string) => selectedSkills.has(skill))
		);
	
	function toggleSkill(skill: string) {
		if (selectedSkills.has(skill)) {
			selectedSkills.delete(skill);
		} else {
			selectedSkills.add(skill);
		}
		selectedSkills = selectedSkills; // trigger reactivity
	}
	
	function clearFilters() {
		selectedSkills.clear();
		selectedSkills = selectedSkills; // trigger reactivity
	}

	function toggleFilter() {
		filterExpanded = !filterExpanded;
	}

</script>

<svelte:head>
	<title>AK | Home</title>
	<meta name="description" content="Akhil Kothapalli's Portfolio website. Learn so much more about me here!" />
</svelte:head>

<section>
	<div class="page-container">

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
					<a class="nostyle" target="_blank" href="https://github.com/kakhil2004"><img class="icon"src="images/github.png" alt="GH"></a>
					<a class="nostyle" target="_blank" href="https://twitter.com/kakhil2004tech"><img class="icon"src="images/twitter.png" alt="X"></a>

				</div>
			</div>
		</div>
		
	</div>

	<!-- Invisible anchor for navigation -->
	<div id="proj" style="position: relative; top: -80px; visibility: hidden;"></div>

	<div style="background: #f5f5f5; width: 100vw; margin-left: calc(-50vw + 50%); padding: 40px 0;">
		<div class="page-container" style="max-width: 68%; margin: 0 auto;">
			<h2 style="text-align: center;">Projects</h2>
			<p style="text-align: center;">Hover over the boxes and click on the  <mark style="background-color: lightgreen; color:white;">green</mark> ones!</p>
			
			<!-- Skill Filter Section -->
			<div class="filter-section">
				<div class="filter-toggle" on:click={toggleFilter}>
					<div class="filter-toggle-content">
						<h4>Filter by Skills</h4>
						{#if selectedSkills.size > 0}
							<span class="filter-count">({selectedSkills.size} selected)</span>
						{/if}
					</div>
					<div class="filter-arrow {filterExpanded ? 'expanded' : ''}">▼</div>
				</div>
				
				{#if filterExpanded}
					<div class="filter-content">
						<div class="filter-header">
							{#if selectedSkills.size > 0}
								<button class="clear-filters-btn" on:click={clearFilters}>
									Clear Filters ({selectedSkills.size})
								</button>
							{/if}
						</div>
						<div class="filter-skills">
							{#each Array.from(allSkills) as skill}
								<button 
									class="filter-skill-btn {selectedSkills.has(skill) ? 'active' : ''}"
									on:click={() => toggleSkill(skill)}
								>
									{skill}
								</button>
							{/each}
						</div>
					</div>
				{/if}
			</div>
			
			<BoxContainer data={filteredProjects}/>
		</div>
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

<style>
	.filter-section {
		margin: 30px 0;
		background: #f8f9fa;
		border-radius: 12px;
		border: 1px solid #e9ecef;
		overflow: hidden;
	}

	.filter-toggle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 20px;
		cursor: pointer;
		background: #ffffff;
		border-bottom: 1px solid #e9ecef;
		transition: background-color 0.2s ease;
	}

	.filter-toggle:hover {
		background: #f8f9fa;
	}

	.filter-toggle-content {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.filter-toggle h4 {
		margin: 0;
		color: #495057;
		font-size: 1.1em;
		font-weight: 600;
	}

	.filter-count {
		color: #4A90E2;
		font-size: 0.9em;
		font-weight: 500;
	}

	.filter-arrow {
		font-size: 0.8em;
		color: #6c757d;
		transition: transform 0.3s ease;
	}

	.filter-arrow.expanded {
		transform: rotate(180deg);
	}

	.filter-content {
		padding: 20px;
		animation: slideDown 0.3s ease;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 500px;
		}
	}

	.filter-header {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 15px;
	}

	.clear-filters-btn {
		background: #dc3545;
		color: white;
		border: none;
		padding: 6px 12px;
		border-radius: 6px;
		font-size: 0.9em;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.clear-filters-btn:hover {
		background: #c82333;
	}

	.filter-skills {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.filter-skill-btn {
		background: white;
		border: 2px solid #dee2e6;
		color: #6c757d;
		padding: 6px 12px;
		border-radius: 20px;
		font-size: 0.9em;
		cursor: pointer;
		transition: all 0.2s ease;
		font-weight: 500;
	}

	.filter-skill-btn:hover {
		border-color: #4A90E2;
		color: #4A90E2;
		transform: translateY(-1px);
	}

	.filter-skill-btn.active {
		background: #4A90E2;
		border-color: #4A90E2;
		color: white;
		box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3);
	}

	@media (max-width: 768px) {
		.filter-toggle {
			padding: 12px 15px;
		}

		.filter-content {
			padding: 15px;
		}

		.filter-toggle-content {
			flex-direction: column;
			align-items: flex-start;
			gap: 5px;
		}

		.filter-skills {
			gap: 6px;
		}

		.filter-skill-btn {
			font-size: 0.85em;
			padding: 5px 10px;
		}

		/* Mobile responsive for projects section */
		.page-container {
			max-width: 100% !important;
			margin: 0 auto;
		}

		/* Mobile responsive for intro section */
		.content-container {
			flex-direction: column !important;
			align-items: center;
			gap: 30px;
		}

		.image-container {
			margin-top: 0 !important;
			text-align: center;
		}

		.bio {
			max-width: 250px !important;
			height: auto;
		}

		.content {
			text-align: center;
			padding: 0 20px;
		}
	}
</style>

