import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-8o0bw">Anti-bot</h1> <a href="https://antibot.akhilkothapalli.com/" data-svelte-h="svelte-3ua2bc"><button>Check out the Demo!</button></a> <h3 data-svelte-h="svelte-1diyj43">Overview</h3> <p data-svelte-h="svelte-1oneszf">Akhil’s Anti-bot is a lightweight solution designed to detect and block malicious bots by issuing sensor-based and puzzle-based challenges. These challenges help ensure that only legitimate users can access your website, while blocking automated bot attacks like DDoS.</p> <h3 data-svelte-h="svelte-19npr6a">What is it?</h3> <p data-svelte-h="svelte-1pcy9n3">When you access websites, your browser sends <strong>requests</strong> to the server to retrieve data. This is similar to a REST API, where a project might fetch weather information or other data. However, bots can abuse this system for malicious purposes, such as launching Distributed Denial of Service (DDoS) attacks.</p> <p data-svelte-h="svelte-19zas41">To combat this, anti-bot systems were developed. Companies like Akamai, PerimeterX, Cloudflare, and others implement challenges that only a real browser can solve, effectively blocking bots.</p> <h3 data-svelte-h="svelte-8rbpvv">Akhil’s Anti-bot</h3> <p data-svelte-h="svelte-1w0l7ei">Akhil’s Anti-bot uses two key challenges to determine if the request is coming from a real user:</p> <ol data-svelte-h="svelte-2oru7h"><li><strong>Sensor Data</strong>: Collects detailed information about the device (e.g., screen size, user activity) to verify if it is legitimate or automated. It also tracks your mouse for a little while to see if it is bot like.</li> <li><strong>Math Puzzle</strong>: Issues a puzzle to the user’s device, which must be solved and returned as part of the validation process.</li></ol> <h3 data-svelte-h="svelte-yrj2n">Obfuscation</h3> <p data-svelte-h="svelte-1ygj36o">If you open your browser’s developer tools (F12), you’ll find two scripts: <code>sD.js</code> (for Sensor Data) and <code>puz.js</code> (for the Math Puzzle). Both of these scripts are <strong>obfuscated</strong>, meaning their code has been deliberately made difficult to read, making it harder for bots or malicious users to understand and bypass the challenges.</p> <h3 data-svelte-h="svelte-gso46x">Want to beat it? Here are some hints:</h3> <ol data-svelte-h="svelte-1pozbg9"><li>The obfuscation can be deobfuscated using some online tools &amp; manual work since I didn’t want to make it too tough</li> <li>Sensor Data has been obfuscated using base64 and replacements of some parts of the string</li> <li>I added a rate limit so that <strong>YOU ACTUALLY</strong> try to deobfuscate it rather than brute forcing. You will get a 429 page error</li> <li>If you want to check how many challenges you passed (there are 2), make a request to the “/api/didimakeit” endpoint <strong>WITH</strong> the cookie</li></ol>`;
});
export {
  Page as default
};
