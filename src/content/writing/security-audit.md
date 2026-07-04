---
title: I ran a 94-agent security audit on my own app before turning on real money
date: "2026-07-03"
description: A solo founder with no security team red-teaming a money feature by orchestrating dozens of AI agents against the codebase — why the real-money bar is different, how the audit was structured, and what it cost.
draft: false
project: fantasy-joes
---

I build [Fantasy Joes](https://fantasyjoes.gg) by myself. One person, using AI tooling as the rest of the team. That works fine for most of what a fantasy football app does — if a duel renders wrong or a page is slow, someone tells me and I fix it. The cost of a bug is an annoyed user.

Then I built the part where people put real money in.

Fantasy Joes has a set of skill contests that run on USDC on Base. It's built and it's off — dark behind a flag, launching for the 2026 season, no real money live yet. But building it changed the question I had to answer before shipping. A bug in the free game is an annoyance. A bug in the money game costs someone real dollars, and it costs me the trust that the whole thing handles money correctly at all. The blast radius is different, so the bar has to be different.

The problem is I don't have a security team to raise the bar with. On a real company you'd have people whose whole job is to think like an attacker and try to break the thing you built. I have me, and I already think it works — I wrote it. You are the worst person to find the holes in your own reasoning, because the holes are exactly the parts you were confident about.

So I used the same thing I build everything else with. I pointed a large batch of AI agents at the codebase and told them to try to break it.

## How it was structured

The naive version of this is "hey Claude, is my code secure?" That doesn't work. You get a page of generic advice about validating your inputs, none of it grounded in your actual code, and you learn nothing.

What I ran instead was closer to how a real audit is organized, just with agents doing the labor. It came out to about 94 of them across a few stages.

The first stage was a set of specialists, each assigned one slice of the system to own — thirteen slices in all. Not one reviewer looking at everything, but thirteen reviewers each responsible for a single part and nothing else. Splitting it this way matters because a generalist skims and a specialist with one job goes deep. Each one read the real code and wrote up what it found.

That stage produces a lot of findings, and most of the value is in the next stage, which is throwing most of them away. A finding that sounds alarming and reads plausibly can still be wrong — the reviewer misread the control flow, or there's a guard three files over that already handles it. So every single finding went to a separate adversarial pass whose entire job was to disprove it: go back to the code, try to show this isn't actually exploitable. The ones that survived that were real. The ones that died were the plausible-but-wrong ones I would otherwise have wasted a day chasing.

Then a completeness pass looked for what the specialists missed — surfaces nobody covered, gaps between two reviewers' areas. Then everything got deduplicated, because thirteen reviewers submit the same issue in five different wordings. Then it all got ranked by severity, so I had an ordered list instead of a pile.

The point of all that structure is a document I could trust. Not "here are 200 things a language model is worried about," but a deduplicated, severity-sorted list where each item had already been argued against and lived. That's the difference between AI output and an actual audit.

## What it felt like to run

Mostly it felt like waiting and then reading. The orchestration is cheap to kick off and the compute does the fan-out while you do something else. The expensive part is on the other end: you get back a real report and you have to sit with it. Some of it stings, because it's your code and your assumptions being wrong in specific, well-argued ways. The adversarial stage is what makes it worth reading — I trusted the findings precisely because something had already tried to kill each one and failed.

The dollar cost was real but not scary — this is a lot of model calls, but it's a rounding error next to what a single day of a security consultant costs, and I got it the same afternoon.

Then I fixed things. The findings got remediated and the money paths got re-verified before anything went live, in a series of small deploy-and-check batches rather than one big scary commit. I'm deliberately not going to enumerate what was found — it's a live money system and the specifics stay private — but the flag never got flipped on with known holes behind it.

## What I'd tell another solo builder

If you're one person shipping something where a bug costs real money or real trust, you can't personally out-think your own blind spots, and you probably can't afford a security firm for a pre-launch app. Multi-agent orchestration is a genuine substitute for the part you're missing — not the judgment, but the adversarial labor. The one step you can't skip is the disproving pass. Take every finding at face value and you just get a longer pile of maybes; make something argue against each one first and what's left is worth your time.

I'd change one thing next time: run it earlier, and more than once. I ran it as a gate before launch, which is the right place for the big one, but a smaller version of this against each risky feature as I build it would catch the same class of problem while the code is still fresh in my head. I've since started doing exactly that on new money-adjacent work.

The real-money contests are still off, on purpose, until the rest of the pre-launch checklist clears for the 2026 season. But the audit is the reason I'll be comfortable turning them on.

If you want the fuller picture of the app this was run against, the [Fantasy Joes case study](/projects/fantasy-joes) has it.
