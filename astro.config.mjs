import fs from 'node:fs';
import { defineConfig } from 'astro/config';

const analyticsSource = fs.readFileSync(new URL('./src/scripts/analytics.js', import.meta.url), 'utf8');
const cyaAnalytics = {
  name: 'cya-analytics',
  hooks: {
    'astro:config:setup': ({ injectScript }) => {
      injectScript('page', analyticsSource);
    },
  },
};

export default defineConfig({
  site: 'https://cya.badjoke-lab.com',
  trailingSlash: 'always',
  integrations: [cyaAnalytics],
});
