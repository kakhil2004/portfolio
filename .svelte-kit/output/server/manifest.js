export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "simpleport2/_app",
	assets: new Set([".DS_Store",".nojekyll","favicon.png","images/ak.png","images/github.png","images/gmail.png","images/linkedin.png","images/oscarbot.png","images/trans/t1.png","images/twitter.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DC_s58y1.js","app":"_app/immutable/entry/app.DEfR6ES8.js","imports":["_app/immutable/entry/start.DC_s58y1.js","_app/immutable/chunks/entry.h9NNbu3L.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/paths.Bp1NgpMZ.js","_app/immutable/entry/app.DEfR6ES8.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.3wbO5xVr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
