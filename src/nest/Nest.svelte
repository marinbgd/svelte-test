<script>
import Router from 'svelte-spa-router'
import Part from './Part.svelte'


const prefix = '/nest'
const routes = {
  '/:part': Part,
}
</script>

<h1 class="main-header">Nest</h1>
<Router {routes} {prefix} />
