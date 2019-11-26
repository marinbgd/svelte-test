<script>
  import Router from 'svelte-spa-router'

  import TopNavigation from './common/TopNavigation.svelte'
  import Welcome from './common/Welcome.svelte'
  import AUTH_APP_ROUTES from './authenticatedRoutes'
  import { authStore } from './auth/auth.store'
</script>

<TopNavigation isAuthenticated={$authStore.isAuthenticated} />

<Welcome name="Test User" />

<main class="global-main">
  <section>
      <h2>AUTH</h2>
      <Router routes={AUTH_APP_ROUTES} />
  </section>
</main>
