import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Series } from "../../type/series";
import { usersAPI } from "../../API/api";
import { error } from "console";

interface SeriesInitialState {
    series: Series[],
    isLoading: boolean,
    error: null | string
}

export const getSeries = createAsyncThunk<Series[], undefined, { rejectValue: string }>(
    'series/getSeries',
    async (_, { rejectWithValue }) => {
        const res = await usersAPI.getSeries()
        if (res.status === 200) return res.data.docs
        else return rejectWithValue("Server Error!")
    }
)

const initialState: SeriesInitialState = {
    series: [],
    isLoading: false,
    error: null
}

const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSeries.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getSeries.fulfilled, (state, { payload }) => {
                state.series = payload
                state.isLoading = false
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

export default seriesSlice.reducer