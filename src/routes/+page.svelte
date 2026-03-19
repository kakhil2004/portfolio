<script lang="ts">
	import BoxContainer from "$lib/BoxContainer.svelte";
	import { projects, experience } from "$lib/data/projects";
	import { base } from '$app/paths';

	let selectedSkills = new Set<string>();
	let filterExpanded = false;
	let showPopup = false;
	let showScrollTop = false;

	function handleScroll() {
		showScrollTop = window.scrollY > 20;
	}

	// Collect all unique skills from projects
	$: allSkills = [...new Set(projects.flatMap(p => p.skills ?? []))];

	// Filter projects based on selected skills
	$: filteredProjects = selectedSkills.size === 0
		? projects
		: projects.filter(p => p.skills?.some(skill => selectedSkills.has(skill)));

	function toggleSkill(skill: string) {
		if (selectedSkills.has(skill)) {
			selectedSkills.delete(skill);
		} else {
			selectedSkills.add(skill);
		}
		selectedSkills = selectedSkills; // trigger reactivity
	}

	function clearFilters() {
		selectedSkills = new Set();
	}

	function scrollToTop() {
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}
</script>

<svelte:window on:scroll={handleScroll} />

<svelte:head>
	<title>AK | Home</title>
	<meta name="description" content="Akhil Kothapalli's Portfolio website. Learn so much more about me here!" />
</svelte:head>

<section>
	<div class="page-container">
		<div class="content-container">
			<div class="image-container">
				<img class="bio" src="images/ak3.jpg" alt="Akhil Kothapalli" loading="lazy">
			</div>
			<div class="content" style="margin: auto;">
				<p style="margin-bottom: 0px; text-align: center;">Hello I'm</p>
				<h2 style="margin-top: 0px; text-align: center;">Akhil Kothapalli</h2>
				<p style="text-align: center;">a third-year CS major from Georgia. I enjoy coding and have done all sorts of projects including <b>full-stack web apps, game development and working with embedded systems. Check out my projects below!</b></p>
				<div style="text-align: center;">
					<a class="nostyle" target="_blank" href="https://docs.google.com/document/d/11Y2gMt14k4bMbR54mX4R9Z9txu6dHT7F-S20IIrQ2F4/edit?usp=sharing">
						<button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;">Resume</h3></button>
					</a>
					<button style="border-radius: 15px; margin-bottom: 30px;" on:click={() => showPopup = true}>
						<h3 style="margin: 0px;">Tutorial of Site</h3>
					</button>

					<br>
					<p><b>Click the icons below to contact me!</b></p>
					<a class="nostyle" target="_blank" href="https://www.linkedin.com/in/akhk1/"><img class="icon" src="images/linkedin.png" alt="LinkedIn" loading="lazy"></a>
					<a class="nostyle" target="_blank" href="https://github.com/kakhil2004"><img class="icon" src="images/github.png" alt="GitHub" loading="lazy"></a>
					<a class="nostyle" target="_blank" href="https://twitter.com/kakhil2004tech"><img class="icon" src="images/twitter.png" alt="Twitter/X" loading="lazy"></a>
				</div>
			</div>
		</div>
	</div>

	<!-- Invisible anchor for navigation -->
	<div id="proj" style="position: relative; top: -80px; visibility: hidden;"></div>

	<div style="background: #f5f5f5; width: 100vw; margin-left: calc(-50vw + 50%); padding: 40px 0;">
		<div class="page-container" style="max-width: 68%; margin: 0 auto;">
			<h2 style="text-align: center;">Projects</h2>
			<p style="text-align: center;">Hover over the boxes and click on the <mark style="background-color: lightgreen; color:white;">green</mark> ones!</p>

			<!-- Skill Filter Section -->
			<div class="filter-section">
				<div class="filter-toggle" on:click={() => filterExpanded = !filterExpanded} role="button" tabindex="0" on:keydown={e => e.key === 'Enter' && (filterExpanded = !filterExpanded)}>
					<div class="filter-toggle-content">
						<h4>Filter by Skills</h4>
						{#if selectedSkills.size > 0}
							<span class="filter-count">({selectedSkills.size} selected)</span>
						{/if}
					</div>
					<div class="filter-arrow" class:expanded={filterExpanded}>▼</div>
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
							{#each allSkills as skill}
								<button
									class="filter-skill-btn"
									class:active={selectedSkills.has(skill)}
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
</section>

{#if showScrollTop}
	<button class="scroll-to-top-btn" on:click={scrollToTop}>Top</button>
{/if}

{#if showPopup}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="popup" on:click|self={() => showPopup = false} role="dialog" aria-modal="true">
		<div class="popup-content">
			<span class="close" on:click={() => showPopup = false} role="button" tabindex="0" on:keydown={e => e.key === 'Enter' && (showPopup = false)}>&times;</span>
			<h3>Boxes</h3>
			<p>Below for each section you will see boxes. Hover over them! If it turns <span style="color:green">green</span> then you can click on it for a cool description of that item.
				If it is <span style="color:lightblue">blue</span> then it has a link which leaves this page. If it doesn't light up, then my resume covers it enough OR I will add a page soon.

				Also for projects, look under the name to see <b>KEYWORDS</b> of what the project is about
			</p>
			<h3>Top button</h3>
			<p>Use the little "Top" button in the corner to scroll back to the top</p>
		</div>
	</div>
{/if}

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

	.scroll-to-top-btn {
		display: block;
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 99;
		padding: 10px;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	.scroll-to-top-btn:hover {
		background-color: #0056b3;
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

		.page-container {
			max-width: 100% !important;
			margin: 0 auto;
		}

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
