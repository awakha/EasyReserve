import { AxiosResponse } from "axios";
import authAxiosInstance from "../http";
import { IAuthResponse } from "../types/Types";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    const response = await authAxiosInstance.post<IAuthResponse>("/login", {
      email,
      password,
    });
    if (response) {
      localStorage.setItem("token", response.data.accessToken);
    }

    return response;
  }

  static async register(
    username: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    const response = await authAxiosInstance.post<IAuthResponse>("/register", {
      username,
      email,
      password,
    });
    localStorage.setItem("token", response.data.accessToken);

    return response;
  }
}
