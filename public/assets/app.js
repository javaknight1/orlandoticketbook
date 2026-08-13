/* ---------- render ---------- */
const tabsEl=document.getElementById('tabs'), panelsEl=document.getElementById('panels');
const TAGCLASS={ride:'t-ride',eat:'t-eat',pay:'t-pay',move:'t-move',show:'t-show'};
const TAGTEXT={ride:'Ride',eat:'Eat',pay:'Paid',move:'Move',show:'Show'};
const GRADEDESC={E:'Headliner day',D:'Full day',C:'Half-and-half',B:'Easy day',A:'Travel day'};
const money=n=>'$'+n.toLocaleString('en-US');

function mkTab(id,label){
  const b=document.createElement('button');
  b.className='tab'; b.type='button'; b.role='tab';
  b.setAttribute('aria-selected','false'); b.dataset.target=id; b.textContent=label;
  b.onclick=()=>select(id); tabsEl.appendChild(b); return b;
}
function mkPanel(id){
  const d=document.createElement('section'); d.className='panel'; d.id=id; d.role='tabpanel';
  panelsEl.appendChild(d); return d;
}
function select(id){
  document.querySelectorAll('.tab').forEach(t=>t.setAttribute('aria-selected',String(t.dataset.target===id)));
  document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('on',p.id===id));
  window.scrollTo({top:0,behavior:'instant'});
}

mkTab('ov','Overview');
mkTab('cal','Calendar');
mkTab('guide','Guide');
mkTab('itin','Itinerary');
mkTab('cost','Cost');

/* ================= OVERVIEW ================= */
mkPanel('ov').innerHTML=`
<h3 class="sec">How this trip is built</h3>
<p class="lede">Fourteen days, three hotels, and every line-skip and paid experience worth considering. Universal first while everyone's fresh, Disney second because it's slower and there's more of it. The hotel changes aren't cosmetic &mdash; each one buys you something specific.</p>
<div class="cards">
  <div class="card"><div class="k">Days 1&ndash;3</div><h5>Universal Helios Grand</h5><p>Five-minute walk to the Epic Universe gate and Early Park Admission every morning. You're inside the newest park before the public gets in, without a 6am alarm.</p></div>
  <div class="card"><div class="k">Days 4&ndash;6</div><h5>A Universal Premier hotel</h5><p>Portofino Bay, Hard Rock or Royal Pacific. Free Express Unlimited for everyone in the room, every day of the stay, at Universal Studios and Islands of Adventure. That perk is the whole reason to move.</p></div>
  <div class="card"><div class="k">Days 7&ndash;14</div><h5>A Disney Deluxe resort</h5><p>Wilderness Lodge by default, Grand Floridian if you want the flagship. Boat or monorail to Magic Kingdom either way, and no bus queues at park close.</p></div>
</div>
<h3 class="sec">Why September</h3>
<ul class="plain">
  <li><b>Cheapest Lightning Lane of the year.</b> September weekdays are the lowest-priced dates across all four Disney parks. Magic Kingdom Premier Pass runs closer to $349 than the $419 it hits on peak dates.</li>
  <li><b>Both Halloween events are running</b> &mdash; Halloween Horror Nights at Universal and Mickey's Not-So-Scary at Magic Kingdom. Neither is running in most other months.</li>
  <li><b>Volcano Bay is still open.</b> It closes 26 October 2026 for a long refurbishment and isn't expected back until around April 2027.</li>
  <li><b>The Magic of Disney Animation opens 14 September</b> &mdash; one day after you arrive.</li>
</ul>
<h3 class="sec">The grading system</h3>
<p class="lede">Every day is graded A through E, the way Walt Disney World's original coupon books worked. E was the headliner. That's what the letter on each day's ticket means: how hard the day hits, and how much you should have left in reserve for it.</p>
<div class="note"><b>Where to start:</b> the <b>Calendar</b> shows the whole trip two ways &mdash; a month grid and an hour-by-hour schedule chart. The <b>Itinerary</b> has each day in full. The <b>Cost</b> page is a live builder &mdash; nothing there is fixed except tickets and food.</div>
`;

/* ================= CALENDAR ================= */

/* --- hour-grid schedule chart --- */
const GS=300, GE=1560, RH=16, ROWS=(GE-GS)/15;   /* 5:00 AM to 2:00 AM, 15-min rows */
const BLOCKCLASS={ride:'b-ride',eat:'b-eat',move:'b-move',show:'b-show',pay:'b-pay','':'b-free'};
function parseT(s){
  const m=s.match(/(\d+):(\d+)\s*(AM|PM)/i); if(!m)return null;
  let h=+m[1]%12; if(/pm/i.test(m[3]))h+=12;
  let t=h*60+ +m[2]; if(t<GS)t+=1440; return t;
}
function legGrid(title,sub,dayNums){
  const cols=dayNums.length;
  let out=`<div class="hg-title"><h4>${title}</h4><span>${sub}</span></div><div class="hgwrap"><div class="hg" style="--cols:${cols};--rows:${ROWS};--rh:${RH}px">`;
  out+=`<div class="hg-corner">Time</div>`;
  dayNums.forEach((n,i)=>{
    const d=DAYS.find(x=>x.n===n), p=d.date.split(' ');
    out+=`<div class="hg-head" style="grid-column:${i+2}"><span class="hd-dow">${p[0]}</span><span class="hd-num">${p[1]}</span></div>`;
  });
  for(let t=GS;t<GE;t+=60){
    const r=(t-GS)/15+2, hh=Math.floor((t%1440)/60), lab=(hh%12===0?12:hh%12)+':00 '+(hh<12?'AM':'PM');
    out+=`<div class="hg-time" style="grid-row:${r} / span 4">${lab}</div>`;
    for(let c=0;c<cols;c++)out+=`<div class="hg-cell" style="grid-row:${r} / span 4;grid-column:${c+2}"></div>`;
  }
  dayNums.forEach((n,i)=>{
    const d=DAYS.find(x=>x.n===n);
    const pts=d.sched.map(s=>({t:parseT(s[0]),k:s[1],title:s[2]})).filter(x=>x.t!==null);
    pts.forEach((p,j)=>{
      let end=(j<pts.length-1)?pts[j+1].t:p.t+60;
      if(end<=p.t)end=p.t+60;
      end=Math.min(end,GE);
      const r1=Math.round((p.t-GS)/15)+2, span=Math.max(2,Math.round((end-p.t)/15));
      const txt=p.title.replace(/"/g,'&quot;');
      out+=`<div class="hg-block ${BLOCKCLASS[p.k]||'b-free'}" title="${p.time||''}${txt}" style="grid-column:${i+2};grid-row:${r1} / span ${Math.min(span,ROWS-(r1-2))}"><span>${p.title}</span></div>`;
    });
  });
  return out+'</div></div>';
}

(function(){
  const FIRST_DOW=2, DIM=30, TRIP={};
  DAYS.forEach(d=>{TRIP[+d.date.match(/\d+/)[0]]={d:d,m:CALMETA[d.n]}});
  let cells='';
  for(let i=0;i<FIRST_DOW;i++)cells+='<div class="cd out"></div>';
  for(let day=1;day<=DIM;day++){
    const t=TRIP[day];
    if(!t){cells+=`<div class="cd out"><span class="dn">${day}</span></div>`;continue}
    const st=STAY[t.d.n];
    cells+=`<button type="button" class="cd trip s-${st}" data-go="${t.d.n}">
      <span class="dn">${day}</span>
      <span class="dtag">Day ${t.d.n} \u00b7 ${t.d.grade}-ticket</span>
      <span class="dp">${t.m.i} ${t.m.s}</span>
      <span class="dnote">${t.m.n}</span>
    </button>`;
  }
  mkPanel('cal').innerHTML=`
  <h3 class="sec">The trip at a glance</h3>
  <p class="lede">Fourteen days across two resorts and three hotels. Tap any day in the month grid to open its full itinerary, or read the hour-by-hour chart below it.</p>
  <div class="roadbook">
    <div class="rb-line"><span class="rk">Anchors</span><span class="rv"><b>Untrainable Dragon</b> Sep 14 (closes the 15th)<span class="sep">&middot;</span><b>Halloween Horror Nights</b> Sep 18<span class="sep">&middot;</span><b>Wild Africa Trek</b> Sep 23, 11:20am<span class="sep">&middot;</span><b>Not-So-Scary</b> Sep 24<span class="sep">&middot;</span><b>VIP Tour</b> Sep 25, 9am</span></div>
    <div class="rb-line"><span class="rk">Beds</span><span class="rv">Helios Grand Sep 13&ndash;15<span class="sep">&middot;</span>Universal Premier hotel Sep 16&ndash;18<span class="sep">&middot;</span>Disney Deluxe Sep 19&ndash;25<span class="sep">&middot;</span>Out Sep 26</span></div>
    <div class="rb-line"><span class="rk">Book now</span><span class="rv"><b>Victoria &amp; Albert\u2019s</b> and the <b>VIP Tour</b> open at 60 days and sell out &mdash; 407-560-4033<span class="sep">&middot;</span>Then Savi\u2019s Workshop, Beak &amp; Barrel, Space 220, Oga\u2019s</span></div>
    <div class="rb-line"><span class="rk">Buy ahead</span><span class="rv">Epic Universe Express Pass \u00d7 2 days<span class="sep">&middot;</span>HHN ticket + HHN Express<span class="sep">&middot;</span>Not-So-Scary party ticket<span class="sep">&middot;</span>Both cabanas</span></div>
    <div class="rb-line"><span class="rk">Late nights</span><span class="rv">Sep 18 out past 1am<span class="sep">&middot;</span>Sep 24 out past midnight<span class="sep">&middot;</span>Sep 19 and Sep 16 are the two recovery days built in around them</span></div>
  </div>
  <div class="calhead">
    <h4>September 2026</h4>
    <div class="callegend">
      <span><i class="k-ua"></i>Universal &middot; Epic campus</span>
      <span><i class="k-ub"></i>Universal &middot; main campus</span>
      <span><i class="k-w"></i>Walt Disney World</span>
      <span><i class="k-t"></i>Travel or changeover</span>
    </div>
  </div>
  <div class="dow"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
  <div class="calgrid">${cells}</div>
  <div class="bands">
    <div class="band s-ua" style="flex:3"><b>Universal Helios Grand</b>3 nights &middot; Sep 13&ndash;15 &middot; walk to Epic</div>
    <div class="band s-ub" style="flex:3"><b>Universal Premier hotel</b>3 nights &middot; Sep 16&ndash;18 &middot; free Express Unlimited</div>
    <div class="band s-w" style="flex:7"><b>Disney Deluxe resort</b>7 nights &middot; Sep 19&ndash;25 &middot; boat or monorail to Magic Kingdom</div>
  </div>

  <h3 class="sec">Hour by hour</h3>
  <p class="lede">The same fourteen days as a schedule chart, split into two legs. Blocks are sized to how long each thing actually takes.</p>
  <div class="hglegend">
    <span><i class="b-move"></i>Travel &amp; logistics</span>
    <span><i class="b-ride"></i>Rides &amp; parks</span>
    <span><i class="b-eat"></i>Food &amp; drink</span>
    <span><i class="b-show"></i>Shows &amp; events</span>
    <span><i class="b-pay"></i>Paid extras</span>
    <span><i class="b-free"></i>Free time</span>
  </div>
  ${legGrid('Leg 1 &mdash; Universal Orlando','Sun 13 &ndash; Sat 19 Sep &middot; Epic Universe &times; 2, Volcano Bay, Islands of Adventure, Universal Studios',[1,2,3,4,5,6,7])}
  ${legGrid('Leg 2 &mdash; Walt Disney World','Sun 20 &ndash; Sat 26 Sep &middot; all four parks, Typhoon Lagoon, two hard-ticket nights',[8,9,10,11,12,13,14])}

  <h3 class="sec">How the fourteen days balance</h3>
  <ul class="plain">
    <li><b>Two E-ticket days never sit back to back after a late night.</b> The two hardest nights are Sep 18 (Horror Nights, out past 1am) and Sep 24 (Not-So-Scary, out past midnight). Sep 19 is a no-park transfer day and Sep 25 starts at 9am with a guide doing the walking for you.</li>
    <li><b>Saturday is deliberately parkless.</b> Sep 19 is the resort switch and Disney Springs, because Saturday is the worst day of the week to be inside a gate.</li>
    <li><b>Only two mornings start before 8am</b> &mdash; the two Epic Universe days, and only because the gate is a five-minute walk from your room.</li>
    <li><b>Three water days are spaced out</b> &mdash; Sep 16, Sep 24, and the optional Sep 26 &mdash; so there's a low-intensity day roughly every five days.</li>
  </ul>`;
  document.getElementById('cal').addEventListener('click',e=>{
    const b=e.target.closest('[data-go]'); if(b)goDay(+b.dataset.go);
  });
})();

/* ================= GUIDE ================= */

const pips=(v,cls)=>`<div class="m ${cls}"><div class="ml">${cls==='hi'?'Crowds':cls==='mid'?'Heat':'Cost'}</div><div class="pips">${[1,2,3,4,5].map(i=>`<span class="pip ${i<=v?'f':''}"></span>`).join('')}</div></div>`;
const groups={};
ACTIVITIES.forEach(([k,n,d])=>{(groups[k]=groups[k]||[]).push([n,d])});
mkPanel('guide').innerHTML=`
<h3 class="sec">When to go</h3>
<p class="lede">Orlando has no off-season, only trade-offs. Crowds, heat, price and what's actually running move independently of each other, and no window wins on all four. Here's each one, and what it costs you.</p>
${SEASONS.map(s=>`
<div class="season">
  <div class="season-h"><h4>${s.name}</h4><span class="when">${s.when}</span></div>
  <div class="season-b">
    <div class="meters">${pips(s.crowd,'hi')}${pips(s.heat,'mid')}${pips(s.price,'')}</div>
    <p><span class="lbl">Weather</span>${s.weather}</p>
    <p><span class="lbl">What's running</span>${s.on}</p>
    <p><span class="lbl bad">Watch out for</span>${s.watch}</p>
    <p class="verdict">${s.verdict}</p>
  </div>
</div>`).join('')}
<div class="note"><b>The pick, for this trip:</b> the second half of September. It's the only window where the lowest crowds, the cheapest line-skip pricing, the deepest hotel discounts, both Halloween events, EPCOT Food &amp; Wine and an open Volcano Bay all overlap. The cost is heat and hurricane risk. If you'd rather trade about $3,000&ndash;4,000 of savings and both Halloween events for the best weather of the year, move to the week before Thanksgiving and drop the water park days.</div>

<h3 class="sec">The rest of Orlando</h3>
<p class="lede">Fourteen days is long enough that you'll want at least one afternoon that isn't a theme park. Everything here is within about an hour, and nothing here needs a park ticket.</p>
${Object.entries(groups).map(([k,v])=>`
<h3 class="sec" style="font-size:1.15rem;margin-top:34px">${k}</h3>
<div class="cards">${v.map(([n,d])=>`<div class="card"><h5>${n}</h5><p>${d}</p></div>`).join('')}</div>`).join('')}

<h3 class="sec">Closures to plan around</h3>
<ul class="plain">
  <li><b>Jurassic Park River Adventure</b> is down for refurbishment until 19 November 2026. Islands of Adventure only, and VelociCoaster more than covers for it.</li>
  <li><b>The Untrainable Dragon</b> closes 15&ndash;20 September, which is why Isle of Berk is scheduled for Day 2 rather than Day 3.</li>
  <li><b>Fast &amp; Furious: Supercharged</b> closes permanently 16 August 2026. A new Fast &amp; Furious coaster arrives in 2027.</li>
  <li><b>Carousel of Progress</b> closed 6 July 2026 for a full overhaul, back sometime in 2027.</li>
  <li><b>DinoLand U.S.A.</b> closed permanently 2 February 2026. Tropical Americas replaces it in 2027, with an Indiana Jones ride and an Encanto attraction.</li>
  <li><b>Tom Sawyer Island and the Liberty Square Riverboat</b> are gone for good &mdash; the Rivers of America is being filled in for Villains Land and the Cars-themed Piston Peak. Expect construction walls in Frontierland.</li>
  <li><b>Water parks rotate.</b> Disney typically runs only one of Typhoon Lagoon and Blizzard Beach at a time. Confirm which is operating before you count on the Day 14 option.</li>
</ul>
`;

/* ================= ITINERARY ================= */
mkPanel('itin').innerHTML=`
<div class="daybar" id="daybar" role="tablist">${DAYS.map(d=>`<button type="button" class="dchip s-${STAY[d.n]}" data-day="${d.n}"><b>Day ${d.n}</b><span>${d.date.split(' ').slice(1).join(' ')}</span></button>`).join('')}</div>
<div id="dayBody"></div>`;

function renderDay(n){
  const d=DAYS.find(x=>x.n===n);
  const rows=d.sched.map(([t,k,title,desc])=>`
    <div class="row"><div class="time">${t}</div><div class="what">
      ${k?`<span class="tag ${TAGCLASS[k]}">${TAGTEXT[k]}</span>`:''}<strong>${title}</strong>
      ${desc?`<span class="d">${desc}</span>`:''}
    </div></div>`).join('');
  const badges=d.badges.length?`<div class="badges">${d.badges.map(([c,t])=>`<span class="badge ${c}">${t}</span>`).join('')}</div>`:'';
  document.getElementById('dayBody').innerHTML=`
  <article class="coupon g-${d.grade}">
    <div>
      <div class="cid">Coupon ${String(d.n).padStart(2,'0')} of 14 &middot; ${d.date}</div>
      <h2>${d.park}</h2>
      <p class="cnote">${d.note}</p>
    </div>
    <div class="grade">
      <span class="letter">${d.grade}</span>
      <span class="lbl">${GRADEDESC[d.grade]}</span>
      <span class="admit">Admit All</span>
    </div>
  </article>
  ${badges}
  <div class="note" style="margin-top:0"><b>Sleeping at:</b> ${d.hotel}</div>
  <div class="sched">${rows}</div>
  <div class="daynav">
    ${n>1?`<button type="button" class="dnav" data-day="${n-1}">&larr; Day ${n-1}</button>`:'<span></span>'}
    ${n<14?`<button type="button" class="dnav" data-day="${n+1}">Day ${n+1} &rarr;</button>`:'<span></span>'}
  </div>`;
  document.querySelectorAll('#daybar .dchip').forEach(c=>c.classList.toggle('sel',+c.dataset.day===n));
}
function goDay(n){select('itin');renderDay(n);}
document.getElementById('itin').addEventListener('click',e=>{
  const b=e.target.closest('[data-day]'); if(b)renderDay(+b.dataset.day);
});
renderDay(1);

/* ================= COST ================= */
mkPanel('cost').innerHTML=`
<div class="stickyTot" id="stick">
  <div class="st-main">
    <div class="tl">Per person &middot; 14 days &middot; 9 parks</div>
    <div class="big" id="stPP">$0</div>
  </div>
  <div class="st-side">
    <span class="chip">Trip total <b id="stTot">$0</b></span>
    <span class="chip">&#127906; Universal <b id="stUni">$0</b></span>
    <span class="chip">&#127984; Disney <b id="stWdw">$0</b></span>
    <label class="chip party">Travellers
      <select id="party">${[2,3,4,5,6,7,8,9,10].map(i=>`<option value="${i}"${i===4?' selected':''}>${i}</option>`).join('')}</select>
    </label>
    <span class="chip rooms" id="stRooms">1 room</span>
  </div>
</div>
<h3 class="sec">Build the trip</h3>
<p class="lede">Park tickets and food are locked on. Everything else is a choice. The default is what I'd actually book: a good hotel on each leg, both park tickets, and the line-skip products &mdash; nothing else. Rooms sleep four and split four ways, so party size moves the per-person number a lot. Flights aren't included.</p>
<div class="presets">
  <span class="plabel">Start from</span>
  <button class="pbtn" data-preset="recommended" type="button">Recommended</button>
  <button class="pbtn" data-preset="everything" type="button">Everything</button>
  <button class="pbtn" data-preset="lean" type="button">Tickets only</button>
</div>
<div id="costBody"></div>
<div class="note" style="margin-top:34px"><b>What moves the number most:</b> the Disney hotel, the VIP tour, and Premier Pass across four parks. Premier Pass is the one default here I'd argue about &mdash; it's about $986 a head, and Multi Pass does most of the same job for $132 if you're willing to manage bookings on your phone all day.</div>
`;

const state={party:4,h:Object.assign({},PRESETS.recommended.h),off:new Set()};
const rooms=()=>Math.ceil(state.party/PERROOM);
const hotelOf=leg=>HOTELS[leg].find(x=>x.id===state.h[leg]);
const isFree=it=>it.hotelfree==='main'&&!!hotelOf('main').prem;
const isOn=it=>!!it.req||isFree(it)||!state.off.has(it.id);
const ppOf=it=>(!isOn(it)||isFree(it))?0:((it.pp||0)+(it.flat||0)/state.party);
const hotelPP=leg=>hotelOf(leg).r*NIGHTS[leg]*rooms()/state.party;
const m0=n=>'$'+Math.round(n).toLocaleString('en-US');
const LEGS={uni:['epic','main'],wdw:['disney']};
const LEGNAME={epic:'Epic Universe campus &middot; 3 nights',main:'Main Universal campus &middot; 3 nights',disney:'Walt Disney World &middot; 7 nights'};

function presetOff(p){
  const opt=ITEMS.filter(i=>!i.req).map(i=>i.id);
  if(p.on==='all')return new Set(p.except||[]);
  return new Set(opt.filter(id=>!(p.on||[]).includes(id)));
}
function costBody(){
  return SECTIONS.map(sec=>{
    const hotelRows=(LEGS[sec.id]||[]).map(leg=>`
      <div class="li opt hotelrow">
        <div class="oi">&#127976;</div>
        <div>
          <label class="hlabel" for="sel-${leg}">${LEGNAME[leg]}</label>
          <select class="hsel" id="sel-${leg}" data-leg="${leg}">
            ${HOTELS[leg].map(o=>`<option value="${o.id}"${o.id===state.h[leg]?' selected':''}>${o.n} — ${m0(o.r)}/night</option>`).join('')}
          </select>
          <small id="hd-${leg}"></small>
        </div>
        <div class="amt"><b id="hp-${leg}">$0</b><small id="hg-${leg}"></small></div>
      </div>`).join('');
    const rows=ITEMS.filter(i=>i.s===sec.id).map(it=>`
      <div class="li opt${it.req?' locked':''}" data-row="${it.id}">
        <div class="oi">${it.req?'<span class="lock" title="Required">&#128274;</span>':`<input type="checkbox" id="cb-${it.id}" data-item="${it.id}">`}</div>
        <div>
          <label ${it.req?'':`for="cb-${it.id}"`}><span class="ic">${it.ic}</span><span class="kind">${it.k}</span>${it.n}</label>
          <small>${it.d}</small>
        </div>
        <div class="amt"><b id="ip-${it.id}">$0</b><small>${(it.flat&&!it.pp)?'group rate, split':'per person'}</small></div>
      </div>`).join('');
    return `<div class="cat costsec">
      <div class="cat-h">
        <div><h4>${sec.ic} ${sec.n}</h4><div class="ssub">${sec.sub}</div></div>
        <span class="sum"><b id="sec-${sec.id}">$0</b><small>per person</small></span>
      </div>${hotelRows}${rows}</div>`;
  }).join('');
}
function recalc(){
  const tot={uni:0,wdw:0};
  Object.entries(LEGS).forEach(([s,legs])=>legs.forEach(leg=>{
    const v=hotelPP(leg);tot[s]+=v;
    const e=document.getElementById('hp-'+leg);if(!e)return;
    e.textContent=m0(v);
    document.getElementById('hg-'+leg).textContent=m0(hotelOf(leg).r*NIGHTS[leg]*rooms())+' for '+rooms()+(rooms()===1?' room':' rooms');
    document.getElementById('hd-'+leg).textContent=hotelOf(leg).d;
  }));
  ITEMS.forEach(it=>{
    const on=isOn(it),free=isFree(it);
    tot[it.s]+=ppOf(it);
    const e=document.getElementById('ip-'+it.id);
    if(e){e.textContent=free?'Included':(on?m0(ppOf(it)):'—');e.className=free?'free':(on?'':'muted');}
    const row=document.querySelector('[data-row="'+it.id+'"]');
    if(row)row.classList.toggle('off',!on);
    const cb=document.getElementById('cb-'+it.id);
    if(cb){cb.disabled=free;cb.checked=on;}
  });
  SECTIONS.forEach(s=>{const e=document.getElementById('sec-'+s.id);if(e)e.textContent=m0(tot[s.id])});
  const pp=tot.uni+tot.wdw;
  document.getElementById('stPP').textContent=m0(pp);
  document.getElementById('stTot').textContent=m0(pp*state.party);
  document.getElementById('stUni').textContent=m0(tot.uni);
  document.getElementById('stWdw').textContent=m0(tot.wdw);
  document.getElementById('stRooms').textContent=rooms()+(rooms()===1?' room':' rooms');
}
function paintCosts(){document.getElementById('costBody').innerHTML=costBody();recalc();}
state.off=presetOff(PRESETS.recommended);
paintCosts();
document.getElementById('party').addEventListener('change',e=>{state.party=+e.target.value;recalc()});
document.getElementById('costBody').addEventListener('change',e=>{
  const t=e.target;
  if(t.dataset.leg){state.h[t.dataset.leg]=t.value;recalc();return}
  if(t.dataset.item){t.checked?state.off.delete(t.dataset.item):state.off.add(t.dataset.item);recalc()}
});
document.querySelectorAll('.pbtn').forEach(b=>b.addEventListener('click',()=>{
  const p=PRESETS[b.dataset.preset];
  state.h=Object.assign({},p.h); state.off=presetOff(p);
  document.querySelectorAll('.pbtn').forEach(x=>x.classList.toggle('sel',x===b));
  paintCosts();
}));
document.querySelector('.pbtn[data-preset="recommended"]').classList.add('sel');

select('ov');
document.addEventListener('keydown',e=>{
  if(e.target.closest('input,textarea,select'))return;
  const tabs=[...document.querySelectorAll('.tab')];
  const i=tabs.findIndex(t=>t.getAttribute('aria-selected')==='true');
  if(e.key==='ArrowRight'&&i<tabs.length-1){select(tabs[i+1].dataset.target);tabs[i+1].focus()}
  if(e.key==='ArrowLeft'&&i>0){select(tabs[i-1].dataset.target);tabs[i-1].focus()}
});
