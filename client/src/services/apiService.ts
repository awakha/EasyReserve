import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query';
import { RootState } from '../store/store';

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token');
    const refreshResult = await baseQuery('/refresh', api, extraOptions);

    if (refreshResult?.data) {
      const user = api.getState().authSlice.user;
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api;
