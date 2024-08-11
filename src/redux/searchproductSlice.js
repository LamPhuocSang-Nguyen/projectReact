import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://jellybellywikiapi.onrender.com/api/Beans/";

const initialState = {
  findProduct: [],
  status: "start",
  error: null,
  totalPage: 12,
  currentPage: 1,
};

export const fetchProduct = createAsyncThunk(
  "findProduct/fetchProduct",
  async (page) => {
    const respone = await axios.get(`${url}?pageIndex=${page}&pageSize=32`);
    console.log(respone.data);
    return respone.data;
  }
);

export const searchProduct = createAsyncThunk(
  "findProduct/searchProduct",
  async (name) => {
    const respone = await axios.get(`${url}?flavorName=${name}`);
    console.log(respone.data);
    return respone.data;
  }
);

export const filterGluten = createAsyncThunk(
  "findProduct/filterGluten",
  async () => {
    const respone = await axios.get(`${url}?glutenFree=true`);
    console.log(respone.data);
    return respone.data;
  }
);

export const filterSugarFree = createAsyncThunk(
  "findProduct/filterSugarFree",
  async () => {
    const respone = await axios.get(`${url}?sugarFree=false`);
    console.log(respone.data);
    return respone.data;
  }
);

export const filterSeason = createAsyncThunk(
  "findProduct/filterSeason",
  async () => {
    const respone = await axios.get(`${url}?seasonal=true`);
    console.log(respone.data);
    return respone.data;
  }
);

export const filterKosher = createAsyncThunk(
  "findProduct/filterKosher",
  async () => {
    const respone = await axios.get(`${url}?kosher=true`);
    console.log(respone.data);
    return respone.data;
  }
);

const searchProductSlice = createSlice({
  name: "findProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetch
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.findProduct = action.payload;
      })
      //search
      .addCase(searchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.findProduct = action.payload;
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //filter gluten
      .addCase(filterGluten.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterGluten.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.findProduct = action.payload;
      })
      .addCase(filterGluten.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //filter sugarFree
      .addCase(filterSugarFree.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterSugarFree.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.findProduct = action.payload;
      })
      .addCase(filterSugarFree.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //filter seasonal
      .addCase(filterSeason.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterSeason.fulfilled, (state, action) => {
        state.status = "succeded";
        state.findProduct = action.payload;
      })
      .addCase(filterSeason.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //filter kosher
      .addCase(filterKosher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterKosher.fulfilled, (state, action) => {
        state.status = "succeded";
        state.findProduct = action.payload;
      })
      .addCase(filterKosher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchProductSlice.reducer;
