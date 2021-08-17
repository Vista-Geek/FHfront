import { Axios } from "./config.service";
import {
  Houses,
  GetHouseByFilterParams,
  FilterResponseI,
} from "../interfaces/Houses.interface";
import { getToken, USERTOKEN } from "../utils/localStorageItems";

export const getHouses = async () => {
  try {
    const { data } = await Axios.get<Houses>("/houses", {
      headers: {
        Authorization: getToken(USERTOKEN),
      },
    });
    return data;
  } catch (error) {
    console.log("Error obtaining houses", error);
    return null;
  }
};

export const getHousesByFilter = async (filter: GetHouseByFilterParams) => {
  try {
    const { data } = await Axios.get<FilterResponseI>(`/searches`, {
      headers: {
        Authorization: getToken(USERTOKEN),
      },
      params: filter,
    });
    return data;
  } catch (error) {
    console.log(error, "Error getting houses by filter");
    return null;
  }
};
