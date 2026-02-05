// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://orlandocardona.netlify.app', // Reemplaza con tu dominio de Netlify
  integrations: [react()],
  output: 'server',
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  }
});