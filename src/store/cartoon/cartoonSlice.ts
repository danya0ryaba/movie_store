import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartoonInterface } from "../../type/cartoon";
import { usersAPI } from "../../API/api";
import { DataResponseType } from "../../type/responseAxios";
import { isError } from "../../utils/isError";

interface InitialState {
    cartoon: CartoonInterface[],
    page: number,
    isLoading: boolean,
    error: null | string
}

export const getCartoon = createAsyncThunk<DataResponseType, number, { rejectValue: string }>(
    'cartoon/getCartoon',
    async (page, { rejectWithValue }) => {
        const resp = await usersAPI.getCartoon(page);
        if (resp.status === 200) return resp.data
        else return rejectWithValue("Server Error!")
    }
)

const initialState: InitialState = {
    cartoon: [],
    page: 1,
    isLoading: false,
    error: null
}

const cartoonSlice = createSlice({
    name: 'cartoon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCartoon.fulfilled, (state, { payload }) => {
                state.cartoon = payload.docs
                state.page = payload.page
                state.isLoading = false
            })
            .addCase(getCartoon.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })
    }
})

export default cartoonSlice.reducer