import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../http/client';

export const getRestaurants = createAsyncThunk(
  'rests/all',
  async (_, thunkAPI) => {
    try {
      const response = await client.get('/restaurants');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('An error occurred');
    }
  }
);

export const getRestaurantDetailsById = createAsyncThunk(
  'currentRest/byId',
  async (id, thunkAPI) => {
    try {
      const response = await client.get(`/restaurants/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('An error occurred');
    }
  }
);
