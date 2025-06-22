export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/aevip/aeCar.jpg","images/aevip/brokenCar.jpg","images/aevip/map/1.jpg","images/aevip/map/2.png","images/aevip/map/3.png","images/aevip/map/4.png","images/aevip/map/5.png","images/aevip/map/6.png","images/aevip/oldCar.jpg","images/aevip/wallAlgo.png","images/ak1.png","images/ak2.jpg","images/ak3.jpg","images/antibot/pfp.png","images/climate.png","images/github.png","images/gmail.png","images/linkedin.png","images/mfp.png","images/oscar/oscarbot.png","images/oscar/registration.png","images/r6drone/drone.jpg","images/sig/image.jpg","images/trans/raycast.png","images/trans/shop.png","images/trans/t1.png","images/trans/transform.gif","images/twitter.png","robots.txt","style.css"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.CGTULpdf.js","app":"_app/immutable/entry/app.C8HHzMQu.js","imports":["_app/immutable/entry/start.CGTULpdf.js","_app/immutable/chunks/entry.CreEUk8k.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/paths.CwaZEVzh.js","_app/immutable/entry/app.C8HHzMQu.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.DdJWsZXy.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/attributions",
				pattern: /^\/attributions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/exp/aevip",
				pattern: /^\/exp\/aevip\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/antibot",
				pattern: /^\/projects\/antibot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects/dellserver",
				pattern: /^\/projects\/dellserver\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects/esp32has",
				pattern: /^\/projects\/esp32has\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/projects/oscar",
				pattern: /^\/projects\/oscar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/projects/r6drone",
				pattern: /^\/projects\/r6drone\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/projects/remotepc",
				pattern: /^\/projects\/remotepc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/projects/transformers",
				pattern: /^\/projects\/transformers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
