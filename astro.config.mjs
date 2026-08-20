import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://morabezatech.com',
  output: 'static',
  trailingSlash: 'always',
  redirects: { '/': '/pt/' }
});
