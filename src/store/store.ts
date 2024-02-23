import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movie/movieSlice'
import filmSlice from './film/filmSlice'
import seriesSlice from './series/seriesSlice'

export const store = configureStore({
    reducer: {
        movie: movieSlice,
        film: filmSlice,
        series: seriesSlice
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch