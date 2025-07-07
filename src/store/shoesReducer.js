import { createSlice } from "@reduxjs/toolkit";
import data from "../shoes/data.json";

const initialState = {
  listProduct: data,
  productDetail: null,
  carts: [],
};

export const shoesSlice = createSlice({
  name: "shoesSlice",
  initialState,
  reducers: {
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    addToCart: (state, action) => {
      let newCarts = state.carts;
      // Check if the product exists
      const index = newCarts.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        state.carts = [...newCarts, { ...action.payload, quantity: 1 }];
        return;
      }
      // update quality
      newCarts[index].quantity += 1;
    },
    cartQuantity: (state, action) => {
      const { id, num } = action.payload;

      state.carts = state.carts.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          quantity: item.quantity + num,
        };
      });
    },
    cartDelete: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductDetail, addToCart, cartQuantity , cartDelete } = shoesSlice.actions;
export default shoesSlice.reducer;
