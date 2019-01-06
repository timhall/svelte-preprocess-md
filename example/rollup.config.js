import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import md from '../index.mjs';

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    svelte({
      extensions: ['.html', '.md'],
      preprocess: md(),

      skipIntroByDefault: true,
      nestedTransitions: true,
      dev: true,
      css: css => {
        css.write('public/bundle.css');
      }
    }),

    resolve(),
    commonjs()
  ]
};
