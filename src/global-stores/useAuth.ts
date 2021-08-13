import { combine, devtools } from "zustand/middleware";
import create from "zustand";
import { toast } from "react-toastify";
import { LoginData } from "@interfaces/auth.response";
import {
  checkUserLogged,
  login,
  logout,
  setTokenApi,
} from "src/services/auth.service";

export interface User {
  discord: boolean;
  idDiscord: string;
  rol: string;
  _id: string;
  name: string;
  lastname: string;
  email: string;
  nickname: string;
  worldName: string;
  FFXIVCharacter: string;
}
const userData: User | null = null;
const redirectKey = "@fh/redirect";
/* auth helpers */

export function setRedirect(redirect: string) {
  window.sessionStorage.setItem(redirectKey, redirect);
}

export function getRedirect(): string | null {
  return window.sessionStorage.getItem(redirectKey);
}

export function clearRedirect() {
  return window.sessionStorage.removeItem(redirectKey);
}

export const useAuth = create(
  devtools(
    combine(
      {
        auth: false,
        checking: false,
        userData,
      },
      (set) => ({
        startAuth: async (dataLogin: LoginData) => {
          try {
            const response = (await login(dataLogin)).data;
            const { data } = response;
            if (data) {
              set((state) => ({
                ...state,
                auth: !state.auth,
                checking: false,
                userData: null,
              }));
              setTokenApi(data.token);
            } else {
              toast.error("Unexpected Error");
            }
          } catch (error) {
            console.log("error in start Login");
            toast.error("Unexpected error");
          }
        },
        startLogout: () => {
          logout();
          set((state) => ({ ...state, userData, auth: false }));
        },
        startChecking: async () => {
          const user = await checkUserLogged();
          if (user) {
            set((state) => ({
              ...state,
              auth: true,
              checking: false,
              userData,
            }));
          } else {
            set((state) => ({
              ...state,
              auth: false,
              checking: false,
              userData,
            }));
          }
        },
      })
    )
  )
);
