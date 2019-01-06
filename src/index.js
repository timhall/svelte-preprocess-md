import markdown from 'markdown-it';
const default_options = { html: true };

export default function md(options = default_options, extend = md => md) {
  if (typeof options === 'function') {
    extend = options;
    options = default_options;
  }
  const md = extend(markdown(options));

  return {
    markup({ content }) {
      return { code: md.render(content) };
    }
  };
}
