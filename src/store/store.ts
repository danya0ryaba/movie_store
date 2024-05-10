import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movie/movieSlice'
import loadingMovieSlice from './movie/loadingMovieSlice'
import filmSlice from './film/filmSlice'
import seriesSlice from './series/seriesSlice'
import cartoonSlice from './cartoon/cartoonSlice'
import animeSlice from './anime/animeSlice'
import searchSlice from './search/searchSlice'
import authSlice from './auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        movie: movieSlice,
        loadingMovie: loadingMovieSlice,
        film: filmSlice,
        series: seriesSlice,
        cartoon: cartoonSlice,
        anime: animeSlice,
        searchMovie: searchSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch