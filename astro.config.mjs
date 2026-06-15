// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://c4glenn.com', // update with your actual domain
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
