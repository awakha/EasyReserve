import axios from "axios";
import { IAuthResponse } from "../types/Types";

const API_URL = "http://localhost:3000/user/";

const authAxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

authAxiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});

authAxiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      try {
        const response = await authAxiosInstance.post<IAuthResponse>(
          "/refresh",
          {
            withCredentials: true,
          }
        );
        localStorage.setItem("token", response.data.accessToken);
        return authAxiosInstance.request(originalRequest);
      } catch (e) {
        console.error(e);
      }
    }
  }
);

export default authAxiosInstance;
