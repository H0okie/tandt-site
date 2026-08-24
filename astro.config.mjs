// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tandtlawnandlandscape.com',
  integrations: [sitemap()],
  // Allows Astro's <Image> to optimize the T&T CDN images once you localize them
  image: {
    domains: ['tandtlawnandlandscape.com'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
