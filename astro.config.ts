import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.wavecheck.app',
  output: 'static',
  trailingSlash: 'never',

  integrations: [
    sitemap({
      filter: (page) => {
        return !page.endsWith('/share');
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          'pt-br': 'pt-BR',
        },
      },
    }),
  ],

  build: {
    format: 'preserve',
  },

  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
