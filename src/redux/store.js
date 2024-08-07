import carouselSlide from "./carouselSlide";
import productSlice from "./productSlice";
import { configureStore } from "@reduxjs/toolkit";
import showbarcandySlice from "./showbarcandySlice";


const store = configureStore({
    reducer:{
        product:productSlice,
        carousel: carouselSlide,
        barcandy: showbarcandySlice,
    }
})

export default store