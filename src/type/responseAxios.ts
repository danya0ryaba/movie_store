import { Movie } from "./movie"

export type DataResponseType = {
    docs: Movie[],
    limit: number,
    page: number,
    pages: number,
    total: number
}