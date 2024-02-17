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

    getStudio(page: number = 1, limit: number = 100) {
        return instance.get(`studio?page=${page}&limit=${limit}`)
    },


    // тип для сериалов(надо api писать и разобраться в доке)
    // в закладках пример кодов с этой api-шки
    getSeason() {
        return instance.get(`movie?type=tv-series`)
    }
    //sortField=rating.kp&sortType=-1&type=movie&selectFields=rating&selectFields=movieLength&selectFields=name&selectFields=description&selectFields=year&selectFields=poster&selectFields=genres&selectFields=countries&selectFields=enName&selectFields=ageRating&notNullFields=name
}

// export const profileAPI = {}