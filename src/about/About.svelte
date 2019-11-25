<script>
import { aboutStore } from './About.store'
import { onDestroy } from 'svelte';
import { getRandomTitle, getRandomParams } from './About.helper'


let store = {}
const unsubscribe = aboutStore.subscribe(aboutStore => {
    console.log(aboutStore)
    store = aboutStore
})

function handleChangeTitleClick () {
    aboutStore.update((oldStore) => {
        return {
            ...oldStore,
            title: getRandomTitle(),
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
