// эта функция полная залупа, надо переписать адекватно

export const createPag = (num: number, width?: number) => {
    let more: number[] = []
    let less: number[] = []
    let countForLess = num
    let countForMore = num

    if (width && width < 501) {
        if (num > 2) {
            for (let i = 0; i < 3; i++) {
                less.push(countForLess--)
                more.push(countForMore++)
            }
            const lessReverse = less.reverse()
            lessReverse.pop()
            more.shift()
            return [...lessReverse, num, ...more]
        }
        else return [1, 2, 3, 4, 5]
    }
    if (num < 5) return [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < 5; i++) {
        less.push(countForLess--)
        more.push(countForMore++)
    }
    const lessReverse = less.reverse()
    lessReverse.pop()
    more.shift()
    return [...lessReverse, num, ...more]
}