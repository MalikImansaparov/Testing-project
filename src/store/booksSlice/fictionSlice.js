import { createSlice } from '@reduxjs/toolkit';
import { fetchFictionBooks, fetchFictionId} from '../asyncAction';

const fictionSlice = createSlice({
  name: 'fiction',
  initialState: {
    books: [],
    book: null,
    counts: null,
    favCount: null,
    favorite: []
  },
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
    setCount(state){
      state.counts = state.books.length
    },
    clearBook(state) {
      state.book = null;
    },
    favoriteCount(state){
      state.favCount = state.favorite.length
    },
    setFavorite(state, action){
      state.favorite.push(action.payload)

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

export const { addBook, editBook,  removeBook, clearBook, setCount, setFavorite } = fictionSlice.actions;

export default fictionSlice.reducer;
