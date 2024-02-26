<script context="module">
	import { browser } from '$app/environment'
	import Device from 'svelte-device-info'
	import { base } from '$app/paths';
	let logo = "Akhil Kothapalli"
	if (browser) {
		console.log("Help")
		if (Device.isMobile) {
			logo = "AK"
		}
		
	}
</script>

<header>
	<div class="topnav">
		<h2 class="brand">{logo}</h2>
		<div class="topnav-right">
		  <a href="{base}/#proj">Projects</a>
		  <a href="{base}/#skill">Skills</a>
		  <a href="{base}/#exp">Experience</a>
		  <a href="{base}/attributions"> Attributions</a>
		</div>
	  </div>
</header>

<style>


/* Add a black background color to the top navigation */
.topnav {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Style the brand (Akhil Kothapalli) on the left */
.topnav .brand {
  font-size: 25px;
  margin: 0;
  padding: 10px 16px;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  display: flex;
}

/* Style the links on the right */
.topnav-right a {
  text-decoration: none;
  font-size: 17px;
  padding: 14px 16px;
}
</style>
