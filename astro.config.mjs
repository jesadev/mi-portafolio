import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tu-portfolio.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});