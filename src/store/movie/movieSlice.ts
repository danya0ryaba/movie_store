import { Movie } from './../../type/movie';
import { usersAPI } from '../../API/api';
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataResponseType } from '../../type/responseAxios';
import { isError } from '../../utils/isError';

interface MovieInitialState {
    movies: Movie[]
    page: number
    isLoading: boolean
    error: null | string
    filter: string
}

export const getMovies = createAsyncThunk<DataResponseType, { page: number, filter: string }, { rejectValue: string }>(
    "movies/getMovies",
    async ({ page, filter }, { rejectWithValue }) => {
        const resp = await usersAPI.getMovie(page, filter);
        if (resp.status === 200) return resp.data
        else return rejectWithValue("Server Error!")
    }
)

const initialState: MovieInitialState = {
    movies: [],
    page: 1,
    isLoading: false,
    error: null,
    filter: "top250"
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        changeFilter: (state, { payload }: PayloadAction<string>) => {
            state.filter = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.fulfilled, (state, { payload }) => {
                state.movies = payload.docs
                state.page = payload.page
                state.isLoading = false
            })
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
                state.error = payload
                state.isLoading = false
            })
    }
})

export const { changeFilter } = movieSlice.actions

export default movieSlice.reducer