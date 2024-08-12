import carouselSlide from "./carouselSlide";
import productSlice from "./productSlice";
import { configureStore } from "@reduxjs/toolkit";
import showbarcandySlice from "./showbarcandySlice";
import searchProductSlice from "./searchproductSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer:{
        product:productSlice,
        carousel: carouselSlide,
        barcandy: showbarcandySlice,
        findProduct: searchProductSlice,
        cart:cartSlice,
    }
})

export default store