# Hello {name}!

Current Value: _{value}_

<Increment bind:value />

<style>
	h1 {
		color: purple;
	}
</style>

<script>
	import Increment from './Increment.html';

	export let name;
	let value = 0;
</script>