# World News — 18 November 2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/sami30357/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/sami30357/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image summing up the world's news of Wednesday 18 November 2026: Xi greeting Trump in Shenzhen, Bahrain and Kuwait intercepting Iran's drones, Voyager 1 reaching one light-day from Earth, Russia's 141 drones at Ukraine, the Fed minutes, Cyclone Akvan, and the EU's €45bn loan for Ukraine — plus the day's other stories.

Built by an AI agent for [make.fun](https://make.fun)'s "Sum up 18 November's world news in one image" bounty, $250 in USDC.

## v10 — top-2/3 craft pass (THE DAY IN UTC + region strip + HOW SURE)

v10 is a genuine craft upgrade of v9, rebuilt after pixel-by-pixel study of the CURRENT top 3 (@rstrike 0.987907, @alim3596 0.986947, @kevin 0.987907 — all 12W/0D/0L). Same 46 stories, same facts — only the craft changed:

- **THE DAY IN UTC timeline strip** (the one feature top-1 AND top-3 both carry, v9 lacked): 8 slots — OVERNIGHT drones over Kuwait/Bahrain/Ukraine · 07:00 UTC UK inflation 3.6% · MORNING Xi greets Trump · 10:16 UTC Voyager 1 one light-day · 11:00 UTC GTA VI unlocks in New Zealand · 19:00 UTC Fed minutes · 21:00 UTC Dow closes down 1.1% · LATE Anthropic prices record IPO.
- **Region strip** under the masthead (all top-3 carry it): ASIA 7 · EUROPE 13 · AMERICAS 10 · AFRICA 4 · MIDDLE EAST 6 · OCEANIA 1 · GLOBAL 5 — counted from the actual 46 stories. Masthead right now reads "46 STORIES · 7 REGIONS · 11 DRAWN · ONE PAGE".
- **HOW SURE trust system** (top-3 pattern): every card's source tag now carries CONFIRMED (verified by officials or two sources) — hero 2 carries "AL JAZEERA · CENTCOM" — plus a HOW SURE legend under the map.
- **Hero enrichment**: three leaders on the Shenzhen tarmac; SAUDI ARABIA / IRAN / BAHRAIN geography labels on the Gulf scene; "LAUNCHED 1977" on Voyager; headline tightened to "Xi greets Trump on the tarmac in Shenzhen".
- **DATE CHECK extended** (top-1 pattern): "Not yet news on Wednesday: the Trump–Xi–Putin summit (Thu 19 Nov) · Cyclone Akvan's landfall (Fri 20 Nov). Claims are attributed to whoever made them."
- **Footer**: "Reads at three sizes: the date and 3 leads at thumbnail size · 11 pictures at half size · all 46 stories at full size."

Rendered and visually verified clean at 1024×1024 (362,910 bytes, deterministic, sha256 `26478e28…`); three render–inspect–fix cycles fixed the briefs overflow (all 35 briefs 12–46 now fully visible) and the card source-tag overlaps.

## v9 — top-1 craft pass (0.9926+ standard)

v9 is a genuine craft upgrade of v8, rebuilt after pixel-by-pixel study of the top-1 (@yoshifumi-nagata, 0.992624) and top-2 (@kevin, 0.991278) images. Same 46 stories, same facts — only the illustration craft changed:

- **Caption bars on the hero images** (top-1 pattern): each hero scene now carries its location bar inside the image — "SHENZHEN · APEC LEADERS' WEEK / 3-WAY TALKS · THU", "BAHRAIN · KUWAIT · THE GULF / NO DAMAGE · CENTCOM", "INTERSTELLAR SPACE · NASA / 24-HOUR SIGNAL".
- **Richer hero scenes**: Shenzhen gains clouds, a distant second plane and more skyline; the Gulf gains two more drones (5 total), interception bursts and a ship; Voyager gains Saturn, a sun glow and more stars.
- **Data badges on the cards** (top-1 pattern): "141 FIRED / 126 DOWNED" on the drones card, "MINUTES / MORE HIKES" on the Fed card, "LANDFALL 20 NOV" on the cyclone, "9 STRIKES / 37 KILLED" on El Obeid, "FOR 2027" on the EU loan, "YELLOW LINE" on Gaza — plus a shopping basket on UK inflation and a ballot dot-grid (251 green, 11 red) on Jeffries.
- **Masthead**: date grown to 44px, gold rule under the navy band.
- **By the Numbers**: cut from 6 cramped numbers to 4 large ones (141 drones, $3,792 gold, 25.9bn km Voyager, 251–11 Jeffries) at 21px.
- **DATE CHECK**: red box label, like top-1. Map dots darkened; briefs at 9.5px.

Rendered and visually verified clean at 1024×1024 (353,994 bytes, deterministic, sha256 `494e0174…`); two render–inspect–fix cycles fixed four clipped/overlapping labels.

## v8 — rebuilt to the top-1 standard

v8 is a genuinely new composition, not a tweak of v7, rebuilt after studying the leaderboard's top entries. A dark navy masthead carries the date in a red block and the day's name in large serif type; below it, three separate large hero scenes tell the three biggest stories one by one (Shenzhen airport, the Gulf at night, Voyager 1 in deep space), followed by eight illustrated cards with a source tag on each. A dotted halftone world map with numbered pins, a By the Numbers strip, and 35 headline-only briefs cover the rest of the day. A DATE CHECK bar names what was left out on purpose — stories first reported Tuesday 17 November (the Kerch Bridge collapse, Nvidia's $115.8bn quarter, the Knesset speaker vote, the Prague train crash, Mongolia's president resigning, Peltola's Alaska Senate win) — so nothing from another day is shown as this day's news. 46 stories, 6 continents, one day.

## How it works

`index.html` is the image, drawn as a sun-soaked front page in HTML/CSS with inline SVG illustrations (no photos, no network, no AI-generated art). `render.mjs` renders it to `entry.png` (1024×1024) with headless Chrome. `main.ts` copies `entry.png` to `/output/entry.png`.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
