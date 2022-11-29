// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//     total: 0,
//   },
//   reducers: {
//     addProduct(state, action) {
//       state.quantity += 1;
//       state.products.push(action.payload);
//       state.total += action.payload.data.price * action.payload.quantity;
//     },
//   },
// });

// export const { addProduct } = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (action.payload.color === "" || action.payload.size === "") {
        alert("vui lòng chọn size và color");
      } else {
        if (itemInCart) {
          itemInCart.quantity += action.payload.quantity;
        } else {
          state.cart.push({
            ...action.payload,
            quantity: action.payload.quantity,
          });
        }
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 10) {
        item.quantity = 10;
      } else {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) =>
          item.id !== action.payload.id ||
          (item.id === action.payload.id &&
            (item.color !== action.payload.color ||
              item.size !== action.payload.size))
      );

      state.cart = removeItem;
    },
    removeCart: (state, action) => {
      const removeCart = state.cart.filter(
        (item) => item.id === action.payload
      );
      state.cart = removeCart;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeCart,
} = cartSlice.actions;
