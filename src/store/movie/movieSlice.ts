import { Movie } from './../../type/movie';
import { usersAPI } from '../../API/api';
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataResponseType } from '../../type/responseAxios';
import { isError } from '../../utils/isError';

interface MovieInitialState {
    movies: Movie[],
    page: number,
    isLoading: boolean,
    error: null | string
}

export const getMovies = createAsyncThunk<DataResponseType, number, { rejectValue: string }>(
    "movies/getMovies",
    async (page, { rejectWithValue }) => {
        const resp = await usersAPI.getMovie(page);
        if (resp.status === 200) return resp.data
        else return rejectWithValue("Server Error!")
    }
)


const initialState: MovieInitialState = {
    movies: [],
    page: 1,
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
                state.movies = payload.docs
                state.page = payload.page
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

export default movieSlice.reducer