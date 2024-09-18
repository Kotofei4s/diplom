import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookCard } from "components/Card";

export interface CartsBookCard extends BookCard {
  quantity: number;
}

export interface BooksState {
  books: CartsBookCard[];
}

const initialState: BooksState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<CartsBookCard[]>) => {
      state.books = action.payload;
    },
  },
});

export const { addBooks } = booksSlice.actions;

export default booksSlice.reducer;
