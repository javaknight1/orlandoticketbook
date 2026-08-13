const DAYS = [
{
  n:1, date:"Sun 13 Sep", park:"Arrival & CityWalk", grade:"A",
  note:"Land, drop bags at the Helios Grand, and spend the evening at CityWalk. No park tickets burned today — this is the day you buy Express Passes and Power-Up Bands for tomorrow.",
  hotel:"Universal Helios Grand Hotel — park-view room",
  badges:[],
  sched:[
   ["11:00 AM","move","Land at MCO","Private transfer to the Epic Universe campus, about 25 minutes."],
   ["12:30 PM","move","Check in at Universal Helios Grand","Park-view rooms overlook Celestial Park and cost about $12 more than standard. Take it — you'll watch Stardust Racers from bed."],
   ["1:00 PM","eat","Poolside lunch at the hotel"],
   ["2:30 PM","","Rooftop pool","Recover from the flight. The rooftop deck looks straight into the park you're doing tomorrow."],
   ["4:30 PM","move","Rideshare to CityWalk","The main Universal campus is 1.5 miles west — a separate campus from Epic Universe. About 15 minutes."],
   ["5:30 PM","eat","Toothsome Chocolate Emporium","Steampunk chocolate factory with a full menu and absurd milkshakes. Walk-up waits are long — join the virtual queue when you leave the hotel."],
   ["7:30 PM","","Walk CityWalk","The Cowfish, Voodoo Doughnut, Hard Rock. Low-commitment wander."],
   ["9:00 PM","pay","Housekeeping: buy tomorrow's add-ons","Universal Orlando app — Epic Universe Express Pass for Days 2 and 3, three Power-Up Bands. Express sells out on peak dates; do not leave this to the morning."],
   ["10:30 PM","","Early night","Tomorrow starts at 7:15, which is the earliest wake-up on this whole trip."]
  ]
},
{
  n:2, date:"Mon 14 Sep", park:"Epic Universe", grade:"E",
  note:"Day one of two. Isle of Berk and Super Nintendo World, plus Celestial Park after dark. Berk goes first for a specific reason: The Untrainable Dragon closes for refurbishment on 15 September, so tonight is the last performance before you'd miss it.",
  hotel:"Universal Helios Grand Hotel",
  badges:[["b-hotel","Early Park Admission, 8:00"],["b-skip","Express Pass (single-use)"],["b-extra","Power-Up Bands"]],
  sched:[
   ["7:15 AM","","Wake up, coffee in the room","The gate is a five-minute walk. This is the payoff for staying in the park."],
   ["8:00 AM","move","Early Park Admission","Through the Chronos portal into Celestial Park. Head straight past the fountains."],
   ["8:10 AM","ride","Mario Kart: Bowser's Challenge","The highest-demand ride in the land and the most technically ambitious thing Universal has built. Do it first, standby, before the park fills."],
   ["8:45 AM","ride","Mine-Cart Madness","The sleeper hit of the park — a family coaster that is far better than it needs to be."],
   ["9:15 AM","pay","Activate Power-Up Bands + Yoshi's Adventure","Punch question blocks around the Mushroom Kingdom, collect coins, chase three keys. This is what the $45 band is actually for."],
   ["10:00 AM","ride","Bowser Jr. Shadow Showdown","Unlocked once you've collected three keys. A physical VR duel against the Clown Car."],
   ["10:45 AM","eat","Toadstool Cafe","Mario Burger, and Bowser's Fireball Challenge if someone in the group needs to prove something — it's a one-pound spicy meatball. Mobile-order through the app an hour ahead."],
   ["12:00 PM","move","Portal to Isle of Berk","The largest land in the park and the most complete piece of world-building."],
   ["12:15 PM","ride","Hiccup's Wing Gliders","Express. Best family coaster in the park."],
   ["1:00 PM","ride","Dragon Racer's Rally","The one ride in Epic Universe that does not accept Express Pass. Low capacity — go now while the line is short."],
   ["1:40 PM","ride","Fyre Drill","Interactive boat battle with water cannons. You will get wet, which in September is the point."],
   ["2:30 PM","show","The Untrainable Dragon","A full-size dragon puppet, adapted from Shanghai. Closes for refurbishment tomorrow — this is your only window."],
   ["3:30 PM","eat","Mead Hall snack, then wander Berk","The village detail rewards slow walking."],
   ["4:30 PM","ride","Constellation Carousel, Celestial Park","Deceptively good — the vehicles pitch and rotate."],
   ["5:30 PM","ride","Stardust Racers","Dueling launch coaster and the best thrill ride here. Metal detectors and a strict loose-article policy — phones go in a locker, so plan for it."],
   ["6:30 PM","eat","Dinner at Atlantic","Seafood on the Celestial Park lagoon. Book ahead."],
   ["8:00 PM","show","Celestial Park after dark","The fountain show and the lit portals. The park is designed to be seen at night."],
   ["9:00 PM","ride","Stardust Racers, front row","Second lap, in the dark. Different ride entirely."],
   ["10:00 PM","move","Five-minute walk home","Rooftop bar at Helios if anyone still has legs."]
  ]
},
{
  n:3, date:"Tue 15 Sep", park:"Epic Universe", grade:"E",
  note:"Ministry of Magic and Dark Universe. Battle at the Ministry is the consensus best ride in the park, so it gets the Early Park Admission slot before anything else.",
  hotel:"Universal Helios Grand Hotel",
  badges:[["b-hotel","Early Park Admission, 8:00"],["b-skip","Express Pass (single-use)"],["b-extra","Interactive wands · Monster makeup"]],
  sched:[
   ["7:15 AM","","Wake up","Same drill. Last early start until Disney."],
   ["8:00 AM","move","Early Park Admission → Ministry of Magic portal","1920s Paris on one side, 1990s London on the other."],
   ["8:15 AM","ride","Harry Potter and the Battle at the Ministry","An omnidirectional-lift dark ride through Umbridge's trial. Widely called the best ride Universal has ever built. Use Express here — the standby line balloons by 10am."],
   ["9:15 AM","","Explore Le Cirque Arcanus and the Paris streets","Street performers, shopfronts, the Metro-Floo entrance. Give it real time."],
   ["10:00 AM","pay","Ollivanders + interactive wand","$75 each. The wand triggers about two dozen effects scattered across both halves of the land — genuinely the best interactive-wand implementation on property."],
   ["11:00 AM","eat","Café L'air De La Sirène"],
   ["12:00 PM","move","Portal to Dark Universe","Gothic horror, Universal's classic monsters. The most atmospheric land in Orlando."],
   ["12:15 PM","ride","Monsters Unchained: The Frankenstein Experiment","Express. The most immersive dark ride in the park and genuinely intense."],
   ["1:15 PM","ride","Curse of the Werewolf","Spinning family coaster. Shorter, but the queue theming carries it."],
   ["2:00 PM","pay","Darkmoor Monster Makeup Experience","About $50 each. Professional prosthetic makeup that turns you into a classic Universal monster. You wear it the rest of the day, which is the whole joke."],
   ["3:00 PM","eat","Das Stakehaus","Lunch in full monster makeup."],
   ["4:15 PM","","Burning Blade Tavern","The bar inside a windmill that is on fire. Order the Blood Moon."],
   ["5:00 PM","","Free roam","Express is one use per ride, so it's spent by now. Use Express Pass Now in the app for one-off re-rides at $20–30, or just walk on the second-tier attractions."],
   ["6:30 PM","ride","Battle at the Ministry, second lap","Standby. Worth the wait to catch what you missed."],
   ["8:00 PM","eat","Pizza Moon, Celestial Park"],
   ["9:00 PM","","Last look at all five portals lit","Then home. Sleep in tomorrow."]
  ]
},
{
  n:4, date:"Wed 16 Sep", park:"Volcano Bay", grade:"B",
  note:"A deliberate slow day. Water park, cabana, and the move over to Portofino Bay — which is the single most valuable hotel decision on this trip, because it hands you free Express Unlimited for the next two days.",
  hotel:"→ Loews Portofino Bay Hotel, Club Level",
  badges:[["b-extra","Premium cabana"],["b-hotel","Switch hotels"]],
  sched:[
   ["8:30 AM","","Sleep in","No alarm."],
   ["9:30 AM","eat","Breakfast at the hotel"],
   ["10:00 AM","move","Check out of Helios Grand","Luggage transfers to Portofino Bay — the resorts handle this between properties, so you don't carry anything."],
   ["11:00 AM","pay","Volcano Bay opens — cabana check-in","Premium cabana, roughly $400 for the group. Shaded base, attendant, food service, and a place to leave your things all day."],
   ["11:30 AM","ride","Krakatau Aqua Coaster","The headliner. Linear induction motors push the canoe uphill. Ride it first."],
   ["12:15 PM","ride","Ko'okiri Body Plunge","125 feet through a trapdoor at a 70-degree angle. Ninety seconds of regret and then bragging rights."],
   ["1:00 PM","ride","Kala & Tai Nui Serpentine Body Slides","The twin drop-door slides. Race each other."],
   ["1:45 PM","eat","Lunch delivered to the cabana"],
   ["2:45 PM","ride","Taniwha Tubes + Honu ika Moana","Four tube slide routes plus the multi-person raft."],
   ["3:45 PM","","Kopiko Wai Winding River","Float, recover, do nothing for an hour."],
   ["4:45 PM","ride","Puihi Round Raft Ride + Ohyah and Ohno drop slides","The last big-thrill block of the day."],
   ["5:30 PM","","Waturi Beach wave pool"],
   ["6:30 PM","move","Check in at Loews Portofino Bay — Club Level","Your room key is now an Express Unlimited pass for Universal Studios and Islands of Adventure, for every day of the stay, for everyone in the room. That perk does not extend to Epic Universe, which is why you did Epic first and paid separately."],
   ["7:30 PM","eat","Club lounge, then Bice Ristorante","Northern Italian. The nicest sit-down meal on the Universal side."],
   ["9:30 PM","","Water taxi loop around the harbor","Portofino's harbor at night is the best-looking thing at Universal Orlando."]
  ]
},
{
  n:5, date:"Thu 17 Sep", park:"Islands of Adventure", grade:"E",
  note:"Express Unlimited day — unlimited re-rides on everything, free with the room. The plan is deliberately loose because you can ride VelociCoaster four times if you want to and it costs nothing.",
  hotel:"Loews Portofino Bay Hotel",
  badges:[["b-hotel","Express Unlimited — included"],["b-hotel","Early Park Admission"]],
  sched:[
   ["8:15 AM","eat","Breakfast at Sal's Market Deli"],
   ["9:00 AM","move","Water taxi to CityWalk","Portofino's boat drops you at the park gates. No parking, no bus."],
   ["9:30 AM","move","Early Park Admission → Hogsmeade","Hotel guests get in an hour before the public."],
   ["9:45 AM","ride","Hagrid's Magical Creatures Motorbike Adventure","The longest standby line in Orlando on a normal day. With Express Unlimited it's a non-event."],
   ["10:30 AM","ride","Harry Potter and the Forbidden Journey"],
   ["11:15 AM","ride","Flight of the Hippogriff + Butterbeer","Frozen Butterbeer, not the regular one. This is not negotiable."],
   ["12:00 PM","ride","Jurassic World VelociCoaster","The best roller coaster in Florida. Ride it twice back to back — that's what Unlimited is for."],
   ["1:00 PM","ride","Skull Island: Reign of Kong"],
   ["1:45 PM","eat","Lunch at Mythos","Consistently rated the best in-park restaurant at Universal. Reserve."],
   ["3:15 PM","ride","The Incredible Hulk Coaster, twice"],
   ["4:00 PM","ride","The Amazing Adventures of Spider-Man","Still one of the best dark rides ever built."],
   ["4:45 PM","ride","Doctor Doom's Fearfall"],
   ["5:15 PM","ride","Ripsaw Falls + Bilge-Rat Barges","Toon Lagoon. You will be soaked through. September makes this a mercy."],
   ["6:15 PM","","Lost Continent wander","Quietest, oddest corner of the park."],
   ["7:00 PM","move","Hogwarts Express to King's Cross","Requires the Park-to-Park ticket, which you have. The ride between parks is its own attraction and differs by direction."],
   ["7:20 PM","ride","Quick Diagon Alley preview","Escape from Gringotts if it's walk-on. Full Diagon Alley day is tomorrow."],
   ["8:00 PM","move","Hogwarts Express back to Hogsmeade"],
   ["8:45 PM","ride","VelociCoaster in the dark","The closer. Completely different ride at night."],
   ["9:30 PM","","Water taxi home, nightcap at The Thirsty Fish"]
  ]
},
{
  n:6, date:"Fri 18 Sep", park:"Universal Studios + Halloween Horror Nights", grade:"E",
  note:"The longest day of the trip by a wide margin — park at 10am, out around 1am. Express Unlimited covers the day; a separate HHN Express Pass covers the night, and it is what makes clearing all ten houses in one evening possible.",
  hotel:"Loews Portofino Bay Hotel",
  badges:[["b-hotel","Express Unlimited — included"],["b-skip","HHN Express Pass"],["b-extra","Separate HHN ticket"]],
  sched:[
   ["8:30 AM","","Sleep in","You need it. Tonight runs past midnight."],
   ["10:00 AM","move","Water taxi to Universal Studios Florida"],
   ["10:20 AM","ride","Harry Potter and the Escape from Gringotts"],
   ["11:00 AM","","Diagon Alley","Ollivanders wand ceremony, Knockturn Alley, Weasleys' Wizard Wheezes, and the dragon that breathes fire on a timer."],
   ["12:00 PM","eat","Leaky Cauldron","Bangers and mash, and a Fishy Green Ale for the novelty."],
   ["1:15 PM","ride","Revenge of the Mummy"],
   ["1:50 PM","ride","Transformers: The Ride 3D"],
   ["2:30 PM","ride","MEN IN BLACK Alien Attack, twice","Competitive scoring. Settle it."],
   ["3:15 PM","ride","The Simpsons Ride + Kang & Kodos"],
   ["4:00 PM","ride","Villain-Con Minion Blast"],
   ["4:40 PM","ride","E.T. Adventure","The last original Universal Studios Florida opening-day ride still standing. Worth it for that alone."],
   ["5:15 PM","move","Park clears for the event","Everyone without an HHN ticket is walked out. Exit to CityWalk."],
   ["5:45 PM","eat","Early dinner at Vivo Italian Kitchen","Eat properly now. You will not eat again until 1am."],
   ["6:30 PM","move","Halloween Horror Nights entry","Scan in with the HHN Express Pass."],
   ["6:45 PM","show","Ten haunted houses, five scare zones","Without Express you'd clear maybe four houses. With it you can do all ten, and that is the difference between seeing HHN and doing HHN. Start with the houses in the far back lots — everyone else starts at the front."],
   ["11:30 PM","show","Halloween Nightmare Fuel","The live stunt-and-music show. Good place to sit down."],
   ["12:30 AM","","Last two houses","Lines collapse in the final hour."],
   ["1:15 AM","move","Home"]
  ]
},
{
  n:7, date:"Sat 19 Sep", park:"Transfer Day — Disney Springs", grade:"C",
  note:"No theme park. Move from Universal to Disney, then spend the evening at Disney Springs. Saturday is the worst day of the week to be in a park, so this is where it goes.",
  hotel:"→ Disney's Grand Floridian Resort & Spa, Club Level",
  badges:[["b-hotel","Switch hotels"],["b-extra","LEVEL99 · Cirque du Soleil"]],
  sched:[
   ["9:00 AM","","Sleep in, club lounge breakfast"],
   ["11:00 AM","move","Check out of Portofino, transfer to Walt Disney World","About 20 minutes."],
   ["12:00 PM","move","Check in at Disney's Grand Floridian — Club Level, Theme Park View","Disney's flagship. The monorail stops inside the building, so Magic Kingdom is four minutes door to gate. Club Level adds a private lounge with five food services a day."],
   ["12:45 PM","","Walk the grounds","The lobby orchestra, the beach, the marina. This hotel is an attraction."],
   ["1:30 PM","eat","Afternoon tea at Garden View Tea Room"],
   ["2:30 PM","move","Ride the monorail loop for no reason","Contemporary, Polynesian, back. Twenty minutes, best free thing on property."],
   ["4:00 PM","move","Rideshare to Disney Springs"],
   ["4:30 PM","pay","LEVEL99","Opened June 2026 on the West Side — 60+ physical and mental challenge rooms, two stories, competitive scoring. The largest location they've built."],
   ["6:30 PM","eat","Dinner at The Edison or Morimoto Asia"],
   ["8:00 PM","show","Cirque du Soleil: Drawn to Life","Built around Disney animation. About 90 minutes."],
   ["9:30 PM","","Jock Lindsey's Hangar Bar"],
   ["11:00 PM","move","Home. Disney starts tomorrow."]
  ]
},
{
  n:8, date:"Sun 20 Sep", park:"Magic Kingdom", grade:"E",
  note:"Lightning Lane Premier Pass day. One-time entry to every Lightning Lane in the park with no booking windows and nothing to manage — you just walk up. It is the single most expensive line-skip product Disney sells and Magic Kingdom is where it earns it.",
  hotel:"Disney's Grand Floridian Resort & Spa",
  badges:[["b-skip","LL Premier Pass, ~$349 each"],["b-extra","Fireworks Cruise"]],
  sched:[
   ["8:00 AM","eat","Club lounge breakfast"],
   ["9:00 AM","move","Monorail to Magic Kingdom","Four minutes."],
   ["9:20 AM","","Main Street, castle photo","Cinderella Castle was repainted back to classic grays, creams and gold in June 2026."],
   ["9:45 AM","ride","Seven Dwarfs Mine Train","Premier Pass."],
   ["10:15 AM","ride","Peter Pan's Flight"],
   ["10:45 AM","ride","Big Thunder Mountain Railroad","Fully re-tracked and reopened spring 2026 with a new Rainbow Caverns opening scene. Effectively a new ride."],
   ["11:20 AM","ride","Haunted Mansion"],
   ["12:00 PM","eat","Beak & Barrel","The new pirate tavern in Adventureland, with a Barker Bird animatronic. It's Oga's Cantina for pirates, and it's very hard to get into — reserve the moment your window opens."],
   ["1:00 PM","ride","Pirates of the Caribbean","Ride it right after the bar. Correct order."],
   ["1:30 PM","ride","Jungle Cruise"],
   ["2:15 PM","eat","Late lunch at Be Our Guest"],
   ["3:30 PM","ride","TRON Lightcycle / Run","Premier Pass covers Single Pass attractions too, which is the main argument for buying it here."],
   ["4:10 PM","ride","Space Mountain"],
   ["4:45 PM","ride","Buzz Lightyear's Space Ranger Spin","Reopened April 2026 with new vehicles, new handheld blasters and new targets."],
   ["5:20 PM","ride","PeopleMover","The recovery ride. Sit down, go around, look at everything."],
   ["6:00 PM","show","Festival of Fantasy Parade"],
   ["7:00 PM","eat","Dinner at Skipper Canteen"],
   ["8:30 PM","pay","Fireworks Cruise departs the Grand Floridian marina","About $449 for a private pontoon, captain and snacks. You watch Happily Ever After from the middle of Seven Seas Lagoon with nobody in front of you."],
   ["9:20 PM","show","Happily Ever After, from the water"],
   ["10:00 PM","move","Boat drops you back at your own hotel"]
  ]
},
{
  n:9, date:"Mon 21 Sep", park:"EPCOT", grade:"D",
  note:"Front half of the day for the rides on Premier Pass, back half for World Showcase. EPCOT rewards being slow, and after four consecutive heavy days you'll want it.",
  hotel:"Disney's Grand Floridian Resort & Spa",
  badges:[["b-skip","LL Premier Pass, ~$219 each"],["b-extra","Space 220"]],
  sched:[
   ["8:30 AM","","Slow start"],
   ["9:30 AM","move","Monorail to EPCOT via the Transportation & Ticket Center"],
   ["10:00 AM","ride","Guardians of the Galaxy: Cosmic Rewind","Premier Pass. Reverse launch, rotating vehicles, a different song each ride."],
   ["10:45 AM","ride","Test Track"],
   ["11:30 AM","ride","Mission: SPACE — Orange","Green if anyone's stomach is questionable."],
   ["12:00 PM","eat","Space 220","Lunch in a simulated space station 220 miles up, reached by a 'space elevator.' Prix fixe, and one of the hardest reservations at Disney World."],
   ["1:30 PM","ride","Soarin' Across America","New film as of May 2026 — the whole flight is US landscapes now."],
   ["2:15 PM","ride","Living with the Land + Journey of Water"],
   ["3:00 PM","ride","Frozen Ever After","New Anna, Elsa and Kristoff animatronics installed February 2026, matched to the Hong Kong figures. Meaningfully better than it was."],
   ["3:45 PM","ride","Remy's Ratatouille Adventure"],
   ["4:30 PM","eat","Start the World Showcase loop — Mexico","La Cava del Tequila."],
   ["5:15 PM","eat","Norway → China → Germany","Biergarten for a pretzel and a stein."],
   ["6:15 PM","eat","Italy → The American Adventure → Japan","Takumi-Tei for a sake flight."],
   ["7:15 PM","eat","Morocco → France → United Kingdom","Les Halles for pastry, Rose & Crown for a pint."],
   ["8:15 PM","eat","Canada — dinner at Le Cellier","If anyone still wants a real meal. Otherwise keep grazing."],
   ["9:00 PM","show","Luminous: The Symphony of Us","From anywhere on the lagoon."],
   ["9:45 PM","move","Home"]
  ]
},
{
  n:10, date:"Tue 22 Sep", park:"Hollywood Studios", grade:"E",
  note:"The densest park on the trip, and the one with the most paid extras worth doing. Both Galaxy's Edge build experiences go today, plus the brand-new animation attraction that opened eight days before you arrive.",
  hotel:"Disney's Grand Floridian Resort & Spa",
  badges:[["b-skip","LL Premier Pass, ~$269 each"],["b-extra","Savi's Workshop · Droid Depot · Oga's"]],
  sched:[
   ["8:00 AM","","Wake up"],
   ["9:00 AM","move","Bus or rideshare to Hollywood Studios"],
   ["9:30 AM","ride","Star Wars: Rise of the Resistance","Premier Pass covers it. Still the most ambitious attraction Disney has built."],
   ["10:30 AM","ride","Millennium Falcon: Smugglers Run","New storyline added May 2026 tied to The Mandalorian and Grogu. Fly, don't gun."],
   ["11:15 AM","pay","Savi's Workshop","About $269 each. Twenty minutes, four hilt themes, kyber crystal, and you assemble it yourself. Reserve the moment your booking window opens — it sells out further ahead than almost anything at Disney."],
   ["12:15 PM","eat","Docking Bay 7"],
   ["1:15 PM","pay","Droid Depot","About $130 each. Build an R-series or BB-series astromech off the conveyor. It's remote-controlled and reacts to things in the land."],
   ["2:00 PM","eat","Oga's Cantina","Reserved slot. Order a Fuzzy Tauntaun and watch DJ R-3X."],
   ["3:00 PM","show","The Magic of Disney Animation","Opened 14 September 2026, in the old Star Wars Launch Bay. Learn to Draw with Olaf has a talking Olaf animatronic with new Josh Gad dialogue, plus a screening of Once Upon a Studio."],
   ["4:00 PM","ride","Rock 'n' Roller Coaster Starring The Muppets","Rethemed and reopened May 2026. Same launch, entirely new show."],
   ["4:40 PM","ride","The Twilight Zone Tower of Terror"],
   ["5:20 PM","ride","Slinky Dog Dash"],
   ["6:00 PM","ride","Toy Story Mania + Alien Swirling Saucers"],
   ["6:45 PM","ride","Mickey & Minnie's Runaway Railway"],
   ["7:30 PM","eat","Dinner at The Hollywood Brown Derby","Cobb salad, prepared tableside. Order it."],
   ["9:00 PM","show","Fantasmic!","Reserve a dining package or get there 45 minutes early."],
   ["10:00 PM","move","Home"]
  ]
},
{
  n:11, date:"Wed 23 Sep", park:"Animal Kingdom", grade:"D",
  note:"Cheapest Premier Pass of the four parks, and the day the Wild Africa Trek slots in. Stay until dark — Pandora's bioluminescence is the entire reason to be here at night.",
  hotel:"Disney's Grand Floridian Resort & Spa",
  badges:[["b-skip","LL Premier Pass, ~$149 each"],["b-extra","Wild Africa Trek, $229 each"]],
  sched:[
   ["8:00 AM","","Wake up"],
   ["9:15 AM","move","Bus to Animal Kingdom"],
   ["9:45 AM","ride","Avatar Flight of Passage","Premier Pass. Still the best ride at Walt Disney World."],
   ["10:20 AM","ride","Na'vi River Journey"],
   ["11:00 AM","move","Wild Africa Trek check-in","Curiosity Animal Tours kiosk, across from the Kilimanjaro Safaris entrance. Check in 30 minutes early — late arrivals are turned away."],
   ["11:20 AM","pay","Wild Africa Trek — three hours","Harnessed rope-bridge crossings above the crocodiles and hippos, then a private open-sided vehicle deep into the Safi River Valley where the regular safari doesn't go. African-inspired lunch on a platform overlooking the savanna. Photographer included. 48-inch minimum, and you need to be comfortable with heights."],
   ["2:30 PM","ride","Kilimanjaro Safaris","Different animals, different route, worth doing even after the trek."],
   ["3:20 PM","","Gorilla Falls Exploration Trail"],
   ["4:00 PM","ride","Expedition Everest, twice"],
   ["4:45 PM","ride","Kali River Rapids","September in Florida. Get soaked deliberately."],
   ["5:20 PM","show","Zootopia: Better Zoogether","Replaced It's Tough to Be a Bug in late 2025."],
   ["6:00 PM","show","Feathered Friends in Flight"],
   ["6:40 PM","","Pandora after dark","The forest lights up. This is the payoff for staying late."],
   ["7:15 PM","eat","Tiffins, then Nomad Lounge","The best restaurant in any Disney park, and the lounge next to it is the best patio."],
   ["9:00 PM","move","Home"]
  ]
},
{
  n:12, date:"Thu 24 Sep", park:"Typhoon Lagoon + Not-So-Scary", grade:"C",
  note:"Water park by day, hard-ticket Halloween party by night. The party is a separate ticket from your park admission and runs after regular hours, with a nearly empty Magic Kingdom and rides you can walk onto.",
  hotel:"Disney's Grand Floridian Resort & Spa",
  badges:[["b-extra","Cabana"],["b-extra","Not-So-Scary ticket, ~$199 each"]],
  sched:[
   ["9:30 AM","","Sleep in"],
   ["10:30 AM","pay","Typhoon Lagoon opens — cabana check-in","Uses one of your Park Hopper Plus visits."],
   ["11:00 AM","ride","Humunga Kowabunga","Three-story near-vertical enclosed drop."],
   ["11:40 AM","ride","Crush 'n' Gusher","Water coaster — uphill sections, three routes."],
   ["12:20 PM","ride","Miss Adventure Falls + Gangplank Falls"],
   ["1:00 PM","eat","Lunch at the cabana"],
   ["2:00 PM","","Surf Pool","The largest wave pool in North America. Six-foot swells on a cycle — check the board for surf times."],
   ["3:00 PM","","Castaway Creek"],
   ["4:00 PM","move","Back to the Grand Floridian","Shower, nap, change. You need this."],
   ["6:00 PM","move","Monorail to Magic Kingdom","Party ticket holders get in at 6 even though the party starts at 7."],
   ["7:00 PM","show","Mickey's Not-So-Scary Halloween Party begins","Trick-or-treat stations throughout the park, Halloween ride overlays, and characters that appear on no other night of the year."],
   ["8:15 PM","show","Mickey's Boo-To-You Halloween Parade","The Headless Horseman rides out ahead of it. Get in place early."],
   ["9:30 PM","show","Disney's Not-So-Spooky Spectacular fireworks"],
   ["10:00 PM","show","Hocus Pocus Villain Spelltacular","On the castle stage."],
   ["11:00 PM","show","Second parade","Always the emptier one. Locals know."],
   ["11:30 PM","ride","Walk onto Space Mountain and Haunted Mansion","Attendance is capped, so the last hour is the best ride time of the whole trip."],
   ["12:00 AM","move","Home"]
  ]
},
{
  n:13, date:"Fri 25 Sep", park:"All Four Parks — Private VIP Tour", grade:"E",
  note:"The finale. Eight hours with a private Disney guide and a private vehicle, hitting all four parks in one day with front-of-line access to everything and no waiting for buses. This is the single most expensive line item on the trip and it is the only way to do what it does.",
  hotel:"Disney's Grand Floridian Resort & Spa",
  badges:[["b-skip","Private VIP Tour, 8 hrs"],["b-extra","Victoria & Albert's"]],
  sched:[
   ["8:30 AM","eat","Club lounge breakfast"],
   ["9:00 AM","move","Guide meets you in the Grand Floridian lobby","Priced per group up to ten people, not per person — with three of you it's the same cost as with ten, which is worth knowing if you want to invite anyone."],
   ["9:30 AM","ride","Magic Kingdom","Seven Dwarfs Mine Train, TRON, Space Mountain, Big Thunder — back to back, no lines, no walking the long way round."],
   ["11:00 AM","move","Private vehicle to Hollywood Studios","Backstage roads. Ten minutes instead of forty."],
   ["11:20 AM","ride","Rise of the Resistance, Tower of Terror, Rock 'n' Roller Coaster"],
   ["12:45 PM","eat","Lunch","Your guide books it same-day, including places that show as fully committed in the app."],
   ["2:00 PM","move","Private vehicle to Animal Kingdom"],
   ["2:20 PM","ride","Flight of Passage, Expedition Everest"],
   ["3:30 PM","move","Private vehicle to EPCOT"],
   ["3:50 PM","ride","Cosmic Rewind, Test Track, Remy's"],
   ["5:00 PM","","Anything you missed","Send the guide your list a week ahead. Their whole job today is closing gaps."],
   ["5:30 PM","","Tour ends","Tip the guide. Plan on $400–500 for a full day."],
   ["6:30 PM","eat","Victoria & Albert's","In your own hotel. The only Forbes Five-Star restaurant at Walt Disney World — a multi-course tasting menu with pairings, and jackets are required for men. Book the moment reservations open at 60 days."],
   ["9:30 PM","","Last drink on the Grand Floridian veranda"]
  ]
},
{
  n:14, date:"Sat 26 Sep", park:"Departure", grade:"A",
  note:"Optional last water park if the group still has energy, otherwise a slow morning and out. You have unused Park Hopper Plus visits either way.",
  hotel:"Check out — Disney's Grand Floridian",
  badges:[],
  sched:[
   ["9:00 AM","eat","Late breakfast in the club lounge"],
   ["10:00 AM","ride","Optional: Blizzard Beach","Summit Plummet is 120 feet at around 60 mph, one of the tallest freefall slides anywhere. Check first — Disney rotates its two water parks seasonally and only one is usually operating."],
   ["1:00 PM","move","Check out"],
   ["2:00 PM","move","Transfer to MCO"],
   ["4:00 PM","move","Fly home"]
  ]
}
];

const NIGHTS={epic:3,main:3,disney:7};
const PERROOM=4;

const HOTELS={
 epic:[
  {id:'stella',n:'Universal Stella Nova Resort',r:210,d:'Prime Value tier on the Epic campus. Shuttle to the gate.'},
  {id:'terra',n:'Universal Terra Luna Resort',r:215,d:'Sister property to Stella Nova. Same tier, same shuttle.'},
  {id:'helios',n:'Universal Helios Grand',r:620,d:'The in-park hotel. Five-minute walk to the Epic gate, plus Early Park Admission every morning.'},
  {id:'heliospv',n:'Universal Helios Grand \u2014 park view',r:690,d:'Same hotel, with Epic Universe out the window. About $70 more a night.'}
 ],
 main:[
  {id:'endless',n:'Universal Endless Summer',r:160,d:'Value tier. No Express perk \u2014 you would buy line-skip separately.'},
  {id:'cabana',n:'Universal Cabana Bay',r:205,d:'Retro theming, lazy river, bowling alley. No Express perk.'},
  {id:'sapphire',n:'Loews Sapphire Falls',r:295,d:'Preferred tier with water taxi access. Still no Express perk.'},
  {id:'royal',n:'Loews Royal Pacific',r:485,d:'Premier tier \u2014 free Express Unlimited for everyone in the room.',prem:1},
  {id:'hardrock',n:'Hard Rock Hotel',r:545,d:'Premier tier. Shortest walk to the park gates of any hotel here.',prem:1},
  {id:'portofino',n:'Loews Portofino Bay',r:625,d:'Premier tier. The best-themed hotel at Universal Orlando.',prem:1},
  {id:'portoclub',n:'Loews Portofino Bay \u2014 Club Level',r:815,d:'Premier tier plus a private lounge running five food services a day.',prem:1}
 ],
 disney:[
  {id:'pop',n:"Disney's Pop Century",r:195,d:'Value tier. Skyliner straight to EPCOT and Hollywood Studios.'},
  {id:'carib',n:"Disney's Caribbean Beach",r:325,d:'Moderate tier, and the Skyliner hub.'},
  {id:'wild',n:"Disney's Wilderness Lodge",r:585,d:'Deluxe. Boat to Magic Kingdom, and one of the few Disney hotels that ranks nationally on its own merits.'},
  {id:'contemp',n:"Disney's Contemporary Resort",r:715,d:'Deluxe. Close enough to walk to Magic Kingdom.'},
  {id:'poly',n:"Disney's Polynesian Village",r:795,d:'Deluxe. Monorail and boat to Magic Kingdom.'},
  {id:'gf',n:"Disney's Grand Floridian",r:880,d:'The Deluxe flagship. The monorail stops inside the building.'},
  {id:'fourseasons',n:'Four Seasons Resort Orlando',r:925,d:'The only five-diamond hotel on Disney property. Independently run, so no Disney hotel perks.'},
  {id:'gfclub',n:'Grand Floridian \u2014 Club Level, theme park view',r:1285,d:'Private lounge, fireworks from the balcony, Victoria & Albert\u2019s downstairs.'}
 ]
};

/* pp = per person. flat = whole group. req = locked on. */
const ITEMS=[
 {id:'utix',s:'uni',ic:'\ud83c\udf9f\ufe0f',k:'Ticket',n:'Universal 5-Day Park-to-Park with Volcano Bay',d:'Covers both Epic Universe days, Islands of Adventure, Universal Studios and Volcano Bay. In 2026, 3+ day tickets include unlimited Epic access.',pp:514,req:1},
 {id:'uexp1',s:'uni',ic:'\u26a1',k:'Line skip',n:'Epic Universe Express Pass \u00d7 2 days',d:'Single-use per ride \u2014 Universal does not sell Unlimited Express at Epic and is not expected to before 2027. About $190 a day.',pp:380},
 {id:'uexp2',s:'uni',ic:'\u26a1',k:'Line skip',n:'Express Unlimited \u2014 Universal Studios + Islands of Adventure',d:'Unlimited re-rides across two days. Free with any Premier hotel, which is the entire argument for staying at one.',pp:440,hotelfree:'main'},
 {id:'uhhn',s:'uni',ic:'\ud83c\udf83',k:'Event',n:'Halloween Horror Nights ticket',d:'Separate hard ticket. Ten houses and five scare zones, running 28 August to 1 November in 2026.',pp:115},
 {id:'uhhnx',s:'uni',ic:'\u26a1',k:'Line skip',n:'Halloween Horror Nights Express Pass',d:'The difference between clearing four houses in a night and clearing all ten.',pp:130},
 {id:'uband',s:'uni',ic:'\u2b50',k:'Experience',n:'Power-Up Bands, Super Nintendo World',d:'Unlocks question blocks, coin collecting and the Bowser Jr. showdown. The rides all work without one.',pp:45},
 {id:'uwand',s:'uni',ic:'\u2b50',k:'Experience',n:'Interactive wands, Ministry of Magic',d:'Triggers around two dozen effects scattered across both halves of the land.',pp:75},
 {id:'umake',s:'uni',ic:'\u2b50',k:'Experience',n:'Darkmoor Monster Makeup Experience',d:'Prosthetic makeup that turns you into a classic Universal monster for the rest of the day.',pp:50},
 {id:'ucab',s:'uni',ic:'\u2b50',k:'Experience',n:'Volcano Bay premium cabana',d:'Shade, an attendant, food service and somewhere to leave your things all day.',flat:400},
 {id:'uphoto',s:'uni',ic:'\ud83d\udcf8',k:'Extra',n:'My Universal Photos package',d:'Unlimited ride and character photos across all three Universal parks.',pp:110},
 {id:'udine',s:'uni',ic:'\ud83c\udf7d\ufe0f',k:'Dining',n:'Signature meals \u2014 Mythos, Bice, Toothsome, Leaky Cauldron',d:'The four sit-down meals worth booking on the Universal side.',pp:85},
 {id:'ufood',s:'uni',ic:'\ud83c\udf7d\ufe0f',k:'Dining',n:'Everyday food and drink \u2014 6 days',d:'About $135 per person per day. Quick service, snacks and a table-service meal most days.',pp:810,req:1},

 {id:'dtix',s:'wdw',ic:'\ud83c\udf9f\ufe0f',k:'Ticket',n:'Disney 5-Day Park Hopper Plus',d:'Five theme park days plus five water park visits, and the ability to hop parks from 2pm.',pp:735,req:1},
 {id:'dllmk',s:'wdw',ic:'\u26a1',k:'Line skip',n:'Lightning Lane Premier Pass \u2014 Magic Kingdom',d:'Every Lightning Lane once with no booking windows, including Single Pass rides like TRON. The priciest park for it and the one where it earns its keep.',pp:349},
 {id:'dllep',s:'wdw',ic:'\u26a1',k:'Line skip',n:'Lightning Lane Premier Pass \u2014 EPCOT',d:'Cosmic Rewind, Test Track, Remy\u2019s and Frozen Ever After in a single morning.',pp:219},
 {id:'dllhs',s:'wdw',ic:'\u26a1',k:'Line skip',n:'Lightning Lane Premier Pass \u2014 Hollywood Studios',d:'Covers Rise of the Resistance, which is most of the reason to consider it here.',pp:269},
 {id:'dllak',s:'wdw',ic:'\u26a1',k:'Line skip',n:'Lightning Lane Premier Pass \u2014 Animal Kingdom',d:'Cheapest of the four parks. Flight of Passage alone can run a two-hour standby.',pp:149},
 {id:'dllmulti',s:'wdw',ic:'\u26a1',k:'Line skip',n:'Lightning Lane Multi Pass instead \u2014 4 days',d:'The budget alternative. Three attractions at a time, re-booked as you use them, and Single Pass rides cost extra on top. Switch the four Premier lines off if you turn this on.',pp:132},
 {id:'dvip',s:'wdw',ic:'\ud83d\ude97',k:'Line skip',n:'Private VIP Tour \u2014 8 hours, plus gratuity',d:'A guide, a private vehicle and front-of-line access across all four parks in one day. Priced per group up to ten people rather than per person, so it gets cheaper the more of you there are.',flat:4900},
 {id:'dnss',s:'wdw',ic:'\ud83c\udf83',k:'Event',n:"Mickey's Not-So-Scary Halloween Party",d:'Separate hard ticket with capped attendance, two parades and Halloween ride overlays. Does not use a park day.',pp:199},
 {id:'dtrek',s:'wdw',ic:'\u2b50',k:'Experience',n:'Wild Africa Trek, Animal Kingdom',d:'Three hours. Harnessed rope bridges over the crocodiles, a private savanna vehicle, and lunch on a platform.',pp:229},
 {id:'dsavi',s:'wdw',ic:'\u2b50',k:'Experience',n:"Savi's Workshop custom lightsaber",d:'Twenty minutes, four hilt themes, and you assemble it yourself. Sells out further ahead than almost anything else at Disney.',pp:269},
 {id:'ddroid',s:'wdw',ic:'\u2b50',k:'Experience',n:'Droid Depot astromech build',d:'Build an R-series or BB-series droid off the conveyor. Remote-controlled, and it reacts to things around Galaxy\u2019s Edge.',pp:130},
 {id:'dcruise',s:'wdw',ic:'\u2b50',k:'Experience',n:'Magic Kingdom Fireworks Cruise',d:'Private pontoon, captain and snacks. You watch Happily Ever After from the middle of Seven Seas Lagoon.',flat:449},
 {id:'dtlcab',s:'wdw',ic:'\u2b50',k:'Experience',n:'Typhoon Lagoon cabana',d:'Shade and a base for the water park day.',flat:400},
 {id:'dl99',s:'wdw',ic:'\u2b50',k:'Experience',n:'LEVEL99 at Disney Springs',d:'Sixty-plus physical and mental challenge rooms. Opened June 2026.',pp:50},
 {id:'dcirque',s:'wdw',ic:'\ud83c\udfad',k:'Experience',n:'Cirque du Soleil: Drawn to Life',d:'Ninety minutes, built around Disney animation. Good use of the transfer evening.',pp:95},
 {id:'dphoto',s:'wdw',ic:'\ud83d\udcf8',k:'Extra',n:'Memory Maker',d:'Unlimited ride and character photo downloads across all four Disney parks. Priced per party, not per person.',flat:210},
 {id:'dva',s:'wdw',ic:'\ud83c\udf7d\ufe0f',k:'Dining',n:"Victoria & Albert's tasting menu with pairings",d:'The only Forbes Five-Star restaurant at Walt Disney World. Jackets required. Book the day your 60-day window opens.',pp:350},
 {id:'d220',s:'wdw',ic:'\ud83c\udf7d\ufe0f',k:'Dining',n:'Space 220 lunch, EPCOT',d:'Prix fixe, 220 miles up. One of the hardest reservations on property.',pp:65},
 {id:'dsig',s:'wdw',ic:'\ud83c\udf7d\ufe0f',k:'Dining',n:'Signature meals \u2014 Tiffins, Brown Derby, Oga\u2019s, Beak & Barrel',d:'The sit-down bookings that shape the Disney half of the trip.',pp:120},
 {id:'dfood',s:'wdw',ic:'\ud83c\udf7d\ufe0f',k:'Dining',n:'Everyday food and drink \u2014 7 days',d:'About $135 per person per day.',pp:945,req:1},

];

const SECTIONS=[
 {id:'uni',ic:'\ud83c\udfa2',n:'Universal Orlando',sub:'6 nights \u00b7 Epic Universe \u00d7 2, Islands of Adventure, Universal Studios, Volcano Bay'},
 {id:'wdw',ic:'\ud83c\udff0',n:'Walt Disney World',sub:'7 nights \u00b7 Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom, Typhoon Lagoon'},
];

const PRESETS={
 recommended:{h:{epic:'helios',main:'royal',disney:'wild'},on:['uexp1','dllmk','dllep','dllhs','dllak']},
 everything:{h:{epic:'heliospv',main:'portoclub',disney:'gfclub'},on:'all',except:['dllmulti']},
 lean:{h:{epic:'stella',main:'cabana',disney:'carib'},on:[]}
};

const ACTIVITIES = [
 ["Entertainment districts","Disney Springs","Free to enter. LEVEL99, The Edison, Morimoto Asia, Jock Lindsey's Hangar Bar, the Cirque theatre. No park ticket needed."],
 ["Entertainment districts","Universal CityWalk","Toothsome Chocolate Emporium, The Cowfish, Voodoo Doughnut. Also free to walk."],
 ["Entertainment districts","International Drive","Eleven miles of it. ICON Park's 400-foot observation wheel, the Orlando SlingShot, Museum of Illusions, Madame Tussauds."],
 ["Fourth gate","SeaWorld Orlando","If you want to say you did every major park: Mako, Kraken and Ice Breaker are a serious coaster lineup. Add a day, or swap it for the Day 14 water park."],
 ["Fourth gate","Aquatica","SeaWorld's water park, directly across the road. The quietest of the three big water parks."],
 ["Fourth gate","LEGOLAND Florida","About 45 minutes southwest in Winter Haven. Added SEA LIFE Florida in 2025. Skew young, but the botanical gardens on site are genuinely old and beautiful."],
 ["Outdoors","Kissimmee airboat rides","Wild Florida and Boggy Creek run them. Half a day, real alligators, a hard tonal break from the parks."],
 ["Outdoors","Wekiwa Springs State Park","Constant 72°F spring water, kayaking and swimming. Half an hour north and about as far from a theme park as Central Florida gets."],
 ["Outdoors","Bok Tower Gardens","An hour south. A 205-foot art deco singing tower, 50 acres of gardens, a national historic landmark. The recovery day option."],
 ["City","Winter Park","Brick streets, the Charles Hosmer Morse Museum with the largest Tiffany glass collection in the world, and a boat tour through the lake chain."],
 ["City","Lake Eola Park, downtown","Swan boats, a Sunday farmers market, the Orange County Regional History Center a block away."],
 ["City","Mills 50 and Ivanhoe Village","Where Orlando actually eats. Vietnamese, Korean barbecue, independent coffee, craft breweries."],
 ["Day trip","Kennedy Space Center","An hour east. Atlantis, the Saturn V, the Astronaut Training Experience. Check the launch schedule — a scrubbed launch is still worth planning around."],
 ["Day trip","Cocoa Beach","Ninety minutes to the Atlantic. Ron Jon, and a beach that isn't a wave pool."],
 ["If it rains","Top Golf or a driving range","Dr. Phillips area, covered bays, works at night."],
 ["If it rains","Sand Lake Road, Dr. Phillips","Orlando's upscale dining corridor. This is where you go when you cannot look at another churro."]
];

/* which stay each day belongs to — drives the calendar shading */
const STAY={1:'ta',2:'ua',3:'ua',4:'ub',5:'ub',6:'ub',7:'tb',8:'w',9:'w',10:'w',11:'w',12:'w',13:'w',14:'tb'};
const STAYNAME={ua:'Helios Grand',ub:'Portofino Bay',w:'Grand Floridian',ta:'In transit',tb:'Changeover'};

const CALMETA={
 1:{i:'\u2708\uFE0F',s:'Arrival &amp; CityWalk',n:'Buy Express + bands tonight'},
 2:{i:'\uD83C\uDFA2',s:'Epic Universe',n:'<b>Last Untrainable Dragon</b> before refurb'},
 3:{i:'\uD83C\uDFA2',s:'Epic Universe',n:'Battle at the Ministry at 8am'},
 4:{i:'\uD83C\uDF0A',s:'Volcano Bay',n:'<b>Move to a Premier hotel</b>'},
 5:{i:'\uD83C\uDFA2',s:'Islands of Adventure',n:'Express Unlimited kicks in'},
 6:{i:'\uD83C\uDF83',s:'Universal Studios + HHN',n:'<b>Out past 1am</b>'},
 7:{i:'\uD83D\uDECD\uFE0F',s:'Disney Springs',n:'<b>Move to Disney</b> \u00b7 Cirque 8pm'},
 8:{i:'\uD83C\uDFF0',s:'Magic Kingdom',n:'Fireworks cruise 8:30pm'},
 9:{i:'\uD83C\uDF10',s:'EPCOT',n:'Space 220 lunch'},
 10:{i:'\uD83C\uDFAC',s:'Hollywood Studios',n:'Savi\u2019s + Droid Depot'},
 11:{i:'\uD83E\uDD8F',s:'Animal Kingdom',n:'Wild Africa Trek 11:20am'},
 12:{i:'\uD83C\uDF83',s:'Typhoon Lagoon + Not-So-Scary',n:'Party runs to midnight'},
 13:{i:'\uD83D\uDE97',s:'VIP Tour \u2014 all four parks',n:'<b>Victoria &amp; Albert\u2019s 6:30pm</b>'},
 14:{i:'\u2708\uFE0F',s:'Departure',n:'Blizzard Beach optional'}
};

const SEASONS=[
{name:"The dead zone",when:"2 January \u2013 mid February",crowd:2,heat:1,price:2,
 weather:"Highs around 71\u00b0F, lows near 50\u00b0F, and the lowest rainfall of the year. Cold snaps into the 40s happen and last a few days.",
 on:"EPCOT Festival of the Arts, which ran 16 Jan \u2013 23 Feb in 2026 and is the least crowded of the four festivals. Rock the Universe at Universal, 23\u201324 January.",
 watch:"Water parks close outright in cold weather, and Disney typically has one of its two down for refurbishment anyway. Volcano Bay is closed from 26 October 2026 until around April 2027. Marathon Weekend in early January and MLK weekend both spike crowds hard.",
 verdict:"The best crowd-to-comfort ratio on the calendar \u2014 and the wrong window for this particular trip, because three of your nine parks are water parks."},
{name:"Mardi Gras season",when:"Mid February \u2013 early March",crowd:3,heat:2,price:3,
 weather:"Warming into the mid-70s with genuinely low humidity. Arguably the most pleasant walking weather of the year.",
 on:"Universal Mardi Gras ran 7 Feb \u2013 4 April in 2026: a nightly float parade, bead throwing, live music on select nights, and international food booths. It's included with park admission, which makes it the best-value seasonal event either resort runs.",
 watch:"Presidents' Day week is a hard spike. The runDisney Princess Half Marathon takes a late-February weekend.",
 verdict:"Underrated. If you cut the water parks and added a day at Universal Studios for Mardi Gras, this would be a strong alternative."},
{name:"Spring break",when:"March \u2013 mid April",crowd:5,heat:2,price:5,
 weather:"The best in the year on paper \u2014 low 80s, low humidity, very little rain.",
 on:"EPCOT Flower & Garden, which opens the first Wednesday of March and runs to the Monday after Memorial Day. Butterbeer Season at Universal, 1 March \u2013 31 May.",
 watch:"The worst crowds of the year outside Christmas week, spread across six weeks rather than concentrated. Easter week is peak. Lightning Lane and Express both hit their ceiling prices, so the exact same trip costs several thousand dollars more.",
 verdict:"Perfect weather bought at the worst possible price, in both money and queue time. Avoid for a trip built around line-skip products, because that's precisely when they cost the most."},
{name:"The pre-summer gap",when:"Late April \u2013 late May",crowd:3,heat:3,price:3,
 weather:"Climbing to the high 80s. Humidity arrives and afternoon storms begin, but neither is at full strength yet.",
 on:"Flower & Garden runs to the start of June. Water parks are all open and the water is warm.",
 watch:"Memorial Day weekend. The mid-to-late-May window before it is the genuine sweet spot.",
 verdict:"The strongest non-September option for a trip like this one. Everything is open, it's warm enough for the water parks, and the two weeks before Memorial Day are quiet."},
{name:"Peak summer",when:"June \u2013 mid August",crowd:5,heat:5,price:4,
 weather:"Low-to-mid 90s with a heat index over 100, and a thunderstorm almost every afternoon. Lightning shuts water parks and outdoor coasters routinely, sometimes for an hour at a time.",
 on:"Everything is open and park hours are the longest of the year, which partly offsets the crowds. Back to Hogwarts at Universal, 1 August \u2013 1 September.",
 watch:"Heat is not a footnote here. A 14-day trip at this intensity in July is genuinely punishing, and the paid extras that involve standing outside \u2014 the Wild Africa Trek especially \u2014 are much harder.",
 verdict:"The worst combination on the board: hot, crowded and expensive. Long hours are the only argument in its favour."},
{name:"The low",when:"Late August \u2013 September",crowd:1,heat:4,price:1,
 weather:"Still near 90\u00b0F and humid, and this is the peak of hurricane season \u2014 mid-August through mid-October. Most storms mean a rainy day, not a cancelled trip, but the risk is real.",
 on:"Both Halloween events run: Halloween Horror Nights from 28 August, and Mickey's Not-So-Scary from mid-August. EPCOT Food & Wine opened 27 August in 2026 and ran to 21 November. Volcano Bay is still open.",
 watch:"Magic Kingdom closes early to regular guests on party nights, so check hours before assuming a full day. Buy travel insurance.",
 verdict:"September is the single lowest-crowd month at Walt Disney World \u2014 every day of it projects low. Lightning Lane bottoms out, hotel discounts are deepest, and both Halloween events are running. This is where the trip is scheduled."},
{name:"Fall break",when:"October",crowd:4,heat:3,price:4,
 weather:"The best of the fall. Mid-80s early in the month, dropping into the low 80s, with humidity finally breaking near the end.",
 on:"Halloween Horror Nights and Not-So-Scary both at full tilt. Food & Wine continues. Halloween falls on a Saturday in 2026.",
 watch:"Indigenous Peoples' Day weekend and the week that follows \u2014 roughly 9\u201317 October \u2014 has become one of the busiest stretches of the entire year. October weekends are the most crowded nights of Halloween Horror Nights by a wide margin. Volcano Bay closes 26 October 2026.",
 verdict:"Better weather than September and materially worse everything else. If you shifted the trip a few weeks later you'd pay more and wait longer for the same parks."},
{name:"The quiet before the holidays",when:"Mid-to-late November",crowd:2,heat:1,price:3,
 weather:"The best weather of the year, full stop. Upper 70s, low humidity, very little rain, comfortable from open to close.",
 on:"Holiday decorations go up before Thanksgiving. Universal's holiday season starts 14 November with Grinchmas and the Macy's parade. EPCOT Festival of the Holidays opened 27 November in 2026 with the Candlelight Processional. Mickey's Very Merry Christmas Party is running.",
 watch:"1\u201314 November is busy \u2014 Jersey Week, the runDisney Wine & Dine weekend and Veterans Day stack up. Thanksgiving week itself is a spike. Water parks are marginal in cool weather.",
 verdict:"The best all-round week of the year is the one just before Thanksgiving, or the few days right after it. For a trip without water parks, this would beat September."},
{name:"Christmas",when:"December",crowd:5,heat:1,price:5,
 weather:"Around 73\u00b0F by day, but it can drop into the 40s at night. Water parks are a coin flip.",
 on:"The most atmospheric time to be there, and it isn't close. Very Merry Christmas Party, Jollywood Nights, the Candlelight Processional, Grinchmas, Christmas in the Wizarding World.",
 watch:"The week leading to New Year's Eve is reliably the single busiest week of the year, every year. Hotel rates peak. The first two weeks of December are far more manageable than the last two.",
 verdict:"Go in December for the atmosphere, not for the rides. Early December is a real option; the last ten days of the year are not, at any price."}
];
