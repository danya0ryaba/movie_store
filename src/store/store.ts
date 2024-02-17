import { configureStore } from '@reduxjs/toolkit'
import filmsSlice from './filmsSlice'

export const store = configureStore({
    reducer: {
        films: filmsSlice
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


















































// export const getCategories = createAsyncThunk(
//     "categories/getCategories",
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/categories`)
//             return response.data
//         } catch (error) {
//             console.log(error.message);
//             return rejectWithValue(error)
//         }
//     }
// )

// const categoriesSlice = createSlice({
//     name: 'categories',
//     initialState: {
//         list: [],
//         activeCategory: 1,
//         isLoading: false
//     },
//     reducers: {
//         activeIdCategory: (state, { payload }) => {
//             state.activeCategory = payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getCategories.fulfilled, (state, { payload }) => {
//                 state.list = payload
//                 state.isLoading = true;
//             })
//             .addCase(getCategories.pending, (state, { payload }) => {
//                 state.isLoading = false;
//             })
//             .addCase(getCategories.rejected, (state, { payload }) => {
//                 // ВРОДЕ КАК ТЕПЕРЬ ОБРАБАТЫВАЕТСЯ ОШИБКА ЗАПРОСА ТУТ, А НЕ В createAsyncThunk
//                 state.isLoading = false
//             })
//     }
// })