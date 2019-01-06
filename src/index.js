import MarkdownIt from 'markdown-it';

export default function md(options = 'commonmark', extend = md => md) {
  if (typeof options === 'function') {
    extend = options;
    options = 'commonmark';
  }
  const md = extend(new MarkdownIt(options));

  return {
    markup({ content }) {
      return { code: md.render(content) };
    }
  };
}
