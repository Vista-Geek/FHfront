// import jwt from 'jwt-decode'; // import dependency
import { Axios } from "./config.service";
import { Response, LoginData, RegisterData } from "@interfaces/auth.response";
import { getToken, USERTOKEN } from "@utils/localStorageItems";

export const login = async (credential: LoginData) =>
  await Axios.post<Response>(`/auth/login`, credential);

export const register = async(credential: RegisterData) => 
  await Axios.post<Response>('/auth/register', credential);

export const logout = () => {
  try {
    localStorage.removeItem(USERTOKEN);
  } catch (error) {
    console.log(error, "Error in logout");
  }
};

export const setTokenApi = (token: string) => {
  try {
    localStorage.setItem(USERTOKEN, `${token}`);
  } catch (error) {
    console.log(error, "Error setTokenApi");
  }
};

export const checkUserLogged = () => !!localStorage.getItem(USERTOKEN);
