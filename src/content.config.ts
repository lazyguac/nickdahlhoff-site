import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const image = z.object({
  src: z.string(),
  alt: z.string().default(''),
});

const galleryItem = z.object({
  src: z.string(),
  caption: z.string(),
  /** 'phone' renders in a narrow phone frame; default is a wide frame */
  kind: z.enum(['wide', 'phone']).default('wide'),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['current', 'featured', 'archive']),
    order: z.number(), // Lower = higher on page
    url: z.string().optional(),
    tech: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    heroImage: z.string().optional(), // Path to hero image
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(), // One line under the hero image(s)
    sideImages: z.array(image).optional(), // Up to two images stacked beside the hero
    gallery: z.array(galleryItem).optional(), // Extra screens with captions (case studies)
    latestUpdate: z.object({
      date: z.string(),
      summary: z.string(),
    }).optional(),
    whereItStands: z.string().optional(), // Short current-state line for the header box
    year: z.string(), // "2024-present" or "2018-2021"
    stage: z.string().optional(), // Header/card meta after the year, e.g. "Paused", "Sold for $960K"
    cardImage: z.string().optional(), // Homepage card image (16:9 crop)
    cardBlurb: z.string().optional(), // Homepage card copy; falls back to tagline
    badge: z.string().optional(), // e.g. "Active", "Booking"
    badgeColor: z.enum(['green', 'orange']).optional(),
    revenue: z.string().optional(), // e.g. "~$960K" for featured highlight
    noindex: z.boolean().default(false), // retired pages (e.g. ai-consulting) — kept per "never delete", hidden from search
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(false),
    project: z.string().optional(), // project slug — post appears as an Update on that project's page
    image: z.string().optional(), // Thumbnail on the Updates index
  }),
});

export const collections = { projects, writing };
