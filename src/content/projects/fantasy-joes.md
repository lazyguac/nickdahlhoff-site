---
title: Fantasy Joes
tagline: A fantasy-football ranking game I designed, built, and run by myself with Claude Code — web app, Discord game, real-money contests, and the growth machinery around them.
status: current
order: 1
url: https://fantasyjoes.gg
tech: [Claude Code, Convex, Netlify, Gemini, Claude API, Sleeper API, ESPN API]
skills: [Full-Stack Development, Real-Time Systems, Game Design, Algorithm Design, API Integration, Product Management, AI-Assisted Development, Data Pipeline Design, UI/UX Design]
heroImage: /images/fantasy-joes/fj-compare-og-card.jpg
year: "2026"
badge: "Active"
badgeColor: green
---

## What it is

Fantasy Joes is a fantasy-football ranking game, and I designed, built, and operate the whole thing myself using Claude Code as the engineering team. That is one product across the entire stack, run by one person: the game, the art pipeline, the Discord bot, the SEO engine, the growth dashboard, the video renderer, and the real-money payment rails underneath it. Of the 252 commits in the repository, 244 carry a Claude co-author trailer, across several model versions as Anthropic's tooling improved during the build.

I direct it and I review every line before it ships. The models write code under that direction; I decide the architecture, catch what they get wrong, and own the result. The commit history is the honest record of how the two fit together.

![The core game loop: two players, tap the one you'd rather have](/images/fantasy-joes/fj-duel-desktop.png)

The game itself is simple to play. Instead of typing out a spreadsheet of your player rankings, you see two NFL players and tap the one you'd rather draft. That is a duel. Do it a few hundred times and you have ranked the whole player pool without staring at a blank list. Plenty of drafters rank a full pool by hand; Fantasy Joes takes the chore out of it and leaves you with rankings that are yours rather than a copy of the consensus ADP everyone else drafts off.

## The mechanic under the tap

The interesting engineering is what happens under each pick. Every duel runs through an Elo rating system, the same math chess uses to rank players from head-to-head results. Both players start from a base score, and each pick moves the winner up and the loser down. An upset, where you take the lower-ranked player, moves the scores more than a chalk pick does, because the system treats a surprising result as more information. Your rankings re-sort live as you go. Two modes run on that one engine: a pre-season draft board across every position, and in-season weekly duels scoped to a position when you are setting a lineup.

## Why I built it twice

I first built this in late 2024 as product manager, paying a freelancer to put it together on no-code tooling. The mechanic worked, but three-to-five-second load times between duels were fatal for a game whose whole appeal is rapid-fire tapping. I shut it down before the 2025 season rather than ship something slow.

I came back to it in February 2026 and rebuilt it from scratch by myself with Claude Code. Nothing carried over from the old version. It is a Next.js and Convex app, and what shipped is the fast version of the original idea: duels resolve instantly, guests can play with no signup, and the web app and the Discord game run on one shared code path so they behave identically.

![Your rankings, tiered, with ADP and Elo side by side](/images/fantasy-joes/fj-rankings-desktop.png)

## The machinery around the game

The game is the core. Most of the work is in everything that turns it into a product one person can operate.

**Player art.** Every ranked player gets an AI-generated comic portrait, so duels, share cards, and Discord all look on-brand without me drawing anything. The pipeline researches each player and generates the art, then a second AI pass checks the result against a checklist, team colors, likeness, no extra limbs, and re-rolls if it fails. When a player gets traded, a daily job notices the team change and regenerates the stale art on its own.

**A Discord game.** The whole duel loop runs inside Discord as slash commands, so you play, build a board, and see standings without leaving the server, no signup required. I also built partner attribution around it: every bot link carries a referral code, and credit for a signup survives even when nobody clicks the link, backfilled from the server the player came from. A partner earns a flat bounty per first-time depositor plus a share of the rake that player generates, with a closed-form check that guarantees payouts can never exceed the rake the house took in.

**Programmatic SEO.** A daily job reads every resolved draft duel, buckets them by player pair, and publishes a "Player X vs Y" page for each matchup that clears a vote threshold. 145 of them are live right now, each showing the crowd split from actual duels: for example, [Jahmyr Gibbs vs. Bijan Robinson](https://fantasyjoes.gg/draft/2026/compare/jahmyr-gibbs-vs-bijan-robinson) and [Jonathan Taylor vs. Christian McCaffrey](https://fantasyjoes.gg/draft/2026/compare/jonathan-taylor-vs-christian-mccaffrey). A relevance filter sits underneath: before rendering an expert quote, it verifies the quote actually names the right player, so a college linebacker who shares a surname with a star receiver does not get misattributed on the page. When a page gets shared, it renders a preview card from live data, both players' comic art, their draft ranks, and the vote split. It looks like a paid ad and it is generated per matchup on demand.

![A live compare page — the crowd's lean, drawn from real duels](/images/fantasy-joes/fj-compare-pair-desktop.png)

Three more pieces round it out. A growth dashboard at `/admin/growth` tracks signup and duel deltas, a funnel from first visit through first duel to retention, per-channel activation with a spend-log join for cost-per-signup, and a canary metric that flags when attribution silently breaks; its footer states which numbers are not captured yet, so I do not fool myself reading it. A short-form video renderer turns the same duel-split data into a vertical "you vs. the crowd" clip, driven entirely by the data so no on-screen number is ever a guess. And the ads instrumentation fires a qualified-user event to Reddit and TikTok the moment a visitor crosses the engagement threshold.

## Real money, built and audited

The endgame is skill-based cash contests, head-to-head, 50/50s, and tournaments, funded by user-signed USDC transfers on Base. The rails are done: wallets, the payment flow, six contest formats, and the compliance scaffolding for geo-gating, age checks, tax withholding, and self-exclusion.

Before any of it could go live, I put the codebase through a multi-agent adversarial security audit I designed and ran: dozens of independent agents finding issues across the money rails, then re-verifying each other's findings, then a pass checking for what the first agents missed. I read the results, decided what to fix, and shipped the remediations against the live code, all while the money system stayed switched off behind a flag. The judgment stayed mine. The agents were how one person red-teamed a money system at a depth I could not reach by hand in the time I had.

Real money is not live to the public. It is built and audited, and it launches for the 2026 NFL season.

## Where it stands

As of late June 2026, real people have played 14,000+ duels across 1,000+ users, with no paid marketing behind it yet. I watch the duel count rather than signups, because dueling is the product; registration comes later, once their rankings are genuinely their own rather than the consensus order everyone starts with.

![The homepage — make your own rankings, then prove they beat the experts](/images/fantasy-joes/fj-home-desktop.png)

Some of the work I am most glad to point at came from reading that data honestly. A "sign up now" screen was auto-firing early in a new player's session, and the analytics showed that milestone gate was leaking users instead of converting them. I moved the ask to a later point where the board is fully personalized, a one-line change the data told me to make. Watching behavior and fixing what it reveals is the loop I would want a team to see. The 2026 NFL season kicks off in September, which is when all of this gets its first live test.
