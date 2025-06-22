<script context="module" lang="ts">
	import { browser } from '$app/environment'
	import Device from 'svelte-device-info'
	import { base } from '$app/paths';
	
	let logo = "Akhil Kothapalli"
	if (browser) {
		
		if (Device.isMobile) {
			logo = "AK"
		}

		function sendDiscordNotification(content: string, webhookURL: string) {
			const payload = {
				content: content,
			};

			const options = {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			};

			fetch(webhookURL, options)
				.then(response => {
				if (!response.ok) {
					throw new Error(`Error sending message: ${response.statusText}`);
				}
				console.log('Message sent successfully!');
				})
				.catch(error => {
				console.error('Error:', error);
				});
			}

		let urlParams = new URLSearchParams(window.location.search);
    	let isBeta = urlParams.has('comp');
		if (isBeta) {
			sendDiscordNotification('Visited by - ' + urlParams.get("comp"), 'https://discord.com/api/webhooks/1211865773082157127/tjYNjMYFupGBIdmGQqDIVVzApp3ZzsvRHvxwgVi_OCLPg4RWISiIqL7cYtFrPY8scqkh');
		}
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
		</div>
	  </div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.9);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		z-index: 1000;
		box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
	}

	/* Add a black background color to the top navigation */
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

	/* Style the brand link */
	.brand-link {
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s ease;
	}

	.brand-link:hover {
		transform: scale(1.02);
	}

	/* Style the brand (Akhil Kothapalli) on the left */
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

	/* Right-aligned section inside the top navigation */
	.topnav-right {
		display: flex;
		gap: 5px;
	}

	/* Style the links on the right */
	.topnav-right a {
		text-decoration: none;
		font-size: 17px;
		padding: 14px 16px;
		color: #333;
		font-weight: 500;
		transition: color 0.2s ease;
		border-radius: 6px;
	}

	.topnav-right a:hover {
		color: #4A90E2;
		background: rgba(74, 144, 226, 0.08);
	}

	/* Mobile responsive */
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
