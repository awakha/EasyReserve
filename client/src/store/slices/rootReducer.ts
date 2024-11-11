import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import restaurantsSlice from './restaurantsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  rests: restaurantsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
