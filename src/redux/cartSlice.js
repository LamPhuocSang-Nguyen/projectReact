import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  status: "start",
  error: null,
};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadItem: (state) => {
      state.cart = JSON.parse(localStorage.getItem("cart"))
    },
    addItem: (state, action) => {
      let index = state.cart.findIndex((item) => item.beanId === action.payload.beanId);

      if (index === -1) {
        let newProduct = { ...action.payload, quantity: 1 }
        state.cart.push(newProduct);
      } else {
        state.cart[index].quantity += 1;
      }
      // console.log(action.payload)
      // const temp = JSON.parse(JSON.stringify(state.cart))
      // console.log(temp)

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeItem: (state, action) => {
      let index = state.cart.findIndex((item) => item.id === action.payload);
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      }
    },

    clearCart: (state, action) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    setLoading: (state) => {
      state.status = "Loading";
    },

    setError: (state, action) => {
      state.status = "Faild";
      state.error = action.payload;
    },

    setLoaded: (state) => {
      state.status = "Success";
    },
  },
});
export const {addItem, removeItem, clearCart, setLoading, setError, setLoaded, loadItem}=cartSlice.actions;
export default cartSlice.reducer;
