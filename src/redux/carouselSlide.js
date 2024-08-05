import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carousel: [
    {
      bg: "#0a98b2",
      imgPath:
        "https://cdn-tp1.mozu.com/9046-m1/cms/files/b527c787-b144-4f4f-b8b8-7ff80a664571",
    },
    {
      bg: "#ae1533",
      imgPath:
        "https://cdn-tp1.mozu.com/9046-m1/cms/files/90ca9dcb-9729-45a1-85df-cab0c7a25029",
    },
    {
      bg: "#0e7534",
      imgPath:
        "https://cdn-tp1.mozu.com/9046-m1/cms/files/13b82559-15bc-45b9-8d1a-13a7d3dcfa6b",
    },
    {
      bg: "#f97d42",
      imgPath:
        "https://cdn-tp1.mozu.com/9046-m1/cms/files/1ae622c0-30f0-4c58-8ef2-6425c4be45c6",
    },
  ],
  currentBackground:"",
  status: "start",
  error: null,
};

const CarouselSlide = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setBackGround:(state, action)=>{
        state.currentBackground = action.payload;
        console.log(state.currentBackground)
    },

    getBackGround:(state)=>{
        return state.currentBackground;
    },
  },
});

export const {setBackGround,getBackGround} = CarouselSlide.actions;
export default CarouselSlide.reducer;
