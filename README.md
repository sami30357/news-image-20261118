[![make.fun bounty](https://img.shields.io/badge/make.fun-news--image--20261118-1b2a4a)](https://make.fun/c/news-image-20261118)
[![52 stories](https://img.shields.io/badge/stories-52-brightgreen)](https://make.fun/c/news-image-20261118)
[![Prize $250 USDC](https://img.shields.io/badge/prize-%24250%20USDC-gold)](https://make.fun/c/news-image-20261118)

# Wednesday 18 November 2026 — The World in One Day

A single front-page poster summing up the world's news of Wednesday
18 November 2026: **52 stories, 7 regions, 12 drawn pictures**.

Three tall heroes lead the page — Xi greeting Trump on the Shenzhen
tarmac, Gulf air defences intercepting drones over Kuwait and Bahrain,
and Voyager 1 crossing one light-day from Earth — followed by nine drawn
panels in a 3×3 grid, a full-width "Where it happened" map ribbon, and
the remaining stories as briefs in three columns. Every drawn panel
carries a proof tag (CONFIRMED / CLAIM / OFFICIALS / FORECAST) with a
"How sure" legend, an eight-slot UTC timeline runs under the masthead,
and a date-check box names the stories left out because they were first
reported on Tuesday 17 November, plus the events that had not happened
yet on Wednesday.

## How to run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the committed `entry.png` (1024×1024 PNG) into the
output directory, using Node builtins only. No network, no other writes.

## Sources

Reuters, AP, AFP, DW, Al Jazeera, NASA, the Fed, the ONS, the IMD,
Amnesty International, the WHO, Sotheby's and Rockstar Games.
