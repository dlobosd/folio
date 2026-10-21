import { defineConfig } from 'astro/config';
// El workflow recibe la URL y la ruta reales desde GitHub Pages.
export default defineConfig({ output: 'static', site: process.env.SITE_URL || 'https://example.com', base: process.env.BASE_PATH || '/' });
