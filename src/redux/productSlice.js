import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const url = "https://coffee.alexflipnote.dev/hjpM1TCc78U_coffee.jpg"

const initialState = {
    product: "",
    status: 'start',
    error: null,
    totalPage:30,
    currentPage:1
}
export const fetchProduct = createAsyncThunk('product/fetchProduct', async() =>{
    const respone = await axios.get(url);
    return respone.data;
});


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },

})

export default productSlice.reducer