import { combine, devtools, persist } from "zustand/middleware";
import create from "zustand";
import { toast } from "react-toastify";
import { LoginData, RegisterData, User } from "@interfaces/auth.response";
import {
  checkUserLogged,
  login,
  logout,
  register,
  setTokenApi,
} from "src/services/auth.service";

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

interface AuthStateI {
  userData: User | null;
  auth: boolean;
  checking: boolean;
}

interface AuthMethods {
  startAuth: (dataLogin: LoginData) => Promise<void>;
  startRegister: (dataRegister: RegisterData) => Promise<void>;
  startLogout: () => void;
  startChecking: () => void;
  updateUserData: () => void;
}

export const useAuth = create(
  devtools(
    persist(
      combine<AuthStateI, AuthMethods>(
        {
          auth: false,
          checking: false,
          userData,
        },
        (set) => ({
          startAuth: async (dataLogin: LoginData) => {
            try {
              const response = (await login(dataLogin)).data.data;
              const { user } = response;
              if (user) {
                set((state) => ({
                  ...state,
                  auth: !state.auth,
                  checking: false,
                  userData: user,
                }));
                setTokenApi(response.token);
              }
            } catch (error) {
              error.response
                ? toast.error(error.response?.data.msg)
                : toast.error("SERVER ERROR");
            }
          },
          startRegister: async (dataRegister: RegisterData) => {
            try {
              const response = (await register(dataRegister)).data.data;
              const { user } = response;
              if (user) {
                set((state) => ({
                  ...state,
                  auth: !state.auth,
                  checking: false,
                  userData: user,
                }));
                setTokenApi(response.token);
              }
            } catch (error) {
              error.response
                ? toast.error(error.response?.data.msg)
                : toast.error("SERVER ERROR");
            }
          },
          startLogout: () => {
            logout();
            set((state) => ({ ...state, userData, auth: false }));
          },
          startChecking: () => {
            const user = checkUserLogged();
            if (user) {
              set((state) => ({
                ...state,
                auth: true,
                checking: false,
              }));
            } else {
              set((state) => ({
                ...state,
                auth: false,
                checking: false,
              }));
            }
          },
          updateUserData: (payload) => {
            set((state) => ({
              ...state,
              userData: payload,
            }));
          },
        })
      ),
      {
        name: "@fh/info",
      }
    )
  )
);
