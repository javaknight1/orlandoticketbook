# Ultimate Orlando Ticket Book

A single-page static site: a 14-day Orlando theme park itinerary (13–26 September 2026) with an
hour-by-hour schedule, a seasonal guide, and an interactive per-person cost builder.

Deployed to Cloudflare Workers with static assets. **There is no build step and no framework.**

## Run it

```bash
npm install          # only dev dependency is wrangler
npm run dev          # local server at http://localhost:8787
npm run check        # validate data.js — run this before every commit
npm run deploy       # runs check, then wrangler deploy
```

`npm run check` is not optional. The app reads `data.js` at face value and does almost no defensive
checking, so a bad time string or a preset pointing at a deleted item id renders a broken page rather
than throwing. The validator catches those. If you change anything in `data.js`, run it.

## Layout

```
public/
  index.html            page shell — <head>, masthead, empty #tabs and #panels containers
  _headers              cache + security headers (Cloudflare reads this natively)
  assets/
    styles.css          all styling. CSS custom properties at :root
    data.js             ALL content. Plain top-level consts, no exports
    app.js              all rendering and interaction
scripts/validate.mjs    structural checks over data.js
wrangler.jsonc          Cloudflare config
```

`data.js` and `app.js` are loaded as two plain `<script>` tags, in that order, sharing global scope.
They are not modules. Do not add `import`/`export` — it will break the page silently.

**Almost every change belongs in `data.js`.** Reach for `app.js` only when changing how something
renders, and `styles.css` only for visual changes.

## The five tabs

Built in `app.js` in this order. Tab order is nav order.

| Tab | Built from | Notes |
|---|---|---|
| Overview | hardcoded in `app.js` | Framing and rationale. Prose, not data. |
| Calendar | `DAYS`, `CALMETA`, `STAY` | Month grid + two hour-grid schedule charts |
| Guide | `SEASONS`, `ACTIVITIES` | Merged "when to go" + area guide + closures |
| Itinerary | `DAYS` | Day chips; one day rendered at a time by `renderDay(n)` |
| Cost | `HOTELS`, `ITEMS`, `SECTIONS`, `PRESETS`, `NIGHTS`, `PERROOM` | Live builder |

## Data shapes

### `DAYS` — the spine of the site

Feeds the Calendar and Itinerary tabs. Exactly 14 entries; `n` runs 1–14 with no gaps.

```js
{
  n: 8, date: "Sun 20 Sep", park: "Magic Kingdom", grade: "E",
  note: "One-paragraph framing for the day.",
  hotel: "Disney's Grand Floridian Resort & Spa",
  badges: [["b-skip", "LL Premier Pass, ~$349 each"]],   // b-hotel | b-skip | b-extra
  sched: [
    ["9:45 AM", "ride", "Seven Dwarfs Mine Train", "Optional detail line."],
    // [time, kind, title, description?]  — kind: ride|eat|pay|move|show|""
  ]
}
```

Rules the validator enforces, all of which the hour grid depends on:

- `date` is `"Ddd D Mmm"` and **must match the real 2026 weekday**. Sep 13 2026 is a Sunday.
- `sched` times are `"H:MM AM"` and must be **strictly ascending** within a day.
- Times before 5:00 AM are treated as after-midnight and roll to the end of that day's column.
  The grid runs 5:00 AM to 2:00 AM; nothing may fall outside that. Day 6 legitimately ends at 1:15 AM.
- `grade` is A–E. It drives the coupon colour and the "E-ticket" label — E is a headliner day.

Adding or removing a day means also updating `STAY` and `CALMETA`, which are keyed by day number.

### `STAY` — which hotel leg each day belongs to

Drives the calendar shading, the hotel bands and the itinerary day chips. Five values:

| Key | Meaning | Colour |
|---|---|---|
| `ua` | Universal, Epic campus (Helios Grand) | deep rust `--ua` |
| `ub` | Universal, main campus (Premier hotel) | light coral `--ub` |
| `w` | Walt Disney World | purple `--wdw` |
| `ta` / `tb` | Arrival / changeover | teal `--trv` |

`ua` and `ub` are deliberately two different reds. Both signal Universal; the difference signals a
different stay. Keep them distinguishable if you retune the palette.

### `ITEMS`, `HOTELS`, `SECTIONS`, `PRESETS` — the cost model

```js
{ id: 'dllmk', s: 'wdw', ic: '⚡', k: 'Line skip', n: 'Display name',
  d: 'One or two sentences on what it is and the trade-off.',
  pp: 349,            // per person   — use pp OR flat, never both
  flat: 4900,         // whole group  — divided by party size at render
  req: 1,             // locked on, no checkbox
  hotelfree: 'main'   // becomes free when the chosen hotel in that leg has prem: true
}
```

- `s` must be a `SECTIONS` id (`uni` or `wdw`). There is no travel/flights section — it was removed
  deliberately; don't add it back without being asked.
- `id` must be unique across all items and is referenced by `PRESETS`.
- `hotelfree` is the mechanic that makes Express Unlimited free at Universal Premier hotels. When a
  Premier hotel is selected the row shows "Included", locks its checkbox, and contributes zero.

`HOTELS` is keyed by leg (`epic`, `main`, `disney`), each with a matching key in `NIGHTS`. Any hotel
in the `main` leg carrying `prem: true` grants free Express Unlimited.

`PRESETS` — `recommended` is the landing default and must exist.

```js
recommended: { h: {epic:'helios', main:'royal', disney:'wild'},
               on: ['uexp1','dllmk','dllep','dllhs','dllak'] }   // ONLY these optional items on
everything:  { h: {...}, on: 'all', except: ['dllmulti'] }
lean:        { h: {...}, on: [] }                                // required items only
```

The default is intentionally restrained: a good hotel per leg, park tickets, and line-skip.
No VIP tour, no hard-ticket events, no paid experiences. Don't quietly widen it.

## House rules

**Prices.** Real 2026 published rates, per person unless the item says group. Dynamic prices carry a
tilde (`~$349`). Prices go in `data.js` only — never hardcode a figure in prose in `app.js` or
`index.html`, because it will go stale the moment someone edits the builder. The masthead deliberately
shows no total for this reason.

**Prose.** Every item description says what the thing is *and* what it costs you — the trade-off, not
just the feature. Avoid marketing voice. Contractions are fine. Em dashes are used freely; keep them.

**Facts.** Attraction openings, closures and refurbishment dates are load-bearing (the Day 2 / Day 3
ordering exists solely because The Untrainable Dragon closes 15 September). Verify before changing
one, and keep the "Closures to plan around" list in the Guide tab in sync.

**Design.** The visual language is Walt Disney World's original A–E coupon ticket books: cream ticket
stock on deep indigo, perforated scalloped edges (`radial-gradient` on `::before`/`::after`), mono
type for all numerals. The hour-grid chart inverts to a cream "printout" surface on purpose. Type is
Bricolage Grotesque / Instrument Sans / Space Mono. Don't introduce a fourth family.

**Constraints.**
- No frameworks, no bundler, no npm runtime dependencies. Vanilla ES only.
- No `localStorage` or `sessionStorage`.
- Keep `prefers-reduced-motion` honoured and `:focus-visible` outlines intact.
- The cost builder's state lives in one `state` object in `app.js` (`party`, `h`, `off`). It is not
  persisted, and that is fine.

## Common tasks

**Change a hotel price** → the `r` value in `HOTELS`. Nothing else.

**Add a cost item** → append to `ITEMS` with a unique `id`. It appears automatically under its
section. It is off by default unless you add its id to `PRESETS.recommended.on`.

**Retime a day** → edit that day's `sched`. Keep times ascending. The hour-grid block heights derive
from the gap to the next row, so shifting one time resizes its neighbour.

**Add a 15th day** → append to `DAYS`, add `STAY[15]` and `CALMETA[15]`, and extend the leg arrays in
the two `legGrid(...)` calls in `app.js`. The month grid picks it up automatically from the date.

**Move the trip to different dates** → every `DAYS[].date`, the September hardcodes in `app.js`
(`FIRST_DOW`, `DIM`, the month heading and the leg subtitles), the roadbook block, and the validator's
`Date.UTC(2026, 8, ...)`. This is the most invasive change in the repo — grep for `Sep` first.
