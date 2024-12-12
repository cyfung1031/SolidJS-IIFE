import { defineConfig } from 'vite';

export default defineConfig({
    build: {
      minify: "terser",
      target: "esnext",
      cssCodeSplit: false,
      terserOptions: {
        keep_classnames: true,
        keep_fnames: true,
      },
      lib: {
        entry: 'src/main.js',
        name: 'SolidJS',
        fileName: 'solid-js-prod'
      }
      // Default outDir is "dist"
      // You can customize other options if needed
    }
  });