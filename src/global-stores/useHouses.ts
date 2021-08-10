import create from "zustand";
import { devtools } from "zustand/middleware";
import { Houses } from "../interfaces/Houses.interface";
import { getHouses } from "../services/houses.service";

export const usePatients = create<any>(devtools((set) => ({})));
