<script>
  import Router from 'svelte-spa-router'

  import TopNavigation from './common/TopNavigation.svelte'
  import Welcome from './common/Welcome.svelte'
  import AUTH_APP_ROUTES from './authenticatedRoutes'
  import NON_AUTH_APP_ROUTES from './nonAuthenticatedRoutes'
  import { authStore } from './auth/auth.store'
</script>

<TopNavigation isAuthenticated={$authStore.isAuthenticated} />

<Welcome name="Test User" />

<main class="global-main">
  <section>
    {#if $authStore.isAuthenticated}
      <h2>AUTH</h2>
      <Router routes={AUTH_APP_ROUTES} />
    {:else}
      <h2>NON AUTH</h2>
      <Router routes={NON_AUTH_APP_ROUTES} />
    {/if}
  </section>
</main>
