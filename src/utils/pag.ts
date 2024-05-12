export const createPag = (num: number) => {

    if (num < 5) return [1, 2, 3, 4, 5, 6, 7, 8, 9]

    let more: number[] = []
    let less: number[] = []
    let countForLess = num
    let countForMore = num

    for (let i = 0; i < 5; i++) {
        less.push(countForLess--)
        more.push(countForMore++)
    }

    const lessReverse = less.reverse()
    lessReverse.pop()
    more.shift()

    return [...lessReverse, num, ...more]
}