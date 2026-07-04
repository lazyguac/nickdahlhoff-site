---
title: Hometown Coloring Book
tagline: A sponsor-funded coloring book for West Michigan families, built end to end — including the AI pipeline that turns a sponsor's business into a custom coloring page.
status: archive
order: 6
url: https://hometowncoloringbook.com
tech: [Claude Code, Convex, Stripe, Gemini, Resend]
skills: [Product Management, Full-Stack Development, AI Pipeline Design, Sales & Outreach, Brand Design]
heroImage: /images/hometown/hometown-sample-page.jpg
year: "2026"
---

## What it is

Free coloring books for local families, paid for by the businesses in them. There's no split between ads and content, because every ad page *is* a coloring page: a dance studio sponsors a page and gets a scene of kids dancing with a QR code to their site; a heating company gets its own scene. Families pay nothing. The sponsor pages fund the whole book.

![A finished page where it ends up — on the fridge](/images/hometown/hometown-fridge-photo.jpg)

I built it as 21 separate West Michigan editions — Grand Rapids neighborhoods, surrounding cities, and townships — each its own branded book. A sponsor buys a page by district, priced per copy from the district's actual Census reach, so a bigger audience costs more.

## The system I built

The core of it is the page-design pipeline. A sponsor sends a brief — text, a few reference images, their logo, a brand color, the URL the QR code should point to — and the system turns that into a print-ready coloring page.

The first round generates four different directions at once, each prompted to be visually distinct, so the sponsor is choosing a direction rather than approving or rejecting a single guess. After they pick one and comment, every following round generates a single new image, feeding the chosen image back to the model as a live reference alongside the feedback. It edits the picked image toward what they asked for instead of starting over — real image-to-image refinement, not a fresh roll of the dice each time.

The whole thing is prompted for a print-safe, sponsor-safe artifact, not just a nice picture: line art a 4-to-10-year-old can actually color, a corner reserved for the QR code, and no sponsor logo drawn into the art itself — that gets layered on separately. If the model keeps failing on a design, the job routes to me, so a sponsor's page never just breaks.

Around that sit the parts a real business needs — checkout, sponsor accounts a team can share, an admin queue for anything that needs a human — built and operated by one person.

## What happened

I ran cold outreach to local family-facing businesses starting in late April 2026, filling out contact forms one at a time so the pitch landed in an owner's inbox like a customer inquiry instead of a spam folder. I did sell one — a business that committed to a page from that cold outreach. But it was only one.

## Why I stopped

I didn't take it to print. To scale it, the real job was door-to-door sponsor sales, city by city, across all 21 editions. That's a field-sales operation, and building that company is a different thing from building the product. The product side worked; the AI pipeline, the checkout, the district system all did what they were supposed to. Scaling it meant feet-on-the-street local sales, which isn't the work I want to spend my time on versus building software. So I proved the mechanism out and set it down.

