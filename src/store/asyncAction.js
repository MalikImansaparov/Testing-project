import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../routes/routes';

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async (_, {rejectWithValue}) => {
      try {
          const response = await axios.get(`https://my-json-server.typicode.com/carlosgustavo/api-react-book-dev-store/products`);
          return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
        }
  }
);

export const fetchFrontBooks = createAsyncThunk(
    'books/fetchFrontBooks',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(`${BASE_URL}/frontend`);
            return response.data.books;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

