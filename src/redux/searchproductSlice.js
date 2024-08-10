import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const url = "https://jellybellywikiapi.onrender.com/api/Beans/";

const initialState = {
    findProduct: [],
    status: 'start',
    error: null,
    totalPage:12,
    currentPage:1
}

export const fetchProduct = createAsyncThunk('findProduct/fetchProduct', async(page) =>{
    const respone = await axios.get(`${url}?pageIndex=${page}&pageSize=30`);
    return respone.data;
});



export const searchProduct = createAsyncThunk('findProduct/searchProduct', async(name)=>{
    const respone = await axios.get(`${url}?flavorName=${name}`);
    return respone.data;
});



const searchProductSlice = createSlice({
    name: "findProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.findProduct = action.payload;
            })
            .addCase(searchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.findProduct = action.payload;
            });
    },

})

export default searchProductSlice.reducer