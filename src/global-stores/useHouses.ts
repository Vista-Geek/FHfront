import create from "zustand";
import { combine, devtools } from "zustand/middleware";
import { Houses, GetHouseByFilterParams } from "../interfaces/Houses.interface";
import { getHouses, getHousesByFilter } from "../services/houses.service";

interface HouseStateI {
  houses: Houses[] | [];
  loading: boolean;
  filter: GetHouseByFilterParams;
}

interface HouseMethodsI {
  getHouses: (filter: GetHouseByFilterParams) => Promise<void>;
}

export const useHouses = create(
  devtools(
    combine<HouseStateI, HouseMethodsI>(
      {
        houses: [],
        loading: true,
        filter: {
          size: "",
          location: "",
          server: "",
          dataCenter: "",
          typeOfSale: "",
        },
      },
      (set) => ({
        getHouses: async (filter: GetHouseByFilterParams) => {
          try {
            const response = await getHousesByFilter(filter);
            console.log(response);
            if (response) {
              set((state) => ({
                ...state,
                loading: false,
                houses: response.data.result,
              }));
            }
          } catch (error) {
            console.log("Error obtaining houses", error);
          }
        },
      })
    )
  )
);
