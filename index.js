import MarkdownIt from 'markdown-it';

export default function(options, extend = md => md) {
  const md = extend(new MarkdownIt(options));

  return {
    markup({ content }) {
      return { code: md.render(content) };
    }
  };
}
