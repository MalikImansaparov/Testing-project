import { createSlice } from '@reduxjs/toolkit';
import {fetchAllBooks, fetchBookId} from '../asyncAction';
import {stateTypes} from './types'

const initialState: stateTypes = {
  books: [],
  book: null,
  favCount: null,
  favorite: [],
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      state.books = state.books.filter((item) => item.id !== action.payload);
    },
    editBook(state, action) {
      state.books = state.books.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    clearBook(state) {
      state.book = null;
    },
    clearBooks(state) {
      state.books = [];
    },
    removeFavorite(state, action) {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
    },
    setItemInFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    deleteItemFromFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(fetchBookId.fulfilled, (state, action) => {
      state.book = action.payload;
    });
  },
});

export const bookActions= bookSlice.actions;
export default bookSlice.reducer;
