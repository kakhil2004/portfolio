<script>
	import Carousel from "$lib/Carousel.svelte";
</script>


<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Undergradute Research Work</h1>

	<h3>Why?</h3>
	<p>
		I've always loved working on remote control cars and trying to make them autonomous. You can see some of my work for this in my project. 
	</p>


	<video controls>
		<source src="../images/aevip/vid.mp4" type="video/mp4">
	  Your browser does not support the video tag.
	</video>



	<h3>How?</h3>
	<p>
		First using devtools, I looked into the APIs used by the school's registration system and how they fetched class data. Each semester had a special code and that would be passed
		in to an endpoint to fetch all the classes and their CRNs &#40unique id for each class&#41. Then another API that takes in the CRN and returns the number of seats and waitlist 
		seats avaliable. 
	</p>

	<h3>Ethics</h3>
	<p>
		I did wonder if this was ethical and after reading Gerogia Tech's rules, I did not violate any. Also coursicle is an app that does the same thing but on a much larger scale.
		My app is just an improvement of an already existing and widely used software. To further follow the guidelines, I made sure to not use the "registration" endpoint but instead
		the "look up" API.
	</p>

	<h3>Tech Stack</h3>
	<ul>
		<li>Python Requests</li>
		<li>Python Sets</li>
		<li>Beautiful Soup</li>
		<li>Discord.js</li>
		<li>Chrome DevTools</li>
	</ul>

	<h3>Process</h3>
	<p>
		This app is rather simple, so I won't go into too much detail. After anaylzing the end points and looking at what parameters they take in, I replicated everything in Python Requests.
		I then saved the data as a Python set so that I everytime I poll to the server, we can check if the data has been updated using set operations. Then if there is a change, push a 
		notification to discord. 
	</p>


</div>
