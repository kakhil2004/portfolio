export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "simpleport2/_app",
	assets: new Set([".DS_Store",".nojekyll","favicon.png","images/ak.png","images/github.png","images/gmail.png","images/linkedin.png","images/oscar/oscarbot.png","images/oscar/registration.png","images/trans/raycast.png","images/trans/shop.png","images/trans/t1.png","images/trans/transform.gif","images/twitter.png","robots.txt","style.css"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.Sr03gQMe.js","app":"_app/immutable/entry/app.xRp4Pkap.js","imports":["_app/immutable/entry/start.Sr03gQMe.js","_app/immutable/chunks/entry.fnUrTfKi.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/paths.CQJUe0yJ.js","_app/immutable/entry/app.xRp4Pkap.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BMg8mb2A.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
