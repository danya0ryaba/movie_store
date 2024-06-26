import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1.4/',
    headers: { "X-API-KEY": process.env.REACT_APP_API_KEY },
    params: {}
})

export const usersAPI = {

    getMovieId(id: number) {
        return instance.get(`movie/${id}`)
    },
    getMovie(page: number = 1, filter: string = 'rating.imdb', limit: number = 8) {
        return instance.get(`movie?page=${page}&limit=${limit}&type=movie&
        selectFields=id&
        selectFields=name&
        selectFields=enName&
        selectFields=alternativeName&
        selectFields=names&
        selectFields=name&
        selectFields=description&
        selectFields=shortDescription&
        selectFields=type&
        selectFields=typeNumber&
        selectFields=isSeries&
        selectFields=status&
        selectFields=year&
        selectFields=rating&
        selectFields=ratingMpaa&
        selectFields=ageRating&
        selectFields=votes&
        selectFields=movieLength&
        selectFields=seriesLength&
        selectFields=totalSeriesLength&
        selectFields=genres&
        selectFields=countries&
        selectFields=poster&
        selectFields=backdrop&
        selectFields=logo&
        selectFields=ticketsOnSale&
        selectFields=top10&
        selectFields=top250&
        selectFields=videos&
        notNullFields=poster.url&
        notNullFields=videos.trailers.url&
        notNullFields=rating.imdb&
        notNullFields=backdrop.url&
        notNullFields=description&
        notNullFields=alternativeName&
        notNullFields=fees.world.value&
        notNullFields=countries.name&
        notNullFields=name&
        notNullFields=names.name&
        notNullFields=persons.id&
        notNullFields=persons.name&
        notNullFields=persons.photo&
        notNullFields=persons.description&
        notNullFields=persons.profession&
        notNullFields=persons.enName&
        notNullFields=persons.enProfession&&sortField=${filter}&sortType=-1`
        )
    },
    getSeries(page: number = 1, filter: string = "votes.imdb", limit: number = 10) {
        return instance.get(`movie?page=${page}&limit=${limit}&type=tv-series&
        selectFields=name&
        selectFields=poster&
        selectFields=countries&
        selectFields=genres&
        selectFields=rating&
        notNullFields=countries.name&
        notNullFields=rating.imdb&
        notNullFields=poster.url&
        notNullFields=genres.name&sortField=${filter}&sortType=-1`
        )
    },
    getCartoon(page: number = 1, limit: number = 12) {
        return instance.get(`movie?page=${page}&limit=${limit}&type=cartoon&
        selectFields=poster&
        selectFields=name&
        selectFields=alternativeName&
        notNullFields=poster.url&
        notNullFields=name&
        notNullFields=alternativeName`)
    },
    getAnime(page: number = 1, limit: number = 15) {
        return instance.get(`movie?page=${page}&limit=${limit}&type=anime`)
    },
    getSearch(name: string) {
        return instance.get(`movie/search?page=1&limit=10&query=${name}`)
    },
    getPersonId(id: number) {
        return instance.get(`person/${id}`)
    },

}