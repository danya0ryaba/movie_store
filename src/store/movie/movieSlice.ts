import { Movie } from './../../type/movie';
import { usersAPI } from '../../API/api';
import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MovieInitialState {
    movies: Movie[],
    isLoading: boolean,
    error: null | string
}


export const getMovies = createAsyncThunk<Movie[], undefined, { rejectValue: string }>(
    "movies/getMovies",
    async (_, { rejectWithValue }) => {
        const resp = await usersAPI.getMovie();
        if (resp.status === 200) return resp.data.docs
        else return rejectWithValue("Server Error!")
    }
)


const initialState: MovieInitialState = {
    movies: [],
    isLoading: false,
    error: null
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getMovies.fulfilled, (state, { payload }) => {
                state.movies = payload
                state.isLoading = false
            })
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })

    }
})

const isError = (action: Action) => {
    return action.type.endsWith('rejected');
}

export default movieSlice.reducer