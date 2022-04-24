import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {fetchAllBooks, fetchFrontBooks} from '../asyncAction';

const frontSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      state.books = state.books.filter((todo) => todo.id !== action.payload.id);
    },
    // clearBook(state, action) {
    //   state.books = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFrontBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = 'idle';
        state.error = null;
      })
  },
});

export const { addBook,  removeBook, clearBook } = frontSlice.actions;
export default frontSlice.reducer;
