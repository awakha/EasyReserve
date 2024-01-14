import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRestaurant, IReview } from '../../types/Types';
import { getRestaurants } from '../thunkActions';

interface IRestaurantsState {
  rests: IRestaurant[];
  reviews: IReview[];

  isLoading: boolean;
}

const initialState: IRestaurantsState = {
  rests: [],
  reviews: [],

  isLoading: false,
};

type payloadAction = {
  rests: IRestaurant[];
  reviews: IReview[];
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getRestaurants.fulfilled,
        (state, action: PayloadAction<payloadAction>) => {
          state.rests = action.payload.rests;
          state.reviews = action.payload.reviews;
          state.isLoading = false;
        }
      )
      .addCase(getRestaurants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default restaurantsSlice.reducer;
