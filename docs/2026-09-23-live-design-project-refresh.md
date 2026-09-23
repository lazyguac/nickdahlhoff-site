---
title: Personal site project refresh on the live design
date: 2026-09-23
tags: [personal-site, portfolio, hometown-coloring-book, fantasy-joes, design, release, verification]
---

# Live-design project refresh

The first September 22 draft was built from a stale local `main` and used an older cream layout. Nick identified the mismatch against the live site. This revision starts from remote `main` at `2b9ab14`, which contains the current dark Astro redesign. Work is on `codex/site-live-sept23` in `/Users/nick/nickdahlhoff-site-sept22`; the earlier `codex/site-sept22` branch remains available. The original `/Users/nick/nickdahlhoff-site` checkout and its uncommitted work were not changed.

## Changes

- Feature Hometown Coloring Book as the current project, using a published Holland coloring page. Its case study distinguishes free online downloads from planned sponsor-funded print books and states that no printed edition has been distributed.
- Keep Fantasy Joes in the project grid and update its case study for current Six3 draft and weekly games, the maintained free game, and the end of paid-contest development. Label July game images and posts as historical.
- Correct the All Language Resources hero claim to six regular contributors and 100,000 monthly visitors.
- Fit the homepage and project-page headings within a 390-pixel phone viewport.

## Source and review

Hometown status and art were checked against the live Hometown Coloring Book site and the September 18 website release source. Fantasy Joes mechanics and current state were checked against the September 10 and 12 Six3 release receipts and the September 22 postmortem in PKH. The All Language Resources profile fact comes from the February 5 professional profile. Public copy went through `write` T3 with the personal context card.

The static Astro build generated 17 pages. The homepage and both updated project pages were inspected at 1280-pixel desktop and 390-pixel phone widths. The phone checks found no horizontal overflow or broken images after the heading adjustment. Production was not changed.

## Homepage follow-up, September 23

- Replaced the Hometown feature image with the published Holland music video and its opening-frame poster, served from `hometowncoloringbook.com`. The `<video>` uses native controls and does not preload the 71 MB MP4. The source and poster match the live Hometown site.
- Moved Fantasy Joes to the first project card. The current Hometown feature remains above the project grid.
- Framed the Pimsleur "An Honest Review" artwork at a smaller scale on the All Language Resources card. Its case-study page retains the full published review screenshot.
- Found the original 1600-pixel Manga Method collage in `~/Downloads`, used it for the card and case-study hero, and preserved the existing files.
- Removed the generalized class-size and missing-curriculum claims from the Beijing teaching card and case study.

Desktop and 390-pixel phone review confirmed the card order, video poster, images, and lack of horizontal overflow. The first card navigated to the Fantasy Joes case study. Clicking Play on the MP4 crashed the Codex in-app browser both on this preview and on the live Hometown site; playback therefore needs confirmation in a regular browser. No production release was made.
