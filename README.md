# marketing-website

Static marketing + legal site for WaveCheck — served at **[wavecheck.app](https://wavecheck.app)**.

Plain HTML, no build step. Tailwind is loaded via CDN.

## Pages
- `index.html` — landing page
- `privacy.html`, `terms.html` — legal
- `support.html`, `delete-account.html` — support / account deletion
- `share.html` — deep-link handler for shared posts (`/share/:id` → `wavecheck://post/:id`, with a store fallback)

## Deploy
Hosted on Vercel (project `wave-check-website`), which builds directly from this repo's root.
Routing lives in `vercel.json` (`cleanUrls`, and the `/share/:id → /share` rewrite).
