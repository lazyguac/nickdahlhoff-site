import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['current', 'featured', 'archive']),
    order: z.number(), // Lower = higher on page
    url: z.string().optional(),
    tech: z.array(z.string()).optional(),
    year: z.string(), // "2024-present" or "2018-2021"
    badge: z.string().optional(), // e.g. "Active", "Booking"
    badgeColor: z.enum(['green', 'orange']).optional(),
    revenue: z.string().optional(), // e.g. "~$960K" for featured highlight
  }),
});

export const collections = { projects };
