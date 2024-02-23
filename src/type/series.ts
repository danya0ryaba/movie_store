import { Movie } from "./movie";

type Duration = {
    readonly start: number,
    readonly end: number
}

export interface Series extends Movie {
    releaseYears: Duration
}