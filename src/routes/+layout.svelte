<script>
	import Header from './Header.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link rel="stylesheet" href="{base}/style.css" type="text/css">
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-RQ1FLCMN0B"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-RQ1FLCMN0B');
	</script>
</svelte:head>

<div id="page-container">
	<Header /> 

	<main id="content-wrap">
		<slot />
	</main>

	<footer id="footer">
		<div>
			<p>©2023 Akhil, Powered by SvelteKit. <a href="{base}/about">More about this site</a>  - 1.6</p>
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
		padding-top: 40px;       /* Header height */
		max-width: 68%;
		margin: 0 auto;
	}

	/* Mobile responsive - full width on small screens */
	@media (max-width: 768px) {
		#content-wrap {
			max-width: 100%;
			padding-left: 20px;
			padding-right: 20px;
		}
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