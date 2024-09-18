import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookCard } from "components/Card";

export interface CartsBookCard extends BookCard {
  quantity: number;
}

export interface CartState {
  books: CartsBookCard[];
}

const initialState: CartState = {
  books: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<CartsBookCard>) => {
      const existingBook = state.books.find(
        (book) => book.title === action.payload.title
      );

      if (existingBook) {
        existingBook.quantity += 1;
      } else {
        state.books.push({ ...action.payload, quantity: 1 });
      }
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.title !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const book = state.books.find((book) => book.title === action.payload);
      if (book) {
        book.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const book = state.books.find((book) => book.title === action.payload);
      if (book && book.quantity > 1) {
        book.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.books = [];
    },
  },
});

export const {
  addBook,
  removeBook,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
