import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "./slices/rootReducer";
export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
