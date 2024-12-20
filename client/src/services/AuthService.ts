import { AxiosError, AxiosResponse } from 'axios';
import authorizedAxiosInstance from '../http';
import { IAuthResponse } from '../types/Types';

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse | AxiosError>> {
    const response = await authorizedAxiosInstance.post<IAuthResponse>(
      '/user/login',
      {
        email,
        password,
      }
    );
    if (response && response.status == 200) {
      localStorage.setItem('token', response.data.accessToken);
    }

    return response;
  }

  static async logout() {
    await authorizedAxiosInstance.post<null>('/user/logout');
  }

  static async register(
    username: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse> | AxiosError> {
    const response = await authorizedAxiosInstance.post<IAuthResponse>(
      '/user/register',
      {
        username,
        email,
        password,
      }
    );
    if (response && response.status == 200) {
      localStorage.setItem('token', response.data.accessToken);
    }

    return response;
  }
}
