import { Axios } from "./config.service";
import {
  Houses,
  GetHouseByFilterParams,
  FilterResponseI,
} from "../interfaces/Houses.interface";
import { getToken } from "../utils/localStorageItems";

export const getHouses = async () => {
  try {
    const localToken = await getToken();
    const { data } = await Axios.get<Houses>("/houses", {
      headers: {
        Authorization: `Bearer ${localToken}`,
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
    const localToken = await getToken();
    const { data } = await Axios.get<FilterResponseI>(`/searches`, {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
      params: filter,
    });
    return data;
  } catch (error) {
    console.log(error, "Error getting houses by filter");
    return null;
  }
};
