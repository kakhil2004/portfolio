<script>
  import Carousel from "$lib/Carousel.svelte";
  let metadata = [
			{
			path: '../images/aevip/aeCar.jpg',
			id: '',
			alt: 'Atributo ALT de ejemplo para la imagen #1',
		},
		{
			path: '../images/aevip/oldCar.jpg',
			id: '',
			alt: 'Atributo ALT de ejemplo para la imagen #1',
		},
		{
			path: '../images/aevip/brokenCar.jpg',
			id: '',
			alt: 'Atributo ALT de ejemplo para la imagen #1',
		}
		]
</script>


# Autonomous Vehicles 
**Skills: ROS, Python, C, Linux, Git (version control)**

[Click me for GitHub Link](https://github.gatech.edu/dbergman8/racecar_group_2)

## Why?
I've always loved working on remote control cars and trying to make them autonomous. You can see some of my work for this in my project. 

## High Level Overview
---
1. [Understanding the system](#step-1)
2. [Creating Basic algorithms](#step-2)
3. [Trying to use LIDAR and generating racelines](#step-3)
4. [Showcase](#step-4)

<div id="step-1"></div>

## 1. Understanding the system
---
I have built my own remote control drones in the past. For example, I created a remote control tank that was powered with a Raspberry PI and used WebSockets. My computer would interpret the signals from the Xbox Controller and send them to my public server. Then that would send information directly to the tank and it would move. With this method, the tank would work anywhere in the world as long as it has Wi-Fi. It also had a camera!

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bc-4rDAujwg?si=9hwMYAMt1rRgetfF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### The New Car
The car in my research position (shown below) was on a different scale. It had an **Nvidia Jetson Nano, a high-end LIDAR (Hokuyo UST-10LX), a ZED camera and was really fast**. On top of that we had huge spaces to test the car!

<Carousel images={metadata} imageHeight=300 imageSpacing=4/>


<div id="step-2"></div>

## 2. Creating Basic algorithms
---
#### Understanding the system
This was my first time working with **ROS** so it took a week to understand the master slave system and the relevant nodes. After that I was able to create simple algorithms to get the car moving around a track. Here was a simple wall following algorithm I made!

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/N_wLJqZBL7o?si=iilT77tWwscr4pcf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Research the LoRa protocol

After some research and realizing that the ESP's antenna was just too small, I found the LoRa protocol. Apparently ESP32s without an external antenna could communicate with one another over huge ranges (500 meters). I could not believe it since the regular protocols performed so terribly. 

#### 

<div id="step-3"></div>
<div id="step-4"></div>
