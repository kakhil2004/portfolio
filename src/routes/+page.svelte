<script lang="ts">
	import BoxContainer from "$lib/BoxContainer.svelte";
	import { projects, experience } from "$lib/data/projects";
	import { base } from '$app/paths';
	import { SvelteSet } from 'svelte/reactivity';

	let selectedSkills = new SvelteSet<string>();
	let filterExpanded = $state(false);
	let showPopup = $state(false);
	let showScrollTop = $state(false);

	function handleScroll() {
		showScrollTop = window.scrollY > 20;
	}

	const allSkills = $derived([...new Set(projects.flatMap(p => p.skills ?? []))]);

	const filteredProjects = $derived(
		selectedSkills.size === 0
			? projects
			: projects.filter(p => p.skills?.some(skill => selectedSkills.has(skill)))
	);

	function toggleSkill(skill: string) {
		if (selectedSkills.has(skill)) {
			selectedSkills.delete(skill);
		} else {
			selectedSkills.add(skill);
		}
	}

	function clearFilters() {
		selectedSkills.clear();
	}

	function scrollToTop() {
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}
</script>

<svelte:window onscroll={handleScroll} />

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
				<p style="text-align: center;">a <b> Software Developer </b> at <b> Amazon Web Services </b>. I graduated with a Bachelors from Georgia Tech. This website showcases all my many projects!</p>
				<div style="text-align: center;">
					<a class="nostyle" target="_blank" href="{base}/resume.pdf">
						<button style="border-radius: 15px; margin-bottom: 30px;"><h3 style="margin: 0px;">Resume</h3></button>
					</a>
					<button style="border-radius: 15px; margin-bottom: 30px;" onclick={() => showPopup = true}>
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

	<div style="background: var(--bg-section); width: 100vw; margin-left: calc(-50vw + 50%); padding: 40px 0;">
		<div class="page-container" style="max-width: 68%; margin: 0 auto;">
			<h2 style="text-align: center;">Projects</h2>
			<p style="text-align: center;">Hover over the boxes and click on the <span style="color: #22c55e; font-weight: 700;">green</span> ones!</p>

			<!-- Skill Filter Section -->
			<div class="filter-section">
				<div class="filter-toggle" onclick={() => filterExpanded = !filterExpanded} role="button" tabindex="0" onkeydown={e => e.key === 'Enter' && (filterExpanded = !filterExpanded)}>
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
								<button class="clear-filters-btn" onclick={clearFilters}>
									Clear Filters ({selectedSkills.size})
								</button>
							{/if}
						</div>
						<div class="filter-skills">
							{#each allSkills as skill}
								<button
									class="filter-skill-btn"
									class:active={selectedSkills.has(skill)}
									onclick={() => toggleSkill(skill)}
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


</section>

{#if showScrollTop}
	<button class="scroll-to-top-btn" onclick={scrollToTop}>Top</button>
{/if}

{#if showPopup}
	<div class="popup" onclick={(e) => { if (e.target === e.currentTarget) showPopup = false; }} onkeydown={e => e.key === 'Escape' && (showPopup = false)} role="dialog" aria-modal="true" tabindex="-1">
		<div class="popup-content">
			<span class="close" onclick={() => showPopup = false} role="button" tabindex="0" onkeydown={e => e.key === 'Enter' && (showPopup = false)}>&times;</span>
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
		background: var(--bg-filter);
		border-radius: 12px;
		border: 1px solid var(--border-ui);
		overflow: hidden;
	}

	.filter-toggle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 20px;
		cursor: pointer;
		background: var(--bg-card);
		border-bottom: 1px solid var(--border-ui);
		transition: background-color 0.2s ease;
	}

	.filter-toggle:hover {
		background: var(--bg-filter);
	}

	.filter-toggle-content {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.filter-toggle h4 {
		margin: 0;
		color: var(--text-filter-label);
		font-size: 1.1em;
		font-weight: 600;
	}

	.filter-count {
		color: var(--accent-blue);
		font-size: 0.9em;
		font-weight: 500;
	}

	.filter-arrow {
		font-size: 0.8em;
		color: var(--text-muted);
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
		background: var(--bg-card);
		border: 2px solid var(--border-ui);
		color: var(--text-muted);
		padding: 6px 12px;
		border-radius: 20px;
		font-size: 0.9em;
		cursor: pointer;
		transition: all 0.2s ease;
		font-weight: 500;
	}

	.filter-skill-btn:hover {
		border-color: var(--accent-blue);
		color: var(--accent-blue);
		transform: translateY(-1px);
	}

	.filter-skill-btn.active {
		background: var(--accent-blue);
		border-color: var(--accent-blue);
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
