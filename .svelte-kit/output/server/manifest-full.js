export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "simpleport2/_app",
	assets: new Set([".DS_Store",".nojekyll","favicon.png","images/aevip/vid.mp4","images/ak1.png","images/ak2.jpg","images/github.png","images/gmail.png","images/linkedin.png","images/oscar/oscarbot.png","images/oscar/registration.png","images/trans/raycast.png","images/trans/shop.png","images/trans/t1.png","images/trans/transform.gif","images/twitter.png","robots.txt","style.css"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4",".jpg":"image/jpeg",".gif":"image/gif",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.BAJFaLvh.js","app":"_app/immutable/entry/app.CiNaqJHm.js","imports":["_app/immutable/entry/start.BAJFaLvh.js","_app/immutable/chunks/entry.C_QIgPVB.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/paths.DzmvcTKM.js","_app/immutable/entry/app.CiNaqJHm.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Cqvjk_UP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
			__memo(() => import('./nodes/9.js'))
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
				id: "/projects/dellserver",
				pattern: /^\/projects\/dellserver\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects/oscar",
				pattern: /^\/projects\/oscar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects/remotepc",
				pattern: /^\/projects\/remotepc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/projects/transformers",
				pattern: /^\/projects\/transformers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
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
