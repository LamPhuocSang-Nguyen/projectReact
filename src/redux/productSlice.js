import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const url = "https://jellybellywikiapi.onrender.com/api/Beans/";

const initialState = {
    product: [],
    status: 'start',
    error: null,
    totalPage:12,
    currentPage:1
}
export const fetchProduct = createAsyncThunk('product/fetchProduct', async(page) =>{
    const respone = await axios.get(`${url}?pageIndex=${page}&pageSize=18`);
    return respone.data;
});

export const searchProduct = createAsyncThunk('product/searchProduct', async(name)=>{
    const respone = await axios.get(`${url}?flavorName=${name}`);
    return respone.data;
})



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
                console.log(action.payload)
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },

})

export default productSlice.reducer