// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://0x6ain.github.io',
  i18n: {
    defaultLocale: 'ko',
    locales: [
      'ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'es', 'fr', 'de', 'pt', 'ru',
      'it', 'ar', 'hi', 'vi', 'th', 'id', 'tr', 'nl', 'pl', 'sv'
    ],
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ko',
        locales: {
          ko: 'ko', en: 'en', ja: 'ja', 'zh-CN': 'zh-CN', 'zh-TW': 'zh-TW',
          es: 'es', fr: 'fr', de: 'de', pt: 'pt', ru: 'ru', it: 'it',
          ar: 'ar', hi: 'hi', vi: 'vi', th: 'th', id: 'id', tr: 'tr',
          nl: 'nl', pl: 'pl', sv: 'sv'
        }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});