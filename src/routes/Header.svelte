<script lang="ts">
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

	const logo = 'Akhil Kothapalli';

	let isDark = $state(false);

	$effect(() => {
		if (browser) {
			isDark = document.documentElement.getAttribute('data-theme') === 'dark';
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		const theme = isDark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}
</script>

<header>
	<div class="topnav">
		<a href="{base}/" class="brand-link">
			<h2 class="brand">{logo}</h2>
		</a>
		<div class="topnav-right">
			<a href="{base}/#proj">Projects</a>
			<a href="{base}/attributions">Attributions</a>
			<button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
				{#if isDark}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="5"/>
						<line x1="12" y1="1" x2="12" y2="3"/>
						<line x1="12" y1="21" x2="12" y2="23"/>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
						<line x1="1" y1="12" x2="3" y2="12"/>
						<line x1="21" y1="12" x2="23" y2="12"/>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
					</svg>
				{/if}
			</button>
		</div>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: var(--header-bg);
		border-bottom: 1px solid var(--header-border);
		z-index: 1000;
		box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
	}

	.topnav {
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
		height: 60px;
	}

	.brand-link {
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s ease;
	}

	.brand-link:hover {
		transform: scale(1.02);
	}

	.topnav .brand {
		font-size: 25px;
		margin: 0;
		padding: 10px 16px;
		font-weight: 600;
		background: linear-gradient(135deg, #4A90E2, #7B68EE);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		transition: all 0.2s ease;
	}

	.brand-link:hover .brand {
		background: linear-gradient(135deg, #357ABD, #6A5ACD);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.topnav-right {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.topnav-right a {
		text-decoration: none;
		font-size: 17px;
		padding: 14px 16px;
		color: var(--text-nav);
		font-weight: 500;
		transition: color 0.2s ease;
		border-radius: 6px;
	}

	.topnav-right a:hover {
		color: #4A90E2;
		background: rgba(74, 144, 226, 0.08);
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		padding: 0;
		border-radius: 8px;
		background: transparent;
		border: 1px solid var(--border-ui);
		color: var(--text-nav);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.theme-toggle:hover {
		background: rgba(74, 144, 226, 0.08);
		border-color: #4A90E2;
		color: #4A90E2;
	}

	@media (max-width: 768px) {
		.topnav {
			padding: 0 15px;
			height: 55px;
		}

		.topnav .brand {
			font-size: 20px;
			padding: 8px 12px;
		}

		.topnav-right a {
			font-size: 15px;
			padding: 10px 12px;
		}
	}

	@media (max-width: 480px) {
		.topnav {
			height: 50px;
		}

		.topnav .brand {
			font-size: 18px;
			padding: 6px 10px;
		}

		.topnav-right a {
			font-size: 14px;
			padding: 8px 10px;
		}
	}
</style>
