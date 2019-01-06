# svelte-preprocess-md

## Example

```md
<script>
  import Component from './Component';
  let title = 'Hello World';
</script>

# {title}

<Component />
```

## Usage

```js
// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import md from 'svelte-preprocess-md';

export default {
  // ...
  plugins: [
    svelte({
      extensions: ['.md'],
      preprocess: md()
    })
  ]
}
```

## API

`md([options, extend])`

- `options` - [markdown-it options](https://github.com/markdown-it/markdown-it#init-with-presets-and-options)
- `extend` - Extend the markdown-it renderer

```js
// ...
preprocess: md()

preprocess: md({ linkify: true })

preprocess: md(md => {
  return md
    .use(plugin1)
    .use(plugin2, options);
});

preprocess: md(
  { typographer: false},
  md => {
    return md
      .use(plugin3);
  }
)
```