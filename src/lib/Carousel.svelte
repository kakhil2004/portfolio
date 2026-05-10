<script>
	let { images, imageHeight = 150, imageSpacing = 0 } = $props();
</script>

<div class="carousel">
	<div class="carousel__container">
		{#each images as image (image.path)}
			<img
				src={image.path}
				alt={image.alt}
				id={image.id}
				style={`height: ${imageHeight}px; margin-right: ${imageSpacing}px`}
			/>
		{/each}
	</div>
</div>

<style>
	.carousel {
		display: flex;
		overflow-x: auto;
		position: relative;
		width: 100%;
	}
	.carousel__container {
		display: flex;
	}
</style>