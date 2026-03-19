# Step 2: Remove Discord Tracking & Clean Up Header

## What was done
Removed all Discord webhook visit-tracking code from `Header.svelte`. Also removed the unused `svelte-device-info` import.

## Why
- Discord webhook URL was hardcoded in the public source code — anyone could see it on GitHub and spam the webhook
- Google Analytics already tracks visitors, so the Discord tracking was redundant
- `svelte-device-info` was imported but never used

## Result
`Header.svelte` is now a clean, minimal navigation component with no tracking side-effects.

## Files changed
- Modified: `src/routes/Header.svelte`
- Removed dependency: `svelte-device-info`
