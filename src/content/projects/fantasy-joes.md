---
title: Fantasy Joes
tagline: Fantasy football ranking game where your picks generate your own player rankings. Real money tournaments planned for the 2026 NFL season.
status: current
order: 1
url: https://fantasyjoes.gg
tech: [Next.js, React, TypeScript, Convex, Tailwind CSS, Framer Motion, Radix UI, Sleeper API, ESPN API, Python]
skills: [Full-Stack Development, Real-Time Systems, Game Design, Algorithm Design, API Integration, Product Management, AI-Assisted Development, Data Pipeline Design, UI/UX Design]
heroImage: /images/placeholder-fj-hero.svg
year: "2024–present"
badge: "Active"
badgeColor: green
---

Every year, millions of people draft based on Expert Consensus Rankings from FantasyPros, which aggregates opinions from a handful of analysts. One company gatekeeps who qualifies as an "expert" — you basically need a media presence to submit rankings. That locks out people who might actually be really good at this.

Other companies have tried different ranking and leaderboard games, but most of them end up feeling like filling out a spreadsheet.

## The idea

Making manual rankings is tedious and appeals to almost nobody. But if you show someone two players — Ja'Marr Chase vs. CeeDee Lamb — and ask who they'd rather have, that removes all the mental burden. You just choose between two players, and an Elo system (like chess ratings) builds your rankings in the background. Instead of sitting down to rank 200 players, you play a game and the math handles the rest.

I noticed from personal experience that I often didn't actually know my preference between two players until forced to choose. People follow expert rankings too rigidly rather than picking who they actually want. The duel format forces real decisions — and opens up the ranking process to way more people.

## The first build (late 2024)

Built it with a freelance developer — the same person who'd worked on Alpaca College. Supabase backend, Bubble frontend. I was the product manager: explaining data sources, API connections, sketching flows, defining logic.

Had an MVP ready by the beginning of the 2025 season. Not as good as I hoped. The biggest problem: 5+ seconds of loading between each duel, plus a handful of other bugs and errors. In a game where you need to do this several hundred times, that kind of lag makes it unusable.

The gap between where it was and a monetizable product was too large as a solo founder. Working with the freelance developer, getting from broken to shippable felt too costly and too slow. I shut it down.

## The revival (March 2026)

Picked it back up in early March 2026. Only part-time work so far, but it's coming together fast.

The difference with AI development tools is significant. In about 1-2 weeks of part-time work, I have a version that's dramatically better than what took months and real money the first time. The UI looks better (designed in [Paper](https://paper.design)), I've got custom player art (comics and caricatures), and things that would have taken the freelancer weeks I can build in hours. Kept some core logic from the old version but basically building from scratch with Claude Code.

## What's next

**Monetization is stablecoin tournaments.** That's been the plan from the start. Tournament style: play over a week, bet on your ranking accuracy. Different feel from DraftKings/FanDuel — not hardcore dopamine-hit drafting. More of a weekly play, weekly bet. Entry fees, prize pools, rake.

**Joe Consensus Rankings** is the longer-term vision — aggregate rankings from thousands of regular players instead of a dozen experts. Possibly on-chain so ranking history is provable and doesn't depend on any single platform.

Targeting the 2026 NFL season. The core ranking system works. Still need tournaments, draft integration, and a content/distribution system to bring users in.

## Why this one fits

After Recess, where everything after the planning phase required heavy social execution, Fantasy Joes is all digital, all systems. I'm comfortable with every piece of the remaining work. That's a different feeling.

---

<h2 id="updates">Updates</h2>

### March 2026

Picked the project back up and rebuilt from scratch using Claude Code. In about 1–2 weeks of part-time work, the new version already surpasses what took months and real money with a freelancer. Designed the UI in [Paper](https://paper.design), added custom AI-generated player art (comics and caricatures), and built a 19-table relational schema on Convex with real-time syncing. The core Elo ranking system, duel mechanics, and multi-week scoring pipeline are all functional. Next up: tournaments and draft mode for the 2026 NFL season.
