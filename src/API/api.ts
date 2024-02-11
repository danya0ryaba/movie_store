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
    }
}

// export const profileAPI = {}