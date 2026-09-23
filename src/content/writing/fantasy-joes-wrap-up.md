---
title: "What happened with Fantasy Joes"
date: "2026-09-23"
description: "The ranking game improved and search traffic grew, but the paid contests didn't become a business. Here's what I built, what happened when people used it, and why I moved on."
draft: false
project: fantasy-joes
image: /images/fantasy-joes/fj-six3-desktop.jpg
---

My last [Fantasy Joes update](/writing/fj-discord-week) here was in early July. Since then, I rebuilt parts of the game, put real-money contests live and tried several ways to reach players. Search brought people in. In the 30 days ending September 23, the game recorded 11,491 ranking choices. But I eventually decided to stop developing the product and leave the rest of my growth plan unexecuted, because I couldn't see the paid tournaments becoming the business I expected.

The original opportunity still made sense to me. Fantasy football rankings are usually handed down by experts, and making your own from scratch is tedious. I wanted ordinary players to be able to make their own calls, see how good those calls were, and eventually compete on them. Fantasy Joes turned those calls into a game: choose the player you'd rather draft and the rankings build as you play.

## Getting the rankings right

I find it easier to answer “Which of these two would I rather draft?” than to sit down with a spreadsheet and rank a full player pool. Sometimes the choice makes me realize my preference differs from the expert rankings I've been using. That was the best part of the original two-player game.

The problem was how long it took before the rankings felt like yours. Fantasy Joes starts you with consensus rankings. Getting from that starting point to rankings that reflected a player's own preferences took more time than I had expected or modeled. Even after a lot of improvements, it was slower than I had hoped.

I changed the main game from one choice between two players to a screen with six players where you pick your top three. That gave the ranking system more information per screen. I also changed which players the game showed and how it used each answer, with more attention on getting the top of the rankings right. The ranking math became quite a bit more involved than the Elo-inspired system I started with.

<figure class="post-figure">
  <img src="/images/fantasy-joes/fj-six3-desktop.jpg" alt="Fantasy Joes game screen with six illustrated NFL players and a prompt to pick the top three in order" loading="lazy" />
  <figcaption>The six-player game.</figcaption>
</figure>

The changes made the rankings more accurate in my tests. But I wasn't seeing many players keep going long enough to build a list that reflected their own opinions. I think that slow payoff was part of why many didn't return. It also made the paid contests harder to sell: people needed to trust the rankings they were entering.

## The paid game

The plan was for anyone to make their own rankings and enter them in contests against other players. Fantasy Joes would compare each entrant's rankings with actual NFL fantasy points, and the most accurate rankings would win. I built season-long and weekly formats, along with the scoring system, and set up payments in USDC on Base. I tested a real-money entry myself, and it worked.

<figure class="post-figure">
  <img src="/images/fantasy-joes/fj-season-rankings-open.jpg" alt="Fantasy Joes Season Rankings Open contest graphic showing rankings scored over an 18-week season" loading="lazy" />
  <figcaption>The season-long rankings contest.</figcaption>
</figure>

The paid contests didn't get any paying customers. The payment steps were mostly handled for the player, so I don't think the crypto side explains the lack of interest.

The bigger problem was repeat entries. If someone plays in 80 fantasy leagues, they end up with a different team in nearly every league. In Fantasy Joes, that person would take essentially the same ranking list into each tournament. I couldn't see a reason for someone to enter dozens of tournaments with the same list, and the business I had imagined needed that kind of repeat play.

I built a mock draft that could use your rankings, hoping to make them useful sooner: make your choices, then see what kind of team you could draft from them. The more I worked on it, the less convinced I was by automating the draft. Choosing players is part of what people enjoy about a draft. The rankings could still help you make those choices, but the mock didn't give me an answer to the repeat-entry problem.

## Getting people to the site

The part of the growth plan that worked best was search. I built player comparison pages from matchups people were choosing in the game. Each page showed how the crowd had voted, player information, expert analysis pulled from around the web, and an AI-written comparison set to update weekly or when something important changed. I also made the matchup playable on the page. Someone looking up a draft decision could make that choice and continue into Fantasy Joes.

<figure class="post-figure">
  <img src="/images/fantasy-joes/fj-compare-pair-desktop.png" alt="A Fantasy Joes comparison page for Jahmyr Gibbs and Bijan Robinson showing the crowd's vote and player statistics" loading="lazy" />
  <figcaption>A player comparison page built from the game's matchups.</figcaption>
</figure>

The comparison catalog grew from about 175 pages in early July to 1,166 published comparison URLs in the September 12 sitemap. Google Search Console recorded about 7,150 clicks to the site from June 11 through September 21, with 547 on September 7. That same day, the site's analytics counted 1,180 visits across all sources.

Many of the top pages in Search Console were player comparisons. The most clicked page was a guide to using your own rankings in a Sleeper draft, which naturally positioned Fantasy Joes as the place to create rankings.

The busiest day in the game reached 1,590 ranking choices. I never expected a huge share of comparison-page visitors to start making their own rankings; most arrived with a specific player question. What concerned me more was the small Reddit ad test. I spent about $10 a day to see what people did after arriving directly at the game. Those visitors played, but few kept going for long or came back later. I changed the in-app prompts and onboarding messages repeatedly to help new players continue, but it didn't solve the drop-off. I eventually turned the ads off.

## The other ways I tried to reach people

Discord seemed like a good way to meet fantasy players where they already spent time. I built a version of the game that ran inside a creator's server: members could make picks and compare players without leaving Discord. Each server built its own shared rankings, which would be graded each week against NFL results.

One server used it, and the early return rate was promising. People came back day to day more often than they did in the regular web game. I think the ranking algorithm was especially weak at that point, though. It took too long to give people rankings that felt accurate, usage dropped, and those players never really came back. I had a possible paid placement with another community, but didn't pursue it once I saw that drop-off.

I also posted short player-comparison videos on TikTok, Instagram and YouTube. It was interesting how differently a video could perform on each platform, though views were generally low. I built a system that did most of the production itself. I would check in once or twice and keep trying to improve the system for the next video.

<div class="short-embed">
  <iframe src="https://www.youtube.com/embed/5vjsaM3w5qA" title="Fantasy Joes: Bhayshul Tuten vs David Montgomery" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

After I added paid betting to the Fantasy Joes site, TikTok essentially stopped showing my posts. I moved the paid games to another domain, but the account's reach didn't recover.

I stopped making the videos even though the main draft window and NFL opener were coming up, when I expected more people to watch fantasy content. By then I didn't think paid tournaments would work as a business, and continuing to spend time improving the videos didn't make sense.

## A different game once the season starts

Most of the growth happened around draft preparation. Once the NFL season starts, people are making weekly decisions and following actual games. Fantasy Joes did move into a weekly game, with current matchups, scoring and results. The comparison pages changed with it.

The weekly version hasn't had the same test as the draft game. It might give people a better reason to come back, but building a weekly habit would mean doing more work on the game and its distribution. The likely return didn't justify that investment for me.

## Where I landed

I think I made the game for an imagined kind of fantasy player rather than for a specific person whose behavior I understood well. Some people did fit that picture and played. But I didn't have a good enough answer to two questions: how quickly could they make rankings they trusted, and how often would they pay to compete with them?

I still like Fantasy Joes. It's much better than the first version I built before the 2025 season, where it could take several seconds to get from one choice to the next. I like the comic art, the way the rankings work, and the fact that the game runs on the web and in Discord. Building it taught me a lot about making a technical web app and finding ways to bring people to it. I used AI heavily to build the software, art and content systems, and I can use what I learned in other work.

As a business, it didn't reach the level I had imagined. People found the site and played the game, but no customers entered the paid tournaments and too few players kept coming back. The site is still up and people can still play. I've moved on to other work.
