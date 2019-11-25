export const getRandomNumber = () => {
    return Math.ceil((Math.random() * 100))
}

export const getRandomTitle = (titlePrefix = 'Title') => {
    return `${titlePrefix} ${getRandomNumber()}`
}

export const getRandomParams = () => {
    return [
        getRandomNumber(),
        getRandomNumber(),
        getRandomNumber(),
        getRandomNumber(),
    ]
}