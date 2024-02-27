<script>
	import Carousel from "$lib/Carousel.svelte";
</script>


<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Oscar Class Bot</h1>

	<h3>Why</h3>
	<p>
		I barely had any classes and the Gerogia Tech registration system was super unfair. Coursicle was super slow and would never alert me when a seat opened. I deciced to take
		matters into my own hands and deal with it using my coding skills. 
	</p>

	<Carousel images={
		[
			{
			path: '../images/oscar/registration.png',
			id: '',
			alt: 'Atributo ALT de ejemplo para la imagen #1',
		},
		{
			path: '../images/oscar/oscarbot.png',
			id: '',
			alt: 'Atributo ALT de ejemplo para la imagen #1',
		},
		]
	} imageHeight={300} imageSpacing={4}/>

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
