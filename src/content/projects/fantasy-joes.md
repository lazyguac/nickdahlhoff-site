---
title: Fantasy Joes
status: archive
order: 1
url: https://fantasyjoes.gg
tech: [Claude Code, Convex, Netlify, Gemini, Claude API, Sleeper API, ESPN API]
skills: [Full-Stack Development, Real-Time Systems, Game Design, Algorithm Design, API Integration, Product Management, AI-Assisted Development, Data Pipeline Design, UI/UX Design]
year: "2026"
latestUpdate:
  date: "2026-09-23"
  summary: "The free game remains live. I stopped developing Fantasy Joes as a business after the paid contests failed to attract customers."
tagline: "A fantasy football ranking game where quick player choices build your rankings. I built the web and Discord games, comparison pages, and cash contests. The free game remains live."
heroImage: /images/fantasy-joes/fj-six3-desktop.jpg
heroAlt: "Fantasy Joes: six player cards, pick your top three in order"
heroCaption: "The core screen. Six cards ordered by ADP; tap your first, second, and third. Every completed screen writes twelve player relationships into your rankings."
gallery:
  - src: /images/fantasy-joes/fj-six3-phone.jpg
    kind: phone
    caption: "Mobile first. Most Joes play on a phone."
  - src: /images/fantasy-joes/fj-compare-og.jpg
    caption: "One of 1,166 comparison URLs listed in the September 12, 2026 sitemap."
  - src: /images/fantasy-joes/fj-season-rankings-open.jpg
    caption: "Season Rankings Open, one of six peer-to-peer cash contests scored on ranking accuracy."
cardImage: /images/fantasy-joes/fj-six3-desktop.jpg
---

## What it is, and why I built it

Fantasy Joes is a fantasy-football ranking game. Instead of typing out a spreadsheet of your player rankings, you see six NFL players and pick the three you'd draft first, in order. Do that for a few dozen screens and you've ranked the whole player pool, without ever staring at a blank list.

The reason I built it starts with a problem I had with how fantasy rankings work. A lot of people who play fantasy football want to rank players well, and want to be known as the best ranker. But that's a closed system, mostly owned by one company. Expert consensus rankings come from FantasyPros, which decides who counts as an "expert" — you basically need a media presence to submit rankings, which locks out people who might actually be really good at it.

I'd also made rankings the normal way, in a spreadsheet, and it's boring. It appeals to a tiny audience. So I figured there were a few ways to innovate on it, and the main one was duels. That came out of a smaller thing I noticed doing it myself: I often didn't actually know my own preference between two players until I was forced to pick one. Rankings get followed too rigidly — people defer to a list instead of choosing who they'd actually take. Making you choose gets you to a ranking that's yours. The first version asked one pair at a time; the current preseason game shows six and asks for your top three, which builds a board much faster than one pair at a time.

I designed and built the whole thing myself with Claude Code — the game, the art pipeline, the Discord bot, the SEO pages, the growth dashboard, and the payment rails underneath.

## The game, and the rating system under it

The game is simple to play. In the preseason: six players, pick your first, second, and third, repeat. In season, weekly matchups scoped to a position ask one question, who scores more this week, two players at a time, for when you're setting a lineup. Both run on the same engine. No signup to start: guests can play on a device that remembers them.

A completed six-card screen records twelve ordered relationships (your first pick over the other five, your second over the other four, your third over the bottom three), scaled down so one screen doesn't count like twelve separate sessions.

What's underneath each tap is where most of the design went. It started from Elo, the rating system chess uses to rank players from head-to-head results, and I changed a lot about it from there. Six things that aren't in textbook Elo:

- **Scores are seeded from real data, not a flat starting number.** Every player's opening score comes from projections and ADP, so rankings start from where the market actually has them instead of everyone tied at a midpoint.
- **The K-factor scales with the rank gap** instead of being one fixed constant. The wider the gap between the two players going in, the more carefully the system moves their scores.
- **Upsets are amplified.** Take the lower-ranked player and win, and the scores move harder than a chalk pick would — a surprise carries more information, so it counts for more.
- **Matchups are chosen, not random.** The six on a screen come from a band of the rankings near each other, players you haven't seen come up before repeats, and in weekly play the second player is drawn from a range around the first, so pairings stay competitive instead of lopsided.
- **A "mover" boost injects real-world signal.** When a player's ADP shifts hard, the system shows them more for a stretch, so the rankings react to what just happened in the real world.
- **New players get a smaller pool first.** Early duels concentrate on the famous, high-consensus players and widen from there, so the ranking has something solid to build on before it hands you the long tail.

Your rankings re-sort live as you go. It's Elo-derived and heavily modified, not the same rating you'd get out of a chess app.

![Your draft rankings, updated after every screen, with the move against consensus and ADP](/images/fantasy-joes/fj-rankings-2026.jpg)

## Built twice

I first built this in late 2024 as the product manager, paying a freelancer to put it together on no-code tooling. The mechanic worked. But every duel took three to five seconds to load, which is fatal for a game whose whole appeal is tapping fast — and there were other bugs on top of that. As a potential user I could see it wasn't going to work without major improvements I wasn't ready to put the time and money into. I shut it down before the 2025 season rather than ship it slow.

I came back to it in early 2026 and rebuilt it from scratch, by myself, with Claude Code. Nothing carried over. What shipped is the fast version of the original idea: picks resolve instantly, guests can play with no signup, and the web app and the Discord game run on one shared code path so they behave the same.

## The machinery around the game

The game is the core. Most of the work is everything that turns it into a product one person can run.

**Player art.** Every ranked player gets an AI-generated comic portrait, so duels, share cards, and Discord all look on-brand without me drawing anything. The pipeline researches each player, generates the art, then runs a second AI pass that checks the result against a checklist — team colors, likeness, no extra limbs — and re-rolls if it fails. When a player gets traded, a daily job notices the team change and regenerates the stale art on its own.

**A Discord game.** The whole duel loop runs inside Discord as slash commands — play, build a board, see standings without leaving the server, no signup. Around it I built partner attribution: credit for a signup survives even when nobody clicks a link, backfilled from the server the player came from, and partners earn from the players they bring in with the math capped so payouts can never exceed what the game actually took in.

**Programmatic SEO.** A daily job reads every resolved draft duel, buckets them by player pair, and publishes a "Player X vs Y" page for each matchup that clears a vote threshold. By September 12, 2026, the sitemap listed 1,166 comparison URLs, each showing the crowd split from real duels — for example, [Jonathan Taylor vs. Christian McCaffrey](https://fantasyjoes.gg/draft/2026/compare/jonathan-taylor-vs-christian-mccaffrey) and [Puka Nacua vs. Justin Jefferson](https://fantasyjoes.gg/draft/2026/compare/puka-nacua-vs-justin-jefferson). A relevance filter sits underneath: before an expert quote renders, it checks that the quote actually names the right player, so a college linebacker who shares a surname with a star receiver doesn't get misattributed. When one of these pages is shared, it renders a preview card from live data — both players' comic art, their draft ranks, the vote split — that looks like a paid ad and is generated per matchup on demand.

![A live compare page — the crowd's lean, drawn from real duels](/images/fantasy-joes/fj-compare-pair-desktop.png)

Three more pieces round it out. A growth dashboard tracks the funnel by channel — first visit to first duel to retention, with cost-per-signup — and flags when attribution silently breaks. A short-form video renderer turns the same duel-split data into vertical "you vs. the crowd" clips, so no on-screen number is ever a guess. And the ad platforms get told when a visitor becomes a real player, so paid campaigns optimize on engaged users instead of clicks.

## Real money, built and audited

I built skill-based cash contests — head-to-head, 50/50s, and tournaments — funded by user-signed USDC transfers on Base. The system includes wallets, the payment flow, contest formats, and controls for geographic eligibility, age checks, tax withholding, and self-exclusion.

Before cash entry went live, I put the codebase through a multi-agent adversarial security audit I designed and ran: dozens of independent agents finding issues across the money rails, then re-verifying each other's findings, then a pass checking for what the first ones missed. Findings were remediated against the live code while the money system stayed switched off behind a flag. The scale of it is the point: a solo founder can't red-team a money system by hand at the depth this needed, so I built the review that could.

I tested a real-money entry in July 2026, and the payment system worked. Cash entry later went off. The paid contests attracted no paying customers.

![The homepage — make your own rankings, then see how they stack up](/images/fantasy-joes/fj-home-desktop.png)

One change I'm glad to point at came straight from that data. A "sign up now" screen was auto-firing early in a new player's session, and the data showed that gate was leaking users rather than converting them — the board that early was still mostly the consensus order, so the ask was landing before the rankings were actually the player's own. Moving it to a later, more personalized point was a one-line change the data told me to make.

## Where it stands

As of September 2026, the free game remains online. Search brought people to the comparison pages, but too few players kept building rankings or returned to play. I decided to stop treating Fantasy Joes as an active business bet. I explain the results and that decision in [the wrap-up](/writing/fantasy-joes-wrap-up).
