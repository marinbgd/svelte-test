import About from './about/About.svelte';
import Home from './home/Home.svelte';
import HomeId from './home/HomeId.svelte';
import HomeIdNum from './home/HomeIdNum.svelte';
import Nest from './nest/Nest.svelte';

const APP_ROUTES = {
  '/': Home,
  '/home': Home,
  '/home/:id': HomeId,
  '/home/:id/:num': HomeIdNum,
  '/nest': Nest,
  '/nest/*': Nest,
  '/about': About,
  '*': Home,
}

export default APP_ROUTES
