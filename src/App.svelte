<script>
  import Router from 'svelte-spa-router'
  import TopNavigation from './common/TopNavigation.svelte'
  import Welcome from './common/Welcome.svelte'
  import routes from './routes'

	export let name;
</script>

<TopNavigation />

<Welcome {name} />

<main class="global-main">
  <section>
    <Router {routes} />
  </section>
</main>
