import { createSlice } from "@reduxjs/toolkit";
import { ProductDetailOb } from "@/pages/types";

interface CartState{
  carts: ProductDetailOb[]
}

const initialState: CartState = {
  carts: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action){
      state.carts = action.payload;
      
    },
    changeCart(state, action){
      state.carts = action.payload;
    },
    removeCart(state, action){
      
      state.carts = state.carts.filter(item => item.id !== action.payload);
    }
  },
  extraReducers: (builder) => {}
});

export const {addCart, changeCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;