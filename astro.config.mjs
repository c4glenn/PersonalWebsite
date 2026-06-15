// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://c4glenn.com',
  output: 'static',
  markdown: {
    remarkRehype: { allowDangerousHtml: true },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
