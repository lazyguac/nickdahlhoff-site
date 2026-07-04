---
title: Fantasy Joes
tagline: A fantasy-football ranking game built on a simple mechanic — pick between two players, over and over, and the picks build your rankings. Web app, Discord game, and real-money contests, designed and built solo with Claude Code.
status: current
order: 1
url: https://fantasyjoes.gg
tech: [Claude Code, Convex, Netlify, Gemini, Claude API, Sleeper API, ESPN API]
skills: [Full-Stack Development, Real-Time Systems, Game Design, Algorithm Design, API Integration, Product Management, AI-Assisted Development, Data Pipeline Design, UI/UX Design]
heroImage: /images/fantasy-joes/fj-compare-og-card.jpg
year: "2026"
badge: "Active"
badgeColor: green
latestUpdate:
  date: "2026-07-03"
  summary: "Real-money contests built and audited, launching for the 2026 NFL season. 14,818 duels played as of June 30."
---

## What it is, and why I built it

Fantasy Joes is a fantasy-football ranking game. Instead of typing out a spreadsheet of your player rankings, you see two NFL players and tap the one you'd rather have. Do that a few hundred times and you've ranked the whole player pool — without ever staring at a blank list.

The reason I built it starts with a problem I had with how fantasy rankings work. A lot of people who play fantasy football want to rank players well, and want to be known as the best ranker. But that's a closed system, mostly owned by one company. Expert consensus rankings come from FantasyPros, which decides who counts as an "expert" — you basically need a media presence to submit rankings, which locks out people who might actually be really good at it.

I'd also made rankings the normal way, in a spreadsheet, and it's boring. It appeals to a tiny audience. So I figured there were a few ways to innovate on it, and the main one was duels. That came out of a smaller thing I noticed doing it myself: I often didn't actually know my own preference between two players until I was forced to pick one. Rankings get followed too rigidly — people defer to a list instead of choosing who they'd actually take. Making you choose, one pair at a time, gets you to a ranking that's genuinely yours.

I designed and built the whole thing myself with Claude Code — the game, the art pipeline, the Discord bot, the SEO pages, the growth dashboard, and the payment rails underneath.

![The core game loop: two players, tap the one you'd rather have](/images/fantasy-joes/fj-duel-desktop.png)

## The game, and the rating system under it

The game is simple to play. Two players, tap one, repeat. Two modes run on the same engine: a pre-season draft board across every position, and in-season weekly duels scoped to a position for when you're setting a lineup. No signup to start — guests can play without signing up, on a device that remembers them.

What's underneath each tap is where most of the design went. It started from Elo, the rating system chess uses to rank players from head-to-head results, and I changed a lot about it from there. Six things that aren't in textbook Elo:

- **Scores are seeded from real data, not a flat starting number.** Every player's opening score comes from projections and ADP, so rankings start from where the market actually has them instead of everyone tied at a midpoint.
- **The K-factor scales with the rank gap** instead of being one fixed constant. The wider the gap between the two players going in, the more carefully the system moves their scores.
- **Upsets are amplified.** Take the lower-ranked player and win, and the scores move harder than a chalk pick would — a surprise carries more information, so it counts for more.
- **Matchups are chosen, not random.** Top players surface more often, and the second player in each duel is drawn from a range around the first so the pairing stays competitive instead of lopsided.
- **A "mover" boost injects real-world signal.** When a player's ADP shifts hard, the system shows them more for a stretch, so the rankings react to what just happened in the real world.
- **New players get a smaller pool first.** Early duels concentrate on the famous, high-consensus players and widen from there, so the ranking has something solid to build on before it hands you the long tail.

Your rankings re-sort live as you go. It's Elo-derived and heavily modified, not the same rating you'd get out of a chess app.

![Your rankings, tiered, with ADP and Elo side by side](/images/fantasy-joes/fj-rankings-desktop.png)

## Built twice

I first built this in late 2024 as the product manager, paying a freelancer to put it together on no-code tooling. The mechanic worked. But every duel took three to five seconds to load, which is fatal for a game whose whole appeal is tapping fast — and there were other bugs on top of that. As a potential user I could see it wasn't going to work without major improvements I wasn't ready to put the time and money into. I shut it down before the 2025 season rather than ship it slow.

I came back to it in early 2026 and rebuilt it from scratch, by myself, with Claude Code. Nothing carried over. What shipped is the fast version of the original idea: duels resolve instantly, guests can play with no signup, and the web app and the Discord game run on one shared code path so they behave the same.

## The machinery around the game

The game is the core. Most of the work is everything that turns it into a product one person can run.

**Player art.** Every ranked player gets an AI-generated comic portrait, so duels, share cards, and Discord all look on-brand without me drawing anything. The pipeline researches each player, generates the art, then runs a second AI pass that checks the result against a checklist — team colors, likeness, no extra limbs — and re-rolls if it fails. When a player gets traded, a daily job notices the team change and regenerates the stale art on its own.

**A Discord game.** The whole duel loop runs inside Discord as slash commands — play, build a board, see standings without leaving the server, no signup. Around it I built partner attribution: credit for a signup survives even when nobody clicks a link, backfilled from the server the player came from, and partners earn from the players they bring in with the math capped so payouts can never exceed what the game actually took in.

**Programmatic SEO.** A daily job reads every resolved draft duel, buckets them by player pair, and publishes a "Player X vs Y" page for each matchup that clears a vote threshold. 145 are live, each showing the crowd split from real duels — for example, [Jonathan Taylor vs. Christian McCaffrey](https://fantasyjoes.gg/draft/2026/compare/jonathan-taylor-vs-christian-mccaffrey) and [Puka Nacua vs. Justin Jefferson](https://fantasyjoes.gg/draft/2026/compare/puka-nacua-vs-justin-jefferson). A relevance filter sits underneath: before an expert quote renders, it checks that the quote actually names the right player, so a college linebacker who shares a surname with a star receiver doesn't get misattributed. When one of these pages is shared, it renders a preview card from live data — both players' comic art, their draft ranks, the vote split — that looks like a paid ad and is generated per matchup on demand.

![A live compare page — the crowd's lean, drawn from real duels](/images/fantasy-joes/fj-compare-pair-desktop.png)

Three more pieces round it out. A growth dashboard tracks the funnel by channel — first visit to first duel to retention, with cost-per-signup — and flags when attribution silently breaks. A short-form video renderer turns the same duel-split data into vertical "you vs. the crowd" clips, so no on-screen number is ever a guess. And the ad platforms get told when a visitor becomes a real player, so paid campaigns optimize on engaged users instead of clicks.

## Real money, built and audited

The endgame is skill-based cash contests — head-to-head, 50/50s, and tournaments — funded by user-signed USDC transfers on Base. The rails are done: wallets, the payment flow, six contest formats, and the compliance scaffolding for geo-gating, age checks, tax withholding, and self-exclusion.

Before any of it goes live, I put the codebase through a multi-agent adversarial security audit I designed and ran: dozens of independent agents finding issues across the money rails, then re-verifying each other's findings, then a pass checking for what the first ones missed. Findings were remediated against the live code — all while the money system stayed switched off behind a flag. The scale of it is the point: a solo founder can't red-team a money system by hand at the depth this needed, so I built the review that could.

Real money isn't live to the public. It's built and audited, and it launches for the 2026 NFL season.

![The homepage — make your own rankings, then see how they stack up](/images/fantasy-joes/fj-home-desktop.png)

## Where it stands

As of June 30, 2026, real people have played 14,818 duels across 1,038 users, and 145 comparison pages are live (as of July 2). Paid marketing has run — image-tested Reddit ads and a Spark-promoted TikTok poll since May 2026, with conversion tracking wired to both platforms — while a Google Ads push is built and staged but not yet launched.

One change I'm glad to point at came straight from that data. A "sign up now" screen was auto-firing early in a new player's session, and the data showed that gate was leaking users rather than converting them — the board that early is still mostly the consensus order, so the ask was landing before the rankings were actually the player's own. Moving it to a later, more personalized point was a one-line change the data told me to make. The 2026 NFL season kicks off in September, which is when all of this gets its first live test.


