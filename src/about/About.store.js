import { writable } from 'svelte/store'


export const aboutStore = writable({
    title: 'About',
    params: [1, 2, 3, 4],
})