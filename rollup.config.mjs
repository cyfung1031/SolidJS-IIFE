import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // Immediately Invoked Function Expression - suitable for browsers
    name: 'MyBundle' // global variable name for browser usage
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};