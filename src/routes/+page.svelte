<script>
	import BoxContainer from "$lib/BoxContainer.svelte";
	import TinyContainer from "$lib/TinyContainer.svelte";
	import { base } from '$app/paths';
	let exp = [
		{
			"header" : "Teaching Assistant",
			"smallHead" : "Georiga Institute of Technology",
			"para" : "I teach lectures every week to 30+ students, make weekly check-up quizzes for them on Canvas and spend 3 hours of 1-on-1 time every week. This led to me mastering this course",
		},
		{
			"header" : "Undergraduate Researcher",
			"smallHead" : "Active Safety for Autonomous and Semi-Autonomous Vehicles",
			"para" : "I spend several hours every week working on a cool car that has LIDAR, vision, an NVidia Jetson Nano etc. and I need to make it fully autonmous so it can race in F1Tenth. Will add a page for this soon!",
		
		},
		{
			"header" : "Electrical Mentor & Technician",
			"smallHead" : "FRC Team 1683 - Techno Titans",
			"para" : "I spent hours here tutoring students about electrical and programming for FRC and the real world (Microcontrollers & Shields). I was also the first person to be called if the robot ever needed repairs.",
		
		}
		
		
	]
	let proj = [
		{
			"header" : "MyFinancePal",
			"smallHead" : "OpenAI, Sentiment Anaylsis,",
			"para" : "New investors often struggle with tunnel vision, risky choices, and emotions. Our project tackles these by fostering a broad perspective, simplifying metrics, and promoting data-driven decision-making.",
			"redirect" : "https://github.com/ErMa12345/MyFinancePal",
			"color" : "lightblue"
		},
		{
			"header" : "cLLiMate.tech",
			"para" : "We believe in tackling climate change by starting with personal awareness, emphasizing the need for reliable climate news sources. That's why we're creating a climate news feed using advanced technology like NLP and machine learning, making it easier to stay informed and understand the impacts of climate change.",
			"redirect" : "https://devpost.com/software/cllimate",
			"color" : "lightblue"
		},
		{
			"header" : "OSCAR Notification Bot",
			"para" : "Bot that notifies you when a class seat opens on Georgia Tech's system. Almost instant response time. Way faster than courseicle.",
			"redirect" : base+"/projects/oscar",
			"color" : "lightgreen"

		},
		{
			"header" : "Transforming Bots Tycoon",
			"para" : "A full in-game economy where players can build their base, become robots and protect their land. Made raycasting physics, user data storage solutions etc.",
			"redirect" : base+"/projects/transformers",
			"color" : "lightgreen"
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
				<img class="bio" src="images/ak.png" alt="akhil">
			</div>
			<div class="content" style="margin: auto;">
				<p style="margin-bottom: 0px;  text-align: center;">Hi I'm</p>
				<h2 style="margin-top: 0px; text-align: center;">Akhil Kothapalli</h2>
				<p style="text-align: center;">a second-year CS major from Georgia. I enjoy coding and have done all sorts of projects from game dev to web apps. Other than that, I love going to the gym and have recently picked up indoor rock climbing (not amazing at it). I'm excited to work with you and hopefully get you to enjoy this course as much as I did!</p>
				<div style="text-align: center;">

					<a class="nostyle" target="_blank" href="https://docs.google.com/document/d/1cx9gJDNv9LRQL82QafHxEocb3PT7T4Hx5ZAaa0BO750/edit?usp=sharing"><button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;">Resume</h3></button></a>
					<a class="nostyle" target="_blank" id="openPopup"><button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;"> Tutorial &#40If first time PLEASE click me&#41</h3></button></a>
					
					
					<br>
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

<div class="page-container">
	<h2 style="text-align: center;">Experience</h2>
	<BoxContainer data={exp}/>
	
</div>

<button id="scrollToTopBtn">Top</button>

<div id="popup" class="popup">
	<div class="popup-content">
		<span class="close" id="closePopup">&times;</span>
		<h3>
			Boxes
			</h3>
			<p>Below for each section you will see boxes. Hover over them! If it turns <span style="color:green">green</span> then you can click on it for a cool description of that item.
				If it is <span style="color:lightblue">blue</span> then it has a link which leaves this page. If it doesn't light up, then my resume covers it enough OR I will add a page soon.
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

	

	function sendDiscordNotification(content, webhookURL) {
  const payload = {
    content: content,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(webhookURL, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error sending message: ${response.statusText}`);
      }
      console.log('Message sent successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


// Example usage:
const webhookURL = 'https://discord.com/api/webhooks/1211865773082157127/tjYNjMYFupGBIdmGQqDIVVzApp3ZzsvRHvxwgVi_OCLPg4RWISiIqL7cYtFrPY8scqkh'; // Replace with your actual webhook URL
const message = 'Someone visited';

sendDiscordNotification(message, webhookURL);
</script>
</section>

