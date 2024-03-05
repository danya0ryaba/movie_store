import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Series } from "../../type/series";
import { usersAPI } from "../../API/api";
import { isError } from "../../utils/isError";
import { DataResponseType } from "../../type/responseAxios";

interface SeriesInitialState {
    series: Series[],
    page: number,
    isLoading: boolean,
    error: null | string
}

export const getSeries = createAsyncThunk<DataResponseType, number, { rejectValue: string }>(
    'series/getSeries',
    async (page, { rejectWithValue }) => {
        const res = await usersAPI.getSeries(page)
        if (res.status === 200) return res.data
        else return rejectWithValue("Server Error!")
    }
)

const initialState: SeriesInitialState = {
    series: [],
    page: 1,
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
                state.series = payload.docs
                state.page = payload.page
                state.isLoading = false
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })
    }
})

export default seriesSlice.reducer