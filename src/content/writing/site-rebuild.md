---
title: "I rebuilt this site with AI agents, and the hard part was making them write the truth"
date: "2026-07-03"
description: "Rebuilding nickdahlhoff.com in a day with a fleet of AI agents — and why the real work was writing rules that kept them from making things up in my voice."
draft: false
image: /images/nick-headshot-640.jpg
---

I rebuilt this site in a day.

Not by hand. I had a plan, then I pointed a fleet of AI agents at it — miners that read each product's actual code, writers that turned that into pages, critics that flag problems but never touch the text, and a verification pass that tries to break what the writers produced. Claude Code running the whole thing. The point wasn't to see if AI could build a website. It obviously can. The point was whether it could write pages that sound like me and are true.

The first version failed on the second part.

It read fine. It passed every check for the usual AI tells. But when I actually read the pages, they were full of things I never said and numbers that didn't exist. One page claimed I had "real businesses" willing to be in a coloring book — I sold one, singular. Another gave a timeline for how fast something happened that nobody could have known, because it wasn't true. A product page told the reader I review every line of Fantasy Joes before it ships, which isn't how I work. One sentence proudly audited the repository's own history — plumbing trivia on a page meant to tell someone what a product is.

I rejected it hard. The rule I landed on was blunt: if you don't know what I think, don't say a thing. Don't guess what I'd have an opinion on. That's too easy to get wrong, and getting it wrong in my own voice is worse than saying nothing.

Here's what I found interesting about the fix. It wasn't editing the pages. Editing the pages would have caught that batch and let the next one through. The fix was rules — a system the agents run inside, so the failure can't happen again.

Three rules did most of the work.

**Every "I" statement has to trace to something I actually said.** Not something plausible. Not something a founder like me probably believes. An opinion, a habit, a motivation — if it's in my voice, there's a source, in my own recorded words, or the sentence states the fact and drops the stance. When the writer doesn't know what I think, it isn't allowed to invent it.

**Product pages get written from the product's code, not from a summary.** The first round leaned on secondhand descriptions, and it showed — the pages were generic, the kind of thing that could be about any app. So now a miner reads the real repo before anyone writes a word, and the page has to land what the thing actually is and what's genuinely good about it, not a vibe of it.

**There's a voice-truth ledger, and an adversarial pass that tries to break it.** Every first-person claim in a draft gets written down next to its source. Then a separate step goes down the list trying to prove each one wrong against the original material — a stance stronger than the source gets flagged, a stance that appears in the text but not the ledger gets flagged automatically. It's the writing equivalent of a code review that assumes the code is broken until it survives.

The second generation of pages is the best AI writing I've gotten yet. Not because the model got better in a day — because it was writing inside a system that wouldn't let it make things up.

There's one more piece, and it's the part I care about going forward: the site maintains itself now.

It's a living record, not a snapshot. The problem with a portfolio is that it goes stale — a number that was true in June is quietly wrong by August, and nobody notices. So the numbers that move are quarantined to one dated section per page, each with a refresh recipe written down where the site lives, not in my head. A weekly job mines what I actually built that week from the real repos and drafts a build-log post about it. When a post is tagged with a project, it becomes that project's update automatically — publishing the post is the changelog entry, so there's no separate log to maintain and forget. A monthly pass re-checks the dated numbers.

This post is the system working on itself. A scheduled task found the week's work — this rebuild — and drafted it. I answer a few questions and say yes.

The plain reason for all of it: I'm looking for the right team, the kind of small early group that needs one person who can build, design, write, and ship. My applications were already turning into interviews. What was missing was the evidence — the work was real, but it was invisible. This site is where it stops being invisible. It made sense to build it the way I build everything else, with AI doing the work and me directing it. The only thing that took real effort was making it tell the truth.

