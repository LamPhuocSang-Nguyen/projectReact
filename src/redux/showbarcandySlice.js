import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const url = "https://jellybellywikiapi.onrender.com/api/Beans/";

const initialState = {
    barcandy: [],
    status: 'start',
    error: null,
    totalPage:12,
    currentPage:1
}
export const fetchProduct = createAsyncThunk('barcandy/fetchProduct', async(page) =>{
    const respone = await axios.get(`${url}?pageIndex=${page}&pageSize=50`);
    return respone.data;
});


const showbarcandySlice = createSlice({
    name: "barcandy",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.barcandy = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },

})

export default showbarcandySlice.reducer