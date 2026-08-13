# Ultimate Orlando Ticket Book

Static single-page itinerary and cost builder for a 14-day Orlando theme park trip,
13–26 September 2026. No build step, no framework.

**Live:** _(add your URL after first deploy)_

## Quick start

```bash
npm install
npm run dev      # http://localhost:8787
npm run check    # validate content
npm run deploy   # ship to Cloudflare
```

## Stack

Vanilla HTML/CSS/JS served by a Cloudflare Worker with static assets.
Wrangler is the only dependency. See `CLAUDE.md` for architecture and editing rules.

## Content

All content lives in `public/assets/data.js`:

| Const | What it drives |
|---|---|
| `DAYS` | 14 days, hour-by-hour. Calendar + Itinerary tabs |
| `STAY`, `CALMETA` | Calendar colour-coding and cell summaries |
| `SEASONS`, `ACTIVITIES` | Guide tab |
| `HOTELS`, `ITEMS`, `SECTIONS`, `PRESETS` | Cost builder |

Run `npm run check` after editing. It verifies weekday alignment, ascending schedule times,
unique item ids, valid preset references, and that each preset prices into a sane range.
