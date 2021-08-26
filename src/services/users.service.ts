import { Axios } from "./config.service";
import { SingleUser } from "../interfaces/Users.interface";
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
    const localToken = await getToken();
    const { data } = await Axios.get<SingleUser>(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    });
    return data;
  } catch (error) {
    console.log("Error obtaining Single User");
    return null;
  }
};

export const editProfileUse = async (userId: string, user: SingleUser) => {
  try {
    const localToken = await getToken();
    const { data } = await Axios.put<SingleUser>(`/users/${userId}`, user, {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    });
    return data;
  } catch (error) {
    console.log("Error editing Single User");
    return null;
  }
};

export const deleteProfileUse = async (id: string) => {
  try {
    const localToken = await getToken();
    const { data } = await Axios.delete<string>(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    });
    return data;
  } catch (error) {
    console.log("Error obtaining Single User");
    return null;
  }
};
