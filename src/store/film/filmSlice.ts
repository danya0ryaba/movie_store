import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../API/api";
import { CurrentFilm } from "../../type/movieId";

interface initialStateInterface {
    film: CurrentFilm,
    isLoading: boolean,
    error: null | string
}

export const getInfoFilm = createAsyncThunk<CurrentFilm, number, { rejectValue: string }>(
    'film/getInfoFilm',
    async (id, { rejectWithValue }) => {
        const response = await usersAPI.getMovieId(id);
        if (response.status == 200) return response.data
        else return rejectWithValue("Server Error!")
    }
)


const initialState: initialStateInterface = {
    film: {} as CurrentFilm,
    isLoading: false,
    error: null
}

const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInfoFilm.fulfilled, (state, { payload }) => {
                state.film = payload
                state.isLoading = false
            })
            .addCase(getInfoFilm.pending, (state) => {
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

export default filmSlice.reducer