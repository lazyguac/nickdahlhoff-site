// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nickdahlhoff.com',
  redirects: {
    '/updates': '/writing',
  },
  integrations: [
    sitemap({
      // retired/noindexed pages stay out of the sitemap (they remain on disk per the never-delete rule)
      filter: (page) =>
        !page.includes('/consulting') && !page.includes('/projects/ai-consulting'),
    }),
  ],
});
