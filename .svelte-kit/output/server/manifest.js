export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/aevip/aeCar.jpg","images/aevip/brokenCar.jpg","images/aevip/map/1.jpg","images/aevip/map/2.png","images/aevip/map/3.png","images/aevip/map/4.png","images/aevip/map/5.png","images/aevip/map/6.png","images/aevip/oldCar.jpg","images/aevip/wallAlgo.png","images/ak1.png","images/ak2.jpg","images/ak3.jpg","images/antibot/pfp.png","images/climate.png","images/github.png","images/gmail.png","images/linkedin.png","images/mfp.png","images/oscar/oscarbot.png","images/oscar/registration.png","images/sig/image.jpg","images/trans/raycast.png","images/trans/shop.png","images/trans/t1.png","images/trans/transform.gif","images/twitter.png","robots.txt","style.css"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.L4xV0UYQ.js","app":"_app/immutable/entry/app.XwmNHG-x.js","imports":["_app/immutable/entry/start.L4xV0UYQ.js","_app/immutable/chunks/entry.BihcFjFf.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/paths.Cg1tXoz-.js","_app/immutable/entry/app.XwmNHG-x.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CUTYeL1M.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
