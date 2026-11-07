import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// On GitHub Pages the site lives at https://<user>.github.io/<repo>/, so every
// asset URL needs the "/<repo>/" prefix. The deploy workflow sets BASE_PATH for
// you; locally it stays "/". If you add a custom domain, set BASE_PATH to "/".
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [tailwindcss()],
});
