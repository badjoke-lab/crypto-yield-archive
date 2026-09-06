import { defineConfig } from 'astro/config';

const cyaAnalytics = {
  name: 'cya-analytics',
  hooks: {
    'astro:config:setup': ({ injectScript }) => {
      injectScript('page', "import('/analytics.js');");
    },
  },
};

export default defineConfig({
  site: 'https://cya.badjoke-lab.com',
  trailingSlash: 'always',
  integrations: [cyaAnalytics],
});
