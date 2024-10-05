# Anti-bot

[Click me for Website Link](https://antibot.akhilkothapalli.com/)

### Overview

Akhil's Anti-bot is a lightweight solution designed to detect and block malicious bots by issuing sensor-based and puzzle-based challenges. These challenges help ensure that only legitimate users can access your website, while blocking automated bot attacks like DDoS.

### What is it?

When you access websites, your browser sends **requests** to the server to retrieve data. This is similar to a REST API, where a project might fetch weather information or other data. However, bots can abuse this system for malicious purposes, such as launching Distributed Denial of Service (DDoS) attacks.

To combat this, anti-bot systems were developed. Companies like Akamai, PerimeterX, Cloudflare, and others implement challenges that only a real browser can solve, effectively blocking bots.

### Akhil's Anti-bot

Akhil's Anti-bot uses two key challenges to determine if the request is coming from a real user:

1. **Sensor Data**: Collects detailed information about the device (e.g., screen size, user activity) to verify if it is legitimate or automated. It also tracks your mouse for a little while to see if it is bot like.
   
2. **Math Puzzle**: Issues a puzzle to the user's device, which must be solved and returned as part of the validation process.

### Obfuscation

If you open your browser's developer tools (F12), you'll find two scripts: `sD.js` (for Sensor Data) and `puz.js` (for the Math Puzzle). Both of these scripts are **obfuscated**, meaning their code has been deliberately made difficult to read, making it harder for bots or malicious users to understand and bypass the challenges.

### Want to beat it? Here are some hints:

1. The obfuscation can be deobfuscated using some online tools & manual work since I didn't want to make it too tough
2. Sensor Data has been obfuscated using base64 and replacements of some parts of the string
3. I added a rate limit so that **YOU ACTUALLY** try to deobfuscate it rather than brute forcing. You will get a 429 page error
4. If you want to check how many challenges you passed (there are 2), make a request to the "/api/didimakeit" endpoint **WITH** the cookie

