import carouselSlide from "./carouselSlide";
import productSlice from "./productSlice";
import { configureStore } from "@reduxjs/toolkit";
import showbarcandySlice from "./showbarcandySlice";
import searchProductSlice from "./searchproductSlice";


const store = configureStore({
    reducer:{
        product:productSlice,
        carousel: carouselSlide,
        barcandy: showbarcandySlice,
        findProduct: searchProductSlice,
    }
})

export default store