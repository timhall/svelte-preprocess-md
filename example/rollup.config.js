import svelte from 'rollup-plugin-svelte';
import md from '../index.js';

export default {
  input: 'src/index.md',
  output: [{ file: 'dist/example.js', format: 'es' }],
  plugins: [
    svelte({
      extensions: ['.md'],
      preprocess: md()
    })
  ]
};
