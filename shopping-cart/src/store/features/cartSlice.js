import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart", //this is our state name or slice name
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart(state, action) {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
