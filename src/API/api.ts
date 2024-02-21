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
// "year","name","genres.name","ageRating"

export const usersAPI = {

    getMovieId(id: number) {
        return instance.get(`movie/${id}`)
    },
    getMovie(page: number = 1, limit: number = 12) {
        // &selectFields=videos
        return instance.get(`movie?page=${page}&limit=${limit}&type=movie`)
        // selectFields=top250
    },
    getTopFilms() {
        return instance.get(`movie?page=1&limit=250&selectFields=top10&notNullFields=top10`)
    },

    getStudio(page: number = 1, limit: number = 100) {
        return instance.get(`studio`)
    },

    getSeries() {
        return instance.get(`movie?type=tv-series`)
    }
    //sortField=rating.kp&sortType=-1&type=movie&selectFields=rating&selectFields=movieLength&selectFields=name&selectFields=description&selectFields=year&selectFields=poster&selectFields=genres&selectFields=countries&selectFields=enName&selectFields=ageRating&notNullFields=name
}

// export const profileAPI = {}