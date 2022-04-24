import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {fetchAllBooks, fetchBookId} from '../asyncAction';


const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    book: null,
    counts: null,
    favCount: null,
    favorite: null
  },
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      state.books = state.books.filter((todo) => todo.id !== action.payload);
    },
    editBook(state, action) {
      books: state.books.map((post) =>
          post.id === action.payload.id
              ? post.comments.map((comment) =>
                  comment.id === action.payload.id
                      ? action.payload
                      : comment
              )
              : post
      )
    },
    setCount(state){
      state.count = state.books.length
    },
    clearBook(state) {
      state.book = null;
    },
    favoriteCount(state){
      state.favCount = state.favorite.length
    },
    setFavorite(state, action){
      state.favorite = state.books.map((item) => item.id === action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.fulfilled,
          (state, action) => {
        state.books = action.payload;
      })
    builder
        .addCase(fetchBookId.fulfilled,
            (state, action) => {
          state.book = action.payload;
        })
  },
});

export const { addBook, editBook,  removeBook, clearBook, setCount, setFavorite } = bookSlice.actions;

export default bookSlice.reducer;
