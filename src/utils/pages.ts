
// принимает totalCount = общее количество страниц 
// и сколько limit = элементов отображать
export const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
}