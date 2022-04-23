import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchAllBooks } from '../asyncAction';


const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    book: null,
  },
  reducers: {
    addBook(state, action) {
      state.books = action.payload;
    },
    removeBook(state, action) {
      state.books = state.books.filter((todo) => todo.id !== action.payload);
    },
    clearBook(state, action) {
      state.book = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = 'idle';
        state.error = null;
      })
  },
});

export const { addBook, getBook,  removeBook, clearBook } = bookSlice.actions;

export default bookSlice.reducer;
