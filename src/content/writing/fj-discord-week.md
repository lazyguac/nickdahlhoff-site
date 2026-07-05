---
title: "Turning Discord servers into a distribution channel for Fantasy Joes"
date: "2026-07-04"
description: "The week I built partner attribution for Discord, made the channel measurable in the growth dashboard, and rebuilt the comics pipeline to reject its own bad art."
draft: false
project: fantasy-joes
---

Fantasy Joes has a Discord version of the game. You can play the duels — two players, pick who you'd rather have — right inside a server, no account, no website. A partner who runs a fantasy football server installs the bot, and their members start dueling. That part already worked.

What didn't work was knowing whether it mattered. So this week was about that: turning those servers from a nice feature into a distribution channel I can actually see.

## Credit that survives no click

The first partner community went live, which turned an abstract problem concrete. When someone plays in a partner's server and later signs up on the site, that partner should get credit. The old way to make that happen was clunky — the player had to run a `/claim` command, copy a code, and paste it into a form after registering. Almost nobody did. Nineteen players had built rankings in the first partner's server; zero had ever completed that dance.

So I rebuilt it. Every link the bot posts now carries the partner's code, so a normal signup from a normal click credits them. But the more useful piece is what happens when there's no click at all. A player who dueled in a server has a shadow account stamped with that server's ID. When they eventually register — even cold, even on a different day — the system backfills the credit from that server. The attribution doesn't depend on anyone doing the right thing at the right moment.

The registration flow changed too. Instead of "claim your board," which sold a problem the player didn't feel (their board was right there in Discord, nothing was at risk), the page now shows them their own rankings and frames the ask as the thing that's actually appealing: your duels built this, register and compete with it. After signup their Discord duels attach automatically. No code, no form.

## Making the channel measurable

I run a growth dashboard for Fantasy Joes — signups, duels, funnel steps, per-channel breakdowns. It didn't have a view for Discord, which meant the whole channel was a blind spot. This week it got a Discord tab: per-server duel volume, today and over the last week, plus Today's Ten activity per server.

The point of building it was to answer a question I couldn't answer before, and now I can. Over the seven days ending July 3, Discord servers accounted for **about 29% of all duels played**, essentially all from that one partner's server. That's a real chunk of daily activity from a channel that was invisible a week ago. (It's one server, so the number will move a lot as more come on or that one cools off; the dashboard reads it live.)

## The comics pipeline learns to check its own work

Different track, same week. Every ranked player in Fantasy Joes has a cartoon headshot — used in the duels, on the comparison pages, in the Discord cards. They're AI-generated, because hand-drawing a few hundred players and redrawing them as things change isn't realistic for one person.

The honest origin of this week's rework: when a player got traded, the art didn't keep up. The headshot bakes in team colors as a background, so a traded player kept wearing his old team until something forced a redraw — and nothing reliably did. Stale art on a live product.

The rebuild fixed that and hardened the rest. It pulls a full-resolution headshot now, with a fallback source if the first one has no real photo — and if neither does, it stops rather than inventing a face. The research step that gives each player a real personality detail retries instead of giving up on the first failure.

The best part is the last gate. After an image generates, a vision model looks at it against a checklist — right team colors, actual likeness, props in sensible places, no warped faces or extra limbs — and rejects it if it fails, re-rolling automatically. It went from generate-once-and-hope to a pipeline that checks its own output before it ships. That's the version of "fix the system, not the instance" I keep coming back to: not redrawing one bad comic, but making the pipeline catch bad comics on its own.

## What's next

The season. Fantasy football attention starts building in earnest through August into the September kickoff, and that's the window everything is pointed at. The real-money side of Fantasy Joes — skill contests on your ranking accuracy — is built and audited, and it launches for the 2026 season. Until then the work is the free game and the channels that feed it: more partner servers, a comics pipeline that maintains itself, and a dashboard honest enough to tell me which of this is actually working.

