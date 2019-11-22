<script>
  import { Router, Link, Route } from "svelte-routing";
  import About from './about/About.svelte';
  import Home from './home/Home.svelte';
  import HomeId from './home/HomeId.svelte';
  import HomeIdNum from './home/HomeIdNum.svelte';
  import Nest from './nest/Nest.svelte';

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

<Router>
  <nav>
    <ul>
      <li><Link to="/">/</Link></li>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/home/1">Home #1</Link></li>
      <li><Link to="/home/50">Home #50</Link></li>
      <li><Link to="/home/25/300">Home #25 #300</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/nest">Nest</Link></li>
      <li><Link to="/nest/first">Nest #First</Link></li>
    </ul>
  </nav>


  <section>
    <Route path="/home" component="{Home}" />
    <Route path="/home/:id" component="{HomeId}" />
    <Route path="/home/:id/:num" component="{HomeIdNum}" />
    <Route path="/nest" component="{Nest}" />
    <Route path="/nest/:part" component="{Nest}" />
    <Route path="/about" component="{About}" />
  </section>
</Router>


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
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
