import { createSlice } from "@reduxjs/toolkit";
import { ProductOb } from "@/pages/types";

interface productState{
  products: ProductOb[]
}

const products = require("../../../public/data/products.json");

const initialState: productState = {
  products: products.products
};

export const productsSlice = createSlice({
  name: 'changeOrder',
  initialState,
  reducers: {
    recentOrder(state){
      state.products = state.products.sort((a:ProductOb , b:ProductOb) => a.id - b.id);
    },
    rowPriceOrder(state){
      state.products = state.products.sort((a:ProductOb , b:ProductOb) => a.price - b.price);
    },
    highPriceOrder(state){
      state.products = state.products.sort((a:ProductOb , b:ProductOb) => b.price - a.price);
    }
  },
  extraReducers: (builder) => {}
});

export const { recentOrder, rowPriceOrder, highPriceOrder } = productsSlice.actions;
export default productsSlice.reducer;