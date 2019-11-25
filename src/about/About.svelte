<script>
import { aboutStore } from './About.store'
import { onDestroy } from 'svelte';
import { getRandomTitle, getRandomParams } from '../util/randomGenerator'


let store = {}
const unsubscribe = aboutStore.subscribe(aboutStore => {
    store = aboutStore
})

function handleChangeTitleClick () {
    aboutStore.update((oldStore) => {
        return {
            ...oldStore,
            title: getRandomTitle('About'),
            params: getRandomParams(),
        }
    })
}

onDestroy(() => {
    unsubscribe()
})

</script>

<h1 class="main-header">About</h1>
<p>title from store: {store.title}</p>
<p>params from store: {store.params.join(' / ')}</p>

<button on:click={handleChangeTitleClick}>Change title</button>
