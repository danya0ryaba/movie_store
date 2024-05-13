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
    filter: string
}

export const getSeries = createAsyncThunk<DataResponseType, { page: number, filter: string }, { rejectValue: string }>(
    'series/getSeries',
    async ({ page, filter }, { rejectWithValue }) => {
        const res = await usersAPI.getSeries(page, filter)
        if (res.status === 200) return res.data
        else return rejectWithValue("Server Error!")
    }
)

const initialState: SeriesInitialState = {
    series: [],
    page: 1,
    isLoading: false,
    error: null,
    filter: "votes.imdb"
}

const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        changeFilterSeries: (state, { payload }: PayloadAction<string>) => {
            state.filter = payload
        }
    },
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

export const { changeFilterSeries } = seriesSlice.actions

export default seriesSlice.reducer