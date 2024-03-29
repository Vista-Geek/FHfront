import { Axios } from "./config.service";
import { Users, SingleUser } from "../interfaces/Users.interface";
import { getToken } from "../utils/localStorageItems";

export const getUsers = async () => {
  try {
    const { data } = await Axios.get<any>("/users", {
      headers: {
        Authorization: getToken(),
      },
    });
    return data;
  } catch (error) {
    console.log("Error obtaining USERS", error);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const { data } = await Axios.get<SingleUser>(`/users/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return data;
  } catch (error) {
    console.log("Error obtaining Single User");
    return null;
  }
};
