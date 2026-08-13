/**
 * Structural validation for public/assets/data.js
 * Run: npm run check
 *
 * data.js is a plain script of top-level consts (no modules, no build step),
 * so we evaluate it in a sandbox and assert the invariants app.js depends on.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'public/assets/data.js'), 'utf8');

const EXPORTS = ['DAYS', 'NIGHTS', 'PERROOM', 'HOTELS', 'ITEMS', 'SECTIONS', 'PRESETS', 'ACTIVITIES', 'STAY', 'STAYNAME', 'CALMETA', 'SEASONS'];

let D;
try {
  D = new Function(`${src}\nreturn {${EXPORTS.join(',')}};`)();
} catch (e) {
  console.error('✗ data.js failed to evaluate:', e.message);
  process.exit(1);
}

const errors = [];
const warns = [];
const fail = (m) => errors.push(m);
const warn = (m) => warns.push(m);

/* ---- 1. every expected const exists ---- */
for (const k of EXPORTS) if (D[k] === undefined) fail(`missing export: ${k}`);

/* ---- 2. DAYS: 14 days, contiguous, correct 2026 weekdays ---- */
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
if (D.DAYS.length !== 14) fail(`DAYS has ${D.DAYS.length} entries, expected 14`);
D.DAYS.forEach((d, i) => {
  if (d.n !== i + 1) fail(`DAYS[${i}].n is ${d.n}, expected ${i + 1}`);
  const m = d.date.match(/^(\w{3}) (\d{1,2}) (\w{3})$/);
  if (!m) { fail(`Day ${d.n}: date "${d.date}" must look like "Sun 13 Sep"`); return; }
  const real = new Date(Date.UTC(2026, 8, +m[2]));           // September 2026
  if (m[3] !== 'Sep') warn(`Day ${d.n}: month is "${m[3]}" — validator assumes September 2026`);
  else if (DOW[real.getUTCDay()] !== m[1]) fail(`Day ${d.n}: Sep ${m[2]} 2026 is a ${DOW[real.getUTCDay()]}, not ${m[1]}`);
  if (!['A', 'B', 'C', 'D', 'E'].includes(d.grade)) fail(`Day ${d.n}: grade "${d.grade}" must be A–E`);
  if (!d.park || !d.note || !d.hotel) fail(`Day ${d.n}: needs park, note and hotel`);
  if (!Array.isArray(d.sched) || !d.sched.length) fail(`Day ${d.n}: sched is empty`);
});

/* ---- 3. every day is covered by STAY and CALMETA ---- */
const STAYKEYS = ['ua', 'ub', 'w', 'ta', 'tb'];
D.DAYS.forEach((d) => {
  if (!D.STAY[d.n]) fail(`STAY has no entry for day ${d.n}`);
  else if (!STAYKEYS.includes(D.STAY[d.n])) fail(`STAY[${d.n}] = "${D.STAY[d.n]}" — must be one of ${STAYKEYS.join(', ')}`);
  if (!D.CALMETA[d.n]) fail(`CALMETA has no entry for day ${d.n}`);
});

/* ---- 4. every schedule row parses into the hour grid ---- */
const KINDS = ['ride', 'eat', 'pay', 'move', 'show', ''];
D.DAYS.forEach((d) => {
  let prev = -1;
  d.sched.forEach(([time, kind], i) => {
    const m = String(time).match(/^(\d{1,2}):(\d{2}) (AM|PM)$/);
    if (!m) { fail(`Day ${d.n} row ${i}: time "${time}" must look like "8:00 AM"`); return; }
    if (!KINDS.includes(kind)) fail(`Day ${d.n} row ${i}: kind "${kind}" must be one of ${KINDS.filter(Boolean).join(', ')} or ""`);
    let h = +m[1] % 12; if (m[3] === 'PM') h += 12;
    let t = h * 60 + +m[2];
    if (t < 300) t += 1440;                                   // after-midnight rolls forward
    if (t <= prev) fail(`Day ${d.n} row ${i}: "${time}" is not after the previous row — the hour grid needs ascending times`);
    if (t >= 1560) fail(`Day ${d.n} row ${i}: "${time}" falls past 2:00 AM, outside the hour grid`);
    prev = t;
  });
});

/* ---- 5. cost model integrity ---- */
const secIds = D.SECTIONS.map((s) => s.id);
const ids = new Set();
D.ITEMS.forEach((it) => {
  if (ids.has(it.id)) fail(`duplicate ITEM id: ${it.id}`);
  ids.add(it.id);
  if (!secIds.includes(it.s)) fail(`ITEM ${it.id}: section "${it.s}" is not in SECTIONS (${secIds.join(', ')})`);
  if (!it.pp && !it.flat) fail(`ITEM ${it.id}: needs pp or flat`);
  if (it.pp && it.flat) fail(`ITEM ${it.id}: set pp OR flat, not both`);
  ['ic', 'k', 'n', 'd'].forEach((f) => { if (!it[f]) fail(`ITEM ${it.id}: missing ${f}`); });
  if (it.hotelfree && !D.HOTELS[it.hotelfree]) fail(`ITEM ${it.id}: hotelfree "${it.hotelfree}" is not a HOTELS leg`);
});
secIds.forEach((s) => {
  if (!D.ITEMS.some((i) => i.s === s && i.req)) warn(`section "${s}" has no required item — its subtotal can fall to hotel-only`);
});

/* ---- 6. hotels + presets line up ---- */
Object.keys(D.HOTELS).forEach((leg) => {
  if (!(leg in D.NIGHTS)) fail(`HOTELS leg "${leg}" has no NIGHTS entry`);
  const seen = new Set();
  D.HOTELS[leg].forEach((o) => {
    if (seen.has(o.id)) fail(`duplicate hotel id "${o.id}" in leg ${leg}`);
    seen.add(o.id);
    if (typeof o.r !== 'number' || o.r <= 0) fail(`hotel ${o.id}: rate must be a positive number`);
    if (!o.n || !o.d) fail(`hotel ${o.id}: needs n and d`);
  });
});
Object.entries(D.PRESETS).forEach(([name, p]) => {
  Object.entries(p.h).forEach(([leg, id]) => {
    if (!D.HOTELS[leg]) fail(`PRESETS.${name}: unknown leg "${leg}"`);
    else if (!D.HOTELS[leg].some((o) => o.id === id)) fail(`PRESETS.${name}: hotel "${id}" not found in leg ${leg}`);
  });
  Object.keys(D.HOTELS).forEach((leg) => { if (!(leg in p.h)) fail(`PRESETS.${name}: missing hotel for leg "${leg}"`); });
  const refs = [].concat(p.on === 'all' ? [] : (p.on || []), p.except || []);
  refs.forEach((id) => {
    if (!ids.has(id)) fail(`PRESETS.${name}: references unknown item "${id}"`);
    else if (D.ITEMS.find((i) => i.id === id).req) warn(`PRESETS.${name}: lists required item "${id}" — it is always on anyway`);
  });
});
if (!D.PRESETS.recommended) fail('PRESETS.recommended is the landing default and must exist');

/* ---- 7. sanity-price the presets so a typo cannot ship silently ---- */
const price = (party, presetName) => {
  const p = D.PRESETS[presetName];
  const rooms = Math.ceil(party / D.PERROOM);
  const hot = (l) => D.HOTELS[l].find((x) => x.id === p.h[l]);
  const prem = !!hot('main').prem;
  const opt = D.ITEMS.filter((i) => !i.req).map((i) => i.id);
  const off = new Set(p.on === 'all' ? (p.except || []) : opt.filter((id) => !(p.on || []).includes(id)));
  let pp = Object.keys(D.HOTELS).reduce((a, l) => a + hot(l).r * D.NIGHTS[l] * rooms / party, 0);
  D.ITEMS.forEach((i) => {
    const free = i.hotelfree === 'main' && prem;
    if (!(i.req || free || !off.has(i.id)) || free) return;
    pp += (i.pp || 0) + (i.flat || 0) / party;
  });
  return Math.round(pp);
};
const table = Object.keys(D.PRESETS).map((k) => [k, price(4, k)]);
table.forEach(([k, v]) => { if (v < 500 || v > 40000) fail(`preset "${k}" prices at $${v}/person — outside the sane range, check for a typo`); });

/* ---- report ---- */
warns.forEach((w) => console.log(`⚠ ${w}`));
if (errors.length) {
  errors.forEach((e) => console.error(`✗ ${e}`));
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log(`✓ ${D.DAYS.length} days, ${D.ITEMS.length} cost items, ${Object.values(D.HOTELS).flat().length} hotels, ${D.SEASONS.length} seasons, ${D.ACTIVITIES.length} activities`);
console.log(`✓ presets @ 4 travellers — ${table.map(([k, v]) => `${k} $${v.toLocaleString()}`).join(' · ')}`);
