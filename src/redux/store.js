import carouselSlide from "./carouselSlide";
import productSlice from "./productSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        product:productSlice,
        carousel: carouselSlide
    }
})

export default store