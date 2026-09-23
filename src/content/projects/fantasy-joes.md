---
title: Fantasy Joes
tagline: Pick your top three from six NFL players. Each choice helps build your own fantasy football rankings.
status: archive
order: 3
url: https://fantasyjoes.gg
tech: [Claude Code, Convex, Netlify, Gemini, Sleeper API]
skills: [Product Management, Game Design, Full-Stack Development, Growth]
heroImage: /images/fantasy-joes/fj-six3-desktop.jpg
heroAlt: The six-player Fantasy Joes draft game
heroCaption: "Pick three players from six, in order. The weekly game now uses the same Six3 format."
gallery:
  - src: /images/fantasy-joes/fj-six3-phone.jpg
    kind: phone
    caption: "Six3 on a phone. The free game can start without an account."
  - src: /images/fantasy-joes/fj-compare-og.jpg
    caption: "An earlier pair comparison card. Current comparison pages embed the six-player game."
  - src: /images/fantasy-joes/fj-rankings-2026.jpg
    caption: "A July draft ranking after one round. Picks move players on your board."
  - src: /images/fantasy-joes/fj-season-rankings-open.jpg
    caption: "Season Rankings Open, one of the peer-to-peer cash contests I built."
year: "2026"
stage: Maintained
cardImage: /images/fantasy-joes/fj-six3-desktop.jpg
cardBlurb: "Pick three from six NFL players to build your own rankings. I built the game, Discord version, search pages, and cash system. The free game is live; I stopped pursuing paid contests."
latestUpdate:
  date: "2026-09-23"
  summary: "The free game remains live. I stopped developing Fantasy Joes as a business after the paid contests failed to attract customers."
---

## Why I built it

I was interested in fantasy football rankings, but making my own in a spreadsheet was boring. I also wanted ordinary players to have a way to show how good their rankings were. The established expert lists put a lot of weight on having a media presence before anyone sees your calls.

The first idea was simple. Show me two players and make me pick one. I found that I didn't always know which player I preferred until I had to make that choice. Do it enough times, and I have a ranking built from my own decisions. The game can then score those rankings against NFL results.

## What I built

Fantasy Joes started with those two-player picks. Both the draft and weekly games later changed to show six players at a time. You choose the three you'd take first, in order. One round captures several preferences, so your rankings change faster than they did with individual pairs. The ranking algorithm starts from where players tend to be drafted or their projected weekly points, then gives more weight to surprising choices as you play.

The live weekly game asks which players you expect to score most that week. You can try it for free without signing up. Saving your rankings and seeing how they scored against NFL results requires an account. The draft game and its rankings remain on the site too.

I had tried the pair-pick idea before the 2025 season with a freelance developer. It took three to five seconds to load the next choice, which made a quick game feel slow, so I stopped. In 2026 I rebuilt it myself with Claude Code, including the illustrated player cards and a Discord version.

I also built player comparison pages drawn from the game's picks. A matchup page shows how the crowd chose between two players. It also embeds the six-player game, where visitors can make their own picks. By September 2026, the site had more than a thousand of these pages. Search brought people to them; turning those visits into regular play was harder.

Around the game I built a player-art pipeline that could refresh portraits after team changes, a Discord game, partner attribution, and a growth dashboard tracking where visitors became players. A daily job published comparison pages from the draft picks, and the share cards used the same live data. These systems let me run more of the product alone, even when they didn't solve retention.

I built a real-money contest system too, with wallets, seven contest formats, and eligibility controls. I ran an adversarial security review, fixed its findings, and tested a paid entry end to end in July. The contest work never turned into a paying business.

![A September 2026 comparison page showing current player art, the crowd's preference, and weekly matchup details](/images/fantasy-joes/fj-compare-page-week3-2026.png)

## Why I stepped back

I planned to make money through paid contests based on ranking accuracy. The product got search traffic and some people played a lot, but an August 23 production check found no organic paid entries. The underfilled contests were cancelled in September, and cash entry is off.

The harder question was whether enough people would spend the time to make their rankings feel personal. The business also needed them to pay for contests repeatedly. I doubted one set of rankings gave people much reason to do that. I also wasn't sure I had built for a specific player I understood well enough. I stopped pushing it as a business before the 2026 season.

The free weekly game is still live. I maintain what is already there while putting my time into Hometown Coloring Book. I explain the results and the decision in [the Fantasy Joes wrap-up](/writing/fantasy-joes-wrap-up).

<!-- Voice-truth ledger: spreadsheet boredom, opening ordinary players' rankings, media-presence concern, forced player preference, slow first build, and solo Claude Code rebuild come from the 2026-03-10 Fantasy Joes interview transcript. The paid-contest doubts, uncertainty about the audience, decision to step back, continued maintenance, and Hometown focus come from Nick's 2026-09-22 journal. The contest-system and security-review details come from the original case study and September 22 career draft. Both current modes use Six3 per /Users/nick/personal-knowledge-hub/2026/09/10/fantasy-joes-weekly-six3-release.md; comparison pages embed it per /Users/nick/personal-knowledge-hub/2026/09/12/fantasy-joes-weekly-mode-release-2026-09-12.md. Metrics and cash status: /Users/nick/personal-knowledge-hub/2026/09/22/fantasy-joes-postmortem.md, sourced to dated production reads. Refresh the dated scale claim from the live sitemap before changing it. -->
