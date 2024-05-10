import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MovieInitialState {
    email: null | string,
    token: null | string,
    id: null | string,
}

const initialState: MovieInitialState = {
    email: null,
    token: null,
    id: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, { payload }: PayloadAction<MovieInitialState>) => {
            state.email = payload.email
            state.token = payload.token
            state.id = payload.id
        },
        removeAuth: (state) => {
            state.email = null
            state.token = null
            state.id = null
        },
    }
})

export const { setAuth, removeAuth } = authSlice.actions

export default authSlice.reducer