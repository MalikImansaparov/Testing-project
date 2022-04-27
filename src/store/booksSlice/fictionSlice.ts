import { createSlice } from '@reduxjs/toolkit';
import { fetchFictionBooks, fetchFictionId} from '../asyncAction';
import {stateTypes} from './types'

const initialState: stateTypes = {
  books: [],
  book: null,
  favCount: null,
  favorite: [],
};
const fictionSlice = createSlice({
  name: 'fiction',
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
          item.id === action.payload.id ? action.payload : item)
    },
    clearBook(state) {
      state.book = null;
    },
    removeFavorites(state, action) {
      state.books = state.books.filter((item) => item.id !== action.payload);
    },
    setFavorite(state, action){
      state.favorite.push(action.payload)
    },
    setItemInFavorite: (state, action) => {
      state.favorite.push(action.payload)
    },
    deleteItemFromFavorite: (state, action) => {
      state.favorite = state.favorite.filter(item => item.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchFictionBooks.fulfilled,
            (state, action) => {
              state.books = action.payload;
            })
    builder
        .addCase(fetchFictionId.fulfilled,
            (state, action) => {
              state.book = action.payload;
            })
  },
});

export const fictionActions = fictionSlice.actions;
export default fictionSlice.reducer;
