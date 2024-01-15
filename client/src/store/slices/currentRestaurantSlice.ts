import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRestaurant } from '../../types/Types';

interface IRestaurantState {
  restaurants: IRestaurant;
  isLoading: boolean;
}

const initialState: IRestaurantState = {
  restaurants: {
    id: 0,
    name: '',
    description: '',
    address: '',
    images: [],
    cuisineId: 0,
    cityId: 0,
    timetableId: 0,
    avgScore: '',
    countReviews: '',
  },
  isLoading: false,
};

// export const restaurantsSlice = createSlice({
//   name: 'restaurants',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(
//         getRestaurants.fulfilled,
//         (state, action: PayloadAction<IRestaurant[]>) => {
//           state.restaurants = action.payload;
//           state.isLoading = false;
//         }
//       )
//       .addCase(getRestaurants.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getRestaurants.rejected, (state) => {
//         state.isLoading = false;
//       });
//   },
// });

export const currentRestaurantSlice = createSlice({
  name: 'currentRestaurant',
  initialState,
  reducers: {},
});
