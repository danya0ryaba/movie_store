import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../API/api";
import { Movie } from "../../type/movie";
import { DataResponseType } from "../../type/responseAxios";
import { isError } from "../../utils/isError";

interface initialStateAnime {
    anime: Movie[],
    page: number,
    isLoading: boolean,
    error: null | string
}

export const getAnime = createAsyncThunk<DataResponseType, number, { rejectValue: string }>(
    'film/getAnimeFilm',
    async (page, { rejectWithValue }) => {
        const response = await usersAPI.getAnime(page);
        if (response.status === 200) return response.data
        else return rejectWithValue("Server Error!")
    }
)

const initialState: initialStateAnime = {
    anime: [],
    page: 1,
    isLoading: false,
    error: null
}

const animeSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAnime.fulfilled, (state, { payload }) => {
                state.anime = [...state.anime, ...payload.docs]
                state.page = payload.page
                state.isLoading = false
            })
            .addCase(getAnime.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })
    }
})

export default animeSlice.reducer