import { BackdropAndPoster, Movie, RatingAndVotes, TypeMovie } from "./movie"

// ТИПЫ ДЛЯ ФИЛЬМА ПО ID

type FactsAboutFilms = {
    readonly value: string,
    readonly type: string,
    readonly spoiler: boolean
}

export type Persons = {
    readonly id: number,
    readonly photo: string,
    readonly name: string,
    readonly enName: null,
    readonly description: string,
    readonly profession: string,
    readonly enProfession: string
}

type SimilarMovies = {
    readonly id: number,
    readonly name: string,
    readonly enName: null,
    readonly alternativeName: string,
    readonly type: string,
    readonly poster: BackdropAndPoster,
    readonly year: number,
    readonly rating: RatingAndVotes
}

export type Trailer = {
    readonly url?: string,
    readonly name?: string,
    readonly site?: string,
    readonly type?: string
}

export type AudienceItem = {
    readonly count: number,
    readonly country: string
}

type SpokenLanguage = {
    readonly name: string,
    readonly nameEn: string
}

type SequelsAndPrequel = {
    readonly id: number,
    readonly name: string,
    readonly alternativeName: string | null,
    readonly enName: string | null,
    readonly type: TypeMovie,
    readonly poster: BackdropAndPoster,
    readonly rating: RatingAndVotes,
    readonly year: number
}

type ExternalId = Pick<RatingAndVotes, "imdb" | "tmdb" | "kpHD">

type ImagesInfo = {
    readonly postersCount?: number,
    readonly backdropsCount?: number
    readonly framesCount?: number
}

export type Budget = {
    readonly value?: number | null,
    readonly currency?: string | null
}

interface ProductionCompanies extends BackdropAndPoster {
    readonly name: string
}

export interface CurrentFilm extends Movie {
    externalId: ExternalId,
    distributors: { distributor: string, distributorRelease: string },
    premiere: { world: string | null, russia?: string, dvd: string },
    slogan: string | null,
    facts: FactsAboutFilms[]
    seasonsInfo: [],
    persons: Persons[],
    images: { postersCount: number, backdropsCount: number, framesCount: number },
    lists: string[],
    spokenLanguages: SpokenLanguage[],
    productionCompanies: ProductionCompanies[],
    budget: Budget,
    networks: null,
    subType: null,
    fees: { world: { value: number | null, currency: string | null } },
    updatedAt: Date,
    imagesInfo: ImagesInfo,
    technology: { hasImax: boolean, has3D: boolean },
    similarMovies: SimilarMovies[],
    sequelsAndPrequels: SequelsAndPrequel[],
    watchability: { items: [{ name: string | null, logo: { url: string | null }, url: string }] },
    deletedAt: null,
    audience: AudienceItem[],
    videos: { trailers: Trailer[] }
}