// ТИПЫ ДЛЯ ФИЛЬМОВ(ДЛЯ ОДНОГО ФИЛЬМА) ПО ПОЛУЧЕНИЕ СПИСКОМ

type NamesMovie = {
    readonly name: string,
    readonly language?: string | null,
    readonly type?: null | string
}

export type RatingAndVotes = {
    readonly kp: number | null,
    readonly imdb: number,
    readonly tmdb?: number | null,
    readonly kpHD?: string | null,
    readonly filmCritics: number | null,
    readonly russianFilmCritics: number | null,
    readonly await: number | null
}

export type BackdropAndPoster = {
    readonly url: string | undefined,
    readonly previewUrl: string | undefined
}

export type GenresItem = {
    name: string
}

export type TypeMovie = 'movie' | 'tv-series' | 'cartoon' | 'anime' | 'animated-series' | 'tv-show'


type Duration = {
    readonly start: number,
    readonly end: number
}

export interface Movie {
    status: string | null,
    rating: RatingAndVotes,
    votes: RatingAndVotes,
    backdrop: BackdropAndPoster,
    movieLength: number | null,
    id: number,
    type: TypeMovie,
    name: string,
    description: string | null,
    year: number,
    poster: BackdropAndPoster,
    genres: GenresItem[],
    countries: [{ name: string }],
    typeNumber: 1 | 2 | 3 | 4 | 5 | 6,
    alternativeName: string | null,
    enName: string | null,
    names: NamesMovie[],
    ratingMpaa: string | null,
    shortDescription: string | null,
    ticketsOnSale: boolean,
    ageRating: number | null,
    logo: { url: string | null },
    top10: number | null,
    top250: number | null,
    isSeries: boolean,
    seriesLength: number | null,
    totalSeriesLength: number | null
    releaseYears?: Duration
    externalId?: Partial<Pick<RatingAndVotes, 'imdb' | 'kpHD' | 'tmdb'>>
}