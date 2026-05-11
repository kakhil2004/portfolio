<script>
  import Carousel from "$lib/Carousel.svelte";

  let metadata = [
    { path: '../images/aevip/aeCar.jpg',     id: '', alt: 'F1TENTH race car with Nvidia Jetson Nano and Hokuyo LIDAR' },
    { path: '../images/aevip/oldCar.jpg',    id: '', alt: 'Earlier car configuration during testing' },
    { path: '../images/aevip/brokenCar.jpg', id: '', alt: 'Car after a rough crash during high-speed testing' },
  ];

  let metadata2 = [
    { path: '../images/aevip/map/1.jpg', id: '', alt: 'Raw PGM map output from Hector SLAM' },
    { path: '../images/aevip/map/2.png', id: '', alt: 'OpenCV segmentation distinguishing walls from driveable surface' },
    { path: '../images/aevip/map/3.png', id: '', alt: 'Sampled candidate points within the driveable surface' },
    { path: '../images/aevip/map/4.png', id: '', alt: 'Directed graph with edges enforcing forward progress' },
    { path: '../images/aevip/map/5.png', id: '', alt: 'Raceline extracted from the directed graph' },
    { path: '../images/aevip/map/6.png', id: '', alt: 'Final raceline overlaid on the track map' },
  ];
</script>


# Autonomous Vehicles Research
**Skills: ROS, Python, C, Linux, Git (version control)**

[Paper (PDF)](../aevip_paper.pdf) &nbsp;·&nbsp; [GitHub](https://github.gatech.edu/dbergman8/racecar_group_2)

## Overview

This is ongoing research at **Georgia Tech's Vertically Integrated Projects (VIP) program** on Active Safety for Autonomous and Semi-Autonomous Vehicles. Each semester builds on the last, working toward a fully autonomous racing pipeline. Over two semesters I progressed from reactive LIDAR-based algorithms to a full mapping and localization pipeline, and then shifted focus to improving lap times through better pure pursuit controllers.

My latest contribution is an **offline adaptive pure pursuit controller** that pre-computes look-ahead distances and velocities from a pre-generated raceline, achieving up to a **62.1% reduction in lap time** over the static baseline.

## Table of Contents
1. [Where it started — RC cars & background](#step-1)
2. [Semester 1 — Reactive algorithms & SLAM experiments](#step-2)
3. [Semester 2 — Full mapping pipeline & first pure pursuit](#step-3)
4. [New work — Dynamic pure pursuit controllers](#step-4)
5. [Results summary](#results)

<div id="step-1"></div>

## 1. Where It Started

I've always been drawn to building things that move on their own. Before joining the VIP program, I built a remote-controlled tank powered by a Raspberry Pi that operated over WebSockets, where Xbox controller signals were sent to a public server and relayed directly to the tank, meaning it could be driven from anywhere in the world with Wi-Fi. It also had a live camera feed.

<div class="video-container">
<iframe src="https://www.youtube.com/embed/Bc-4rDAujwg?si=9hwMYAMt1rRgetfF" title="Remote control tank driven over WebSockets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### The F1TENTH Car

The platform used in the VIP program is on a completely different scale. It features an **Nvidia Jetson Nano**, a **Hokuyo UST-10LX LIDAR**, and a **ZED stereo camera**, and it moves fast enough that crashes are very real. We had large, open lab spaces to test and iterate in.

<Carousel images={metadata} imageHeight=300 imageSpacing=4/>

<div id="step-2"></div>

## 2. Semester 1 — Reactive Algorithms & SLAM Experiments

#### Reactive Controllers

My first semester focused on **Follow the Gap** and the **Disparity Extender**, both reactive algorithms that use LIDAR to find the largest open gap and steer toward it. Since the car has no memory of the track, it recomputes the best direction from scratch every cycle.

Reactive methods work well on simple tracks, but fall apart on more complex geometry. The car commits to a direction too late and hits the wall. A major goal going forward was to move beyond this limitation by giving the car a map it could plan from.

Here's an early wall-following test, one of the first algorithms I wrote:

<div class="video-container">
<iframe src="https://www.youtube.com/embed/N_wLJqZBL7o?si=iilT77tWwscr4pcf" title="Wall following algorithm test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### SLAM & Raceline Generation Experiments

Wanting to go beyond reactive control, I started exploring **Hector SLAM** to build a map. The output was a PGM (black-and-white image) file, which wasn't directly usable for path planning. I designed a pipeline on top of it using OpenCV to extract a driveable raceline:

1. Segment walls vs. driveable surface using OpenCV (images 2–3)
2. Sample candidate waypoints within the driveable surface (image 3)
3. Build a directed graph where edges enforce forward progress (image 4)
4. Trace a raceline through the graph (images 5–6)

*(Images upscaled for readability. Image 1 is the raw SLAM output.)*

<Carousel images={metadata2} imageHeight=300 imageSpacing=4/>

Localization wasn't reliable enough yet to run this on the real car, so by the end of semester 1 we fell back to the reactive gap-following algorithm for the final showcase. It worked by targeting the largest open gap while keeping the car away from walls, scaling speed based on gap distance.

<div class="video-container">
<iframe src="https://www.youtube.com/embed/WMhNEloiu8g?si=aAPgpOKj7BnDcjg9" title="Semester 1 final showcase — Follow the Gap" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div id="step-3"></div>

## 3. Semester 2 — Mapping Pipeline & First Pure Pursuit

Semester 2 focused on getting a reliable end-to-end pipeline working: **SLAM Toolbox** for mapping and localization, then **VipPathOptimization** to turn the occupancy grid into a raceline the car could actually follow. This proved harder than expected, and getting consistent localization took most of the semester.

Once it was working, we implemented our first **pure pursuit controller**: the car picks a look-ahead point on the raceline a fixed distance ahead and steers toward it. It got the car around the track, but with a fixed look-ahead and constant velocity it was clearly the bottleneck.

<div class="video-container">
<iframe src="https://www.youtube.com/embed/ruCTsLBYeas" title="Basic pure pursuit running on a VipPathOptimization raceline" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

The car was doing everything right, it had a map, a raceline, a localization estimate, but the controller wasn't using any of that information to go fast. That was the motivation for the next step.

<div id="step-4"></div>

## 4. New Work — Dynamic Pure Pursuit Controllers

How much can you improve lap times just by making the pure pursuit controller smarter? I designed and evaluated two controllers against a **static baseline** (fixed 1.0 m look-ahead, constant 0.65 m/s).

### Controller 1: Reactive Dynamic Pure Pursuit

This controller computes look-ahead distance and velocity **in real time** based on the curvature of the path ahead. Tighter turns shorten the look-ahead and lower the speed; straighter sections do the opposite.

Curvature κ is estimated at each waypoint using finite-difference approximations, then filtered with a dead zone (κ<sub>deadzone</sub> = 0.5, treating gentle curves as straight) and normalized. Nonlinear scaling functions convert it to control values, square root for look-ahead (less aggressive, preserves stability) and cubic for velocity (aggressive slowdown in tight turns only, fast everywhere else).

Baseline (16.27 s):

<div class="video-container">
<iframe src="https://www.youtube.com/embed/AVKHX7uBw6k" title="Static pure pursuit baseline — test track" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Reactive Dynamic Pure Pursuit (11.87 s, 27% faster):

<div class="video-container">
<iframe src="https://www.youtube.com/embed/Hlp1JhpXb7U" title="Reactive dynamic pure pursuit — test track" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

A key limitation: laps weren't consistent. At higher speeds, small path deviations compound and the car drifts into walls. The velocity profile also collapsed into effectively two states, minimum speed in turns, maximum everywhere else, because the curvature penalty dominated any intermediate values. More fundamentally, this controller still reacts rather than plans. It doesn't take full advantage of already having the map.

### Controller 2: Offline Adaptive Pure Pursuit

This is the main contribution. Instead of computing look-ahead and velocity on the fly, this controller **pre-computes them offline** from the VipPathOptimization raceline before the car runs. The raceline provides position, heading, target velocity, curvature, and wall boundary distances at every waypoint, so the controller already knows the full trajectory ahead of time.

I implemented the **Adaptive Look-Ahead method** from Sukhil & Behl (2021), which evaluates multiple look-ahead candidates at each waypoint against three objectives:
- **Maximum exit velocity**, prefer look-ahead distances that maximize speed through each point
- **Minimum trajectory deviation**, prefer distances that keep the car close to the reference path
- **Convex combination**, β · velocity + (1−β) · deviation, where β is tuned per track geometry

The boundary data also enables a safety shutoff when the car's heading suggests it's about to hit a wall.

#### Circular Track

In the baseline video, notice how much track width the car uses, it's fighting to stay within bounds. The offline controller is noticeably tighter.

Baseline (15.41 s):

<div class="video-container">
<iframe src="https://www.youtube.com/embed/Lbv2fS6zmjo" title="Static baseline — circular track" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Offline Adaptive Pure Pursuit (7.24 s, 53% faster):

<div class="video-container">
<iframe src="https://www.youtube.com/embed/JFAp9mq-_sU" title="Offline adaptive pure pursuit — circular track" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Track with Straightaways

Baseline (21.8 s):

<div class="video-container">
<iframe src="https://www.youtube.com/embed/Eo1Fud_wKqs" title="Static baseline — straightaway track" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Offline Adaptive Pure Pursuit (8.25 s, 62% faster):

<div class="video-container">
<iframe src="https://www.youtube.com/embed/F9VmR2KpyuU" title="Offline adaptive pure pursuit — straightaway track" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Mixed Track

The static baseline couldn't complete this track without crashing. The offline controller ran it in 6.83 seconds:

<div class="video-container">
<iframe src="https://www.youtube.com/embed/7GKr3Wpc2RY" title="Offline adaptive pure pursuit — mixed track" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div id="results"></div>

## Results Summary

| Track | Static Baseline | Reactive Dynamic PP | Offline Adaptive PP |
|---|---|---|---|
| Test run | 16.27 s | **11.87 s** (↓27%) | — |
| Circular | 15.41 s | — | **7.24 s** (↓53%) |
| Straightaway | 21.80 s | — | **8.25 s** (↓62%) |
| Mixed | DNF | — | **6.83 s** |

## Future Work

- Tuning the offline adaptive controller across more tracks and parameter configurations
- Integrating adaptive look-ahead calculation directly with trajectory optimization, currently they are separate steps which can cause unstable behavior at high-speed entries into tight turns
- Exploring model predictive control (MPC) as a next step beyond pure pursuit
