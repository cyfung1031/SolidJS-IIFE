import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'SolidJS',
      fileName: 'solid-js'
    }
    // Default outDir is "dist"
    // You can customize other options if needed
  }
});