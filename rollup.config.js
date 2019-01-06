export default {
  input: 'src/index.js',
  output: [
    { file: 'index.js', format: 'cjs' },
    { file: 'index.mjs', format: 'es' }
  ],
  external: ['path', 'markdown-it']
};
