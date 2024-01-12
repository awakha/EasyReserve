import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import { AppThunk } from "../store";
import AuthService from "../../services/AuthService";
import { IUser } from "../../types/Types";

interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const loginAsync =
  (email: string, password: string): AppThunk =>
  async (dispatch) => {
    const response = await AuthService.login(email, password);
    if (response) {
      dispatch(setUser(response.data?.user));
      localStorage.setItem("token", response.data?.accessToken);
    }
  };

export const registerAsync =
  (username: string, email: string, password: string): AppThunk =>
  async (dispatch) => {
    const response = await AuthService.register(username, email, password);
    if (response) {
      dispatch(setUser(response.data?.user));
      localStorage.setItem("token", response.data?.accessToken);
    }
  };

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export default authSlice.reducer;
