const { preprocess } = require('svelte/compiler');
const md = require('../');

it('should preprocess markdown', async () => {
  const output = await preprocess(
    `
# Hello {name}!

<script>
  let name = 'World';
</script>
    `,
    Object.assign(md(), { filename: 'test.md' })
  );

  expect(output.toString()).toMatchSnapshot();
});
