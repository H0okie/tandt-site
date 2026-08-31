// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tandtlawnandlandscape.com',
  integrations: [sitemap()],
  // §5 white-label: replace the /_astro/ fingerprint that BuiltWith/Wappalyzer
  // read. Keep the matching cache rule in public/_headers in sync (/tradeup-os/*).
  build: { assets: 'tradeup-os' },
  // Allows Astro's <Image> to optimize the T&T CDN images once you localize them
  image: {
    domains: ['tandtlawnandlandscape.com'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
