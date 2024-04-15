import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movie/movieSlice'
import loadingMovieSlice from './movie/loadingMovieSlice'
import filmSlice from './film/filmSlice'
import seriesSlice from './series/seriesSlice'
import cartoonSlice from './cartoon/cartoonSlice'
import animeSlice from './anime/animeSlice'
import searchSlice from './search/searchSlice'

export const store = configureStore({
    reducer: {
        movie: movieSlice,
        loadingMovie: loadingMovieSlice,
        film: filmSlice,
        series: seriesSlice,
        cartoon: cartoonSlice,
        anime: animeSlice,
        searchMovie: searchSlice,

    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch