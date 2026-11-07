// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Base configuration
export default defineConfig({
  site: process.env.SITE_URL || 'https://xiaohuojian.homes',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
