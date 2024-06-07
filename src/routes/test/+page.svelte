<script>
    import ImageContainer from "$lib/ImageContainer.svelte";
	let proj = [
		{
			"header" : "Undergraduate Researcher",
			"smallHead" : "Active Safety for Autonomous and Semi-Autonomous Vehicles",
			"para" : "I spend several hours every week working on a cool car that has LIDAR, vision, an NVidia Jetson Nano etc. and I need to make it fully autonmous so it can race in F1Tenth. Will add a page for this soon!",
			"redirect" : "/exp/aevip",
			"image" : "https://cdn.nextgov.com/media/img/cd/2017/05/03/050317sharkNG/860x394.jpg"
		},
		{
			"header" : "Undergraduate Researcher",
			"smallHead" : "Active Safety for Autonomous and Semi-Autonomous Vehicles",
			"para" : "I spend several hours every week working on a cool car that has LIDAR, vision, an NVidia Jetson Nano etc. and I need to make it fully autonmous so it can race in F1Tenth. Will add a page for this soon!",
			"redirect" : "/exp/aevip",
			"image" : "https://cdn.nextgov.com/media/img/cd/2017/05/03/050317sharkNG/860x394.jpg"
		}

	]
</script>

<svelte:head>
	<title>About this Website</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">

	<ImageContainer data={proj}/>


</div>
