---
created: 2026-09-02
edited: 2026-09-02
tags:
  - nickdahlhoff-site
  - redesign
  - copy
  - copywriting
  - voice-truth
  - homepage
  - case-study
  - updates
  - writing-system
  - needs-review
  - active
---

# Site copy for the redesign — draft for Nick's approval

Every first-person line below traces to something Nick said or shipped. The ledger at the
bottom lists the source for each one. Nothing ships until Nick says so.

Process used: source-first (your July 2026 outreach emails, the March 2026 project interviews,
the shipped site pages), then the anti-slop pass from `docs/content-writing-guide.md` Part 3
(no "here's the thing", no it's-not-X-it's-Y flips, no filler intensifiers, one dash per
paragraph at most, cut anything that loses nothing when deleted), then an adversarial pass
against the ledger (stance stronger than its source gets flagged).

Sources are abbreviated: **E-Jul7** = your email to SuperMe, 2026-07-07 · **E-Jul2** = your
email to Atlantic Labs, 2026-07-02, and the 2026-07-21 / 07-24 replies · **E-Mar23** = your email
to Replit, 2026-03-23 · **T-<project>** = the 2026-03-10 interview transcripts in the knowledge
hub · **Site** = copy already live on nickdahlhoff.com (shipped, so approved).

---

## Homepage

### Nav

Nick Dahlhoff · Things I've made · Updates · **Email me**

### Hero

Kicker (small mono line above the name):

> THE WHOLE TEAM ON MY OWN PRODUCTS

H1: **Nick Dahlhoff**

Lead paragraph, three options. A is the recommendation; it is almost word for word your
July pitch.

**A (recommended)**
> For the last few years I've been the whole team on my own products. With AI I work across
> the product, the engineering, and the growth at the same time. Before AI, I built a
> language-learning review site to 100,000 monthly readers and a six-person team, and sold
> it for about $960,000.

**B (shorter, product first)**
> I build products and get them users, as the whole team. Right now that's Fantasy Joes, a
> fantasy football ranking game with real-money contests, built solo with Claude Code.
> Before AI, I built a review site to 100,000 monthly readers and sold it for about $960,000.

**C (keep the current site line)**
> With AI, I play the role of product manager, engineer, and growth marketer at the same
> time — I decide what's worth building, then build it and get it users. My last company sold
> for $960,000.

Under the paragraph, unchanged from the live site:

> Looking for a team that needs a do-everything builder →
> West Michigan · open to relocating in the US or working remote

Primary button: **Email me**

### Now band

Label: NOW · LIVE AT FANTASYJOES.GG

Title: **Fantasy Joes**

> A fantasy football ranking game. Six players at a time, you pick the three you'd draft
> first, in order, and your rankings build themselves in the background. Then you can play
> those rankings for money, against other people, not the house. I built all of it and I run
> the growth: a Discord version of the game, programmatic SEO pages, ad tests, short-form
> video.

Link: Read the case study →

### Things I've made

Title: **Things I've made**

Right-side label: ONE EXIT AND A LOT OF BUILDING · 2012 → 2026

Eight cards. Title, meta line, two or three sentences.

**All Language Resources** · 2016–2021 · SOLD FOR $960K
> A review site for language-learning apps, started in a Beijing apartment while I was
> teaching. It grew to 100,000 readers a month on search, with six regular contributors, and
> I sold it in 2021. It's still live.

**Hometown Coloring Book** · 2026 · PAUSED
> Free coloring books for families, paid for by the local businesses in them. Every
> sponsor's ad is a coloring page, drawn by a pipeline I built. 21 West Michigan editions,
> one sponsor sold, and then I stopped rather than build a door-to-door sales company.

**Recess in the Neighborhood** · 2025–2026 · PAUSED, NEEDS A CO-FOUNDER
> A family club for West Michigan: daycare, after-school classes, and a place for parents to
> work and gather. I built the whole plan in about three months, financial model to investor
> site. It's finished. It's waiting on a co-founder to run the people side.

**Aura Finance** · 2024–2026 · CONTENT & SOCIAL
> Ran content and social for a DeFi protocol for two years, mostly on my own, from Beijing
> and then Michigan. Daily posts, the blog, the graphics, and AI-generated video with a
> recurring purple character.

**Llama College & Alpaca College** · 2022, 2024 · SHUT DOWN
> Two tries at organizing scattered DeFi content, two years apart. The second used an LLM to
> sort the feed. Both died on low adoption.

**Manga Method** · 2019 · SHELVED
> A language-learning app built on webtoons. Tap a line to hear it, double-tap to translate
> it. Users added thousands of translated lines. Built through an agency before AI, and the
> math didn't close.

**Teaching in Beijing** · 2016–2019
> Three schools in three and a half years. Wrote every lesson at a public school that had no
> curriculum for the foreign teacher, led a first-grade team at an IB school, and built a
> phonics curriculum that still sells on Teachers Pay Teachers.

**Poker** · 2012–2016 · PROFESSIONAL
> Played online for a living while living across Latin America. It was a job, not a
> passion, and it paid for four years of travel. It's also where the bankroll math behind
> Fantasy Joes' contests comes from.

### Updates

Title: **Updates**

> A build log. When something real ships, it gets a dated entry here and on its project's
> page.

Filter chips: All · Fantasy Joes · This site · Hometown Coloring Book

Link: Browse all updates →

(Post titles and descriptions stay as published.)

### Contact

Unchanged from the live site:

> If you're building something and need someone who can take it from idea to shipped,
> email me.

Button: **ndahlhoff10@gmail.com** · @lazyguac · LinkedIn

### Page title and meta description

Title: Nick Dahlhoff

> Nick Dahlhoff builds products and gets them users, as the whole team. Fantasy Joes now,
> a $960K exit before. Grand Rapids, Michigan; remote or relocate.

---

## Fantasy Joes case study (header only; the body is the existing page, refreshed)

Meta line: 2026 · LIVE · FANTASYJOES.GG

H1: **Fantasy Joes**

> A fantasy football ranking game with real-money contests. Six players at a time, you pick
> the three you'd draft first, in order, and your rankings build themselves. A web app, a
> Discord version of the game, six cash contests, and an art pipeline for hundreds of player
> portraits. Designed and built solo with Claude Code and Codex.

Latest-update box: stays a bracketed placeholder until the numbers are refreshed from
Convex prod, per the site's living-pages rule.

Body change required before publish: `src/content/projects/fantasy-joes.md` still describes
the two-player duel. The mechanic paragraph and the first image caption need the Six3
version. Everything else in that body was written from the code and stands.

Image captions (factual, keep):
- The core screen. Six cards ordered by ADP; tap your first, second, and third. Every
  completed screen writes twelve player relationships into your rankings.
- Mobile first. Most Joes play on a phone.
- The payoff: a living board of 180 players with your rank, the move versus consensus, and
  ADP. Drag to tune, export five formats.
- One of about 167 public compare pages generated from the game's own data.
- Season Rankings Open, one of six peer-to-peer cash contests scored on ranking accuracy.
- 188 caricature portraits from an art pipeline that grades its own output.

Section: **Updates on Fantasy Joes** (post titles as published).

Footer row label: MORE THINGS I'VE MADE

---

## Project page template (Hometown shown)

Meta line: 2026 · PAUSED · HOMETOWNCOLORINGBOOK.COM

H1: **Hometown Coloring Book**

Tagline, unchanged from the live page:
> A sponsor-funded coloring book for West Michigan families, built end to end, including
> the AI pipeline that turns a sponsor's business into a custom coloring page.

"Where it stands" box:
> Sold one page from cold outreach. Never took it to print. Stopped rather than become a
> field-sales company.

Image caption:
> Three of the 21 edition covers; a finished page where it ends up, on the fridge; and a
> sponsor page as it came out of the pipeline.

Body: the live page's sections, unchanged.

---

## Updates index

H1: **Updates**

> A build log. Every real milestone gets a dated entry: what shipped, what broke, and what
> I'd do differently. Each entry also appears on its project's page.

Meta description:
> Nick Dahlhoff's build log: dated updates from Fantasy Joes and the other things he's made.

Month headers (JULY 2026), filter chips, post titles and descriptions as published.

---

## Voice-truth ledger

| Line | Source |
| --- | --- |
| "the whole team on my own products" | E-Jul7: "For the last few years I've been the whole team on my own products." |
| "With AI I work across the product, the engineering, and the growth at the same time." | E-Jul7: "With AI I can work across the product, the engineering, and the growth at the same time." |
| "Before AI, I built a language-learning review site to 100,000 monthly readers and a six-person team, and sold it for about $960,000." | E-Jul7: "Before AI I built a language-learning review site to 100k monthly readers and a six-person team, and sold it for around $960k." |
| "I build products and get them users" (option B) | Site hero: "I decide what's worth building, then build it and get it users." |
| "Looking for a team that needs a do-everything builder" / location line | Site, shipped. |
| "your rankings build themselves in the background" | T-fantasy-joes: "you play a game and your rankings adjust in the background." |
| "for money, against other people, not the house" | Fantasy Joes brand doc, Nick-approved: "You against other players, not the house." |
| "I built all of it and I run the growth: a Discord version of the game, programmatic SEO pages, ad tests, short-form video." | E-Jul7, near verbatim. |
| "One exit and a lot of building" | E-Mar23, your own TLDR line. |
| ALR card | Site ALR band + T-alr. "still live": Site. |
| Hometown "paused" | E-Jul2: "a post-ai project I've since paused." Body facts: Site page. |
| Recess "family club… daycare, after-school classes, and a place for parents" | E-Mar23: "a modern family club concept… combine daycare, after-school/weekend enrichment classes, and a large member area for families." "waiting on a co-founder": Site page + T-recess. |
| Aura card | Site page (two years, mostly solo, Beijing then Michigan, AI video, purple pepe). |
| Llama/Alpaca card | Site page. |
| Manga card | Site page + T-manga ("Did the math… Numbers didn't work"). |
| Teaching card | Site page. |
| Poker "It was a job, not a passion" | T-poker: "I don't think it was ever really part of my identity; it was just my job." and "I don't know if I've ever loved poker." |
| Poker "paid for four years of travel" | Site tagline. |
| Poker "where the bankroll math behind Fantasy Joes' contests comes from" | Site poker page: "That last part is the through-line to Fantasy Joes, where I built the real-money tournament mechanics." |
| "Designed and built solo with Claude Code and Codex" | E-Jul2 (07-21): "I've built everything using Claude Code and Codex." |
| Updates blurb: "what shipped, what broke, and what I'd do differently" | Site /writing subhead, shipped. |
| "Each entry also appears on its project's page" | Site CLAUDE.md, the living-pages rule (a fact about the system, not a stance). |
| Contact line | Site, shipped. |

## Adversarial pass (what I cut or changed, and what to check)

- Cut from the earlier design: "Product · Engineering · Growth · one person, with AI" as
  the kicker. It's a label, not a sentence you'd say. Replaced with your own phrase.
- Cut "Everything from the art pipeline to the payment rails" and "Art pipeline to payment
  rails." Nice rhythm, no source, says less than the sentence it replaced.
- Cut "Where the EV instincts behind Fantasy Joes come from." "Instincts" is a stance you
  didn't state; the poker page says the through-line is the tournament mechanics, so the
  card now says "bankroll math."
- Cut "including the ones that didn't work" from the section label. True, but it reads as a
  posture. Your own "One exit and a lot of building" does the same job without it.
- Changed Hometown from "set down" to "paused": your July email says paused; the page body
  still says "set it down," and both are yours, so either is defensible. Pick one and I'll
  use it everywhere.
- Check: Aura dates. The live page says "early 2024 to early 2026"; the knowledge hub says
  the work ended December 2025. The card says 2024–2026 to match the live page. Say which
  is right.
- Check: "$960,000" vs "$960K" vs "about $960,000." Your emails say "around $960k"; the site
  says "$960,000" in prose and "$960K" in labels. The draft keeps that split.
- Nothing in this draft states an opinion, habit, or motivation that isn't in the ledger.
