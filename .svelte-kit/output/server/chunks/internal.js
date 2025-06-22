import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
import "./paths.js";
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
function set_read_implementation(fn) {
}
function set_manifest(_) {
}
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<!DOCTYPE html>\n\n<head>\n	<meta name="viewport" content="width=device-width, initial-scale=1">\n	\n	\n	<title>AK</title>\n</head>\n\n\n\n<style>\n/* Removed body max-width constraint to allow full-width backgrounds */\n\nhtml {\n    scroll-behavior: smooth;\n	font-size: 62.5%;\n	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;\n}\n\nbody {\n  font-size: 1.8rem;\n  line-height: 1.618;\n  margin: auto;\n  color: #4a4a4a;\n  background-color: #f9f9f9;\n  padding: 13px;\n}\n\n@media (max-width: 684px) {\n  body {\n    font-size: 1.53rem;\n  }\n}\n@media (max-width: 382px) {\n  body {\n    font-size: 1.35rem;\n  }\n}\nh1, h2, h3, h4, h5, h6 {\n  line-height: 1.1;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;\n  font-weight: 700;\n  margin-top: 3rem;\n  margin-bottom: 1.5rem;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  word-break: break-word;\n}\n\nh1 {\n  font-size: 2.35em;\n}\n\nh2 {\n  font-size: 2em;\n}\n\nh3 {\n  font-size: 1.75em;\n}\n\nh4 {\n  font-size: 1.5em;\n}\n\nh5 {\n  font-size: 1.25em;\n}\n\nh6 {\n  font-size: 1em;\n}\n\np {\n  margin-top: 0px;\n  margin-bottom: 2.5rem;\n}\n\nsmall, sub, sup {\n  font-size: 75%;\n}\nhr {\n  border-color: #1d7484;\n}\nul {\n  padding-left: 1.4em;\n  margin-top: 0px;\n  margin-bottom: 2.5rem;\n}\n\nli {\n  margin-bottom: 0.4em;\n}\n\nblockquote {\n  margin-left: 0px;\n  margin-right: 0px;\n  padding-left: 1em;\n  padding-top: 0.8em;\n  padding-bottom: 0.8em;\n  padding-right: 0.8em;\n  border-left: 5px solid #1d7484;\n  margin-bottom: 2.5rem;\n  background-color: #f1f1f1;\n}\n\nblockquote p {\n  margin-bottom: 0;\n}\n\nimg, video {\n  height: auto;\n  max-width: 100%;\n  margin-top: 0px;\n  margin-bottom: 2.5rem;\n}\n\n/* Pre and Code */\npre {\n  background-color: #f1f1f1;\n  display: block;\n  padding: 1em;\n  overflow-x: auto;\n  margin-top: 0px;\n  margin-bottom: 2.5rem;\n  font-size: 0.9em;\n}\n\ncode, kbd, samp {\n  font-size: 0.9em;\n  padding: 0 0.5em;\n  background-color: #f1f1f1;\n  white-space: pre-wrap;\n}\n\npre > code {\n  padding: 0;\n  background-color: transparent;\n  white-space: pre;\n  font-size: 1em;\n}\n\n/* Tables */\ntable {\n  text-align: justify;\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 2rem;\n}\n\ntd, th {\n  padding: 0.5em;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n/* Buttons, forms and input */\ninput, textarea {\n  border: 1px solid #4a4a4a;\n}\ninput:focus, textarea:focus {\n  border: 1px solid #1d7484;\n}\n\ntextarea {\n  width: 100%;\n}\n\n.button, button, input[type=submit], input[type=reset], input[type=button], input[type=file]::file-selector-button {\n  display: inline-block;\n  padding: 5px 10px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: #1d7484;\n  color: #f9f9f9;\n  border-radius: 1px;\n  border: 1px solid #1d7484;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button[disabled], button[disabled], input[type=submit][disabled], input[type=reset][disabled], input[type=button][disabled], input[type=file]::file-selector-button[disabled] {\n  cursor: default;\n  opacity: 0.5;\n}\n.button:hover, button:hover, input[type=submit]:hover, input[type=reset]:hover, input[type=button]:hover, input[type=file]::file-selector-button:hover {\n  background-color: #982c61;\n  color: #f9f9f9;\n  outline: 0;\n}\n.button:focus-visible, button:focus-visible, input[type=submit]:focus-visible, input[type=reset]:focus-visible, input[type=button]:focus-visible, input[type=file]::file-selector-button:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n}\n\ntextarea, select, input {\n  color: #4a4a4a;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  margin-bottom: 10px;\n  background-color: #f1f1f1;\n  border: 1px solid #f1f1f1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box;\n}\ntextarea:focus, select:focus, input:focus {\n  border: 1px solid #1d7484;\n  outline: 0;\n}\n\ninput[type=checkbox]:focus {\n  outline: 1px dotted #1d7484;\n}\n\nlabel, legend, fieldset {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n\n</style>\n\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets + '/favicon.png" />\n		<meta name="viewport" content="width=device-width" />\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1cuqck1"
};
async function get_hooks() {
  return {};
}
export {
  set_private_env as a,
  prerendering as b,
  set_public_env as c,
  set_safe_public_env as d,
  set_building as e,
  set_manifest as f,
  get_hooks as g,
  set_prerendering as h,
  set_read_implementation as i,
  options as o,
  public_env as p,
  safe_public_env as s
};
