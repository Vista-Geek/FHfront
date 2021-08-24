import create from "zustand";
import { devtools } from "zustand/middleware";
import { Users, SingleUser } from "../interfaces/Users.interface";
import { getUsers, getUserById } from "../services/users.service";

export const useUsers = create<any>(devtools((set) => ({})));
