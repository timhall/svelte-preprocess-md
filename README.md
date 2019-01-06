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
import svelte from 'rollup-plugin-svelte;
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
