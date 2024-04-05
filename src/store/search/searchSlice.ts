import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../type/movie";
import { usersAPI } from "../../API/api";
import { isError } from "../../utils/isError";

interface SearchInitialState {
    searchMovies: Movie[],
    isLoading: boolean,
    error: null | string,
    isExist: boolean
}

const initialState: SearchInitialState = {
    searchMovies: [],
    isLoading: false,
    error: null,
    isExist: false,
}

export const getSearchMovie = createAsyncThunk<Movie[], string, { rejectValue: string }>(
    'search/getSearchMovie',
    async (name, { rejectWithValue }) => {
        const res = await usersAPI.getSearch(name)
        if (res.status === 200) return res.data.docs
        else return rejectWithValue("Server Error!")
    }
)


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeIsExist: (state, action: PayloadAction<boolean>) => {
            console.log(action.payload);
            state.isExist = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSearchMovie.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getSearchMovie.fulfilled, (state, { payload }) => {
                state.searchMovies = payload
                state.isLoading = false
                state.isExist = true
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })
    }
})
export const { changeIsExist } = searchSlice.actions
export default searchSlice.reducer