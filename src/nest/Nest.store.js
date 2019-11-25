import { writable } from 'svelte/store'
import { getRandomTitle, getRandomParams } from '../util/randomGenerator'

const INITIAL_STORE = {
    title: 'Nest',
    something: [5, 6, 7, 8],
}

const randomize = () => {
    return {
        title: getRandomTitle('Nest'),
        something: getRandomParams()
    }
}

const createNestStore = () => {
    const store = writable(INITIAL_STORE)

    return {
        subscribe: store.subscribe,
        randomize: () => {
            store.update(() => randomize())
        }
    }
}

export const nestStore = createNestStore()
