import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartoonInterface } from "../../type/cartoon";
import { usersAPI } from "../../API/api";

interface InitialState {
    cartoon: CartoonInterface[],
    isLoading: boolean,
    error: null | string
}

export const getCartoon = createAsyncThunk<CartoonInterface[], undefined, { rejectValue: string }>(
    'cartoon/getCartoon',
    async (_, { rejectWithValue }) => {
        const resp = await usersAPI.getCartoon();
        if (resp.status === 200) return resp.data.docs
        else return rejectWithValue("Server Error!")
    }
)

const initialState: InitialState = {
    cartoon: [],
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
                state.cartoon = payload
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

const isError = (action: Action) => {
    return action.type.endsWith('rejected');
}

export default cartoonSlice.reducer