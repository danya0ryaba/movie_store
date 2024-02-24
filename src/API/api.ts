import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1.4/',
    headers: { "X-API-KEY": "MSHPGE9-G12MQGY-J328FX0-0HC7G9A" },
    params: {
        // page: 1,
        // limit: 8,
        // notNullFields: ["top250"],
    }
})

export const usersAPI = {

    getMovieId(id: number) {
        return instance.get(`movie/${id}?notNullFields=poster.url&notNullFields=videos.trailers.url&notNullFields=rating.imdb&notNullFields=backdrop.url`)
    },
    getMovie(page: number = 1, limit: number = 12) {
        return instance.get(`movie?page=${page}&limit=${limit}&type=movie&notNullFields=poster.url&notNullFields=videos.trailers.url&notNullFields=rating.imdb&notNullFields=backdrop.url`)
    },
    getSeries() {
        return instance.get(`movie?type=tv-series`)
    },
    getCartoon(page: number = 1, limit: number = 12) {
        return instance.get(`movie?page=${page}&limit=${limit}&type=cartoon`)
    },


    // getTopFilms() {
    //     return instance.get(`movie?page=1&limit=250&selectFields=top10&notNullFields=top10`)
    // },

    // getStudio(page: number = 1, limit: number = 100) {
    //     return instance.get(`studio`)
    // },


}
