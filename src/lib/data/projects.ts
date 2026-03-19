import { base } from '$app/paths';

export interface Project {
	header: string;
	smallHead?: string;
	para?: string;
	redirect?: string;
	color?: string;
	sImgSrc?: string;
	skills?: string[];
}

export const projects: Project[] = [
	{
		header: 'Rainbox Six Siege Drone',
		smallHead: 'Python, WebSockets, HTML',
		para: 'Cool prototype of the drone from Rainbow Six Siege',
		redirect: base + '/projects/r6drone',
		color: 'lightgreen',
		sImgSrc: base + '/images/r6drone/drone.jpg',
		skills: ['Python', 'WebSockets', 'HTML']
	},
	{
		header: 'Anti-bot',
		smallHead: 'Javascript, RESTful APIs, Backend',
		para: 'Stop bots from sending too many requests using browser data and Machine Learning. Based on Akamai and PerimeterX',
		redirect: base + '/projects/antibot',
		color: 'lightgreen',
		sImgSrc: base + '/images/antibot/pfp.png',
		skills: ['Javascript', 'RESTful APIs', 'Backend', 'Machine Learning']
	},
	{
		header: 'Home Automation System (NEW)',
		smallHead: 'Embedded System, Networking, C',
		para: 'Using the LoRa protocol to transmit data over extreme distances to automate tasks around the house',
		redirect: base + '/projects/esp32has',
		color: 'lightgreen',
		sImgSrc: base + '/images/sig/image.jpg',
		skills: ['C/C++', 'Embedded Systems', 'Networking', 'LoRa']
	},
	{
		header: 'Autonomous Vehicles Research',
		smallHead: 'ROS, Python, C, Git, Linux',
		para: 'I spend several hours every week working on a cool car that has LIDAR, vision, an NVidia Jetson Nano etc. and I need to make it fully autonmous so it can race in F1Tenth.',
		redirect: base + '/exp/aevip',
		color: 'lightgreen',
		sImgSrc: base + '/images/aevip/aeCar.jpg',
		skills: ['Python', 'C/C++', 'ROS', 'Git', 'Linux', 'Computer Vision', 'LIDAR']
	},
	{
		header: 'Transforming Bots Tycoon',
		smallHead: 'Product, Lua, Game Dev',
		para: 'A full in-game economy where players can build their base, become robots and protect their land. Made raycasting physics, user data storage solutions etc.',
		redirect: base + '/projects/transformers',
		color: 'lightgreen',
		sImgSrc: base + '/images/trans/transform.gif',
		skills: ['Lua', 'Game Development', 'Product Management', 'Physics', 'User Data Storage']
	},
	{
		header: 'MyFinancePal',
		smallHead: 'AI, Prompt Engineering, Data Science',
		para: 'New investors often struggle with tunnel vision, risky choices, and emotions. Our project tackles these by fostering a broad perspective, simplifying metrics, and promoting data-driven decision-making.',
		redirect: 'https://github.com/ErMa12345/MyFinancePal',
		color: 'lightblue',
		sImgSrc: base + '/images/mfp.png',
		skills: ['AI', 'Prompt Engineering', 'Data Science', 'Machine Learning']
	},
	{
		header: 'cLLiMate.tech',
		smallHead: 'Data Science, K-n neighbors',
		para: "We believe in tackling climate change by starting with personal awareness, emphasizing the need for reliable climate news sources. That's why we're creating a climate news feed using advanced technology like NLP and machine learning, making it easier to stay informed and understand the impacts of climate change.",
		redirect: 'https://devpost.com/software/cllimate',
		color: 'lightblue',
		sImgSrc: base + '/images/climate.png',
		skills: ['Data Science', 'Machine Learning', 'NLP', 'K-n neighbors']
	},
	{
		header: 'OSCAR Notification Bot',
		smallHead: 'Python, Requests, Chrome DevTools',
		para: "Bot that notifies you when a class seat opens on Georgia Tech's system. Almost instant response time. Way faster than courseicle.",
		redirect: base + '/projects/oscar',
		color: 'lightgreen',
		sImgSrc: base + '/images/oscar/oscarbot.png',
		skills: ['Python', 'Requests', 'Chrome DevTools', 'Automation']
	}
];

export const experience: Project[] = [
	{
		header: 'Teaching Assistant',
		smallHead: 'Georiga Institute of Technology',
		para: 'I teach lectures every week to 30+ students, make weekly check-up quizzes for them on Canvas and spend 3 hours of 1-on-1 time every week. This led to me mastering this course',
		redirect: 'https://csvistool.com/',
		color: 'lightblue'
	},
	{
		header: 'Electrical Mentor & Technician',
		smallHead: 'FRC Team 1683 - Techno Titans',
		para: 'I spent hours here tutoring students about electrical and programming for FRC and the real world (Microcontrollers & Shields). I was also the first person to be called if the robot ever needed repairs.',
		redirect: 'https://www.technotitans.org/',
		color: 'lightblue'
	}
];
