export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "simpleport2/_app",
	assets: new Set([".DS_Store",".nojekyll","favicon.png","images/ak.png","images/github.png","images/gmail.png","images/linkedin.png","images/oscarbot.png","images/trans/t1.png","images/twitter.png","robots.txt","style.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.zVmHYRtU.js","app":"_app/immutable/entry/app.DGnLMLwH.js","imports":["_app/immutable/entry/start.zVmHYRtU.js","_app/immutable/chunks/entry.LBLKAapM.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/paths.DpexAEND.js","_app/immutable/entry/app.DGnLMLwH.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.C4tCPUuz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
