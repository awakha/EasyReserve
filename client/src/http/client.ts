import axios from 'axios';
import { IAuthResponse } from '../types/Types';

const API_URL = import.meta.env.VITE_API_URL;

const client = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

client.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token');
  return config;
});

client.interceptors.response.use(
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
        const response = await client.post<IAuthResponse>('user/refresh', {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return client.request(originalRequest);
      } catch (e) {
        console.error(e);
      }
    }
  }
);

export default client;
