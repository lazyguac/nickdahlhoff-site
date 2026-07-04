# Nick's Personal Website

This is the **current, active version** of Nick's personal website. Built with Astro 5,
static output, zero UI framework. Content lives in Astro Content Collections
(`projects` and `writing`), backed by markdown files with Zod-validated frontmatter in
`src/content.config.ts`.

Older deprecated versions exist at `~/nick-site/` (Next.js) and
`~/personal-knowledge-hub/personal-website/` (plain HTML). Do not use those.

## Dev server

```sh
npm run dev   # runs on localhost:4323 (explicit --port flag in package.json)
```

The dev server intentionally passes `--port 4323` (Astro 5's real default is 4321) so the
documented convention here stays true. `npm run preview` also serves on 4323 and is the
more accurate check for anything involving `public/` passthrough files (see the consulting
static pages note below) — Astro's dev server doesn't resolve directory-style URLs
(`/consulting/some-slug/`) to `index.html` for plain static files the way a real static
host or `astro preview`/Netlify does. A 404 on a `public/`-only route under `npm run dev`
is not necessarily a real bug — re-check under `npm run preview` before treating it as one.

## Build + verify

```sh
npm run build     # zero errors/warnings expected; watch the page count in the output
npm run preview   # production-mode local server on the real dist/ output, port 4323
```

A silent drop in the built page count is the #1 sign something broke — Astro's content
collections fail the build outright on a Zod schema mismatch (they don't silently exclude a
malformed file), so a lower page count usually means a routing mistake in a
`getStaticPaths()` filter instead.

## How to add a new writing post

1. Create `src/content/writing/{slug}.md` with frontmatter:
   ```yaml
   ---
   title: "Post title"
   date: "YYYY-MM-DD"
   description: "One-sentence teaser — used as the /writing index blurb and the page's meta description."
   draft: false
   ---
   ```
   `draft: true` keeps a post out of both the `/writing` index and the homepage's latest-writing
   list, and out of `/writing/[slug]`'s built routes entirely (not just hidden — the URL won't
   resolve at all while `draft: true`).
2. Write the body in markdown below the frontmatter. Inline images: drop them in
   `public/images/{something}/` and reference with `![alt](/images/{something}/file.png)` —
   the existing `.post-content :global(img)` CSS in `src/pages/writing/[slug].astro` handles
   responsive sizing automatically, no extra work needed.
3. `npm run build` — confirm the new post appears in the build output page list, then
   `npm run preview` and check `/writing` and `/writing/{slug}` render as expected.
4. **Standing trigger: publish a new post the same session it's finalized** — don't leave it
   sitting as a draft across sessions.

## How to update a project page

Edit the relevant file in `src/content/projects/{slug}.md`. Frontmatter must satisfy the
schema in `src/content.config.ts` — `title`, `tagline`, `status` (`current` / `featured` /
`archive`), `order` (lower = higher on page, for pages that use a status-filtered list),
`year`. Optional: `url`, `tech`, `skills`, `heroImage`, `latestUpdate`, `badge`,
`badgeColor`, `revenue`, `noindex`.

**Standing trigger:** a Fantasy Joes milestone (a real number moving, a launch, a feature
shipping) should prompt a case-study line update in `fantasy-joes.md`'s body — this page is
the site's strongest single piece of proof and should stay current, not stale.

## How to update the homepage "looking for" line

Edit `src/pages/index.astro` — the hero-right block's `<a class="looking-for-link">` text
and its `mailto:` href. This is the single line most likely to need updating as Nick's
situation changes (open to full-time vs. open to contract vs. not looking). There's no CMS
field for this; it's inline in the `.astro` file by design, since it's a one-line,
infrequent edit that doesn't need its own schema.

The homepage's **winding-road timeline** is an explicit ordered array of project slugs
(`timelineSlugs` near the top of `index.astro`'s frontmatter), not a status filter — if a
new project needs to appear in the timeline narrative, add its slug to that array in the
position that matches the story, don't rely on `status`. Fantasy Joes and All Language
Resources are deliberately *also* referenced directly above the timeline (the "featured
cards" row and the ALR band) — that's intentional duplication per the site's IA, not a bug.

## Consulting — retired, not deleted

The AI Consulting project page (`/projects/ai-consulting`) and the consulting hub
(`/consulting`) are both noindexed via a `noindex` prop threaded through `BaseLayout.astro`
(`<meta name="robots" content="noindex, nofollow">` when `noindex={true}`) and unlinked from
site navigation. Per a hard "never delete" rule, both pages and all 49 static business
landing pages in `public/consulting/{slug}/index.html` stay on disk untouched — do not
delete any of them even though they're retired. If a page needs to come back, flip
`noindex: false` in `ai-consulting.md`'s frontmatter (or drop the prop on the consulting hub
page) and re-add a nav link; nothing else needs to change.

## Deploy

Deploys run via the **Netlify CLI** from this machine — the Netlify site (`siteId` in the
gitignored `.netlify/state.json`) is linked to this local folder, not driven by a GitHub
Actions workflow (none exists in this repo).

```sh
# Draft/preview deploy — safe, does not go live, use freely to sanity-check a build:
netlify deploy

# Production deploy — DO NOT RUN AUTOMATICALLY. Only after Nick explicitly approves:
netlify deploy --prod
```

If the Netlify CLI isn't installed globally, `npx netlify-cli deploy --prod` works without
one. Whether Netlify's dashboard *also* has GitHub-push auto-deploy configured on top of this
could not be confirmed from repo contents alone as of the 2026-07-03 IA rebuild — if that
turns out to be true, `git push origin main` may also trigger a production deploy, so treat
an unreviewed `git push` to `main` with the same caution as `netlify deploy --prod` until
that's confirmed one way or the other in the Netlify dashboard.

## Living pages — how content stays true over time (added 2026-07-03, Nick's requirement)

This site is a living record, not a snapshot. The failure mode to prevent: a centerpiece
page (the Fantasy Joes case study) quietly rotting while the product moves. The contract:

1. **Volatile numbers are quarantined and dated.** Any count that rots (duels played,
   users, compare-page count) appears ONLY in a page's "Where it stands"-style section,
   always with "as of <Month YYYY>". The rest of the body is written evergreen — mechanics,
   systems, decisions — so only one section ever needs a refresh.
2. **`latestUpdate` frontmatter is the page's pulse.** On every real milestone (launch,
   feature ship, meaningful number), update it with a dated one-liner. A page whose
   `latestUpdate` is months old is visibly stale — that's intentional pressure.
   **Updates render THEMSELVES from build-log posts** (Nick's rule, 2026-07-03: no
   hand-maintained changelogs). A writing post with `project: <slug>` frontmatter
   automatically appears in that project's "Updates" section (`[slug].astro` queries the
   writing collection; the latest-update box's "See all updates ↓" only renders when
   tagged posts exist). So the whole milestone flow is: write the post → tag it with the
   project → bump `latestUpdate` → done. Publishing the post IS the changelog entry.
3. **Refresh recipes live here, not in anyone's memory:**
   - FJ duels/users: query the Convex prod dashboard (see the recipe in the PKH scratchpad
     fact sheets, or ask a session to "refresh the FJ case-study numbers" — it should query
     Convex prod, update the as-of block, and bump `latestUpdate`).
   - Compare-page count: `curl -s https://fantasyjoes.gg/sitemap.xml | grep -c "compare"`.
   - "Still live/still sells" claims (ALR site, TpT materials): re-check the URL before
     repeating the claim in any edit.
4. **Build-log posts are the history; the case study is the present.** A milestone gets a
   dated post in `/writing` (the story of the change) AND a one-line case-study/`latestUpdate`
   touch (the new current state). Don't retrofit the case-study body into a changelog.
5. **Voice-truth on edits:** any new first-person stance added to a page must come from
   something Nick actually said (see `~/.claude/skills/write/contexts/personal.md` Standing
   Rules — site copy routes through /write, always).
6. **Possible upgrade, not built:** fetch live FJ stats at build time so every deploy
   refreshes the numbers automatically. Worth doing if manual refreshes prove annoying.

## Standing cadence (two scheduled tasks own this — set up 2026-07-03)

- **`weekly-build-log` (Fridays 3pm):** mines the week's real work from the whitelisted
  repos (fantasy-joes, this site, eth-regime-dashboard, hometown-coloring-book,
  family-games, fsot-quiz) + PKH journals (business content ONLY — hard privacy firewall:
  never substances/family/health/legal/personal), drafts one post per project with
  substantial work through the /write personal pipeline, tags it `project: <slug>` so it
  auto-appears in that project's Updates, asks Nick ≤3 questions, deploys on his yes.
  A quiet week = no post, ever — never pad.
- **`site-freshness-pass` (1st of month, 10am):** refreshes the FJ case study's dated
  numbers via the recipes above, bumps `latestUpdate` from the month's posts, fixes any
  body sentence the month made stale, sweeps links/statuses, deploys on Nick's yes.
- **Ad-hoc:** any session can still do either on a one-line instruction ("update the site:
  X") — the tasks are the floor, not the ceiling.

## Standing triggers (recap)

- **New writing post finalized** → publish it the same session (see above).
- **Fantasy Joes milestone** (launch, real number, feature ship) → the weekly task will
  catch it; for something big, don't wait — post + `latestUpdate` same session.
