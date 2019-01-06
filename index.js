import MarkdownIt from 'markdown-it';

export default function(options) {
  const md = new MarkdownIt(options);

  return ({ content }) => {
    return { code: md.render(content) };
  }
}
