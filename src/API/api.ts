import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1.4/',
    headers: { "X-API-KEY": "MSHPGE9-G12MQGY-J328FX0-0HC7G9A" },
    params: {}
})


export const usersAPI = {

    getMovieId(id: number) {
        return instance.get(`movie/${id}`)
    },
    getMovie(page: number = 1, limit: number = 10) {
        // &selectFields=videos
        return instance.get(`movie?page=${page}&limit=${limit}`)
    },

    getStudio(page: number = 1, limit: number = 100) {
        return instance.get(`studio?page=${page}&limit=${limit}`)
    },

    getSeries() {
        return instance.get(`movie?type=tv-series`)
    }
    //sortField=rating.kp&sortType=-1&type=movie&selectFields=rating&selectFields=movieLength&selectFields=name&selectFields=description&selectFields=year&selectFields=poster&selectFields=genres&selectFields=countries&selectFields=enName&selectFields=ageRating&notNullFields=name
}

// export const profileAPI = {}