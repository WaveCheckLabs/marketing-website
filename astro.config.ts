import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.wavecheck.app',
  output: 'static',
  trailingSlash: 'never',

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
