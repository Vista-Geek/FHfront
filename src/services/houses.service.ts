import { Axios } from "./config.service";
import { Houses } from "../interfaces/Houses.interface";
import { getToken } from "../utils/localStorageItems";

export const getHouses = async () => {
  try {
    const { data } = await Axios.get<Houses>("/houses", {
      headers: {
        Authorization: getToken(),
      },
    });
    return data;
  } catch (error) {
    console.log("Error obtaining houses", error);
    return null;
  }
};
