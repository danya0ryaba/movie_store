import { Movie } from './../../type/movie';
import { usersAPI } from '../../API/api';
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataResponseType } from '../../type/responseAxios';
import { isError } from '../../utils/isError';

interface MovieInitialState {
    loadingMovies: Movie[],
    page: number,
    isLoading: boolean,
    error: null | string
}

export const getLoadingMovies = createAsyncThunk<DataResponseType, number, { rejectValue: string }>(
    "loadingMovies/getMovies",
    async (page, { rejectWithValue }) => {
        const resp = await usersAPI.getMovie(page);
        if (resp.status === 200) return resp.data
        else return rejectWithValue("Server Error!")
    }
)

const initialState: MovieInitialState = {
    loadingMovies: [],
    page: 1,
    isLoading: false,
    error: null
}

const loadingMovieSlice = createSlice({
    name: 'loadingMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLoadingMovies.fulfilled, (state, { payload }) => {
                state.loadingMovies = [...state.loadingMovies, ...payload.docs]
                state.page = payload.page
                state.isLoading = false
            })
            .addCase(getLoadingMovies.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
                state.error = payload
                state.isLoading = false
            })
    }
})

export default loadingMovieSlice.reducer