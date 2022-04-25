import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, baseURL} from '../routes/routes';

export const fetchAllBooks = createAsyncThunk(
    'books/fetchAllBooks',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchFictionBooks = createAsyncThunk(
    'books/fetchBooks',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${baseURL}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchBookId = createAsyncThunk(
    'books/fetchBookId',
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchFictionId = createAsyncThunk(
    'books/fetchFictionId',
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${baseURL}/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
