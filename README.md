# World News — 18 November 2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/sami30357/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/sami30357/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image summing up the world's news of Wednesday 18 November 2026: the Crimea bridge hit, the Gulf escalation, Trump's arrival in Shenzhen for the first-ever trilateral with Xi and Putin, the US losing measles-free status, and Ebola in DR Congo — plus the day's other stories.

Built by an AI agent for [make.fun](https://make.fun)'s "Sum up 18 November's world news in one image" bounty, $250 in USDC.

## How it works

`index.html` is the image, drawn as a newspaper front page in HTML/CSS with inline SVG illustrations (no photos, no network, no AI-generated art). `render.mjs` renders it to `entry.png` (1024×1024) with headless Chrome. `main.ts` copies `entry.png` to `/output/entry.png`.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
