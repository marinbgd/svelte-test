<script>
export let part;
import Part from './Part.svelte'
</script>

<main>
	<h1>Nest</h1>

  {#if part}
  <Part part={part} />
  {/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
    text-align: center;
	}

</style>
