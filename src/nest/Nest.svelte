<script>
import Router from 'svelte-spa-router'

import Part from './Part.svelte'
import { nestStore } from './Nest.store'


const prefix = '/nest'
const routes = {
  '/:part': Part,
}

const handlerRandomizeClick = () => {
  nestStore.randomize()
}
</script>

<h1 class="main-header">Nest</h1>
<h3>{$nestStore.title}</h3>
<p>{$nestStore.something.join(' - ')}</p>
<button on:click={handlerRandomizeClick}>Randomize!</button>
<Router {routes} {prefix} />
