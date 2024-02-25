<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data)
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
    

</svelte:head>

<div class="text-column">
	<h1>{data}</h1>

	<h3>In need of an upgrade</h3>
	<p>
		My Raspberry Pi 2 B+ was just not cutting it. It was outdated and I had to order multiple dongles and add-ons to make it work. On top of that, I was running too many applications
		on it, so I needed an upgrade.
	</p>

</div>
