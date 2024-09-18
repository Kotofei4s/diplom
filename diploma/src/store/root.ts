import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer, { CartState } from "./slices/cartSlice";
import authSliceReducer, { AuthState } from "./slices/authSlice";
import booksSliceReducer, { BooksState } from "./slices/booksSlice";

export interface ReduxStore {
  cart: CartState;
  auth: AuthState;
  books: BooksState;
}

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    auth: authSliceReducer,
    books: booksSliceReducer,
  },
});

export default store;
