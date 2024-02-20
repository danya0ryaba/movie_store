import { Movie } from './../../type/movie';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const getCategories = createAsyncThunk(
//     "categories/getCategories",
//     async (_, { rejectWithValue }) => {
//         try {

//         } catch (error) {

//         }
//     }
// )

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        list: [],
        isLoading: false,
        error: null
    },
    reducers: {},

    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getCategories.fulfilled, (state, { payload }) => {

    //         })
    //         .addCase(getCategories.pending, (state, { payload }) => {

    //         })
    //         .addCase(getCategories.rejected, (state, { payload }) => {

    //         })
    // }

})

export default movieSlice.reducer