# marketing-website

Marketing + legal site for WaveCheck — served at **[wavecheck.app](https://wavecheck.app)**.

Built with [Astro](https://astro.build) (static output) and Tailwind CSS 4, using [Bun](https://bun.sh).

## Commands
| Command | What it does |
|---|---|
| `bun install` | Install dependencies |
| `bun run dev` | Local dev server with live reload |
| `bun run build` | Type-check (`astro check`) and build the site into `dist/` |
| `bun run preview` | Serve the built `dist/` locally |
| `bun run check:urls` | Confirm every public URL still resolves to a file in `dist/` |

## Structure
- `src/pages/` — one file per page; `src/pages/pt-br/` holds the Portuguese versions
  - `index.astro` — landing page
  - `privacy.astro`, `terms.astro` — legal
  - `support.astro`, `delete-account.astro` — support / account deletion
  - `share.astro` — deep-link handler for shared posts (`/share/:id` → `wavecheck://post/:id`, with a store fallback)
- `src/layouts/Layout.astro` — `<head>`, header and footer shared by every page except `share`
- `src/components/` — header, footer, store buttons, optimized screenshots
- `src/i18n.ts` — header/footer strings for each language
- `public/` — files served as-is at the same URLs (favicon, Open Graph image, logos)

## Deploy
Hosted on Vercel (project `wave-check-website`), which builds directly from this repo's root.
Build settings and routing live in `vercel.json` (`bun run build` → `dist/`, `cleanUrls`, and the `/share/:id → /share` rewrite).

This repo is intentionally **public**: Vercel's Hobby plan can't deploy private repos owned
by an organization. It's a static marketing/legal site with no secrets, so public is fine.
