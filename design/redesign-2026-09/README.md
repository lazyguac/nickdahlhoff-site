---
created: 2026-09-02
edited: 2026-09-02
tags:
  - nickdahlhoff-site
  - redesign
  - design
  - handoff
  - dark-arcade
  - astro
  - frontend
  - homepage
  - case-study
  - updates
  - active
---

# nickdahlhoff.com redesign — handoff (2026-09-02)

Design work done in a cloud session; implementation continues **locally** on Nick's Mac,
because the two remaining image files live in `~/Downloads` / `~/Desktop`, which the cloud
container cannot see. Everything the local session needs is in this folder.

Live canvas (view, edit, export PNG/PDF): https://claude.ai/code/artifact/911f7233-37ad-4ee7-aa50-bfe888411e25
Offline copy of the same canvas: `nickdahlhoff-redesign.html` (open in a browser).

## Decision (Nick, 2026-09-02)

**Build the dark direction.** Four pages are designed, one artboard each:

| Artboard | Page | Render |
| --- | --- | --- |
| `Main.dc.html` | Homepage | `renders/Main.png` |
| `FantasyJoesPage.dc.html` | `/projects/fantasy-joes` case study | `renders/FantasyJoesPage.png` |
| `ProjectPage.dc.html` | `/projects/hometown-coloring-book` — the template for every other project page | `renders/ProjectPage.png` |
| `UpdatesPage.dc.html` | `/writing` index, renamed **Updates** | `renders/UpdatesPage.png` |

The `.dc.html` files are plain HTML with inline styles: exact colors, sizes, spacing, and
copy to port into Astro. Ignore the `<x-dc>`/`<helmet>` wrappers and the `support.js` line.

## Design system (lifted from the artboards)

- Background `#0F1115`, surfaces `#171A20` and `#1E222A`, hairlines `rgba(255,255,255,0.08)`.
- Text `#F4F6F8` (display) / `#ECEFF3` (body) / `#B7BEC9` / `#A5ADB8` / `#6F7885` (muted).
- Accent mint `#5DD39E` (links, kicker labels, the one button style: mint fill, dark text).
- Fonts: **Syne** 700/800 for display and wordmark, **Space Grotesk** body, **Fira Mono** for
  dates and meta labels. Keep the `Kaushan Script` + `Nunito` load only while the Recess
  wordmark is the HTML stand-in (see below).
- Deliberately NOT Fantasy Joes' look: no Oswald, no red-and-cream, no warm brown black.
- Margins 80px at 1440. Email is the primary action everywhere; Fantasy Joes is a section,
  never a button.

## Images

Ready in `img/` (all ≤ 70 KB, web-ready; originals noted):

- `fj-six3-current.jpg`, `fj-six3-phone-current.jpg` — captured 2026-09-02 from the current
  fantasy-joes code at `/dev/six3?state=pick1` with the dev-only preview pill and Next dev
  badge hidden in CSS. Full-size PNGs in `captures/`. Re-capture the same way after any comic
  or UI change; never paint over the screenshot.
- `hometown-covers.jpg` (three edition covers, composed), `hometown-fridge.jpg`,
  `hometown-sample.jpg`, `hometown-sample2.jpg` — from the hometown-coloring-book repo.
- `alr-review.jpg` — crop of `public/images/alr/alr-review-pimsleur.png`.
- `manga-panel.jpg` — the top-left panel of `public/images/manga/manga-method-collage.jpg`.
- `alpaca.jpg`, `headshot.jpg`, `fj-rankings-desktop.jpg`, `fj-og.jpg`, `fj-season.jpg`,
  `comic-*.jpg` — existing assets, resized.
- `aura-business.jpg` — STAND-IN (suit Pepe from the Aura-Marketing repo on the purple background).

**Two files to add locally, then swap in** (both are in Nick's Downloads/Desktop):

1. Recess in the Neighborhood wordmark (red script "Recess", teal "in the Neighborhood",
   white background) → save as `public/images/recess/logo.png`. Replace the inline
   `<svg ... aria-label="Recess in the Neighborhood wordmark (stand-in)">` in `Main.dc.html`
   with an `<img>` of it on a white tile, and drop the Kaushan Script / Nunito font load.
   (The `lazyguac/Inquisikids` repo may also contain the source logo; unverified.)
2. Aura hourglass art (purple Pepe in a suit leaning on an hourglass, bull, candles) → save as
   `public/images/aura/hourglass.jpg` and use it wherever `aura-business.jpg` appears.

Teaching in Beijing and Poker intentionally have **no image**: typographic tiles (`北京` on a
dark tile with the italic line; a large ♠ on a light tile). Keep those.

## Copy rules that came out of the review

- Fantasy Joes is described by the **Six3** mechanic everywhere ("six players at a time; pick
  the three you'd draft first, in order"). The live site and case study still say "pick between
  two players" — that is stale and must be updated in `src/content/projects/fantasy-joes.md`.
- The case study's "Latest update" box is a bracketed placeholder on purpose: refresh the real
  numbers from Convex prod before publishing (`latestUpdate` frontmatter per CLAUDE.md).
- "Writing" becomes "Updates" in nav, page title, and the homepage section; posts keep their
  `project:` tag so they appear on project pages. The index groups by month and has project
  filter chips (All / Fantasy Joes / This site / Hometown Coloring Book).
- Recess, Teaching, and Poker are equal-status cards, same size as the rest.
- The "looking for" line, hero pitch, project taglines, and post titles are lifted from the
  current site verbatim (Nick-approved copy); nothing else was invented.

## Build plan (local)

1. `git checkout claude/redesign-handoff` in `~/nickdahlhoff-site`; copy the two images in.
2. Port the design system into `src/styles/global.css` and `src/layouts/BaseLayout.astro`
   (fonts link, tokens, nav with the mint Email button).
3. Rebuild `src/pages/index.astro` from `Main.dc.html`; `src/pages/projects/[slug].astro` from
   `ProjectPage.dc.html` with the Fantasy Joes variant (gallery + latest-update box) from
   `FantasyJoesPage.dc.html`; `src/pages/writing/index.astro` from `UpdatesPage.dc.html`.
4. Add `heroImage` / gallery fields as needed to `src/content.config.ts`; move the `img/` files
   into `public/images/<project>/`.
5. Mobile: none of the artboards is a phone layout. Stack the 2-up project grid to 1-up, the
   case-study gallery to a single column, and the Updates rows to date-over-title at ≤ 640px.
6. `npm run build` (watch the page count) and `npm run preview`; production deploy only on
   Nick's explicit yes, per CLAUDE.md.
