import MarkdownIt from 'markdown-it';

export default function() {
  const md = new MarkdownIt();

  return ({ content }) => {
    return { code: md.render(content) };
  }
}
