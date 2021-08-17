import axios from "axios";
import { getToken } from "../utils/localStorageItems";

const Authorization = getToken();
// VA EN EL .env
const LOCAL_URL = process.env.NEXT_PUBLIC_FH_API_URI;

export const Axios = axios.create({
  baseURL: LOCAL_URL,
  headers: {
    Authorization,
  },
});
