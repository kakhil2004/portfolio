<script>
	import Header from './Header.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css" type="text/css">
	<link rel="stylesheet" href="{base}/style.css" type="text/css">
</svelte:head>

<div id="page-container">
	<Header /> 

	<main id="content-wrap">
		<slot />
	</main>

	<footer id="footer">
		<div>
			<p>©2023 Akhil, Powered by SvelteKit. <a href="{base}/about">More about this site</a>  - 1.2.1</p>
		</div>
	</footer>
</div>


<style>
	#page-container {
		position: relative;
		min-height: 98.6vh;
	}

	#content-wrap {
		padding-bottom: 50px;    /* Footer height */
	}

	#footer {
		padding-top: 20px;
		border-top: 2px solid  var(--secondaryColor);
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 50px;            /* Footer height */
		text-align: center;
		font-size: small;
	}

</style>