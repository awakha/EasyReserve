import axios from 'axios';
import { IAuthResponse } from '../types/Types';

const API_URL = import.meta.env.VITE_API_URL;

const authorizedAxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

authorizedAxiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

authorizedAxiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await authorizedAxiosInstance.post<IAuthResponse>(
          '/user/refresh',
          {
            withCredentials: true,
          }
        );
        localStorage.setItem('token', response.data.accessToken);
        return authorizedAxiosInstance.request(originalRequest);
      } catch (e) {
        return error;
      }
    }

    return error;
  }
);

export default authorizedAxiosInstance;
