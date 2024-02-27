import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../API/api";
import { Movie } from "../../type/movie";

interface initialState {
    anime: Movie[],
    isLoading: boolean,
    error: null | string
}

export const getAnime = createAsyncThunk<Movie[], undefined, { rejectValue: string }>(
    'film/getAnimeFilm',
    async (_, { rejectWithValue }) => {
        const response = await usersAPI.getAnime();
        if (response.status == 200) return response.data.docs
        else return rejectWithValue("Server Error!")
    }
)


const initialState: initialState = {
    anime: [],
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
                state.anime = payload
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

const isError = (action: Action) => {
    return action.type.endsWith('rejected');
}

export default animeSlice.reducer