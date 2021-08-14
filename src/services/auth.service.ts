// import jwt from 'jwt-decode'; // import dependency
import { Axios } from "./config.service";
import { LoginResponse, LoginData } from "@interfaces/auth.response";
import { getToken, USERTOKEN } from "@utils/localStorageItems";

export const login = async (credential: LoginData) =>
  await Axios.post<LoginResponse>(`/auth/login`, credential);

export const logout = () => {
  try {
    localStorage.removeItem(USERTOKEN);
  } catch (error) {
    console.log(error, "Error in logout");
  }
};

export const setTokenApi = (token: string) => {
  try {
    localStorage.setItem(USERTOKEN, `Bearer ${token}`);
  } catch (error) {
    console.log(error, "Error setTokenApi");
  }
};

export const checkUserLogged = () => !!localStorage.getItem(USERTOKEN);
