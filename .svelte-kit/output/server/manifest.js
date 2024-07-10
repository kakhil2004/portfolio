export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio/_app",
	assets: new Set([".DS_Store",".nojekyll","favicon.png","images/aevip/aeCar.jpg","images/aevip/brokenCar.jpg","images/aevip/oldCar.jpg","images/ak1.png","images/ak2.jpg","images/ak3.jpg","images/github.png","images/gmail.png","images/linkedin.png","images/oscar/oscarbot.png","images/oscar/registration.png","images/trans/raycast.png","images/trans/shop.png","images/trans/t1.png","images/trans/transform.gif","images/twitter.png","robots.txt","style.css"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.DuA1QsTR.js","app":"_app/immutable/entry/app.DKsRcfPW.js","imports":["_app/immutable/entry/start.DuA1QsTR.js","_app/immutable/chunks/entry.BBykflhP.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/paths.Dm0SPHx4.js","_app/immutable/entry/app.DKsRcfPW.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.DMVctPuR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
