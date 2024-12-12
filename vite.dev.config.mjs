import { defineConfig } from 'vite';

export default defineConfig({
    build: {
      minify: false,
      lib: {
        entry: 'src/main.js',
        name: 'SolidJS',
        fileName: 'solid-js-dev'
      }
      // Default outDir is "dist"
      // You can customize other options if needed
    }
  });