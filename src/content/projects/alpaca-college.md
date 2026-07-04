---
title: "Llama College & Alpaca College"
tagline: Two attempts, two years apart, to organize scattered DeFi content. The second used an LLM to sort the feed. Both shut down on low adoption.
status: archive
order: 7
tech: [Bubble, LLM API, Discord Bots, Twitter API, RSS]
skills: [Product Management, No-Code Development, Bot Development, Content Curation]
heroImage: /images/alpaca/alpaca-college-ui.jpg
year: "2022, 2024"
---

## The problem

DeFi information is scattered on purpose. There's no central source, so something useful shows up once on Twitter or in a Discord and is then effectively gone. Developers spent their time answering the same community questions over and over.

## Llama College (2022)

I built it solo in Bubble, a no-code tool, starting with the Curve Finance and Convex Finance communities. It was a feed you could filter by project, plus a permissions system so a project's team could curate its own page.

Two pieces worked well. A Discord FAQ bot answered repeated questions from a stored FAQ — before ChatGPT, so rule-based, not a model. And a Twitter save bot: reply "save [project]" to any thread and the bot archived it to that project's page. The protocol saw what was being said about them; the author saw their work kept. That one worked until Twitter's API got unreliable around the ownership change.

Convex Finance's developers sent a small unsolicited donation — a couple thousand dollars, a "this is cool" gesture.

## Alpaca College (2024)

Two years later I rebuilt the idea and dropped the part that hadn't worked. Team-managed pages were too much of an ask: teams got an empty page and didn't know what to do with it. So I automated it: RSS feeds from YouTube, podcasts, and articles, with an LLM API sorting each item by project and topic. You followed the tags you cared about, like restaking or stablecoins, and got a feed.

## Why both died

Low adoption, both times. Alpaca launched into a DeFi market where retail interest was already draining out, and near the end I barely used my own product. I could tell from showing it around that nobody else cared either.

The clearest lesson took me two builds to see. My real bet on crypto is that it wins by disappearing into the background, where nobody notices it's crypto. A content aggregator for crypto obsessives is the opposite of that bet. I was building against my own thesis, twice, and it took failing at the same idea a second time to admit it.
