export const getRandomNumber = () => {
    return Math.ceil((Math.random() * 100))
}

export const getRandomTitle = () => {
    return `Title ${getRandomNumber()}`
}

export const getRandomParams = () => {
    return [
        getRandomNumber(),
        getRandomNumber(),
        getRandomNumber(),
        getRandomNumber(),
    ]
}