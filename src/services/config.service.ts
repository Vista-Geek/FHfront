import axios from "axios";
import { getToken } from "../utils/localStorageItems";

const Authorization = getToken();
// VA EN EL .env
const LOCAL_URL = process.env.BASE_URL;

export const Axios = axios.create({
  baseURL: LOCAL_URL,
  headers: {
    Authorization,
  },
});
